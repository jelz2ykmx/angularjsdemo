using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Capture
{
    public class UserLifestylePointsModel
    {
        public int ModerateExercise { get;  set; }
        public int Vigorous { get; set; }
        public int Sitting { get; set; }
        public int Smoke { get; set; }
        public int Secondhandsmoke { get; set; }
        public int Alcohol { get; set; }
        public int Antibiotics { get; set; }

        public int points { get; set; }
    
        public int ModerateExercisePercentil { get; set; }
        public int VigorousPercentil { get; set; }
        public int SittingPercentil { get; set; }
        public int SmokePercentil { get; set; }
        public int SecondhandsmokePercentil { get; set; }
        public int AlcoholPercentil { get; set; }
        public int AntibioticsPercentil { get; set; }
    
    }
}
