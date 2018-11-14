using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Catalogs
{
    public class UserProviderQuery
    {
        public string email { get; set; }
        public string userid { get; set; }
        public string firtsName { get; set; }
        public string lastName { get; set; }
        public bool dailyPlan { get; set; }
    }
}
