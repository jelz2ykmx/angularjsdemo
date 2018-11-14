using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicWeightModel
    {
        public string email { get; set; }
        public DateTime timestamp { get; set; }
        public string device { get; set; }
        public string activity { get; set; }
        public double bmi { get; set; }
        public double fatpercent { get; set; }
        public double free_mass { get; set; }
        public double height { get; set; }
        public double massweight { get; set; }
        public double weight { get; set; }
    }
}
