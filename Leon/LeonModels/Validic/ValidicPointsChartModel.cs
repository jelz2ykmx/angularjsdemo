using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicPointsChartModel
    {
        public double last7Days = 0;
        public double avarageDay = 0;
        public double avarageWeek = 0;
        public double avarageMonth = 0;
        public List<int> weekPoints = new List<int>();
        public List<int> monthPoints = new List<int>();
    }
}
