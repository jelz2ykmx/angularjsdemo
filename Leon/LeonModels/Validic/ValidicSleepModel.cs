using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicSleepModel
    {
        public string email { get; set; }
        public DateTime timestamp { get; set; }
        public string device { get; set; }
        public double awake { get; set; }
        public double deep { get; set; }
        public double light { get; set; }
        public double rem { get; set; }
        public double timeswoken { get; set; }
        public double totalsleep { get; set; }
    }
}
