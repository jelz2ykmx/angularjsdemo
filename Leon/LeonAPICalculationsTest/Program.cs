using LeonAPICalculations;
using LeonModels.Calculations;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonAPICalculationsTest
{
    class Program
    {
        static void Main(string[] args)
        {
            CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
            String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            List<AssessmentCalculationModel> modelsDB = new List<AssessmentCalculationModel>();
            List<AssessmentCalculationModel> models = new List<AssessmentCalculationModel>();

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {

                connection1.Open();

                SqlCommand command1 = new SqlCommand("SELECT " +
                              "f.email, f.userid, f.total1, f.total2, f.total3, f.grantotal, f.conversiontotal, f.datelocal,  " +

                              "fa.Gender,fa.Age,fa.HowHeightFeet,fa.HowHeightInchs,fa.HowWeight, " +
                              "fa.CardioVascularHealth,fa.ChestPain,fa.FatherDiagnosed, " +
                              "fa.MotherDiagnosed,Diabetes,fa.ModerateExercise,fa.Vigorous,Sitting,Smoke, fa.Secondhandsmoke, fa.Alcohol, " +
                              "RateFitness,RankFitness,Particpe,Planing," +
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
                              "f.cityId,f.idform, u.id, f.dateserver, f.status  " +

                              "from form f " +
                              "left join formanswer fa on f.idform = fa.idform " +
                              "left join formpoints fp on f.idform = fp.idform " +
                              "left join users u on f.email = u.email ", connection1);

                SqlDataReader reader = command1.ExecuteReader();

                while (reader.Read())
                {
                    AssessmentCalculationModel modelDB = new AssessmentCalculationModel();
                    modelDB.idForm = reader["idform"].ToString();

                    modelDB.howold = Convert.ToInt32(reader["age"]);
                    modelDB.sex = Convert.ToInt32(reader["gender"]);
                    if (modelDB.sex == 0)
                    {
                        modelDB.throws = Convert.ToDouble(reader["MBThrowMen"]);
                        modelDB.throwsValue = Convert.ToInt32(reader["MBThrowMenpts"]);

                        modelDB.cooper = Convert.ToDouble(reader["CoopertestMen"]);
                        modelDB.cooperValue = Convert.ToInt32(reader["CoopertestMenpts"]);

                        modelDB.pushs = Convert.ToInt32(reader["PushuptestMen"]);
                        modelDB.pushsValue = Convert.ToInt32(reader["PushuptestMenpts"]);

                        modelDB.howWaist = Convert.ToDouble(reader["WaistMen"]);
                        modelDB.howHip = Convert.ToDouble(reader["HipMen"]);
                        modelDB.waistToHipValue = Convert.ToDouble(reader["WaisttoHipMenpts"]);

                    }
                    else
                    {
                        modelDB.throws = Convert.ToDouble(reader["MBThrowWomen"]);
                        modelDB.throwsValue = Convert.ToInt32(reader["MBThrowWomenpts"]);

                        modelDB.cooper = Convert.ToDouble(reader["CoopertestWomen"]);
                        modelDB.cooperValue = Convert.ToInt32(reader["CoopertestWomenpts"]);

                        modelDB.modified = Convert.ToInt32(reader["PushuptestModifiedWomen"]);
                        if (modelDB.modified == 0)
                        {
                            modelDB.pushs = Convert.ToInt32(reader["PushuptestWomen"]);
                            modelDB.pushsValue = Convert.ToInt32(reader["PushuptestWomenpts"]);
                        }
                        else
                        {
                            modelDB.pushs = Convert.ToInt32(reader["PushuptestWomenModified"]);
                            modelDB.pushsValue = Convert.ToInt32(reader["PushuptestWomenModifiedpts"]);
                        }

                        modelDB.howWaist = Convert.ToDouble(reader["WaistWomen"]);
                        modelDB.howHip = Convert.ToDouble(reader["HipWomen"]);
                        modelDB.waistToHipValue = Convert.ToDouble(reader["WaisttoHipWomenpts"]);

                    }
                    modelDB.howHeightFeet = Convert.ToDouble(reader["HowHeightFeet"]);
                    modelDB.howHeightInch = Convert.ToDouble(reader["HowHeightInchs"]);
                    modelDB.howWeight = Convert.ToInt32(reader["HowWeight"]);
                    modelDB.BMIValue = Convert.ToDouble(reader["HowHeightpts"]);
                    modelDB.heartCondition = Convert.ToInt32(reader["CardioVascularHealth"]);
                    modelDB.heartConditionValue = Convert.ToInt32(reader["CardioVascularHealthpts"]);
                    modelDB.painChest = Convert.ToInt32(reader["ChestPain"]);
                    modelDB.painChestValue = Convert.ToInt32(reader["ChestPainpts"]);
                    modelDB.fatherCardiovascularDisease = Convert.ToInt32(reader["FatherDiagnosed"]);
                    modelDB.fatherCardiovascularDiseaseValue = Convert.ToInt32(reader["FatherDiagnosedpts"]);
                    modelDB.motherCardiovascularDisease = Convert.ToInt32(reader["MotherDiagnosed"]);
                    modelDB.motherCardiovascularDiseaseValue = Convert.ToInt32(reader["MotherDiagnosedpts"]);
                    modelDB.diabetes = Convert.ToInt32(reader["Diabetes"]);
                    modelDB.diabetesValue = Convert.ToInt32(reader["Diabetespts"]);
                    modelDB.moderateExercise = Convert.ToInt32(reader["ModerateExercise"]);
                    modelDB.moderateExerciseValue = Convert.ToInt32(reader["ModerateExercisepts"]);
                    modelDB.vigorous = Convert.ToInt32(reader["Vigorous"]);
                    modelDB.vigorousValue = Convert.ToInt32(reader["Vigorouspts"]);
                    modelDB.sitting = Convert.ToInt32(reader["Sitting"]);
                    modelDB.sittingValue = Convert.ToInt32(reader["Sittingpts"]);
                    modelDB.doYouSmoke = Convert.ToInt32(reader["Smoke"]);
                    modelDB.doYouSmokeValue = Convert.ToInt32(reader["Smokepts"]);
                    modelDB.exposedSmoke = Convert.ToInt32(reader["Secondhandsmoke"]);
                    modelDB.exposedSmokeValue = Convert.ToInt32(reader["Secondhandsmokepts"]);
                    modelDB.consumeAlcohol = Convert.ToInt32(reader["Alcohol"]);
                    modelDB.consumeAlcoholValue = Convert.ToInt32(reader["Alcoholpts"]);
                    modelDB.antibiotics = Convert.ToInt32(reader["Antibiotics"]);
                    modelDB.antibioticsValue = Convert.ToInt32(reader["Antibioticspts"]);

                    modelDB.rateFitness = Convert.ToInt32(reader["rateFitness"]);
                    modelDB.rankFitness = Convert.ToInt32(reader["RankFitness"]);
                    if (modelDB.rankFitness > 1)
                    {
                        modelDB.rankFitness = 1;
                    }

                    modelDB.participe = Convert.ToInt32(reader["particpe"]);
                    modelDB.planning = Convert.ToInt32(reader["planing"]);

                    modelDB.systolic = Convert.ToInt32(reader["Systolic"]);
                    modelDB.systolicValue = Convert.ToInt32(reader["Systolicpts"]);
                    modelDB.Diastolic = Convert.ToInt32(reader["Diastolic"]);
                    modelDB.DiastolicValue = Convert.ToInt32(reader["Diastolicpts"]);
                    modelDB.deepSquat = Convert.ToInt32(reader["DeepSquat"]);
                    modelDB.deepSquatValue = Convert.ToInt32(reader["DeepSquatpts"]);
                    modelDB.activeStraightLegRaise = Convert.ToInt32(reader["ActiveStraightLegRaise"]);
                    modelDB.activeStraightLegRaiseValue = Convert.ToInt32(reader["ActiveStraightLegRaisepts"]);
                    modelDB.shoulderMobility = Convert.ToInt32(reader["ShoulderMobility"]);
                    modelDB.shoulderMobilityValue = Convert.ToInt32(reader["ShoulderMobilitypts"]);
                    modelDB.shoulderClearingTest = Convert.ToInt32(reader["shoulderClearingTest"]);
                    modelDB.shoulderClearingTestValue = Convert.ToInt32(reader["shoulderClearingTestpts"]);
                    modelDB.spinalFlexion = Convert.ToInt32(reader["spinalFlexion"]);
                    modelDB.spinalFlexionValue = Convert.ToInt32(reader["spinalFlexionpts"]);
                    modelDB.spinalExtension = Convert.ToInt32(reader["spinalExtension"]);
                    modelDB.spinalExtensionValue = Convert.ToInt32(reader["spinalExtensionpts"]);
                    if (modelDB.sex == 0)
                    {
                        modelDB.sideBridge = Convert.ToInt32(reader["sideBridgeMen"]);
                        modelDB.sideBridgeLeft = Convert.ToInt32(reader["sideBridgeMenLeft"]);
                        modelDB.sideBridgeValue = Convert.ToInt32(reader["SideBridgeMenpts"]);
                    }
                    else
                    {
                        modelDB.sideBridge = Convert.ToInt32(reader["sideBridgeWomen"]);
                        modelDB.sideBridgeLeft = Convert.ToInt32(reader["sideBridgeWomenLeft"]);
                        modelDB.sideBridgeValue = Convert.ToInt32(reader["SideBridgeWomenpts"]);
                    }

                    modelsDB.Add(modelDB);

                    AssessmentCalculationModel model = new AssessmentCalculationModel();
                    model.idForm = modelDB.idForm;
                    model.fisrtName = reader["firstname"].ToString();
                    model.lastName = reader["lastname"].ToString();
                    model.email = reader["email"].ToString();
                    model.userid = reader["id"].ToString();
                    model.provider = reader["userid"].ToString();
                    model.cityId = Convert.ToInt32(reader["cityId"]);
                    model.datelocal = DateTime.Parse(reader["datelocal"].ToString());
                    model.dateserver = DateTime.Parse(reader["dateserver"].ToString());
                    model.status = reader["status"].ToString();

                    model.howold = modelDB.howold;
                    model.sex = modelDB.sex;
                    model.modified = modelDB.modified;
                    model.pushs = modelDB.pushs;
                    model.throws = modelDB.throws;
                    model.cooper = modelDB.cooper;
                    model.howHeightFeet = modelDB.howHeightFeet;
                    model.howHeightInch = modelDB.howHeightInch;
                    model.howWeight = modelDB.howWeight;
                    model.howWaist = modelDB.howWaist;
                    model.howHip = modelDB.howHip;
                    model.heartCondition = modelDB.heartCondition;
                    model.painChest = modelDB.painChest;
                    model.fatherCardiovascularDisease = modelDB.fatherCardiovascularDisease;
                    model.motherCardiovascularDisease = modelDB.motherCardiovascularDisease;
                    model.diabetes = modelDB.diabetes;
                    model.moderateExercise = modelDB.moderateExercise;
                    model.vigorous = modelDB.vigorous;
                    model.sitting = modelDB.sitting;
                    model.doYouSmoke = modelDB.doYouSmoke;
                    model.exposedSmoke = modelDB.exposedSmoke;
                    model.consumeAlcohol = modelDB.consumeAlcohol;
                    model.antibiotics = modelDB.antibiotics;
                    model.rateFitness = modelDB.rateFitness;

                    model.rateFitness = modelDB.rateFitness;
                    model.rankFitness = modelDB.rankFitness;
                    model.participe = modelDB.participe;
                    model.planning = modelDB.planning;

                    model.systolic = modelDB.systolic;
                    model.Diastolic = modelDB.Diastolic;
                    model.deepSquat = modelDB.deepSquat;
                    model.activeStraightLegRaise = modelDB.activeStraightLegRaise;
                    model.shoulderMobility = modelDB.shoulderMobility;
                    model.shoulderClearingTest = modelDB.shoulderClearingTest;
                    model.spinalFlexion = modelDB.spinalFlexion;
                    model.spinalExtension = modelDB.spinalExtension;
                    model.sideBridge = modelDB.sideBridge;
                    model.sideBridgeLeft = modelDB.sideBridgeLeft;



                    models.Add(model);
                }

                reader.Close();

            }

            AssessmentCalculations calcula = new AssessmentCalculations();
            for (int x = 0; x < models.Count(); x++)
            {
                //if (models[x].idForm == "87d1b1d3-333f-4cff-bb63-1e868435131c")
                //{
                //calcula.StarAsync(models[x]).Wait();
                AddData data = new AddData();
                data.AddUpdate(models[x]).Wait();


                //}

                //if (modelsDB[x].sideBridgeValue != models[x].sideBridgeValue)
                //{

                //Console.WriteLine("{0} \t{1} \t{2} \t{3} \t{4}  \t{5} \t{6} \t{7}", models[x].idForm,
                //          models[x].health, models[x].lifestyle, models[x].biodata, models[x].mobility, models[x].fitness, models[x].total, models[x].conversionTotal);
                //}

                /*
                if (modelsDB[x].pushsValue != models[x].pushsValue)
                {
                    Console.WriteLine("{0} \t{1} \t{2} \t{3} \t{4} \t{5} \t{6}", models[x].idForm,
                        modelsDB[x].pushs, models[x].pushs, modelsDB[x].pushsValue, models[x].pushsValue, models[x].sex, models[x].modified);
                }
               */
                /*
                if (modelsDB[x].throwsValue != models[x].throwsValue)
                {

                    Console.WriteLine("{0} \t{1} \t{2} \t{3} \t{4} \t{5} \t{6}", models[x].idForm,
                        modelsDB[x].throws, models[x].throws, modelsDB[x].throwsValue, models[x].throwsValue, models[x].sex, models[x].modified);
                }
               */
                /*
                 if (modelsDB[x].cooperValue != models[x].cooperValue)
                 {

                     Console.WriteLine("{0} \t{1} \t{2} \t{3} \t{4} \t{5} \t{6}", models[x].idForm,
                         modelsDB[x].cooper, models[x].cooper, modelsDB[x].cooperValue, models[x].cooperValue, models[x].sex, models[x].modified);
                 }
                 */
                /*
                if (modelsDB[x].BMIValue != models[x].BMIValue)
                {

                   Console.WriteLine("{0} \t{1} \t{2} \t{3} \t{4} \t{5} \t{6}", models[x].idForm,
                       modelsDB[x].cooper, models[x].cooper, modelsDB[x].BMIValue, models[x].BMIValue, models[x].sex, models[x].BMI);
                }
                */
                /*
                if (modelsDB[x].waistToHipValue != models[x].waistToHipValue)
                {

                    Console.WriteLine("{0} \t{1} \t{2} \t{3} \t{4} \t{5} \t{6}", models[x].idForm,
                        modelsDB[x].howWaist, models[x].howHip, modelsDB[x].waistToHipValue, models[x].waistToHipValue, models[x].sex, models[x].BMI);
                }
                */


            }
            Console.WriteLine("done!");
            Console.ReadKey();
        }

        void InsertData()
        {
            CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
            String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            List<AssessmentCalculationModel> modelsDB = new List<AssessmentCalculationModel>();
            List<AssessmentCalculationModel> models = new List<AssessmentCalculationModel>();

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                
                connection1.Open();

                for (int x = 0; x < 364; x++)
                {
                    List<int> health = new List<int>();
                    List<int> lifestyle = new List<int>();
                    List<int> biodata = new List<int>();
                    List<int> mobility = new List<int>();
                    List<int> fitness = new List<int>();
                    List<int> total = new List<int>();

                    /*
                    SqlCommand command1 = new SqlCommand("INSERT INTO[dbo].[AssessmentsScore] " +
                                        "([datescore],[health],[lifestyle],[biodata],[mobility],[fitness],[total]) " +
                                        "VALUES(" +

                    command1.ExecuteNonQuery();
                    */
                }


            }
        }

        void FillData(List<int> data)
        {
            /*
            for (int x = 1; x <= 100; )
            */
        }
    }
}
