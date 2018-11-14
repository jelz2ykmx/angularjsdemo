using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Capture
{
    public class UserFitnessPointsModel
    {
        public int SideBridge { get;  set; }
        public int SideBridgeLeft { get; set; }
        public int Pushuptest { get; set; }
        public double MBThrow { get; set; }
        public double Coopertest { get; set; }
      
        public int points { get; set; }
    
        public int SideBridgePercentil { get; set; }
        public int PushuptestPercentil { get; set; }
        public int MBThrowPercentil { get; set; }
        public int CoopertestPercentil { get; set; }


    }
}
