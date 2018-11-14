using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonReminderDailyQuestionary
{
    class Program
    {
        static void Main(string[] args)
        {
            Reminder validic = new Reminder();
            validic.Start().Wait();
        }
    }
}
