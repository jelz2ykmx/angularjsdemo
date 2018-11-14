using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Catalogs
{
    public class RegisterUserModel
    {
        public String id { get; set; }
        public String email { get; set; }
        public String firstName { get; set; }
        public String lastName { get; set; }
        public String role { get; set; }
        public String password { get; set; }
        public String phone { get; set; }
        public bool dailyPlan { get; set; }
        public List<LocationsUserModel> locations { get; set; }
    }
}
