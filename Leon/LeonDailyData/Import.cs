using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;


namespace LeonDailyData
{
    class Import
    {
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public async Task Start()
        {
           

            LeonModels.Validic.ValidicPointsModel points = new LeonModels.Validic.ValidicPointsModel();

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    //
                    //  we can get improve if we change datetime with hours,seconds....
                    //

                    await connection1.OpenAsync();

                    DateTime now = DateTime.Now;

                    var population = await GetDate(connection1);

                    DateTime dateData = population.Item1;
                    bool stop = population.Item2;

                    DateTime dateIni = new DateTime(dateData.Year, dateData.Month, dateData.Day, 0, 0, 0, 0, 0);
                    DateTime dateEnd = dateIni;
                    dateEnd = dateEnd.AddHours(23);
                    dateEnd = dateEnd.AddMinutes(59);
                    dateEnd = dateEnd.AddSeconds(59);
                    dateEnd = dateEnd.AddMilliseconds(998);
                    
                    await GetSteps(connection1, dateIni, dateEnd);
                    await GetSleep(connection1, dateIni, dateEnd);
                    await GetFitness(connection1, dateIni, dateEnd);

                    DateTime stoptime = new DateTime(now.Year, now.Month, now.Day, 0, 0, 0, 0, 0);
                    if (dateData < stoptime && !stop)
                    {
                        // only to fresh star - get all data
                        dateData = dateData.AddDays(1);
                    }
                    else
                    {
                        dateData = now;
                        stop = true; 
                    }

                    await UpdateDate(connection1, dateData, stop);


                }
            }
            catch (ApplicationException ex)
            {
                System.Console.WriteLine("GoLeon: " + ex.Message);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("GoLeon: " + ex.Message);

            }
            finally
            {
                System.Console.WriteLine("done!");
            }

        }

        private async Task<Tuple<DateTime,bool>> GetDate(SqlConnection connection1)
        {
            string cmd = "SELECT datedone, stop " +
                         "FROM dailydatedone "; 

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            DateTime date = new DateTime();
            bool stop = false;

            while (await reader.ReadAsync())
            {
                date = reader.GetDateTime(0);
                stop = reader.GetBoolean(1);
            }

            reader.Close();

            return new Tuple<DateTime,bool>(date,stop);

        }

        private async Task UpdateDate(SqlConnection connection1, DateTime now, bool stop)
        {
            string cmd = "update dailydatedone set datedone = @now, stop = @stop ";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@now", SqlDbType.DateTime);
            parameter.Value = now;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@stop", SqlDbType.Bit);
            parameter.Value = stop;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }


        private async Task GetSteps(SqlConnection connection1, DateTime dateIni, DateTime dateEnd)
        {
            string cmd = "SELECT v.userid,DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp], '+00:00'), v.utcoffset)))) as timestamp, " +
                         "v.steps,caloriesburned " +
                         "FROM ValidicRoutine v " +
                         "LEFT JOIN users u on v.userid = u.validicid " +
                         "where v.steps > 0 and " +
                         "(DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) between @timestampini and @timestampend) " +
                         "order by v.userid, v.steps desc";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@timestampini", SqlDbType.DateTime);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestampend", SqlDbType.DateTime);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);


            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;

            flag = await reader.ReadAsync();

            while (flag)
            {
                string iduser = reader.GetString(0);
                int steps = 0;
                double calories = 0;
                bool flagid = true;
                bool start = true;
                while (flagid && flag)
                {
                    if (start)
                    {
                        steps = (int)Convert.ToDouble(reader.GetDecimal(2));
                        calories = Convert.ToDouble(reader.GetDecimal(3));
                        start = false;
                    }

                    flag = await reader.ReadAsync();
                    if (flag)
                    {
                        if (iduser != reader.GetString(0))
                        {
                            flagid = false;
                        }
                    }
                }
                LeonAPICalculations.ValidicCategoryPoints categoryPoints = new LeonAPICalculations.ValidicCategoryPoints();
                int points = categoryPoints.GetStepPoints(steps);

                int rows = await UpdateSteps(connection1, iduser, dateIni, steps, calories);
                if (rows == 0)
                {
                    await InsertSteps(connection1, iduser, dateIni, steps, calories);
                }

                rows = await UpdateStepsPoints(connection1, iduser, dateIni, points);
                if (rows == 0)
                {
                    await InsertStepsPoints(connection1, iduser, dateIni, points);
                }
            }

            reader.Close();
            
        }

        private async Task<int> UpdateSteps(SqlConnection connection1,string iduser, DateTime dateIni, int count, double calories)
        {
            string strcommand = "UPDATE DailyData set stepcounts = @count, stepcalories = @calories " +
                                "WHERE iduser = @iduser and datedone = @dateIni"; 

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@iduser", SqlDbType.VarChar);
            parameter.Value = iduser;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni.Year + "-" + dateIni.Month + "-" + dateIni.Day;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@count", SqlDbType.Decimal);
            parameter.Value = count;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@calories", SqlDbType.Decimal);
            parameter.Value = calories;
            command1.Parameters.Add(parameter);

            return await command1.ExecuteNonQueryAsync();
        }

        private async Task InsertSteps(SqlConnection connection1, string iduser, DateTime dateIni, int count, double calories)
        {
            string strcommand = "INSERT INTO DailyData  (iduser, stepcounts, stepcalories, " +
                                "sleepduration, sleepcalories, " +
                                "runningdistance, runningduration, runningcalories, " +
                                "weightdistance, weightduration, weightcalories, " +
                                "cyclingdistance, cyclingduration, cyclingcalories, " +
                                "swimmingdistance, swimmingduration, swimmingcalories, " +
                                "sportdistance, sportduration, sportcalories, " +
                                "yogadistance, yogaduration, yogacalories, " +
                                "classesdistance, classesduration, classescalories, " +
                                "downhilskidistance, downhilskiduration, downhilskicalories , " +
                                "fitnessotherdistance, fitnessotherduration, fitnessothercalories,  " +
                                "datedone) " +
                                "Values (@iduser, @count, @calories, "  + 
                                "0,0,"+ 
                                "0,0,0," +
                                "0,0,0," + 
                                "0,0,0," +
                                "0,0,0," +
                                "0,0,0," +
                                "0,0,0," +
                                "0,0,0," +
                                "0,0,0," +
                                "0,0,0," +
                                "@dateIni) ";



            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@iduser", SqlDbType.VarChar);
            parameter.Value = iduser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni.Year + "-" + dateIni.Month + "-" + dateIni.Day;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@count", SqlDbType.Decimal);
            parameter.Value = count;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@calories", SqlDbType.Decimal);
            parameter.Value = calories;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task<int> UpdateStepsPoints(SqlConnection connection1, string iduser, DateTime dateIni, int points)
        {
            string strcommand = "UPDATE DailyDataPoints set step = @points " +
                                "WHERE iduser = @iduser and datedone = @dateIni";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@iduser", SqlDbType.VarChar);
            parameter.Value = iduser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni.Year + "-" + dateIni.Month + "-" + dateIni.Day;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@points", SqlDbType.Int);
            parameter.Value = points;
            command1.Parameters.Add(parameter);

            return await command1.ExecuteNonQueryAsync();
        }

        private async Task InsertStepsPoints(SqlConnection connection1, string iduser, DateTime dateIni, int points)
        {
            string strcommand = "INSERT INTO DailyDataPoints (iduser, step, " +
                                "sleep, running, weight, cycling, " +
                                "swimming, sport, yoga, classes, downhilski, " +
                                "otherfitness,datedone) " +
                                "Values (@iduser, @points, " +
                                "0,0,0,0,0,0,0,0,0,0,@dateIni) ";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@iduser", SqlDbType.VarChar);
            parameter.Value = iduser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni.Year + "-" + dateIni.Month + "-" + dateIni.Day;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@points", SqlDbType.Decimal);
            parameter.Value = points;
            command1.Parameters.Add(parameter);

           

            await command1.ExecuteNonQueryAsync();
        }

        private async Task GetSleep(SqlConnection connection1, DateTime dateIni, DateTime dateEnd)
        {
            string cmd = "SELECT v.userid,DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp], '+00:00'), v.utcoffset)))) as timestamp, " +
                         "v.totalsleep " +
                         "FROM ValidicSleep v " +
                         "LEFT JOIN users u on v.userid = u.validicid " +
                         "where " +
                         "(DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) between @timestampini and @timestampend) " +
                         "order by v.userid, DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) desc, " +
                         "v.totalsleep desc";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@timestampini", SqlDbType.DateTime);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestampend", SqlDbType.DateTime);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;

            flag = await reader.ReadAsync();

            while (flag)
            {
                string iduser = reader.GetString(0);

                double sleep = 0;
                bool flagid = true;
                bool start = true;
                while (flagid && flag)
                {
                    if (start)
                    {
                        sleep = Convert.ToDouble(reader.GetDecimal(2));
                    }

                    flag = await reader.ReadAsync();
                    if (flag)
                    {
                        if (iduser != reader.GetString(0))
                        {
                            flagid = false;
                        }
                    }
                }
                LeonAPICalculations.ValidicCategoryPoints categoryPoints = new LeonAPICalculations.ValidicCategoryPoints();
                int points = categoryPoints.GetSleepPoints(sleep);

                await UpdateSleep(connection1, iduser, dateIni, sleep);
                await UpdateSleepPoints(connection1, iduser, dateIni, points);
               
            }
            reader.Close();
           
        }

        private async Task UpdateSleep(SqlConnection connection1, string iduser, DateTime dateIni, double sleep)
        {
            string strcommand = "UPDATE DailyData set sleepduration = @sleep " +
                                "WHERE iduser = @iduser and datedone = @dateIni";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@iduser", SqlDbType.VarChar);
            parameter.Value = iduser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni.Year + "-" + dateIni.Month + "-" + dateIni.Day;
            command1.Parameters.Add(parameter);
            

            parameter = new SqlParameter("@sleep", SqlDbType.Decimal);
            parameter.Value = sleep;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task UpdateSleepPoints(SqlConnection connection1, string iduser, DateTime dateIni, int points)
        {
            string strcommand = "UPDATE DailyDataPoints set sleep = @points " +
                                "WHERE iduser = @iduser and datedone = @dateIni";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@iduser", SqlDbType.VarChar);
            parameter.Value = iduser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni.Year + "-" + dateIni.Month + "-" + dateIni.Day;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@points", SqlDbType.Int);
            parameter.Value = points;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task GetFitness(SqlConnection connection1, DateTime dateIni, DateTime dateEnd)
        {
            string cmd = "SELECT DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp], '+00:00'), v.utcoffset)))) as timestamp, " +
                         "v.calories, v.distance, a.name, v.starttime, v.duration, v.userid  " +
                         "FROM ValidicFitness v " +
                         "LEFT JOIN users u on v.userid = u.validicid " +
                         "LEFT JOIN ValidicActivityCategory a on v.activitycategory = a.id " +
                         "where  " +
                         "(DATEADD(dd, 0, DATEDIFF(dd, 0, DATEDIFF(dd, 0, SWITCHOFFSET(TODATETIMEOFFSET(v.[timestamp],'+00:00'),v.utcoffset)))) between @timestampini and @timestampend) " +
                         "order by v.userid, v.starttime ";

            SqlCommand command1 = new SqlCommand(cmd, connection1);

            SqlParameter parameter = new SqlParameter("@timestampini", SqlDbType.DateTime);
            parameter.Value = dateIni;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestampend", SqlDbType.DateTime);
            parameter.Value = dateEnd;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;

            flag = await reader.ReadAsync();

            while (flag)
            {
                List<Activity> activities = new List<Activity>();

                string iduser = reader.GetString(6);
                bool flagid = true;
                while (flagid && flag)
                {
                    Activity value = new Activity();
                    value.calories = Convert.ToDouble(reader.GetDecimal(1));
                    value.distance = Convert.ToDouble(reader.GetDecimal(2));
                    value.activity = reader.GetString(3).ToLower();
                    value.start = reader.GetDateTime(4);
                    value.duration = Convert.ToDouble(reader.GetDecimal(5));
                    activities.Add(value);

                    flag = await reader.ReadAsync();
                    if (flag)
                    {
                        if (iduser != reader.GetString(6))
                        {
                            flagid = false;
                        }
                    }
                }
                await CalculaPoinsFitness(connection1, iduser, dateIni, activities);
            }
            reader.Close();
          
        }

        private async Task CalculaPoinsFitness(SqlConnection connection1, string iduser, DateTime dateIni, List<Activity> activities)
        {
            if (activities.Count() > 0)
            {
                ActivityFitness actFitness = new ActivityFitness();

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
                    LeonAPICalculations.ValidicCategoryPoints categoryPoints = new LeonAPICalculations.ValidicCategoryPoints();
                    string name = GetActivityNameFitness(act.activity);
                    var distance = act.distance * 0.000621371;
                    var duration = act.duration / 60;
                    var points = categoryPoints.GetFitnesPoints(name,duration, distance, act.calories);

                    FillDataFitness(actFitness, name, act, points);
                   
                }

                await UpdateFitness(connection1, iduser, dateIni, actFitness);
                await UpdateFitnessPoints(connection1, iduser, dateIni, actFitness);
                
            }
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

        private string FillDataFitness(ActivityFitness actFitness, string activity,  Activity act, int points)
        {
            if (activity.Contains("running"))
            {
                actFitness.runningdistance += act.distance;
                actFitness.runningduration += act.duration;
                actFitness.runningcalories += act.calories;
                actFitness.runningpoints += points;
            }
            else if (activity.Contains("weight"))
            {
                actFitness.weightdistance += act.distance;
                actFitness.weightduration += act.duration;
                actFitness.weightcalories += act.calories;
                actFitness.weightpoints += points;
            }
            else if (activity.Contains("cycling"))
            {
                actFitness.cyclingdistance += act.distance;
                actFitness.cyclingduration += act.duration;
                actFitness.cyclingcalories += act.calories;
                actFitness.cyclingpoints += points;
            }
            else if (activity.Contains("swimming"))
            {
                actFitness.swimmingdistance += act.distance;
                actFitness.swimmingduration += act.duration;
                actFitness.swimmingcalories += act.calories;
                actFitness.swimmingpoints += points;
            }
            else if (activity.Contains("sport"))
            {
                actFitness.sportdistance += act.distance;
                actFitness.sportduration += act.duration;
                actFitness.sportcalories += act.calories;
                actFitness.sportpoints += points;
            }
            else if (activity.Contains("yoga") || activity.ToLower().Contains("pilates"))
            {
                actFitness.yogadistance += act.distance;
                actFitness.yogaduration += act.duration;
                actFitness.yogacalories += act.calories;
                actFitness.yogapoints += points;
            }
            else if (activity.Contains("classes") || activity.ToLower().Contains("pt training"))
            {
                actFitness.classesdistance += act.distance;
                actFitness.classesduration += act.duration;
                actFitness.classescalories += act.calories;
                actFitness.classespoints += points;
            }
            else if (activity.Contains("downhill ski"))
            {
                actFitness.downhilskidistance += act.distance;
                actFitness.downhilskiduration += act.duration;
                actFitness.downhilskicalories += act.calories;
                actFitness.downhilskipoints += points;
            }
            else
            {
                actFitness.fitnessotherdistance += act.distance;
                actFitness.fitnessotherduration += act.duration;
                actFitness.fitnessothercalories += act.calories;
                actFitness.fitnessotherOthersPoints += points;
            }

            return activity;

        }

        private async Task UpdateFitness(SqlConnection connection1, string iduser, DateTime dateIni, ActivityFitness actFitness)
        {
            string strcommand = "UPDATE DailyData set " +
                                "runningdistance = @runningdistance, runningduration = @runningduration, runningcalories = @runningcalories, " +
                                "weightdistance = @weightdistance, weightduration = @weightduration, weightcalories = @weightcalories, " +
                                "cyclingdistance = @cyclingdistance, cyclingduration = @cyclingduration, cyclingcalories = @cyclingcalories, " +
                                "swimmingdistance = @swimmingdistance, swimmingduration = @swimmingduration, swimmingcalories = @swimmingcalories, " +
                                "sportdistance = @sportdistance, sportduration = @sportduration, sportcalories = @sportcalories, " +
                                "yogadistance = @yogadistance, yogaduration = @yogaduration, yogacalories = @yogacalories, " +
                                "classesdistance = @classesdistance, classesduration = @classesduration, classescalories = @classescalories, " +
                                "downhilskidistance = @downhilskidistance, downhilskiduration = @downhilskiduration, downhilskicalories = @downhilskicalories, " +
                                "fitnessotherdistance = @fitnessotherdistance, fitnessotherduration = @fitnessotherduration, fitnessothercalories = @fitnessothercalories " +
                                "WHERE iduser = @iduser and datedone = @dateIni";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@iduser", SqlDbType.VarChar);
            parameter.Value = iduser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni.Year + "-" + dateIni.Month + "-" + dateIni.Day;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@runningdistance", SqlDbType.Decimal);
            parameter.Value = actFitness.runningdistance;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@runningduration", SqlDbType.Decimal);
            parameter.Value = actFitness.runningduration;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@runningcalories", SqlDbType.Decimal);
            parameter.Value = actFitness.runningcalories;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@weightdistance", SqlDbType.Decimal);
            parameter.Value = actFitness.weightdistance;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@weightduration", SqlDbType.Decimal);
            parameter.Value = actFitness.weightduration;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@weightcalories", SqlDbType.Decimal);
            parameter.Value = actFitness.weightcalories;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@cyclingdistance", SqlDbType.Decimal);
            parameter.Value = actFitness.cyclingdistance;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@cyclingduration", SqlDbType.Decimal);
            parameter.Value = actFitness.cyclingduration;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@cyclingcalories", SqlDbType.Decimal);
            parameter.Value = actFitness.cyclingcalories;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@swimmingdistance", SqlDbType.Decimal);
            parameter.Value = actFitness.swimmingdistance;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@swimmingduration", SqlDbType.Decimal);
            parameter.Value = actFitness.swimmingduration;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@swimmingcalories", SqlDbType.Decimal);
            parameter.Value = actFitness.swimmingcalories;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@sportdistance", SqlDbType.Decimal);
            parameter.Value = actFitness.sportdistance;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@sportduration", SqlDbType.Decimal);
            parameter.Value = actFitness.sportduration;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@sportcalories", SqlDbType.Decimal);
            parameter.Value = actFitness.sportcalories;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@yogadistance", SqlDbType.Decimal);
            parameter.Value = actFitness.yogadistance;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@yogaduration", SqlDbType.Decimal);
            parameter.Value = actFitness.yogaduration;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@yogacalories", SqlDbType.Decimal);
            parameter.Value = actFitness.yogacalories;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@classesdistance", SqlDbType.Decimal);
            parameter.Value = actFitness.classesdistance;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@classesduration", SqlDbType.Decimal);
            parameter.Value = actFitness.classesduration;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@classescalories", SqlDbType.Decimal);
            parameter.Value = actFitness.classescalories;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@downhilskidistance", SqlDbType.Decimal);
            parameter.Value = actFitness.downhilskidistance;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@downhilskiduration", SqlDbType.Decimal);
            parameter.Value = actFitness.swimmingduration;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@downhilskicalories", SqlDbType.Decimal);
            parameter.Value = actFitness.downhilskicalories;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fitnessotherdistance", SqlDbType.Decimal);
            parameter.Value = actFitness.fitnessotherdistance;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fitnessotherduration", SqlDbType.Decimal);
            parameter.Value = actFitness.fitnessotherduration;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fitnessothercalories", SqlDbType.Decimal);
            parameter.Value = actFitness.fitnessothercalories;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task UpdateFitnessPoints(SqlConnection connection1, string iduser, DateTime dateIni, ActivityFitness actFitness)
        {
            string strcommand = "UPDATE DailyDataPoints set running = @runningpoints, " +
                                "weight = @weightpoints, cycling = @cyclingpoints, " +
                                "swimming = @swimmingpoints, sport = @sportpoints, " +
                                "yoga = @yogapoints, classes = @classespoints, " +
                                "downhilski = @downhilskipoints, otherfitness = @fitnessotherOthersPoints " +
                                "WHERE iduser = @iduser and datedone = @dateIni";


            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@iduser", SqlDbType.VarChar);
            parameter.Value = iduser;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@dateIni", SqlDbType.Date);
            parameter.Value = dateIni.Year + "-" + dateIni.Month + "-" + dateIni.Day;
            command1.Parameters.Add(parameter);
                       
            parameter = new SqlParameter("@runningpoints", SqlDbType.Decimal);
            parameter.Value = actFitness.runningpoints;
            command1.Parameters.Add(parameter);
                        
            parameter = new SqlParameter("@weightpoints", SqlDbType.Decimal);
            parameter.Value = actFitness.weightpoints;
            command1.Parameters.Add(parameter);
                        
            parameter = new SqlParameter("@cyclingpoints", SqlDbType.Decimal);
            parameter.Value = actFitness.cyclingpoints;
            command1.Parameters.Add(parameter);
                        
            parameter = new SqlParameter("@swimmingpoints", SqlDbType.Decimal);
            parameter.Value = actFitness.swimmingpoints;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@sportpoints", SqlDbType.Decimal);
            parameter.Value = actFitness.sportpoints;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@yogapoints", SqlDbType.Decimal);
            parameter.Value = actFitness.yogapoints;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@classespoints", SqlDbType.Decimal);
            parameter.Value = actFitness.classespoints;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@downhilskipoints", SqlDbType.Decimal);
            parameter.Value = actFitness.downhilskipoints;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@fitnessotherOthersPoints", SqlDbType.Decimal);
            parameter.Value = actFitness.fitnessotherOthersPoints;
            command1.Parameters.Add(parameter);


            await command1.ExecuteNonQueryAsync();
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

    public class ActivityFitness
    {
        public double runningdistance = 0;
        public double runningduration = 0;
        public double runningcalories = 0;
        public double runningpoints = 0;
        public double weightdistance = 0;
        public double weightduration = 0;
        public double weightcalories = 0;
        public double weightpoints = 0;
        public double cyclingdistance = 0;
        public double cyclingduration = 0;
        public double cyclingcalories = 0;
        public double cyclingpoints = 0;
        public double swimmingdistance = 0;
        public double swimmingduration = 0;
        public double swimmingcalories = 0;
        public double swimmingpoints = 0;
        public double sportdistance = 0;
        public double sportduration = 0;
        public double sportcalories = 0;
        public double sportpoints = 0;
        public double yogadistance = 0;
        public double yogaduration = 0;
        public double yogacalories = 0;
        public double yogapoints = 0;
        public double classesdistance = 0;
        public double classesduration = 0;
        public double classescalories = 0;
        public double classespoints = 0;
        public double downhilskidistance = 0;
        public double downhilskiduration = 0;
        public double downhilskicalories = 0;
        public double downhilskipoints = 0;
        public double fitnessotherdistance = 0;
        public double fitnessotherduration = 0;
        public double fitnessothercalories = 0;
        public double fitnessotherOthersPoints = 0;

    }

}
