using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Net.Http;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Diagnostics;
using LeonAPI.Controllers.Catalogs;
using LeonModels;
using LeonModels.Capture;
using LeonModels.Calculations;

namespace LeonAPI.Test.Points
{
    [TestClass]
    public class Percentile
    {

        [TestMethod]
        public async Task GetPercentiles()
        {
            AssessmentsController r = new AssessmentsController();
            r.Request = new HttpRequestMessage();
            r.Request.SetConfiguration(new HttpConfiguration());
            SearchModel data = new SearchModel();
            data.parameters = new List<string>();
            data.parameters.Add("5ff4d7f5-150c-4c4c-824e-be60e1d0ca73");
            var response = await r.QueryOneUserQuestions(data);

            Assert.AreEqual(response.StatusCode, HttpStatusCode.OK);

            var value = await response.Content.ReadAsAsync<AssessmentCalculationModel>();

            Debug.WriteLine("");
            Debug.WriteLine("StartTest");
            Debug.WriteLine("points {0}", value.byAreas.FitnessPoints.points);
            Debug.WriteLine("sidebridge {0} {1}", value.byAreas.FitnessPoints.SideBridge, value.byAreas.FitnessPoints.SideBridgeLeft);
            Debug.WriteLine("pushtest {0}", value.byAreas.FitnessPoints.Pushuptest);
            Debug.WriteLine("mb {0}", value.byAreas.FitnessPoints.MBThrow);
            Debug.WriteLine("cooper {0}", value.byAreas.FitnessPoints.Coopertest);
            Debug.WriteLine("");
            Debug.WriteLine("sidebridge {0}", value.byAreas.FitnessPoints.SideBridgePercentil);
            Debug.WriteLine("pushtest {0}", value.byAreas.FitnessPoints.PushuptestPercentil);
            Debug.WriteLine("mb {0}", value.byAreas.FitnessPoints.MBThrowPercentil);
            Debug.WriteLine("cooper {0}", value.byAreas.FitnessPoints.CoopertestPercentil);

            Debug.WriteLine("");

            Debug.WriteLine("");
            Debug.WriteLine("StartTest");
            Debug.WriteLine("points {0}", value.byAreas.MobilityPoints.points);
            Debug.WriteLine("DeepSquat {0}", value.byAreas.MobilityPoints.DeepSquat);
            Debug.WriteLine("ActiveStraightLegRaise {0}", value.byAreas.MobilityPoints.ActiveStraightLegRaise);
            Debug.WriteLine("ShoulderMobility {0}", value.byAreas.MobilityPoints.ShoulderMobility);
            Debug.WriteLine("ShoulderClearingTest {0}", value.byAreas.MobilityPoints.ShoulderClearingTest);
            Debug.WriteLine("SpinalFlexion {0}", value.byAreas.MobilityPoints.SpinalFlexion);
            Debug.WriteLine("SpinalExtension {0}", value.byAreas.MobilityPoints.SpinalExtension);
            Debug.WriteLine("");
            Debug.WriteLine("DeepSquat {0}", value.byAreas.MobilityPoints.DeepSquatPercentil);
            Debug.WriteLine("ActiveStraightLegRaise {0}", value.byAreas.MobilityPoints.ActiveStraightLegRaisePercentil);
            Debug.WriteLine("ShoulderMobility {0}", value.byAreas.MobilityPoints.ShoulderMobilityPercentil);
            Debug.WriteLine("ShoulderClearingTest {0}", value.byAreas.MobilityPoints.ShoulderClearingTestPercentil);
            Debug.WriteLine("SpinalFlexion {0}", value.byAreas.MobilityPoints.SpinalFlexionPercentil);
            Debug.WriteLine("SpinalExtension {0}", value.byAreas.MobilityPoints.SpinalExtensionPercentil);

            Debug.WriteLine("");

            Debug.WriteLine("");
            Debug.WriteLine("StartTest");
            Debug.WriteLine("points {0}", value.byAreas.LifestylePoints.points);
            Debug.WriteLine("ModerateExercise {0}", value.byAreas.LifestylePoints.ModerateExercise);
            Debug.WriteLine("Vigorous {0}", value.byAreas.LifestylePoints.Vigorous);
            Debug.WriteLine("Sitting {0}", value.byAreas.LifestylePoints.Sitting);
            Debug.WriteLine("Smoke {0}", value.byAreas.LifestylePoints.Smoke);
            Debug.WriteLine("Secondhandsmoke {0}", value.byAreas.LifestylePoints.Secondhandsmoke);
            Debug.WriteLine("Alcohol {0}", value.byAreas.LifestylePoints.Alcohol);
            Debug.WriteLine("Antibiotics {0}", value.byAreas.LifestylePoints.Antibiotics);
            Debug.WriteLine("");
            Debug.WriteLine("ModerateExercise {0}", value.byAreas.LifestylePoints.ModerateExercisePercentil);
            Debug.WriteLine("Vigorous {0}", value.byAreas.LifestylePoints.VigorousPercentil);
            Debug.WriteLine("Sitting {0}", value.byAreas.LifestylePoints.SittingPercentil);
            Debug.WriteLine("Smoke {0}", value.byAreas.LifestylePoints.SmokePercentil);
            Debug.WriteLine("Secondhandsmoke {0}", value.byAreas.LifestylePoints.SecondhandsmokePercentil);
            Debug.WriteLine("Alcohol {0}", value.byAreas.LifestylePoints.AlcoholPercentil);
            Debug.WriteLine("Antibiotics {0}", value.byAreas.LifestylePoints.AntibioticsPercentil);

            Debug.WriteLine("");

            Debug.WriteLine("");
            Debug.WriteLine("StartTest");
            Debug.WriteLine("points {0}", value.byAreas.BiometricsPoints.points);
            Debug.WriteLine("Systolic {0}", value.byAreas.BiometricsPoints.Systolic);
            Debug.WriteLine("Diastolic {0}", value.byAreas.BiometricsPoints.Diastolic);
            Debug.WriteLine("HowWaist {0}", value.byAreas.BiometricsPoints.HowWaist);
            Debug.WriteLine("HowHip {0}", value.byAreas.BiometricsPoints.HowHip);
            Debug.WriteLine("BMI {0}", value.byAreas.BiometricsPoints.BMI);
            Debug.WriteLine("");
            Debug.WriteLine("Systolic {0}", value.byAreas.BiometricsPoints.SystolicptsPercentil);
            Debug.WriteLine("Diastolic {0}", value.byAreas.BiometricsPoints.DiastolicPercentil);
            Debug.WriteLine("WaistHip {0}", value.byAreas.BiometricsPoints.WaistToHipPercentil);
            Debug.WriteLine("BMI {0}", value.byAreas.BiometricsPoints.BMIPercentil);
      
            Debug.WriteLine("");

     
        }


    }
}
