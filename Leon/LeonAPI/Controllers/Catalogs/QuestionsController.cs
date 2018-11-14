using LeonAPI.Models;
using LeonModels;
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


namespace LeonAPI.Controllers.Catalogs
{

    [Authorize]
    [RoutePrefix("api/Questions")]
    public class QuestionsController : ApiController
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        [Route("QueryUserQuestions")]
        public async Task<HttpResponseMessage> QueryUserQuestions(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            String userid = varSearchModel.parameters[0].Trim();
            String email = varSearchModel.parameters[1].Trim();
            String admin = varSearchModel.parameters[2].Trim();
            String status = varSearchModel.parameters[3].Trim();


            List<QueryUserQuestionsModel> questions = new List<QueryUserQuestionsModel>();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    string strcommand = "SELECT f.idform, f.email, u.firstname, u.lastname, f.datelocal " +
                                        "FROM form f " +
                                        "left join users u on f.email = u.email ";
                    if (status == "")
                    {
                        strcommand += "where (f.status is null or f.status = @status) ";
                    }
                    else
                    {
                        strcommand += "where f.status = @status ";
                    }

                    if (admin == "0")
                    {
                        strcommand += "and f.userid = @userid ";

                    }
                   // strcommand += "order by f.email";

                    SqlCommand command1 = new SqlCommand(strcommand, connection1);

                    SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
                    parameter.Value = userid;
                    command1.Parameters.Add(parameter);

                    parameter = new SqlParameter("@status", SqlDbType.VarChar);
                    parameter.Value = status;
                    command1.Parameters.Add(parameter);

                    /*
                    SqlCommand command1 = new SqlCommand("SELECT idform, email " +
                                                         "FROM form " +
                                                         "where userid = @userid and email like @email ", connection1);
                                                        
                  

                    parameter = new SqlParameter("@email", SqlDbType.VarChar);
                    parameter.Value = "%" + email + "%";
                    command1.Parameters.Add(parameter);
                     */


                    SqlDataReader reader = await command1.ExecuteReaderAsync();

                    while (await reader.ReadAsync())
                    {
                        QueryUserQuestionsModel question = new QueryUserQuestionsModel();
                        question.id = reader.GetString(0);
                        question.email = reader.GetString(1);
                        question.firstName = reader.GetString(2);
                        question.lastName = reader.GetString(3);
                        question.datelocal = reader.GetDateTime(4);
                        questions.Add(question);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, questions);

        }

