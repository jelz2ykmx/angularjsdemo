using LeonAPI.Models;
using LeonModels;
using LeonModels.Admin;
using LeonModels.Capture;
using LeonModels.Catalogs;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Transactions;
using System.Web.Http;


namespace LeonAPI.Controllers.Admin
{
    [Authorize]
    [RoutePrefix("api/Profiles")]
    public class ProfilesController : ApiController
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        [Authorize(Roles = "Administrador")]
        [Route("AddUpdate")]
        public async Task<HttpResponseMessage> AddUpdate(RegisterUserModel model)
        {
            Thread.CurrentThread.CurrentCulture = culture;
            string password = "";
            bool sendEmail = false;

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();

                    string id = await SearchAccount(connection1, model.email);

                    if (id == "")
                    {
                        password = model.password;
                        id = await CreateAccount(model.role, model.email, password);
                        if (id == "0")
                        {
                            throw new Exception("Can not create an user account");
                        } else
                        {
                            await CreateUserData(connection1, id, model.email, model.firstName, model.lastName, model.phone, model.dailyPlan);
                            await CreateLocationData(connection1, model, id);
                            sendEmail = true;
                        }
                    } else
                    {
                        throw new Exception("Email already exist");
                    }

                }

            }
            catch (TransactionAbortedException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            if (sendEmail)
            {
                String message ="<p class=MsoNormal style='margin-top:5.0pt;margin-right:18.0pt;margin-bottom:" +
                                "5.0pt;margin-left:18.0pt;line-height:normal;mso-layout-grid-align:none;" +
                                "text-autospace:none'><span lang=EN-US style='font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                "mso-ansi-language:EN-US'>Thank you for participating in our early Beta program! " +
                                "The<span class=SpellE>LeON</span> team is busy working around the clock to " +
                                "build the best product for our users, and your participation(and feedback) are " +
                                "an important part of the process. If you are receiving this email, it means you " +
                                "have gone through our Assessment program. To access, please " +
                                "click on the following: <a href = 'http://app.goleon.com/leonclient' > http://app.goleon.com/leonclient</a>" +
                                "<br>" +
                                "<br>" +
                                "Username: " + model.email + "<o:p></o:p></span></p>" +
                                "<p class=MsoNormal style = 'margin-top:5.0pt;margin-right:0cm;margin-bottom:5.0pt;" +
                                "margin-left:0cm;text-indent:18.0pt;line-height:normal;mso-layout-grid-align:" +
                                "none;text-autospace:none'><span class=GramE><span lang=EN-US style='font-size:" +
                                "12.0pt;font-family:'Times New Roman',serif;mso-ansi-language:EN-US'>password</span></span><span" +
                                "lang=EN-US style = 'font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                "mso-ansi-language:EN-US'>: <span class=SpellE>" + password + "</span><o:p></o:p></span></p>" +
                                 "<br>" +
                                "<br>" +
                                "Please feel free to contact me directly with questions or feedback. </span><span" +
                                "style = 'font-size:12.0pt;font-family:'Times New Roman',serif' > We value your " +
                                "input. <br>" +
                                "<br>" +
                                "Sincerely,<br>" +
                                "Coach<o:p></o:p></span></p>";
                await SendEmail(model.email, message);
            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK);

        }

        private async Task<string> SearchAccount(SqlConnection connection1, String email)
        {
            string id = "";

            String commandText1 = "select id, email from AspNetUsers " +
                                  "where UPPER(email) = @email ";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@email", SqlDbType.VarChar);
            parameter.Value = email.ToUpper();
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                id = reader.GetString(0);
            }

            reader.Close();

            return id;
        }

        private async Task<string> getEmailUser(SqlConnection connection1, String id)
        {
            string emailUser = "";
            String commandText1 = "SELECT email FROM AspNetUsers WHERE ID = @ID";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@ID", SqlDbType.VarChar);
            parameter.Value = id;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                emailUser = reader.GetString(0);
            }

            reader.Close();

            return emailUser;
        }

        private async Task<bool> ExisteUserData(SqlConnection connection1, String id)
        {
            String commandText1 = "SELECT ID FROM USERS WHERE ID = @ID";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@ID", SqlDbType.VarChar);
            parameter.Value = id;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();
            bool existeUserData = false;

            while (await reader.ReadAsync())
            {
                id = reader.GetString(0);
                existeUserData = true;
            }

            reader.Close();

            return existeUserData;
        }
        
        private async Task<string> CreateAccount(String role, String email, string password)
        {
            try
            {
                var UserManager = Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
                var userByEmail = UserManager.FindByEmail<ApplicationUser, string>(email);

                if (userByEmail == null)
                {

                    var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new ApplicationDbContext()));

                    var roleU = new IdentityRole();
                    if (role == "0")
                    {
                        role = "Administrador";
                    }
                    else if (role == "1")
                    {
                        role = "Provider";

                    }
                    else if (role == "2")
                    {
                        role = "User";

                    }

                    if (!roleManager.RoleExists(role))
                    {
                        roleU = new IdentityRole();
                        roleU.Id = Guid.NewGuid().ToString();
                        roleU.Name = role;
                        IdentityResult resultRole = await roleManager.CreateAsync(roleU);
                        if (!resultRole.Succeeded)
                        {
                            throw new Exception("Could not create a user role");
                        }
                    }
                    else
                    {
                        await Task.Run(() =>
                        {
                            roleU = roleManager.Roles.Where(r => r.Name.Equals(role, StringComparison.CurrentCultureIgnoreCase)).FirstOrDefault();
                        });
                    }


                    var user = new ApplicationUser() { UserName = email, Email = email };

                    if (role != "Administrador")
                    {
                        user.LockoutEnabled = true;
                        user.AccessFailedCount = 3;
                    }

                    IdentityUserRole roleUser = new IdentityUserRole();
                    roleUser.RoleId = roleU.Id;
                    roleUser.UserId = user.Id;
                    user.Roles.Add(roleUser);


                    IdentityResult result = await UserManager.CreateAsync(user, password);

                    if (!result.Succeeded)
                    {
                        ErrorModel _errors = new ErrorModel();
                        foreach (string error in result.Errors)
                        {
                            _errors.message += error;
                        }
                        throw new Exception(_errors.message);
                    }

                    return user.Id;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return "0";

        }

        private async Task CreateUserData(SqlConnection connection1, String id, String email, String firstname, String lastname, String phone, bool dailyplan)
        {
            String commandText1 = "INSERT INTO users " +
                                  "(id, email, firstname, lastname, phone, dailyplan) " +
                                  "values (@id, @email, @firstname, @lastname, @phone, @dailyplan)";


            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            parameter.Value = id;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@email", SqlDbType.VarChar);
            parameter.Value = email;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@firstname", SqlDbType.VarChar);
            parameter.Value = firstname;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastname", SqlDbType.VarChar);
            parameter.Value = lastname;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@phone", SqlDbType.VarChar);
            if (phone == null)
            {
                phone = "";
            }
            parameter.Value = phone;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dailyplan", SqlDbType.Bit);
            parameter.Value = dailyplan;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task CreateLocationData(SqlConnection connection1, RegisterUserModel registerUser, String id)
        {
            SqlCommand command1 = new SqlCommand();
            command1.Connection = connection1;
            StringBuilder sqlBuilder = new StringBuilder();
            sqlBuilder.Append("INSERT INTO LocationsUser (CityId, UserId, Status) VALUES ");

            var i = 1;
            LocationsUserModel lastItem = registerUser.locations[registerUser.locations.Count - 1];
            foreach (LocationsUserModel location in registerUser.locations)
            {
                var paramCityId = "@paramCityId" + i.ToString();
                var paramUserId = "@paramUserId" + i.ToString();
                var paramStatus = "@statusValue" + i.ToString();
                if (location != lastItem)
                {
                    sqlBuilder.AppendFormat(" ( {0}, {1}, {2} ), ", paramCityId, paramUserId, paramStatus);
                } else
                {
                    sqlBuilder.AppendFormat(" ( {0}, {1}, {2} ) ", paramCityId, paramUserId, paramStatus);
                }
                command1.Parameters.AddWithValue(paramCityId, location.cityId);
                command1.Parameters.AddWithValue(paramUserId, id);
                command1.Parameters.AddWithValue(paramStatus, true);
                i++;
            }
            command1.CommandText = sqlBuilder.ToString();

            await command1.ExecuteNonQueryAsync();
        }
        
        private async Task<RegisterUserModel> queryGetProfile(SqlConnection connection1, String id)
        {
            String commandText1 = "SELECT AR.Name as role, U.firstname, U.lastname, U.phone, U.email, U.dailyplan, U.id FROM Users U " +
                                  "INNER JOIN AspNetUserRoles AUR ON AUR.UserId = U.id " +
                                  "INNER JOIN AspNetRoles AR ON AR.Id = AUR.RoleId " +
                                  "WHERE U.id = @id";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);
            RegisterUserModel registerUser = new RegisterUserModel();

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            parameter.Value = id;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                registerUser.role = reader.GetString(0);
                registerUser.firstName = reader.GetString(1);
                registerUser.lastName = reader.GetString(2);
                if (reader.IsDBNull(3))
                {
                    registerUser.phone = "";
                } else
                {
                    registerUser.phone = reader.GetString(3);
                }
                registerUser.email = reader.GetString(4);
                if (!reader.IsDBNull(5))
                {
                    registerUser.dailyPlan = reader.GetBoolean(5);
                }
                
                registerUser.id = reader.GetString(6);
            }

            reader.Close();

            return registerUser;
        }

        private async Task<List<LocationsUserModel>> queryGetLocations(SqlConnection connection1, String id)
        {
            String commandText1 = "SELECT Cities.City, State.ShortName as stateShort, Country.ShortName as shortCountry, Cities.ID, LocationsUser.id, LocationsUser.Status  FROM LocationsUser " +
                                  "INNER JOIN Cities ON Cities.ID = LocationsUser.CityId " +
                                  "INNER JOIN State ON Cities.StateId = State.ID " +
                                  "INNER JOIN Country ON State.CountryId = Country.ID " +
                                  "WHERE UserId = @id";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);
            List<LocationsUserModel> locations = new List<LocationsUserModel>();

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            parameter.Value = id;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                LocationsUserModel location = new LocationsUserModel();
                location.name = reader.GetString(0);
                location.shortState = reader.GetString(1);
                location.shortCountry = reader.GetString(2);
                location.cityId = reader.GetInt32(3);
                location.id = reader.GetInt32(4);
                location.status = reader.GetBoolean(5);
                locations.Add(location);
            }

            reader.Close();

            return locations;
        }
        
        private async Task SendEmail(string email, string messageHtml)
        {
            try
            {
                String _semail = ConfigurationManager.AppSettings["email"];
                string _password = ConfigurationManager.AppSettings["password"];
                string _server = ConfigurationManager.AppSettings["server"];
                int _port = Convert.ToInt32(ConfigurationManager.AppSettings["port"]);

                SmtpClient SmtpServer = new SmtpClient(_server);
                SmtpServer.UseDefaultCredentials = false;
                SmtpServer.Credentials = new System.Net.NetworkCredential(_semail, _password);

                MailMessage mail = new MailMessage();
                mail.From = new MailAddress(_semail);
                mail.To.Add(email);

                SmtpServer.Port = _port;
                SmtpServer.EnableSsl = true;

                mail.Body = messageHtml;

                mail.IsBodyHtml = true;
                mail.Subject = "Go Leon";

                await SmtpServer.SendMailAsync(mail);

            }
            catch (Exception ex)
            {
                //throw new Exception(ex.Message);
            }
        }

        [Route("Queryprofile")]
        public async Task<HttpResponseMessage> Queryprofile(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;
            RegisterUserModel registerUser = new RegisterUserModel();
            String id = varSearchModel.parameters[0];

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();

                      registerUser = await queryGetProfile(connection1, id);
                      registerUser.locations = await queryGetLocations(connection1, id);

                }

            }
            catch (TransactionAbortedException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, registerUser);

        }

        [Route("Update")]
        public async Task<HttpResponseMessage> Update(RegisterUserModel model)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();

                    //string id = await SearchAccount(connection1, model.email);

                    if (await ExisteUserData(connection1, model.id))
                    {
                        await UpdateUserData(connection1, model.id, model);
                        if (model.locations.Count > 0)
                        {
                            await UpdateLocationData(connection1, model, model.id);
                        }
                    } else
                    {
                        model.email = await getEmailUser(connection1, model.id);
                        await CreateUserData(connection1, model.id, model.email, model.firstName, model.lastName, model.phone, model.dailyPlan);
                        if (model.locations.Count > 0)
                        {
                            await CreateLocationData(connection1, model, model.id);
                        }
                    }

                }

            }
            catch (TransactionAbortedException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK);

        }

        private async Task UpdateUserData(SqlConnection connection1, String id, RegisterUserModel registerUser)
        {
            String commandText1 = "UPDATE Users " +
                                  "SET email = @email, " +
                                  "firstname = @firstName, " +
                                  "lastname = @lastName, " +
                                  "phone = @phone, " +
                                  "dailyplan = @dailyplan " +
                                  "WHERE ID = @id";


            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            parameter.Value = id;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@email", SqlDbType.VarChar);
            parameter.Value = registerUser.email;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@firstname", SqlDbType.VarChar);
            parameter.Value = registerUser.firstName;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastname", SqlDbType.VarChar);
            parameter.Value = registerUser.lastName;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@phone", SqlDbType.VarChar);
            parameter.Value = registerUser.phone;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dailyplan", SqlDbType.Bit);
            parameter.Value = registerUser.dailyPlan;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task UpdateLocationData(SqlConnection connection1, RegisterUserModel registerUser, String id)
        {
            SqlCommand command1 = new SqlCommand();
            command1.Connection = connection1;
            StringBuilder sqlBuilder = new StringBuilder();
            sqlBuilder.Append("INSERT INTO LocationsUser (CityId, UserId, Status) VALUES ");

            var i = 1;
            bool flagInsert = false;
            LocationsUserModel lastItem = registerUser.locations[registerUser.locations.Count - 1];
            foreach (LocationsUserModel location in registerUser.locations)
            {
                if (location.id == 0) //Es un insert
                {
                    var paramCityId = "@paramCityId" + i.ToString();
                    var paramUserId = "@paramUserId" + i.ToString();
                    var paramStatusLocation = "@paramStatusLocation" + i.ToString();
                    sqlBuilder.AppendFormat(" ( {0}, {1}, {2} ),", paramCityId, paramUserId, paramStatusLocation);
                    command1.Parameters.AddWithValue(paramCityId, location.cityId);
                    command1.Parameters.AddWithValue(paramUserId, id);
                    command1.Parameters.AddWithValue(paramStatusLocation, location.status);
                    flagInsert = true;
                } else //Es un update
                {
                    await UpdateSingleLocationData(connection1, id, location);
                }
                i++;
            }
            if (flagInsert)
            {
                String sqlString = sqlBuilder.ToString();
                sqlString = sqlString.Remove(sqlString.Length - 1);
                command1.CommandText = sqlString;
                await command1.ExecuteNonQueryAsync();
            }
        }

        private async Task UpdateSingleLocationData(SqlConnection connection1, String id, LocationsUserModel location)
        {
            String commandText1 = "UPDATE LocationsUser " +
                                  "SET CityId = @cityId, " +
                                  "Status = @Status " +
                                  "WHERE ID = @id";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            parameter.Value = location.id;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@cityId", SqlDbType.Int);
            parameter.Value = location.cityId;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Status", SqlDbType.Bit);
            parameter.Value = location.status;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        [AllowAnonymous]
        [Route("GenerateGuid")]
        public async Task<HttpResponseMessage> GenerateGuid(ChangePasswordModel model)
        {
            string guid = "";
            bool flagFindUser = false;

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();

                    string id = await SearchAccount(connection1, model.email);
                    if (id != "")
                    {
                        guid = Guid.NewGuid().ToString().Replace("-", String.Empty) + 
                               Guid.NewGuid().ToString().Replace("-", String.Empty) + 
                               Guid.NewGuid().ToString().Replace("-", String.Empty) + 
                               Guid.NewGuid().ToString().Replace("-", String.Empty) + 
                               Guid.NewGuid().ToString().Replace("-", String.Empty) + 
                               Guid.NewGuid().ToString().Replace("-", String.Empty) + 
                               Guid.NewGuid().ToString().Replace("-", String.Empty) +
                               Guid.NewGuid().ToString().Replace("-", String.Empty);

                        await InsertGuid(connection1, guid, id);
                        flagFindUser = true;
                    }
                }

            }
            catch (TransactionAbortedException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            if (flagFindUser)
            {
                String message = "";

                /*
                if (model.mobileapp)
                {
                    message = "<p class=MsoNormal style='margin-top:5.0pt;margin-right:18.0pt;margin-bottom:" +
                                      "5.0pt;margin-left:18.0pt;line-height:normal;mso-layout-grid-align:none;" +
                                      "text-autospace:none'><span lang=EN-US style='font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                      "mso-ansi-language:EN-US'>Use this code to reset your password, the code expire in 10 minutes" +
                                      " " +
                                      "<br>" +
                                      "<br>" +
                                      "<p class=MsoNormal style = 'margin-top:5.0pt;margin-right:0cm;margin-bottom:5.0pt;" +
                                      "margin-left:0cm;text-indent:18.0pt;line-height:normal;mso-layout-grid-align:" +
                                      "none;text-autospace:none'><span class=GramE><span lang=EN-US style='font-size:" +
                                      "12.0pt;font-family:'Times New Roman',serif;mso-ansi-language:EN-US'>Code</span></span><span" +
                                      "lang=EN-US style = 'font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                      "mso-ansi-language:EN-US'>: <span class=SpellE><br>" + guid + "</span><o:p></o:p></span></p>" +
                                       "<br>" +
                                      "<br>" +
                                      "Please feel free to contact me directly with questions or feedback. </span><span" +
                                      "style = 'font-size:12.0pt;font-family:'Times New Roman',serif' > We value your " +
                                      "input. <br>" +
                                      "<br>" +
                                      "Sincerely,<br>" +
                                      "Coach<o:p></o:p></span></p>";
                }
                else
                {
                */
                    if (model.mobileapp)
                    {
                        model.magichost += "/magiclink.html?" + model.email + "&" + guid;
                    }
                    else
                    {
                        model.magichost += "#/Login" + "?email=" + model.email + "&token=" + guid;
                    }
                    message = "<p class=MsoNormal style='margin-top:5.0pt;margin-right:18.0pt;margin-bottom:" +
                                      "5.0pt;margin-left:18.0pt;line-height:normal;mso-layout-grid-align:none;" +
                                      "text-autospace:none'><span lang=EN-US style='font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                      "mso-ansi-language:EN-US'>Click on the magic link that'll sing you in." +
                                      " " +
                                      "<br>" +
                                      "<br>" +
                                      "<a href='" + model.magichost + "'>" + model.magichost + "</a>" +
                                      "<br>" +
                                      "<br>" +
                                      "Please feel free to contact me directly with questions or feedback. </span><span" +
                                      "style = 'font-size:12.0pt;font-family:'Times New Roman',serif' > We value your " +
                                      "input. <br>" +
                                      "<br>" +
                                      "Sincerely,<br>" +
                                      "Coach<o:p></o:p></span></p>";
                //}

                await SendEmail(model.email, message);
            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, flagFindUser);

        }

        private async Task InsertGuid(SqlConnection connection1, String guid, String userId)
        {
            String commandText1 = "UPDATE users " +
                                  "SET GUID = @guid " +
                                  "WHERE id = @id";


            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@guid", SqlDbType.VarChar);
            parameter.Value = guid;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@id", SqlDbType.VarChar);
            parameter.Value = userId;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }
        
        [Route("ChangePasswordRecover")]
        [AllowAnonymous]
        public async Task<HttpResponseMessage> ChangePasswordRecover(RecoveryModel model)
        {
            bool flagFindGuid = false;

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();

                    string userId = await getIdUserByGuid(connection1, model.recoverCode);

                    if (userId != "")
                    {
                        var UserManager = Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
                        IdentityResult result = await UserManager.RemovePasswordAsync(userId);
                        if (result.Succeeded)
                        {
                            result = await UserManager.AddPasswordAsync(userId, model.newPassword);
                        }

                        if (!result.Succeeded)
                        {
                            ErrorModel _errors = new ErrorModel();
                            foreach (string error in result.Errors)
                            {
                                _errors.message = error;
                            }
                            return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
                        }

                        await ChangeFirstTime(connection1, userId);

                        flagFindGuid = true;
                    }

                }

            }
            catch (TransactionAbortedException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, flagFindGuid);

        }

        private async Task<string> getIdUserByGuid(SqlConnection connection1, String guid)
        {
            string id = "";
            String commandText1 = "SELECT id FROM Users WHERE guid = @guid";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@guid", SqlDbType.VarChar);
            parameter.Value = guid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                id = reader.GetString(0);
            }

            reader.Close();

            return id;
        }

        private async Task ChangeFirstTime(SqlConnection connection1, String userId)
        {
          
            String commandText1 = "update users set firsttime = 1, guid = '' " +
                                  "where id = @userId ";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@userId", SqlDbType.VarChar);
            parameter.Value = userId;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        /*
    private async Task<bool> SearchUser(SqlConnection connection1, String email)
    {
        bool flag = false;

        String commandText1 = "select email from users " +
                              "where UPPER(email) = @email ";

        SqlCommand command1 = new SqlCommand(commandText1, connection1);

        SqlParameter parameter = new SqlParameter("@email", SqlDbType.VarChar);
        parameter.Value = email.ToUpper();
        command1.Parameters.Add(parameter);

        SqlDataReader reader = await command1.ExecuteReaderAsync();

        while (await reader.ReadAsync())
        {
            flag = true;
        }

        reader.Close();

        return flag;
    }
    */


        /*
        private async Task<bool> SearchUserByGuid(SqlConnection connection1, String guid)
        {
            bool flag = false;

            String commandText1 = "select email from users " +
                                  "where guid = @guid ";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@guid", SqlDbType.VarChar);
            parameter.Value = guid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                flag = true;
            }

            reader.Close();

            return flag;
        }
        */


        [Route("ChangePassword")]
        public async Task<HttpResponseMessage> ChangePassword(ChangePasswordModel model)
        {
            //if (model.forgotPasswordOrFirstTime == 1)
            //{
            //    //1 forgot 2 Firsttime
            //    //consultar el email para obtener el user id
            //    //string id = await SearchAccount(connection1, model.email);
            //    //generar el password random
            //    //agregarlos al model
            //}
            var UserManager = Request.GetOwinContext().GetUserManager<ApplicationUserManager>();

            IdentityResult result = await UserManager.RemovePasswordAsync(model.userId);
            if (result.Succeeded)
            {
                result = await UserManager.AddPasswordAsync(model.userId, model.NewPassword);
            }
           
            if (!result.Succeeded)
            {
                ErrorModel _errors = new ErrorModel();
                foreach (string error in result.Errors)
                {
                    _errors.message = error;
                }
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            else
            {
                //if (model.forgotPasswordOrFirstTime == 2)
                //{
                //    //actualizar el first time a 1
                //}
                if (User.IsInRole("Administrador"))
                {
                    String message = "<p class=MsoNormal style='margin-top:5.0pt;margin-right:18.0pt;margin-bottom:" +
                                "5.0pt;margin-left:18.0pt;line-height:normal;mso-layout-grid-align:none;" +
                                "text-autospace:none'><span lang=EN-US style='font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                "mso-ansi-language:EN-US'>Your password have been reset! To access, please " +
                                "click on the following: <a href = 'http://app.goleon.com/leonclient' > http://app.goleon.com/leonclient</a>" +
                                "<br>" +
                                "<br>" +
                                "Username: " + model.email + "<o:p></o:p></span></p>" +
                                "<p class=MsoNormal style = 'margin-top:5.0pt;margin-right:0cm;margin-bottom:5.0pt;" +
                                "margin-left:0cm;text-indent:18.0pt;line-height:normal;mso-layout-grid-align:" +
                                "none;text-autospace:none'><span class=GramE><span lang=EN-US style='font-size:" +
                                "12.0pt;font-family:'Times New Roman',serif;mso-ansi-language:EN-US'>password</span></span><span" +
                                "lang=EN-US style = 'font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                "mso-ansi-language:EN-US'>: <span class=SpellE>" + model.NewPassword + "</span><o:p></o:p></span></p>" +
                                 "<br>" +
                                "<br>" +
                                "Please feel free to contact me directly with questions or feedback. </span><span" +
                                "style = 'font-size:12.0pt;font-family:'Times New Roman',serif' > We value your " +
                                "input. <br>" +
                                "<br>" +
                                "Sincerely,<br>" +
                                "Bryan Smith<o:p></o:p></span></p>";
                    await SendEmail(model.email, message);
                }
                
                
            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK);

        }

        [Authorize(Roles = "Administrador")]
        [Route("ChangeRole")]
        public async Task<HttpResponseMessage> Update(ChangeRoleModel model)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            var role = "";
            if (model.roleId == "0")
            {
                role = "Administrador";
            }
            else if (model.roleId == "1")
            {
                role = "Provider";
            }
            else if (model.roleId == "2")
            {
                role = "User";
            }

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();
                    string roleid = await GetRoleId(connection1, role);
                    if (roleid != "")
                    {
                        await doChangeRole(connection1, model, roleid);
                    }
                }

            }
            catch (TransactionAbortedException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK);

        }

        private async Task<string> GetRoleId(SqlConnection connection1, string role)
        {
            String roleId = "";

            String commandText1 = "select id " +
                                  "from AspNetRoles " +
                                  "WHERE name = '" + role + "'";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                roleId = reader.GetString(0);
            }

            reader.Close();

            return roleId;
        }


        private async Task doChangeRole(SqlConnection connection1, ChangeRoleModel model, string roleId)
        {
            String commandText1 = "UPDATE AspNetUserRoles " +
                                  "SET RoleId = @roleId " +
                                  "WHERE UserId = @userId";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@roleId", SqlDbType.VarChar);
            parameter.Value = roleId;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userId", SqlDbType.VarChar);
            parameter.Value = model.userId;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

    }


}
