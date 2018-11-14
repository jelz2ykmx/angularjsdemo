using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Capture
{
    public class QueryUserDailyQuestionsModel
    {
        public string userid { get; set; }
        public DateTime datelocal { get; set; }
        public string datelocalN;
        public int sleeping { get; set; }
        public int moodlike { get; set; }
        public int sore { get; set; }
        public int nutrition { get; set; }
        public int transactionType { get; set; }
    }
}
