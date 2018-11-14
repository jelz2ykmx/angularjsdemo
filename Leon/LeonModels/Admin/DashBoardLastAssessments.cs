using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Admin
{
    public class DashBoardLastAssessments
    {
        public String Name { get; set; }
        public int Age { get; set; }
        public int Score { get; set; }
        public int Percentile { get; set; }
        public int Health { get; set; }
        public int Lifestyle { get; set; }
        public int Biodata { get; set; }
        public int Mobility { get; set; }
        public int Fitness { get; set; }
        public String Assessor { get; set; }
        public String Location { get; set; }
        public DateTime dateLocal { get; set; }
        public string email { get; set; }
        public string city { get; set; }
        public string idForm { get; set; }
        public string userid { get; set; }

    }
}
