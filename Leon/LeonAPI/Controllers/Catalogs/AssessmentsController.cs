using LeonAPI.Models;
using LeonAPICalculations;
using LeonModels;
using LeonModels.Calculations;
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
    [RoutePrefix("api/Assessments")]
    public class AssessmentsController : ApiController
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

                    string strcommand = "SELECT f.idform, u.email, u.firstname, u.lastname, f.datelocal " +
                                        "FROM Assessments f " +
                                        "left join users u on f.userid = u.id ";
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
            
                    SqlCommand command1 = new SqlCommand(strcommand, connection1);

                    SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
                    parameter.Value = userid;
                    command1.Parameters.Add(parameter);

                    parameter = new SqlParameter("@status", SqlDbType.VarChar);
                    parameter.Value = status;
                    command1.Parameters.Add(parameter);

            
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

        [Route("IdFormByUser")]
        public async Task<HttpResponseMessage> IdFormByUser(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            String userid = varSearchModel.parameters[0].Trim();

            UserIdModel idform = new UserIdModel();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();

                    idform.userId = await GetIdForm(connection1, userid);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, idform);

        }

        private async Task<String> GetIdForm(SqlConnection connection1, string userid)
        {
            string strcommand = "SELECT f.idform " +
                                "FROM " +
                                "( " +
                                "select userid, max(datelocal) as local " +
                                "from Assessments " +
                                "group by userid " +
                                " ) " +
                                "as x inner join Assessments as f on f.userid = x.userid and f.datelocal = x.local and (f.status is null or f.status = '') " +
                                 "left join AssessmentsAnswers an on f.idform = an.idform " +
                                "left join Assessmentspoints p on f.idform = p.idform " +
                                "where f.userid = @userid ";
                                

            SqlCommand command1 = new SqlCommand(strcommand, connection1);


            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            String idform = ""; 
           
            while (await reader.ReadAsync())
            {
                idform = reader.GetString(0);
               
            }
           
            reader.Close();

            return idform;
        }

        private async Task AssessmentsByUsers(SqlConnection connection1, string userid, List<UserAssessmentsScore> scores)
        {
    
            string strcommand = "SELECT TOP 2 idform, conversionTotal FROM Assessments " +
                                "where userid = @userid " +
                                "order by datelocal desc ";

            SqlCommand command = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid.ToUpper();
            command.Parameters.Add(parameter);

            SqlDataReader reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                UserAssessmentsScore score = new UserAssessmentsScore();
                score.idform = reader.GetString(0);
                score.points = reader.GetInt32(1);
                scores.Add(score);
            }
            reader.Close();
        }

        private async Task AssessmentByUser(SqlConnection connection1, string idform, PointScore scores)
        {
            string strcommand = "SELECT f.conversionTotal, f.datelocal, " +
                                "f.health, f.lifestyle, f.biodata, f.mobility, f.fitness " +
                                //Lifestyle 
                                ",an.ModerateExercise, an.Vigorous, an.Sitting, an.Smoke, an.Secondhandsmoke, an.Alcohol, an.Antibiotics " +
                                ",p.ModerateExercisepts, p.Vigorouspts, p.Sittingpts, p.Smokepts, p.Secondhandsmokepts, p.Alcoholpts, p.Antibioticspts " +
                                //Biodata
                                ",an.Systolic, an.Diastolic, an.HowWaist, an.HowHip, an.BMI " +
                                ",p.Systolicpts, p.Diastolicpts, p.WaistToHippts, p.BMIpts " +
                                //Mobility 
                                ",an.DeepSquat, an.ActiveStraightLegRaise, an.ShoulderMobility, an.ShoulderClearingTest, an.SpinalFlexion, an.SpinalExtension " +
                                ",p.DeepSquatpts, p.ActiveStraightLegRaisepts, p.ShoulderMobilitypts, p.ShoulderClearingTestpts, p.SpinalFlexionpts, p.SpinalExtensionpts " +
                                //Fitness
                                ",an.SideBridge, an.SideBridgeLeft , an.Pushuptest, an.MBThrow, an.Coopertest " +
                                ",p.SideBridgepts, p.Pushuptestpts, p.MBThrowpts, p.Coopertestpts, an.age, an.gender, " +
                                "an.HowWeight " +
                                "FROM Assessments f " +
                                "left join AssessmentsAnswers an on f.idform = an.idform " +
                                "left join Assessmentspoints p on f.idform = p.idform " +
                                "where f.idform = @idform ";
                               
            SqlCommand command = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command.Parameters.Add(parameter);

            SqlDataReader reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                double waist = Convert.ToDouble(reader["howWaist"].ToString());
                double hip = Convert.ToDouble(reader["howHip"].ToString());
                scores.WaisthipScore = (int)((waist / hip) * 100);
                scores.bmiScore = (int)Convert.ToDouble(reader["bmi"].ToString());

                scores.date = reader.GetDateTime(1);

                scores.HealthP = reader.GetInt32(2) * -1 + 100;
                scores.LifestyleP = reader.GetInt32(3) * -1 + 100;
                scores.MobilityP = reader.GetInt32(4) * -1 + 100;
                scores.BiodataP = reader.GetInt32(5) * -1 + 100;
                scores.FitnessP = reader.GetInt32(6) * -1 + 100;

                //Fitness
                scores.Fitnesspts = Convert.ToInt32(reader["SideBridgepts"].ToString());
                scores.Fitnesspts += Convert.ToInt32(reader["Pushuptestpts"].ToString());
                scores.Fitnesspts += Convert.ToInt32(reader["MBThrowpts"].ToString());
                scores.Fitnesspts += Convert.ToInt32(reader["Coopertestpts"].ToString());

                scores.SideBridgeP = Convert.ToInt32(reader["SideBridgepts"].ToString()) * -1 + 100;
                scores.PushuptestP = Convert.ToInt32(reader["Pushuptestpts"].ToString()) * -1 + 100;
                scores.MBThrowP = Convert.ToInt32(reader["MBThrowpts"].ToString()) * -1 + 100;
                scores.CoopertestP = Convert.ToInt32(reader["Coopertestpts"].ToString()) * -1 + 100;

                scores.SideBridgeA = Convert.ToInt32(reader["SideBridge"].ToString());
                scores.SideBridgeLeftA = Convert.ToInt32(reader["SideBridgeLeft"].ToString());
                scores.PushuptestA = Convert.ToInt32(reader["Pushuptest"].ToString());
                scores.MBThrowA = Convert.ToDouble(reader["MBThrow"].ToString());
                scores.CoopertestA = Convert.ToDouble(reader["Coopertest"].ToString());

                //Mobility
                scores.Mobilitypts = Convert.ToInt32(reader["DeepSquatpts"].ToString());
                scores.Mobilitypts += Convert.ToInt32(reader["ActiveStraightLegRaisepts"].ToString());
                scores.Mobilitypts += Convert.ToInt32(reader["ShoulderMobilitypts"].ToString());
                scores.Mobilitypts += Convert.ToInt32(reader["ShoulderClearingTestpts"].ToString());
                scores.Mobilitypts += Convert.ToInt32(reader["SpinalFlexionpts"].ToString());
                scores.Mobilitypts += Convert.ToInt32(reader["SpinalExtensionpts"].ToString());

                scores.DeepSquatP = Convert.ToInt32(reader["DeepSquatpts"].ToString());
                scores.ActiveStraightLegRaiseP = Convert.ToInt32(reader["ActiveStraightLegRaisepts"].ToString());
                scores.ShoulderMobilityP = Convert.ToInt32(reader["ShoulderMobilitypts"].ToString());
                scores.ShoulderClearingTestP = Convert.ToInt32(reader["ShoulderClearingTestpts"].ToString());
                scores.SpinalFlexionP = Convert.ToInt32(reader["SpinalFlexionpts"].ToString());
                scores.SpinalExtensionP = Convert.ToInt32(reader["SpinalExtensionpts"].ToString());

                scores.DeepSquatA = Convert.ToInt32(reader["DeepSquat"].ToString());
                scores.ActiveStraightLegRaiseA = Convert.ToInt32(reader["ActiveStraightLegRaise"].ToString());
                scores.ShoulderMobilityA = Convert.ToInt32(reader["ShoulderMobility"].ToString());
                scores.ShoulderClearingTestA = Convert.ToInt32(reader["ShoulderClearingTest"].ToString());
                scores.SpinalFlexionA = Convert.ToInt32(reader["SpinalFlexion"].ToString());
                scores.SpinalExtensionA = Convert.ToInt32(reader["SpinalExtension"].ToString());

                //lifeStyle
                scores.LifeStylepts = Convert.ToInt32(reader["ModerateExercisepts"].ToString());
                scores.LifeStylepts += Convert.ToInt32(reader["Vigorouspts"].ToString());
                scores.LifeStylepts += Convert.ToInt32(reader["Sittingpts"].ToString());
                scores.LifeStylepts += Convert.ToInt32(reader["Smokepts"].ToString());
                scores.LifeStylepts += Convert.ToInt32(reader["Secondhandsmokepts"].ToString());
                scores.LifeStylepts += Convert.ToInt32(reader["Alcoholpts"].ToString());
                scores.LifeStylepts += Convert.ToInt32(reader["Antibioticspts"].ToString());

                scores.ModerateExerciseP = Convert.ToInt32(reader["ModerateExercisepts"].ToString());
                scores.VigorousP = Convert.ToInt32(reader["Vigorouspts"].ToString());
                scores.SittingP = Convert.ToInt32(reader["Sittingpts"].ToString());
                scores.SmokeP = Convert.ToInt32(reader["Smokepts"].ToString());
                scores.SecondhandsmokeP = Convert.ToInt32(reader["Secondhandsmokepts"].ToString());
                scores.AlcoholP = Convert.ToInt32(reader["Alcoholpts"].ToString());
                scores.AntibioticsP = Convert.ToInt32(reader["Antibioticspts"].ToString());

                scores.ModerateExerciseA = Convert.ToInt32(reader["ModerateExercise"].ToString());
                scores.VigorousA = Convert.ToInt32(reader["Vigorous"].ToString());
                scores.SittingA = Convert.ToInt32(reader["Sitting"].ToString());
                scores.SmokeA = Convert.ToInt32(reader["Smoke"].ToString());
                scores.SecondhandsmokeA = Convert.ToInt32(reader["Secondhandsmoke"].ToString());
                scores.AlcoholA = Convert.ToInt32(reader["Alcohol"].ToString());
                scores.AntibioticsA = Convert.ToInt32(reader["Antibiotics"].ToString());

                //Biometrics
                scores.Biometricspts = Convert.ToInt32(reader["Systolicpts"].ToString());
                scores.Biometricspts += Convert.ToInt32(reader["Diastolicpts"].ToString());
                scores.Biometricspts += Convert.ToInt32(reader["WaistToHippts"].ToString());
                scores.Biometricspts += Convert.ToInt32(reader["BMIpts"].ToString());

                scores.SystolicP = Convert.ToInt32(reader["Systolicpts"].ToString());
                scores.DiastolicP = Convert.ToInt32(reader["Diastolicpts"].ToString());
                scores.WaistHipP = Convert.ToInt32(reader["WaistToHippts"].ToString());
                scores.BMIP = Convert.ToInt32(reader["BMIpts"].ToString());

                scores.SystolicA = Convert.ToInt32(reader["Systolic"].ToString());
                scores.DiastolicA = Convert.ToInt32(reader["Diastolic"].ToString());
                scores.WaistA = Convert.ToDouble(reader["HowWaist"].ToString());
                scores.HipA = Convert.ToDouble(reader["HowHip"].ToString());
                scores.BMIA = Convert.ToDouble(reader["BMI"].ToString());
                
            }
            reader.Close();
        }


        private async Task GetPointUsers(SqlConnection connection1, string userid, UserPointsModel pointModel, int age, int gender, 
            string idform, PointScore scores, List<UserAssessmentsScore> formPoints)
        {
            string strcommand = "SELECT f.userid, f.conversionTotal, f.datelocal, " +
                                "f.health, f.lifestyle, f.biodata, f.mobility, f.fitness " +
                                //Health
                                ",an.CardioVascularHealth, an.ChestPain, an.FatherDiagnosed, an.MotherDiagnosed, an.Diabetes " +
                                ",p.CardioVascularHealthpts, p.ChestPainpts, p.FatherDiagnosedpts, p.MotherDiagnosedpts, p.Diabetespts " +
                                //Lifestyle 
                                ",an.ModerateExercise, an.Vigorous, an.Sitting, an.Smoke, an.Secondhandsmoke, an.Alcohol, an.Antibiotics " +
                                ",p.ModerateExercisepts, p.Vigorouspts, p.Sittingpts, p.Smokepts, p.Secondhandsmokepts, p.Alcoholpts, p.Antibioticspts " +
                                //Biodata
                                ",an.Systolic, an.Diastolic, an.HowWaist, an.HowHip, an.BMI " +
                                ",p.Systolicpts, p.Diastolicpts, p.WaistToHippts, p.BMIpts " +
                                //Mobility 
                                ",an.DeepSquat, an.ActiveStraightLegRaise, an.ShoulderMobility, an.ShoulderClearingTest, an.SpinalFlexion, an.SpinalExtension " +
                                ",p.DeepSquatpts, p.ActiveStraightLegRaisepts, p.ShoulderMobilitypts, p.ShoulderClearingTestpts, p.SpinalFlexionpts, p.SpinalExtensionpts " +
                                //Fitness
                                ",an.SideBridge, an.SideBridgeLeft , an.Pushuptest, an.MBThrow, an.Coopertest " +
                                ",p.SideBridgepts, p.Pushuptestpts, p.MBThrowpts, p.Coopertestpts, an.age, an.gender, " +
                                "an.HowWaist, an.HowHip, an.BMI " +
                                "FROM " +
                                "( " +
                                "select userid, max(datelocal) as local " +
                                "from Assessments " +
                                "group by userid " +
                                " ) " +
                                "as x inner join Assessments as f on f.userid = x.userid and f.datelocal = x.local and (f.status is null or f.status = '') " +
                                 "left join AssessmentsAnswers an on f.idform = an.idform " +
                                "left join Assessmentspoints p on f.idform = p.idform " +
                                "order by f.conversionTotal ";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            // Fitness Score detail 
            // we can improve only send one percentil array back and remove other arrays, if we want this model base on percentil 1 - 100. 

            List<int> FitnessAge = new List<int>();
            List<int> SideBridgeAge = new List<int>();
            List<int> PushuptestAge = new List<int>();
            List<int> MBThrowAge = new List<int>();
            List<int> CoopertestAge = new List<int>();

            List<int> FitnessGender = new List<int>();
            List<int> SideBridgeGender = new List<int>();
            List<int> PushuptestGender = new List<int>();
            List<int> MBThrowGender = new List<int>();
            List<int> CoopertestGender = new List<int>();

            List<int> FitnessBoth = new List<int>();
            List<int> SideBridgeBoth = new List<int>();
            List<int> PushuptestBoth = new List<int>();
            List<int> MBThrowBoth = new List<int>();
            List<int> CoopertestBoth = new List<int>();
            int countPercentil = 5;
            for (int s = 0; s < 20; s++)
            {
                pointModel.FitnessAgeRank.Add(countPercentil);
                pointModel.SideBridgeAgeRank.Add(countPercentil);
                pointModel.PushuptestAgeRank.Add(countPercentil);
                pointModel.MBThrowAgeRank.Add(countPercentil);
                pointModel.CoopertestAgeRank.Add(countPercentil);

                pointModel.FitnessGenderRank.Add(countPercentil);
                pointModel.SideBridgeGenderRank.Add(countPercentil);
                pointModel.PushuptestGenderRank.Add(countPercentil);
                pointModel.MBThrowGenderRank.Add(countPercentil);
                pointModel.CoopertestGenderRank.Add(countPercentil);

                pointModel.FitnessAllRank.Add(countPercentil);
                pointModel.SideBridgeAllRank.Add(countPercentil);
                pointModel.PushuptestAllRank.Add(countPercentil);
                pointModel.MBThrowAllRank.Add(countPercentil);
                pointModel.CoopertestAllRank.Add(countPercentil);

                pointModel.FitnessBothRank.Add(countPercentil);
                pointModel.SideBridgeBothRank.Add(countPercentil);
                pointModel.PushuptestBothRank.Add(countPercentil);
                pointModel.MBThrowBothRank.Add(countPercentil);
                pointModel.CoopertestBothRank.Add(countPercentil);

                countPercentil = countPercentil + 5;

            }
 
            int groupAge = GetOldGroup(age);

            //Fitness
            List<int> SideBridge = new List<int>();
            List<int> Pushuptest = new List<int>();
            List<int> MBThrow = new List<int>();
            List<int> Coopertest = new List<int>();

            
            //Mobility
            List<int> DeepSquat = new List<int>();
            List<int> ActiveStraightLegRaise = new List<int>();
            List<int> ShoulderMobility = new List<int>();
            List<int> ShoulderClearingTest = new List<int>();
            List<int> SpinalFlexion = new List<int>();
            List<int> SpinalExtension = new List<int>();

            
            //LifeStyle
            List<int> ModerateExercise = new List<int>();
            List<int> Vigorous = new List<int>();
            List<int> Sitting = new List<int>();
            List<int> Smoke = new List<int>();
            List<int> Secondhandsmoke = new List<int>();
            List<int> Alcohol = new List<int>();
            List<int> Antibiotics = new List<int>();
            

            //Biometrics
            List<int> Systolic = new List<int>();
            List<int> Diastolic = new List<int>();
            List<int> WaistHip = new List<int>();
            List<int> BMI = new List<int>();
            

            List<int> Health = new List<int>();
            List<int> Lifestyle = new List<int>();
            List<int> Biodata = new List<int>();
            List<int> Mobility = new List<int>();
            List<int> Fitness = new List<int>();

            List<int> All = new List<int>();

            int rank = 0;
            int count = 1;
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
                /*
                if (userid == reader.GetString(0))
                {
                    rank = count;
                    totalPoints = value;
                }
                */
                All.Add(value);
                Health.Add(reader.GetInt32(3) * -1 + 100);
                Lifestyle.Add(reader.GetInt32(4) * -1 + 100);
                Mobility.Add(reader.GetInt32(5) * -1 + 100);
                Biodata.Add(reader.GetInt32(6) * -1 + 100);
                Fitness.Add(reader.GetInt32(7) * -1 + 100);

                //Fitness
                SideBridge.Add(Convert.ToInt32(reader["SideBridgepts"].ToString()) * -1 + 100);
                Pushuptest.Add(Convert.ToInt32(reader["Pushuptestpts"].ToString()) * -1 + 100);
                MBThrow.Add(Convert.ToInt32(reader["MBThrowpts"].ToString()) * -1 + 100);
                Coopertest.Add(Convert.ToInt32(reader["Coopertestpts"].ToString()) * -1 + 100);

                //Mobility
                DeepSquat.Add(Convert.ToInt32(reader["DeepSquatpts"].ToString()) * -1 + 100);
                ActiveStraightLegRaise.Add(Convert.ToInt32(reader["ActiveStraightLegRaisepts"].ToString()) * -1 + 100);
                ShoulderMobility.Add(Convert.ToInt32(reader["ShoulderMobilitypts"].ToString()) * -1 + 100);
                ShoulderClearingTest.Add(Convert.ToInt32(reader["ShoulderClearingTestpts"].ToString()) * -1 + 100);
                SpinalFlexion.Add(Convert.ToInt32(reader["SpinalFlexionpts"].ToString()) * -1 + 100);
                SpinalExtension.Add(Convert.ToInt32(reader["SpinalExtensionpts"].ToString()) * -1 + 100);

                //LifeStyle
                ModerateExercise.Add(Convert.ToInt32(reader["ModerateExercisepts"].ToString()) * -1 + 100);
                Vigorous.Add(Convert.ToInt32(reader["Vigorouspts"].ToString()) * -1 + 100);
                Sitting.Add(Convert.ToInt32(reader["Sittingpts"].ToString()) * -1 + 100);
                Smoke.Add(Convert.ToInt32(reader["Smokepts"].ToString()) * -1 + 100);
                Secondhandsmoke.Add(Convert.ToInt32(reader["Secondhandsmokepts"].ToString()) * -1 + 100);
                Alcohol.Add(Convert.ToInt32(reader["Alcoholpts"].ToString()) * -1 + 100);
                Antibiotics.Add(Convert.ToInt32(reader["Antibioticspts"].ToString()) * -1 + 100);

                //Biometrics
                Systolic.Add(Convert.ToInt32(reader["Systolicpts"].ToString()) * -1 + 100);
                Diastolic.Add(Convert.ToInt32(reader["Diastolicpts"].ToString()) * -1 + 100);
                WaistHip.Add(Convert.ToInt32(reader["WaistToHippts"].ToString()) * -1 + 100);
                BMI.Add(Convert.ToInt32(reader["BMIpts"].ToString()) * -1 + 100);

                int valueGender = Convert.ToInt32(reader["gender"].ToString());
             
                if (gender == valueGender)
                {
                    FitnessGender.Add(reader.GetInt32(7) * -1 + 100);
                    SideBridgeGender.Add(Convert.ToInt32(reader["SideBridgepts"].ToString()) * -1 + 100);
                    PushuptestGender.Add(Convert.ToInt32(reader["Pushuptestpts"].ToString()) * -1 + 100);
                    MBThrowGender.Add(Convert.ToInt32(reader["MBThrowpts"].ToString()) * -1 + 100);
                    CoopertestGender.Add(Convert.ToInt32(reader["Coopertestpts"].ToString()) * -1 + 100);
                }

                int valueGroup = GetOldGroup(Convert.ToInt32(reader["age"].ToString()));

                if (groupAge == valueGroup)
                {
                    FitnessAge.Add(reader.GetInt32(7) * -1 + 100);
                    SideBridgeAge.Add(Convert.ToInt32(reader["SideBridgepts"].ToString()) * -1 + 100);
                    PushuptestAge.Add(Convert.ToInt32(reader["Pushuptestpts"].ToString()) * -1 + 100);
                    MBThrowAge.Add(Convert.ToInt32(reader["MBThrowpts"].ToString()) * -1 + 100);
                    CoopertestAge.Add(Convert.ToInt32(reader["Coopertestpts"].ToString()) * -1 + 100);
                }

                if ((gender == valueGender) && (groupAge == valueGroup))
                {
                    FitnessBoth.Add(reader.GetInt32(7) * -1 + 100);
                    SideBridgeBoth.Add(Convert.ToInt32(reader["SideBridgepts"].ToString()) * -1 + 100);
                    PushuptestBoth.Add(Convert.ToInt32(reader["Pushuptestpts"].ToString()) * -1 + 100);
                    MBThrowBoth.Add(Convert.ToInt32(reader["MBThrowpts"].ToString()) * -1 + 100);
                    CoopertestBoth.Add(Convert.ToInt32(reader["Coopertestpts"].ToString()) * -1 + 100);
                }

                count++;
            }
            count--;
         
            reader.Close();

            strcommand = "SELECT firstname, lastname " +
                                "FROM users " +
                                "where id = @userid ";

            command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid.ToUpper();
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

            pointModel.WaisthipScore = scores.WaisthipScore;
            pointModel.bmiScore = scores.bmiScore;
            pointModel.scores = formPoints;

            double rankPoints = 0;
            foreach (var values in formPoints)
            {
                List<int> temp = new List<int>(All);
                temp.Add(values.points);
                temp.Sort();
                rank = temp.IndexOf(values.points) + 1;
                rankPoints = ((double)rank / (double)count) * 100;
                int avarage = (Int32)Math.Truncate(rankPoints);
                if (avarage == 0)
                {
                    avarage = 1;
                }
                values.avarage = avarage;
                if (values.idform == idform)
                {
                    pointModel.points = values.points;
                    pointModel.avarage = avarage;
                }
            }


            pointModel.first = firstName;
            pointModel.last = LastName;
            pointModel.totalUsers = count;

            pointModel.date = scores.date;
            pointModel.min = min;
            pointModel.max = max;

            Health.Sort();
            rank = Health.IndexOf(scores.HealthP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Health = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Health == 0)
            {
                pointModel.Health = 1;
            }

            Lifestyle.Sort();
            rank = Lifestyle.IndexOf(scores.LifestyleP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Lifestyle = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Lifestyle == 0)
            {
                pointModel.Lifestyle = 1;
            }

            Biodata.Sort();
            rank = Biodata.IndexOf(scores.BiodataP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Biodata = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Biodata == 0)
            {
                pointModel.Biodata = 1;
            }

            Mobility.Sort();
            rank = Mobility.IndexOf(scores.MobilityP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Mobility = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Mobility == 0)
            {
                pointModel.Mobility = 1;
            }

            /*
            Fitness.Sort();
            rank = Fitness.IndexOf(FitnessP) + 1;
            rankPoints = ((double)rank / (double)count) * 100;
            pointModel.Fitness = (Int32)Math.Truncate(rankPoints);
            if (pointModel.Fitness == 0)
            {
                pointModel.Fitness = 1;
            }
            */
            
            //Fitness
            pointModel.FitnessPoints.SideBridge = scores.SideBridgeA;
            pointModel.FitnessPoints.SideBridgeLeft = scores.SideBridgeLeftA;
            pointModel.FitnessPoints.Pushuptest = scores.PushuptestA;
            pointModel.FitnessPoints.MBThrow = scores.MBThrowA;
            pointModel.FitnessPoints.Coopertest = scores.CoopertestA;
            pointModel.FitnessPoints.points = scores.Fitnesspts;

            GetRank(FitnessAge, scores.FitnessP, count, 0, 0, pointModel);
            GetRank(FitnessGender, scores.FitnessP, count, 1, 0, pointModel);
            GetRank(Fitness, scores.FitnessP, count, 2, 0, pointModel);
            GetRank(FitnessBoth, scores.FitnessP, count, 3, 0, pointModel);

            GetRank(SideBridgeAge, scores.SideBridgeP, count, 0, 1, pointModel);
            GetRank(SideBridgeGender, scores.SideBridgeP, count, 1, 1, pointModel);
            GetRank(SideBridge, scores.SideBridgeP, count, 2, 1, pointModel);
            GetRank(SideBridgeBoth, scores.SideBridgeP, count, 3, 1, pointModel);

            GetRank(PushuptestAge, scores.PushuptestP, count, 0, 2, pointModel);
            GetRank(PushuptestGender, scores.PushuptestP, count, 1, 2, pointModel);
            GetRank(Pushuptest, scores.PushuptestP, count, 2, 2, pointModel);
            GetRank(PushuptestBoth, scores.PushuptestP, count, 3, 2, pointModel);

            GetRank(MBThrowAge, scores.MBThrowP, count, 0, 3, pointModel);
            GetRank(MBThrowGender, scores.MBThrowP, count, 1, 3, pointModel);
            GetRank(MBThrow, scores.MBThrowP, count, 2, 3, pointModel);
            GetRank(MBThrowBoth, scores.MBThrowP, count, 3, 3, pointModel);

            GetRank(CoopertestAge, scores.CoopertestP, count, 0, 4, pointModel);
            GetRank(CoopertestGender, scores.CoopertestP, count, 1, 4, pointModel);
            GetRank(Coopertest, scores.CoopertestP, count, 2, 4, pointModel);
            GetRank(CoopertestBoth, scores.CoopertestP, count, 3, 4, pointModel);

            // we can improve only send one percentil array back and remove other arrays, if we want this model base on percentil 1 - 100. 

            pointModel.FitnessAgeRank.Reverse();
            pointModel.SideBridgeAgeRank.Reverse();
            pointModel.PushuptestAgeRank.Reverse();
            pointModel.MBThrowAgeRank.Reverse();
            pointModel.CoopertestAgeRank.Reverse();

            pointModel.FitnessGenderRank.Reverse();
            pointModel.SideBridgeGenderRank.Reverse();
            pointModel.PushuptestGenderRank.Reverse();
            pointModel.MBThrowGenderRank.Reverse();
            pointModel.CoopertestGenderRank.Reverse();

            pointModel.FitnessAllRank.Reverse();
            pointModel.SideBridgeAllRank.Reverse();
            pointModel.PushuptestAllRank.Reverse();
            pointModel.MBThrowAllRank.Reverse();
            pointModel.CoopertestAllRank.Reverse();

            pointModel.FitnessBothRank.Reverse();
            pointModel.SideBridgeBothRank.Reverse();
            pointModel.PushuptestBothRank.Reverse();
            pointModel.MBThrowBothRank.Reverse();
            pointModel.CoopertestBothRank.Reverse();

            //pointModel.FitnessPoints.SideBridgePercentil = GetPercentil(SideBridge, SideBridgeP, count);
            //pointModel.FitnessPoints.PushuptestPercentil = GetPercentil(Pushuptest, PushuptestP, count);
            //pointModel.FitnessPoints.MBThrowPercentil = GetPercentil(MBThrow, MBThrowP, count);
            //pointModel.FitnessPoints.CoopertestPercentil = GetPercentil(Coopertest, CoopertestP, count);

            //Mobility
            pointModel.MobilityPoints.DeepSquat = scores.DeepSquatA;
            pointModel.MobilityPoints.ActiveStraightLegRaise = scores.ActiveStraightLegRaiseA;
            pointModel.MobilityPoints.ShoulderMobility = scores.ShoulderMobilityA;
            pointModel.MobilityPoints.ShoulderClearingTest = scores.ShoulderClearingTestA;
            pointModel.MobilityPoints.SpinalFlexion = scores.SpinalFlexionA;
            pointModel.MobilityPoints.SpinalExtension = scores.SpinalExtensionA;
            pointModel.MobilityPoints.points = scores.Mobilitypts;
            pointModel.MobilityPoints.DeepSquatPercentil = GetPercentil(DeepSquat, scores.DeepSquatP, count);
            pointModel.MobilityPoints.ActiveStraightLegRaisePercentil = GetPercentil(ActiveStraightLegRaise, scores.ActiveStraightLegRaiseP, count);
            pointModel.MobilityPoints.ShoulderMobilityPercentil = GetPercentil(ShoulderMobility, scores.ShoulderMobilityP, count);
            pointModel.MobilityPoints.ShoulderClearingTestPercentil = GetPercentil(ShoulderClearingTest, scores.ShoulderClearingTestP, count);
            pointModel.MobilityPoints.SpinalFlexionPercentil = GetPercentil(SpinalFlexion, scores.SpinalFlexionP, count);
            pointModel.MobilityPoints.SpinalExtensionPercentil = GetPercentil(SpinalExtension, scores.SpinalExtensionP, count);

            //Lifestyle
            pointModel.LifestylePoints.ModerateExercise = scores.ModerateExerciseA;
            pointModel.LifestylePoints.Vigorous = scores.VigorousA;
            pointModel.LifestylePoints.Sitting = scores.SittingA;
            pointModel.LifestylePoints.Smoke = scores.SmokeA;
            pointModel.LifestylePoints.Secondhandsmoke = scores.SecondhandsmokeA;
            pointModel.LifestylePoints.Alcohol = scores.AlcoholA;
            pointModel.LifestylePoints.Antibiotics = scores.AntibioticsA;
            pointModel.LifestylePoints.points = scores.LifeStylepts;
            pointModel.LifestylePoints.ModerateExercisePercentil = GetPercentil(ModerateExercise, scores.ModerateExerciseP, count);
            pointModel.LifestylePoints.VigorousPercentil = GetPercentil(Vigorous, scores.VigorousP, count);
            pointModel.LifestylePoints.SittingPercentil = GetPercentil(Sitting, scores.SittingP, count);
            pointModel.LifestylePoints.SmokePercentil = GetPercentil(Smoke, scores.SmokeP, count);
            pointModel.LifestylePoints.SecondhandsmokePercentil = GetPercentil(Secondhandsmoke, scores.SecondhandsmokeP, count);
            pointModel.LifestylePoints.AlcoholPercentil = GetPercentil(Alcohol, scores.AlcoholP, count);
            pointModel.LifestylePoints.AntibioticsPercentil = GetPercentil(Antibiotics, scores.AntibioticsP, count);

            //Biometrics
            pointModel.BiometricsPoints.Systolic = scores.SystolicA;
            pointModel.BiometricsPoints.Diastolic = scores.DiastolicA;
            pointModel.BiometricsPoints.HowWaist = scores.WaistA;
            pointModel.BiometricsPoints.HowHip = scores.HipA;
            pointModel.BiometricsPoints.BMI = scores.BMIA;
            pointModel.BiometricsPoints.points = scores.Biometricspts;
            pointModel.BiometricsPoints.SystolicptsPercentil = GetPercentil(Systolic, scores.SystolicP, count);
            pointModel.BiometricsPoints.DiastolicPercentil = GetPercentil(Diastolic, scores.DiastolicP, count);
            pointModel.BiometricsPoints.WaistToHipPercentil = GetPercentil(WaistHip, scores.WaistHipP, count);
            pointModel.BiometricsPoints.BMIPercentil = GetPercentil(BMI, scores.BMIP, count);


           
        }

        private void GetRank(List<int> data, int datapts, int count, int question, int type, UserPointsModel pointModel)
        {
            data.Sort();
            for (int x = 0; x < data.Count; x++)
            {
                var valuePercentil = GetPercentilByOne(data, x, count);
                var position = GetPosition(valuePercentil);
                if (question == 0)
                {
                    PutQuestionAge(type, datapts, data[x], pointModel, position, valuePercentil);
                }
                else if (question == 1)
                {
                    PutQuestionGender(type, datapts, data[x], pointModel, position, valuePercentil);
                }
                else if (question == 2)
                {
                    PutQuestion(type, datapts, data[x], pointModel, position, valuePercentil);
                }
                else if (question == 3)
                {
                    PutQuestionBoth(type, datapts, data[x], pointModel, position, valuePercentil);
                }
            }
        }

        private void PutQuestionAge(int type, int datapts, int pts, UserPointsModel pointModel, int position, int valuePercentil)
        {
            if (type == 0)
            {
                if (datapts == pts)
                {
                    pointModel.FitnessAgePosition = position;
                }
                //pointModel.FitnessAgeRank[position]++;
            }
            else if (type == 1)
            {
                if (datapts == pts)
                {
                    pointModel.SideBridgeAgePosition = position;
                }
                //pointModel.SideBridgeAgeRank[position]++;
            }
            else if (type == 2)
            {
                if (datapts == pts)
                {
                    pointModel.PushuptestAgePosition = position;
                }
                //pointModel.PushuptestAgeRank[position]++;
            }
            else if (type == 3)
            {
                if (datapts == pts)
                {
                    pointModel.MBThrowAgePosition = position;
                }
                //pointModel.MBThrowAgeRank[position]++;
            }
            else if (type == 4)
            {
                if (datapts == pts)
                {
                    pointModel.CoopertestAgePosition = position;
                }
                //pointModel.CoopertestAgeRank[position]++;
            }
        }

        private void PutQuestionGender(int type, int datapts, int pts, UserPointsModel pointModel, int position, int valuePercentil)
        {
            if (type == 0)
            {
                if (datapts == pts)
                {
                    pointModel.FitnessGenderPosition = position;
                }
                //pointModel.FitnessGenderRank[position]++;
            }
            else if (type == 1)
            {
                if (datapts == pts)
                {
                    pointModel.SideBridgeGenderPosition = position;
                }
                //pointModel.SideBridgeGenderRank[position]++;
            }
            else if (type == 2)
            {
                if (datapts == pts)
                {
                    pointModel.PushuptestGenderPosition = position;
                }
                //pointModel.PushuptestGenderRank[position]++;
            }
            else if (type == 3)
            {
                if (datapts == pts)
                {
                    pointModel.MBThrowGenderPosition = position;
                }
                //pointModel.MBThrowGenderRank[position]++;
            }
            else if (type == 4)
            {
                if (datapts == pts)
                {
                    pointModel.CoopertestGenderPosition = position;
                }
                //pointModel.CoopertestGenderRank[position]++;
            }
        }

        private void PutQuestion(int type, int datapts, int pts, UserPointsModel pointModel, int position, int valuePercentil)
        {
            if (type == 0)
            {
                if (datapts == pts)
                {
                    pointModel.FitnessAllPosition = position;
                    pointModel.Fitness = valuePercentil;
                }
                //pointModel.FitnessAllRank[position]++;
            }
            else if (type == 1)
            {
                if (datapts == pts)
                {
                    pointModel.SideBridgeAllPosition = position;
                    pointModel.FitnessPoints.SideBridgePercentil = valuePercentil;
                }
                //pointModel.SideBridgeAllRank[position]++;
            }
            else if (type == 2)
            {
                if (datapts == pts)
                {
                    pointModel.PushuptestAllPosition = position;
                    pointModel.FitnessPoints.PushuptestPercentil = valuePercentil;
                }
                //pointModel.PushuptestAllRank[position]++;
            }
            else if (type == 3)
            {
                if (datapts == pts)
                {
                    pointModel.MBThrowAllPosition = position;
                    pointModel.FitnessPoints.MBThrowPercentil = valuePercentil;
                }
                //pointModel.MBThrowAllRank[position]++;
            }
            else if (type == 4)
            {
                if (datapts == pts)
                {
                    pointModel.CoopertestAllPosition = position;
                    pointModel.FitnessPoints.CoopertestPercentil = valuePercentil;
                }
                //pointModel.CoopertestAllRank[position]++;
            }
        }

        private void PutQuestionBoth(int type, int datapts, int pts, UserPointsModel pointModel, int position, int valuePercentil)
        {
            if (type == 0)
            {
                if (datapts == pts)
                {
                    pointModel.FitnessBothPosition = position;
                }
                //pointModel.FitnessBothRank[position]++;
            }
            else if (type == 1)
            {
                if (datapts == pts)
                {
                    pointModel.SideBridgeBothPosition = position;
                }
                //pointModel.SideBridgeBothRank[position]++;
            }
            else if (type == 2)
            {
                if (datapts == pts)
                {
                    pointModel.PushuptestBothPosition = position;
                }
                //pointModel.PushuptestBothRank[position]++;
            }
            else if (type == 3)
            {
                if (datapts == pts)
                {
                    pointModel.MBThrowBothPosition = position;
                }
                //pointModel.MBThrowBothRank[position]++;
            }
            else if (type == 4)
            {
                if (datapts == pts)
                {
                    pointModel.CoopertestBothPosition = position;
                }
                //pointModel.CoopertestBothRank[position]++;
            }
        }


        private int GetPercentilByOne(List<int> data, int x, int count)
        {
            int rank = data.IndexOf(data[x]) + 1;
            double rankPoints = ((double)rank / (double)count) * 100;
            var valuePercentil = (Int32)Math.Truncate(rankPoints);
            if (valuePercentil == 0)
            {
                valuePercentil = 1;
            }

            return valuePercentil;
        }

        private int GetPosition(int valuePercentil)
        {
            int position = 0;
            if (valuePercentil >= 6 && valuePercentil <= 10)
            {
                position = 1;
            }
            else if (valuePercentil >= 11 && valuePercentil <= 15)
            {
                position = 2;
            }
            else if (valuePercentil >= 16 && valuePercentil <= 20)
            {
                position = 3;
            }
            else if (valuePercentil >= 21 && valuePercentil <= 25)
            {
                position = 4;
            }
            else if (valuePercentil >= 26 && valuePercentil <= 30)
            {
                position = 5;
            }
            else if (valuePercentil >= 31 && valuePercentil <= 35)
            {
                position = 6;
            }
            else if (valuePercentil >= 36 && valuePercentil <= 40)
            {
                position = 7;
            }
            else if (valuePercentil >= 41 && valuePercentil <= 45)
            {
                position = 8;
            }
            else if (valuePercentil >= 46 && valuePercentil <= 50)
            {
                position = 9;
            }
            else if (valuePercentil >= 51 && valuePercentil <= 55)
            {
                position = 10;
            }
            else if (valuePercentil >= 56 && valuePercentil <= 60)
            {
                position = 11;
            }
            else if (valuePercentil >= 61 && valuePercentil <= 65)
            {
                position = 12;
            }
            else if (valuePercentil >= 66 && valuePercentil <= 70)
            {
                position = 13;
            }
            else if (valuePercentil >= 71 && valuePercentil <= 75)
            {
                position = 14;
            }
            else if (valuePercentil >= 76 && valuePercentil <= 80)
            {
                position = 15;
            }
            else if (valuePercentil >= 81 && valuePercentil <= 85)
            {
                position = 16;
            }
            else if (valuePercentil >= 86 && valuePercentil <= 90)
            {
                position = 17;
            }
            else if (valuePercentil >= 91 && valuePercentil <= 95)
            {
                position = 18;
            }
            else if (valuePercentil >= 96)
            {
                position = 19;
            }
          
            return position;
        }

        private int GetOldGroup(int age)
        {
            int groupAge = 0;

            if (age >= 10 && age <= 19)
            {
                groupAge = 1;
            }
            else if (age >= 20 && age <= 29)
            {
                groupAge = 2;
            }
            else if (age >= 30 && age <= 39)
            {
                groupAge = 3;
            }
            else if (age >= 40 && age <= 49)
            {
                groupAge = 4;
            }
            else if (age >= 50 && age <= 59)
            {
                groupAge = 5;
            }
            else if (age >= 60 && age <= 69)
            {
                groupAge = 6;
            }
            else if (age >= 70 && age <= 79)
            {
                groupAge = 7;
            }
            else if (age >= 80 && age <= 89)
            {
                groupAge = 8;
            }
            else if (age >= 90 && age <= 99)
            {
                groupAge = 9;
            }

            else if (age >= 100 && age <= 109)
            {
                groupAge = 10;
            }

            else if (age >= 110) 
            {
                groupAge = 11;
            }
           
            return groupAge;

        }

        private int GetPercentil(List<int> data, int datapts, int count)
        {
            data.Sort();
            int rank = data.IndexOf(datapts) + 1;
            double rankPoints = ((double)rank / (double)count) * 100;
            var valuePercentil = (Int32)Math.Truncate(rankPoints);
            if (valuePercentil == 0)
            {
                valuePercentil = 1;
            }

            return valuePercentil;
        }

        [Route("QueryOneUserQuestions")]
        public async Task<HttpResponseMessage> QueryOneUserQuestions(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            String idform = varSearchModel.parameters[0].Trim();

            AssessmentCalculationModel question = new AssessmentCalculationModel();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    SqlCommand command1 = new SqlCommand("SELECT " +
                                  "u.email, f.userid, f.provider, f.conversionTotal, f.datelocal,  " +
                                  "fa.Gender,fa.Age,fa.HowHeightFeet,fa.HowHeightInchs,fa.HowWeight, " +
                                  "fa.CardioVascularHealth,fa.ChestPain,fa.FatherDiagnosed, " +
                                  "fa.MotherDiagnosed,Diabetes,fa.ModerateExercise,fa.Vigorous,Sitting,Smoke, fa.Secondhandsmoke, fa.Alcohol, " +
                                  "fa.Antibiotics, fa.Systolic,Diastolic, " +
                                  "fa.HowWaist,HowHip, " +
                                  "fa.SideBridge, " +
                                  "fa.SideBridgeLeft,fa.DeepSquat,fa.ActiveStraightLegRaise,fa.ShoulderMobility,fa.ShoulderClearingTest, " +
                                  "fa.SpinalFlexion,fa.SpinalExtension,fa.Pushuptest, " +
                                  "fa.PushuptestModifiedWomen, " +
                                  "fa.MBThrow, " +
                                  "fa.Coopertest, " +
                                  "fa.RateFitness,fa.RankFitness,fa.Particpe, fa.Planing, " +
                                  "u.firstname, u.lastname, f.cityId, fa.birthday " +
                                  "from Assessments f " +
                                  "left join AssessmentsAnswers fa on f.idform = fa.idform " +
                                  "left join users u on f.userid = u.id " +
                                  "where f.idform = @idform ", connection1);

                    SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
                    parameter.Value = idform;
                    command1.Parameters.Add(parameter);

                    SqlDataReader reader = await command1.ExecuteReaderAsync();

                    while (await reader.ReadAsync())
                    {
                        question.email = reader.GetString(0);
                        question.userid = reader.GetString(1);
                        question.provider = reader.GetString(2);
                        question.conversionTotal = reader.GetInt32(3);
                        question.datelocal = reader.GetDateTime(4);
                        question.sex = reader.GetInt32(5);
                        question.howold = reader.GetInt32(6);
                        question.howHeightFeet = reader.GetInt32(7);
                        question.howHeightInch = reader.GetInt32(8);
                        question.howWeight = reader.GetInt32(9);
                        question.heartCondition = reader.GetInt32(10);
                        question.painChest = reader.GetInt32(11);
                        question.fatherCardiovascularDisease = reader.GetInt32(12);
                        question.motherCardiovascularDisease = reader.GetInt32(13);
                        question.diabetes = reader.GetInt32(14);
                        question.moderateExercise = reader.GetInt32(15);
                        question.vigorous = reader.GetInt32(16);
                        question.sitting = reader.GetInt32(17);
                        question.doYouSmoke = reader.GetInt32(18);
                        question.exposedSmoke = reader.GetInt32(19);
                        question.consumeAlcohol = reader.GetInt32(20);
                        question.antibiotics = reader.GetInt32(21);
                        question.systolic = reader.GetInt32(22);
                        question.Diastolic = reader.GetInt32(23);
                        question.howWaist = (double)reader.GetDecimal(24);
                        question.howHip = (double)reader.GetDecimal(25);
                        question.sideBridge = reader.GetInt32(26);
                        question.sideBridgeLeft = reader.GetInt32(27);
                        question.deepSquat = reader.GetInt32(28);
                        question.activeStraightLegRaise = reader.GetInt32(29);
                        question.shoulderMobility = reader.GetInt32(30);
                        question.shoulderClearingTest = reader.GetInt32(31);
                        question.spinalFlexion = reader.GetInt32(32);
                        question.spinalExtension = reader.GetInt32(33);
                        question.pushs = reader.GetInt32(34);
                        question.modified = reader.GetInt32(35);
                        question.throws = (double)reader.GetDecimal(36);
                        question.cooper = (double)reader.GetDecimal(37);
                        question.rateFitness = reader.GetInt32(38);
                        question.rankFitness = reader.GetInt32(39);
                        question.participe = reader.GetInt32(40);
                        question.planning = reader.GetInt32(41);

                        if (reader.IsDBNull(42))
                        {
                            question.fisrtName = "";
                        }
                        else
                        {
                            question.fisrtName = reader.GetString(42);
                        }

                        if (reader.IsDBNull(43))
                        {
                            question.lastName = "";
                        }
                        else
                        {
                            question.lastName = reader.GetString(43);
                        }
                        
                        if (reader.IsDBNull(44))
                        {
                            question.cityId = 0;
                        } else
                        {
                            question.cityId = reader.GetInt32(44);
                        }

                        if (reader.IsDBNull(45))
                        {
                            question.birthday = DateTime.Now;
                        }
                        else
                        {
                            question.birthday = reader.GetDateTime(45);
                        }

                    }
                    reader.Close();

                    UserPointsModel pointModel = new UserPointsModel();
                    List<UserAssessmentsScore> forms = new List<UserAssessmentsScore>();
                    await AssessmentsByUsers(connection1, question.userid, forms);
                    PointScore scores = new PointScore();
                    await AssessmentByUser(connection1, idform, scores);
                   
                    await GetPointUsers(connection1, question.userid, pointModel, question.howold, question.sex, idform, scores, forms);

                    question.avarage = pointModel.avarage;
                    question.totalUsers = pointModel.totalUsers;
                    question.points = pointModel.points;
                    question.min = pointModel.min;
                    question.max = pointModel.max;
                    question.health = pointModel.Health;
                    question.lifestyle = pointModel.Lifestyle;
                    question.biodata = pointModel.Biodata;
                    question.mobility = pointModel.Mobility;
                    question.fitness = pointModel.Fitness;

                    question.byAreas = pointModel;
                    question.WaisthipScore = pointModel.WaisthipScore;
                    question.bmiScore = pointModel.bmiScore;


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

        [Route("AddUpdate")]
        public async Task<HttpResponseMessage> AddUpdate(AssessmentCalculationModel model)
        {
            UserPointsModel pointModel = new UserPointsModel();

            if (model.idForm == "")
            {
                Thread.CurrentThread.CurrentCulture = culture;

                string password = "";
                bool sendEmail = false;
                
                try
                {
                    if (model.userid == "")
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
                                await CreateUserData(connection1, id, model.email, model.fisrtName, model.lastName);
                            }

                            model.userid = id;
                        }
                    }

                    using (TransactionScope scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                    {
                        using (SqlConnection connection1 = new SqlConnection(connetionString))
                        {
                            await connection1.OpenAsync();

                            model.datelocal = DateTime.Parse(model.datelocalN);

                            int year = Convert.ToInt32(model.yearbirth);
                            int month = Convert.ToInt32(model.monthbirth);
                            int day = Convert.ToInt32(model.daybirth);
                            model.birthday = new DateTime(year, month, day, 0, 0, 0, 0, 0);

                            DateTime now = DateTime.Now;
                            model.howold = now.Year - model.birthday.Year;

                            if (now.Month < model.birthday.Month || (now.Month == model.birthday.Month && now.Day < model.birthday.Day))//not had bday this year yet
                                model.howold--;

                            AssessmentCalculations calculations = new AssessmentCalculations();
                            await calculations.StarAsync(model);

                            if (model.idForm != "")
                            {
                                await Delete(connection1, model.idForm);
                            }
                            string idform = Guid.NewGuid().ToString();
                            await SaveForm(connection1, model, idform);
                            await SaveAnswers(connection1, model, idform);
                            await SavePoints(connection1, model, idform);

                            List<UserAssessmentsScore> forms = new List<UserAssessmentsScore>();
                            await AssessmentsByUsers(connection1, model.userid, forms);
                            PointScore scores = new PointScore();
                            await AssessmentByUser(connection1, idform, scores);
                            await GetPointUsers(connection1, model.userid, pointModel, model.howold, model.sex, idform, scores, forms);

                            await SavePercentiles(connection1, pointModel, idform);

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
                    await SendEmail(password, model.email, model.conversionTotal);
                }
            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, pointModel);
        
        }

        private async Task SaveForm(SqlConnection connection1, AssessmentCalculationModel model, string idform)
        {

            String commandText1 = "INSERT INTO Assessments " +
                                  "(idform, userid, provider, cityId, datelocal, dateserver, " +
                                  "health, lifestyle, biodata, mobility, fitness, total, conversionTotal) " +
                                  "values (@idform, @userid, @provider, @cityId,  @datelocal, getdate(), " +
                                  "@health, @lifestyle, @biodata, @mobility, @fitness, @total, @conversionTotal)";
            

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = model.userid;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@provider", SqlDbType.VarChar);
            parameter.Value = model.provider;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@cityId", SqlDbType.Int);
            parameter.Value = model.cityId;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@datelocal", SqlDbType.DateTime);
            parameter.Value = model.datelocal;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@health", SqlDbType.Int);
            parameter.Value = model.health;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lifestyle", SqlDbType.Int);
            parameter.Value = model.lifestyle;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@biodata", SqlDbType.Int);
            parameter.Value = model.biodata;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@mobility", SqlDbType.Int);
            parameter.Value = model.mobility;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fitness", SqlDbType.Int);
            parameter.Value = model.fitness;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@total", SqlDbType.Int);
            parameter.Value = model.total;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@conversionTotal", SqlDbType.Int);
            parameter.Value = model.conversionTotal;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task SaveAnswers(SqlConnection connection1, AssessmentCalculationModel model, string idform)
        {
            String commandText1 = "INSERT INTO AssessmentsAnswers " +
                                  "(idform, " +
                                  "Gender,Age,birthday,Gpothrows,GpoPushs,GpoCooper,HowHeightFeet,HowHeightInchs,HowWeight, " +
                                  "CardioVascularHealth,ChestPain,FatherDiagnosed, " +
                                  "MotherDiagnosed,Diabetes,ModerateExercise,Vigorous,Sitting,Smoke, Secondhandsmoke, Alcohol, " +
                                  "Antibiotics, Systolic,Diastolic, " +
                                  "HowWaist,HowHip,BMI, " +
                                  "SideBridge, " +
                                  "SideBridgeLeft,DeepSquat,ActiveStraightLegRaise,ShoulderMobility,ShoulderClearingTest, " +
                                  "SpinalFlexion,SpinalExtension,Pushuptest, " +
                                  "PushuptestModifiedWomen, " +
                                  "MBThrow, " +
                                  "Coopertest, " +
                                  "RateFitness,RankFitness,Particpe,Planing) " +

                                  "values(" +
                                  "@idform," +
                                  "@Gender,@Age,@birthday,@Gpothrows,@GpoPushs,@GpoCooper,@HowHeightFeet,@HowHeightInchs,@HowWeight, " +
                                  "@CardioVascularHealth,@ChestPain,@FatherDiagnosed, " +
                                  "@MotherDiagnosed,@Diabetes,@ModerateExercise,@Vigorous,@Sitting,@Smoke, @Secondhandsmoke, @Alcohol, " +
                                  "@Antibiotics, @Systolic,@Diastolic, " +
                                  "@HowWaist,@HowHip,@BMI, " +
                                  "@SideBridge, " +
                                  "@SideBridgeLeft,@DeepSquat,@ActiveStraightLegRaise,@ShoulderMobility,@ShoulderClearingTest, " +
                                  "@SpinalFlexion,@SpinalExtension,@Pushuptest, " +
                                  "@PushuptestModifiedWomen, " +
                                  "@MBThrow, " +
                                  "@Coopertest, " +
                                  "@RateFitness,@RankFitness,@Particpe,@Planing)";




            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Gender", SqlDbType.Int);
            parameter.Value = model.sex;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Age", SqlDbType.Int);
            parameter.Value = model.howold;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@birthday", SqlDbType.DateTime);
            parameter.Value = model.birthday;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Gpothrows", SqlDbType.Int);
            parameter.Value = model.gpothrows;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@GpoPushs", SqlDbType.Int);
            parameter.Value = model.gpoPushs;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@GpoCooper", SqlDbType.Int);
            parameter.Value = model.gpoCooper;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowHeightFeet", SqlDbType.Int);
            parameter.Value = model.howHeightFeet;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowHeightInchs", SqlDbType.Int);
            parameter.Value = model.howHeightInch;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowWeight", SqlDbType.Int);
            parameter.Value = model.howWeight;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@CardioVascularHealth", SqlDbType.Int);
            parameter.Value = model.heartCondition;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ChestPain", SqlDbType.Int);
            parameter.Value = model.painChest;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@FatherDiagnosed", SqlDbType.Int);
            parameter.Value = model.fatherCardiovascularDisease;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MotherDiagnosed", SqlDbType.Int);
            parameter.Value = model.motherCardiovascularDisease;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Diabetes", SqlDbType.Int);
            parameter.Value = model.diabetes;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ModerateExercise", SqlDbType.Int);
            parameter.Value = model.moderateExercise;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Vigorous", SqlDbType.Int);
            parameter.Value = model.vigorous;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Sitting", SqlDbType.Int);
            parameter.Value = model.sitting;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Smoke", SqlDbType.Int);
            parameter.Value = model.doYouSmoke;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Secondhandsmoke", SqlDbType.Int);
            parameter.Value = model.exposedSmoke;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Alcohol", SqlDbType.Int);
            parameter.Value = model.consumeAlcohol;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Antibiotics", SqlDbType.Int);
            parameter.Value = model.antibiotics;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Systolic", SqlDbType.Int);
            parameter.Value = model.systolic;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Diastolic", SqlDbType.Int);
            parameter.Value = model.Diastolic;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowWaist", SqlDbType.Decimal);
            parameter.Value = model.howWaist;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@HowHip", SqlDbType.Decimal);
            parameter.Value = model.howHip;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@BMI", SqlDbType.Decimal);
            parameter.Value = model.BMI;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@SideBridge", SqlDbType.Int);
            parameter.Value = model.sideBridge;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SideBridgeLeft", SqlDbType.Int);
            parameter.Value = model.sideBridgeLeft;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@DeepSquat", SqlDbType.Int);
            parameter.Value = model.deepSquat;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ActiveStraightLegRaise", SqlDbType.Int);
            parameter.Value = model.activeStraightLegRaise;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ShoulderMobility", SqlDbType.Int);
            parameter.Value = model.shoulderMobility;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ShoulderClearingTest", SqlDbType.Int);
            parameter.Value = model.shoulderClearingTest;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SpinalFlexion", SqlDbType.Int);
            parameter.Value = model.spinalFlexion;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SpinalExtension", SqlDbType.Int);
            parameter.Value = model.spinalExtension;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Pushuptest", SqlDbType.Int);
            parameter.Value = model.pushs;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@PushuptestModifiedWomen", SqlDbType.Int);
            parameter.Value = model.modified;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MBThrow", SqlDbType.Decimal);
            parameter.Value = model.throws;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@Coopertest", SqlDbType.Decimal);
            parameter.Value = model.cooper;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@RateFitness", SqlDbType.Int);
            parameter.Value = model.rateFitness;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@RankFitness", SqlDbType.Int);
            parameter.Value = model.rankFitness;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Particpe", SqlDbType.Int);
            parameter.Value = model.participe;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Planing", SqlDbType.Int);
            parameter.Value = model.planning;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }

        private async Task SavePoints(SqlConnection connection1, AssessmentCalculationModel model, string idform)
        {

            String commandText1 = "INSERT INTO AssessmentsPoints " +
                                  "(idform, " +
                                  "CardioVascularHealthpts,ChestPainpts, " +
                                  "FatherDiagnosedpts,MotherDiagnosedpts,Diabetespts, " +
                                  "ModerateExercisepts,Vigorouspts,Sittingpts,Smokepts,Secondhandsmokepts, " +
                                  "Alcoholpts,Antibioticspts,Systolicpts, " +
                                  "Diastolicpts,WaistToHippts,BMIpts,SideBridgepts, " +
                                  "DeepSquatpts,ActiveStraightLegRaisepts, " +
                                  "ShoulderMobilitypts,ShoulderClearingTestpts,SpinalFlexionpts,SpinalExtensionpts, " +
                                  "Pushuptestpts, " +
                                  "MBThrowpts, " +
                                  "Coopertestpts) " +
                                  
                                  "values(" +
                                  "@idform," +
                                  "@CardioVascularHealthpts,@ChestPainpts, " +
                                  "@FatherDiagnosedpts,@MotherDiagnosedpts,@Diabetespts, " +
                                  "@ModerateExercisepts,@Vigorouspts,@Sittingpts,@Smokepts,@Secondhandsmokepts, " +
                                  "@Alcoholpts,@Antibioticspts,@Systolicpts, " +
                                  "@Diastolicpts,@WaistToHippts,@BMIpts,@SideBridgepts, " +
                                  "@DeepSquatpts,@ActiveStraightLegRaisepts, " +
                                  "@ShoulderMobilitypts,@ShoulderClearingTestpts,@SpinalFlexionpts,@SpinalExtensionpts, " +
                                  "@Pushuptestpts, " +
                                  "@MBThrowpts, " +
                                  "@Coopertestpts) ";




            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@CardioVascularHealthpts", SqlDbType.Int);
            parameter.Value = model.heartConditionValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ChestPainpts", SqlDbType.Int);
            parameter.Value = model.painChestValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@FatherDiagnosedpts", SqlDbType.Int);
            parameter.Value = model.fatherCardiovascularDiseaseValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MotherDiagnosedpts", SqlDbType.Int);
            parameter.Value = model.motherCardiovascularDiseaseValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Diabetespts", SqlDbType.Int);
            parameter.Value = model.diabetesValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ModerateExercisepts", SqlDbType.Int);
            parameter.Value = model.moderateExerciseValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Vigorouspts", SqlDbType.Int);
            parameter.Value = model.vigorousValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Sittingpts", SqlDbType.Int);
            parameter.Value = model.sittingValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Smokepts", SqlDbType.Int);
            parameter.Value = model.doYouSmokeValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Secondhandsmokepts", SqlDbType.Int);
            parameter.Value = model.exposedSmokeValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Alcoholpts", SqlDbType.Int);
            parameter.Value = model.consumeAlcoholValue;
            command1.Parameters.Add(parameter);
            
            parameter = new SqlParameter("@Antibioticspts", SqlDbType.Int);
            parameter.Value = model.antibioticsValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Systolicpts", SqlDbType.Int);
            parameter.Value = model.systolicValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Diastolicpts", SqlDbType.Int);
            parameter.Value = model.DiastolicValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@WaistToHippts", SqlDbType.Int);
            parameter.Value = model.waistToHipValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@BMIpts", SqlDbType.Int);
            parameter.Value = model.BMIValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SideBridgepts", SqlDbType.Int);
            parameter.Value = model.sideBridgeValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@DeepSquatpts", SqlDbType.Int);
            parameter.Value = model.deepSquatValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ActiveStraightLegRaisepts", SqlDbType.Int);
            parameter.Value = model.activeStraightLegRaiseValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ShoulderMobilitypts", SqlDbType.Int);
            parameter.Value = model.shoulderMobilityValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@ShoulderClearingTestpts", SqlDbType.Int);
            parameter.Value = model.shoulderClearingTestValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SpinalFlexionpts", SqlDbType.Int);
            parameter.Value = model.spinalExtensionValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@SpinalExtensionpts", SqlDbType.Int);
            parameter.Value = model.spinalExtensionValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Pushuptestpts", SqlDbType.Int);
            parameter.Value = model.pushsValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@MBThrowpts", SqlDbType.Int);
            parameter.Value = model.throwsValue;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@Coopertestpts", SqlDbType.Int);
            parameter.Value = model.cooperValue;
            command1.Parameters.Add(parameter);
            
            await command1.ExecuteNonQueryAsync();
        }

        private async Task SavePercentiles(SqlConnection connection1, UserPointsModel model, string idform)
        {

            String commandText1 = "INSERT INTO HistoryPercentiles " +
                                  "(idform, lifestyle, biodata, mobility, fitness, percentil,  " +
                                  "sidebridge, mbthrows, pushups, cooper, totalusers) " +
                                  "values (@idform, @lifestyle, @biodata, @mobility, @fitness, @percentil, " +
                                  "@sidebridge, @mbthrows, @pushups, @cooper, @totalusers)";

     
            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@percentil", SqlDbType.Int);
            parameter.Value = model.avarage;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@lifestyle", SqlDbType.Int);
            parameter.Value = model.Lifestyle;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@biodata", SqlDbType.Int);
            parameter.Value = model.Biodata;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@mobility", SqlDbType.Int);
            parameter.Value = model.Mobility;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@fitness", SqlDbType.Int);
            parameter.Value = model.Fitness;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@sidebridge", SqlDbType.Int);
            parameter.Value = model.FitnessPoints.SideBridgePercentil;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@mbthrows", SqlDbType.Int);
            parameter.Value = model.FitnessPoints.MBThrowPercentil;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@pushups", SqlDbType.Int);
            parameter.Value = model.FitnessPoints.PushuptestPercentil;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@cooper", SqlDbType.Int);
            parameter.Value = model.FitnessPoints.CoopertestPercentil;
            command1.Parameters.Add(parameter);

            parameter = new SqlParameter("@totalusers", SqlDbType.Int);
            parameter.Value = model.totalUsers;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();
        }


        private async Task Delete(SqlConnection connection1, string idform)
        {
            String commandText1 = " delete from Assessments where idform = @idform";

            SqlCommand command1 = new SqlCommand(commandText1, connection1);

            SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();


            commandText1 = " delete from AssessmentsAnswers where idform = @idform";

            command1 = new SqlCommand(commandText1, connection1);

            parameter = new SqlParameter("@idform", SqlDbType.VarChar);
            parameter.Value = idform;
            command1.Parameters.Add(parameter);

            await command1.ExecuteNonQueryAsync();

            commandText1 = " delete from AssessmentsPoints where idform = @idform";

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

                    String commandText1 = "UPDATE Assessments SET status = @status where idform = @idform";

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

    public class PointScore
    {
        public int WaisthipScore = 0;
        public int bmiScore = 0;
        public DateTime date = new DateTime(); 
  
        public int HealthP = 0;
        public int LifestyleP = 0;
        public int BiodataP = 0;
        public int MobilityP = 0;
        public int FitnessP = 0;

        public int Fitnesspts = 0;

        public int SideBridgeP = 0;
        public int PushuptestP = 0;
        public int MBThrowP = 0;
        public int CoopertestP = 0;

        public int SideBridgeA = 0;
        public int SideBridgeLeftA = 0;
        public int PushuptestA = 0;
        public double MBThrowA = 0;
        public double CoopertestA = 0;

        public int Mobilitypts = 0;

        public int DeepSquatP = 0;
        public int ActiveStraightLegRaiseP = 0;
        public int ShoulderMobilityP = 0;
        public int ShoulderClearingTestP = 0;
        public int SpinalFlexionP = 0;
        public int SpinalExtensionP = 0;

        public int DeepSquatA = 0;
        public int ActiveStraightLegRaiseA = 0;
        public int ShoulderMobilityA = 0;
        public int ShoulderClearingTestA = 0;
        public int SpinalFlexionA = 0;
        public int SpinalExtensionA = 0;

        public int LifeStylepts = 0;

        public int ModerateExerciseP = 0;
        public int VigorousP = 0;
        public int SittingP = 0;
        public int SmokeP = 0;
        public int SecondhandsmokeP = 0;
        public int AlcoholP = 0;
        public int AntibioticsP = 0;

        public int ModerateExerciseA = 0;
        public int VigorousA = 0;
        public int SittingA = 0;
        public int SmokeA = 0;
        public int SecondhandsmokeA = 0;
        public int AlcoholA = 0;
        public int AntibioticsA = 0;

        public int Biometricspts = 0;

        public int SystolicP = 0;
        public int DiastolicP = 0;
        public int WaistHipP = 0;
        public int BMIP = 0;

        public int SystolicA = 0;
        public int DiastolicA = 0;
        public double WaistA = 0;
        public double HipA = 0;
        public double BMIA = 0;

    }


}
