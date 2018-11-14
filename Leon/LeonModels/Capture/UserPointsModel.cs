using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Capture
{
    public class UserPointsModel
    {
        public string first { get;  set; }
        public string last { get; set; }
        public int points { get; set; }
        public int avarage  { get; set; }
        public DateTime date { get; set; }
        public int totalUsers { get; set; }
        public int max { get; set; }
        public int min { get; set; }

        public int Health { get; set; }
        public int Lifestyle { get; set; }
        public int Biodata { get; set; }
        public int Mobility { get; set; }
        public int Fitness { get; set; }

        public UserFitnessPointsModel FitnessPoints = new UserFitnessPointsModel();
        public UserMobilityPointsModel MobilityPoints = new UserMobilityPointsModel();
        public UserLifestylePointsModel LifestylePoints = new UserLifestylePointsModel();
        public UserBiometricsPointsModel BiometricsPoints = new UserBiometricsPointsModel();

        public List<int> FitnessAgeRank = new List<int>();
        public int FitnessAgePosition = 0;
        public List<int> SideBridgeAgeRank = new List<int>();
        public int SideBridgeAgePosition = 0;
        public List<int> PushuptestAgeRank = new List<int>();
        public int PushuptestAgePosition = 0;
        public List<int> MBThrowAgeRank = new List<int>();
        public int MBThrowAgePosition = 0;
        public List<int> CoopertestAgeRank = new List<int>();
        public int CoopertestAgePosition = 0;

        public List<int> FitnessGenderRank = new List<int>();
        public int FitnessGenderPosition = 0;
        public List<int> SideBridgeGenderRank = new List<int>();
        public int SideBridgeGenderPosition = 0;
        public List<int> PushuptestGenderRank = new List<int>();
        public int PushuptestGenderPosition = 0;
        public List<int> MBThrowGenderRank = new List<int>();
        public int MBThrowGenderPosition = 0;
        public List<int> CoopertestGenderRank = new List<int>();
        public int CoopertestGenderPosition = 0;

        public List<int> FitnessAllRank = new List<int>();
        public int FitnessAllPosition = 0;
        public List<int> SideBridgeAllRank = new List<int>();
        public int SideBridgeAllPosition = 0;
        public List<int> PushuptestAllRank = new List<int>();
        public int PushuptestAllPosition = 0;
        public List<int> MBThrowAllRank = new List<int>();
        public int MBThrowAllPosition = 0;
        public List<int> CoopertestAllRank = new List<int>();
        public int CoopertestAllPosition = 0;

        public List<int> FitnessBothRank = new List<int>();
        public int FitnessBothPosition = 0;
        public List<int> SideBridgeBothRank = new List<int>();
        public int SideBridgeBothPosition = 0;
        public List<int> PushuptestBothRank = new List<int>();
        public int PushuptestBothPosition = 0;
        public List<int> MBThrowBothRank = new List<int>();
        public int MBThrowBothPosition = 0;
        public List<int> CoopertestBothRank = new List<int>();
        public int CoopertestBothPosition = 0;

        public int WaisthipScore { get; set; }
        public int bmiScore { get; set; }

        public List<UserAssessmentsScore> scores = new List<UserAssessmentsScore>();        

    }
}
