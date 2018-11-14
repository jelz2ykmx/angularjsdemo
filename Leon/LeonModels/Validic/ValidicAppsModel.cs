using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicAppsModel
    {
        public string name { get; set; }
        public string syncUrl { get; set; }
        public string unsyncUrl { get; set; }
        public string logoUrl { get; set; }
        public bool synced { get; set; }
        public string subname { get; set; }
    }
}
