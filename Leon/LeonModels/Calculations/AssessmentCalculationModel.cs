using LeonModels.Capture;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Calculations
{
    public class AssessmentCalculationModel
    {
        //Group age
        public int gpothrows = 0;
        public int gpoPushs = 0;
        public int gpoCooper = 0;

        //form
        public string idForm = "";
        public string fisrtName = "";
        public string lastName = "";
        public string email = "";
        public string userid = "";
        public string provider = "";
        public int cityId = 0;
        public DateTime datelocal;
        public string datelocalN;
        public DateTime dateserver;
        public string status = null;
        public int health = 0;
        public int lifestyle = 0;
        public int biodata = 0;
        public int mobility = 0;
        public int fitness = 0;
        public int total = 0;
        public int conversionTotal = 0;
       
        //values
        public int howold = 0;
        public DateTime birthday = new DateTime();
        public int daybirth = 0;
        public int monthbirth = 0;
        public int yearbirth = 0;
        public int sex = 0;
        public double howHeightFeet = 0;
        public double howHeightInch = 0;
        public double howWeight = 0;
        public double howWaist = 0;
        public double howHip = 0;
        public double BMI = 0;
        public int heartCondition = 0;
        public int painChest = 0;
        public int fatherCardiovascularDisease = 0;
        public int motherCardiovascularDisease = 0;
        public int diabetes = 0;
        public int moderateExercise = 0;
        public int vigorous = 0;
        public int sitting = 0;
        public int doYouSmoke = 0;
        public int exposedSmoke = 0;
        public int consumeAlcohol = 0;
        public int antibiotics = 0;
        
        public int rateFitness = 0;
        public int rankFitness = 0;
        public int participe = 0;
        public int planning = 0;

        public int systolic = 0;
        public int Diastolic = 0;
        public int deepSquat = 0;
        public int activeStraightLegRaise = 0;
        public int shoulderMobility = 0;
        public int shoulderClearingTest = 0;
        public int spinalFlexion = 0;
        public int spinalExtension = 0;
        public int sideBridge = 0;
        public int sideBridgeLeft = 0;

        public double throws = 0;
        public int modified = 0;
        public int pushs = 0;
        public double cooper = 0;

        // Points
        public double waistToHipValue = 0;
        public double BMIValue = 0;
        public int heartConditionValue = 0;
        public int painChestValue = 0;
        public int fatherCardiovascularDiseaseValue = 0;
        public int motherCardiovascularDiseaseValue = 0;
        public int diabetesValue = 0;
        public int moderateExerciseValue = 0;
        public int vigorousValue = 0;
        public int sittingValue = 0;
        public int doYouSmokeValue = 0;
        public int exposedSmokeValue = 0;
        public int consumeAlcoholValue = 0;
        public int antibioticsValue = 0;

        public int systolicValue = 0;
        public int DiastolicValue = 0;
        public int deepSquatValue = 0;
        public int activeStraightLegRaiseValue = 0;
        public int shoulderMobilityValue = 0;
        public int shoulderClearingTestValue = 0;
        public int spinalFlexionValue = 0;
        public int spinalExtensionValue = 0;
        public double sideBridgeValue = 0;

        public double throwsValue = 0;
        public double pushsValue = 0;
        public double cooperValue = 0;


        //Calculations
        public int avarage = 0;
        public int points = 0;
        public int totalUsers = 0;
        public int min = 0;
        public int max = 0;

        //by areas
        public UserPointsModel byAreas { get; set; }

        public int WaisthipScore { get; set; }
        public int bmiScore { get; set; }

    }
}
