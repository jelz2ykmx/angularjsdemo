﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WValidicUserImport
{
    public class UsersIds
    {
        public string id { get; set; }
        public string userid { get; set; }
        public string nextfitness { get; set; }
        public string nextroutine { get; set; }
        public string nextnutrition { get; set; }
        public string nextsleep { get; set; }
        public string nextweight { get; set; }
        public string nextdiabetes { get; set; }
        public string nextbiometrics { get; set; }
        public bool saveDates { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
    }
}