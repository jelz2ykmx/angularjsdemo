using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Catalogs
{
    public class RoleUserQuery
    {
        public string role { get; set; }
        public string version { get; set; }
        public bool firstTime { get; set; }
        public List<LocationsUserModel> locations { get; set; }
    }
}
