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
    [RoutePrefix("api/ValidicData")]
    public class ValidicDataController : ApiController
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        String idValidic = ConfigurationManager.AppSettings["idvalidic"];
        String tokenValidic = ConfigurationManager.AppSettings["tokenvalidic"];

        [Route("Steps")]
        public async Task<HttpResponseMessage> Steps(SearchModel varSearchModel)
        {

            Thread.CurrentThread.CurrentCulture = culture;

            List<ValidicStepsModel> steps = new List<ValidicStepsModel>();

            String idUser = varSearchModel.parameters[0].Trim();
            int year = Convert.ToInt32(varSearchModel.parameters[1].Trim());
            int month = Convert.ToInt32(varSearchModel.parameters[2].Trim());
            int day = Convert.ToInt32(varSearchModel.parameters[3].Trim());
            DateTime dateStart = new DateTime(year,month,day,0,0,0,0,0); 
            DateTime dateIni = dateStart.AddDays(-7);
            DateTime dateEnd = dateStart.AddDays(+7);
            dateEnd = dateEnd.AddHours(23);
            dateEnd = dateEnd.AddMinutes(59);
            dateEnd = dateEnd.AddSeconds(59);
            dateEnd = dateEnd.AddMilliseconds(998);

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    await GetValidic(connection1, idUser, dateIni, dateEnd, steps);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, steps);

        }
        
        private async Task GetValidic(SqlConnection connection1, String idUser, DateTime dateIni, DateTime dateEnd, List<ValidicStepsModel> steps)
        {
            string cmd = "SELECT v.userid,DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) as timestamp,sum(v.steps) as steps " +
                         "FROM ValidicRoutine v " +
                         "LEFT JOIN users u on v.userid = u.validicid " +
                         "where u.id = @idUser and " +
                         "(DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) between @timestampini and @timestampend) " +
                         "group by v.userid, DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) " +
                         "order by v.userid, DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset))))";


            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@idUser", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestampini", SqlDbType.DateTime);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestampend", SqlDbType.DateTime);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);


            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                ValidicStepsModel step = new ValidicStepsModel();
                step.date = reader.GetDateTime(1).Year + "-" + reader.GetDateTime(1).Month + "-" + reader.GetDateTime(1).Day;
                step.steps = Convert.ToDouble(reader.GetDecimal(2));
                steps.Add(step);
            }
            reader.Close();

        }

        [Route("AllDataByDay")]
        public async Task<HttpResponseMessage> AllDataByDay(SearchModel varSearchModel)
        {

            Thread.CurrentThread.CurrentCulture = culture;

            List<ValidicStepsModel> steps = new List<ValidicStepsModel>();
            
            int year = Convert.ToInt32(varSearchModel.parameters[0].Trim());
            int month = Convert.ToInt32(varSearchModel.parameters[1].Trim());
            int day = Convert.ToInt32(varSearchModel.parameters[2].Trim());
            DateTime dateStart = new DateTime(year, month, day, 0, 0, 0, 0, 0);
            DateTime dateIni = dateStart;
            DateTime dateEnd = dateStart;
            dateEnd = dateEnd.AddHours(23);
            dateEnd = dateEnd.AddMinutes(59);
            dateEnd = dateEnd.AddSeconds(59);
            dateEnd = dateEnd.AddMilliseconds(998);

            ValidicAllDataModel model = new ValidicAllDataModel();


            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    await GetValidicFitness(connection1, model, dateIni, dateEnd);
                    await GetValidicRoutine(connection1, model, dateIni, dateEnd);
                    await GetValidicSleep(connection1, model, dateIni, dateEnd);
                    await GetValidicWeight(connection1, model, dateIni, dateEnd);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, model);

        }

        private async Task GetValidicFitness(SqlConnection connection1, ValidicAllDataModel model, DateTime dateIni, DateTime dateEnd)
        {
            string cmd = "SELECT " +
                         "u.email,SWITCHOFFSET(TODATETIMEOFFSET(f.[timestamp],'+00:00'),f.utcoffset) as timestamp" +
                         ",s.source as device,c.name as activity,f.[calories],f.[distance] " +
                         ",f.[duration],f.[intensity],f.[starttime] " +
                         "FROM [ValidicFitness] f " +
                         "left join validicactivitycategory c on f.[activitycategory] = c.id " +
                         "left join users u on f.userid = u.validicid " +
                         "left join validicsources s on f.source = s.id " +
                         "where DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(f.[timestamp],'+00:00'), f.utcoffset)))) between @timestampini and @timestampend " +
                         "order by u.email, SWITCHOFFSET(TODATETIMEOFFSET(f.[timestamp],'+00:00'), f.utcoffset)";
            
            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@timestampini", SqlDbType.DateTime);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestampend", SqlDbType.DateTime);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);


            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                ValidicFitnessModel data = new ValidicFitnessModel();
                data.email = reader.GetString(0);
                data.timestamp = new DateTime(reader.GetDateTimeOffset(1).Year, reader.GetDateTimeOffset(1).Month, reader.GetDateTimeOffset(1).Day,
                           reader.GetDateTimeOffset(1).Hour, reader.GetDateTimeOffset(1).Minute, reader.GetDateTimeOffset(1).Second,
                           reader.GetDateTimeOffset(1).Millisecond);
                data.device = reader.GetString(2);
                data.activity = reader.GetString(3);
                data.calories = (double)reader.GetDecimal(4);
                data.distance = (double)reader.GetDecimal(5);
                data.duration = (double)reader.GetDecimal(6);
                data.intensity = reader.GetString(7);
                data.starttime = reader.GetDateTime(8);
                
                model.fitness.Add(data);
            }
            reader.Close();

        }

        private async Task GetValidicRoutine(SqlConnection connection1, ValidicAllDataModel model, DateTime dateIni, DateTime dateEnd)
        {
            string cmd = "SELECT " +
                         "u.email,SWITCHOFFSET(TODATETIMEOFFSET(r.[timestamp],'+00:00'),r.utcoffset) as timestamp" +
                         ",s.source as device,r.[caloriesburned],r.[distance],r.[elevation],r.[floors],r.[steps],r.[water] " +
                         "FROM [ValidicRoutine] r " +
                         "left join users u on r.userid = u.validicid " +
                         "left join validicsources s on r.source = s.id " +
                         "where DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(r.[timestamp],'+00:00'), r.utcoffset)))) between @timestampini and @timestampend " +
                         "order by u.email, SWITCHOFFSET(TODATETIMEOFFSET(r.[timestamp],'+00:00'), r.utcoffset)";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@timestampini", SqlDbType.DateTime);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestampend", SqlDbType.DateTime);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);


            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                ValidicRoutineModel data = new ValidicRoutineModel();
                data.email = reader.GetString(0);
                data.timestamp = new DateTime(reader.GetDateTimeOffset(1).Year, reader.GetDateTimeOffset(1).Month, reader.GetDateTimeOffset(1).Day,
                            reader.GetDateTimeOffset(1).Hour, reader.GetDateTimeOffset(1).Minute, reader.GetDateTimeOffset(1).Second, 
                            reader.GetDateTimeOffset(1).Millisecond);
                data.device = reader.GetString(2);
                data.caloriesburned = (double)reader.GetDecimal(3);
                data.distance = (double)reader.GetDecimal(4);
                data.elevation = (double)reader.GetDecimal(5);
                data.floors = (double)reader.GetDecimal(6);
                data.steps = (double)reader.GetDecimal(7);
                data.water = (double)reader.GetDecimal(8);
                model.routine.Add(data);
            }
            reader.Close();

        }

        private async Task GetValidicSleep(SqlConnection connection1, ValidicAllDataModel model, DateTime dateIni, DateTime dateEnd)
        {
            string cmd = "SELECT " +
                         "u.email,SWITCHOFFSET(TODATETIMEOFFSET(sl.[timestamp],'+00:00'),sl.utcoffset) as timestamp" +
                         ",s.source as device,sl.[awake],sl.[deep],sl.[light],sl.[rem],sl.[timeswoken],sl.[totalsleep] " +
                         "FROM [ValidicSleep] sl " +
                         "left join users u on sl.userid = u.validicid " +
                         "left join validicsources s on sl.source = s.id " +
                         "where DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(sl.[timestamp],'+00:00'), sl.utcoffset)))) between @timestampini and @timestampend " +
                         "order by u.email, SWITCHOFFSET(TODATETIMEOFFSET(sl.[timestamp],'+00:00'), sl.utcoffset)";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@timestampini", SqlDbType.DateTime);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestampend", SqlDbType.DateTime);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);


            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                ValidicSleepModel data = new ValidicSleepModel();
                data.email = reader.GetString(0);
                data.timestamp = new DateTime(reader.GetDateTimeOffset(1).Year, reader.GetDateTimeOffset(1).Month, reader.GetDateTimeOffset(1).Day,
                         reader.GetDateTimeOffset(1).Hour, reader.GetDateTimeOffset(1).Minute, reader.GetDateTimeOffset(1).Second,
                         reader.GetDateTimeOffset(1).Millisecond);
                data.device = reader.GetString(2);
                data.awake = (double)reader.GetDecimal(3);
                data.deep = (double)reader.GetDecimal(4);
                data.light = (double)reader.GetDecimal(5);
                data.rem = (double)reader.GetDecimal(6);
                data.timeswoken = (double)reader.GetDecimal(7);
                data.totalsleep = (double)reader.GetDecimal(8);
                
                model.sleep.Add(data);
            }
            reader.Close();

        }

        private async Task GetValidicWeight(SqlConnection connection1, ValidicAllDataModel model, DateTime dateIni, DateTime dateEnd)
        {
            string cmd = "SELECT " +
                         "u.email,SWITCHOFFSET(TODATETIMEOFFSET(w.[timestamp],'+00:00'),w.utcoffset) as timestamp" +
                         ",s.source as device,w.[bmi],w.[fatpercent],w.[free_mass],w.[height],w.[massweight],w.[weight] " +
                         "FROM [ValidicWeight] w " +
                         "left join users u on w.userid = u.validicid " +
                         "left join validicsources s on w.source = s.id " +
                         "where DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(w.[timestamp],'+00:00'), w.utcoffset)))) between @timestampini and @timestampend " +
                         "order by u.email, SWITCHOFFSET(TODATETIMEOFFSET(w.[timestamp],'+00:00'), w.utcoffset)";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@timestampini", SqlDbType.DateTime);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestampend", SqlDbType.DateTime);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);


            SqlDataReader reader = await command1.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                ValidicWeightModel data = new ValidicWeightModel();
                data.email = reader.GetString(0);
                data.timestamp = new DateTime(reader.GetDateTimeOffset(1).Year, reader.GetDateTimeOffset(1).Month, reader.GetDateTimeOffset(1).Day,
                         reader.GetDateTimeOffset(1).Hour, reader.GetDateTimeOffset(1).Minute, reader.GetDateTimeOffset(1).Second,
                         reader.GetDateTimeOffset(1).Millisecond);
                data.device = reader.GetString(2);
                data.bmi = (double)reader.GetDecimal(3);
                data.fatpercent = (double)reader.GetDecimal(4);
                data.free_mass = (double)reader.GetDecimal(5);
                data.height = (double)reader.GetDecimal(6);
                data.massweight = (double)reader.GetDecimal(7);
                data.weight = (double)reader.GetDecimal(8);
                
                model.weight.Add(data);
            }
            reader.Close();

        }

    }
}
