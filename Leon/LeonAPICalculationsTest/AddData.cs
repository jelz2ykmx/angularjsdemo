using LeonAPICalculations;
using LeonModels.Calculations;
using LeonModels.Capture;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Transactions;

namespace LeonAPICalculationsTest
{
    class AddData
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public async Task AddUpdate(AssessmentCalculationModel model)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            UserPointsModel pointModel = new UserPointsModel();

            try
            {
                using (TransactionScope scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                    using (SqlConnection connection1 = new SqlConnection(connetionString))
                    {
                        await connection1.OpenAsync();

                        AssessmentCalculations calculations = new AssessmentCalculations();

                        await calculations.StarAsync(model);
                        await SaveForm(connection1, model, model.idForm);
                        await SaveAnswers(connection1, model, model.idForm);
                        await SavePoints(connection1, model, model.idForm);

                        //await GetPointUsers(connection1, model.email, pointModel);
                    }
                    scope.Complete();
                }
            }
            catch (TransactionAbortedException ex)
            {
                Console.WriteLine(ex.Message);
                Console.ReadKey();
            }
            catch (ApplicationException ex)
            {
                Console.WriteLine(ex.Message);
                Console.ReadKey();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Console.ReadKey();
            }


        }

        private async Task SaveForm(SqlConnection connection1, AssessmentCalculationModel model, string idform)
        {

            String commandText1 = "INSERT INTO Assessments " +
                                  "(idform, userid, provider, cityId, datelocal, dateserver, " +
                                  "health, lifestyle, biodata, mobility, fitness, total, conversionTotal) " +
                                  "values (@idform, @userid, @provider, @cityId,  @datelocal, @dateserver, " +
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

            parameter = new SqlParameter("@dateserver", SqlDbType.DateTime);
            parameter.Value = model.dateserver;
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
                                  "Gender,Age,Gpothrows,GpoPushs,GpoCooper,HowHeightFeet,HowHeightInchs,HowWeight, " +
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
                                  "@Gender,@Age,@Gpothrows,@GpoPushs,@GpoCooper,@HowHeightFeet,@HowHeightInchs,@HowWeight, " +
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
            parameter.Value = model.spinalFlexionValue;
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


        private async Task GetPointUsers(SqlConnection connection1, string email, UserPointsModel pointModel)
        {
            List<int> health = new List<int>();
            List<int> lifestyle = new List<int>();
            List<int> biodata = new List<int>();
            List<int> mobility = new List<int>();
            List<int> fitness = new List<int>();
            List<int> total = new List<int>();

            
            string strcommand = "SELECT health,lifestyle,biodata,mobility,fitness,total" +
                                "FROM AssessmentsScore " +
                                "where datescore = @datescore ";
        /*

       string strcommand = "SELECT f.email,f.conversionTotal,f.datelocal, " +
                           "f.health,f.lifestyle,f.biodata,f.mobility,f.fitness " +
                           "FROM " +
                           "( " +
                           "select email, max(datelocal) as local " +
                           "from Assessments " +
                           "group by email " +
                           " ) " +
                           "as x inner join Assessments as f on f.email = x.email and f.datelocal = x.local and (f.status is null or f.status = '') " +
                           "order by f.conversionTotal ";


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

               HealthP = reader.GetInt32(3) * -1 + 100;
               LifestyleP = reader.GetInt32(4) * -1 + 100;
               MobilityP = reader.GetInt32(5) * -1 + 100;
               BiodataP = reader.GetInt32(6) * -1 + 100;
               FitnessP = reader.GetInt32(7) * -1 + 100;

           }

           Health.Add(reader.GetInt32(3) * -1 + 100);
           Lifestyle.Add(reader.GetInt32(4) * -1 + 100);
           Mobility.Add(reader.GetInt32(5) * -1 + 100);
           Biodata.Add(reader.GetInt32(6) * -1 + 100);
           Fitness.Add(reader.GetInt32(7) * -1 + 100);

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
       */
    }

    }
}
