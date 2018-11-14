using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Admin
{
    public class CityModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string shortState { get; set; }
        public string shortCountry { get; set; }
        public string zipCode { get; set; }
    }
}
