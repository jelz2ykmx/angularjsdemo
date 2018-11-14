
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Capture
{
    public class UserBiometricsPointsModel
    {
        public int Systolic { get;  set; }
        public int Diastolic { get; set; }
        public double HowWaist { get; set; }
        public double HowHip { get; set; }
        public double BMI { get; set; }

        public int points { get; set; }
    
        public int SystolicptsPercentil { get; set; }
        public int DiastolicPercentil { get; set; }
        public int WaistToHipPercentil { get; set; }
        public int BMIPercentil { get; set; }
    

    }
}
