using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Capture
{
    public class UserMobilityPointsModel
    {
        public int DeepSquat { get;  set; }
        public int ActiveStraightLegRaise { get; set; }
        public int ShoulderMobility { get; set; }
        public int ShoulderClearingTest { get; set; }
        public int SpinalFlexion { get; set; }
        public int SpinalExtension { get; set; }

        public int points { get; set; }
    
        public int DeepSquatPercentil { get; set; }
        public int ActiveStraightLegRaisePercentil { get; set; }
        public int ShoulderMobilityPercentil { get; set; }
        public int ShoulderClearingTestPercentil { get; set; }
        public int SpinalFlexionPercentil { get; set; }
        public int SpinalExtensionPercentil { get; set; }

    }
}
