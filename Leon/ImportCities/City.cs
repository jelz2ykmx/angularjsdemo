using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImportCities
{
    public class City
    {
        public string zipCode { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public double lat { get; set; }
        public double longitud { get; set; }
    }
}
