using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Capture
{
    public class QuestionsAddUpdate
    {
        public string idform { get; set; }
        public string email { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public int cityId { get; set; }

        public string userid { get; set; }
        public int total1 { get; set; }
        public int total2 { get; set; }
        public int total3 { get; set; }
        public int grantotal { get; set; }
        public int conversiontotal { get; set; }
        public DateTime datelocal { get; set; }
        
        public bool Gender { get; set; }
        public int Age { get; set; }
        public int HowHeightFeet { get; set; }
        public int HowHeightInchs { get; set; }
        public int HowWeight { get; set; }
        public bool CardioVascularHealth { get; set; }
        public bool ChestPain { get; set; }
        public bool FatherDiagnosed { get; set; }
        public bool MotherDiagnosed { get; set; }
        public bool Diabetes { get; set; }
        public int ModerateExercise { get; set; }
        public int Vigorous { get; set; }
        public int Sitting { get; set; }
        public int Smoke { get; set; }
        public bool Secondhandsmoke { get; set; }
        public int Alcohol { get; set; }
        public bool OralContraceptive { get; set; }
        public int Antibiotics { get; set; }
        public int Systolic { get; set; }
        public int Diastolic { get; set; }

        public double WaistMen { get; set; }
        public double HipMen { get; set; }
        public double WaistWomen { get; set; }
        public double HipWomen { get; set; }

        public int SideBridgeMen { get; set; }
        public int SideBridgeWomen { get; set; }
        public int DeepSquat { get; set; }
        public int ActiveStraightLegRaise { get; set; }
        public int ShoulderMobility { get; set; }
        public bool ShoulderClearingTest { get; set; }
        public bool SpinalFlexion { get; set; }
        public bool SpinalExtension { get; set; }
        public int PushuptestMen { get; set; }

        public bool PushuptestModifiedWomen { get; set; }
        public int PushuptestWomen { get; set; }
        public int PushuptestWomenModified { get; set; }

      
        public double MBThrowMen { get; set; }
        public double MBThrowWomen { get; set; }
        public double CoopertestMen { get; set; }
        public double CoopertestWomen { get; set; }

        public int RateFitness { get; set; }
        public int RankFitness { get; set; }
        public bool Particpe { get; set; }


        public int  Genderpts { get; set; }
        public int Agepts { get; set; }
        public int HowHeightpts { get; set; }
        public int HowWeightpts { get; set; }


       
        public int CardioVascularHealthpts { get; set; }
        public int ChestPainpts { get; set; }
        public int FatherDiagnosedpts { get; set; }
        public int MotherDiagnosedpts { get; set; }
        public int Diabetespts { get; set; }
        public int ModerateExercisepts { get; set; }
        public int Vigorouspts { get; set; }
        public int Sittingpts { get; set; }
        public int Smokepts { get; set; }
        public int Secondhandsmokepts { get; set; }
        public int Alcoholpts { get; set; }
        public int OralContraceptivepts { get; set; }
        public int Antibioticspts { get; set; }
        public int Systolicpts { get; set; }
        public int Diastolicpts { get; set; }
        public int WaisttoHipMenpts { get; set; }
        public int WaisttoHipWomenpts { get; set; }
        public int SideBridgeMenpts { get; set; }
        public int SideBridgeWomenpts { get; set; }
        public int DeepSquatpts { get; set; }
        public int ActiveStraightLegRaisepts { get; set; }
        public int ShoulderMobilitypts { get; set; }
        public int ShoulderClearingTestpts { get; set; }
        public int SpinalFlexionpts { get; set; }
        public int SpinalExtensionpts { get; set; }
        public int PushuptestMenpts { get; set; }
        public int PushuptestModifiedWomenpts { get; set; }
        public int PushuptestWomenpts { get; set; }
        public int PushuptestWomenModifiedpts { get; set; }
        public int MBThrowMenpts { get; set; }
        public int MBThrowWomenpts { get; set; }
        public int CoopertestMenpts { get; set; }
        public int CoopertestWomenpts { get; set; }

        public int RateFitnesspts { get; set; }
        public int RankFitnesspts { get; set; }
        public int Particpepts { get; set; }

        public bool Planing { get; set; }
        public int Planingpts { get; set; }
        public int SideBridgeMenLeft { get; set; }
        public int SideBridgeWomenLeft { get; set; }


        public int avarage { get; set; }
        public int totalUsers { get; set; }

        public int min { get; set; }
        public int max { get; set; }

        public int Health { get; set; }
        public int Lifestyle { get; set; }
        public int Biodata { get; set; }
        public int Mobility { get; set; }
        public int Fitness { get; set; }

    }
}
