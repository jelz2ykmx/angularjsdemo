using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WValidicImport
{
    public class Ids
    {
        public string nextfitness { get; set; }
        public string nextroutine { get; set; }
        public string nextnutrition { get; set; }
        public string nextsleep { get; set; }
        public string nextweight { get; set; }
        public string nextdiabetes { get; set; }
        public string nextbiometrics { get; set; }
        public DateTime lastupdate { get; set; }
        public bool allDone { get; set; }
        public bool notNullDate { get; set; }
    }
}
