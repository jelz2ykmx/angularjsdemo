using LeonModels.Calculations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonAPICalculations
{
    public class AssessmentCalculations
    {
        public async Task StarAsync(AssessmentCalculationModel model)
        {
            await GetAgeAsync(model);
            await GetPushAsync(model);
            await GetThrowAsync(model);
            await GetTCooperAsync(model);
            await GetBMIAsync(model);
            await GetWaistToHipAsync(model);
            await GetHelathLifeAsync(model);
            await GetPhysicalAsync(model);
            await GetTotalsAsync(model);
        }

        public async Task GetAgeAsync(AssessmentCalculationModel model)
        {
            await Task.Run(
                () => GetAge(model)
            );
        }

        void GetAge(AssessmentCalculationModel model)
        {
            var gpo = GetGpo(model);
            GetPushGpo(gpo, model);
            GetThrowGpo(gpo, model);
            GetCooperGpo(gpo, model);
        }

        int GetGpo(AssessmentCalculationModel model)
        {
            var gpo = 0;

            if (model.howold >= 0 && 29 >= model.howold)
            {
                gpo = 0;
            }
            else if (model.howold >= 30 && 34 >= model.howold)
            {
                gpo = 1;
            }
            else if (model.howold >= 35 && 39 >= model.howold)
            {
                gpo = 2;
            }
            else if (model.howold >= 40 && 44 >= model.howold)
            {
                gpo = 3;
            }
            else if (model.howold >= 45 && 49 >= model.howold)
            {
                gpo = 4;
            }
            else if (model.howold >= 50 && 54 >= model.howold)
            {
                gpo = 5;
            }
            else if (model.howold >= 55 && 59 >= model.howold)
            {
                gpo = 6;
            }
            else if (model.howold >= 60 && 64 >= model.howold)
            {
                gpo = 7;
            }
            else if (model.howold >= 65 && 69 >= model.howold)
            {
                gpo = 8;
            }
            else if (model.howold >= 70 && 74 >= model.howold)
            {
                gpo = 9;
            }
            else if (model.howold >= 75)
            {
                gpo = 10;
            }

            return gpo;
        }

        void GetPushGpo(int gpo, AssessmentCalculationModel model)
        {
            if (gpo == 0)
            {
                model.gpoPushs = 0;
            }
            else if (gpo == 1 || gpo == 2)
            {
                model.gpoPushs = 1;
            }
            else if (gpo == 3 || gpo == 4)
            {
                model.gpoPushs = 2;
            }
            else if (gpo == 5 || gpo == 6)
            {
                model.gpoPushs = 3;
            }
            else if (gpo >= 7)
            {
                model.gpoPushs = 4;
            }
        }

        void GetThrowGpo(int gpo, AssessmentCalculationModel model)
        {
            if (gpo == 0)
            {
                model.gpothrows = 0;
            }
            else if (gpo == 1 || gpo == 2)
            {
                model.gpothrows = 1;
            }
            else if (gpo == 3 || gpo == 4)
            {
                model.gpothrows = 2;
            }
            else if (gpo >= 5)
            {
                model.gpothrows = 3;
            }
        }

        void GetCooperGpo(int gpo, AssessmentCalculationModel model)
        {
            if (gpo == 0)
            {
                model.gpoCooper = 0;
            }
            else if (gpo == 1 || gpo == 2)
            {
                model.gpoCooper = 1;
            }
            else if (gpo == 3 || gpo == 4)
            {
                model.gpoCooper = 2;
            }
            else if (gpo >= 5)
            {
                model.gpoCooper = 3;
            }
        }

        public async Task GetPushAsync(AssessmentCalculationModel model)
        {
            await Task.Run(
                () => GetPush(model)
            );

        }

        void GetPush(AssessmentCalculationModel model)
        {
            if (model.sex == 0)
            {
                GetPushMen(model);
            }
            else
            {
                if (model.modified == 0)
                {
                    GetPushWomen(model);
                }
                else
                {
                    GetPushWomenModified(model);
                }
            }
        }

        void GetPushMen(AssessmentCalculationModel model)
        {

            if (model.gpoPushs == 0)
            {
                model.pushsValue = Math.Truncate(-7.119185006 * Math.Pow(10, -4) * Math.Pow(model.pushs, 3) +
                                    0.051070354 * Math.Pow(model.pushs, 2) -
                                    2.205830682 * model.pushs + 35.66748449);
            }
            else if (model.gpoPushs == 1)
            {
                model.pushsValue = Math.Truncate(-9.592122551 * Math.Pow(10, -4) * Math.Pow(model.pushs, 3) +
                                    0.05608089 * Math.Pow(model.pushs, 2) -
                                    2.441589573 * model.pushs + 32.45420853);
            }
            else if (model.gpoPushs == 2)
            {
                model.pushsValue = Math.Truncate(-1.151539958 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    6.560268089 * Math.Pow(10, -2) * Math.Pow(model.pushs, 2) -
                                    2.868028793 * model.pushs + 32.23255037);
            }
            else if (model.gpoPushs == 3)
            {
                model.pushsValue = Math.Truncate(-2.120838249 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    1.206231463 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    3.945869396 * model.pushs + 30.42194607);
            }
            else if (model.gpoPushs == 4)
            {
                model.pushsValue = Math.Truncate(-3.473410639 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    1.826369247 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    4.923381129 * model.pushs + 26.60868519);
            }

        }

        void GetPushWomen(AssessmentCalculationModel model)
        {
            if (model.gpoPushs == 0)
            {
                model.pushsValue = Math.Truncate(-1.976947341 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    1.277894432 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    4.166779759 * model.pushs + 27.94269382);
            }
            else if (model.gpoPushs == 1)
            {
                model.pushsValue = Math.Truncate(-2.842649549 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    1.807813034 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    4.913622627 * model.pushs + 26.51792115);
            }
            else if (model.gpoPushs == 2)
            {
                model.pushsValue = Math.Truncate(-3.060429216 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    1.839470073 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    4.985357305 * model.pushs + 22.08351343);
            }
            else if (model.gpoPushs == 3)
            {
                model.pushsValue = Math.Truncate(-4.013207902 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    0.20504116 * Math.Pow(model.pushs, 2) -
                                    5.25546528 * model.pushs + 19.58822664);
            }
            else if (model.gpoPushs == 4)
            {
                model.pushsValue = Math.Truncate(-1.368096129 * Math.Pow(10, -2) * Math.Pow(model.pushs, 3) +
                                    4.504165031 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    6.433534477 * model.pushs + 21.55788659);
            }

        }

        void GetPushWomenModified(AssessmentCalculationModel model)
        {
            if (model.gpoPushs == 0)
            {
                model.pushsValue = Math.Truncate(-2.765169752 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    1.687918905 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    4.046430035 * model.pushs + 25.36594402);
            }
            else if (model.gpoPushs == 1)
            {
                model.pushsValue = Math.Truncate(-1.64436503 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    1.009129199 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    3.217181295 * model.pushs + 19.09754563);
            }
            else if (model.gpoPushs == 2)
            {
                model.pushsValue = Math.Truncate(-3.540916008 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    1.950940576 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    4.655319724 * model.pushs + 19.16064832);
            }
            else if (model.gpoPushs == 3)
            {
                model.pushsValue = Math.Truncate(-3.690231759 * Math.Pow(10, -3) * Math.Pow(model.pushs, 3) +
                                    1.685059521 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    4.14004635 * model.pushs + 19.58856752);
            }
            else if (model.gpoPushs == 4)
            {
                model.pushsValue = Math.Truncate(-1.808906169 * Math.Pow(10, -2) * Math.Pow(model.pushs, 3) +
                                    5.963106591 * Math.Pow(10, -1) * Math.Pow(model.pushs, 2) -
                                    8.508173707 * model.pushs + 21.88364433);
            }

        }

        public async Task GetThrowAsync(AssessmentCalculationModel model)
        {
            await Task.Run(
                () => GetThrow(model)
            );

        }

        void GetThrow(AssessmentCalculationModel model)
        {
            if (model.sex == 0)
            {
                GetThrowMen(model);
            }
            else
            {
                GetThrowWomen(model);
            }
        }

        void GetThrowMen(AssessmentCalculationModel model)
        {

            if (model.gpothrows == 0)
            {
                model.throwsValue = Math.Truncate(-6.365317495 * Math.Pow(10, -3) * Math.Pow(model.throws, 3) +
                                                  3.868797912 * Math.Pow(10, -1) * Math.Pow(model.throws, 2) -
                                                  11.54483308 * model.throws + 116.5852821);
            }
            else if (model.gpothrows == 1)
            {
                model.throwsValue = Math.Truncate(-1.130738264 * Math.Pow(10, -2) * Math.Pow(model.throws, 3) +
                                                  6.003098979 * Math.Pow(10, -1) * Math.Pow(model.throws, 2) -
                                                  14.68385909 * model.throws + 127.3950837);
            }
            else if (model.gpothrows == 2)
            {
                model.throwsValue = Math.Truncate(-1.887821423 * Math.Pow(10, -2) * Math.Pow(model.throws, 3) +
                                                  1.045900097 * Math.Pow(model.throws, 2) -
                                                  23.88870795 * model.throws + 176.7076887);
            }
            else if (model.gpothrows == 3)
            {
                model.throwsValue = Math.Truncate(-8.425432182 * Math.Pow(10, -3) * Math.Pow(model.throws, 3) +
                                                  4.024221876 * Math.Pow(10, -1) * Math.Pow(model.throws, 2) -
                                                  12.62289126 * model.throws + 110.3330702);
            }

        }

        void GetThrowWomen(AssessmentCalculationModel model)
        {
            if (model.gpothrows == 0)
            {
                model.throwsValue = Math.Truncate(-1.782786804 * Math.Pow(10, -2) * Math.Pow(model.throws, 3) +
                                                  8.868573055 * Math.Pow(10, -1) * Math.Pow(model.throws, 2) -
                                                  18.04627377 * model.throws + 132.8211454);
            }
            else if (model.gpothrows == 1)
            {
                model.throwsValue = Math.Truncate(-2.770786098 * Math.Pow(10, -2) * Math.Pow(model.throws, 3) +
                                                  1.347470981 * Math.Pow(model.throws, 2) -
                                                  26.20906565 * model.throws + 158.1740597);
            }
            else if (model.gpothrows == 2)
            {
                model.throwsValue = Math.Truncate(-8.425432182 * Math.Pow(10, -3) * Math.Pow(model.throws, 3) +
                                                  3.518695945 * Math.Pow(10, -1) * Math.Pow(model.throws, 2) -
                                                  11.1143077 * model.throws + 86.629573);
            }
            else if (model.gpothrows == 3)
            {
                model.throwsValue = Math.Truncate(-2.562228992 * Math.Pow(10, -2) * Math.Pow(model.throws, 3) +
                                                 9.032450705 * Math.Pow(10, -1) * Math.Pow(model.throws, 2) -
                                                 17.08775733 * model.throws + 95.84888071);
            }
        }

        public async Task GetTCooperAsync(AssessmentCalculationModel model)
        {
            await Task.Run(
                () => GetCooper(model)
            );

        }

        void GetCooper(AssessmentCalculationModel model)
        {
            if (model.sex == 0)
            {
                GetCooperMen(model);
            }
            else
            {
                GetCooperWomen(model);
            }
        }

        void GetCooperMen(AssessmentCalculationModel model)
        {

            if (model.gpoCooper == 0)
            {
                model.cooperValue = Math.Truncate(-96.62298 * Math.Pow(model.cooper, 3) +
                                              342.04 * Math.Pow(model.cooper, 2) -
                                              478.158 * model.cooper + 236.533);
            }
            else if (model.gpoCooper == 1)
            {
                model.cooperValue = Math.Truncate(-99.8281 * Math.Pow(model.cooper, 3) +
                                              336.2764 * Math.Pow(model.cooper, 2) -
                                              452.967 * model.cooper + 216.2947);
            }
            else if (model.gpoCooper == 2)
            {
                model.cooperValue = Math.Truncate(-96.0889 * Math.Pow(model.cooper, 3) +
                                              303.2461 * Math.Pow(model.cooper, 2) -
                                              396.369 * model.cooper + 184.5958);
            }
            else if (model.gpoCooper == 3)
            {
                model.cooperValue = Math.Truncate(-95.7836 * Math.Pow(model.cooper, 3) +
                                              285.5609 * Math.Pow(model.cooper, 2) -
                                              361.86 * model.cooper + 162.4636);
            }


            if (model.cooperValue > 25)
            {
                model.cooperValue = 25;
            }

        }

        void GetCooperWomen(AssessmentCalculationModel model)
        {
            if (model.gpoCooper == 0)
            {
                model.cooperValue = Math.Truncate(-99.82807 * Math.Pow(model.cooper, 3) +
                                              336.27641 * Math.Pow(model.cooper, 2) -
                                              452.9674 * model.cooper + 216.2947);
            }
            else if (model.gpoCooper == 1)
            {
                model.cooperValue = Math.Truncate(-96.0889 * Math.Pow(model.cooper, 3) +
                                              303.2461 * Math.Pow(model.cooper, 2) -
                                              396.369 * model.cooper + 184.5958);
            }
            else if (model.gpoCooper == 2)
            {
                model.cooperValue = Math.Truncate(-102.268 * Math.Pow(model.cooper, 3) +
                                            292.9526 * Math.Pow(model.cooper, 2) -
                                            354.825 * model.cooper + 149.2205);
            }
            else if (model.gpoCooper == 3)
            {
                model.cooperValue = Math.Truncate(-98.9177 * Math.Pow(model.cooper, 3) +
                                            255.9385 * Math.Pow(model.cooper, 2) -
                                            298.465 * model.cooper + 121.8606);
            }

            if (model.cooperValue > 25) {
                model.cooperValue = 25;
            }
        }

        public async Task GetBMIAsync(AssessmentCalculationModel model)
        {
            await Task.Run(
                () => GetBMI(model)
            );

        }

        void GetBMI(AssessmentCalculationModel model)
        {
            var Height = (model.howHeightFeet * 12) + model.howHeightInch;

            if (Height != 0 && model.howWeight != 0)
            {
                model.BMI = model.howWeight / (Height * Height) * 703;
            }

            model.BMIValue = Math.Round(1.3 * (model.BMI * model.BMI) - model.BMI * 63.65 + 779.75);

            if (model.BMI < 25)
            {
                model.BMIValue = 0;
            }
            else
            {
                double result = 0;

                if (model.howWaist > 0.00 && model.howHip > 0.00)
                {
                    result = Convert.ToDouble((model.howWaist / model.howHip).ToString("N2"));
                }

                var flag = false;
                if (model.sex == 0)
                {
                    if (result < 0.90)
                    {
                        flag = true;
                    }
                }
                else
                {
                    if (result < 0.80)
                    {
                        flag = true;
                    }
                }

                if (model.BMI > 40 && flag == true)
                {
                    model.BMIValue = 40;
                }
            }

        }

        public async Task GetWaistToHipAsync(AssessmentCalculationModel model)
        {
            await Task.Run(
                () => GetWaistToHip(model)
            );

        }

        void GetWaistToHip(AssessmentCalculationModel model)
        {
            var result = 0.00;

            if (model.howWaist > 0.00 && model.howHip > 0.00)
            {
                result = Convert.ToDouble((model.howWaist / model.howHip).ToString("N2"));
            }

            if (model.sex == 0)
            {
                model.waistToHipValue = Math.Round((result - 1) * 500 + 20);
            }
            else
            {
                model.waistToHipValue = Math.Round((result - 0.85) * 500 + 20);
            }

            if (model.waistToHipValue > 60)
            {
                model.waistToHipValue = 60;
            }
            else if (model.waistToHipValue < -35)
            {
                model.waistToHipValue = -35;
            }

        }

        public async Task GetHelathLifeAsync(AssessmentCalculationModel model)
        {
            await Task.Run(
                () => GetHealthLife(model)
            );

        }

        void GetHealthLife(AssessmentCalculationModel model)
        {
            if (model.heartCondition == 1)
            {
                model.heartConditionValue = 80;
            }

            if (model.painChest == 1)
            {
                model.painChestValue = 50;
            }

            if (model.fatherCardiovascularDisease == 1)
            {
                model.fatherCardiovascularDiseaseValue = 20;
            }

            if (model.motherCardiovascularDisease == 1)
            {
                model.motherCardiovascularDiseaseValue = 20;
            }

            if (model.diabetes == 1)
            {
                model.diabetesValue = 20;
            }

            GetModerateExercise(model);
            GetVigorous(model);
            GetSitting(model);
            GetDoYouSmoke(model);

            if (model.exposedSmoke == 1)
            {
                model.exposedSmokeValue = 10;
            }

            GetConsumeAlcohol(model);
            GetAntibiotics(model);
        }

        void GetModerateExercise(AssessmentCalculationModel model)
        {

            model.moderateExerciseValue = (1 - model.moderateExercise) * 5;

            if (model.moderateExerciseValue < -20) {
                model.moderateExerciseValue = -20;
            }
        }

        void GetVigorous(AssessmentCalculationModel model)
        {
            model.vigorousValue = (model.vigorous) * -5;

            if (model.vigorousValue < -20)
            {
                model.vigorousValue = -20;
            }
        }

        void GetSitting(AssessmentCalculationModel model)
        {
            if (model.sitting == 0)
            {
                model.sittingValue = -10;
            }
            else if (model.sitting == 1)
            {
                model.sittingValue = 0;
            }
            else if (model.sitting == 2)
            {
                model.sittingValue = 14;
            }
            else if (model.sitting == 3)
            {
                model.sittingValue = 20;
            }
        }

        void GetDoYouSmoke(AssessmentCalculationModel model)
        {
            if (model.doYouSmoke == 0)
            {
                model.doYouSmokeValue = 0;
            }
            else if (model.doYouSmoke == 1)
            {
                model.doYouSmokeValue = 20;
            }
            else if (model.doYouSmoke == 2)
            {
                model.doYouSmokeValue = 20;
            }
            else if (model.doYouSmoke == 3)
            {
                model.doYouSmokeValue = 30;
            }
            else if (model.doYouSmoke == 4)
            {
                model.doYouSmokeValue = 40;
            }
            else if (model.doYouSmoke == 5)
            {
                model.doYouSmokeValue = 50;
            }
        }

        void GetConsumeAlcohol(AssessmentCalculationModel model)
        {
            if (model.consumeAlcohol == 0)
            {
                model.consumeAlcoholValue = -5;
            }
            else if (model.consumeAlcohol == 1)
            {
                model.consumeAlcoholValue = -10;
            }
            else if (model.consumeAlcohol == 2)
            {
                model.consumeAlcoholValue = -5;
            }
            else if (model.consumeAlcohol == 3)
            {
                model.consumeAlcoholValue = 10;
            }
        }

        void GetAntibiotics(AssessmentCalculationModel model)
        {
            if (model.antibiotics == 0)
            {
                model.antibioticsValue = 0;
            }
            else if (model.antibiotics == 1)
            {
                model.antibioticsValue = 2;
            }
            else if (model.antibiotics == 2)
            {
                model.antibioticsValue = 6;
            }
            else if (model.antibiotics == 3)
            {
                model.antibioticsValue = 10;
            }
        }

        public async Task GetPhysicalAsync(AssessmentCalculationModel model)
        {
            await Task.Run(
                () => GetPhysical(model)
            );
        }

        void GetPhysical(AssessmentCalculationModel model)
        {
            GetSystolic(model);
            GetDiastolic(model);
            GetDeepSquat(model);
            GetActiveStraightLegRaise(model);
            GetShoulderMobilitY(model);

            if (model.shoulderClearingTest == 0)
            {
                model.shoulderClearingTestValue = -20;
            }

            if (model.spinalFlexion == 0)
            {
                model.spinalFlexionValue = -20;
            }

            if (model.spinalExtension == 0)
            {
                model.spinalExtensionValue = -20;
            }

            GetSideBridge(model);
        }

        void GetSystolic(AssessmentCalculationModel model)
        {
            if (model.systolic > 130)
            {
                model.systolicValue = model.systolic - 130;

                if (model.systolicValue > 40)
                {
                    model.systolicValue = 40;
                }
            }
            else
            {
                model.systolicValue = 0;
            }
        }

        void GetDiastolic(AssessmentCalculationModel model)
        {
            if (model.Diastolic > 80)
            {
                model.DiastolicValue = model.Diastolic - 80;
            }
            else
            {
                model.DiastolicValue = 0;
            }
        }

        void GetDeepSquat(AssessmentCalculationModel model)
        {
            if (model.deepSquat == 0)
            {
                model.deepSquatValue = 0;
            }
            else if (model.deepSquat == 1)
            {
                model.deepSquatValue = -10;
            }
            else if (model.deepSquat == 2)
            {
                model.deepSquatValue = -20;
            }
        }

        void GetActiveStraightLegRaise(AssessmentCalculationModel model)
        {
            if (model.activeStraightLegRaise == 0)
            {
                model.activeStraightLegRaiseValue = 0;
            }
            else if (model.activeStraightLegRaise == 1)
            {
                model.activeStraightLegRaiseValue = -10;
            }
            else if (model.activeStraightLegRaise == 2)
            {
                model.activeStraightLegRaiseValue = -20;
            }
        }

        void GetShoulderMobilitY(AssessmentCalculationModel model)
        {
            if (model.shoulderMobility == 0)
            {
                model.shoulderMobilityValue = 0;
            }
            else if (model.shoulderMobility == 1)
            {
                model.shoulderMobilityValue = -10;
            }
            else if (model.shoulderMobility == 2)
            {
                model.shoulderMobilityValue = -20;
            }
        }

        void GetSideBridge(AssessmentCalculationModel model)
        {
            double div = (double)(model.sideBridge + model.sideBridgeLeft) / 2;
            double value = Math.Round(div, MidpointRounding.AwayFromZero);

            if (model.sex == 0)
            {
                model.sideBridgeValue = (56 - value);
            }
            else
            {
                model.sideBridgeValue = (41 - value);
            }

            if (model.sideBridgeValue < -40)
            {
                model.sideBridgeValue = -40;
            }
            else if (model.sideBridgeValue > 10)
            {
                model.sideBridgeValue = 10;
            }
        }

        public async Task GetTotalsAsync(AssessmentCalculationModel model)
        {
            await Task.Run(
                () => GetTotals(model)
            );
        }

        void GetTotals(AssessmentCalculationModel model)
        {
            model.health = model.heartConditionValue + model.painChestValue + model.fatherCardiovascularDiseaseValue +
                           model.motherCardiovascularDiseaseValue + model.diabetesValue;

            model.lifestyle = model.moderateExerciseValue + model.vigorousValue + model.sittingValue + model.doYouSmokeValue +
                              model.exposedSmokeValue + model.consumeAlcoholValue + model.antibioticsValue;

            model.biodata = model.systolicValue + model.DiastolicValue + (int)model.BMIValue + (int)model.waistToHipValue;

            model.mobility = model.deepSquatValue + model.activeStraightLegRaiseValue + model.shoulderMobilityValue +
                             model.shoulderClearingTestValue + model.spinalFlexionValue + model.spinalExtensionValue;

            model.fitness = (int)(model.sideBridgeValue + model.throwsValue + model.cooperValue + model.pushsValue);

            model.total = model.health + model.lifestyle + model.biodata + model.mobility + model.fitness;

            model.conversionTotal = model.total * -1 + 100;
        }

    }

}
