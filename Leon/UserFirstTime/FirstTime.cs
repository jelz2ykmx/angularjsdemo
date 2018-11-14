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

namespace UserFirstTime
{
    class FirstTime
    {
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        String idValidic = ConfigurationManager.AppSettings["idvalidic"];
        String tokenValidic = ConfigurationManager.AppSettings["tokenvalidic"];

        List<UsersIds> userids = new List<UsersIds>();
        List<string> validicObjects = new List<string>();

        Dictionary<string, string> activities = new Dictionary<string, string>();

        private static bool _isWaiting = true;

        public void Start()
        {
            validicObjects.Add("fitness");
            validicObjects.Add("routine");
            validicObjects.Add("nutrition");
            validicObjects.Add("sleep");
            validicObjects.Add("weight");
            validicObjects.Add("diabetes");
            validicObjects.Add("biometrics");

            try
            {
                GetUsersIds();
                GetActiviIds();
                StartUpdate(); 
           
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("GoLeon: " + ex.Message);
                //MessageBox.Show(ex.Message);
            }
#if DEBUG
           System.Console.WriteLine("done!");
#endif
        }



        void GetUsersIds()
        {

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                connection1.Open();

                String strcommand = "SELECT u.id, u.validicid, " +
                                    "v.nextfitness,v.nextroutine,v.nextnutrition,v.nextsleep,v.nextweight,v.nextdiabetes,v.nextbiometrics, " +
                                    "v.startdate, v.enddate, v.namemarket, subname " +
                                    "FROM users u " +
                                    "left join ValidicUserUpdate v on u.id = v.userid " +
                                    "where u.validic = 1 and v.sync = 1  and v.firsttime = 0";


                SqlCommand command1 = new SqlCommand(strcommand, connection1);

                SqlDataReader reader = command1.ExecuteReader();

                while (reader.Read())
                {
                    UsersIds userid = new UsersIds();
                    userid.id = reader.GetString(0);
                    userid.userid = reader.GetString(1);
                    userid.nextfitness = "";
                    userid.nextroutine = "";
                    userid.nextnutrition = "";
                    userid.nextsleep = "";
                    userid.nextweight = "";
                    userid.nextdiabetes = "";
                    userid.nextbiometrics = "";
                    userid.saveDates = true;
                    if (!reader.IsDBNull(2))
                    {
                        userid.nextfitness = reader.GetString(2);
                    }
                    if (!reader.IsDBNull(3))
                    {
                        userid.nextroutine = reader.GetString(3);
                    }
                    if (!reader.IsDBNull(4))
                    {
                        userid.nextnutrition = reader.GetString(4);
                    }
                    if (!reader.IsDBNull(5))
                    {
                        userid.nextsleep = reader.GetString(5);
                    }
                    if (!reader.IsDBNull(6))
                    {
                        userid.nextweight = reader.GetString(6);
                    }
                    if (!reader.IsDBNull(7))
                    {
                        userid.nextdiabetes = reader.GetString(7);
                    }
                    if (!reader.IsDBNull(8))
                    {
                        userid.nextbiometrics = reader.GetString(8);
                    }
                    if (!reader.IsDBNull(9))
                    {
                        userid.startDate = reader.GetDateTime(9);
                    }
                    else
                    {
                        userid.saveDates = false;
                    }
                    if (!reader.IsDBNull(10))
                    {
                        userid.endDate = reader.GetDateTime(10);
                    }
                    userid.nameMarket = reader.GetString(11);
                    userid.subName = reader.GetString(12);
                    userids.Add(userid);
                }
                reader.Close();

            }

        }

