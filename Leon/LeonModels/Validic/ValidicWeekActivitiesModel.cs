using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicWeekActivitiesModel
    {
        public string miles = "";
        public string duration = "";
        public string calories = "";
        public List<ValidicWeekActivitiesByDateModel> data = new List<ValidicWeekActivitiesByDateModel>();
    }

    public class ValidicWeekActivitiesByDateModel
    {
        public string miles = "0";
        public string duration = "0";
        public string calories = "0";
        public List<string> activity = new List<string>();
    }
}
