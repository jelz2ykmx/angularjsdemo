using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using LeonAPI.Models;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

namespace LeonAPI.Providers
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        private readonly string _publicClientId;
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;


        public ApplicationOAuthProvider(string publicClientId)
        {
            if (publicClientId == null)
            {
                throw new ArgumentNullException("publicClientId");
            }

            _publicClientId = publicClientId;
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var userManager = context.OwinContext.GetUserManager<ApplicationUserManager>();

            bool magicFlag = false;
            bool externalLoginFlag = false;
            bool addExternalFlag = false;
            string magictoken = "";
            string externallogin = "";
            if (context.Request.Headers["magictoken"] != null)
            {
                magictoken = context.Request.Headers["magictoken"].ToString();
            }
            else if (context.Request.Headers["externallogin"] != null)
            {
                externallogin = context.Request.Headers["externallogin"].ToString();
            }

            ApplicationUser user = null;
            if (magictoken.Trim() == "" && (externallogin == "null" || externallogin == ""))
            {
                user = await userManager.FindAsync(context.UserName, context.Password);
            }
            else
            {
                if (magictoken.Trim() != "")
                {
                   magicFlag = true;
                   if (await MagicLink(context.UserName, magictoken))
                   {
                        user = await userManager.FindByEmailAsync(context.UserName);
                   }
                   else
                   {
                        addExternalFlag = true;
                   }
                }
                else if (externallogin != "")
                {
                    var authKey = externallogin.Substring(1, externallogin.Length - 1);
                    var typeAuth = externallogin.Substring(0, 1);

                    var userId = "";
                    if (context.UserName != "")
                    {
                        user = await userManager.FindByEmailAsync(context.UserName);
                        if (user != null)
                        {
                            if (!await AddExternalLogin(typeAuth, authKey, user.Id))
                            {
                                user = null;
                                addExternalFlag = true;
                            }
                        }
                        else
                        {
                            addExternalFlag = true;
                        }
                    }
                    else
                    {
                        externalLoginFlag = true;
                        userId = await ExternalLogin(authKey, userId);
                        if (userId != "")
                        {
                            user = await userManager.FindByIdAsync(userId);
                        }
                    }
                }
            }

            if (user == null)
            {
                if (magicFlag)
                {
                    context.SetError("invalid_grant", "The magic link is invalid or has expired");
                }
                else if (externalLoginFlag)
                {
                    context.SetError("invalid_grant", "externallogin");
                }
                else if (addExternalFlag)
                {
                    context.SetError("invalid_grant", "Invalid Associated email");
                }
                else
                {
                    context.SetError("invalid_grant", "The user name or password is incorrect.");
                }
                return;
            }

            ClaimsIdentity oAuthIdentity = await user.GenerateUserIdentityAsync(userManager,
               OAuthDefaults.AuthenticationType);
            ClaimsIdentity cookiesIdentity = await user.GenerateUserIdentityAsync(userManager,
                CookieAuthenticationDefaults.AuthenticationType);

            AuthenticationProperties properties = CreateProperties(user.UserName);
            AuthenticationTicket ticket = new AuthenticationTicket(oAuthIdentity, properties);
            context.Validated(ticket);
            context.Request.Context.Authentication.SignIn(cookiesIdentity);
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            // Resource owner password credentials does not provide a client ID.
            if (context.ClientId == null)
            {
                context.Validated();
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientRedirectUri(OAuthValidateClientRedirectUriContext context)
        {
            if (context.ClientId == _publicClientId)
            {
                Uri expectedRootUri = new Uri(context.Request.Uri, "/");

                if (expectedRootUri.AbsoluteUri == context.RedirectUri)
                {
                    context.Validated();
                }
            }

            return Task.FromResult<object>(null);
        }

        public static AuthenticationProperties CreateProperties(string userName)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "userName", userName }
            };
            return new AuthenticationProperties(data);
        }

        public async Task<bool> MagicLink(String email, String token)
        {
            bool flag = false;
            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                await connection1.OpenAsync();

                int magic = await GetMagicToken(connection1, email, token);

                if (magic > 0)
                {
                    await ChangeFirstTime(connection1, email);
                    flag = true;
                }

            }

            return flag;
        }
        
        private async Task<int> GetMagicToken(SqlConnection connection1, String email, String token)
        {
            String commandText1 = "SELECT count(id) FROM Users WHERE UPPER(email) = @email and guid = @token";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@email", SqlDbType.VarChar);
            parameter.Value = email.ToUpper();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@token", SqlDbType.VarChar);
            parameter.Value = token;
            command1.Parameters.Add(parameter);

            int count = (int) await command1.ExecuteScalarAsync();
            
            return count;
        }

        private async Task ChangeFirstTime(SqlConnection connection1, String email)
        {

            String commandText1 = "update users set firsttime = 1, guid = '' " +
                                  "where UPPER(email) = @email ";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@email", SqlDbType.VarChar);
            parameter.Value = email.ToUpper();
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        public async Task<string> ExternalLogin(String token, string userId)
        {
            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                await connection1.OpenAsync();

                userId = await GetExternalLogin(connection1, token, userId);
            }

            return userId;
        }

        private async Task<string> GetExternalLogin(SqlConnection connection1, String token, string userId)
        {
            String commandText1 = "SELECT UserId FROM AspNetUserLogins " +
                                  "WHERE ProviderKey = @token";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@token", SqlDbType.VarChar);
            parameter.Value = token;
            command1.Parameters.Add(parameter);
            
            SqlDataReader reader = await command1.ExecuteReaderAsync();
            
            while (await reader.ReadAsync())
            {
                userId = reader.GetString(0);
            }
            
            return userId;
        }

        public async Task<bool> AddExternalLogin(String LoginProvider, String token, String UserId)
        {
            var authType = "facebook";
            if (LoginProvider == "G")
            {
                authType = "google";
            }

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                await connection1.OpenAsync();

                String commandText1 = "insert into AspNetUserLogins (LoginProvider,ProviderKey,UserId) values(@LoginProvider,@ProviderKey,@UserId)";

                SqlCommand command1 = new SqlCommand(commandText1, connection1);

                SqlParameter parameter = new SqlParameter("@LoginProvider", SqlDbType.VarChar);
                parameter.Value = authType;
                command1.Parameters.Add(parameter);

                parameter = new SqlParameter("@ProviderKey", SqlDbType.VarChar);
                parameter.Value = token;
                command1.Parameters.Add(parameter);

                parameter = new SqlParameter("@UserId", SqlDbType.VarChar);
                parameter.Value = UserId;
                command1.Parameters.Add(parameter);

                await command1.ExecuteNonQueryAsync();
                
            }

            return true;
        }

    }
}