        [Route("QueryUserTotalQuestions")]
        public async Task<HttpResponseMessage> QueryUserTotalQuestions(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            String userEmail = varSearchModel.parameters[0].Trim();

            UserPointsModel pointModel = new UserPointsModel();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    await GetPointUsers(connection1, userEmail, pointModel);

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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, pointModel);

        }

        private async Task GetPointUsers(SqlConnection connection1, string email, UserPointsModel pointModel)
        {
            string strcommand = "SELECT f.email, f.conversiontotal, f.datelocal " +
                                ",an.Age,an.Gender,an.PushuptestModifiedWomen " +

",p.CardioVascularHealthpts + p.ChestPainpts + p.FatherDiagnosedpts + p.MotherDiagnosedpts + p.Diabetespts as Health " +

",p.ModerateExercisepts + p.Vigorouspts + p.Sittingpts + p.Smokepts + p.Secondhandsmokepts + p.Alcoholpts " +
" + p.Antibioticspts as Lifestyle " +

",p.Systolicpts + p.Diastolicpts + p.HowHeightpts + p.WaistToHipMenpts as BiodataMen " +

",p.Systolicpts + p.Diastolicpts + p.HowHeightpts + p.WaistToHipWomenpts as BiodataWoMen " +


",p.DeepSquatpts + p.ActiveStraightLegRaisepts + p.ShoulderMobilitypts + " +
"+p.ShoulderClearingTestpts + p.SpinalFlexionpts + p.SpinalExtensionpts as Mobility " +


",p.SideBridgeMenpts + p.MBThrowMenpts + p.CoopertestMenpts + p.PushuptestMenpts as FitnessMen " +

",p.SideBridgeWomenpts + p.MBThrowWomenpts + p.CoopertestWomenpts + p.PushuptestWomenpts as FitnessWomen " +

",p.SideBridgeWomenpts + p.MBThrowWomenpts + p.CoopertestWomenpts + p.PushuptestWomenModifiedpts as FitnessWomenMod " +


                                "FROM " +
                                "( " +
                                "select email, max(datelocal) as local " +
                                "from Form " +
                                "group by email " +
                                " ) " +
                                "as x inner join Form as f on f.email = x.email and f.datelocal = x.local and (f.status is null or f.status = '') " +
                        
                                "left join FormAnswer an on f.idform = an.idform " +
                                "left join formpoints p on f.idform = p.idform " +

                                "order by f.conversiontotal ";
                              

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            List<int> Health = new List<int>();
            List<int> Lifestyle = new List<int>();
            List<int> Biodata = new List<int>();
            List<int> Mobility = new List<int>();
            List<int> Fitness = new List<int>();

            int HealthP = 0;
            int LifestyleP = 0;
            int BiodataP = 0;
            int MobilityP = 0;
            int FitnessP = 0;

            int rank = 0;
            int count = 1;
            int totalPoints = 0;
            DateTime date = new DateTime();
            int min = 0;
            int max = 0;
            bool first = false;

            while (await reader.ReadAsync())
            {
                int value = reader.GetInt32(1);
                if (!first)
                {
                    min = value;
                    first = true;
                }
                max = value;
                if (email.ToUpper() == reader.GetString(0).ToUpper())
                {
                    rank = count;
                    totalPoints = value;
                    date = reader.GetDateTime(2);

                    HealthP = reader.GetInt32(6) * -1 + 100;
                    LifestyleP = reader.GetInt32(7) * -1 + 100;
                    MobilityP = reader.GetInt32(10) * -1 + 100;

                    if (!reader.GetBoolean(4))
                    {
                        BiodataP = reader.GetInt32(8) * -1 + 100;
                        FitnessP = reader.GetInt32(11) * -1 + 100;
                    }
                    else
                    {
                        BiodataP = reader.GetInt32(9) * -1 + 100;
                        if (!reader.GetBoolean(5))
                        {
                            FitnessP = reader.GetInt32(12) * -1 + 100; 
                        }
                        else
                        {
                            FitnessP = reader.GetInt32(13) * -1 + 100;
                        }

                    }

                }

                Health.Add(reader.GetInt32(6) * -1 + 100);
                Lifestyle.Add(reader.GetInt32(7) * -1 + 100);
                Mobility.Add(reader.GetInt32(10) * -1 + 100);

                if (!reader.GetBoolean(4))
                {
                    Biodata.Add(reader.GetInt32(8) * -1 + 100);
                    Fitness.Add(reader.GetInt32(11) * -1 + 100);
                }
                else
                {
                    Biodata.Add(reader.GetInt32(9) * -1 + 100);
                    if (!reader.GetBoolean(5))
                    {
                        Fitness.Add(reader.GetInt32(12) * -1 + 100);
                    }
                    else
                    {
                        Fitness.Add(reader.GetInt32(13) * -1 + 100);
                    }

                }

                count++;
            }
            count--;
           
            reader.Close();

            strcommand = "SELECT firstname, lastname " +
                                "FROM users " +
                                "where UPPER(email) = @email ";

            command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@email", SqlDbType.VarChar);
            parameter.Value = email.ToUpper();
            command1.Parameters.Add(parameter);

            reader = await command1.ExecuteReaderAsync();

            string firstName = "";
            string LastName = "";

            while (await reader.ReadAsync())
            {
                firstName = reader.GetString(0);
                LastName = reader.GetString(1);
            }
            reader.Close();

            pointModel.first = firstName;
            pointModel.last = LastName;
            pointModel.points = totalPoints;
            pointModel.totalUsers = count;
            double rankPoints = ((double)rank / (double)count) * 100;
            pointModel.avarage = (Int32)Math.Truncate(rankPoints);
            if (pointModel.avarage == 0)
            {
                pointModel.avarage = 1;
            }
            pointModel.date = date;
            pointModel.min = min;
            pointModel.max = max;

            Health.Sort();
            rank = Health.IndexOf(HealthP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Health = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Health == 0)
            {
                pointModel.Health = 1;
            }

            Lifestyle.Sort();
            rank = Lifestyle.IndexOf(LifestyleP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Lifestyle = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Lifestyle == 0)
            {
                pointModel.Lifestyle = 1;
            }

            Biodata.Sort();
            rank = Biodata.IndexOf(BiodataP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Biodata = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Biodata == 0)
            {
                pointModel.Biodata = 1;
            }

            Mobility.Sort();
            rank = Mobility.IndexOf(MobilityP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Mobility = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Mobility == 0)
            {
                pointModel.Mobility = 1;
            }

            Fitness.Sort();
            rank = Fitness.IndexOf(FitnessP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Fitness = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Fitness == 0)
            {
                pointModel.Fitness = 1;
            }


            /*
            string strcommand = "SELECT f.email, f.conversiontotal, " +
                                     "u.firstname, u.lastname, f.datelocal " +
                                     "FROM form f " +
                                     "left join users u on f.email = u.email " +
                                     "order by email, f.datelocal desc";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            int totalUsers = 0;
            int highPoints = 0;
            int lowPoints = 0;

            string first = "";
            string last = "";
            int totalPoint = 0;
            DateTime date = new DateTime();

            if (await reader.ReadAsync())
            {
                bool flag = true;
                while (flag)
                {
                    string emailid = reader.GetString(0);
                    if (email == emailid)
                    {
                        totalPoint = reader.GetInt32(1);
                        first = reader.GetString(2);
                        last = reader.GetString(3);
                        date = reader.GetDateTime(4);
                    }

                    totalUsers++;

                    int points = reader.GetInt32(1);

                    if (lowPoints > points)
                    {
                        lowPoints = points;
                    }
                    if (highPoints < points)
                    {
                        highPoints = points;
                    }

                    bool flagtwo = true;
                    while (flag && flagtwo)
                    {
                        if (await reader.ReadAsync())
                        {
                            var emailtemp = reader.GetString(0);
                            if (emailtemp != emailid)
                            {
                                flagtwo = false;
                            }
                        }
                        else
                        {
                            flag = false;
                        }


                    }

                }
            }
            reader.Close();

            pointModel.first = first;
            pointModel.last = last;
            pointModel.points = totalPoint;
            pointModel.totalUsers = totalUsers;
            int dif = highPoints - lowPoints;
            double totalScore = ((double)totalPoint / (double)dif) * 100;
            pointModel.avarage = (int)Math.Round(totalScore);
            pointModel.date = date;
             */
        }

        [Route("QueryOneUserQuestions")]
        public async Task<HttpResponseMessage> QueryOneUserQuestions(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            String idform = varSearchModel.parameters[0].Trim();

            QuestionsAddUpdate question = new QuestionsAddUpdate();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    SqlCommand command1 = new SqlCommand("SELECT " +
                                  "f.email, f.userid, f.total1, f.total2, f.total3, f.grantotal, f.conversiontotal, f.datelocal,  " +

                                  "fa.Gender,fa.Age,fa.HowHeightFeet,fa.HowHeightInchs,fa.HowWeight, " +
                                  "fa.CardioVascularHealth,fa.ChestPain,fa.FatherDiagnosed, " +
                                  "fa.MotherDiagnosed,Diabetes,fa.ModerateExercise,fa.Vigorous,Sitting,Smoke, fa.Secondhandsmoke, fa.Alcohol, " +
                                  "fa.OralContraceptive, fa.Antibiotics, fa.Systolic,Diastolic, " +
                                  "fa.WaistMen,HipMen,fa.WaistWomen,fa.HipWomen, " +
                                  "fa.SideBridgeMen, " +
                                  "fa.SideBridgeWomen,fa.DeepSquat,fa.ActiveStraightLegRaise,fa.ShoulderMobility,fa.ShoulderClearingTest, " +
                                  "fa.SpinalFlexion,fa.SpinalExtension,fa.PushuptestMen, " +
                                  "fa.PushuptestModifiedWomen, fa.PushuptestWomen, fa.PushuptestWomenModified, " +
                                  "fa.MBThrowMen,fa.MBThrowWomen, " +
                                  "fa.CoopertestMen,fa.CoopertestWomen," +
                                  "fa.RateFitness,fa.RankFitness,fa.Particpe, " +

                                  "fp.Genderpts,fp.Agepts,fp.HowHeightpts,fp.HowWeightpts, " +
                                  "fp.CardioVascularHealthpts,fp.ChestPainpts, " +
                                  "fp.FatherDiagnosedpts,fp.MotherDiagnosedpts,fp.Diabetespts, " +
                                  "fp.ModerateExercisepts,fp.Vigorouspts,fp.Sittingpts,fp.Smokepts,fp.Secondhandsmokepts, " +
                                  "fp.Alcoholpts,fp.OralContraceptivepts,fp.Antibioticspts,fp.Systolicpts, " +
                                  "fp.Diastolicpts,fp.WaisttoHipMenpts,fp.WaisttoHipWomenpts,fp.SideBridgeMenpts, " +
                                  "fp.SideBridgeWomenpts,fp.DeepSquatpts,fp.ActiveStraightLegRaisepts, " +
                                  "fp.ShoulderMobilitypts,fp.ShoulderClearingTestpts,fp.SpinalFlexionpts,fp.SpinalExtensionpts, " +
                                  "fp.PushuptestMenpts, " +
                                  "fp.PushuptestModifiedWomenpts,fp.PushuptestWomenpts, fp.PushuptestWomenModifiedpts, " +
                                  "fp.MBThrowMenpts,fp.MBThrowWomenpts, " +
                                  "fp.CoopertestMenpts,fp.CoopertestWomenpts, " +
                                  "fp.RateFitnesspts,fp.RankFitnesspts,fp.Particpepts, " +
                                  "u.firstname, u.lastname, fa.Planing, fp.Planingpts, SideBridgeMenLeft, SideBridgeWomenLeft, " +
                                  "f.cityId " +

                                  "from form f " +
                                  "left join formanswer fa on f.idform = fa.idform " +
                                  "left join formpoints fp on f.idform = fp.idform " +
                                  "left join users u on f.email = u.email " +
                                  "where f.idform = @idform ", connection1);

                    SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
                    parameter.Value = idform;
                    command1.Parameters.Add(parameter);

                    SqlDataReader reader = await command1.ExecuteReaderAsync();

                    while (await reader.ReadAsync())
                    {
                        question.email = reader.GetString(0);
                        question.userid = reader.GetString(1);
                        question.total1 = reader.GetInt32(2);
                        question.total2 = reader.GetInt32(3);
                        question.total3 = reader.GetInt32(4);
                        question.grantotal = reader.GetInt32(5);
                        question.conversiontotal = reader.GetInt32(6);
                        question.datelocal = reader.GetDateTime(7);

                        question.Gender = reader.GetBoolean(8);
                        question.Age = reader.GetInt32(9);

                        question.HowHeightFeet = reader.GetInt32(10);
                        question.HowHeightInchs = reader.GetInt32(11);
                        question.HowWeight = reader.GetInt32(12);

                        question.CardioVascularHealth = reader.GetBoolean(13);
                        question.ChestPain = reader.GetBoolean(14);
                        question.FatherDiagnosed = reader.GetBoolean(15);
                        question.MotherDiagnosed = reader.GetBoolean(16);
                        question.Diabetes = reader.GetBoolean(17);
                        question.ModerateExercise = reader.GetInt32(18);
                        question.Vigorous = reader.GetInt32(19);
                        question.Sitting = reader.GetInt32(20);
                        question.Smoke = reader.GetInt32(21);
                        question.Secondhandsmoke = reader.GetBoolean(22);
                        question.Alcohol = reader.GetInt32(23);
                        question.OralContraceptive = reader.GetBoolean(24);
                        question.Antibiotics = reader.GetInt32(25);
                        question.Systolic = reader.GetInt32(26);
                        question.Diastolic = reader.GetInt32(27);

                        question.WaistMen = (double)reader.GetDecimal(28);
                        question.HipMen = (double)reader.GetDecimal(29);
                        question.WaistWomen = (double)reader.GetDecimal(30);
                        question.HipWomen = (double)reader.GetDecimal(31);

                        question.SideBridgeMen = reader.GetInt32(32);
                        question.SideBridgeWomen = reader.GetInt32(33);
                        question.DeepSquat = reader.GetInt32(34);
                        question.ActiveStraightLegRaise = reader.GetInt32(35);
                        question.ShoulderMobility = reader.GetInt32(36);
                        question.ShoulderClearingTest = reader.GetBoolean(37);
                        question.SpinalFlexion = reader.GetBoolean(38);
                        question.SpinalExtension = reader.GetBoolean(39);
                        question.PushuptestMen = reader.GetInt32(40);

                        question.PushuptestModifiedWomen = reader.GetBoolean(41);
                        question.PushuptestWomen = reader.GetInt32(42);
                        question.PushuptestWomenModified = reader.GetInt32(43);

                        question.MBThrowMen = (double)reader.GetDecimal(44);
                        question.MBThrowWomen = (double)reader.GetDecimal(45);

                        question.CoopertestMen = (double)reader.GetDecimal(46);
                        question.CoopertestWomen = (double)reader.GetDecimal(47);

                        question.RateFitness = reader.GetInt32(48);
                        question.RankFitness = reader.GetInt32(49);
                        question.Particpe = reader.GetBoolean(50);

                        //points
                        question.Genderpts = reader.GetInt32(51);
                        question.Agepts = reader.GetInt32(52);
                        question.HowHeightpts = reader.GetInt32(53);
                        question.HowWeightpts = reader.GetInt32(54);
                        question.CardioVascularHealthpts = reader.GetInt32(55);
                        question.ChestPainpts = reader.GetInt32(56);
                        question.FatherDiagnosedpts = reader.GetInt32(57);
                        question.MotherDiagnosedpts = reader.GetInt32(58);
                        question.Diabetespts = reader.GetInt32(59);
                        question.ModerateExercisepts = reader.GetInt32(60);
                        question.Vigorouspts = reader.GetInt32(61);
                        question.Sittingpts = reader.GetInt32(62);
                        question.Smokepts = reader.GetInt32(63);
                        question.Secondhandsmokepts = reader.GetInt32(64);
                        question.Alcoholpts = reader.GetInt32(65);
                        question.OralContraceptivepts = reader.GetInt32(66);
                        question.Antibioticspts = reader.GetInt32(67);
                        question.Systolicpts = reader.GetInt32(68);
                        question.Diastolicpts = reader.GetInt32(69);
                        question.WaisttoHipMenpts = reader.GetInt32(70);
                        question.WaisttoHipWomenpts = reader.GetInt32(71);
                        question.SideBridgeMenpts = reader.GetInt32(72);
                        question.SideBridgeWomenpts = reader.GetInt32(73);
                        question.DeepSquatpts = reader.GetInt32(74);
                        question.ActiveStraightLegRaisepts = reader.GetInt32(75);
                        question.ShoulderMobilitypts = reader.GetInt32(76);
                        question.ShoulderClearingTestpts = reader.GetInt32(77);
                        question.SpinalFlexionpts = reader.GetInt32(78);
                        question.SpinalExtensionpts = reader.GetInt32(79);
                        question.PushuptestMenpts = reader.GetInt32(80);

                        question.PushuptestModifiedWomenpts = reader.GetInt32(81);
                        question.PushuptestWomenpts = reader.GetInt32(82);
                        question.PushuptestWomenModifiedpts = reader.GetInt32(83);

                        question.MBThrowMenpts = reader.GetInt32(84);
                        question.MBThrowWomenpts = reader.GetInt32(85);
                        question.CoopertestMenpts = reader.GetInt32(86);
                        question.CoopertestWomenpts = reader.GetInt32(87);

                        question.RateFitnesspts = reader.GetInt32(88);
                        question.RankFitnesspts = reader.GetInt32(89);
                        question.Particpepts = reader.GetInt32(90);

                        if (reader.IsDBNull(91))
                        {
                            question.firstname = "";
                        }
                        else
                        {
                            question.firstname = reader.GetString(91);
                        }
                        if (reader.IsDBNull(92))
                        {
                            question.lastname = "";
                        }
                        else
                        {
                            question.lastname = reader.GetString(92);
                        }

                        if (reader.IsDBNull(93))
                        {
                            question.Planing = false;
                        }
                        else
                        {
                            question.Planing = reader.GetBoolean(93);
                        }
                        if (reader.IsDBNull(94))
                        {
                            question.Planingpts = 0;
                        }
                        else
                        {
                            question.Planingpts = reader.GetInt32(94);
                        }

                        if (reader.IsDBNull(95))
                        {
                            question.SideBridgeMenLeft = 0;
                        }
                        else
                        {
                            question.SideBridgeMenLeft = reader.GetInt32(95);
                        }

                        if (reader.IsDBNull(96))
                        {
                            question.SideBridgeMenLeft = 0;
                        }
                        else
                        {
                            question.SideBridgeWomenLeft = reader.GetInt32(96);
                        }
                        if (reader.IsDBNull(97))
                        {
                            question.cityId = 0;
                        } else
                        {
                            question.cityId = reader.GetInt32(97);
                        }
                    }
                    reader.Close();

                    UserPointsModel pointModel = new UserPointsModel();


                    await GetPointUsers(connection1, question.email, pointModel);

                    question.avarage = pointModel.avarage;
                    question.totalUsers = pointModel.totalUsers;
                    question.min = pointModel.min;
                    question.max = pointModel.max;
                    question.Health = pointModel.Health;
                    question.Lifestyle = pointModel.Lifestyle;
                    question.Biodata = pointModel.Biodata;
                    question.Mobility = pointModel.Mobility;
                    question.Fitness = pointModel.Fitness;

          

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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, question);

        }

        //[Authorize(Roles = "Provider")]
        [Route("AddUpdate")]
        public async Task<HttpResponseMessage> AddUpdate(QuestionsAddUpdate model)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            string memail = "";
            string password = "";
            bool sendEmail = false;

            UserPointsModel pointModel = new UserPointsModel();

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();

                    string id = await SearchAccount(connection1, model.email);

                    if (id == "")
                    {
                        password = RandomPassword.Generate(10, 12);
                        id = await CreateAccount("2", model.email, password);
                        if (id == "0")
                        {
                            throw new Exception("Can not create an user account");
                        }
                    }
                    
                    bool flag = await SearchUser(connection1, model.email);

                    if (!flag)
                    {
                        await CreateUserData(connection1, id, model.email, model.firstname, model.lastname);
                    }
                }

                using (TransactionScope scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                    using (SqlConnection connection1 = new SqlConnection(connetionString))
                    {
                        await connection1.OpenAsync();
                        if (model.idform != "")
                        {
                            await Delete(connection1, model.idform);
                        }
                        string idform = Guid.NewGuid().ToString();
                        await SaveForm(connection1, model, idform);
                        await SaveAnswers(connection1, model, idform);
                        await SavePoints(connection1, model, idform);
                        await GetPointUsers(connection1, model.email, pointModel);

                    }

                    scope.Complete();
                }
                

                sendEmail = true;

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
                await SendEmail(password, model.email, model.conversiontotal);
            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, pointModel);
        
        }

        private async Task SaveForm(SqlConnection connection1, QuestionsAddUpdate model, string idform)
        {

            String commandText1 = "INSERT INTO Form " +
                                  "(idform,email, userid, total1, total2, total3, grantotal, conversiontotal, datelocal, dateserver, cityId) " +
                                  "values (@idform,@email, @userid, @total1, @total2, @total3, @grantotal, @conversiontotal, @datelocal, getdate(), @cityId)";


            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@email", SqlDbType.VarChar);
            parameter.Value = model.email;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = model.userid;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@total1", SqlDbType.Int);
            parameter.Value = model.total1;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@total2", SqlDbType.Int);
            parameter.Value = model.total2;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@total3", SqlDbType.Int);
            parameter.Value = model.total3;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@grantotal", SqlDbType.Int);
            parameter.Value = model.grantotal;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@conversiontotal", SqlDbType.Int);
            parameter.Value = model.conversiontotal;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@datelocal", SqlDbType.DateTime);
            parameter.Value = model.datelocal;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@cityId", SqlDbType.Int);
            parameter.Value = model.cityId;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task SaveAnswers(SqlConnection connection1, QuestionsAddUpdate model, string idform)
        {

            String commandText1 = "INSERT INTO FormAnswer " +
                                  "(idform, " +
                                  "Gender,Age,HowHeightFeet,HowHeightInchs,HowWeight, " +
                                  "CardioVascularHealth,ChestPain,FatherDiagnosed, " +
                                  "MotherDiagnosed,Diabetes,ModerateExercise,Vigorous,Sitting,Smoke, Secondhandsmoke, Alcohol, " +
                                  "OralContraceptive, Antibiotics, Systolic,Diastolic, " +
                                  "WaistMen,HipMen,WaistWomen,HipWomen, " +
                                  "SideBridgeMen, " +
                                  "SideBridgeWomen,DeepSquat,ActiveStraightLegRaise,ShoulderMobility,ShoulderClearingTest, " +
                                  "SpinalFlexion,SpinalExtension,PushuptestMen, " +
                                  "PushuptestModifiedWomen, PushuptestWomen, PushuptestWomenModified, " +
                                  "MBThrowMen,MBThrowWomen, " +
                                  "CoopertestMen,CoopertestWomen," +
                                  "RateFitness,RankFitness,Particpe,Planing,SideBridgeMenLeft, SideBridgeWomenLeft) " +

                                  "values(" +
                                  "@idform," +
                                  "@Gender,@Age,@HowHeightFeet,@HowHeightInchs,@HowWeight, " +
                                  "@CardioVascularHealth,@ChestPain,@FatherDiagnosed, " +
                                  "@MotherDiagnosed,@Diabetes,@ModerateExercise,@Vigorous,@Sitting,@Smoke, @Secondhandsmoke, @Alcohol, " +
                                  "@OralContraceptive, @Antibiotics, @Systolic,@Diastolic, " +
                                  "@WaistMen,@HipMen,@WaistWomen,@HipWomen, " +
                                  "@SideBridgeMen, " +
                                  "@SideBridgeWomen,@DeepSquat,@ActiveStraightLegRaise,@ShoulderMobility,@ShoulderClearingTest, " +
                                  "@SpinalFlexion,@SpinalExtension,@PushuptestMen, " +
                                  "@PushuptestModifiedWomen, @PushuptestWomen, @PushuptestWomenModified, " +
                                  "@MBThrowMen,@MBThrowWomen, " +
                                  "@CoopertestMen,@CoopertestWomen," +
                                  "@RateFitness,@RankFitness,@Particpe,@Planing,@SideBridgeMenLeft,@SideBridgeWomenLeft)";




            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Gender", SqlDbType.VarChar);
            parameter.Value = model.Gender;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Age", SqlDbType.Int);
            parameter.Value = model.Age;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowHeightFeet", SqlDbType.Int);
            parameter.Value = model.HowHeightFeet;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowHeightInchs", SqlDbType.Int);
            parameter.Value = model.HowHeightInchs;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowWeight", SqlDbType.Int);
            parameter.Value = model.HowWeight;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@CardioVascularHealth", SqlDbType.Bit);
            parameter.Value = model.CardioVascularHealth;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ChestPain", SqlDbType.Bit);
            parameter.Value = model.ChestPain;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@FatherDiagnosed", SqlDbType.Bit);
            parameter.Value = model.FatherDiagnosed;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MotherDiagnosed", SqlDbType.Bit);
            parameter.Value = model.MotherDiagnosed;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Diabetes", SqlDbType.Bit);
            parameter.Value = model.Diabetes;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ModerateExercise", SqlDbType.Int);
            parameter.Value = model.ModerateExercise;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Vigorous", SqlDbType.Int);
            parameter.Value = model.Vigorous;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Sitting", SqlDbType.Int);
            parameter.Value = model.Sitting;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Smoke", SqlDbType.Int);
            parameter.Value = model.Smoke;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Secondhandsmoke", SqlDbType.Bit);
            parameter.Value = model.Secondhandsmoke;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Alcohol", SqlDbType.Int);
            parameter.Value = model.Alcohol;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@OralContraceptive", SqlDbType.Bit);
            parameter.Value = model.OralContraceptive;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Antibiotics", SqlDbType.Int);
            parameter.Value = model.Antibiotics;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Systolic", SqlDbType.Int);
            parameter.Value = model.Systolic;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Diastolic", SqlDbType.Int);
            parameter.Value = model.Diastolic;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@WaistMen", SqlDbType.Decimal);
            parameter.Value = model.WaistMen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HipMen", SqlDbType.Decimal);
            parameter.Value = model.HipMen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@WaistWomen", SqlDbType.Decimal);
            parameter.Value = model.WaistWomen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HipWomen", SqlDbType.Decimal);
            parameter.Value = model.HipWomen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SideBridgeMen", SqlDbType.Int);
            parameter.Value = model.SideBridgeMen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SideBridgeWomen", SqlDbType.Int);
            parameter.Value = model.SideBridgeWomen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@DeepSquat", SqlDbType.Int);
            parameter.Value = model.DeepSquat;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ActiveStraightLegRaise", SqlDbType.Int);
            parameter.Value = model.ActiveStraightLegRaise;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ShoulderMobility", SqlDbType.Int);
            parameter.Value = model.ShoulderMobility;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ShoulderClearingTest", SqlDbType.Bit);
            parameter.Value = model.ShoulderClearingTest;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SpinalFlexion", SqlDbType.Bit);
            parameter.Value = model.SpinalFlexion;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SpinalExtension", SqlDbType.Bit);
            parameter.Value = model.SpinalExtension;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@PushuptestMen", SqlDbType.Int);
            parameter.Value = model.PushuptestMen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@PushuptestModifiedWomen", SqlDbType.Int);
            parameter.Value = model.PushuptestModifiedWomen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@PushuptestWomen", SqlDbType.Int);
            parameter.Value = model.PushuptestWomen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@PushuptestWomenModified", SqlDbType.Int);
            parameter.Value = model.PushuptestWomenModified;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MBThrowMen", SqlDbType.Decimal);
            parameter.Value = model.MBThrowMen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MBThrowWomen", SqlDbType.Decimal);
            parameter.Value = model.MBThrowWomen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@CoopertestMen", SqlDbType.Decimal);
            parameter.Value = model.CoopertestMen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@CoopertestWomen", SqlDbType.Decimal);
            parameter.Value = model.CoopertestWomen;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@RateFitness", SqlDbType.Int);
            parameter.Value = model.RateFitness;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@RankFitness", SqlDbType.Int);
            parameter.Value = model.RankFitness;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Particpe", SqlDbType.Int);
            parameter.Value = model.Particpe;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Planing", SqlDbType.Int);
            parameter.Value = model.Planing;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SideBridgeMenLeft", SqlDbType.Int);
            parameter.Value = model.SideBridgeMenLeft;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SideBridgeWomenLeft", SqlDbType.Int);
            parameter.Value = model.SideBridgeWomenLeft;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task SavePoints(SqlConnection connection1, QuestionsAddUpdate model, string idform)
        {

            String commandText1 = "INSERT INTO FormPoints " +
                                  "(idform, " +
                                  "Genderpts,Agepts,HowHeightpts,HowWeightpts, " +
                                  "CardioVascularHealthpts,ChestPainpts, " +
                                  "FatherDiagnosedpts,MotherDiagnosedpts,Diabetespts, " +
                                  "ModerateExercisepts,Vigorouspts,Sittingpts,Smokepts,Secondhandsmokepts, " +
                                  "Alcoholpts,OralContraceptivepts,Antibioticspts,Systolicpts, " +
                                  "Diastolicpts,WaisttoHipMenpts,WaisttoHipWomenpts,SideBridgeMenpts, " +
                                  "SideBridgeWomenpts,DeepSquatpts,ActiveStraightLegRaisepts, " +
                                  "ShoulderMobilitypts,ShoulderClearingTestpts,SpinalFlexionpts,SpinalExtensionpts, " +
                                  "PushuptestMenpts, " +
                                  "PushuptestModifiedWomenpts,PushuptestWomenpts, PushuptestWomenModifiedpts, " +
                                  "MBThrowMenpts,MBThrowWomenpts, " +
                                  "CoopertestMenpts,CoopertestWomenpts, " +
                                  "RateFitnesspts,RankFitnesspts,Particpepts,Planingpts) " +

                                  "values(" +
                                  "@idform," +
                                  "@Genderpts,@Agepts,@HowHeightpts,@HowWeightpts, " +
                                  "@CardioVascularHealthpts,@ChestPainpts, " +
                                  "@FatherDiagnosedpts,@MotherDiagnosedpts,@Diabetespts, " +
                                  "@ModerateExercisepts,@Vigorouspts,@Sittingpts,@Smokepts,@Secondhandsmokepts, " +
                                  "@Alcoholpts,@OralContraceptivepts,@Antibioticspts,@Systolicpts, " +
                                  "@Diastolicpts,@WaisttoHipMenpts,@WaisttoHipWomenpts,@SideBridgeMenpts, " +
                                  "@SideBridgeWomenpts,@DeepSquatpts,@ActiveStraightLegRaisepts, " +
                                  "@ShoulderMobilitypts,@ShoulderClearingTestpts,@SpinalFlexionpts,@SpinalExtensionpts, " +
                                  "@PushuptestMenpts, " +
                                  "@PushuptestModifiedWomenpts,@PushuptestWomenpts, @PushuptestWomenModifiedpts, " +
                                  "@MBThrowMenpts,@MBThrowWomenpts, " +
                                  "@CoopertestMenpts,@CoopertestWomenpts, " +
                                  "@RateFitnesspts,@RankFitnesspts,@Particpepts,@Planingpts) ";




            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Genderpts", SqlDbType.VarChar);
            parameter.Value = model.Genderpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Agepts", SqlDbType.Int);
            parameter.Value = model.Agepts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowHeightpts", SqlDbType.Int);
            parameter.Value = model.HowHeightpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowWeightpts", SqlDbType.Int);
            parameter.Value = model.HowWeightpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@CardioVascularHealthpts", SqlDbType.Int);
            parameter.Value = model.CardioVascularHealthpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ChestPainpts", SqlDbType.Int);
            parameter.Value = model.ChestPainpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@FatherDiagnosedpts", SqlDbType.Int);
            parameter.Value = model.FatherDiagnosedpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MotherDiagnosedpts", SqlDbType.Int);
            parameter.Value = model.MotherDiagnosedpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Diabetespts", SqlDbType.Int);
            parameter.Value = model.Diabetespts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ModerateExercisepts", SqlDbType.Int);
            parameter.Value = model.ModerateExercisepts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Vigorouspts", SqlDbType.Int);
            parameter.Value = model.Vigorouspts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Sittingpts", SqlDbType.Int);
            parameter.Value = model.Sittingpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Smokepts", SqlDbType.Int);
            parameter.Value = model.Smokepts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Secondhandsmokepts", SqlDbType.Int);
            parameter.Value = model.Secondhandsmokepts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Alcoholpts", SqlDbType.Int);
            parameter.Value = model.Alcoholpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@OralContraceptivepts", SqlDbType.Int);
            parameter.Value = model.OralContraceptivepts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Antibioticspts", SqlDbType.Int);
            parameter.Value = model.Antibioticspts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Systolicpts", SqlDbType.Int);
            parameter.Value = model.Systolicpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Diastolicpts", SqlDbType.Int);
            parameter.Value = model.Diastolicpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@WaisttoHipMenpts", SqlDbType.Int);
            parameter.Value = model.WaisttoHipMenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@WaisttoHipWomenpts", SqlDbType.Int);
            parameter.Value = model.WaisttoHipWomenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SideBridgeMenpts", SqlDbType.Int);
            parameter.Value = model.SideBridgeMenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SideBridgeWomenpts", SqlDbType.Int);
            parameter.Value = model.SideBridgeWomenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@DeepSquatpts", SqlDbType.Int);
            parameter.Value = model.DeepSquatpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ActiveStraightLegRaisepts", SqlDbType.Int);
            parameter.Value = model.ActiveStraightLegRaisepts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ShoulderMobilitypts", SqlDbType.Int);
            parameter.Value = model.ShoulderMobilitypts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ShoulderClearingTestpts", SqlDbType.Int);
            parameter.Value = model.ShoulderClearingTestpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SpinalFlexionpts", SqlDbType.Int);
            parameter.Value = model.SpinalFlexionpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SpinalExtensionpts", SqlDbType.Int);
            parameter.Value = model.SpinalExtensionpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@PushuptestMenpts", SqlDbType.Int);
            parameter.Value = model.PushuptestMenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@PushuptestModifiedWomenpts", SqlDbType.Int);
            parameter.Value = model.PushuptestWomenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@PushuptestWomenpts", SqlDbType.Int);
            parameter.Value = model.PushuptestWomenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@PushuptestWomenModifiedpts", SqlDbType.Int);
            parameter.Value = model.PushuptestWomenModifiedpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MBThrowMenpts", SqlDbType.Int);
            parameter.Value = model.MBThrowMenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MBThrowWomenpts", SqlDbType.Int);
            parameter.Value = model.MBThrowWomenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@CoopertestMenpts", SqlDbType.Int);
            parameter.Value = model.CoopertestMenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@CoopertestWomenpts", SqlDbType.Int);
            parameter.Value = model.CoopertestWomenpts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@RateFitnesspts", SqlDbType.Int);
            parameter.Value = model.RateFitnesspts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@RankFitnesspts", SqlDbType.Int);
            parameter.Value = model.RankFitnesspts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Particpepts", SqlDbType.Int);
            parameter.Value = model.Particpepts;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Planingpts", SqlDbType.Int);
            parameter.Value = model.Planingpts;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }


        private async Task Delete(SqlConnection connection1, string idform)
        {
            String commandText1 = " delete from form where idform = @idform";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();


            commandText1 = " delete from formanswer where idform = @idform";

            command1 = new SqlCommand(commandText1, connection1);

            parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();

            commandText1 = " delete from formpoints where idform = @idform";

            command1 = new SqlCommand(commandText1, connection1);

            parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);


            await command1.ExecuteNonQueryAsync();


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

        private async Task CreateUserData(SqlConnection connection1, String id, String email, String firstname, String lastname)
        {
            String commandText1 = "INSERT INTO users " +
                                  "(id, email, firstname, lastname) " +
                                  "values (@id, @email, @firstname, @lastname)";


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


            await command1.ExecuteNonQueryAsync();
        }

        private async Task SendEmail(string password, string email, int score)
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

                mail.Body = LoadTemplate(password, email);
                mail.IsBodyHtml = true;
                mail.Subject = "Go Leon";

                await SmtpServer.SendMailAsync(mail);
                
            }
            catch (Exception ex)
            {
                //throw new Exception(ex.Message);
            }
        }

        private string LoadTemplate(string password, string email)
        {
            string message = "" +
                                "<p class=MsoNormal style='margin-top:5.0pt;margin-right:18.0pt;margin-bottom:" +
                                "5.0pt;margin-left:18.0pt;line-height:normal;mso-layout-grid-align:none;" +
                                "text-autospace:none'><span lang=EN-US style='font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                "mso-ansi-language:EN-US'>Thank you for participating in our early Beta program! " +
                                "The<span class=SpellE>LeON</span> team is busy working around the clock to " +
                                "build the best product for our users, and your participation(and feedback) are " +
                                "an important part of the process. If you are receiving this email, it means you " +
                                "have gone through our Assessment program with your Personal Trainer, and have " +
                                "received a<span class=SpellE>LeON</span> Score. To access your score, please " +
                                "click on the following: <a href = 'http://app.goleon.com/leonclient' > http://app.goleon.com/leonclient</a>" +
                                "<br>" +
                                "<br>";

                                if (password != "") {
                                    message += "Username: " + email + "<o:p></o:p></span></p>" +
                                                "<p class=MsoNormal style = 'margin-top:5.0pt;margin-right:0cm;margin-bottom:5.0pt;" +
                                                "margin-left:0cm;text-indent:18.0pt;line-height:normal;mso-layout-grid-align:" +
                                                "none;text-autospace:none'><span class=GramE><span lang=EN-US style='font-size:" +
                                                "12.0pt;font-family:'Times New Roman',serif;mso-ansi-language:EN-US'>password</span></span><span" +
                                                "lang=EN-US style = 'font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                                "mso-ansi-language:EN-US'>: <span class=SpellE>" + password + "</span><o:p></o:p></span></p>";
                                }

                                message += "<p class=MsoNormal style = 'margin-top:5.0pt;margin-right:18.0pt;margin-bottom:" +
                                "5.0pt;margin-left:18.0pt;line-height:normal;mso-layout-grid-align:none;" +
                                "text-autospace:none'><span lang=EN-US style='font-size:12.0pt;font-family:'Times New Roman',serif;" +
                                "mso-ansi-language:EN-US'>I'm sure you have some questions so please see our FAQ " +
                                "below...<br>" +
                                "<br>" +
                                "<b>What is <span class=SpellE>LeON</span>?</b><br>" +
                                "<span class=SpellE>LeON</span> has a simple mission, to improve health. We " +
                                "realize that this process must start with the individual, and believe the only way " +
                                "to achieve our mission is to provide the tools and access to see and change " +
                                "ones health. Our<span class=SpellE>LeON</span> score is part of a much bigger " +
                                "equation, one that enables our users to track, analyze and compare.<br>" +
                                "<br>" +
                                "<b>Who is currently performing these assessments?</b><br>" +
                                "Our initial Beta will be performed by 33 trusted Personal Trainers across the " +
                                "country.<br>" +
                                "<br>" +
                                "<b>Why 33 Personal Trainers?</b><br>" +
                                "34 seemed like too many. <br>" +
                                "<b><br>" +
                                "What will I have access to during the Beta?</b><br>" +
                                "Given this is the very beginning, we will be rolling a number of additions over " +
                                "the coming months. For now, you will be able to see your score, and how you " +
                                "compare (percentile) against everyone who has been assessed to date. As we " +
                                "complete more assessments, <span class=GramE>your</span> ranking will likely " +
                                "change. Other metrics and comps will soon follow(including how you compare " +
                                "against the <span class=SpellE>LeON</span> Team!).<br>" +
                                "<br>" +
                                "<b>Who can see my Score?</b><br>" +
                                "Only you and your personal trainer have access to your Score. None of our " +
                                "comparisons are done on an individual level - all our data is aggregated and " +
                                "presented as a whole.<br>" +
                                "<br>" +
                                "<b>Can I take the Assessment again?</b><br>" +
                                "Yes, of course - in fact we encourage it! We don't suggest taking the " +
                                "Assessment more frequently than every 3 months, but do recommend at a minimum, " +
                                "at least once a year. <br>" +
                                "<br>" +
                                "<br>" +
                                "Please feel free to contact me directly with questions or feedback. </span><span" +
                                "style = 'font-size:12.0pt;font-family:'Times New Roman',serif' > We value your " +
                                "input. <br>" +
                                "<br>" +
                                "Sincerely,<br>" +
                                "<p class=MsoNormal style = 'margin-top:5.0pt;margin-right:18.0pt;margin-bottom:" +
                                "5.0pt;margin-left:18.0pt;line-height:normal;mso-layout-grid-align:none;" +
                                "text-autospace:none'><span style='font-size:12.0pt;font-family:'Times New Roman',serif'>Coach" +
                                "<o:p></o:p></span></p>" +

                                "<p class=MsoNormal style = 'margin-bottom:10.0pt;line-height:115%;mso-layout-grid-align:" +
                                "none;text-autospace:none'><span lang=fi style='mso-ascii-font-family:Calibri;" +
                                "mso-hansi-font-family:Calibri;mso-bidi-font-family:Calibri;mso-ansi-language:" +
                                "#000B'><o:p>&nbsp;</o:p></span></p>" +

                                "<p class=MsoNormal><o:p>&nbsp;</o:p></p>";

                              

            return message;

        }

        [Route("StatusAssessment")]
        public async Task<HttpResponseMessage> StatusAssessment(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            string idform = varSearchModel.parameters[0];
            string status = varSearchModel.parameters[1];

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();

                    String commandText1 = "UPDATE form SET status = @status where idform = @idform";

                    SqlCommand command1 = new SqlCommand(commandText1, connection1);

                    SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
                    parameter.Value = idform;
                    command1.Parameters.Add(parameter);

                    parameter = new SqlParameter("@status", SqlDbType.VarChar);
                    parameter.Value = status;
                    command1.Parameters.Add(parameter);


                    await command1.ExecuteNonQueryAsync();

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

    }


}
