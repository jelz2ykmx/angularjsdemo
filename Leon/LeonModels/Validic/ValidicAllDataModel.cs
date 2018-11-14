using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Validic
{
    public class ValidicAllDataModel
    {
        public List<ValidicFitnessModel> fitness = new List<ValidicFitnessModel>();
        public List<ValidicRoutineModel> routine = new List<ValidicRoutineModel>();
        public List<ValidicSleepModel> sleep = new List<ValidicSleepModel>();
        public List<ValidicWeightModel> weight = new List<ValidicWeightModel>();
    }
}
