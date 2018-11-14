using LeonModels;
using LeonModels.Catalogs;
using LeonModels.Validic;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace LeonAPI.Controllers.Catalogs
{

    [Authorize]
    [RoutePrefix("api/Validic")]
    public class ValidicController : ApiController
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        String idValidic = ConfigurationManager.AppSettings["idvalidic"];
        String tokenValidic = ConfigurationManager.AppSettings["tokenvalidic"];

        [Route("ValidicProvision")]
        public async Task<HttpResponseMessage> ValidicProvision(SearchModel varSearchModel)
        {

            Thread.CurrentThread.CurrentCulture = culture;

            String idUser = varSearchModel.parameters[0].Trim();

            validicInfo validicProvision = new validicInfo();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    validicProvision.idUser = idValidic;
                    validicProvision.validicId = "";
                    validicProvision.validicToken = "";

                    await GetIdValidicUser(connection1, idUser, validicProvision);
                }               

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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, validicProvision);

        }


        [Route("ConnectDevices")]
        public async Task<HttpResponseMessage> ConnectDevices(SearchModel varSearchModel)
        {
           
            Thread.CurrentThread.CurrentCulture = culture;

            String idUser = varSearchModel.parameters[0].Trim();

            List<ValidicAppsModel> validicApps = new List<ValidicAppsModel>();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    validicInfo validic = new validicInfo();
                    validic.validicId = "";
                    validic.validicToken = "";

                    await GetIdValidicUser(connection1, idUser, validic);
                    if (validic.validicId.Trim() == "" )
                    {
                        await CreateValidicUser(idUser, validic);
                        await addValidicUser(connection1, idUser, validic);
                    }
                    await GetDevices(validic, validicApps);
                    Dictionary<string, bool> userDevices = await GetUserDeviceFirstTime(connection1, idUser);
                    await LoopUserUpdateFirstTime(connection1, idUser, validic, validicApps, userDevices);
                }

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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, validicApps);

        }
        
        private async Task GetIdValidicUser(SqlConnection connection1, String idUser, validicInfo validic)
        {
           
            SqlCommand command1 = new SqlCommand("SELECT validicid, validictoken FROM users where id = @idUser", connection1);

            SqlParameter parameter = new SqlParameter("@idUser", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                if (!reader.IsDBNull(0))
                {
                   validic.validicId = reader.GetString(0);
                   validic.validicToken = reader.GetString(1);
                }
            }
            reader.Close();

        }

        private async Task CreateValidicUser(String idUser, validicInfo validic)
        {

            HttpClient clientHttp = new HttpClient();
            clientHttp.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            clientHttp.BaseAddress = new Uri("https://api.validic.com");

            string userJSON = @"{" +
                "'user': {" +
                    "'uid': '" + idUser + "'" +
                "}," +
                "'access_token': '" + tokenValidic + "'" +
            "}";

            JObject userJson = JObject.Parse(userJSON);

            var task = await clientHttp.PostAsJsonAsync("/v1/organizations/" + idValidic + "/users.json", userJson);

            if (task.StatusCode == HttpStatusCode.Unauthorized)
            {
                throw new Exception("No autorizado");
            }
            else
            {
                if (task.StatusCode == HttpStatusCode.Created)
                {

                    task.EnsureSuccessStatusCode();

                    JObject o = task.Content.ReadAsAsync<JObject>().Result;

                    JToken token = o.SelectToken("code");
                    if (token.ToString() == "201")
                    {
                        token = o.SelectToken("user._id");
                        validic.validicId = token.ToString();

                        token = o.SelectToken("user.access_token");
                        validic.validicToken = token.ToString();
                    }
                    else
                    {
                        token = o.SelectToken("message");
                        throw new Exception(token.ToString());
                    }

                }
                else
                {
                    throw new Exception(task.ReasonPhrase);
                }

            }
        }
         
        private async Task addValidicUser(SqlConnection connection1, String idUser, validicInfo validic)
        {

            SqlCommand command1 = new SqlCommand("UPDATE users set validic = 1, validicid = @idValidicUser , validictoken =  @tokenValidicUser where id = @idUser", connection1);

            SqlParameter parameter = new SqlParameter("@idUser", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@idValidicUser", SqlDbType.VarChar);
            parameter.Value = validic.validicId;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@tokenValidicUser", SqlDbType.VarChar);
            parameter.Value = validic.validicToken;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task GetDevices(validicInfo validic, List<ValidicAppsModel> validicApps)
        {

            HttpClient clientHttp = new HttpClient();
            clientHttp.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            clientHttp.BaseAddress = new Uri("https://api.validic.com");

            var task = await clientHttp.GetAsync("/v1/organizations/" + idValidic + "/apps.json?authentication_token=" + validic.validicToken +
                             "&access_token=" + tokenValidic);

            if (task.StatusCode == HttpStatusCode.Unauthorized)
            {
                throw new Exception("No autorizado");
            }
            else
            {
                if (task.StatusCode == HttpStatusCode.OK)
                {

                    task.EnsureSuccessStatusCode();

                    JObject o = task.Content.ReadAsAsync<JObject>().Result;

                    JToken token = o.SelectToken("summary.status");
                    if (token.ToString() == "200")
                    {
                        token = o.SelectToken("apps");
                      
                        for (int x = 0; x < token.Count(); x++)
                        {
                            ValidicAppsModel model = new ValidicAppsModel();
                            model.name = token[x]["name"].ToString();
                            model.syncUrl = token[x]["sync_url"].ToString();
                            model.unsyncUrl = token[x]["unsync_url"].ToString();
                            model.logoUrl = "https://app.validic.com" + token[x]["logo_url"].ToString();
                            model.synced = Convert.ToBoolean(token[x]["synced"].ToString());
                            model.subname = token[x]["subname"].ToString();
                            validicApps.Add(model);

                        }
                    }
                    else
                    {
                        token = o.SelectToken("summary.message");
                        throw new Exception(token.ToString());
                    }

                }
                else
                {
                    throw new Exception(task.ReasonPhrase);
                }

            }
        }

        private async Task<Dictionary<string,bool>> GetUserDeviceFirstTime(SqlConnection connection1, String idUser)
        {
            Dictionary<string,bool> userdevices = new Dictionary<string,bool>(); 

            SqlCommand command1 = new SqlCommand("SELECT namemarket, sync FROM ValidicUserUpdate where userid = @idUser", connection1) ;

            SqlParameter parameter = new SqlParameter("@idUser", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                userdevices.Add(reader.GetString(0), reader.GetBoolean(1));
            }
            reader.Close();

            return userdevices;
        }

        private async Task LoopUserUpdateFirstTime(SqlConnection connection1, String idUser, validicInfo validic, List<ValidicAppsModel> validicApps, Dictionary<string, bool> userDevices)
        {
            foreach (ValidicAppsModel apps in validicApps)
            {
                if (userDevices.ContainsKey(apps.name))
                {
                    if (apps.synced && !userDevices[apps.name])
                    {
                        await userUpdateFirstTimeSync(connection1, idUser, apps.name, true);
                    }
                    else if (!apps.synced && userDevices[apps.name])
                    {
                        await userUpdateFirstTimeSync(connection1, idUser, apps.name, false);
                    }
                }
                else if (apps.synced)
                {
                    await userInsertFirstTime(connection1, idUser, validic, apps.name, apps.synced, apps.subname);
                }
            }
        }

        private async Task userInsertFirstTime(SqlConnection connection1, String idUser, validicInfo validic, string name, bool sync, string subname)
        {
            string strcommand = "INSERT INTO ValidicUserUpdate (userid,validicuser,namemarket,firsttime,sync, subname, history) " +
                                "values(@userid,@validicuser,@namemarket,0,@sync, @subname,0)";


            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ValidicUser", SqlDbType.VarChar);
            parameter.Value = validic.validicId;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@namemarket", SqlDbType.VarChar);
            parameter.Value = name;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@subname", SqlDbType.VarChar);
            parameter.Value = subname;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@sync", SqlDbType.Bit);
            parameter.Value = sync;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task userUpdateFirstTimeSync(SqlConnection connection1, String idUser, string name, bool sync)
        {
            string strcommand = "update ValidicUserUpdate set  firsttime = 0, sync = @sync, " +
                                "startdate = null, enddate = null, nextfitness = null, nextroutine = null, nextnutrition = null, " +
                                "nextsleep = null, nextweight = null, nextdiabetes = null, nextbiometrics = null, history = 0 " +
                                "where userid = @userid and namemarket = @namemarket";
     
            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@namemarket", SqlDbType.VarChar);
            parameter.Value = name;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@sync", SqlDbType.VarChar);
            parameter.Value = sync;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }
        



        private class validicInfo {
            public string idUser { get; set; } // or organization id
            public string validicId { get; set; }
            public string validicToken { get; set; }
        }

       
    }
}
