using LeonAPICalculations;
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
    [RoutePrefix("api/ValidicPoints")]
    public class ValidicPointsController : ApiController
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        String idValidic = ConfigurationManager.AppSettings["idvalidic"];
        String tokenValidic = ConfigurationManager.AppSettings["tokenvalidic"];

        [Route("Points")]
        public async Task<HttpResponseMessage> Points(SearchModel varSearchModel)
        {
            
            Thread.CurrentThread.CurrentCulture = culture;

            String idUser = varSearchModel.parameters[0].Trim();
            int year = Convert.ToInt32(varSearchModel.parameters[1].Trim());
            int month = Convert.ToInt32(varSearchModel.parameters[2].Trim());
            int day = Convert.ToInt32(varSearchModel.parameters[3].Trim());
            DateTime dateIni = new DateTime(year, month, day, 0, 0, 0, 0, 0);
            DateTime dateEnd = dateIni;
            dateEnd = dateEnd.AddHours(23);
            dateEnd = dateEnd.AddMinutes(59);
            dateEnd = dateEnd.AddSeconds(59);
            dateEnd = dateEnd.AddMilliseconds(998);
            
            ValidicPointsModel points = new ValidicPointsModel();
            
            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    double caloriesburned = 0;

                    caloriesburned += await GetSteps(connection1, idUser, dateIni, dateEnd, points);
                    await GetSleep(connection1, idUser, dateIni, dateEnd, points);
                    ///await GetNutrition(connection1, idUser, dateIni, dateEnd, points);
                    caloriesburned += await GetFitness(connection1, idUser, dateIni, dateEnd, points);

                    if (caloriesburned > 0)
                    {
                        ValidicCategoryPoints categoryPoints = new ValidicCategoryPoints();
                        points.nutritionPoints = 0;
                        //categoryPoints.GetCaloriesPoints(caloriesburned);
                        points.nutritionCount = ((int)caloriesburned).ToString() + "cal";
                    }

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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, points);

        }
        
        private async Task<double> GetSteps(SqlConnection connection1, String idUser, DateTime dateIni, DateTime dateEnd, ValidicPointsModel points)
        {
            double caloriesburned = 0;

            string cmd = "SELECT top 1 v.userid,DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp], '+00:00'), v.utcoffset)))) as timestamp, " +
                         "v.steps,caloriesburned " +
                         "FROM ValidicRoutine v " +
                         "LEFT JOIN users u on v.userid = u.validicid " +
                         "where u.id = @idUser and v.steps > 0 and " +
                         "(DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) between @timestampini and @timestampend) " +
                         "order by v.userid, DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) desc, " +
                         "v.steps desc";
           
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
                int steps = (int)Convert.ToDouble(reader.GetDecimal(2));
                if (steps > 0)
                {
                    ValidicCategoryPoints categoryPoints = new ValidicCategoryPoints();
                    points.stepsPoints = categoryPoints.GetStepPoints(steps);
                    points.stepsCount = steps;
                    caloriesburned += Convert.ToDouble(reader.GetDecimal(3));
                }
            }
            reader.Close();

            return caloriesburned;
        }

        private async Task GetSleep(SqlConnection connection1, String idUser, DateTime dateIni, DateTime dateEnd, ValidicPointsModel points)
        {
            string cmd = "SELECT top 1 v.userid,DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp], '+00:00'), v.utcoffset)))) as timestamp, " +
                         "v.totalsleep " +
                         "FROM ValidicSleep v " +
                         "LEFT JOIN users u on v.userid = u.validicid " +
                         "where u.id = @idUser and " +
                         "(DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) between @timestampini and @timestampend) " +
                         "order by v.userid, DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) desc, " +
                         "v.totalsleep desc";

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
                double sleep = Convert.ToDouble(reader.GetDecimal(2));
                string first = ((int)Math.Floor(sleep / 3600)).ToString("N0").PadLeft(2, '0');
                string second = ((sleep % 3600)/60).ToString("N0").PadLeft(2,'0');
                if (first != "00" || second != "00")
                {
                    ValidicCategoryPoints categoryPoints = new ValidicCategoryPoints();
                    points.sleepPoints = categoryPoints.GetSleepPoints(sleep);
                    points.sleepCount = first + ":" + second + " hrs";
                }
                points.sleepCountNumber = Convert.ToDouble(first + "." + second);
            }
            reader.Close();

        }

        private async Task GetNutrition(SqlConnection connection1, String idUser, DateTime dateIni, DateTime dateEnd, ValidicPointsModel points)
        {
            string cmd = "SELECT top 1 v.userid,DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp], '+00:00'), v.utcoffset)))) as timestamp, " +
                         "v.calories " +
                         "FROM ValidicNutrition v " +
                         "LEFT JOIN users u on v.userid = u.validicid " +
                         "where u.id = @idUser and " +
                         "(DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) between @timestampini and @timestampend) " +
                         "order by v.userid, DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) desc, " +
                         "v.calories desc";

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
                double nutrition = Convert.ToDouble(reader.GetDecimal(2));
                ValidicCategoryPoints categoryPoints = new ValidicCategoryPoints();
                points.nutritionPoints = categoryPoints.GetNutritionPoints(nutrition);
                points.nutritionCount = ((int)nutrition).ToString() + "cal";
            }
            reader.Close();

        }

        private async Task<double> GetFitness(SqlConnection connection1, String idUser, DateTime dateIni, DateTime dateEnd, ValidicPointsModel points)
        {
            string cmd = "SELECT DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp], '+00:00'), v.utcoffset)))) as timestamp, " +
                         "v.calories, v.distance, a.name, v.starttime, v.duration " +
                         "FROM[ValidicFitness] v " +
                         "LEFT JOIN users u on v.userid = u.validicid " +
                         "LEFT JOIN ValidicActivityCategory a on v.activitycategory = a.id " +
                         "where u.id = @idUser and " +
                         "(DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) between @timestampini and @timestampend) " +
                         "order by v.starttime ";
            
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

            List<Activity> activities = new List<Activity>();

            while (await reader.ReadAsync())
            {
                Activity value = new Activity();
                value.calories = Convert.ToDouble(reader.GetDecimal(1));
                value.distance = Convert.ToDouble(reader.GetDecimal(2));
                value.activity = reader.GetString(3).ToLower();
                value.start = reader.GetDateTime(4);
                value.duration = Convert.ToDouble(reader.GetDecimal(5));
                activities.Add(value);
            }
            reader.Close();

            double caloriesValue = CalculaPoinsFitness(activities, points);

            return caloriesValue;
        }

        private double CalculaPoinsFitness(List<Activity> activities, ValidicPointsModel points)
        {
            double caloriesValue = 0;
            if (activities.Count() > 0)
            {
                int pointsValue = 0;
                double miles = 0;
                int count = 0;
                while (count < activities.Count)
                {
                    Activity act = activities[count];
                    DateTime endTime = act.start.AddSeconds(act.duration);
                    count++;
                    while (count < activities.Count)
                    {
                        if (activities[count].start > endTime)
                        {
                            break;
                        }
                        else if (activities[count].calories > act.calories)
                        {
                            act = activities[count];
                            endTime = act.start.AddSeconds(act.duration);
                        }
                        count++;
                    }
                    ValidicCategoryPoints categoryPoints = new ValidicCategoryPoints();
                    act.distance = act.distance * 0.000621371;
                    act.duration = act.duration / 60;
                    miles += act.distance;
                    caloriesValue += act.calories;
                    pointsValue += categoryPoints.GetFitnesPoints(GetActivityNameFitness(act.activity), act.duration, act.distance, act.calories);
                }
                if (miles > 0 || caloriesValue > 0)
                {
                    points.fitnessPoints = pointsValue;
                    points.fitnessCount = Math.Round(miles, 2) + "m" + " " + ((int)caloriesValue).ToString() + "cal";
                    points.fitnessMiles = Math.Round(miles, 2);
                    points.fitnessCals = caloriesValue;
                }
            }
            return caloriesValue;
        }

        private string GetActivityNameFitness(string value)
        {
            string activity = value;

            if (activity.Contains("running"))
            {
                activity = "running";
            }
            else if (activity.Contains("weight"))
            {
                activity = "weight";
            }
            else if (activity.Contains("cycling"))
            {
                activity = "cycling";
            }
            else if (activity.Contains("swimming"))
            {
                activity = "swimming";
            }
            else if (activity.Contains("sport"))
            {
                activity = "sport";
            }
            else if (activity.Contains("yoga") || activity.ToLower().Contains("pilates"))
            {
                activity = "yoga";
            }
            else if (activity.Contains("classes") || activity.ToLower().Contains("pt training"))
            {
                activity = "classes";
            }
            else if (activity.Contains("downhill ski"))
            {
                activity = "downhillski";
            }
            
            return activity;

        }

        [Route("OneValue")]
        public async Task<HttpResponseMessage> OneValue(SearchModel varSearchModel)
        {

            Thread.CurrentThread.CurrentCulture = culture;

            String idUser = varSearchModel.parameters[0].Trim();
            int year = Convert.ToInt32(varSearchModel.parameters[1].Trim());
            int month = Convert.ToInt32(varSearchModel.parameters[2].Trim());
            int day = Convert.ToInt32(varSearchModel.parameters[3].Trim());
            DateTime dateIni = new DateTime(year, month, day, 0, 0, 0, 0, 0);
            DateTime dateEnd = dateIni;
            dateEnd = dateEnd.AddHours(23);
            dateEnd = dateEnd.AddMinutes(59);
            dateEnd = dateEnd.AddSeconds(59);
            dateEnd = dateEnd.AddMilliseconds(998); 

             ValidicAllPointsModel dataValues = new ValidicAllPointsModel();

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    dateIni = dateIni.AddDays(-30);
                    dateEnd = dateIni;
                    dateEnd = dateEnd.AddHours(23);
                    dateEnd = dateEnd.AddMinutes(59);
                    dateEnd = dateEnd.AddSeconds(59);
                    dateEnd = dateEnd.AddMilliseconds(998);

                    for (var x = 0; x < 30; x++)
                    {
                        ValidicPointsModel points = new ValidicPointsModel();

                        double caloriesburned = 0;

                        caloriesburned += await GetSteps(connection1, idUser, dateIni, dateEnd, points);

                        await GetSleep(connection1, idUser, dateIni, dateEnd, points);
                        ///await GetNutrition(connection1, idUser, dateIni, dateEnd, points);
                        caloriesburned += await GetFitness(connection1, idUser, dateIni, dateEnd, points);
                        
                        dataValues.steps.Add(points.stepsCount);
                        dataValues.sleep.Add(points.sleepCountNumber);
                        dataValues.fitnessMiles.Add(points.fitnessMiles);
                        dataValues.fitnessCals.Add(points.fitnessCals);
                        dataValues.calories.Add(caloriesburned);

                        dateIni = dateIni.AddDays(1);
                        dateEnd = dateIni;
                        dateEnd = dateEnd.AddHours(23);
                        dateEnd = dateEnd.AddMinutes(59);
                        dateEnd = dateEnd.AddSeconds(59);
                        dateEnd = dateEnd.AddMilliseconds(998);

                    }



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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, dataValues);

        }

        [Route("MonthPoints")]
        public async Task<HttpResponseMessage> MonthPoints(SearchModel varSearchModel)
        {

            Thread.CurrentThread.CurrentCulture = culture;

            String idUser = varSearchModel.parameters[0].Trim();
            int year = Convert.ToInt32(varSearchModel.parameters[1].Trim());
            int month = Convert.ToInt32(varSearchModel.parameters[2].Trim());
           

            ValidicPointsChartModel points = new ValidicPointsChartModel();

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();
                    await GetPoints(connection1, idUser, year, month, points);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, points);

        }

        private async Task GetPoints(SqlConnection connection1, String idUser, int year, int month, ValidicPointsChartModel points)
        {
            DateTime finnish = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0, 0);
            if (year != DateTime.Now.Year || month != DateTime.Now.Month)
            {
                int numberdays = DateTime.DaysInMonth(year, month);
                finnish = new DateTime(year, month, numberdays, 0, 0, 0, 0);
            }
            
            int endday = finnish.Day;
            DateTime startDate = finnish.AddDays(-6);
            int startday = startDate.Day;
           
            int days = DateTime.DaysInMonth(year, month);

            for (int x = 0; x < days; x++)
            {
                points.monthPoints.Add(0);
            }

            for (int x = 0; x < 7; x++)
            {
                points.weekPoints.Add(0);
            }

            string cmd = "Select d.iduser, d.step, d.sleep, d.running, d.weight, d.cycling, d.swimming, d.sport, d.yoga, " +
                         "d.classes, d.downhilski, d.otherfitness, d.datedone " +
                         "from DailyDataPoints d " +
                         "LEFT JOIN users u on d.iduser = u.validicid " +
                         "where u.id = @idUser " +
                         "order by d.iduser, d.datedone ";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@idUser", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);
            

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            int pointLast7 = 0;
            int pointsDays = 0;
            DateTime start = new DateTime();
            DateTime end = new DateTime();
            bool flag = true;
            while (await reader.ReadAsync())
            {
                string iduser = reader.GetString(0);
                DateTime date = reader.GetDateTime(12);

                if (finnish >= date)
                {
                    if (flag)
                    {
                        flag = false;
                        start = new DateTime(date.Year, date.Month, date.Day, 0, 0, 0, 0);
                    }

                    end = new DateTime(date.Year, date.Month, date.Day, 0, 0, 0, 0);

                    int pointsValue = reader.GetInt32(1);
                    pointsValue += reader.GetInt32(2);
                    pointsValue += reader.GetInt32(3);
                    pointsValue += reader.GetInt32(4);
                    pointsValue += reader.GetInt32(5);
                    pointsValue += reader.GetInt32(6);
                    pointsValue += reader.GetInt32(7);
                    pointsValue += reader.GetInt32(8);
                    pointsValue += reader.GetInt32(9);
                    pointsValue += reader.GetInt32(10);
                    pointsValue += reader.GetInt32(11);

                    pointsDays += pointsValue;

                    if (date.Year == year && date.Month == month)
                    {
                        points.monthPoints[date.Day - 1] = pointsValue;

                        if (date.Day >= startday && date.Day <= endday)
                        {
                            int daynumber = 7 - (finnish.Subtract(date).Days + 1);
                            pointLast7 += pointsValue;
                            points.weekPoints[daynumber] = pointsValue;
                        }
                    }

                }
                else
                {
                    break;
                }

            }
            reader.Close();

            if (pointsDays > 0)
            {
                if (pointLast7 > 0)
                {
                    points.last7Days = pointLast7 / 7;
                }
                Itenso.TimePeriod.DateDiff dateDiff = new Itenso.TimePeriod.DateDiff(start, end);

                if (dateDiff.Days > 0)
                {
                    points.avarageDay = pointsDays / dateDiff.Days;
                }
                else
                {
                    points.avarageDay = pointsDays;
                }
                if (dateDiff.Weeks > 0)
                {
                    points.avarageWeek = pointsDays / dateDiff.Weeks;
                }
                else
                {
                    points.avarageWeek = pointsDays;
                }

                if (dateDiff.Months > 0)
                {
                    points.avarageMonth = pointsDays / dateDiff.Months;
                }
                else
                {
                    points.avarageMonth = pointsDays;
                }


            }

            //points.avarageDay 


        }

        [Route("MonthSteps")]
        public async Task<HttpResponseMessage> MonthSteps(SearchModel varSearchModel)
        {

            Thread.CurrentThread.CurrentCulture = culture;

            String idUser = varSearchModel.parameters[0].Trim();
            int year = Convert.ToInt32(varSearchModel.parameters[1].Trim());
            int month = Convert.ToInt32(varSearchModel.parameters[2].Trim());


            ValidicPointsChartModel points = new ValidicPointsChartModel();

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();
                    await GetSteps(connection1, idUser, year, month, points);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, points);

        }

        private async Task GetSteps(SqlConnection connection1, String idUser, int year, int month, ValidicPointsChartModel points)
        {
            DateTime finnish = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0, 0);
            if (year != DateTime.Now.Year || month != DateTime.Now.Month)
            {
                int numberdays = DateTime.DaysInMonth(year, month);
                finnish = new DateTime(year, month, numberdays, 0, 0, 0, 0);
            }

            int endday = finnish.Day;
            DateTime startDate = finnish.AddDays(-6);
            int startday = startDate.Day;

            int days = DateTime.DaysInMonth(year, month);

            for (int x = 0; x < days; x++)
            {
                points.monthPoints.Add(0);
            }

            for (int x = 0; x < 7; x++)
            {
                points.weekPoints.Add(0);
            }

            string cmd = "Select d.iduser, d.stepcounts, d.datedone " +
                         "from DailyData d " +
                         "LEFT JOIN users u on d.iduser = u.validicid " +
                         "where u.id = @idUser " +
                         "order by d.iduser, d.datedone ";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@idUser", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);


            SqlDataReader reader = await command1.ExecuteReaderAsync();

            int pointLast7 = 0;
            int pointsDays = 0;
            DateTime start = new DateTime();
            DateTime end = new DateTime();
            bool flag = true;
            while (await reader.ReadAsync())
            {
                string iduser = reader.GetString(0);
                DateTime date = reader.GetDateTime(2);

                if (finnish >= date)
                {
                    if (flag)
                    {
                        flag = false;
                        start = new DateTime(date.Year, date.Month, date.Day, 0, 0, 0, 0);
                    }

                    end = new DateTime(date.Year, date.Month, date.Day, 0, 0, 0, 0);

                    int pointsValue = (int)reader.GetDecimal(1);
                    
                    pointsDays += pointsValue;

                    if (date.Year == year && date.Month == month)
                    {
                        points.monthPoints[date.Day - 1] = pointsValue;

                        if (date.Day >= startday && date.Day <= endday)
                        {
                            int daynumber = 7 - (finnish.Subtract(date).Days + 1);
                            pointLast7 += pointsValue;
                            points.weekPoints[daynumber] = pointsValue;
                        }
                    }

                }
                else
                {
                    break;
                }

            }
            reader.Close();

            if (pointsDays > 0)
            {
                if (pointLast7 > 0)
                {
                    points.last7Days = pointLast7 / 7;
                }
                else
                {
                    points.last7Days = pointLast7;
                }

                Itenso.TimePeriod.DateDiff dateDiff = new Itenso.TimePeriod.DateDiff(start, end);

                if (dateDiff.Days > 0)
                {
                    points.avarageDay = pointsDays / dateDiff.Days;
                }
                else
                {
                    points.avarageDay = pointsDays;
                }
                if (dateDiff.Weeks > 0)
                {
                    points.avarageWeek = pointsDays / dateDiff.Weeks;
                }
                else
                {
                    points.avarageWeek = pointsDays;
                }

                if (dateDiff.Months > 0)
                {
                    points.avarageMonth = pointsDays / dateDiff.Months;
                }
                else
                {
                    points.avarageMonth = pointsDays;
                }

            }

            //points.avarageDay 


        }

        [Route("MonthActivity")]
        public async Task<HttpResponseMessage> MonthActivity(SearchModel varSearchModel)
        {

            Thread.CurrentThread.CurrentCulture = culture;

            String idUser = varSearchModel.parameters[0].Trim();
            int year = Convert.ToInt32(varSearchModel.parameters[1].Trim());
            int month = Convert.ToInt32(varSearchModel.parameters[2].Trim());


            ValidicActivitiesModel points = new ValidicActivitiesModel();

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();
                    await GetActivity(connection1, idUser, year, month, points);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, points);

        }

        private async Task GetActivity(SqlConnection connection1, String idUser, int year, int month, ValidicActivitiesModel points)
        {
            DateTime dateIni = new DateTime(year, month, 1, 0, 0, 0, 0);
            int days = DateTime.DaysInMonth(year, month);
            DateTime dateEnd = new DateTime(year, month, days, 0, 0, 0, 0);

            for (int x = 0; x < days + 1; x++)
            {
                points.activities.Add(new ValidicActivityDailyModel());
            }

            string cmd = "Select d.iduser, d.datedone, " +
                         "runningdistance, runningduration, runningcalories, " +
                         "weightdistance, weightduration, weightcalories, " +
                         "cyclingdistance, cyclingduration, cyclingcalories, " +
                         "swimmingdistance, swimmingduration, swimmingcalories, " +
                         "sportdistance, sportduration, sportcalories, " +
                         "yogadistance, yogaduration, yogacalories, " +
                         "classesdistance, classesduration, classescalories, " +
                         "downhilskidistance, downhilskiduration, downhilskicalories, " +
                         "fitnessotherdistance, fitnessotherduration, fitnessothercalories " + 
                         "from DailyData d " +
                         "LEFT JOIN users u on d.iduser = u.validicid " +
                         "where u.id = @idUser and (d.datedone >= @dateIni and  d.datedone <= @dateEnd) " +
                         "order by d.iduser, d.datedone ";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@idUser", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateEnd", SqlDbType.Date);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);


            SqlDataReader reader = await command1.ExecuteReaderAsync();

            double milesMonth = 0;
            double durationMonth = 0;
            double caloriesMonth = 0;
            while (await reader.ReadAsync())
            {
                string iduser = reader.GetString(0);
                int day = reader.GetDateTime(1).Day;

                double milesDaily = 0;

                //running
                double miles = (double)reader.GetDecimal(2);
                double calories = (double)reader.GetDecimal(3);
                double duration = (double)reader.GetDecimal(4);
                
                milesMonth += miles;
                durationMonth += calories;
                caloriesMonth += duration;

                if (miles > 0)
                {
                    milesDaily += miles;
                    points.activities[day].activity.Add("running");
                }
                //end

                // weight
                miles = (double)reader.GetDecimal(5);
                calories = (double)reader.GetDecimal(6);
                duration = (double)reader.GetDecimal(7);

                milesMonth += miles;
                durationMonth += calories;
                caloriesMonth += duration;

                if (miles > 0)
                {
                    milesDaily += miles;
                    points.activities[day].activity.Add("weight");
                }
                // end


                // cycling
                miles = (double)reader.GetDecimal(8);
                calories = (double)reader.GetDecimal(9);
                duration = (double)reader.GetDecimal(10);

                milesMonth += miles;
                durationMonth += calories;
                caloriesMonth += duration;

                if (miles > 0)
                {
                    milesDaily += miles;
                    points.activities[day].activity.Add("cycling");
                }
                // end

                // swimming
                miles = (double)reader.GetDecimal(11);
                calories = (double)reader.GetDecimal(12);
                duration = (double)reader.GetDecimal(13);

                milesMonth += miles;
                durationMonth += calories;
                caloriesMonth += duration;

                if (miles > 0)
                {
                    milesDaily += miles;
                    points.activities[day].activity.Add("swimming");
                }
                // end

                // sport
                miles = (double)reader.GetDecimal(14);
                calories = (double)reader.GetDecimal(15);
                duration = (double)reader.GetDecimal(16);

                milesMonth += miles;
                durationMonth += calories;
                caloriesMonth += duration;

                if (miles > 0)
                {
                    milesDaily += miles;
                    points.activities[day].activity.Add("sport");
                }
                // end

                // yoga
                miles = (double)reader.GetDecimal(17);
                calories = (double)reader.GetDecimal(18);
                duration = (double)reader.GetDecimal(19);

                milesMonth += miles;
                durationMonth += calories;
                caloriesMonth += duration;

                if (miles > 0)
                {
                    points.activities[day].activity.Add("yoga");
                }
                // end

                // classes
                miles = (double)reader.GetDecimal(20);
                calories = (double)reader.GetDecimal(21);
                duration = (double)reader.GetDecimal(22);

                milesMonth += miles;
                durationMonth += calories;
                caloriesMonth += duration;

                if (miles > 0)
                {
                    milesDaily += miles;
                    points.activities[day].activity.Add("classes");
                }
                // end

                // downhilski
                miles = (double)reader.GetDecimal(23);
                calories = (double)reader.GetDecimal(24);
                duration = (double)reader.GetDecimal(25);

                milesMonth += miles;
                durationMonth += calories;
                caloriesMonth += duration;

                if (miles > 0)
                {
                    milesDaily += miles;
                    points.activities[day].activity.Add("downhilski");
                }
                // end

                // fitnessother
                miles = (double)reader.GetDecimal(26);
                calories = (double)reader.GetDecimal(27);
                duration = (double)reader.GetDecimal(28);

                milesMonth += miles;
                durationMonth += calories;
                caloriesMonth += duration;

                if (miles > 0)
                {
                    milesDaily += miles;
                    points.activities[day].activity.Add("fitnessother");
                }

                if (milesDaily >  0)
                {
                    points.activities[day].miles = Math.Round(milesDaily * 0.000621371, 2).ToString() + "mil";
                }
                // end

            }
            reader.Close();
            
            if (milesMonth > 0)
            {
                points.miles = Math.Round(milesMonth * 0.000621371, 2).ToString() + "mil";
            }
            
            if (durationMonth > 0)
            {
                string first = ((int)Math.Floor(durationMonth / 3600)).ToString("N0").PadLeft(2, '0');
                string second = ((durationMonth % 3600) / 60).ToString("N0").PadLeft(2, '0');
                if (first != "00" || second != "00")
                {
                    points.duration = first + ":" + second + " hrs";
                }
            }
            
            if (caloriesMonth > 0)
            {
                points.calories = caloriesMonth.ToString();
            }
            
        }

        [Route("WeekActivity")]
        public async Task<HttpResponseMessage> WeekActivity(SearchModel varSearchModel)
        {

            Thread.CurrentThread.CurrentCulture = culture;

            String idUser = varSearchModel.parameters[0].Trim();
            int year = Convert.ToInt32(varSearchModel.parameters[1].Trim());
            int month = Convert.ToInt32(varSearchModel.parameters[2].Trim());
            int day = Convert.ToInt32(varSearchModel.parameters[3].Trim());
            DateTime dateIni = new DateTime(year, month, day,0, 0, 0, 0);

            year = Convert.ToInt32(varSearchModel.parameters[4].Trim());
            month = Convert.ToInt32(varSearchModel.parameters[5].Trim());
            day = Convert.ToInt32(varSearchModel.parameters[6].Trim());
            DateTime dateEnd = new DateTime(year, month, day, 23, 59, 59, 998);



            ValidicWeekActivitiesModel points = new ValidicWeekActivitiesModel();

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();
                    await GetWeekActivity(connection1, idUser, dateIni, dateEnd, points);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, points);

        }

        private async Task GetWeekActivity(SqlConnection connection1, String idUser, DateTime dateIni, DateTime dateEnd, ValidicWeekActivitiesModel points)
        {
         
            for (int x = 0; x < 7; x++)
            {
                points.data.Add(new ValidicWeekActivitiesByDateModel());
            }

            string cmd = "Select d.iduser, d.datedone, " +
                         "runningdistance, runningduration, runningcalories, " +
                         "weightdistance, weightduration, weightcalories, " +
                         "cyclingdistance, cyclingduration, cyclingcalories, " +
                         "swimmingdistance, swimmingduration, swimmingcalories, " +
                         "sportdistance, sportduration, sportcalories, " +
                         "yogadistance, yogaduration, yogacalories, " +
                         "classesdistance, classesduration, classescalories, " +
                         "downhilskidistance, downhilskiduration, downhilskicalories, " +
                         "fitnessotherdistance, fitnessotherduration, fitnessothercalories " +
                         "from DailyData d " +
                         "LEFT JOIN users u on d.iduser = u.validicid " +
                         "where u.id = @idUser and (d.datedone >= @dateIni and  d.datedone <= @dateEnd) " +
                         "order by d.iduser, d.datedone ";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@idUser", SqlDbType.VarChar);
            parameter.Value = idUser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateEnd", SqlDbType.Date);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);


            SqlDataReader reader = await command1.ExecuteReaderAsync();

            double milesMonth = 0;
            double durationMonth = 0;
            double caloriesMonth = 0;
            int count = 0;
            while (await reader.ReadAsync())
            {
                string iduser = reader.GetString(0);
                int day = reader.GetDateTime(1).Day;

                double milesDaily = 0;
                double duratioDaily = 0;
                double caloriesDaily = 0;

                //running
                double miles = (double)reader.GetDecimal(2);
                double duration = (double)reader.GetDecimal(3);
                double calories = (double)reader.GetDecimal(4);

                milesMonth += miles;
                durationMonth += duration;
                caloriesMonth += calories; 

                milesDaily += miles;
                caloriesDaily += calories;
                duratioDaily += duration;
                
                if (miles > 0 || calories > 0 || duration > 0)
                {
                    points.data[count].activity.Add("Running");
                }


                //end

                // weight
                miles = (double)reader.GetDecimal(5);
                duration = (double)reader.GetDecimal(6);
                calories = (double)reader.GetDecimal(7);

                milesMonth += miles;
                durationMonth += duration;
                caloriesMonth += calories;

                milesDaily += miles;
                caloriesDaily += calories;
                duratioDaily += duration;


                if (miles > 0 || calories > 0 || duration > 0)
                {

                    points.data[count].activity.Add("Weight");
                }
                // end


                // cycling
                miles = (double)reader.GetDecimal(8);
                duration = (double)reader.GetDecimal(9);
                calories = (double)reader.GetDecimal(10);

                milesMonth += miles;
                durationMonth += duration;
                caloriesMonth += calories;

                milesDaily += miles;
                caloriesDaily += calories;
                duratioDaily += duration;

                if (miles > 0 || calories > 0 || duration > 0)
                {

                    points.data[count].activity.Add("Cycling");
                }
                
                // end

                // swimming
                miles = (double)reader.GetDecimal(11);
                duration = (double)reader.GetDecimal(12);
                calories = (double)reader.GetDecimal(13);

                milesMonth += miles;
                durationMonth += duration;
                caloriesMonth += calories;

                milesDaily += miles;
                caloriesDaily += calories;
                duratioDaily += duration;

                if (miles > 0 || calories > 0 || duration > 0)
                {
                    points.data[count].activity.Add("Swimming");
                }
                
                // end

                // sport
                miles = (double)reader.GetDecimal(14);
                duration = (double)reader.GetDecimal(15);
                calories = (double)reader.GetDecimal(16);

                milesMonth += miles;
                durationMonth += duration;
                caloriesMonth += calories;

                milesDaily += miles;
                caloriesDaily += calories;
                duratioDaily += duration;

                if (miles > 0 || calories > 0 || duration > 0)
                {
                    points.data[count].activity.Add("Sport");
                }
                
                // end

                // yoga
                miles = (double)reader.GetDecimal(17);
                duration = (double)reader.GetDecimal(18);
                calories = (double)reader.GetDecimal(19);

                milesMonth += miles;
                durationMonth += duration;
                caloriesMonth += calories;

                milesDaily += miles;
                caloriesDaily += calories;
                duratioDaily += duration;

                if (miles > 0 || calories > 0 || duration > 0)
                {
                    points.data[count].activity.Add("Yoga");
                }
                
                // end

                // classes
                miles = (double)reader.GetDecimal(20);
                duration = (double)reader.GetDecimal(21);
                calories = (double)reader.GetDecimal(22);

                milesMonth += miles;
                durationMonth += duration;
                caloriesMonth += calories;

                milesDaily += miles;
                caloriesDaily += calories;
                duratioDaily += duration;


                if (miles > 0 || calories > 0 || duration > 0)
                {
                    points.data[count].activity.Add("Classes");
                }
                
                // end

                // downhilski
                miles = (double)reader.GetDecimal(23);
                duration = (double)reader.GetDecimal(24);
                calories = (double)reader.GetDecimal(25);

                milesMonth += miles;
                durationMonth += duration;
                caloriesMonth += calories;

                milesDaily += miles;
                caloriesDaily += calories;
                duratioDaily += duration;

                if (miles > 0 || calories > 0 || duration > 0)
                {
                    points.data[count].activity.Add("Downhill ski");
                }
                
                // end

                // fitnessother
                miles = (double)reader.GetDecimal(26);
                duration = (double)reader.GetDecimal(27);
                calories = (double)reader.GetDecimal(28);

                milesMonth += miles;
                durationMonth += duration;
                caloriesMonth += calories;

                milesDaily += miles;
                caloriesDaily += calories;
                duratioDaily += duration;


                if (miles > 0 || calories > 0 || duration > 0)
                {
                    points.data[count].activity.Add("Other");
                }
                
                if (milesDaily > 0)
                {
                    points.data[count].miles = Math.Round(milesDaily * 0.000621371, 2).ToString();
                }

                if (caloriesDaily > 0)
                {
                    points.data[count].calories = caloriesDaily.ToString();
                }

                if (duratioDaily > 0)
                {
                    string first = ((int)Math.Floor(duratioDaily / 3600)).ToString("N0").PadLeft(2, '0');
                    string second = ((duratioDaily % 3600) / 60).ToString("N0").PadLeft(2, '0');
                    if (first != "00" || second != "00")
                    {
                        points.data[count].duration = first + ":" + second + " hrs";
                    }
                }
                count++;
                // end

            }
            reader.Close();

            if (milesMonth > 0)
            {
                points.miles = Math.Round(milesMonth * 0.000621371, 2).ToString();
            }

            if (durationMonth > 0)
            {
                string first = ((int)Math.Floor(durationMonth / 3600)).ToString("N0").PadLeft(2, '0');
                string second = ((durationMonth % 3600) / 60).ToString("N0").PadLeft(2, '0');
                if (first != "00" || second != "00")
                {
                    points.duration = first + ":" + second + " hrs";
                }
            }

            if (caloriesMonth > 0)
            {
                points.calories = caloriesMonth.ToString();
            }

        }
    }

    public class Activity
    {
        public string activity = "";
        public double calories = 0;
        public double distance = 0;
        public DateTime start = new DateTime();
        public double duration = 0;

    }

}
