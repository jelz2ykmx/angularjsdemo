using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonAPICalculations
{
    public class ValidicCategoryPoints
    {
        public int GetStepPoints(int steps)
        {
            int points = 0;

            points = (int)(steps*10/2000);

            return points;
        }

        public int GetSleepPoints(double sleep)
        {
            int points = 0;

            points = (int)(sleep * 5 / 28800);

            return points;
        }

        public int GetNutritionPoints(double nutrition)
        {
            int points = 0;

            points = (int)(nutrition * 20 / 120);

            return points;
        }

        public int GetFitnesPoints(string name, double duration, double distance, double calories)
        {
            int points = 0;

            if (name == "running")
            {
                points = (int)(distance * 20 / 1);
            }
            else if (name == "weight")
            {
                points = (int)(duration * 20 / 14);
            }
            else if (name == "cycling")
            {
                points = (int)(distance * 20 / 4.3);
            }
            else if (name == "swimming")
            {
                points = (int)(duration * 20 / 10);
            }
            else if (name == "sport")
            {
                points = (int)(duration * 20 / 12);
            }
            else if (name == "yoga")
            {
                points = (int)(duration * 20 / 15);
            }
            else if (name == "classes")
            {
                points = (int)(duration * 20 / 14);
            }
            else if (name == "downhillski")
            {
                points = (int)(duration * 20 / 13);
            }
            else
            {
                points = (int)(calories * 20 / 120);
            }

            return points;
        }

        public int GetCaloriesPoints(double calories)
        {
            int points = 0;

            points = (int)(calories * 20 / 120);

            return points;
        }

    }
}
