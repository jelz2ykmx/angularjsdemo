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
using System.Threading;
using System.Threading.Tasks;
using System.Transactions;
using System.Web.Http;


namespace LeonAPI.Controllers.Admin
{

    [Authorize]
    [RoutePrefix("api/State")]
    public class StateController : ApiController
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        [Route("QueryStates")]
        public async Task<HttpResponseMessage> QueryStates(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;
            List<StateModel> states = new List<StateModel>();
            string queryTxt = varSearchModel.parameters[0];

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    states = await getStates(connection1, queryTxt);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, states);

        }


        private async Task<List<StateModel>> getStates(SqlConnection connection1, string queryTxt)
        {
            List<StateModel> states = new List<StateModel>();
            string strcommand = "SELECT ID, Name, ShortName FROM State WHERE Name like @search";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@search", SqlDbType.VarChar);
            parameter.Value = "%" + queryTxt + "%";
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                StateModel state = new StateModel();
                state.id = reader.GetInt32(0);
                state.name = reader.GetString(1);
                state.shortName = reader.GetString(2);
                states.Add(state);
            }

            reader.Close();

            return states;

        }

        [Route("QueryCity")]
        public async Task<HttpResponseMessage> QueryCities(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;
            List<CityModel> cities = new List<CityModel>();
            string queryTxt = varSearchModel.parameters[0];

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    cities = await getCities(connection1, queryTxt);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, cities);

        }


        private async Task<List<CityModel>> getCities(SqlConnection connection1, string queryTxt)
        {
            List<CityModel> cities = new List<CityModel>();
            string strcommand = "SELECT Cities.ID, Cities.City, Country.fullName, State.Name, Cities.zipcode FROM Cities " +
                                "INNER JOIN State ON Cities.StateId = State.ID " +
                                "INNER JOIN Country ON State.countryId = Country.ID " +
                                "WHERE Cities.City like @search OR Cities.zipcode like @search";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@search", SqlDbType.VarChar);
            parameter.Value = "%" + queryTxt + "%";
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                CityModel city = new CityModel();
                city.id = reader.GetInt32(0);
                city.name = reader.GetString(1);
                city.shortCountry = reader.GetString(2);
                city.shortState = reader.GetString(3);
                city.zipCode = reader.GetString(4);
                cities.Add(city);
            }

            reader.Close();

            return cities;

        }
    }


}
