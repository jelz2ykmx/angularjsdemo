using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicRoutineModel
    {
        public string email { get; set; }
        public DateTime timestamp { get; set; }
        public string device { get; set; }
        public double caloriesburned { get; set; }
        public double distance { get; set; }
        public double elevation { get; set; }
        public double floors { get; set; }
        public double steps { get; set; }
        public double water { get; set; }
     
    }
}
