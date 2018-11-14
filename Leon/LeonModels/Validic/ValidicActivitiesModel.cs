using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicActivitiesModel
    {
        public string miles = "";
        public string duration = "";
        public string calories = "";
        public List<ValidicActivityDailyModel> activities = new List<ValidicActivityDailyModel>();
    }

    public class ValidicActivityDailyModel
    {
        public List<string> activity = new List<string>();
        public string miles = "0";
    }
}
