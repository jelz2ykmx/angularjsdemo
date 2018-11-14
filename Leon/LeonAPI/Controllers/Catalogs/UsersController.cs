using LeonModels;
using LeonModels.Catalogs;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace LeonAPI.Controllers.Catalogs
{

    [Authorize]
    [RoutePrefix("api/Users")]
    public class UsersController : ApiController
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        String userId = "";

        [Route("QueryUserRoles")]
        public async Task<HttpResponseMessage> QueryUserRoles(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            String email = varSearchModel.parameters[0].Trim();

            RoleUserQuery role = new RoleUserQuery();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    await GetVersion(connection1, role);
                    await GetRoles(connection1, email, role);
                    await GetFirstTime(connection1, email, role);
                    role.locations = await queryGetLocations(connection1, userId);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, role);

        }

        private async Task GetVersion(SqlConnection connection1, RoleUserQuery role)
        {
            SqlCommand command1 = new SqlCommand("SELECT version FROM Versionapp", connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                role.version = reader.GetString(0);
            }
            reader.Close();
        }

        private async Task GetFirstTime(SqlConnection connection1, String email, RoleUserQuery role)
        {
            SqlCommand command1 = new SqlCommand("SELECT firsttime FROM users where UPPER(email) = @email", connection1);

            SqlParameter parameter = new SqlParameter("@email", SqlDbType.VarChar);
            parameter.Value = email.ToUpper();
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                if (!reader.IsDBNull(0))
                {
                    role.firstTime = reader.GetBoolean(0);
                }
            }
            reader.Close();
        }

        private async Task GetRoles(SqlConnection connection1, String email, RoleUserQuery role)
        {
            SqlCommand command1 = new SqlCommand("SELECT r.name, u.id " +
                                                       "FROM AspNetUsers u " +
                                                       "left join AspNetUserRoles ur on u.id = ur.UserId " +
                                                       "left join AspNetRoles r on ur.RoleId = r.id " +
                                                       "where UPPER(u.email) = @email", connection1);

            SqlParameter parameter = new SqlParameter("@email", SqlDbType.VarChar);
            parameter.Value = email.ToUpper();
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                role.role = reader.GetString(0);
                userId = reader.GetString(1);
            }
            reader.Close();
        }

        [Authorize(Roles = "Administrador")]
        [Route("QueryProviders")]
        public async Task<HttpResponseMessage> QueryProviders(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            String typeAccount = varSearchModel.parameters[0];
            string dailyPlanSearchType = (varSearchModel.parameters[1] != null) ? varSearchModel.parameters[1] : "0" ;
            string searchDailyPlan = "";
            String account = "";
            if (typeAccount == "0")
            {
                account = "Administrador";
            }
            else if (typeAccount == "1")
            {
                account = "Provider";

            }
            else if (typeAccount == "2")
            {
                account = "User";
                if(Convert.ToInt32(dailyPlanSearchType) == 1)
                {
                    searchDailyPlan = "AND i.dailyplan = 1 ";
                }
                else if(Convert.ToInt32(dailyPlanSearchType) == 2)
                {
                    searchDailyPlan = "AND (i.dailyplan = 0 OR i.dailyPlan IS NULL) ";
                }
            }

            List<UserProviderQuery> providers = new List<UserProviderQuery>();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    SqlCommand command1 = new SqlCommand("SELECT u.id, u.email, i.firstname, i.lastname, i.dailyplan " +
                                                         "FROM AspNetUsers u " +
                                                         "LEFT JOIN AspNetUserRoles ur on u.id = ur.UserId " +
                                                         "LEFT JOIN AspNetRoles r on ur.RoleId = r.id " +
                                                         "LEFT JOIN users i on u.id = i.id " +
                                                         "WHERE r.name = '" + account + "' " +
                                                            searchDailyPlan + 
                                                         "ORDER by email", connection1);

                  
                    SqlDataReader reader = await command1.ExecuteReaderAsync();

                    while (await reader.ReadAsync())
                    {
                        UserProviderQuery provider = new UserProviderQuery();
                        provider.userid = reader.GetString(0);
                        provider.email = reader.GetString(1);
                        if (!reader.IsDBNull(2))
                            provider.firtsName = reader.GetString(2);
                        if (!reader.IsDBNull(3))
                            provider.lastName = reader.GetString(3);
                        if (!reader.IsDBNull(4))
                            provider.dailyPlan = reader.GetBoolean(4);
                        providers.Add(provider);
                    }
                    reader.Close();
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, providers);

        }

        [Authorize(Roles = "Administrador")]
        [Route("QueryAdminVersion")]
        public async Task<HttpResponseMessage> QueryAdminVersion(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            String email = varSearchModel.parameters[0].Trim();

            List<RoleUserQuery> roles = new List<RoleUserQuery>();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    await GetAdminVersion(connection1, roles);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, roles);

        }

        private async Task GetAdminVersion(SqlConnection connection1, List<RoleUserQuery> roles)
        {
            SqlCommand command1 = new SqlCommand("SELECT version FROM Versionadminapp", connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                RoleUserQuery role = new RoleUserQuery();
                role.role = reader.GetString(0);
                roles.Add(role);
            }
            reader.Close();
        }

        private async Task<List<LocationsUserModel>> queryGetLocations(SqlConnection connection1, String id)
        {
            String commandText1 = "SELECT Cities.City, State.Name as stateShort, Country.FullName as shortCountry, Cities.ID, LocationsUser.id, LocationsUser.Status, cities.zipcode  FROM LocationsUser " +
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
                location.name = reader.GetString(0) + " " + reader.GetString(6)+  " " + reader.GetString(1) +  " " + reader.GetString(2);
                location.shortState = reader.GetString(1);
                location.shortCountry = reader.GetString(2);
                location.cityId = reader.GetInt32(3);
                location.id = reader.GetInt32(4);
                location.status = reader.GetBoolean(5);
                location.zipCode = reader.GetString(6);

                locations.Add(location);
            }

            reader.Close();

            return locations;
        }


    }
}