        void GetActiviIds()
        {

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                connection1.Open();

                String strcommand = "SELECT id, name FROM ValidicActivity ";


                SqlCommand command1 = new SqlCommand(strcommand, connection1);

                SqlDataReader reader = command1.ExecuteReader();

                while (reader.Read())
                {
                    activities.Add(reader.GetString(1).ToLower(), reader.GetString(0));
                }
                reader.Close();

            }

        }

        void StartUpdate()
        {
            DateTime nowDate = DateTime.Now;
            DateTime startDate = DateTime.Now.AddDays(-14);

            foreach (UsersIds userid in userids)
            {
                bool continueInsert = true;

                if (userid.saveDates)
                {
                    nowDate = userid.endDate;
                    startDate = userid.startDate;
                }
                if (userid.nextfitness != "L")
                {
                    continueInsert =  GetValidicData(0, userid, startDate, nowDate, "");
                }
                if (continueInsert && userid.nextroutine != "L")
                {
                    continueInsert = GetValidicData(1, userid, startDate, nowDate, "");
                }
                if (continueInsert && userid.nextnutrition != "L")
                {
                    continueInsert = GetValidicData(2, userid, startDate, nowDate, "");
                }
                if (continueInsert && userid.nextsleep != "L")
                {
                    continueInsert = GetValidicData(3, userid, startDate, nowDate, "");
                }
                if (continueInsert && userid.nextweight != "L")
                {
                    continueInsert = GetValidicData(4, userid, startDate, nowDate, "");
                }
                if (continueInsert && userid.nextdiabetes != "L")
                {
                    continueInsert = GetValidicData(5, userid, startDate, nowDate, "");
                }
                if (continueInsert && userid.nextbiometrics != "L")
                {
                    continueInsert = GetValidicData(6, userid, startDate, nowDate, "");
                }

                if (!continueInsert)
                {
                    break;
                }

            }

        }

        bool GetValidicData(int validicObject, UsersIds userid, DateTime startDate, DateTime nowDate, String next)
        {
            bool continueInsert = true;

            _isWaiting = true;

            HttpClient clientHttp = new HttpClient();
            clientHttp.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            clientHttp.BaseAddress = new Uri("https://api.validic.com");

            String cadena = "";

            if (next != "")
            {
                cadena = next;
            }
            else
            {
                string sini = startDate.ToString("s");
                string send = nowDate.ToString("s");

                cadena = "/v1/organizations/" + idValidic + "/users/" + userid.userid +
                        "/" + validicObjects[validicObject] + "/latest?access_token=" + tokenValidic +
                        "&source=" + userid.subName + "&start_date=" + sini.ToString() + "&end_date=" + send.ToString() + "&show_original_source=1"; 
            }

            Task.Run(async () => {
            
                var task = await clientHttp.GetAsync(cadena);


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
                            token = o.SelectToken("summary.next");
                            next = token.ToString();

                            token = o.SelectToken(validicObjects[validicObject]);

                            continueInsert =  insertData(o, validicObject, userid, startDate, nowDate, next);

                            if (continueInsert)
                            {
                                if (next != "")
                                {
                                    GetValidicData(validicObject, userid, startDate, nowDate, next);
                                }
                            }
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

                _isWaiting = false;
            });

            while (_isWaiting)
            {
               
            }

            return continueInsert;

        }

        bool insertData(JToken o, int validicObject, UsersIds userid, DateTime startDate, DateTime nowDate, String next)
        {
            try
            {
                using (TransactionScope scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                    using (SqlConnection connection1 = new SqlConnection(connetionString))
                    {
                        connection1.Open();

                        JToken token = o.SelectToken(validicObjects[validicObject]);
                        int count = token.Count();

                        for (int x = 0; x < count; x++)
                        {
                            bool flagContinue = true;
                            token = o.SelectToken(validicObjects[validicObject] + "[" + x + "].device");
                            String device = token.ToString();

                            if (device.ToUpper().Contains("com.Apple.Health".ToUpper()) && device.ToUpper() != "com.Apple.Health.AggregateRecord".ToUpper())
                            {
                                flagContinue = false;
                            }

                            /*
                            if (device.ToUpper() == "ValidicMobile".ToUpper())
                            {
                                InsertValidicMobile(connection1, validicObject, o, x);
                                flagContinue = false;
                            }
                            */
                            if (flagContinue)
                            {
                                token = o.SelectToken(validicObjects[validicObject] + "[" + x + "].activity_category");
                                string name = "";
                                string idActivity = "";
                                if (token != null && token.ToString() != "")
                                {
                                    name = token.ToString();
                                    idActivity = SearchActivityCategory(connection1, validicObject, name);
                                    if (idActivity == "")
                                    {
                                        idActivity = InsertActivityCategory(connection1, validicObject, name);
                                    }
                                }
                                token = o.SelectToken(validicObjects[validicObject] + "[" + x + "].source");
                                name = token.ToString();
                                token = o.SelectToken(validicObjects[validicObject] + "[" + x + "].source_name");
                                string longName = token.ToString();
                                string idSource = SearchSource(connection1, name);
                                if (idSource == "")
                                {
                                    idSource = InsertSource(connection1, name, longName);
                                }

                                if (validicObject == 0)
                                {
                                    int updates = UpdateFitness(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    if (updates == 0)
                                    {
                                        SaveFitness(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    }
                                }
                                else if (validicObject == 1)
                                {
                                    int updates = UpdateRoutine(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    if (updates == 0)
                                    {
                                        SaveRoutine(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    }
                                }
                                else if (validicObject == 2)
                                {
                                    int updates = UpdateNutrition(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    if (updates == 0)
                                    {
                                        SaveNutrition(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    }
                                }
                                else if (validicObject == 3)
                                {
                                    int updates = UpdateSleep(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    if (updates == 0)
                                    {
                                        SaveSleep(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    }
                                }
                                else if (validicObject == 4)
                                {
                                    int updates = UpdateWeight(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    if (updates == 0)
                                    {
                                        SaveWeight(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    }
                                }
                                else if (validicObject == 5)
                                {
                                    int updates = UpdateDiabetes(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    if (updates == 0)
                                    {
                                        SaveDiabetes(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    }
                                }
                                else if (validicObject == 6)
                                {
                                    int updates = UpdateBiometrics(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    if (updates == 0)
                                    {
                                        SaveBiometrics(connection1, o, validicObject, userid, x, idActivity, idSource);
                                    }
                                }
                            }
                        }

                        //bool update = await SearchUserUpdate(connection1, userid.id);
                        //if (update)
                        //{
                        UserUpdate(connection1, validicObject, userid, startDate, nowDate, next);
                        //}
                        //else
                        //{
                        //    await InsertUserUpdate(connection1, validicObject, userid, startDate, nowDate, next);
                        //}
                    }

                    scope.Complete();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Goleon: " + ex.Message);

                return false;

            }

            return true;
        }

        void InsertValidicMobile(SqlConnection connection1, int validicObject, JToken o, int x)
        {

            String strcommand = "INSERT INTO ValidicMobile " +
                                     "(type,userid, timestamp,data) " +
                                     "values (@type,@userid,@timestamp,@data)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@type", SqlDbType.Int);
            parameter.Value = validicObject;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = o.SelectToken(validicObjects[validicObject] + "[" + x + "].user_id");
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            parameter.Value = o.SelectToken(validicObjects[validicObject] + "[" + x + "].timestamp");
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@data", SqlDbType.VarChar);
            parameter.Value = o.SelectToken(validicObjects[validicObject] + "[" + x + "]").ToString();
            command1.Parameters.Add(parameter);

            command1.ExecuteNonQuery();

        }

        string SearchActivityCategory(SqlConnection connection1, int validicObject, string activity)
        {
            string id = "";

            string strcommand = "select id from ValidicActivityCategory where idactivity = @idactivity and name = @activity";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@idactivity", SqlDbType.VarChar);
            parameter.Value = activities[validicObjects[validicObject]];
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@activity", SqlDbType.VarChar);
            parameter.Value = activity;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = command1.ExecuteReader();

            while (reader.Read())
            {
                id = reader.GetString(0);
            }

            reader.Close();

            return id;
        }

        string InsertActivityCategory(SqlConnection connection1, int validicObject, string activity)
        {
            string id = Guid.NewGuid().ToString();

            String strcommand = "INSERT INTO ValidicActivityCategory " +
                                 "(id,name,idactivity) " +
                                 "values (@id,@name,@idactivity)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            parameter.Value = id;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@name", SqlDbType.VarChar);
            parameter.Value = activity;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@idactivity", SqlDbType.VarChar);
            parameter.Value = activities[validicObjects[validicObject]];
            command1.Parameters.Add(parameter);

            command1.ExecuteNonQuery();

            return id;
        }

        string SearchSource(SqlConnection connection1, string name)
        {
            string id = "";

            string strcommand = "select id from ValidicSources where source = @source";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = name;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = command1.ExecuteReader();

            while (reader.Read())
            {
                id = reader.GetString(0);
            }

            reader.Close();

            return id;
        }

        string InsertSource(SqlConnection connection1, string name, string longName)
        {
            string id = Guid.NewGuid().ToString();

            String strcommand = "INSERT INTO ValidicSources " +
                                 "(id,source,sourcename) " +
                                 "values (@id,@source,@sourcename)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            parameter.Value = id;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = name;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@sourcename", SqlDbType.VarChar);
            parameter.Value = longName;
            command1.Parameters.Add(parameter);


            command1.ExecuteNonQuery();

            return id;

        }

        int UpdateFitness(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "Update validicFitness " +
                              "set activitycategory = @activitycategory, calories = @calories, distance = @distance, duration = @duration, intensity = @intensity," +
                              "lastupdated = @lastupdated, source = @source, starttime = @starttime, timestamp = @timestamp, type = @type, userid = @userid," +
                              "utcoffset = @utcoffset, validated = @validated " +
                              "where id = @id";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("fitness[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@activitycategory", SqlDbType.VarChar);
            parameter.Value = idActivity;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@calories", SqlDbType.Decimal);
            token = o.SelectToken("fitness[" + x + "].calories");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@distance", SqlDbType.Decimal);
            token = o.SelectToken("fitness[" + x + "].distance");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@duration", SqlDbType.Decimal);
            token = o.SelectToken("fitness[" + x + "].duration");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@intensity", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].intensity");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("fitness[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@starttime", SqlDbType.DateTime);
            token = o.SelectToken("fitness[" + x + "].start_time");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("fitness[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@type", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].type");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            return command1.ExecuteNonQuery();


        }

        void SaveFitness(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "INSERT INTO validic" + validicObjects[validicObject] + " " +
                              "(id,activitycategory,calories,distance,duration,intensity,lastupdated,source,starttime,timestamp,type,userid,utcoffset, " +
                              "validated) " +
                              "values (@id,@activitycategory,@calories,@distance,@duration,@intensity,@lastupdated,@source,@starttime,@timestamp,@type,@userid,@utcoffset, " +
                              "@validated)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("fitness[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@activitycategory", SqlDbType.VarChar);
            parameter.Value = idActivity;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@calories", SqlDbType.Decimal);
            token = o.SelectToken("fitness[" + x + "].calories");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@distance", SqlDbType.Decimal);
            token = o.SelectToken("fitness[" + x + "].distance");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@duration", SqlDbType.Decimal);
            token = o.SelectToken("fitness[" + x + "].duration");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@intensity", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].intensity");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("fitness[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@starttime", SqlDbType.DateTime);
            token = o.SelectToken("fitness[" + x + "].start_time");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("fitness[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@type", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].type");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("fitness[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userleon", SqlDbType.VarChar);
            parameter.Value = userid.id;
            command1.Parameters.Add(parameter);


            command1.ExecuteNonQuery();

        }

        int UpdateRoutine(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "update validicroutine " +
                              "set caloriesburned = @caloriesburned, distance = @distance, elevation = @elevation, floors = @floors, lastupdated = @lastupdated," +
                              "source = @source, steps = @steps, timestamp = @timestamp, userid = @userid, utcoffset = @utcoffset, validated = @validated," +
                              "water = @water " +
                              "where id = @id";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("routine[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@caloriesburned", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].calories_burned");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@distance", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].distance");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@elevation", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].elevation");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@floors", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].floors");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("routine[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@steps", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].steps");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("routine[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("routine[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("routine[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("routine[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@water", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].water");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            return command1.ExecuteNonQuery();

        }

        void SaveRoutine(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "INSERT INTO validicroutine " +
                              "(id,caloriesburned,distance,elevation,floors,lastupdated,source,steps,timestamp,userid,utcoffset,validated,water) " +
                              "values (@id,@caloriesburned,@distance,@elevation,@floors,@lastupdated,@source,@steps,@timestamp,@userid,@utcoffset,@validated,@water)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("routine[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@caloriesburned", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].calories_burned");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@distance", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].distance");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@elevation", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].elevation");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@floors", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].floors");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("routine[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@steps", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].steps");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("routine[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("routine[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("routine[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("routine[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@water", SqlDbType.Decimal);
            token = o.SelectToken("routine[" + x + "].water");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userleon", SqlDbType.VarChar);
            parameter.Value = userid.id;
            command1.Parameters.Add(parameter);


            command1.ExecuteNonQuery();

        }

        int UpdateNutrition(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "update ValidicNutrition " +
                              "set calories = @calories, carbohydrates = @carbohydrates, fat = @fat, fiber = @fiber, lastupdated = @, meal = @, protein = @protein," +
                              "sodium = @sodium, source = @source, timestamp = @timestamp, userid = @userid, utcoffset = @utcoffset, validated = @validated, water = @water " +
                              "where id =@id";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("nutrition[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@calories", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].calories");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@carbohydrates", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].carbohydrates");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fat", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].fat");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fiber", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].fiber");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);


            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("nutrition[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@meal", SqlDbType.VarChar);
            token = o.SelectToken("nutrition[" + x + "].meal");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@protein", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].protein");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@sodium", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].sodium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("nutrition[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("nutrition[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("nutrition[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("nutrition[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@water", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].water");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            return command1.ExecuteNonQuery();

        }

        void SaveNutrition(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "INSERT INTO ValidicNutrition " +
                              "(id,calories,carbohydrates,fat,fiber,lastupdated,meal,protein,sodium,source,timestamp,userid,utcoffset,validated,water ) " +
                              "values (@id,@calories,@carbohydrates,@fat,@fiber,@last_updated,@meal,protein,@sodium,@source,@timestamp,@userid,@utcoffset,@validated,water)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("nutrition[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@calories", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].calories");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@carbohydrates", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].carbohydrates");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fat", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].fat");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fiber", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].fiber");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);


            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("nutrition[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@meal", SqlDbType.VarChar);
            token = o.SelectToken("nutrition[" + x + "].meal");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@protein", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].protein");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@sodium", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].sodium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("nutrition[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("nutrition[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("nutrition[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("nutrition[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@water", SqlDbType.Decimal);
            token = o.SelectToken("nutrition[" + x + "].water");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            command1.ExecuteNonQuery();

        }

        int UpdateSleep(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "update ValidicSleep " +
                              "set awake = @awake, deep = @deep, lastupdated = @lastupdated, light = @light, rem = @rem, source = @source," +
                              "timeswoken = @timeswoken, timestamp = @timestamp, totalsleep = @totalsleep, userid = @userid, utcoffset = @utcoffset, validated = @validated " +
                              "where id = @id";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("sleep[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@awake", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].awake");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@deep", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].deep");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("sleep[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@light", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].light");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@rem", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].rem");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timeswoken", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].times_woken");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("sleep[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@totalsleep", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].total_sleep");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("sleep[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("sleep[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("sleep[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            return command1.ExecuteNonQuery();

        }

        void SaveSleep(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "INSERT INTO ValidicSleep " +
                              "(id,awake,deep,lastupdated,light,rem,source,timeswoken,timestamp,totalsleep,userid,utcoffset,validated ) " +
                              "values (@id,@awake,@deep,@lastupdated,@light,@rem,@source,@timeswoken,@timestamp,@totalsleep,@userid,@utcoffset,@validated)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("sleep[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@awake", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].awake");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@deep", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].deep");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("sleep[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@light", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].light");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@rem", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].rem");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timeswoken", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].times_woken");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("sleep[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@totalsleep", SqlDbType.Decimal);
            token = o.SelectToken("sleep[" + x + "].total_sleep");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("sleep[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("sleep[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("sleep[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            command1.ExecuteNonQuery();

        }

        int UpdateWeight(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "update ValidicWeight " +
                              "set bmi = @bmi, fatpercent = @fatpercent, free_mass = @freemass, height = @height, lastupdated = @lastupdated," +
                              "massweight = @massweight, source = @source, timestamp = @timestamp, userid = @userid, utcoffset = @utcoffset, validated = @validated," +
                              "weight = weight " +
                              "where id = @id";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("weight[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bmi", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].bmi");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fatpercent", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].fat_percent");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@freemass", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].free_mass");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@height", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].height");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("weight[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@massweight", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].mass_weight");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("weight[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("weight[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("weight[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("weight[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@weight", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].weight");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            return command1.ExecuteNonQuery();

        }

        void SaveWeight(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "INSERT INTO ValidicWeight " +
                              "(id,bmi,fatpercent,free_mass,height,lastupdated,massweight,source,timestamp,userid,utcoffset,validated,weight ) " +
                              "values (@id,@bmi,@fatpercent,@freemass,@height,@lastupdated,@massweight,@source,@timestamp,@userid,@utcoffset,@validated,@weight)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("weight[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bmi", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].bmi");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fatpercent", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].fat_percent");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@freemass", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].free_mass");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@height", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].height");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("weight[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@massweight", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].mass_weight");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("weight[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("weight[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("weight[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("weight[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@weight", SqlDbType.Decimal);
            token = o.SelectToken("weight[" + x + "].weight");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            command1.ExecuteNonQuery();

        }

        int UpdateDiabetes(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "update ValidicDiabetes " +
                              "set bloodglucose = @bloodglucose, cpeptide = @cpeptide, fastingplasmaglucosetest = @fastingplasmaglucosetest, hba1c = @hba1c," +
                              "insulin = @insulin, lastupdated = @lastupdated, oralglucosetolerancetest = @oralglucosetolerancetest," +
                              "randomplasmaglucosetest = @randomplasmaglucosetest, relationshiptomeal = @relationshiptomeal, " +
                              "source = @source, timestamp = @timestamp, triglyceride = @triglyceride, userid = @userid, utcoffset = @utcoffset, validated = @validated " +
                              "where id = @id";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("diabetes[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodglucose", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].blood_glucose");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@cpeptide", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].c_peptide");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@freemass", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].free_mass");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fastingplasmaglucosetest", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].fasting_plasma_glucose_test");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@hba1c", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].hba1c");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@insulin", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].insulin");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("diabetes[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@oralglucosetolerancetest", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].oral_glucose_tolerance_test");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@randomplasmaglucosetest", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].random_plasma_glucose_test");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@relationshiptomeal", SqlDbType.VarChar);
            token = o.SelectToken("diabetes[" + x + "].relationship_to_meal");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("diabetes[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@triglyceride", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].triglyceride");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("diabetes[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("diabetes[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("diabetes[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            return command1.ExecuteNonQuery();

        }

        void SaveDiabetes(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "INSERT INTO ValidicDiabetes " +
                              "(id,bloodglucose,cpeptide,fastingplasmaglucosetest,hba1c,insulin,lastupdated,oralglucosetolerancetest," +
                              "randomplasmaglucosetest,relationshiptomeal,source,timestamp,triglyceride,userid,utcoffset,validated ) " +
                              "values (@id,@bloodglucose,@cpeptide,@fastingplasmaglucosetest,@hba1c,@insulin,@lastupdated,@oralglucosetolerancetest," +
                              "@randomplasmaglucosetest,@relationshiptomeal,@source,@timestamp,@triglyceride,@userid,@utcoffset,@validated)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("diabetes[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodglucose", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].blood_glucose");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@cpeptide", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].c_peptide");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@freemass", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].free_mass");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fastingplasmaglucosetest", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].fasting_plasma_glucose_test");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@hba1c", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].hba1c");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@insulin", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].insulin");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("diabetes[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@oralglucosetolerancetest", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].oral_glucose_tolerance_test");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@randomplasmaglucosetest", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].random_plasma_glucose_test");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@relationshiptomeal", SqlDbType.VarChar);
            token = o.SelectToken("diabetes[" + x + "].relationship_to_meal");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("diabetes[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@triglyceride", SqlDbType.Decimal);
            token = o.SelectToken("diabetes[" + x + "].triglyceride");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("diabetes[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("diabetes[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("diabetes[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            command1.ExecuteNonQuery();

        }

        int UpdateBiometrics(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "update ValidicDiabetes " +
                              "set bloodcalcium = @bloodcalcium, bloodchromium = @bloodchromium, bloodfolicacid = @bloodfolicacid, bloodmagnesium = @bloodmagnesium," +
                              "bloodpotassium = @bloodpotassium, bloodsodium = @bloodsodium, bloodvitamin_b12 = @bloodvitamin_b12, bloodzinc = @bloodzinc," +
                              "creatinekinase = @creatinekinase, crp = @crp, diastolic = @diastolic, ferritin = @ferritin, hdl = @hdl, hscrp = @hscrp," +
                              "il6 = @il6, lastupdated = @lastupdated, ldl = @ldl, restingheartrate = @restingheartrate," +
                              "source = @source, spo2 = @spo2, systolic = @systolic, temperature = @temperature, testosterone = @testosterone," +
                              "timestamp = @timestamp, totalcholesterol = @totalcholesterol, tsh = @tsh, uricacid = @uricacid, userid = @userid," +
                              "utcoffset = @utcoffset, validated = @validated, vitamind = @vitamind, whitecellcount = @whitecellcount " +
                              "where id = @id";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("biometrics[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodcalcium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_calcium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodchromium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_chromium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodfolicacid", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_folic_acid");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodmagnesium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_magnesium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodpotassium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_potassium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodsodium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_sodium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);


            parameter = new SqlParameter("@bloodvitaminb12", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_vitamin_b12");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodzinc", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_zinc");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@creatinekinase", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].creatine_kinase");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@crp", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].crp");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@diastolic", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].diastolic");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ferritin", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].ferritin");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);


            parameter = new SqlParameter("@hdl", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].hdl");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@hscrp", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].hscrp");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@il6", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].il6");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("biometrics[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ldl", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].ldl");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@spo2", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].spo2");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@systolic", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].systolic");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@temperature", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].temperature");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@testosterone", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].testosterone");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("biometrics[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@totalcholesterol", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].total_cholesterol");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@tsh", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].tsh");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@uricacid", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].uric_acid");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("biometrics[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("biometrics[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("biometrics[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@vitamind", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].vitamind");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@whitecellcount", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].white_cell_count");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);


            return command1.ExecuteNonQuery();

        }

        void SaveBiometrics(SqlConnection connection1, JToken o, int validicObject, UsersIds userid, int x, string idActivity, string idSource)
        {
            String strcommand = "INSERT INTO ValidicDiabetes " +
                              "(id,bloodcalcium,bloodchromium,bloodfolicacid,bloodmagnesium,bloodpotassium,bloodsodium,bloodvitamin_b12,bloodzinc," +
                              "creatinekinase,crp,diastolic,ferritin,hdl,hscrp,il6,lastupdated,ldl,restingheartrate," +
                              "source,spo2,systolic,temperature,testosterone,timestamp,totalcholesterol,tsh,uricacid,userid,utcoffset,validated,vitamind,whitecellcount ) " +
                              "values (@id,@bloodcalcium,@bloodchromium,@bloodfolicacid,@bloodmagnesium,@bloodpotassium,@bloodsodium,@bloodvitamin_b12,@bloodzinc," +
                              "@creatinekinase,@crp,@diastolic,@ferritin,@hdl,@hscrp,@il6,@lastupdated,@ldl,restingheartrate," +
                              "@source,@spo2,@systolic,@temperature,@testosterone,@timestamp,@totalcholesterol,@tsh,@uricacid,@userid,@utcoffset,@validated,@vitamind,@whitecellcount )";


            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@id", SqlDbType.VarChar);
            JToken token = o.SelectToken("biometrics[" + x + "]._id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodcalcium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_calcium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodchromium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_chromium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodfolicacid", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_folic_acid");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodmagnesium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_magnesium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodpotassium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_potassium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodsodium", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_sodium");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);


            parameter = new SqlParameter("@bloodvitaminb12", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_vitamin_b12");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@bloodzinc", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].blood_zinc");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@creatinekinase", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].creatine_kinase");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@crp", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].crp");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@diastolic", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].diastolic");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ferritin", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].ferritin");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);


            parameter = new SqlParameter("@hdl", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].hdl");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@hscrp", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].hscrp");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@il6", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].il6");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lastupdated", SqlDbType.DateTime);
            token = o.SelectToken("biometrics[" + x + "].last_updated");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ldl", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].ldl");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@source", SqlDbType.VarChar);
            parameter.Value = idSource;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@spo2", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].spo2");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@systolic", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].systolic");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@temperature", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].temperature");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@testosterone", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].testosterone");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@timestamp", SqlDbType.DateTime);
            token = o.SelectToken("biometrics[" + x + "].timestamp");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@totalcholesterol", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].total_cholesterol");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@tsh", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].tsh");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@uricacid", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].uric_acid");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            token = o.SelectToken("biometrics[" + x + "].user_id");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@utcoffset", SqlDbType.VarChar);
            token = o.SelectToken("biometrics[" + x + "].utc_offset");
            parameter.Value = token.ToString();
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@validated", SqlDbType.VarChar);
            token = o.SelectToken("biometrics[" + x + "].validated");
            parameter.Value = Convert.ToBoolean(token.ToString());
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@vitamind", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].vitamind");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@whitecellcount", SqlDbType.Decimal);
            token = o.SelectToken("biometrics[" + x + "].white_cell_count");
            if (token.ToString() != "")
            {
                parameter.Value = Convert.ToDouble(token.ToString());
            }
            else
            {
                parameter.Value = 0;
            }
            command1.Parameters.Add(parameter);


            command1.ExecuteNonQuery();

        }

        bool SearchUserUpdate(SqlConnection connection1, string userid)
        {
            bool update = false;

            string strcommand = "select userid from ValidicUserUpdate where userid = @userid";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = command1.ExecuteReader();

            while (reader.Read())
            {
                update = true;
            }

            reader.Close();

            return update;
        }

        void InsertUserUpdate(SqlConnection connection1, int validicObject, UsersIds userid, DateTime startDate, DateTime nowDate, string next)
        {
            bool firsttime = false;

            String strcommand = "insert into ValidicUserUpdate (userid,firsttime,startDate,endDate,";

            if (validicObject == 0)
            {
                strcommand += "nextfitness) ";
            }
            if (validicObject == 1)
            {
                strcommand += "nextroutine) ";
            }
            if (validicObject == 2)
            {
                strcommand += "nextnutrition) ";
            }
            if (validicObject == 3)
            {
                strcommand += "nextsleep) ";
            }
            if (validicObject == 4)
            {
                strcommand += "nextweight) ";
            }
            if (validicObject == 5)
            {
                strcommand += "nextdiabetes) ";
            }
            if (validicObject == 6)
            {
                strcommand += "nextbiometrics) ";
                firsttime = true;
            }

            if (next == "")
            {
                next = "L";
            }

            strcommand += "values(@userid,@firsttime,@startDate,@endDate,@next)";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@firsttime", SqlDbType.Bit);
            parameter.Value = firsttime;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@next", SqlDbType.VarChar);
            parameter.Value = next;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid.id;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@startDate", SqlDbType.DateTime);
            parameter.Value = startDate;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@endDate", SqlDbType.DateTime);
            parameter.Value = nowDate;
            command1.Parameters.Add(parameter);


            command1.ExecuteNonQuery();

        }

        void UserUpdate(SqlConnection connection1, int validicObject, UsersIds userid, DateTime startDate, DateTime nowDate, string next)
        {
            String strcommand = "update ValidicUserUpdate set firsttime = @firsttime, startDate = @startDate, endDate = @endDate,";

            bool firsttime = false;

            if (validicObject == 0)
            {
                strcommand += "nextfitness ";
            }
            if (validicObject == 1)
            {
                strcommand += "nextroutine ";
            }
            if (validicObject == 2)
            {
                strcommand += "nextnutrition ";
            }
            if (validicObject == 3)
            {
                strcommand += "nextsleep ";
            }
            if (validicObject == 4)
            {
                strcommand += "nextweight ";
            }
            if (validicObject == 5)
            {
                strcommand += "nextdiabetes ";
            }
            if (validicObject == 6)
            {
                strcommand += "nextbiometrics ";
                firsttime = true;
            }

            if (next == "")
            {
                next = "L";
            }

            strcommand += "= @next where userid = @userid and namemarket= @namemarket and sync = 1";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@firsttime", SqlDbType.Bit);
            parameter.Value = firsttime;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@next", SqlDbType.VarChar);
            parameter.Value = next;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid.id;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@startDate", SqlDbType.DateTime);
            parameter.Value = startDate;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@endDate", SqlDbType.DateTime);
            parameter.Value = nowDate;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@namemarket", SqlDbType.VarChar);
            parameter.Value = userid.nameMarket;
            command1.Parameters.Add(parameter);

            command1.ExecuteNonQuery();

        }

    }
}
