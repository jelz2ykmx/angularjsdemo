using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Catalogs
{
    public class LocationsUserModel
    {
        public int id { get; set; }
        public int cityId { get; set; }
        public string name { get; set; }
        public string shortState { get; set; }
        public string shortCountry { get; set; }
        public bool status { get; set; }
        public string zipCode { get; set; }
    }
}
