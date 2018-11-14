using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicFitnessModel
    {
        public string email { get; set; }
        public DateTime timestamp { get; set; }
        public string device { get; set; }
        public string activity { get; set; }
        public double calories { get; set; }
        public double  distance { get; set; }
        public double duration { get; set; }
        public string intensity { get; set; }
        public DateTime starttime { get; set; }
       

    }
}
