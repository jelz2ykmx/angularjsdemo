using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicPointsModel
    {
        public int stepsPoints { get; set; }
        public int stepsCount { get; set; }
        public int sleepPoints { get; set; }
        public string sleepCount = "";
        public double sleepCountNumber = 0;
        public int nutritionPoints { get; set; }
        public string nutritionCount = "";
        public int fitnessPoints { get; set; }
        public string fitnessCount = "";
        public double fitnessMiles = 0;
        public double fitnessCals = 0;

    }
}
