/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonQuestionsCtrl', function ($scope, $window, $element, $location, $rootScope, $interval, queryQuestionFactory, questionFactory, apiServices,
    queryQuestionTempFactory) {

    //Gender
    $scope.Genders = [];
    data = {
        id: 0,
        name: 'Men',
    }
    $scope.Genders.push(data);
    data = {
        id: 1,
        name: 'Women',
    }
    $scope.Genders.push(data);

    $scope.Ages = [];
    var data = {
        id: 0,
        name: 'Under 30',
        value: 0
    }
    $scope.Ages.push(data);
    data = {
        id: 1,
        name: '30-34',
        value: 5
    }
    $scope.Ages.push(data);
    data = {
        id: 2,
        name: '35-39',
        value: 10
    }
    $scope.Ages.push(data);
    data = {
        id: 3,
        name: '40-44',
        value: 20
    }
    $scope.Ages.push(data);
    data = {
        id: 4,
        name: '45-49',
        value: 25
    }
    $scope.Ages.push(data);
    data = {
        id: 5,
        name: '50-54',
        value: 40
    }
    $scope.Ages.push(data);
    data = {
        id: 6,
        name: '55-59',
        value: 55
    }
    $scope.Ages.push(data);
    data = {
        id: 7,
        name: '60-64',
        value: 60
    }
    $scope.Ages.push(data);
    data = {
        id: 8,
        name: '65-69',
        value: 65
    }
    $scope.Ages.push(data);
    data = {
        id: 9,
        name: '70-74',
        value: 70
    }
    $scope.Ages.push(data);
    data = {
        id: 10,
        name: '75 or Older',
        value: 75
    }
    $scope.Ages.push(data);

    //Cardio Vascular Health
    $scope.CardioVascularHealths = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.CardioVascularHealths.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 80
    }
    $scope.CardioVascularHealths.push(data);

    //Chest Pain
    $scope.ChestPains = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.ChestPains.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 50
    }
    $scope.ChestPains.push(data);

    //Father Diagnosed
    $scope.FatherDiagnoseds = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.FatherDiagnoseds.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 20
    }
    $scope.FatherDiagnoseds.push(data);

    //Mother Diagnosed
    $scope.MotherDiagnoseds = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.MotherDiagnoseds.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 20
    }
    $scope.MotherDiagnoseds.push(data);

    //Diabetes
    $scope.Diabetess = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.Diabetess.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 20
    }
    $scope.Diabetess.push(data);

    //Moderate Exercise
    $scope.Mods = [];
    var data = {
        id: 0,
        name: 'Less than 1x per week',
        value: 30
    }
    $scope.Mods.push(data);
    data = {
        id: 1,
        name: '2-3 per week',
        value: -10
    }
    $scope.Mods.push(data);
    data = {
        id: 2,
        name: '4-5 per week',
        value: -20
    }
    $scope.Mods.push(data);
    data = {
        id: 3,
        name: '5 or more per week',
        value: -40
    }
    $scope.Mods.push(data);

    //Vigorous
    $scope.Vigs = [];
    var data = {
        id: 0,
        name: 'Less than 1x per week',
        value: 10
    }
    $scope.Vigs.push(data);
    data = {
        id: 1,
        name: '1 per week',
        value: -4
    }
    $scope.Vigs.push(data);
    data = {
        id: 2,
        name: '2-3 per week',
        value: -10
    }
    $scope.Vigs.push(data);
    data = {
        id: 3,
        name: '4 or more per week',
        value: -4
    }
    $scope.Vigs.push(data);

    //Sitting
    $scope.Sits = [];
    var data = {
        id: 0,
        name: '0-3  Hrs',
        value: -10
    }
    $scope.Sits.push(data);
    data = {
        id: 1,
        name: '4-7  Hrs',
        value: 0
    }
    $scope.Sits.push(data);
    data = {
        id: 2,
        name: '8-11 Hrs',
        value: 14
    }
    $scope.Sits.push(data);
    data = {
        id: 3,
        name: '12 or more Hours',
        value: 20
    }
    $scope.Sits.push(data);

    //Smoker
    $scope.Smos = [];
    var data = {
        id: 0,
        name: 'Never',
        value: 0
    }
    $scope.Smos.push(data);
    data = {
        id: 1,
        name: 'Ex-smoker (last 5 years)',
        value: 20
    }
    $scope.Smos.push(data);
    data = {
        id: 2,
        name: '1-4 Cigarretes per day',
        value: 20
    }
    $scope.Smos.push(data);
    data = {
        id: 3,
        name: '5-9 Cigarretes per day',
        value: 30
    }
    $scope.Smos.push(data);
    data = {
        id: 4,
        name: '10-14 Cigarretes per day',
        value: 40
    }
    $scope.Smos.push(data);
    data = {
        id: 5,
        name: '15 or more per day',
        value: 50
    }
    $scope.Smos.push(data);

    //Second Hands Smoke
    $scope.SecondHandsSmokes = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.SecondHandsSmokes.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 10
    }
    $scope.SecondHandsSmokes.push(data);

    //Alcohol
    $scope.Alcs = [];
    var data = {
        id: 0,
        name: 'Less than 1 per day',
        value: -5
    }
    $scope.Alcs.push(data);
    data = {
        id: 1,
        name: '1 drink per day(7 per week)',
        value: -10
    }
    $scope.Alcs.push(data);
    data = {
        id: 2,
        name: '2 drinks per day(14 per week)',
        value: -5
    }
    $scope.Alcs.push(data);
    data = {
        id: 3,
        name: '3 or more drinks per day(21 < per week)',
        value: 10
    }
    $scope.Alcs.push(data);

    //Oral Contraceptives
    $scope.OralContraceptives = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.OralContraceptives.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 6
    }
    $scope.OralContraceptives.push(data);

    //Antibiotics
    $scope.Ants = [];
    var data = {
        id: 0,
        name: 'Less than 2 weeks',
        value: 0
    }
    $scope.Ants.push(data);
    data = {
        id: 1,
        name: '2-6 weeks',
        value: 2
    }
    $scope.Ants.push(data);
    data = {
        id: 2,
        name: '6-11 weeks',
        value: 6
    }
    $scope.Ants.push(data);
    data = {
        id: 3,
        name: '12 weeks or more',
        value: 10
    }
    $scope.Ants.push(data);

    //Systolic
    $scope.Syss = [];
    var data = {
        id: 0,
        name: '115',
        value: -40
    }
    $scope.Syss.push(data);
    var data = {
        id: 1,
        name: '116',
        value: -35
    }
    $scope.Syss.push(data);
    var data = {
        id: 2,
        name: '117',
        value: -30
    }
    $scope.Syss.push(data);
    var data = {
        id: 3,
        name: '118',
        value: -25
    }
    $scope.Syss.push(data);
    var data = {
        id: 4,
        name: '119',
        value: -20
    }
    $scope.Syss.push(data);
    var data = {
        id: 5,
        name: '120',
        value: 0
    }
    $scope.Syss.push(data);
    var data = {
        id: 6,
        name: '121',
        value: 5
    }
    $scope.Syss.push(data);
    var data = {
        id: 7,
        name: '122',
        value: 10
    }
    $scope.Syss.push(data);
    var data = {
        id: 8,
        name: '123',
        value: 15
    }
    $scope.Syss.push(data);
    var data = {
        id: 9,
        name: '124',
        value: 20
    }
    $scope.Syss.push(data);
    data = {
        id: 10,
        name: '125-139',
        value: 20
    }
    $scope.Syss.push(data);
    data = {
        id: 11,
        name: '140-159',
        value: 30
    }
    $scope.Syss.push(data);
    data = {
        id: 12,
        name: '160 <',
        value: 40
    }
    $scope.Syss.push(data);

    //Diastolic
    $scope.Dias = [];
    var data = {
        id: 0,
        name: '54',
        value: 40
    }
    $scope.Dias.push(data);
    var data = {
        id: 1,
        name: '55',
        value: 34
    }
    $scope.Dias.push(data);
    var data = {
        id: 2,
        name: '56',
        value: 28
    }
    $scope.Dias.push(data);
    var data = {
        id: 3,
        name: '57',
        value: 22
    }
    $scope.Dias.push(data);
    var data = {
        id: 4,
        name: '58',
        value: 14
    }
    $scope.Dias.push(data);
    var data = {
        id: 5,
        name: '59',
        value: 8
    }
    $scope.Dias.push(data);
    var data = {
        id: 6,
        name: '60',
        value: 0
    }
    $scope.Dias.push(data);
    var data = {
        id: 7,
        name: '61',
        value: -5
    }
    $scope.Dias.push(data);
    var data = {
        id: 8,
        name: '62',
        value: -10
    }
    $scope.Dias.push(data);
    var data = {
        id: 9,
        name: '63',
        value: -15
    }
    $scope.Dias.push(data);
    var data = {
        id: 10,
        name: '64',
        value: -30
    }
    $scope.Dias.push(data);
    var data = {
        id: 11,
        name: '65',
        value: -40
    }
    $scope.Dias.push(data);
    data = {
        id: 1,
        name: '66-79',
        value: -40
    }
    $scope.Dias.push(data);
    data = {
        id: 2,
        name: '80-89',
        value: 20
    }
    $scope.Dias.push(data);
    data = {
        id: 3,
        name: '90-99',
        value: 30
    }
    $scope.Dias.push(data);
    data = {
        id: 4,
        name: '100 <',
        value: 40
    }
    $scope.Dias.push(data);
    
    //Waist to hip(Men)
    $scope.WaiMens = [];
    var data = {
        id: 0,
        name: '< 0.95',
        value: -20
    }
    $scope.WaiMens.push(data);
    data = {
        id: 1,
        name: '0.96 to 0.99',
        value: 10
    }
    $scope.WaiMens.push(data);
    data = {
        id: 2,
        name: '1.00 <',
        value: 20
    }
    $scope.WaiMens.push(data);
    data = {
        id: 3,
        name: 'NA',
        value: 0
    }
    $scope.WaiMens.push(data);

    //Waist to hip(WoMen)
    $scope.WaiWomens = [];
    var data = {
        id: 0,
        name: '< 0.80',
        value: -20
    }
    $scope.WaiWomens.push(data);
    data = {
        id: 1,
        name: '0.81 to 0.84',
        value: 10
    }
    $scope.WaiWomens.push(data);
    data = {
        id: 2,
        name: '0.85 <',
        value: 20
    }
    $scope.WaiWomens.push(data);
    data = {
        id: 3,
        name: 'NA',
        value: 0
    }
    $scope.WaiWomens.push(data);

    //Side Bridge(Men)
    $scope.SidMens = [];
    var data = {
        id: 0,
        name: '< 55 secs',
        value: 0
    }
    $scope.SidMens.push(data);
    data = {
        id: 1,
        name: '55-84 secs',
        value: -20
    }
    $scope.SidMens.push(data);
    data = {
        id: 2,
        name: '85-95 secs',
        value: -30
    }
    $scope.SidMens.push(data);
    data = {
        id: 3,
        name: '96 -126 secs',
        value: -40
    }
    $scope.SidMens.push(data);
    data = {
        id: 4,
        name: 'NA',
        value: 0
    }
    $scope.SidMens.push(data);

    //Side Bridge(WoMen)
    $scope.SidWomens = [];
    var data = {
        id: 0,
        name: '< 40 secs',
        value: 0
    }
    $scope.SidWomens.push(data);
    data = {
        id: 1,
        name: '40-69 secs',
        value: -20
    }
    $scope.SidWomens.push(data);
    data = {
        id: 2,
        name: '70-80 secs',
        value: -30
    }
    $scope.SidWomens.push(data);
    data = {
        id: 3,
        name: '81-110 secs',
        value: -40
    }
    $scope.SidWomens.push(data);
    data = {
        id: 4,
        name: 'NA',
        value: 0
    }
    $scope.SidWomens.push(data);

    //Deep Squat
    $scope.Dees = [];
    var data = {
        id: 0,
        name: '1',
        value: 0
    }
    $scope.Dees.push(data);
    data = {
        id: 1,
        name: '2',
        value: -10
    }
    $scope.Dees.push(data);
    data = {
        id: 2,
        name: '3',
        value: -20
    }

    $scope.Dees.push(data);

    //Active Straight Leg Raise
    $scope.Acts = [];
    var data = {
        id: 0,
        name: '1',
        value: 0
    }
    $scope.Acts.push(data);
    data = {
        id: 1,
        name: '2',
        value: -10
    }
    $scope.Acts.push(data);
    data = {
        id: 2,
        name: '3',
        value: -20
    }

    $scope.Acts.push(data);

    //Shoulder Mobility
    $scope.Mobs = [];
    var data = {
        id: 0,
        name: '1',
        value: 0
    }
    $scope.Mobs.push(data);
    data = {
        id: 1,
        name: '2',
        value: -10
    }
    $scope.Mobs.push(data);
    data = {
        id: 2,
        name: '3',
        value: -20
    }

    $scope.Mobs.push(data);

    //Shoulder ClearingTest
    $scope.ShoulderClearingTests = [];
    data = {
        id: 0,
        name: 'No',
        value: -20
    }
    $scope.ShoulderClearingTests.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 0
    }
    $scope.ShoulderClearingTests.push(data);

    //Spinal Flexion
    $scope.SpinalFlexions = [];
    data = {
        id: 0,
        name: 'No',
        value: -20
    }
    $scope.SpinalFlexions.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 0
    }
    $scope.SpinalFlexions.push(data);

    //Spinal Extension
    $scope.SpinalExtensions = [];
    data = {
        id: 0,
        name: 'No',
        value: -20
    }
    $scope.SpinalExtensions.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 0
    }
    $scope.SpinalExtensions.push(data);


    // valid women push modified
    $scope.PusWomenModifieds = [];
    data = {
        id: 0,
        name: 'No',
    }
    $scope.PusWomenModifieds.push(data);
    data = {
        id: 1,
        name: 'Yes',
    }
    $scope.PusWomenModifieds.push(data);

    // modified women 20-29
    $scope.PushWomengpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 1,
        name: 'Poor 0-1',
        value: 30
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 2,
        name: 'Poor 2-3',
        value: 15
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 3,
        name: 'Poor 4-5',
        value: 5
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 4,
        name: 'Fair 6 - 10',
        value: 0
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 5,
        name: 'Fair 11 - 16',
        value: -3
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 6,
        name: 'Average 17 - 24',
        value: -6
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 7,
        name: 'Average 25 - 33',
        value: -12
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 8,
        name: 'Good 34 - 38',
        value: -16
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 9,
        name: 'Excellent 39 - 41',
        value: -23
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 10,
        name: 'Excellent >42',
        value: -30
    }
    $scope.PushWomengpo1.push(data);

    // modified women 30-39
    $scope.PushWomengpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 30
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 15
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 3,
        name: 'Poor 2-3',
        value: 5
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 4,
        name: 'Poor 4-8',
        value: 0
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 5,
        name: 'Fair 9-11',
        value: -3
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 6,
        name: 'Average 12-18',
        value: -6
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 7,
        name: 'Average 19-24',
        value: -12
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 8,
        name: 'Good 25-32',
        value: -16
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 9,
        name: 'Good 33-39',
        value: -23
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 10,
        name: 'Excellent >39',
        value: -30
    }
    $scope.PushWomengpo2.push(data);

    // modified women 40-49
    $scope.PushWomengpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 30
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 15
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 3,
        name: 'Poor 2',
        value: 5
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 4,
        name: 'Fair 3-5',
        value: 0
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 5,
        name: 'Fair 6-7',
        value: -3
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 6,
        name: 'Average 8 - 14',
        value: -6
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 7,
        name: 'Average 15-19',
        value: -12
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 8,
        name: 'Good 20-27',
        value: -16
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 9,
        name: 'Good 28-33',
        value: -23
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 10,
        name: 'Excellent >34',
        value: -30
    }
    $scope.PushWomengpo3.push(data);

    // modified women 50-59
    $scope.PushWomengpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 30
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 10
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 3,
        name: 'Fair 2-3',
        value: 0
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 4,
        name: 'Fair 4-5',
        value: -3
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 5,
        name: 'Average 6-10',
        value: -6
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 6,
        name: 'Average 11-14',
        value: -9
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 7,
        name: 'Good 15-19',
        value: -12
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 8,
        name: 'Good 20-24',
        value: -16
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 9,
        name: 'Good 25-29',
        value: -23
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 10,
        name: 'Excellent >29',
        value: -30
    }
    $scope.PushWomengpo4.push(data);

    // modified women 60+
    $scope.PushWomengpo5 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 30
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 2,
        name: 'Fair 1',
        value: 0
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 3,
        name: 'Fair 2',
        value: -3
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 4,
        name: 'Average 3',
        value: -6
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 5,
        name: 'Average 4',
        value: -9
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 6,
        name: 'Good 5-8',
        value: -12
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 7,
        name: 'Good 9-12',
        value: -15
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 8,
        name: 'Good 13-15',
        value: -18
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 9,
        name: 'Good 16-19',
        value: -23
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 10,
        name: 'Excellent >19',
        value: -30
    }
    $scope.PushWomengpo5.push(data);

    ///
    /// normal women push
    ///

    // modified women 20-29
    $scope.PushNWomengpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 1,
        name: 'Poor 0-1',
        value: 20
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 2,
        name: 'Poor 2-4',
        value: 12
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 3,
        name: 'Poor 5-6',
        value: 6
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 4,
        name: 'Fair 7 - 9',
        value: 0
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 5,
        name: 'Fair 10 - 11',
        value: -5
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 6,
        name: 'Average 12 - 17',
        value: -10
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 7,
        name: 'Average 18 - 22',
        value: -17
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 8,
        name: 'Good 23 - 30',
        value: -24
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 9,
        name: 'Good 31 - 36',
        value: -32
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 10,
        name: 'Excellent >36',
        value: -40
    }
    $scope.PushNWomengpo1.push(data);

    // modified women 30-39
    $scope.PushNWomengpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 1,
        name: 'Poor 0 - 1',
        value: 20
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 2,
        name: 'Poor 2 - 3',
        value: 12
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 3,
        name: 'Poor 4',
        value: 6
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 4,
        name: 'Fair 5 - 7',
        value: 0
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 5,
        name: 'Fair 8 - 9',
        value: -5
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 6,
        name: 'Average 10-16',
        value: -10
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 7,
        name: 'Average 17-21',
        value: -17
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 8,
        name: 'Good 22-29',
        value: -24
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 9,
        name: 'Good 30-37',
        value: -32
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 10,
        name: 'Excellent >37',
        value: -40
    }
    $scope.PushNWomengpo2.push(data);

    // modified women 40-49
    $scope.PushNWomengpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 2,
        name: 'Poor 1-2',
        value: 12
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 3,
        name: 'Poor 3',
        value: 6
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 4,
        name: 'Fair 4-5',
        value: 0
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 5,
        name: 'Fair 6-7',
        value: -5
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 6,
        name: 'Average 8 - 12',
        value: -10
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 7,
        name: 'Average 13-17',
        value: -17
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 8,
        name: 'Good 18-25',
        value: -24
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 9,
        name: 'Good 26-31',
        value: -32
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 10,
        name: 'Excellent >31',
        value: -40
    }
    $scope.PushNWomengpo3.push(data);

    // modified women 50-59
    $scope.PushNWomengpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 12
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 3,
        name: 'Poor 2',
        value: 6
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 4,
        name: 'Fair 3-4',
        value: 0
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 5,
        name: 'Fair 5-6',
        value: -5
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 6,
        name: 'Average 7-10',
        value: -10
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 7,
        name: 'Average 11-14',
        value: -17
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 8,
        name: 'Good 15-20',
        value: -24
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 9,
        name: 'Good 21-25',
        value: -32
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 10,
        name: 'Excellent >25',
        value: -40
    }
    $scope.PushNWomengpo4.push(data);

    // modified women 60+
    $scope.PushNWomengpo5 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 10
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 3,
        name: 'Fair 2-3',
        value: 0
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 4,
        name: 'Fair 4',
        value: -3
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 5,
        name: 'Average 5-8',
        value: -6
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 6,
        name: 'Average 9-12',
        value: -10
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 7,
        name: 'Good 13-16',
        value: -17
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 8,
        name: 'Good 17-20',
        value: -24
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 9,
        name: 'Good 21-23',
        value: -32
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 10,
        name: 'Excellent >23',
        value: -40
    }
    $scope.PushWomengpo5.push(data);

    ///
    /// normal women push
    ///

    // modified women 20-29
    $scope.PushNWomengpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 1,
        name: 'Poor 0-1',
        value: 20
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 2,
        name: 'Poor 2-4',
        value: 12
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 3,
        name: 'Poor 5-6',
        value: 6
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 4,
        name: 'Fair 7 - 9',
        value: 0
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 5,
        name: 'Fair 10 - 11',
        value: -5
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 6,
        name: 'Average 12 - 17',
        value: -10
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 7,
        name: 'Average 18 - 22',
        value: -17
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 8,
        name: 'Good 23 - 30',
        value: -24
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 9,
        name: 'Good 31 - 36',
        value: -32
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 10,
        name: 'Excellent >36',
        value: -40
    }
    $scope.PushNWomengpo1.push(data);

    // modified women 30-39
    $scope.PushNWomengpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 1,
        name: 'Poor 0 - 1',
        value: 20
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 2,
        name: 'Poor 2 - 3',
        value: 12
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 3,
        name: 'Poor 4',
        value: 6
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 4,
        name: 'Fair 5 - 7',
        value: 0
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 5,
        name: 'Fair 8 - 9',
        value: -5
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 6,
        name: 'Average 10-16',
        value: -10
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 7,
        name: 'Average 17-21',
        value: -17
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 8,
        name: 'Good 22-29',
        value: -24
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 9,
        name: 'Good 30-37',
        value: -32
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 10,
        name: 'Excellent >37',
        value: -40
    }
    $scope.PushNWomengpo2.push(data);

    // modified women 40-49
    $scope.PushNWomengpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 2,
        name: 'Poor 1-2',
        value: 12
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 3,
        name: 'Poor 3',
        value: 6
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 4,
        name: 'Fair 4-5',
        value: 0
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 5,
        name: 'Fair 6-7',
        value: -5
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 6,
        name: 'Average 8 - 12',
        value: -10
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 7,
        name: 'Average 13-17',
        value: -17
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 8,
        name: 'Good 18-25',
        value: -24
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 9,
        name: 'Good 26-31',
        value: -32
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 10,
        name: 'Excellent >31',
        value: -40
    }
    $scope.PushNWomengpo3.push(data);

    // modified women 50-59
    $scope.PushNWomengpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 12
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 3,
        name: 'Poor 2',
        value: 6
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 4,
        name: 'Fair 3-4',
        value: 0
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 5,
        name: 'Fair 5-6',
        value: -5
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 6,
        name: 'Average 7-10',
        value: -10
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 7,
        name: 'Average 11-14',
        value: -17
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 8,
        name: 'Good 15-20',
        value: -24
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 9,
        name: 'Good 21-25',
        value: -32
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 10,
        name: 'Excellent >25',
        value: -40
    }
    $scope.PushNWomengpo4.push(data);


    ///
    /// Men Kneeling MB Chest Throw 8lbs
    ///

    //  20-29
    $scope.PushMBCMgpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 1,
        name: 'Poor <12',
        value: 20
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 2,
        name: 'Fair 12-15',
        value: 0
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 3,
        name: 'Fair 12-18',
        value: -4
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 4,
        name: 'Average  19 - 22',
        value: -10
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 5,
        name: 'Average 23 - 25',
        value: -18
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 6,
        name: 'Good 26-28',
        value: -24
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 7,
        name: 'Good 29-31',
        value: -32
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 8,
        name: 'Excellent >31',
        value: -40
    }
    $scope.PushMBCMgpo1.push(data);

    // 30-39
    $scope.PushMBCMgpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 1,
        name: 'Poor <11',
        value: 20
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 2,
        name: 'Fair 11-14',
        value: 0
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 3,
        name: 'Fair 15-17',
        value: -4
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 4,
        name: 'Average  18 - 20',
        value: -10
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 5,
        name: 'Average 21 - 23',
        value: -18
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 6,
        name: 'Good 24-25',
        value: -24
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 7,
        name: 'Good 26-27',
        value: -32
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 8,
        name: 'Excellent >28',
        value: -40
    }
    $scope.PushMBCMgpo2.push(data);

    // 40-49
    $scope.PushMBCMgpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 1,
        name: 'Poor <10',
        value: 20
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 2,
        name: 'Fair 10-12',
        value: 0
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 3,
        name: 'Fair 13-14',
        value: -4
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 4,
        name: 'Average 15-16',
        value: -10
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 5,
        name: 'Average 17-19',
        value: -18
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 6,
        name: 'Good 20 - 22',
        value: -24
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 7,
        name: 'Good 23-25',
        value: -32
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 8,
        name: 'Excellent >25',
        value: -40
    }
    $scope.PushMBCMgpo3.push(data);

    //  50+
    $scope.PushMBCMgpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 1,
        name: 'Poor <9',
        value: 20
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 2,
        name: 'Fair 9-11',
        value: 0
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 3,
        name: 'Fair 12-13',
        value: -4
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 4,
        name: 'Average 14-15',
        value: -10
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 5,
        name: 'Average 16-17',
        value: -18
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 6,
        name: 'Good 18-19',
        value: -24
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 7,
        name: 'Good 20-22',
        value: -32
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 8,
        name: 'Excellent >22',
        value: -40
    }
    $scope.PushMBCMgpo4.push(data);

    ///
    /// Men Kneeling MB Chest Throw 6lbs
    ///

    //  20-29
    $scope.PushMBCWgpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 1,
        name: 'Poor <10',
        value: 20
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 2,
        name: 'Fair 10-13',
        value: 0
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 3,
        name: 'Fair 14-17',
        value: -4
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 4,
        name: 'Average  18 - 20',
        value: -10
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 5,
        name: 'Average 21 - 23',
        value: -18
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 6,
        name: 'Good 24-25',
        value: -24
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 7,
        name: 'Good 26-27',
        value: -32
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 8,
        name: 'Excellent >27',
        value: -40
    }
    $scope.PushMBCWgpo1.push(data);

    // 30-39
    $scope.PushMBCWgpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 1,
        name: 'Poor <8',
        value: 20
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 2,
        name: 'Fair 8-9',
        value: 0
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 3,
        name: 'Fair 10-11',
        value: -4
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 4,
        name: 'Average  12 - 13',
        value: -10
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 5,
        name: 'Average 14 - 16',
        value: -18
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 6,
        name: 'Good 17-19',
        value: -24
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 7,
        name: 'Good 20-22',
        value: -32
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 8,
        name: 'Excellent >32',
        value: -40
    }
    $scope.PushMBCWgpo2.push(data);

    // 40-49
    $scope.PushMBCWgpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 1,
        name: 'Poor <7',
        value: 20
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 2,
        name: 'Fair 7-9',
        value: 0
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 3,
        name: 'Fair 10-11',
        value: -4
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 4,
        name: 'Average 12-13',
        value: -10
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 5,
        name: 'Average 14-15',
        value: -18
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 6,
        name: 'Good 16 - 17',
        value: -24
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 7,
        name: 'Good 18-20',
        value: -32
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 8,
        name: 'Excellent >20',
        value: -40
    }
    $scope.PushMBCWgpo3.push(data);

    //  50+
    $scope.PushMBCWgpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 1,
        name: 'Poor <6',
        value: 20
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 2,
        name: 'Fair 6-7',
        value: 0
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 3,
        name: 'Fair 9-9',
        value: -4
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 4,
        name: 'Average 10-11',
        value: -10
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 5,
        name: 'Average 12-13',
        value: -18
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 6,
        name: 'Good 14-15',
        value: -24
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 7,
        name: 'Good 16-17',
        value: -32
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 8,
        name: 'Excellent >17',
        value: -40
    }
    $scope.PushMBCWgpo4.push(data);

    ///
    /// MEN PUSH
    ///

    // modified women 20-29
    $scope.PusMens1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens1.push(data);
    data = {
        id: 1,
        name: 'Poor 0-7',
        value: 20
    }
    $scope.PusMens1.push(data);
    data = {
        id: 2,
        name: 'Poor 8-12',
        value: 12
    }
    $scope.PusMens1.push(data);
    data = {
        id: 3,
        name: 'Poor 13-19',
        value: 6
    }
    $scope.PusMens1.push(data);
    data = {
        id: 4,
        name: 'Fair 20 - 27',
        value: 0
    }
    $scope.PusMens1.push(data);
    data = {
        id: 5,
        name: 'Fair 28 - 34',
        value: -5
    }
    $scope.PusMens1.push(data);
    data = {
        id: 6,
        name: 'Average 35 - 39',
        value: -10
    }
    $scope.PusMens1.push(data);
    data = {
        id: 7,
        name: 'Average 40 - 44',
        value: -17
    }
    $scope.PusMens1.push(data);
    data = {
        id: 8,
        name: 'Good 45 - 45',
        value: -24
    }
    $scope.PusMens1.push(data);
    data = {
        id: 9,
        name: 'Good 50 -54',
        value: -32
    }
    $scope.PusMens1.push(data);
    data = {
        id: 10,
        name: 'Excellent >54',
        value: -40
    }
    $scope.PusMens1.push(data);

    // modified women 30-39
    $scope.PusMens2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens2.push(data);
    data = {
        id: 1,
        name: 'Poor 0 - 4',
        value: 20
    }
    $scope.PusMens2.push(data);
    data = {
        id: 2,
        name: 'Poor 5 - 9',
        value: 12
    }
    $scope.PusMens2.push(data);
    data = {
        id: 3,
        name: 'Poor 10-14',
        value: 6
    }
    $scope.PusMens2.push(data);
    data = {
        id: 4,
        name: 'Fair 15 - 19',
        value: 0
    }
    $scope.PusMens2.push(data);
    data = {
        id: 5,
        name: 'Fair 20-24',
        value: -5
    }
    $scope.PusMens2.push(data);
    data = {
        id: 6,
        name: 'Average 25-29',
        value: -10
    }
    $scope.PusMens2.push(data);
    data = {
        id: 7,
        name: 'Average 30-34',
        value: -17
    }
    $scope.PusMens2.push(data);
    data = {
        id: 8,
        name: 'Good 35-39',
        value: -24
    }
    $scope.PusMens2.push(data);
    data = {
        id: 9,
        name: 'Good 40-44',
        value: -32
    }
    $scope.PusMens2.push(data);
    data = {
        id: 10,
        name: 'Excellent >44',
        value: -40
    }
    $scope.PusMens2.push(data);

    // modified women 40-49
    $scope.PusMens3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens3.push(data);
    data = {
        id: 1,
        name: 'Poor 0-3',
        value: 20
    }
    $scope.PusMens3.push(data);
    data = {
        id: 2,
        name: 'Poor 4-8',
        value: 12
    }
    $scope.PusMens3.push(data);
    data = {
        id: 3,
        name: 'Poor 9-11',
        value: 6
    }
    $scope.PusMens3.push(data);
    data = {
        id: 4,
        name: 'Fair 12-15',
        value: 0
    }
    $scope.PusMens3.push(data);
    data = {
        id: 5,
        name: 'Fair 16-19',
        value: -5
    }
    $scope.PusMens3.push(data);
    data = {
        id: 6,
        name: 'Average 20-24',
        value: -10
    }
    $scope.PusMens3.push(data);
    data = {
        id: 7,
        name: 'Average 25-29',
        value: -17
    }
    $scope.PusMens3.push(data);
    data = {
        id: 8,
        name: 'Good 30-34',
        value: -24
    }
    $scope.PusMens3.push(data);
    data = {
        id: 9,
        name: 'Good 35-39',
        value: -32
    }
    $scope.PusMens3.push(data);
    data = {
        id: 10,
        name: 'Excellent >39',
        value: -40
    }
    $scope.PusMens3.push(data);

    // modified women 50-59
    $scope.PusMens4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens4.push(data);
    data = {
        id: 1,
        name: 'Poor 0-2',
        value: 20
    }
    $scope.PusMens4.push(data);
    data = {
        id: 2,
        name: 'Poor 3-5',
        value: 12
    }
    $scope.PusMens4.push(data);
    data = {
        id: 3,
        name: 'Poor 6-7',
        value: 6
    }
    $scope.PusMens4.push(data);
    data = {
        id: 4,
        name: 'Fair 8-10',
        value: 0
    }
    $scope.PusMens4.push(data);
    data = {
        id: 5,
        name: 'Fair 11-14',
        value: -5
    }
    $scope.PusMens4.push(data);
    data = {
        id: 6,
        name: 'Average 15-19',
        value: -10
    }
    $scope.PusMens4.push(data);
    data = {
        id: 7,
        name: 'Average 20-24',
        value: -17
    }
    $scope.PusMens4.push(data);
    data = {
        id: 8,
        name: 'Good 25-29',
        value: -24
    }
    $scope.PusMens4.push(data);
    data = {
        id: 9,
        name: 'Good 30-34',
        value: -32
    }
    $scope.PusMens4.push(data);
    data = {
        id: 10,
        name: 'Excellent >34',
        value: -40
    }
    $scope.PusMens4.push(data);
    //60+
    $scope.PusMens5 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens5.push(data);
    data = {
        id: 1,
        name: 'Poor 0-1',
        value: 20
    }
    $scope.PusMens5.push(data);
    data = {
        id: 2,
        name: 'Poor 2-3',
        value: 12
    }
    $scope.PusMens5.push(data);
    data = {
        id: 3,
        name: 'Poor 4 ',
        value: 6
    }
    $scope.PusMens5.push(data);
    data = {
        id: 4,
        name: 'Fair 5-7',
        value: 0
    }
    $scope.PusMens5.push(data);
    data = {
        id: 5,
        name: 'Fair 8-9',
        value: -5
    }
    $scope.PusMens5.push(data);
    data = {
        id: 6,
        name: 'Average 10-14',
        value: -10
    }
    $scope.PusMens5.push(data);
    data = {
        id: 7,
        name: 'Average 15-19',
        value: -17
    }
    $scope.PusMens5.push(data);
    data = {
        id: 8,
        name: 'Good 20-24',
        value: -24
    }
    $scope.PusMens5.push(data);
    data = {
        id: 9,
        name: 'Good 25-29',
        value: -32
    }
    $scope.PusMens5.push(data);
    data = {
        id: 10,
        name: 'Excellent >29',
        value: -40
    }
    $scope.PushWomengpo5.push(data);

    ///
    /// Men Cooper Test 
    ///

    //  20-29
    $scope.CooMens1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooMens1.push(data);
    data = {
        id: 1,
        name: 'Poor 800-959(.5)',
        value: 20
    }
    $scope.CooMens1.push(data);
    data = {
        id: 2,
        name: 'Poor 960-1059(.6)',
        value: 15
    }
    $scope.CooMens1.push(data);
    data = {
        id: 3,
        name: 'Poor 1060-1219(.7)',
        value: 12
    }
    $scope.CooMens1.push(data);
    data = {
        id: 4,
        name: 'Poor 1220-1379(.8)',
        value: 9
    }
    $scope.CooMens1.push(data);
    data = {
        id: 5,
        name: 'Poor 1380-1599(.9)',
        value: 6
    }
    $scope.CooMens1.push(data);
    data = {
        id: 6,
        name: 'Below Average 1600 - 1759 (1.0)',
        value: 0
    }
    $scope.CooMens1.push(data);
    data = {
        id: 7,
        name: 'Below Average 1760 - 1919 (1.1) ',
        value: -2
    }
    $scope.CooMens1.push(data);
    data = {
        id: 8,
        name: 'Below Average 1920 - 2079 (1.2)',
        value: -4
    }
    $scope.CooMens1.push(data);
    data = {
        id: 9,
        name: 'Below Average 2080 - 2239 (1.3)',
        value: -6
    }
    $scope.CooMens1.push(data);
    data = {
        id: 10,
        name: 'Average 2240 - 2399 (1.4)',
        value: -9
    }
    $scope.CooMens1.push(data);
    data = {
        id: 11,
        name: 'Above Average 2400 - 2559 (1.5) ',
        value: -12
    }
    $scope.CooMens1.push(data);
    data = {
        id: 12,
        name: 'Above Average 2560 - 2719 (1.6) ',
        value: -15
    }
    $scope.CooMens1.push(data);
    data = {
        id: 13,
        name: 'Above Average 2720 - 2879 (1.7)',
        value: -18
    }
    $scope.CooMens1.push(data);
    data = {
        id: 14,
        name: 'Excellent 2880 - 3039 (1.8)',
        value: -21
    }
    $scope.CooMens1.push(data);
    data = {
        id: 15,
        name: 'Excellent 3040 - 3199 ',
        value: -24
    }
    $scope.CooMens1.push(data);
    data = {
        id: 16,
        name: 'Excellent 3200 - 3359',
        value: -28
    }
    $scope.CooMens1.push(data);
    data = {
        id: 17,
        name: 'Excellent 3360 - 3519',
        value: -31
    }
    $scope.CooMens1.push(data);
    data = {
        id: 18,
        name: 'Excellent 3520 - 3679',
        value: -34
    }
    $scope.CooMens1.push(data);
    data = {
        id: 19,
        name: 'Excellent 3680 - 3839',
        value: -37
    }
    $scope.CooMens1.push(data);
    data = {
        id: 20,
        name: 'Excellent >3839',
        value: -40
    }
    $scope.CooMens1.push(data);


    // 30-39
    $scope.CooMens2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooMens2.push(data);
    data = {
        id: 1,
        name: 'Poor  700 - 859',
        value: 20
    }
    $scope.CooMens2.push(data);
    data = {
        id: 2,
        name: 'Poor 860 - 1019',
        value: 15
    }
    $scope.CooMens2.push(data);
    data = {
        id: 3,
        name: 'Poor 1020 - 1179',
        value: 12
    }
    $scope.CooMens2.push(data);
    data = {
        id: 4,
        name: 'Poor 1180 - 1339',
        value: 9
    }
    $scope.CooMens2.push(data);
    data = {
        id: 5,
        name: 'Poor 1340 - 1499',
        value: 6
    }
    $scope.CooMens2.push(data);
    data = {
        id: 6,
        name: 'Below Average 1500 - 1659  ',
        value: 0
    }
    $scope.CooMens2.push(data);
    data = {
        id: 7,
        name: 'Below Average 1660 - 1819  ',
        value: -2
    }
    $scope.CooMens2.push(data);
    data = {
        id: 8,
        name: 'Below Average 1820 - 1979 ',
        value: -4
    }
    $scope.CooMens2.push(data);
    data = {
        id: 9,
        name: 'Average 1980 - 2139',
        value: -6
    }
    $scope.CooMens2.push(data);
    data = {
        id: 10,
        name: 'Average 2140 - 2299',
        value: -9
    }
    $scope.CooMens2.push(data);
    data = {
        id: 11,
        name: 'Above Average 2300 - 2459 ',
        value: -12
    }
    $scope.CooMens2.push(data);
    data = {
        id: 12,
        name: 'Above Average 2460 - 2619 ',
        value: -15
    }
    $scope.CooMens2.push(data);
    data = {
        id: 13,
        name: 'Above Average 2620 - 2779 ',
        value: -18
    }
    $scope.CooMens2.push(data);
    data = {
        id: 14,
        name: 'Excellent 2780 - 2939 ',
        value: -21
    }
    $scope.CooMens2.push(data);
    data = {
        id: 15,
        name: 'Excellent 2940 - 3099 ',
        value: -24
    }
    $scope.CooMens2.push(data);
    data = {
        id: 16,
        name: 'Excellent 3100 - 3259',
        value: -28
    }
    $scope.CooMens2.push(data);
    data = {
        id: 17,
        name: 'Excellent 3260 - 3419',
        value: -31
    }
    $scope.CooMens2.push(data);
    data = {
        id: 18,
        name: 'Excellent 3420 - 3579',
        value: -34
    }
    $scope.CooMens2.push(data);
    data = {
        id: 19,
        name: 'Excellent 3580 - 3739 ',
        value: -37
    }
    $scope.CooMens2.push(data);
    data = {
        id: 20,
        name: 'Excellent >3739',
        value: -40
    }
    $scope.CooMens2.push(data);


    // 40-49
    $scope.CooMens3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooMens3.push(data);
    data = {
        id: 1,
        name: 'Poor  600 - 759',
        value: 20
    }
    $scope.CooMens3.push(data);
    data = {
        id: 2,
        name: 'Poor 760 - 919',
        value: 15
    }
    $scope.CooMens3.push(data);
    data = {
        id: 3,
        name: 'Poor 920 - 1079',
        value: 12
    }
    $scope.CooMens3.push(data);
    data = {
        id: 4,
        name: 'Poor 1080 - 1239',
        value: 9
    }
    $scope.CooMens3.push(data);
    data = {
        id: 5,
        name: 'Poor 1240 - 1399',
        value: 6
    }
    $scope.CooMens3.push(data);
    data = {
        id: 6,
        name: 'Below Average 1400 - 1559  ',
        value: 0
    }
    $scope.CooMens3.push(data);
    data = {
        id: 7,
        name: 'Below Average 1560 - 1719  ',
        value: -2
    }
    $scope.CooMens3.push(data);
    data = {
        id: 8,
        name: 'Average 1720 - 1879 ',
        value: -4
    }
    $scope.CooMens3.push(data);
    data = {
        id: 9,
        name: 'Average 1880 - 2039',
        value: -6
    }
    $scope.CooMens3.push(data);
    data = {
        id: 10,
        name: 'Above Average 2040 - 2199',
        value: -9
    }
    $scope.CooMens3.push(data);
    data = {
        id: 11,
        name: 'Above Average 2200 - 2359 ',
        value: -12
    }
    $scope.CooMens3.push(data);
    data = {
        id: 12,
        name: 'Above Average 2360 - 2519 ',
        value: -15
    }
    $scope.CooMens3.push(data);
    data = {
        id: 13,
        name: 'Excellent 2520-2679',
        value: -18
    }
    $scope.CooMens3.push(data);
    data = {
        id: 14,
        name: 'Excellent 2680-2839',
        value: -21
    }
    $scope.CooMens3.push(data);
    data = {
        id: 15,
        name: 'Excellent 2840-2999',
        value: -24
    }
    $scope.CooMens3.push(data);
    data = {
        id: 16,
        name: 'Excellent 3000-3159',
        value: -28
    }
    $scope.CooMens3.push(data);
    data = {
        id: 17,
        name: 'Excellent 3160-3319',
        value: -31
    }
    $scope.CooMens3.push(data);
    data = {
        id: 18,
        name: 'Excellent 3320-3479',
        value: -34
    }
    $scope.CooMens3.push(data);
    data = {
        id: 19,
        name: 'Excellent 3480-3639',
        value: -37
    }
    $scope.CooMens3.push(data);
    data = {
        id: 20,
        name: 'Excellent >3639',
        value: -40
    }
    $scope.CooMens3.push(data);

    //  50+
    $scope.CooMens4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooMens4.push(data);
    data = {
        id: 1,
        name: 'Poor  500 - 659',
        value: 20
    }
    $scope.CooMens4.push(data);
    data = {
        id: 2,
        name: 'Poor 660 - 819',
        value: 15
    }
    $scope.CooMens4.push(data);
    data = {
        id: 3,
        name: 'Poor 820 - 979',
        value: 12
    }
    $scope.CooMens4.push(data);
    data = {
        id: 4,
        name: 'Poor 980 - 1139',
        value: 9
    }
    $scope.CooMens4.push(data);
    data = {
        id: 5,
        name: 'Poor 1140 - 1299',
        value: 6
    }
    $scope.CooMens4.push(data);
    data = {
        id: 6,
        name: 'Below Average 1300 - 1459  ',
        value: 0
    }
    $scope.CooMens4.push(data);
    data = {
        id: 7,
        name: 'Below Average 1460 - 1619 ',
        value: -2
    }
    $scope.CooMens4.push(data);
    data = {
        id: 8,
        name: 'Average 1620 - 1779 ',
        value: -4
    }
    $scope.CooMens4.push(data);
    data = {
        id: 9,
        name: 'Average 1780 - 1939',
        value: -6
    }
    $scope.CooMens4.push(data);
    data = {
        id: 10,
        name: 'Above Average 1940 - 2099',
        value: -9
    }
    $scope.CooMens4.push(data);
    data = {
        id: 11,
        name: 'Above Average 2100 - 2259 ',
        value: -12
    }
    $scope.CooMens4.push(data);
    data = {
        id: 12,
        name: 'Above Average 2260 - 2419 ',
        value: -15
    }
    $scope.CooMens4.push(data);
    data = {
        id: 13,
        name: 'Excellent 2420-2579',
        value: -18
    }
    $scope.CooMens4.push(data);
    data = {
        id: 14,
        name: 'Excellent 2580-2739',
        value: -21
    }
    $scope.CooMens4.push(data);
    data = {
        id: 15,
        name: 'Excellent 2740-2899',
        value: -24
    }
    $scope.CooMens4.push(data);
    data = {
        id: 16,
        name: 'Excellent 2900-3059',
        value: -28
    }
    $scope.CooMens4.push(data);
    data = {
        id: 17,
        name: 'Exclellent 3060-3219',
        value: -31
    }
    $scope.CooMens4.push(data);
    data = {
        id: 18,
        name: 'Excellent 3220-3379',
        value: -34
    }
    $scope.CooMens4.push(data);
    data = {
        id: 19,
        name: 'Excellent 3380-3539',
        value: -37
    }
    $scope.CooMens4.push(data);
    data = {
        id: 20,
        name: 'Excellent >3539',
        value: -40
    }
    $scope.CooMens4.push(data);

    ///
    /// women Cooper Test 
    ///

    //  20-29
    $scope.CooWomens1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 1,
        name: 'Poor  700 - 859',
        value: 20
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 2,
        name: 'Poor Poor 860 - 1019',
        value: 15
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 3,
        name: 'Poor 1020 - 1179',
        value: 12
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 4,
        name: 'Poor 1180 - 1339',
        value: 9
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 5,
        name: 'Poor 1340 - 1499',
        value: 6
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 6,
        name: 'Below Average 1500 - 1659  ',
        value: 0
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 7,
        name: 'Below Average 1660 - 1819   ',
        value: -2
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 8,
        name: 'Below Average 1820 - 1979 ',
        value: -4
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 9,
        name: 'Average 1980 - 2139',
        value: -6
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 10,
        name: 'Average 2140 - 2299',
        value: -9
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 11,
        name: 'Above Average 2300 - 2459  ',
        value: -12
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 12,
        name: 'Above Average 2460 - 2619  ',
        value: -15
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 13,
        name: 'Above Average 2620 - 2779 ',
        value: -18
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 14,
        name: 'Excellent 2780 - 2939 ',
        value: -21
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 15,
        name: 'Excellent 2940 - 3099  ',
        value: -24
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 16,
        name: 'Excellent 3100 - 3259',
        value: -28
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 17,
        name: 'Excellent 3260 - 3419',
        value: -31
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 18,
        name: 'Excellent 3420 - 3579',
        value: -34
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 19,
        name: 'Excellent 3580 - 3739',
        value: -37
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 20,
        name: 'Excellent >3739',
        value: -40
    }
    $scope.CooWomens1.push(data);


    // 30-39
    $scope.CooWomens2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 1,
        name: 'Poor  600 - 759',
        value: 20
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 2,
        name: 'Poor 760 - 919',
        value: 15
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 3,
        name: 'Poor 920 - 1079',
        value: 12
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 4,
        name: 'Poor 1080 - 1239',
        value: 9
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 5,
        name: 'Poor 1240 - 1399',
        value: 6
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 6,
        name: 'Below Average 1400 - 1559',
        value: 0
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 7,
        name: 'Below Average 1560 - 1719 ',
        value: -2
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 8,
        name: 'Average 1720 - 1879  ',
        value: -4
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 9,
        name: 'Average 1880 - 2039',
        value: -6
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 10,
        name: 'Above Average 2040 - 2199',
        value: -9
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 11,
        name: 'Above Average 2200 - 2359 ',
        value: -12
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 12,
        name: 'Above Average 2360 - 2519  ',
        value: -15
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 13,
        name: 'Excellent 2520-2679 ',
        value: -18
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 14,
        name: 'Excellent 2680-2839 ',
        value: -21
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 15,
        name: 'EExcellent 2840-2999 ',
        value: -24
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 16,
        name: 'Excellent 3000-3159',
        value: -28
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 17,
        name: 'Excellent 3160-3319',
        value: -31
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 18,
        name: 'Excellent 3320-3479',
        value: -34
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 19,
        name: 'Excellent 3480-3639 ',
        value: -37
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 20,
        name: 'Excellent >3639',
        value: -40
    }
    $scope.CooWomens2.push(data);


    // 40-49
    $scope.CooWomens3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 1,
        name: 'Poor  400 - 559',
        value: 20
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 2,
        name: 'Poor 560 - 719',
        value: 15
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 3,
        name: 'Poor 720 - 879',
        value: 12
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 4,
        name: 'Poor 880 - 1039',
        value: 9
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 5,
        name: 'Poor 1040 - 1199',
        value: 6
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 6,
        name: 'Below Average 1200 - 1359 ',
        value: 0
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 7,
        name: 'Below Average 1360 - 1519 ',
        value: -2
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 8,
        name: 'Average 1520 - 1679  ',
        value: -4
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 9,
        name: 'Average 1680 - 1839',
        value: -6
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 10,
        name: 'Above Average 1840 - 1999',
        value: -9
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 11,
        name: 'Above Average 2000 - 2159  ',
        value: -12
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 12,
        name: 'Above Average 2160 - 2319  ',
        value: -15
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 13,
        name: 'Excellent 2320-2479 ',
        value: -18
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 14,
        name: 'Excellent 2480-2639',
        value: -21
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 15,
        name: 'Excellent 2640-2879',
        value: -24
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 16,
        name: 'Excellent 2880-2959',
        value: -28
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 17,
        name: 'EExcellent 2960-3119',
        value: -31
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 18,
        name: 'Excellent 3220-3279',
        value: -34
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 19,
        name: 'Excellent 3280-3439',
        value: -37
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 20,
        name: 'Excellent >3439',
        value: -40
    }
    $scope.CooWomens3.push(data);

    //  50+
    $scope.CooWomens4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 1,
        name: 'Poor  300 - 459',
        value: 20
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 2,
        name: 'Poor 460 - 619',
        value: 15
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 3,
        name: 'Poor 620 - 779',
        value: 12
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 4,
        name: 'Poor 780 - 939',
        value: 9
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 5,
        name: 'Poor 940 - 1099',
        value: 6
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 6,
        name: 'Below Average 1100 - 1259 ',
        value: 0
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 7,
        name: 'Below Average 1260 - 1419 ',
        value: -2
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 8,
        name: 'Average 1420 - 1579 ',
        value: -4
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 9,
        name: 'Average 1580 - 1739',
        value: -6
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 10,
        name: 'Above Average 1740 - 1899',
        value: -9
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 11,
        name: 'Above Average 1900 - 2059 ',
        value: -12
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 12,
        name: 'Above Average 2060 - 2219 ',
        value: -15
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 13,
        name: 'Excellent 2220-2359',
        value: -18
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 14,
        name: 'Excellent 2360-2519',
        value: -21
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 15,
        name: 'Excellent 2520-2679',
        value: -24
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 16,
        name: 'Excellent 2680-2839',
        value: -28
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 17,
        name: 'Excellent 2840-2999',
        value: -31
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 18,
        name: 'Excellent 3000-3159',
        value: -34
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 19,
        name: 'Excellent 3160-3319',
        value: -37
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 20,
        name: 'Excellent >3319',
        value: -40
    }
    $scope.CooWomens4.push(data);

    //
    // Qualitative 
    //
    $scope.selectedRateds = [];
    var data = {
        id: 0,
        name: 'Unfit',
    }
    $scope.selectedRateds.push(data);
    var data = {
        id: 1,
        name: 'Average',
    }
    $scope.selectedRateds.push(data);
    var data = {
        id: 2,
        name: 'Fit',
    }
    $scope.selectedRateds.push(data);
    var data = {
        id: 3,
        name: 'Weekend Warrior',
    }
    $scope.selectedRateds.push(data);
    var data = {
        id: 4,
        name: 'Elite',
    }
    $scope.selectedRateds.push(data);

    $scope.selectedLifes = [];
    var data = {
        id: 0,
        name: 'No',
    }
    $scope.selectedLifes.push(data);
    var data = {
        id: 1,
        name: 'Yes',
    }
    $scope.selectedLifes.push(data);
    
    $scope.selectedParticipateds = [];
    var data = {
        id: 0,
        name: 'No',
    }
    $scope.selectedParticipateds.push(data);
    var data = {
        id: 1,
        name: 'Yes',
    }
    $scope.selectedParticipateds.push(data);

    $scope.selectedPlanings = [];
    var data = {
        id: 0,
        name: 'No',
    }
    $scope.selectedPlanings.push(data);
    var data = {
        id: 1,
        name: 'Yes',
    }
    $scope.selectedPlanings.push(data);

    /// empieza old

    //Push Up Test(Men Age dependent)
    $scope.PusMens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.PusMens.push(data);
    data = {
        id: 1,
        name: 'Fair',
        value: -5
    }
    $scope.PusMens.push(data);
    data = {
        id: 2,
        name: 'Average',
        value: -10
    }
    $scope.PusMens.push(data);
    data = {
        id: 3,
        name: 'Good',
        value: -15
    }
    $scope.PusMens.push(data);
    data = {
        id: 4,
        name: 'Excellent',
        value: -20
    }
    $scope.PusMens.push(data);
    data = {
        id: 5,
        name: 'NA',
        value: 0
    }
    $scope.PusMens.push(data);

    //Push Up Test(Women Age dependent)
    $scope.PusWomens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.PusWomens.push(data);
    data = {
        id: 1,
        name: 'Fair',
        value: -5
    }
    $scope.PusWomens.push(data);
    data = {
        id: 2,
        name: 'Average',
        value: -10
    }
    $scope.PusWomens.push(data);
    data = {
        id: 3,
        name: 'Good',
        value: -15
    }
    $scope.PusWomens.push(data);
    data = {
        id: 4,
        name: 'Excellent',
        value: -20
    }
    $scope.PusWomens.push(data);
    data = {
        id: 5,
        name: 'NA',
        value: 0
    }
    $scope.PusWomens.push(data);

    //MB Throw(Men)
    $scope.MBMens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.MBMens.push(data);
    data = {
        id: 1,
        name: 'Average',
        value: -10
    }

    $scope.MBMens.push(data);
    data = {
        id: 2,
        name: 'Excellent',
        value: -20
    }
    $scope.MBMens.push(data);
    data = {
        id: 3,
        name: 'NA',
        value: 0
    }
    $scope.MBMens.push(data);

    //MB Throw(Women)
    $scope.MBWomens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.MBWomens.push(data);
    data = {
        id: 1,
        name: 'Average',
        value: -10
    }

    $scope.MBWomens.push(data);
    data = {
        id: 2,
        name: 'Excellent',
        value: -20
    }
    $scope.MBWomens.push(data);
    data = {
        id: 3,
        name: 'NA',
        value: 0
    }
    $scope.MBWomens.push(data);

    //Cooper test(Men Age Dependent)
    $scope.CooMens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.CooMens.push(data);
    data = {
        id: 1,
        name: 'Below Average',
        value: -5
    }
    $scope.CooMens.push(data);
    data = {
        id: 2,
        name: 'Average',
        value: -10
    }
    $scope.CooMens.push(data);
    data = {
        id: 3,
        name: 'Above Average',
        value: -15
    }
    $scope.CooMens.push(data);
    data = {
        id: 4,
        name: 'Excellent',
        value: -20
    }
    $scope.CooMens.push(data);
    data = {
        id: 5,
        name: 'NA',
        value: 0
    }
    $scope.CooMens.push(data);

    //Cooper test(Women Age Dependent)
    $scope.CooWomens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.CooWomens.push(data);
    data = {
        id: 1,
        name: 'Below Average',
        value: -5
    }
    $scope.CooWomens.push(data);
    data = {
        id: 2,
        name: 'Average',
        value: -10
    }
    $scope.CooWomens.push(data);
    data = {
        id: 3,
        name: 'Above Average',
        value: -15
    }
    $scope.CooWomens.push(data);
    data = {
        id: 4,
        name: 'Excellent',
        value: -20
    }
    $scope.CooWomens.push(data);
    data = {
        id: 5,
        name: 'NA',
        value: 0
    }
    $scope.CooWomens.push(data);

    /// end old 

    $scope.disablegendermen = false;
    $scope.disablegendermenWai = false;
    $scope.disablegendermenWai2 = false;
    $scope.disablegendermenSid = false;

    $scope.disablegenderwomen = true;
    $scope.disablegenderwomenWai = true;
    $scope.disablegenderwomenWai2 = true;
    $scope.disablegenderwomenSid = true;
    $scope.disablegenderwomenMod = true;

    $scope.disableMBCM1 = false;
    $scope.disableMBCM2 = false;
    $scope.disableMBCM3 = false;
    $scope.disableMBCM4 = false;

    $scope.disableMBCW1 = true;
    $scope.disableMBCW2 = true;
    $scope.disableMBCW3 = true;
    $scope.disableMBCW4 = true;

    $scope.disablegendercoomen1 = true;
    $scope.disablegendercoomen2 = true;
    $scope.disablegendercoomen3 = true;
    $scope.disablegendercoomen4 = true;

    $scope.disablegendercoowomen1 = true;
    $scope.disablegendercoowomen2 = true;
    $scope.disablegendercoowomen3 = true;
    $scope.disablegendercoowomen4 = true;

    $scope.disablegendermen1 = true;
    $scope.disablegendermen2 = true;
    $scope.disablegendermen3 = true;
    $scope.disablegendermen4 = true;
    $scope.disablegendermen5 = true;

    $scope.disablegender1women = true;
    $scope.disablegender2women = true;
    $scope.disablegender3women = true;
    $scope.disablegender4women = true;
    $scope.disablegender5women = true;

    $scope.disablegendermod1women = true;
    $scope.disablegendermod2women = true;
    $scope.disablegendermod3women = true;
    $scope.disablegendermod4women = true;
    $scope.disablegendermod5women = true;

    $scope.ocultarMessage = false;
    $scope.hideHeader = true;


    var mile = 1609.344;
    var countQ = 1;
    var totalQ = 0;


    var prepara = function () {
        var myEl = $element.find('#inputAge');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '14',
                defaultValue: 35,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });

        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 14,
                max: 100,
                scale: 0,
                defaultValue: 35,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputAgeReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '14',
                defaultValue: 35,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });

        }

        var myEl = $element.find('#inputMod');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '7',
                min: '0',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 7,
                scale: 0,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputModReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '7',
                min: '0',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputVig');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '7',
                min: '0',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 7,
                scale: 0,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputVigReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '7',
                min: '0',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var wheel = [[
                        {
                            values: [4, 5, 6, 7, 8]
                        },
                        {
                            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                        }
        ]];
        var myEl = $element.find('#inputHeight');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = data[0] + " " + data[1];

                return value;
            }
        });

        var myEl = $element.find('#inputHeightReview');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = data[0] + " " + data[1];

                return value;
            }
        });

        var myEl = $element.find('#inputWeight');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 1,
            max: 400,
            scale: 0,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputWeightReview');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 1,
            max: 400,
            scale: 0,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputSys');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '220',
                min: '50',
                defaultValue: 120,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 50,
                max: 220,
                scale: 0,
                defaultValue: 120,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputSysReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '220',
                min: '50',
                defaultValue: 120,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputDia');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                defaultValue: 70,
                max: '200',
                min: '30',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 30,
                max: 200,
                scale: 0,
                defaultValue: 70,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputDiaReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                defaultValue: 70,
                max: '200',
                min: '30',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var values = [];
        for (var x = 10; x < 120; x++) {
            values.push(x);
        }

        var wheel = [[
                        {
                            values: values
                        },
                        {
                            values: [.0, .25, .50 , .75]
                        }
        ]];
     
        var myEl = $element.find('#inputWaist');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) +  parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }
       
        var myEl = $element.find('#inputWaistReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }
        

        var myEl = $element.find('#inputHip');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputHipReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputwaistw');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputwaistwReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputhipw');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputhipwReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputSideMen');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 200,
                scale: 0,
                defaultValue: 60,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputSideMenReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputSidMenLeft');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 200,
                scale: 0,
                defaultValue: 60,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputSidMenLeftReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#howSidWomen');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 200,
                scale: 0,
                defaultValue: 60,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#howSidWomenReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#howSidWomenLeft');
        if ($rootScope.phoneDevice >= 0) {

            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 200,
                scale: 0,
                defaultValue: 60,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#howSidWomenLeftReview');
        if ($rootScope.phoneDevice >= 0) {

            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen1');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushMen1Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen2');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushMen2Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen3');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }
        var myEl = $element.find('#inputPushMen3Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen4');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushMen4Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen5');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushMen5Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen1');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen1Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen2');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen2Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen3');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen3Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen4');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen4Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen5');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen5Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM1');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM1Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM2');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM2Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM3');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM3Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM4');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM4Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM5');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM5Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var valuesOne = [];
        for (var x = 0; x <= 100; x++) {
            valuesOne.push(x);
        }
        var wheel = [[
                        {
                            values: valuesOne
                        },
                        {
                            values: [.0, .25, .50, .75]
                        }
        ]];
        var myEl = $element.find('#inputChestMen1');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

       
        var myEl = $element.find('#inputChestMen1Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });


        var myEl = $element.find('#inputChestMen2');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen2Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen3');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen3Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen4');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen4Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen1');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen1Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen2');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen2Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen3');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen3Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen4');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen4Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputCooperMen1');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen1Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen2');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen2Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen3');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen3Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen4');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen4Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen1');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen1Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen2');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen2Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen3');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen3Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen4');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen4Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });
    }

    prepara();

    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }


    var flagcontinue = true;
    var flagModified = false;

    var flagImgMale = 0;
    var flagImgFamele = 0;
    $scope.imgmale = "styles/mztimgs/men.png";
    $scope.imgfemale = "styles/mztimgs/women.png";

    $scope.hideScoreQ = true;
    $scope.hideAll = true;
    $scope.doneSubmitwebPoints = true;
    var state = "0";

    var pageQ = -1;

    var stopTime;

    var countSubmit = 0;

    var init = function () {

        var tempFactory = localStorage.getItem("queryQuestionTempFactory");

        $scope.hideSaveReview = true;

        $('#idreadiogender').focus();

        $scope.BMILocal = 0;
        $scope.ocultarMen = true;
        $scope.ocultarWomen = true;
        $scope.ocultar = true;

        $scope.ServerCar = "";
        $scope.ServerChe = "";
        $scope.ServerFat = "";
        $scope.ServerMot = "";
        $scope.ServerDia = "";
        $scope.ServerMod = "";
        $scope.ServerVig = "";
        $scope.ServerSit = "";
        $scope.ServerSmo = "";
        $scope.ServerSmokes = "";
        $scope.ServerAlc = "";
        $scope.ServerOra = "";
        $scope.ServerAnt = "";
        $scope.ServerAnt = "";

        $scope.ServerSys = "";
        $scope.ServerDiastolic = "";
        $scope.ServerWaiMen = "";
        $scope.ServerWaiWomen = "";
        $scope.ServerSidMen = "";
        $scope.ServerSiddWomen = "";
        $scope.ServerDee = "";
        $scope.ServerAct = "";
        $scope.ServerMob = "";
        $scope.ServerdSho = "";
        $scope.ServerdSpi = "";
        $scope.ServerSpiExt = "";

        $scope.ServerPusMen = "";
        $scope.ServerPusWomen = "";
        $scope.ServerMPusWomen = "";
        $scope.ServerChestMen = "";
        $scope.ServerChestWoMen = "";
        $scope.ServerComen = "";
        $scope.ServerCowomen = "";

        $scope.ServerTotal1 = "";
        $scope.ServerTotal2 = "";
        $scope.ServerTotal3 = "";
        $scope.ServerTotal4 = "";



        state = $window.sessionStorage["statequestion"];


        questionFactory.idform = "";
        questionFactory.userid = $rootScope.userId.userId;

        $scope.email = "";
        $scope.selectedGender = $scope.Genders[0];

        $scope.selectedAge = $scope.Ages[0];
        $scope.howold = 0;
        $scope.howHeight = '0\' 0\'\'';
        $scope.howWeight = 0;

        $scope.selectedCar = $scope.CardioVascularHealths[0];
        $scope.selectedChe = $scope.ChestPains[0];
        $scope.selectedFat = $scope.FatherDiagnoseds[0];
        $scope.selectedMot = $scope.MotherDiagnoseds[0];
        $scope.selectedDiabetes = $scope.Diabetess[0];

        $scope.selectedMod = $scope.Mods[0];
        $scope.selectedMod.value = 0;
        $scope.howmod = 0;
        $scope.selectedVig = $scope.Vigs[0];
        $scope.selectedVig.value = 0;
        $scope.howvig = 0;

        $scope.selectedSit = $scope.Sits[0];
        $scope.selectSmo = $scope.Smos[0];
        $scope.selectedSmokes = $scope.SecondHandsSmokes[0];
        $scope.selectAlc = $scope.Alcs[0];
        //$scope.selectedOra = $scope.OralContraceptives[0];
        $scope.selectedAnt = $scope.Ants[0];

        $scope.selectedSys = $scope.Syss[0];
        $scope.selectedSys.value = 0;
        $scope.howsys = 0;

        $scope.selectedDiastolic = $scope.Dias[0];
        $scope.selectedDiastolic.value = 0;
        $scope.howdia = 0;

        $scope.selectedWaiMen = $scope.WaiMens[0];
        $scope.howwaist = '0\'\'';
        $scope.howhip = '0\'\'';

        $scope.selectedWaiWomen = $scope.WaiWomens[0];
        $scope.howwaistw = '0\'\'';
        $scope.howhipw = '0\'\'';

        $scope.selectedSidMen = $scope.SidMens[0];
        $scope.howSidMen = '0 s';
        $scope.howSidMenLeft = '0 s';

        $scope.selectedSidWomen = $scope.SidWomens[0];
        $scope.howSidWomen = '0 s';
        $scope.howSidWomenLeft = '0 s';

        $scope.selectedDee = $scope.Dees[0];
        $scope.selectedAct = $scope.Acts[0];
        $scope.selectedMob = $scope.Mobs[0];
        $scope.selectedSho = $scope.ShoulderClearingTests[0];
        $scope.selectedSpi = $scope.SpinalFlexions[0];
        $scope.selectedSpiExt = $scope.SpinalExtensions[0];
        $scope.selectedPusMen = $scope.PusMens[5];

        $scope.selectedPusWomenModified = $scope.PusWomenModifieds[0];

        $scope.selectedPusWomen = $scope.PusWomens[5];

        $scope.selectedMBMen = $scope.MBMens[3];
        $scope.selectedMBWomen = $scope.MBWomens[3];
        $scope.selectedCooMen = $scope.CooMens[5];
        $scope.selectedCooWomen = $scope.CooWomens[5];

        $scope.disablegendermen = false;
        $scope.disablegendermenWai = false;
        $scope.disablegendermenWai2 = false;
        $scope.disablegendermenSid = false;

        $scope.disablegenderwomen = true;
        $scope.disablegenderwomenWai = true;
        $scope.disablegenderwomenWai2 = true;
        $scope.disablegenderwomenSid = true;
        $scope.disablegenderwomenMod = true;

        $scope.disablegender1women = true;
        $scope.disablegender2women = true;
        $scope.disablegender3women = true;
        $scope.disablegender4women = true;
        $scope.disablegender5women = true;

        $scope.selectedNPWM1 = $scope.PushNWomengpo1[1];
        $scope.selectedNPWM1.value = 0;
        $scope.selectedNPWM2 = $scope.PushNWomengpo2[1];
        $scope.selectedNPWM2.value = 0;
        $scope.selectedNPWM3 = $scope.PushNWomengpo3[1];
        $scope.selectedNPWM3.value = 0;
        $scope.selectedNPWM4 = $scope.PushNWomengpo4[1];
        $scope.selectedNPWM4.value = 0;
        $scope.selectedNPWM5 = $scope.PushNWomengpo5[1];
        $scope.selectedNPWM5.value = 0;

        $scope.disablegendermod1women = true;
        $scope.disablegendermod2women = true;
        $scope.disablegendermod3women = true;
        $scope.disablegendermod4women = true;
        $scope.disablegendermod5women = true;

        $scope.selectedPWM1 = $scope.PushWomengpo1[1];
        $scope.selectedPWM1.value = 0;
        $scope.selectedPWM2 = $scope.PushWomengpo2[1];
        $scope.selectedPWM2.value = 0;
        $scope.selectedPWM3 = $scope.PushWomengpo3[1];
        $scope.selectedPWM3.value = 0;
        $scope.selectedPWM4 = $scope.PushWomengpo4[1];
        $scope.selectedPWM4.value = 0;
        $scope.selectedPWM5 = $scope.PushWomengpo5[1];
        $scope.selectedPWM5.value = 0;


        $scope.disablegendermen1 = false;
        $scope.disablegendermen1 = false;
        $scope.disablegendermen1 = false;
        $scope.disablegendermen1 = false;
        $scope.disablegendermen1 = false;

        $scope.selectedPusMen1 = $scope.PusMens1[1];
        $scope.selectedPusMen1.value = 0;
        $scope.selectedPusMen2 = $scope.PusMens2[1];
        $scope.selectedPusMen2.value = 0;
        $scope.selectedPusMen3 = $scope.PusMens3[1];
        $scope.selectedPusMen3.value = 0;
        $scope.selectedPusMen4 = $scope.PusMens4[1];
        $scope.selectedPusMen4.value = 0;
        $scope.selectedPusMen5 = $scope.PusMens5[1];
        $scope.selectedPusMen5.value = 0;

        $scope.disableMBCM1 = false;
        $scope.disableMBCM2 = false;
        $scope.disableMBCM3 = false;
        $scope.disableMBCM4 = false;

        $scope.selectedMBMen1 = $scope.PushMBCMgpo1[1];
        $scope.selectedMBMen1.value = 0;
        $scope.selectedMBMen2 = $scope.PushMBCMgpo2[1];
        $scope.selectedMBMen2.value = 0;
        $scope.selectedMBMen3 = $scope.PushMBCMgpo3[1];
        $scope.selectedMBMen3.value = 0;
        $scope.selectedMBMen4 = $scope.PushMBCMgpo4[1];
        $scope.selectedMBMen4.value = 0;

        $scope.disableMBCW1 = true;
        $scope.disableMBCW2 = true;
        $scope.disableMBCW3 = true;
        $scope.disableMBCW4 = true;

        $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[1];
        $scope.selectedMBWOMen1.value = 0;
        $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[1];
        $scope.selectedMBWOMen2.value = 0;
        $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[1];
        $scope.selectedMBWOMen3.value = 0;
        $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[1];
        $scope.selectedMBWOMen4.value = 0;

        $scope.disablegendercoomen1 = true;
        $scope.disablegendercoomen2 = true;
        $scope.disablegendercoomen3 = true;
        $scope.disablegendercoomen4 = true;


        $scope.disablegendercoowomen1 = true;
        $scope.disablegendercoowomen2 = true;
        $scope.disablegendercoowomen3 = true;
        $scope.disablegendercoowomen4 = true;


        $scope.selectedCooMen1 = $scope.CooMens1[1];
        $scope.selectedCooMen1.value = 0;
        $scope.selectedCooMen2 = $scope.CooMens2[1];
        $scope.selectedCooMen2.value = 0;
        $scope.selectedCooMen3 = $scope.CooMens3[1];
        $scope.selectedCooMen3.value = 0;
        $scope.selectedCooMen4 = $scope.CooMens4[1];
        $scope.selectedCooMen4.value = 0;


        $scope.selectedCW1 = $scope.CooWomens1[1]
        $scope.selectedCW1.value = 0;
        $scope.selectedCW2 = $scope.CooWomens2[1];
        $scope.selectedCW2.value = 0;
        $scope.selectedCW3 = $scope.CooWomens3[1];
        $scope.selectedCW3.value = 0;
        $scope.selectedCW4 = $scope.CooWomens4[1];
        $scope.selectedCW4.value = 0;

        $scope.selectedRated = $scope.selectedRateds[0];
        $scope.selectedLife = $scope.selectedLifes[0];
        $scope.selectedParticipated = $scope.selectedParticipateds[0];
        $scope.selectedPlaning = $scope.selectedPlanings[0];


        //goGender();

        $scope.radioGender = true;
        $scope.radioCar = true;
        $scope.radioChe = true;
        $scope.radioFat = true;
        $scope.radioMot = true;
        $scope.radioDia = true;
        $scope.radioSmo = true;
        $scope.radioOra = true;
        $scope.radioOrg = true;
        $scope.radioPlaning = true;
        $scope.radioMPW = true;
        $scope.radiofitness = true;


        $scope.radioSho = true;
        $scope.radioSpi = true;
        $scope.radioSpiExt = true;

        $scope.howSidMen = '0 s';
        $scope.howSidMenLeft = '0 s';
        $scope.howSidWomen = '0 s';
        $scope.howSidWomenLeft = '0 s';

        $scope.numMBCMpwm1 = 0.00 + "\'";
        $scope.numMBCMpwm2 = 0.00 + "\'";
        $scope.numMBCMpwm3 = 0.00 + "\'";
        $scope.numMBCMpwm4 = 0.00 + "\'";

        $scope.numMBCWpwm1 = 0.00 + "\'";
        $scope.numMBCWpwm2 = 0.00 + "\'";
        $scope.numMBCWpwm3 = 0.00 + "\'";
        $scope.numMBCWpwm4 = 0.00 + "\'";

        $scope.numMBCOOWpwm1 = 0 + " miles";
        $scope.numMBCOOWpwm2 = 0 + " miles";
        $scope.numMBCOOWpwm3 = 0 + " miles";
        $scope.numMBCOOWpwm4 = 0 + " miles";

        $scope.numMBCOOWOpwm1 = 0 + " miles";
        $scope.numMBCOOWOpwm2 = 0 + " miles";
        $scope.numMBCOOWOpwm3 = 0 + " miles";
        $scope.numMBCOOWOpwm4 = 0 + " miles";

        $scope.numnpmen1 = 0 + ' Push Ups ';
        $scope.numnpmen2 = 0 + ' Push Ups ';
        $scope.numnpmen3 = 0 + ' Push Ups ';
        $scope.numnpmen4 = 0 + ' Push Ups ';
        $scope.numnpmen5 = 0 + ' Push Ups ';

        $scope.numnpwm1 = 0 + ' Push Ups ';
        $scope.numnpwm2 = 0 + ' Push Ups ';
        $scope.numnpwm3 = 0 + ' Push Ups ';
        $scope.numnpwm4 = 0 + ' Push Ups ';
        $scope.numnpwm5 = 0 + ' Push Ups ';

        $scope.numpwm1 = 0 + ' Push Ups ';
        $scope.numpwm2 = 0 + ' Push Ups ';
        $scope.numpwm3 = 0 + ' Push Ups ';
        $scope.numpwm4 = 0 + ' Push Ups ';
        $scope.numpwm5 = 0 + ' Push Ups ';

        
        if ($rootScope.phoneDevice > -1) {
            $scope.hideHeader = false;
            $scope.ocultarMessage = true;
            ocultarPhone();
        }
        else {
            $scope.hideNext = true;
            $scope.hideBack = true;
        }

        if (tempFactory != null) {
            queryQuestionTempFactory = JSON.parse(tempFactory);

            questionFactory = JSON.parse(localStorage.getItem("questionFactory"));
            pageQ = 0;
            if (queryQuestionTempFactory.pageQ == 1) {
                pageQ = 1;
            }

            countQ = queryQuestionTempFactory.countQ;
            totalQ = queryQuestionTempFactory.totalQ;

            fillData(JSON.parse(localStorage.getItem("questionFactory")));

            stopTime = $interval(closeMenu, $rootScope.dialogTimer);

            countSubmit = totalQ;

        }
        else if (state == "1") {
            

            queryQuestionFactory = JSON.parse($window.sessionStorage["question"]);

            questionFactory.idform = queryQuestionFactory.id;

            getOneData();

            if ($scope.selectedGender.id == 0) {
                countSubmit = 31;
            }
            else {
                countSubmit = 32;
            }
            

 
        }
        else {
            $scope.hideAll = false;
            pageQ = 0;
            saveStateForm();
        }
        $scope.hidereview = true;
        $scope.hideEmail = true;
        $scope.hidepoints = true;

        $scope.emailDisable = true;
        $scope.questions = false;
        $scope.hideSubmitweb = false;
        $scope.hideBackweb = false;
        $scope.doneSubmitweb = true;
        $scope.hidepoints = true;
        $scope.hideerrors = true;
        $scope.hideBack = true;
        $scope.hideSave = true;

        if ($rootScope.phoneDevice >= 0) {
            if (countQ > 2) {
                countQ = countQ - 1;
                $scope.next();
                $scope.hideGender = true;
                $scope.hideBack = false;
            }
            else {
                $scope.hideNext = true;
            }

            

        }
        if (tempFactory != null) {
            if (queryQuestionTempFactory.pageQ == 1) {
                $scope.hideAll = false;
                $scope.hideEmail = false;
                $scope.hideScoreQ = true;
                $scope.questions = true;

            }
            else {
                $scope.questions = false;
                $scope.hideScoreQ = true;
                $scope.hideAll = false;
            }

        }

        /*
        if ($rootScope.phoneDevice >= 0) {
            var value = $("#left-panel").css("left");
            if (value != undefined && value == '0px') {
                $("#id-toggle-menu").click();
            }

        }
        */
    }

    var calcData = function () {
       
        $scope.gohowmod($scope.howmod);
        $scope.gohowvig($scope.howvig);
        $scope.gohowsys($scope.howsys);
        $scope.gohowdia($scope.howdia);

        if ($scope.selectedGender.id == 0) {
            
            $scope.gohowSidMen($scope.howSidMen, $scope.howSidMenLeft);
            calculawaisttohip($scope.howwaist, $scope.howhip);

            if ($scope.selectedAge.id == 0) {
                $scope.gonumnpmen1($scope.numnpmen1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumnpmen2($scope.numnpmen2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumnpmen3($scope.numnpmen3);
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.gonumnpmen4($scope.numnpmen4);
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.gonumnpmen5($scope.numnpmen5);
            }

            if ($scope.selectedAge.id == 0) {
                $scope.gonumMBCMpwm1($scope.numMBCMpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumMBCMpwm2($scope.numMBCMpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumMBCMpwm3($scope.numMBCMpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.gonumMBCMpwm4($scope.numMBCMpwm4);
            }


            if ($scope.selectedAge.id == 0) {
                $scope.gonumMBCOOWpwm1($scope.numMBCOOWpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumMBCOOWpwm2($scope.numMBCOOWpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumMBCOOWpwm3($scope.numMBCOOWpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.gonumMBCOOWpwm4($scope.numMBCOOWpwm4);
            }
        }
        else {
            $scope.gohowSidWomen($scope.howSidWomen, $scope.howSidWomenLeft);
            calculawaisttohipw($scope.howwaistw, $scope.howhipw);

            if (!$scope.radioMPW) {
              
                if ($scope.selectedAge.id == 0) {
                    $scope.gonumpwm1($scope.numpwm1);
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.gonumpwm2($scope.numpwm2);
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.gonumpwm3($scope.numpwm3);
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.gonumpwm4($scope.numpwm4);
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.gonumpwm5($scope.numpwm5);
                }


            }
            else {
              
                if ($scope.selectedAge.id == 0) {
                    $scope.gonumnpwm1($scope.numnpwm1);
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.gonumnpwm2($scope.numnpwm2);
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.gonumnpwm3($scope.numnpwm3);
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.gonumnpwm4($scope.numnpwm4);
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.gonumnpwm5($scope.numnpwm5);
                }
            }

            if ($scope.selectedAge.id == 0) {
                $scope.gonumMBCWpwm1($scope.numMBCWpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumMBCWpwm2($scope.numMBCWpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumMBCWpwm3($scope.numMBCWpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.gonumMBCWpwm4($scope.numMBCWpwm4);
            }

            if ($scope.selectedAge.id == 0) {
                $scope.gonumMBCOOWOpwm1($scope.numMBCOOWOpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumMBCOOWOpwm2($scope.numMBCOOWOpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumMBCOOWOpwm3($scope.numMBCOOWOpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.gonumMBCOOWOpwm4($scope.numMBCOOWOpwm4);
            }
        }


    }

    var closeMenu = function () {
        $interval.cancel(stopTime);
        if ($rootScope.phoneDevice >= 0) {
            /*
            var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
            */

            $('#inputAge').focus();
            $('#inputHeight').focus();
            $('#inputWeight').focus();
            $('#inputSys').focus();
            $('#inputDia').focus();
            $('#inputWaist').focus();
            $('#inputHip').focus();
            $('#inputwaistw').focus();
            $('#inputhipw').focus();
            $('#inputSideMen').focus();
            $('#inputSidMenLeft').focus();
            $('#howSidWomen').focus();
            $('#howSidWomenLeft').focus();
            $('#inputPushMen1').focus();
            $('#inputPushMen2').focus();
            $('#inputPushMen3').focus();
            $('#inputPushMen4').focus();
            $('#inputPushMen5').focus();
            $('#inputPushWomen1').focus();
            $('#inputPushWomen2').focus();
            $('#inputPushWomen3').focus();
            $('#inputPushWomen4').focus();
            $('#inputPushWomen5').focus();
            $('#inputPushWomenM1').focus();
            $('#inputPushWomenM2').focus();
            $('#inputPushWomenM3').focus();
            $('#inputPushWomenM4').focus();
            $('#inputPushWomenM5').focus();
            $('#inputChestMen1').focus();
            $('#inputChestMen2').focus();
            $('#inputChestMen3').focus();
            $('#inputChestMen4').focus();
            $('#inputChestWoMen1').focus();
            $('#inputChestWoMen2').focus();
            $('#inputChestWoMen3').focus();
            $('#inputChestWoMen4').focus();
            $('#inputCooperMen1').focus();
            $('#inputCooperMen2').focus();
            $('#inputCooperMen3').focus();
            $('#inputCooperMen4').focus();
            $('#inputCooperWoMen1').focus();
            $('#inputCooperWoMen2').focus();
            $('#inputCooperWoMen3').focus();
            $('#inputCooperWoMen4').focus();
        }


    }

    var getOneData = function () {
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push(queryQuestionFactory.id);
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Questions/QueryOneUserQuestions')
        .then(function (data) {
            fillData(data);
            
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    var fillData = function (data) {
        flagcontinue = false;

        $scope.email = data.email;

        $scope.howold = data.Age;
        $scope.gohowold($scope.howold);

        $scope.howHeight = data.HowHeightFeet + "\' " + data.HowHeightInchs + "\'\'";
        $scope.howWeight = data.HowWeight;

        if (data.CardioVascularHealth) {
            $scope.goradioCarYes();
        }
        else {
            $scope.goradioCarNo();
        }

        if (data.ChestPain) {
            $scope.goradioCheYes();
        }
        else {
            $scope.goradioCheNo();
        }

        if (data.FatherDiagnosed) {
            $scope.goradioFatYes();
        }
        else {
            $scope.goradioFatNo();
        }

        if (data.MotherDiagnosed) {
            $scope.goradioMotYes();
        }
        else {
            $scope.goradioMotNo();
        }

        if (data.Diabetes) {
            $scope.goradioDiaYes();
        }
        else {
            $scope.goradioDiaNo();
        }


        //$scope.moderate(data.ModerateExercise);
        //$scope.vigorous(data.Vigorous);
        $scope.howmod = data.ModerateExercise;
        $scope.gohowmod($scope.howmod);
        $scope.howvig = data.Vigorous;
        $scope.gohowvig($scope.howvig);

        $scope.sitting(data.Sitting);
        $scope.smoke(data.Smoke);


        if (data.Secondhandsmoke) {
            $scope.goradioSmoYes();
        }
        else {
            $scope.goradioSmoNo();
        }

        $scope.alcohol(data.Alcohol);

        if (data.OralContraceptives) {
            $scope.goradioOraYes();
        }
        else {
            $scope.goradioOraNo();
        }

        $scope.antibiotics(data.Antibiotics);

        $scope.howsys = data.Systolic;
        $scope.gohowsys($scope.howsys);

        $scope.howdia = data.Diastolic;
        $scope.gohowdia($scope.howdia);

        if (data.Gender == 0) {
            $scope.howwaist = data.WaistMen + '\'\'';
            $scope.howhip = data.HipMen + '\'\'';
            calculawaisttohip($scope.howwaist, $scope.howhip);
        }
        else {
            $scope.howwaistw = data.WaistWomen + '\'\'';
            $scope.howhipw = data.HipWomen + '\'\'';
            calculawaisttohipw($scope.howwaistw, $scope.howhipw);
        }
        
        $scope.ilumination(data.DeepSquat);
        $scope.actleg(data.ActiveStraightLegRaise);
        $scope.shomob(data.ShoulderMobility);

        if (data.ShoulderClearingTest) {
            $scope.goradioShoClearYes();
        }
        else {
            $scope.goradioShoClearNo();
        }

        if (data.SpinalFlexion) {
            $scope.goradioSpiYes();
        }
        else {
            $scope.goradioSpiNo();
        }

        if (data.SpinalExtension) {
            $scope.goradioSpiExtYes();
        }
        else {
            $scope.goradioSpiExtNo();
        }

        flagModified = true;

        if (!data.Gender) {
            $scope.gohowSidMen(data.SideBridgeMen + " s", data.SideBridgeMenLeft + " s");

            if ($scope.selectedAge.id == 0) {
                $scope.numnpmen1 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen1($scope.numnpmen1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numnpmen2 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen2($scope.numnpmen2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numnpmen3 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen3($scope.numnpmen3);
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.numnpmen4 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen4($scope.numnpmen4);
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.numnpmen5 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen5($scope.numnpmen5);
            }

            if ($scope.selectedAge.id == 0) {
                $scope.numMBCMpwm1 = data.MBThrowMen + "\'";
                $scope.gonumMBCMpwm1($scope.numMBCMpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numMBCMpwm2 = data.MBThrowMen + "\'";
                $scope.gonumMBCMpwm2($scope.numMBCMpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numMBCMpwm3 = data.MBThrowMen + "\'";
                $scope.gonumMBCMpwm3($scope.numMBCMpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.numMBCMpwm4 = data.MBThrowMen + "\'";
                $scope.gonumMBCMpwm4($scope.numMBCMpwm4);
            }


            if ($scope.selectedAge.id == 0) {
                $scope.numMBCOOWpwm1 = data.CoopertestMen + " miles";
                $scope.gonumMBCOOWpwm1($scope.numMBCOOWpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numMBCOOWpwm2 = data.CoopertestMen + " miles";
                $scope.gonumMBCOOWpwm2($scope.numMBCOOWpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numMBCOOWpwm3 = data.CoopertestMen + " miles";
                $scope.gonumMBCOOWpwm3($scope.numMBCOOWpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.numMBCOOWpwm4 = data.CoopertestMen + " miles";
                $scope.gonumMBCOOWpwm4($scope.numMBCOOWpwm4);
            }
        }
        else {
            $scope.gohowSidWomen(data.SideBridgeWomen + " s", data.SideBridgeWomenLeft + " s");

            if (data.PushuptestModifiedWomen) {
                $scope.goradioWmodYes();

                if ($scope.selectedAge.id == 0) {
                    $scope.numpwm1 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm1($scope.numpwm1);
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.numpwm2 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm2($scope.numpwm2);
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.numpwm3 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm3($scope.numpwm3);
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.numpwm4 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm4($scope.numpwm4);
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.numpwm5 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm5($scope.numpwm5);
                }


            }
            else {
                $scope.goradioWmodNo();

                if ($scope.selectedAge.id == 0) {
                    $scope.numnpwm1 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm1($scope.numnpwm1);
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.numnpwm2 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm2($scope.numnpwm2);
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.numnpwm3 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm3($scope.numnpwm3);
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.numnpwm4 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm4($scope.numnpwm4);
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.numnpwm5 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm5($scope.numnpwm5);
                }
            }

            if ($scope.selectedAge.id == 0) {
                $scope.numMBCWpwm1 = data.MBThrowWomen + "\'";
                $scope.gonumMBCWpwm1($scope.numMBCWpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numMBCWpwm2 = data.MBThrowWomen + "\'";
                $scope.gonumMBCWpwm2($scope.numMBCWpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numMBCWpwm3 = data.MBThrowWomen + "\'";
                $scope.gonumMBCWpwm3($scope.numMBCWpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.numMBCWpwm4 = data.MBThrowWomen + "\'";
                $scope.gonumMBCWpwm4($scope.numMBCWpwm4);
            }

            if ($scope.selectedAge.id == 0) {
                $scope.numMBCOOWOpwm1 = data.CoopertestWomen + " miles";
                $scope.gonumMBCOOWOpwm1($scope.numMBCOOWOpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numMBCOOWOpwm2 = data.CoopertestWomen + " miles";
                $scope.gonumMBCOOWOpwm2($scope.numMBCOOWOpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numMBCOOWOpwm3 = data.CoopertestWomen + " miles";
                $scope.gonumMBCOOWOpwm3($scope.numMBCOOWOpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.numMBCOOWOpwm4 = data.CoopertestWomen + " miles";
                $scope.gonumMBCOOWOpwm4($scope.numMBCOOWOpwm4);
            }
        }

        $scope.fitness(data.RateFitness);
        $scope.lifetime(data.RankFitness);

        if (data.Particpe) {
            $scope.goradioOrgYes();
        }
        else {
            $scope.goradioOrgNo();
        }

        if (data.Planing) {
            $scope.goradioPlaningYes();
        }
        else {
            $scope.goradioPlaningNo();
        }

        if (data.Gender) {

            if ($rootScope.phoneDevice >= 0) {
                flagImgFamele = 0;
                $scope.changeFamele();
                $scope.selectedGender = $scope.Genders[1];
            }
            else {
                $scope.radioGender = false;
            }
        }
        else {
            if ($rootScope.phoneDevice >= 0) {
                flagImgMale = 0;
                $scope.changeMale();
            }
            else {
                $scope.radioGender = true;
            }
        }

        statusFields();
        $scope.ServerBMI = data.HowHeightpts;
        $scope.ServerCar = data.CardioVascularHealthpts;
        $scope.ServerChe = data.ChestPainpts;
        $scope.ServerFat = data.FatherDiagnosedpts;
        $scope.ServerMot = data.MotherDiagnosedpts
        $scope.ServerDia = data.Diabetespts;
        $scope.ServerMod = data.ModerateExercisepts;
        $scope.ServerVig = data.Vigorouspts;
        $scope.ServerSit = data.Sittingpts;
        $scope.ServerSmo = data.Smokepts;
        $scope.ServerSmokes = data.Secondhandsmokepts;
        $scope.ServerAlc = data.Alcoholpts;
        $scope.ServerOra = data.OralContraceptivepts;
        $scope.ServerAnt = data.Antibioticspts;

        $scope.ServerSys = data.Systolicpts;
        $scope.ServerDiastolic = data.Diastolicpts;
        $scope.ServerWaiMen = data.WaisttoHipMenpts;
        $scope.ServerWaiWomen = data.WaisttoHipWomenpts;
        $scope.ServerSidMen = data.SideBridgeMenpts;
        $scope.ServerSiddWomen = data.SideBridgeWomenpts;
        $scope.ServerDee = data.DeepSquatpts;
        $scope.ServerAct = data.ActiveStraightLegRaisepts;
        $scope.ServerMob = data.ShoulderMobilitypts;
        $scope.ServerdSho = data.ShoulderClearingTestpts;
        $scope.ServerdSpi = data.SpinalFlexionpts;
        $scope.ServerSpiExt = data.SpinalExtensionpts;

        $scope.ServerPusMen = data.PushuptestMenpts;
        $scope.ServerPusWomen = data.PushuptestWomenpts;
        $scope.ServerMPusWomen = data.PushuptestWomenModifiedpts;
        $scope.ServerChestMen = data.MBThrowMenpts;
        $scope.ServerChestWoMen = data.MBThrowWomenpts;
        $scope.ServerComen = data.CoopertestMenpts;
        $scope.ServerCowomen = data.CoopertestWomenpts;

        $scope.ServerTotal1 = data.total1;
        $scope.ServerTotal2 = data.total2;
        $scope.ServerTotal3 = data.grantotal;
        $scope.ServerTotal4 = data.conversiontotal;


        questionFactory.datelocal = data.datelocal;

        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dateTamp = new Date(data.datelocal);
        questionFactory.datelocal = dateTamp;

        var yyyy = dateTamp.getFullYear().toString();
        var mm = (dateTamp.getMonth()); // getMonth() is zero-based
        var dd = dateTamp.getDate().toString();

        $scope.datedone = monthNames[mm] + " " + dd + " of " + yyyy;

        $scope.puntos = $scope.ServerTotal4;
        if (data.avarage != undefined) {
            $scope.avarage = changeAbbrev(data.avarage);
        }
        else {
            $scope.avarage = changeAbbrev(0);
        }



        $scope.totalUsers = data.totalUsers;

        $scope.hideScoreQ = false;

        $scope.firstname = data.firstname;
        $scope.lastname = data.lastname;


        //$scope.disablegender3women = true;
    }

    var changeAbbrev = function (data) {
        data = data.toString();
        var value = parseInt(data.charAt(data.length - 1));
        if (value == 1) {
            data += "st";
        }
        else if (value == 2) {
            data += "nd";
        }
        else if (value == 3) {
            data += "rd";
        }
        else {
            data += "th";
        }
        return data;
    }

    ///
    /// how old
    ///

    $scope.gohowold = function (howold) {
        if (howold >= 0 && 29 >= howold) {
            $scope.selectedAge = $scope.Ages[0]
        }
        else if (howold >= 30 && 34 >= howold) {
            $scope.selectedAge = $scope.Ages[1]
        }
        else if (howold >= 35 && 39 >= howold) {
            $scope.selectedAge = $scope.Ages[2]
        }
        else if (howold >= 40 && 44 >= howold) {
            $scope.selectedAge = $scope.Ages[3]
        }
        else if (howold >= 45 && 49 >= howold) {
            $scope.selectedAge = $scope.Ages[4]
        }
        else if (howold >= 50 && 54 >= howold) {
            $scope.selectedAge = $scope.Ages[5]
        }
        else if (howold >= 55 && 59 >= howold) {
            $scope.selectedAge = $scope.Ages[6]
        }
        else if (howold >= 60 && 64 >= howold) {
            $scope.selectedAge = $scope.Ages[7]
        }
        else if (howold >= 65 && 69 >= howold) {
            $scope.selectedAge = $scope.Ages[8]
        }
        else if (howold >= 70 && 74 >= howold) {
            $scope.selectedAge = $scope.Ages[9]
        }
        else if (howold >= 75) {
            $scope.selectedAge = $scope.Ages[10]
        }

      
        goModified();
        //$scope.goTotal();
        if ($scope.hidereview) {
            $scope.hideNext = false;
        }
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    ///
    /// smoker
    ///

    $scope.goSmoCheckExposed = function (selectSmo) {

        if (selectSmo.id <= 1) {
            $scope.hideSmokes = false;
        }
        else {
            $scope.hideSmokes = true;
        }

        $scope.goTotal();


    }

    ///
    /// low
    ///

    $scope.gohowmod = function (howmod) {
        $scope.selectedMod = $scope.Mods[0]

        $scope.selectedMod.value = (1 - howmod) * 5;
        
        if ($scope.selectedMod.value < -20) {
            $scope.selectedMod.value = -20;
        }

        /*
        if (howmod <= 1) {
            $scope.selectedMod = $scope.Mods[0]
        }
        else if (howmod >= 2 && 3 >= howmod) {
            $scope.selectedMod = $scope.Mods[1]
        }
        else if (howmod >= 4 && 5 >= howmod) {
            $scope.selectedMod = $scope.Mods[2]
        }
        else if (howmod >= 5) {
            $scope.selectedMod = $scope.Mods[3]
        }
        */
        $scope.goTotal();


    }

    ///
    ///  high
    ///

    $scope.gohowvig = function (howvig) {

        $scope.selectedVig = $scope.Vigs[0]

        $scope.selectedVig.value = (howvig) * -5

        if ($scope.selectedVig.value < -20) {
            $scope.selectedVig.value = -20;
        }

        /*
        if (howvig == 0) {
            $scope.selectedVig = $scope.Vigs[0]
        }
        else if (howvig == 1) {
            $scope.selectedVig = $scope.Vigs[1]
        }
        else if (howvig >= 2 && 3 >= howvig) {
            $scope.selectedVig = $scope.Vigs[2]
        }
        else if (howvig >= 4) {
            $scope.selectedVig = $scope.Vigs[3]
        }
        */

        $scope.goTotal();

    }

    ///
    /// Blood Pressure Systolic
    ///

    $scope.gohowsys = function (howsys) {

        $scope.selectedSys = $scope.Syss[0]

        if (howsys > 130) {
            $scope.selectedSys.value = howsys - 130;

            if ($scope.selectedSys.value > 40) {
                $scope.selectedSys.value = 40;
            }
        }
        else {
            $scope.selectedSys.value = parseInt(0);
        }

        

        /*
        if (howsys >= 0 && 115 >= howsys) {
            $scope.selectedSys = $scope.Syss[0]
        }
        if (howsys == 116) {
            $scope.selectedSys = $scope.Syss[1]
        }
        if (howsys == 117) {
            $scope.selectedSys = $scope.Syss[2]
        }
        if (howsys == 118) {
            $scope.selectedSys = $scope.Syss[3]
        }
        if (howsys == 119) {
            $scope.selectedSys = $scope.Syss[4]
        }
        if (howsys == 120) {
            $scope.selectedSys = $scope.Syss[5]
        }
        if (howsys == 121) {
            $scope.selectedSys = $scope.Syss[6]
        }
        if (howsys == 122) {
            $scope.selectedSys = $scope.Syss[7]
        }
        if (howsys == 123) {
            $scope.selectedSys = $scope.Syss[8]
        }
        if (howsys == 124) {
            $scope.selectedSys = $scope.Syss[9]
        }
        if (howsys >= 125 && 139 >= howsys) {
            $scope.selectedSys = $scope.Syss[10]
        }
        if (howsys >= 140 && 159 >= howsys) {
            $scope.selectedSys = $scope.Syss[11]
        }
        else if (howsys >= 160) {
            $scope.selectedSys = $scope.Syss[12]
        }
        */

        $scope.goTotal();

        if ($scope.howdia > 0) {
            if ($scope.hidereview) {
                $scope.hideNext = false;
            }
            if (countSubmit < countQ) {
                countSubmit = countQ;
            }

        }
    }

    ///
    /// Blood Pressure Diastolic
    ///

    $scope.gohowdia = function (howdia) {
        $scope.selectedDiastolic = $scope.Dias[0]
        
        if (howdia > 80) {
            $scope.selectedDiastolic.value = howdia - 80;
        }
        else {
            $scope.selectedDiastolic.value = parseInt(0);
        }
        
        
        /*
        if (howdia >= 0 && 54 >= howdia) {
            $scope.selectedDiastolic = $scope.Dias[0]
        }
        if (howdia == 55) {
            $scope.selectedDiastolic = $scope.Dias[1]
        }
        if (howdia == 56) {
            $scope.selectedDiastolic = $scope.Dias[2]
        }
        if (howdia == 57) {
            $scope.selectedDiastolic = $scope.Dias[3]
        }
        if (howdia == 58) {
            $scope.selectedDiastolic = $scope.Dias[4]
        }
        if (howdia == 59) {
            $scope.selectedDiastolic = $scope.Dias[5]
        }
        if (howdia == 60) {
            $scope.selectedDiastolic = $scope.Dias[6]
        }
        if (howdia == 61) {
            $scope.selectedDiastolic = $scope.Dias[7]
        }
        if (howdia == 62) {
            $scope.selectedDiastolic = $scope.Dias[8]
        }
        if (howdia == 63) {
            $scope.selectedDiastolic = $scope.Dias[9]
        }
        if (howdia == 64) {
            $scope.selectedDiastolic = $scope.Dias[10]
        }
        if (howdia == 65) {
            $scope.selectedDiastolic = $scope.Dias[11]
        }
        if (howdia >= 65 && 79 >= howdia) {
            $scope.selectedDiastolic = $scope.Dias[12]
        }
        if (howdia >= 80 && 89 >= howdia) {
            $scope.selectedDiastolic = $scope.Dias[13]
        }
        if (howdia >= 90 && 99 >= howdia) {
            $scope.selectedDiastolic = $scope.Dias[14]
        }
        else if (howdia >= 100) {
            $scope.selectedDiastolic = $scope.Dias[15]
        }
        */

        $scope.goTotal();

        if ($scope.howsys > 0) {
            if ($scope.hidereview) {
                $scope.hideNext = false;
            }
            if (countSubmit < countQ) {
                countSubmit = countQ;
            }

        }

    }

    ///
    /// Side Bridge men
    ///

    $scope.gohowSidMen = function (howSidMen, howSidMenLeft) {

        var index = howSidMen.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            howSidMen = howSidMen.substring(0, index);
        }
        var index = howSidMenLeft.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            howSidMenLeft = howSidMenLeft.substring(0, index);
        }
        var value = Math.round((parseInt(howSidMen) + parseInt(howSidMenLeft)) / 2);

        $scope.selectedSidMen = $scope.SidMens[0]

        $scope.selectedSidMen.value = (56 - value);
        
        if ($scope.selectedSidMen.value < -40) {
            $scope.selectedSidMen.value = -40;
        }
        else if ($scope.selectedSidMen.value > 10) {
            $scope.selectedSidMen.value = 10;
        }
        

        /*
        if (value >= 0 && 54 >= value) {
            $scope.selectedSidMen = $scope.SidMens[0]
        }
        if (value >= 58 && 84 >= value) {
            $scope.selectedSidMen = $scope.SidMens[1]
        }
        if (value >= 85 && 95 >= value) {
            $scope.selectedSidMen = $scope.SidMens[2]
        }
        if (value >= 96 && 126 >= value) {
            $scope.selectedSidMen = $scope.SidMens[3]
        }
        else if (value >= 127) {
            $scope.selectedSidMen = $scope.SidMens[4]
        }
        */
        $scope.howSidMen = howSidMen + ' s';

        $scope.howSidMenLeft = howSidMenLeft + ' s';

        $scope.goTotal();
    }

    ///
    /// Side Bridge WOmen
    ///

    $scope.gohowSidWomen = function (howSidWomen, howSidWomenLeft) {

        var index = howSidWomen.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            howSidWomen = howSidWomen.substring(0, index);
        }
        var index = howSidWomenLeft.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            howSidWomenLeft = howSidWomenLeft.substring(0, index);
        }
        var value = Math.round((parseInt(howSidWomen) + parseInt(howSidWomenLeft)) / 2);

        $scope.selectedSidWomen = $scope.SidWomens[0]

        $scope.selectedSidWomen.value = (41 - value);

        if ($scope.selectedSidWomen.value < -40) {
            $scope.selectedSidWomen.value = -40;
        }
        else if ($scope.selectedSidWomen.value > 10) {
            $scope.selectedSidWomen.value = 10;
        }
 
        /*
        if (value >= 0 && 39 >= value) {
            $scope.selectedSidWomen = $scope.SidWomens[0]
        }
        if (value >= 40 && 69 >= value) {
            $scope.selectedSidWomen = $scope.SidWomens[1]
        }
        if (value >= 70 && 80 >= value) {
            $scope.selectedSidWomen = $scope.SidWomens[2];
        }
        if (value >= 81 && 110 >= value) {
            $scope.selectedSidWomen = $scope.SidWomens[3]
        }
        else if (value >= 111) {
            $scope.selectedSidWomen = $scope.SidWomens[4]
        }
        */

        $scope.howSidWomen = howSidWomen + ' s';

        $scope.howSidWomenLeft = howSidWomenLeft + ' s';


        $scope.goTotal();
    }

    ///
    /// Waist to hip men
    ///

    $scope.gohowwaist = function (howwaist) {
        calculawaisttohip(howwaist, $scope.howhip)
    }

    $scope.gohowhip = function (howhip) {
        calculawaisttohip($scope.howwaist, howhip)
    }

    var calculawaisttohip = function (howwaist, howhip) {
        var result = 0.00;

        var howwaistv = howwaist.replace(/'/g, '');
        var howhipv = howhip.replace(/'/g, '');
     

        if (howwaistv > 0.00 && howhipv > 0.00) {
            result = (howwaistv / howhipv).toFixed(2);
        }

        $scope.selectedWaiMen = $scope.WaiMens[0];

        $scope.selectedWaiMen.value = Math.round((result - 1) * 500 + 20);

        if ($scope.selectedWaiMen.value > 60) {
            $scope.selectedWaiMen.value = 60
        }
        else if ($scope.selectedWaiMen.value < -35) {
            $scope.selectedWaiMen.value = -35
        }

        $scope.howwaist = howwaistv + '\'\'';
        $scope.howhip = howhipv + '\'\'';
    
        $scope.goTotal();
        if (howwaistv > 0 && howhipv > 0) {
            if ($scope.hidereview) {
                $scope.hideNext = false;
            }
            if (countSubmit < countQ) {
                countSubmit = countQ;
            }

        }

        calcBMI();
    }




    ///
    /// Waist to hip WOmen
    ///

    $scope.gohowwaistw = function (howwaistw) {
        calculawaisttohipw(howwaistw, $scope.howhipw)
    }

    $scope.gohowhipw = function (howhipw) {
        calculawaisttohipw($scope.howwaistw, howhipw)
    }

    var calculawaisttohipw = function (howwaistw, howhipw) {
        var result = 0.00;
        var howwaistwv = howwaistw.replace(/'/g, '');
        var howhipwv = howhipw.replace(/'/g, '');


        if (howwaistwv > 0.00 && howhipwv > 0.00) {
            result = (howwaistwv / howhipwv).toFixed(2);
        }

        $scope.selectedWaiWomen = $scope.WaiWomens[0];

        $scope.selectedWaiWomen.value = Math.round((result - 0.85) * 500 + 20);

        if ($scope.selectedWaiWomen.value > 60) {
            $scope.selectedWaiWomen.value = 60
        }
        else if ($scope.selectedWaiWomen.value < -35) {
            $scope.selectedWaiWomen.value = -35
        }
        
        $scope.howwaistw = howwaistwv + '\'\'';
        $scope.howhipw = howhipwv + '\'\'';


        $scope.goTotal();

        if (howwaistwv > 0 && howhipwv > 0) {
            $scope.hideNext = false;
            if (countSubmit < countQ) {
                countSubmit = countQ;
            }

        }

        calcBMI();
    }

    ///
    /// Ocultar Phone
    ///
    var ocultarPhone = function () {
        $scope.hideEmail = true;
        $scope.hidepoints = true;
        $scope.hideGender = true;
        $scope.hideOld = true;
        $scope.hideHeight = true;
        $scope.hideWeight = true;
        $scope.hideCar = true;
        $scope.hideChe = true;
        $scope.hideFat = true;
        $scope.hideMot = true;
        $scope.hideDia = true;
        $scope.hideMod = true;
        $scope.hideVig = true;
        $scope.hideSit = true;
        $scope.hideSmo = true;
        $scope.hideSmokes = true;
        $scope.hideAlc = true;
        $scope.hideOra = true;
        $scope.hideAnt = true;
        $scope.hideSys = true;
        $scope.hideDialostic = true;

        $scope.disablegendermen = true;
        $scope.disablegendermenWai = true;
        $scope.disablegendermenWai2 = true;
        $scope.disablegendermenSid = true;

        $scope.disablegenderwomen = true;
        $scope.disablegenderwomenWai = true;
        $scope.disablegenderwomenWai2 = true;
        $scope.disablegenderwomenSid = true;
        $scope.disablegenderwomenMod = true;

        $scope.hideDee = true;
        $scope.hideAct = true;
        $scope.hideMob = true;
        $scope.hideSho = true;
        $scope.hideSpi = true;
        $scope.hideSpiExt = true;

        $scope.disablegendermen1 = true;
        $scope.disablegendermen2 = true;
        $scope.disablegendermen3 = true;
        $scope.disablegendermen4 = true;
        $scope.disablegendermen5 = true;

        $scope.disablegender1women = true;
        $scope.disablegender2women = true;
        $scope.disablegender3women = true;
        $scope.disablegender4women = true;
        $scope.disablegender5women = true;

        $scope.disablegendermod1women = true;
        $scope.disablegendermod2women = true;
        $scope.disablegendermod3women = true;
        $scope.disablegendermod4women = true;
        $scope.disablegendermod5women = true;

        $scope.disableMBCM1 = true;
        $scope.disableMBCM2 = true;
        $scope.disableMBCM3 = true;
        $scope.disableMBCM4 = true;

        $scope.disableMBCW1 = true;
        $scope.disableMBCW2 = true;
        $scope.disableMBCW3 = true;
        $scope.disableMBCW4 = true;

        $scope.disablegendercoomen1 = true;
        $scope.disablegendercoomen2 = true;
        $scope.disablegendercoomen3 = true;
        $scope.disablegendercoomen4 = true;

        $scope.disablegendercoowomen1 = true;
        $scope.disablegendercoowomen2 = true;
        $scope.disablegendercoowomen3 = true;
        $scope.disablegendercoowomen4 = true;

        $scope.hideRated = true;
        $scope.hideLife = true;
        $scope.hideOrg = true;
        $scope.hidePlaning = true;

        if (countQ == 1) {
            countQ = 2;

            $scope.hideGender = false;
            $scope.hideNext = false;
          
            $scope.hideBack = true;
        }
        else {
            $scope.hideGender = true;
            $scope.hideNext = false;
            $scope.hideBack = false;
        }
        $scope.hideSave = true;



        putCounter();
    }

    var putCounter = function () {
        $scope.totalQuestions = (countQ - 1) + '/' + totalQ;
    }

    $scope.next = function () {
        if (countQ == 2) {
            $scope.hideBack = false;
        }
        if (countQ <= 20) {
            HideShowAll(true, false);
        }
        else {
            if ($scope.selectedGender.id == 0) {
                if (countQ <= 31) {
                    HideShowMen(true, false);
                }
                else {
                    showEmail();
                }
            }
            else {
                if (countQ <= 32) {
                    HideShowWoMen(true, false);
                }
                else {
                    showEmail();
                }

            }

        }
        countQ++;
        putCounter();
        saveStateForm();
        if (countQ > countSubmit) {
            if ($scope.selectedGender.id == 0) {
                if (countQ != 11 && countQ != 29 && countQ != 30 && countQ != 31 && countQ != 32) {
                    $scope.hideNext = true;
                }
            }

        }


    }


    $scope.backQ = function () {
        countQ--;
        putCounter();
        saveStateForm();
       
     
        if (countQ == 2) {
            $scope.hideBack = true;
        }
        if (countQ <= 20) {
            HideShowAll(false, true);
        }
        else {
            if ($scope.selectedGender.id == 0) {
                if (countQ <= 31) {
                    HideShowMen(false, true);
                }
                else {
                    hideEmail();
                }
            }
            else {
                if (countQ <= 32) {
                    HideShowWoMen(false, true);
                }
                else {
                    hideEmail();
                }

            }
        }

        if (countQ <= countSubmit + 1) {
            $scope.hideNext = false;
        }


    }

    var showEmail = function () {
        $scope.hideHeader = true;
        if ($scope.radioGender == true) {
            coomen(true);
        }
        else {
            coowomen(true);
        }
        $scope.hideEmail = false;
        $scope.hideSave = false;
        $scope.hideNext = true;
    }

    var hideEmail = function () {
        $scope.hideHeader = false;
        if ($scope.radioGender == true) {
            coomen(false);
        }
        else {
            coowomen(false);
        }
        $scope.hideEmail = true;
        $scope.hideSave = true;
        $scope.hideBack = false;
        $scope.hideNext = false;
    }

    var HideShowAll = function (opt1, opt2) {
        switch (countQ) {
            case 2:
                $scope.hideGender = opt1;
                $scope.hideOld = opt2;
                break;
            case 3:
                $scope.hideOld = opt1;
                $scope.hideHeight = opt2;
                break;
            case 4:
                $scope.hideHeight = opt1;
                $scope.hideWeight = opt2;
                break;
            case 5:
                $scope.hideWeight = opt1;
                $scope.hideCar = opt2;
                break;
            case 6:
                $scope.hideCar = opt1;
                $scope.hideChe = opt2;
                break;
            case 7:
                $scope.hideChe = opt1;
                $scope.hideFat = opt2;
                break;
            case 8:
                $scope.hideFat = opt1;
                $scope.hideMot = opt2;
                break;
            case 9:
                $scope.hideMot = opt1;
                $scope.hideDia = opt2;
                break;
            case 10:
                $scope.hideDia = opt1;
                $scope.hideMod = opt2;
                $scope.hideNext = false;
                break;
            case 11:
                $scope.hideMod = opt1;
                $scope.hideSit = opt2;
                break;
            case 12:
                $scope.hideSit = opt1;
                $scope.hideSmo = opt2;
                break;
        }

        if ((countQ == 13 || countQ == 14) && $scope.selectSmo.id > 1) {
            $scope.goradioSmoNo();
            countQ = 14;
            switch (countQ) {
                case 14:
                    $scope.hideSmo = opt1;
                    $scope.hideAlc = opt2;
                    break;
            }
            if (opt2) {
                countQ = 13;
            }
        }
        else {
            switch (countQ) {
                case 13:
                    $scope.hideSmo = opt1;
                    $scope.hideSmokes = opt2;
                    break;
                case 14:
                    $scope.hideSmokes = opt1;
                    $scope.hideAlc = opt2;
                    break;
            }

        }

        if (countQ >= 15) {
            switch (countQ) {
                case 15:
                    $scope.hideAlc = opt1;
                    $scope.hideAnt = opt2;
                    break;
                case 16:
                    $scope.hideAnt = opt1;
                    $scope.hideRated = opt2;
                    break;
                case 17:
                    $scope.hideRated = opt1;
                    $scope.hideLife = opt2;
                    break;
                case 18:
                    $scope.hideLife = opt1;
                    $scope.hideOrg = opt2;
                    break;
                case 19:
                    $scope.hideOrg = opt1;
                    $scope.hidePlaning = opt2;
                    break;
                case 20:
                    $scope.hidePlaning = opt1;
                    $scope.hideSys = opt2;
                    break;
            }
        }

    }

    var HideShowMen = function (opt1, opt2) {
        switch (countQ) {
            case 21:
                $scope.hideSys = opt1;
                $scope.disablegendermenWai = opt2;
                break;
            case 22:
                $scope.disablegendermenWai = opt1;
                $scope.hideDee = opt2;
                break;
            case 23:
                $scope.hideDee = opt1;
                $scope.hideAct = opt2;
                break;
            case 24:
                $scope.hideAct = opt1;
                $scope.hideMob = opt2;
                break;
            case 25:
                $scope.hideMob = opt1;
                $scope.hideSho = opt2;
                break;
            case 26:
                $scope.hideSho = opt1;
                $scope.hideSpi = opt2;
                break;
            case 27:
                $scope.hideSpi = opt1;
                $scope.hideSpiExt = opt2;
                break;
            case 28:
                $scope.hideSpiExt = opt1;
                $scope.disablegendermenSid = opt2;
                $scope.hideNext = false;
                break;
            case 29:
                $scope.disablegendermenSid = opt1;
                MBCM(opt2);
                $scope.hideNext = false;
                break;
            case 30:
                MBCM(opt1);
                genderMan(opt2);
                $scope.hideNext = false;
                break;
            case 31:
                genderMan(opt1);
                coomen(opt2);
                $scope.hideNext = false;
                break;
        }
    }

    var HideShowWoMen = function (opt1, opt2) {
        switch (countQ) {
            case 21:
                $scope.hideSys = opt1;
                $scope.disablegenderwomenWai = opt2;
                break;
            case 22:
                $scope.disablegenderwomenWai = opt1;
                $scope.hideDee = opt2;
                break;
            case 23:
                $scope.hideDee = opt1;
                $scope.hideAct = opt2;
                break;
            case 24:
                $scope.hideAct = opt1;
                $scope.hideMob = opt2;
                break;
            case 25:
                $scope.hideMob = opt1;
                $scope.hideSho = opt2;
                break;
            case 26:
                $scope.hideSho = opt1;
                $scope.hideSpi = opt2;
                break;
            case 27:
                $scope.hideSpi = opt1;
                $scope.hideSpiExt = opt2;
                break;
            case 28:
                $scope.hideSpiExt = opt1;
                $scope.disablegenderwomenSid = opt2;
                $scope.hideNext = false;
                break;
            case 29:
                $scope.disablegenderwomenSid = opt1;
                MBCW(opt2);
                break;
                $scope.hideNext = false;
            case 30:
                MBCW(opt1);
                $scope.disablegenderwomenMod = opt2;
                break;
            case 31:
                $scope.disablegenderwomenMod = opt1;
                genderWoMan(opt2);
                $scope.hideNext = false;
                break;
            case 32:
                genderWoMan(opt1);
                coowomen(opt2);
                $scope.hideNext = false;
                break;
        }

         
    }

    ///
    /// MBCOO men
    ///

    $scope.gonumMBCOOWpwm1 = function (numMBCOOWpwm1) {
        var index = numMBCOOWpwm1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWpwm1 = numMBCOOWpwm1.substring(0, index);
        }

        numMBCOOWpwm1 = parseFloat(numMBCOOWpwm1);
        

       
        $scope.selectedCooMen1 = $scope.CooMens1[1]

        $scope.selectedCooMen1.value = (
                                               -96.62298 * Math.pow(numMBCOOWpwm1, 3) +
                                              342.04 * Math.pow(numMBCOOWpwm1, 2) -
                                              478.158 * numMBCOOWpwm1 + 236.533
                                             ) | 0;

       
        
        /*
       var mts = numMBCOOWpwm1 * mile;
       
       if (mts >= 800 && 959 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[1]
        }
        else if (mts >= 960 && 1059 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[2]
        }
        else if (mts >= 1060 && 1219 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[3]
        }
        else if (mts >= 1220 && 1379 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[4]
        }
        else if (mts >= 1380 && 1599 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[5]
        }
        else if (mts >= 1600 && 1759 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[6]
        }
        else if (mts >= 1760 && 1919 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[7]
        }
        else if (mts >= 1920 && 2079 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[8]
        }
        else if (mts >= 2080 && 2239 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[9]
        }
        else if (mts >= 2240 && 2399 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[10]
        }
        else if (mts >= 2400 && 2559 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[11]
        }
        else if (mts >= 2560 && 2719 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[12]
        }
        else if (mts >= 2720 && 2879 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[13]
        }
        else if (mts >= 2880 && 3039 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[14]
        }
        else if (mts >= 3040 && 3199 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[15]
        }
        else if (mts >= 3200 && 3359 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[16]
        }
        else if (mts >= 3360 && 3519 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[17]
        }
        else if (mts >= 3520 && 3679 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[18]
        }
        else if (mts >= 3680 && 3839 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[19]
        }
        else if (mts >= 3840) {
            $scope.selectedCooMen1 = $scope.CooMens1[20]
        }
        */

        $scope.numMBCOOWpwm1 = numMBCOOWpwm1 + " miles";

        $scope.goTotal();
    }

    $scope.gonumMBCOOWpwm2 = function (numMBCOOWpwm2) {
        var index = numMBCOOWpwm2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWpwm2 = numMBCOOWpwm2.substring(0, index);
        }

        numMBCOOWpwm2 = parseFloat(numMBCOOWpwm2);



        $scope.selectedCooMen2 = $scope.CooMens2[1]

        $scope.selectedCooMen2.value = (
                                               -99.8281 * Math.pow(numMBCOOWpwm2, 3) +
                                              336.2764 * Math.pow(numMBCOOWpwm2, 2) -
                                              452.967 * numMBCOOWpwm2 + 216.2947
                                             ) | 0;

    


/*
        var mts = numMBCOOWpwm2 * mile;

        if (mts >= 700 && 859 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[1]
        }
        else if (mts >= 860 && 1019 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[2]
        }
        else if (mts >= 1020 && 1179 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[3]
        }
        else if (mts >= 1180 && 1339 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[4]
        }
        else if (mts >= 1340 && 1499 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[5]
        }
        else if (mts >= 1500 && 1659 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[6]
        }
        else if (mts >= 1660 && 1819 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[7]
        }
        else if (mts >= 1820 && 1979 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[8]
        }
        else if (mts >= 1980 && 2139 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[9]
        }
        else if (mts >= 2140 && 2299 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[10]
        }
        else if (mts >= 2300 && 2459 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[11]
        }
        else if (mts >= 2460 && 2619 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[12]
        }
        else if (mts >= 2620 && 2779 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[13]
        }
        else if (mts >= 2780 && 2939 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[14]
        }
        else if (mts >= 2940 && 3099 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[15]
        }
        else if (mts >= 3100 && 3259 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[16]
        }
        else if (mts >= 3260 && 3419 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[17]
        }
        else if (mts >= 3420 && 3579 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[18]
        }
        else if (mts >= 3580 && 3739 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[19]
        }
        else if (mts >= 3740) {
            $scope.selectedCooMen2 = $scope.CooMens2[20]
        }
        */
        $scope.numMBCOOWpwm2 = numMBCOOWpwm2 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWpwm3 = function (numMBCOOWpwm3) {
        var index = numMBCOOWpwm3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWpwm3 = numMBCOOWpwm3.substring(0, index);
        }

        numMBCOOWpwm3 = parseFloat(numMBCOOWpwm3);

        $scope.selectedCooMen3 = $scope.CooMens3[1]

        $scope.selectedCooMen3.value = (
                                               -96.0889 * Math.pow(numMBCOOWpwm3, 3) +
                                              303.2461 * Math.pow(numMBCOOWpwm3, 2) -
                                              396.369 * numMBCOOWpwm3 + 184.5958
                                             ) | 0;

       

        /*
        var mts = numMBCOOWpwm3 * mile;

        if (mts >= 600 && 759 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[1]
        }
        else if (mts >= 760 && 919 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[2]
        }
        else if (mts >= 920 && 1079 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[3]
        }
        else if (mts >= 1080 && 2139 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[4]
        }
        else if (mts >= 1240 && 1399 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[5]
        }
        else if (mts >= 1400 && 1559 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[6]
        }
        else if (mts >= 1560 && 1719 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[7]
        }
        else if (mts >= 1720 && 1879 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[8]
        }
        else if (mts >= 1880 && 2039 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[9]
        }
        else if (mts >= 2040 && 2199 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[10]
        }
        else if (mts >= 2200 && 2359 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[11]
        }
        else if (mts >= 2360 && 2519 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[12]
        }
        else if (mts >= 2520 && 2679 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[13]
        }
        else if (mts >= 2680 && 2839 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[14]
        }
        else if (mts >= 2840 && 2999 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[15]
        }
        else if (mts >= 3000 && 3159 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[16]
        }
        else if (mts >= 3160 && 3319 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[17]
        }
        else if (mts >= 3320 && 3479 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[18]
        }
        else if (mts >= 3480 && 3639 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[19]
        }
        else if (mts >= 3640) {
            $scope.selectedCooMen3 = $scope.CooMens3[20]
        }
        */
        $scope.numMBCOOWpwm3 = numMBCOOWpwm3 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWpwm4 = function (numMBCOOWpwm4) {
        var index = numMBCOOWpwm4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWpwm4 = numMBCOOWpwm4.substring(0, index);
        }

        numMBCOOWpwm4 = parseFloat(numMBCOOWpwm4);


        $scope.selectedCooMen4 = $scope.CooMens4[1]

        $scope.selectedCooMen4.value = (
                                               -95.7836 * Math.pow(numMBCOOWpwm4, 3) +
                                              285.5609 * Math.pow(numMBCOOWpwm4, 2) -
                                              361.86 * numMBCOOWpwm4 + 162.4636
                                             ) | 0;
      
       
/*

        var mts = numMBCOOWpwm4 * mile;

        if (mts >= 500 && 659 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[1]
        }
        else if (mts >= 660 && 819 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[2]
        }
        else if (mts >= 820 && 979 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[3]
        }
        else if (mts >= 980 && 1139 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[4]
        }
        else if (mts >= 1140 && 1299 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[5]
        }
        else if (mts >= 1300 && 1459 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[6]
        }
        else if (mts >= 1460 && 1619 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[7]
        }
        else if (mts >= 1620 && 1779 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[8]
        }
        else if (mts >= 1780 && 1939 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[9]
        }
        else if (mts >= 1940 && 2099 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[10]
        }
        else if (mts >= 2100 && 2259 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[11]
        }
        else if (mts >= 2260 && 2419 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[12]
        }
        else if (mts >= 2420 && 2579 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[13]
        }
        else if (mts >= 2580 && 2739 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[14]
        }
        else if (mts >= 2740 && 2899 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[15]
        }
        else if (mts >= 2900 && 3059 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[16]
        }
        else if (mts >= 2060 && 3219 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[17]
        }
        else if (mts >= 3220 && 3379 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[18]
        }
        else if (mts >= 3380 && 3539 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[19]
        }
        else if (mts >= 3540) {
            $scope.selectedCooMen4 = $scope.CooMens4[20]
        }
        */

        $scope.numMBCOOWpwm4 = numMBCOOWpwm4 + " miles";


        $scope.goTotal();
    }

    ///
    /// MBCOO women
    ///

    $scope.gonumMBCOOWOpwm1 = function (numMBCOOWOpwm1) {
        var index = numMBCOOWOpwm1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWOpwm1 = numMBCOOWOpwm1.substring(0, index);
        }

        numMBCOOWOpwm1 = parseFloat(numMBCOOWOpwm1);


        $scope.selectedCW1 = $scope.CooWomens1[1]

        $scope.selectedCW1.value = (
                                               -99.82807 * Math.pow(numMBCOOWOpwm1, 3) +
                                              336.27641 * Math.pow(numMBCOOWOpwm1, 2) -
                                              452.9674  * numMBCOOWOpwm1 + 216.2947
                                             ) | 0;


        /*
        var mts = numMBCOOWOpwm1 * mile;
        if (mts >= 700 && 859 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[1]
        }
        else if (mts >= 860 && 1019 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[2]
        }
        else if (mts >= 1020 && 1179 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[3]
        }
        else if (mts >= 1180 && 1339 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[4]
        }
        else if (mts >= 1340 && 1499 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[5]
        }
        else if (mts >= 1500 && 1659 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[6]
        }
        else if (mts >= 1660 && 1819 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[7]
        }
        else if (mts >= 1820 && 1979 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[8]
        }
        else if (mts >= 1980 && 2139 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[9]
        }
        else if (mts >= 2140 && 2299 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[10]
        }
        else if (mts >= 2300 && 2459 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[11]
        }
        else if (mts >= 2460 && 2619 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[12]
        }
        else if (mts >= 2620 && 2779 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[13]
        }
        else if (mts >= 2780 && 2939 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[14]
        }
        else if (mts >= 2940 && 3099 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[15]
        }
        else if (mts >= 3100 && 3259 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[16]
        }
        else if (mts >= 3260 && 3419 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[17]
        }
        else if (mts >= 3420 && 3579 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[18]
        }
        else if (mts >= 3580 && 3739 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[19]
        }
        else if (mts >= 3740) {
            $scope.selectedCW1 = $scope.CooWomens1[20]
        }
        */
        $scope.numMBCOOWOpwm1 = numMBCOOWOpwm1 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWOpwm2 = function (numMBCOOWOpwm2) {
        var index = numMBCOOWOpwm2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWOpwm2 = numMBCOOWOpwm2.substring(0, index);
        }

        numMBCOOWOpwm2 = parseFloat(numMBCOOWOpwm2);

        $scope.selectedCW2 = $scope.CooWomens2[1]

        $scope.selectedCW2.value = (
                                               -96.0889 * Math.pow(numMBCOOWOpwm2, 3) +
                                              303.2461 * Math.pow(numMBCOOWOpwm2, 2) -
                                              396.369 * numMBCOOWOpwm2 + 184.5958
                                             ) | 0;

      
/*


        var mts = numMBCOOWOpwm2 * mile;

        if (mts >= 600 && 759 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[1]
        }
        else if (mts >= 760 && 919 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[2]
        }
        else if (mts >= 920 && 1079 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[3]
        }
        else if (mts >= 1080 && 1239 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[4]
        }
        else if (mts >= 1240 && 1399 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[5]
        }
        else if (mts >= 1400 && 1559 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[6]
        }
        else if (mts >= 1560 && 1719 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[7]
        }
        else if (mts >= 1720 && 1879 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[8]
        }
        else if (mts >= 1880 && 2039 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[9]
        }
        else if (mts >= 2040 && 2199 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[10]
        }
        else if (mts >= 2200 && 2359 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[11]
        }
        else if (mts >= 2360 && 2519 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[12]
        }
        else if (mts >= 2520 && 2679 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[13]
        }
        else if (mts >= 2680 && 2839 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[14]
        }
        else if (mts >= 2840 && 2999 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[15]
        }
        else if (mts >= 3000 && 3159 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[16]
        }
        else if (mts >= 3160 && 3319 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[17]
        }
        else if (mts >= 3320 && 3479 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[18]
        }
        else if (mts >= 3480 && 3639 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[19]
        }
        else if (mts >= 3640) {
            $scope.selectedCW2 = $scope.CooWomens2[20]
        }
        */
        $scope.numMBCOOWOpwm2 = numMBCOOWOpwm2 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWOpwm3 = function (numMBCOOWOpwm3) {
        var index = numMBCOOWOpwm3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWOpwm3 = numMBCOOWOpwm3.substring(0, index);
        }

        numMBCOOWOpwm3 = parseFloat(numMBCOOWOpwm3);

        $scope.selectedCW3 = $scope.CooWomens3[1]

        $scope.selectedCW3.value = (
                                             -102.268 * Math.pow(numMBCOOWOpwm3, 3) +
                                            292.9526 * Math.pow(numMBCOOWOpwm3, 2) -
                                            354.825 * numMBCOOWOpwm3 + 149.2205
                                           ) | 0;

        
        /*

        var mts = numMBCOOWOpwm3 * mile;

        if (mts >= 400 && 559 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[1]
        }
        else if (mts >= 560 && 719 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[2]
        }
        else if (mts >= 720 && 879 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[3]
        }
        else if (mts >= 880 && 1039 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[4]
        }
        else if (mts >= 1040 && 1199 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[5]
        }
        else if (mts >= 1200 && 1359 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[6]
        }
        else if (mts >= 1360 && 1519 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[7]
        }
        else if (mts >= 1520 && 1679 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[8]
        }
        else if (mts >= 1680 && 1839 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[9]
        }
        else if (mts >= 1840 && 1999 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[10]
        }
        else if (mts >= 2000 && 2159 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[11]
        }
        else if (mts >= 2160 && 2319 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[12]
        }
        else if (mts >= 2320 && 2479 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[13]
        }
        else if (mts >= 2480 && 2639 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[14]
        }
        else if (mts >= 2640 && 2879 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[15]
        }
        else if (mts >= 2800 && 2959 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[16]
        }
        else if (mts >= 2960 && 3119 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[17]
        }
        else if (mts >= 3120 && 3279 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[18]
        }
        else if (mts >= 3280 && 3439 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[19]
        }
        else if (mts >= 3440) {
            $scope.selectedCW3 = $scope.CooWomens3[20]
        }
        */

        $scope.numMBCOOWOpwm3 = numMBCOOWOpwm3 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWOpwm4 = function (numMBCOOWOpwm4) {
        var index = numMBCOOWOpwm4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWOpwm4 = numMBCOOWOpwm4.substring(0, index);
        }

        numMBCOOWOpwm4 = parseFloat(numMBCOOWOpwm4);


        $scope.selectedCW4 = $scope.CooWomens4[1]

        $scope.selectedCW4.value = (
                                             -98.9177 * Math.pow(numMBCOOWOpwm4, 3) +
                                            255.9385 * Math.pow(numMBCOOWOpwm4, 2) -
                                            298.465 * numMBCOOWOpwm4 + 121.8606
                                           ) | 0;

 
      
/*

        var mts = numMBCOOWOpwm4 * mile;

        if (mts >= 300 && 459 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[1]
        }
        else if (mts >= 460 && 619 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[2]
        }
        else if (mts >= 620 && 779 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[3]
        }
        else if (mts >= 780 && 939 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[4]
        }
        else if (mts >= 940 && 1099 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[5]
        }
        else if (mts >= 1100 && 1259 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[6]
        }
        else if (mts >= 1260 && 1419 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[7]
        }
        else if (mts >= 1420 && 1579 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[8]
        }
        else if (mts >= 1580 && 1739 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[9]
        }
        else if (mts >= 1740 && 1899 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[10]
        }
        else if (mts >= 1900 && 2059 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[11]
        }
        else if (mts >= 2060 && 2219 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[12]
        }
        else if (mts >= 2220 && 2359 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[13]
        }
        else if (mts >= 2360 && 2519 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[14]
        }
        else if (mts >= 2520 && 2679 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[15]
        }
        else if (mts >= 2680 && 2839 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[16]
        }
        else if (mts >= 2840 && 2999 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[17]
        }
        else if (mts >= 3000 && 3159 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[18]
        }
        else if (mts >= 3160 && 3319 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[19]
        }
        else if (mts >= 3320) {
            $scope.selectedCW4 = $scope.CooWomens4[20]
        }
        */
        $scope.numMBCOOWOpwm4 = numMBCOOWOpwm4 + " miles";


        $scope.goTotal();
    }


    ///
    /// MBC men
    ///

    $scope.gonumMBCMpwm1 = function (numMBCMpwm1) {
                var index = numMBCMpwm1.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCMpwm1 = numMBCMpwm1.substring(0, index);
        }

        numMBCMpwm1 = parseFloat(numMBCMpwm1);

       
        $scope.selectedMBMen1 = $scope.PushMBCMgpo1[1]

        $scope.selectedMBMen1.value = (
                                                  -6.365317495 * Math.pow(10, -3) * Math.pow(numMBCMpwm1, 3) +
                                                  3.868797912 * Math.pow(10, -1) * Math.pow(numMBCMpwm1, 2) -
                                                  11.54483308 * numMBCMpwm1 + 116.5852821
                                                 ) | 0;

       

        /*
        if (numMBCMpwm1 >= 0 && 11 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[1]
        }
        else if (numMBCMpwm1 >= 12 && 15 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[2]
        }
        else if (numMBCMpwm1 >= 16 && 18 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[3]
        }
        else if (numMBCMpwm1 >= 19 && 22 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[4]
        }
        else if (numMBCMpwm1 >= 23 && 25 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[5]
        }
        else if (numMBCMpwm1 >= 26 && 28 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[6]
        }
        else if (numMBCMpwm1 >= 29 && 31 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[7]
        }
        else if (numMBCMpwm1 >= 32) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[8]
        }
        */

        $scope.numMBCMpwm1 = numMBCMpwm1 + "\'";

        $scope.goTotal();
    }

    $scope.gonumMBCMpwm2 = function (numMBCMpwm2) {
        var index = numMBCMpwm2.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCMpwm2 = numMBCMpwm2.substring(0, index);
        }

        numMBCMpwm2 = parseFloat(numMBCMpwm2);

        $scope.selectedMBMen2 = $scope.PushMBCMgpo2[1]

        $scope.selectedMBMen2.value = (
                                                   -1.130738264 * Math.pow(10, -2) * Math.pow(numMBCMpwm2, 3) +
                                                  6.003098979 * Math.pow(10, -1) * Math.pow(numMBCMpwm2, 2) -
                                                  14.68385909 * numMBCMpwm2 + 127.3950837
                                                 ) | 0;

       
        /*
        if (numMBCMpwm2 >= 0 && 10 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[1]
        }
        else if (numMBCMpwm2 >= 11 && 14 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[2]
        }
        else if (numMBCMpwm2 >= 15 && 17 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[3]
        }
        else if (numMBCMpwm2 >= 18 && 20 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[4]
        }
        else if (numMBCMpwm2 >= 21 && 23 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[5]
        }
        else if (numMBCMpwm2 >= 24 && 25 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[6]
        }
        else if (numMBCMpwm2 >= 26 && 28 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[7]
        }
        else if (numMBCMpwm2 >= 29) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[8]
        }
        */

        $scope.numMBCMpwm2 = numMBCMpwm2 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCMpwm3 = function (numMBCMpwm3) {
        var index = numMBCMpwm3.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCMpwm3 = numMBCMpwm3.substring(0, index);
        }

        numMBCMpwm3 = parseFloat(numMBCMpwm3);

        $scope.selectedMBMen3 = $scope.PushMBCMgpo3[1]

        $scope.selectedMBMen3.value = (
                                                   -1.887821423 * Math.pow(10, -2) * Math.pow(numMBCMpwm3, 3) +
                                                  1.045900097 * Math.pow(numMBCMpwm3, 2) -
                                                  23.88870795 * numMBCMpwm3 + 176.7076887
                                                 ) | 0;

      

        /*

        if (numMBCMpwm3 >= 0 && 9 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[1]
        }
        else if (numMBCMpwm3 >= 10 && 12 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[2]
        }
        else if (numMBCMpwm3 >= 13 && 14 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[3]
        }
        else if (numMBCMpwm3 >= 15 && 16 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[4]
        }
        else if (numMBCMpwm3 >= 17 && 19 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[5]
        }
        else if (numMBCMpwm3 >= 20 && 22 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[6]
        }
        else if (numMBCMpwm3 >= 23 && 25 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[7]
        }
        else if (numMBCMpwm3 >= 26) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[8]
        }
        */

        $scope.numMBCMpwm3 = numMBCMpwm3 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCMpwm4 = function (numMBCMpwm4) {
        var index = numMBCMpwm4.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCMpwm4 = numMBCMpwm4.substring(0, index);
        }

        numMBCMpwm4 = parseFloat(numMBCMpwm4);

        $scope.selectedMBMen4 = $scope.PushMBCMgpo4[1]

        $scope.selectedMBMen4.value = (
                                                   -8.425432182 * Math.pow(10, -3) * Math.pow(numMBCMpwm4, 3) +
                                                  4.024221876 * Math.pow(10, -1) * Math.pow(numMBCMpwm4, 2) -
                                                  12.62289126 * numMBCMpwm4 + 110.3330702
                                                 ) | 0;

       
/*

        if (numMBCMpwm4 >= 0 && 8 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[1]
        }
        else if (numMBCMpwm4 >= 9 && 11 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[2]
        }
        else if (numMBCMpwm4 >= 12 && 13 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[3]
        }
        else if (numMBCMpwm4 >= 14 && 15 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[4]
        }
        else if (numMBCMpwm4 >= 16 && 17 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[5]
        }
        else if (numMBCMpwm4 >= 18 && 19 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[6]
        }
        else if (numMBCMpwm4 >= 20 && 22 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[7]
        }
        else if (numMBCMpwm4 >= 23) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[8]
        }
        */

        $scope.numMBCMpwm4 = numMBCMpwm4 + "\'";


        $scope.goTotal();
    }

    ///
    /// MBC WOMEN
    ///

    $scope.gonumMBCWpwm1 = function (numMBCWpwm1) {
        var index = numMBCWpwm1.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCWpwm1 = numMBCWpwm1.substring(0, index);
        }

        numMBCWpwm1 = parseFloat(numMBCWpwm1);

        $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[1]

        $scope.selectedMBWOMen1.value = (
                                                   -1.782786804 * Math.pow(10, -2) * Math.pow(numMBCWpwm1, 3) +
                                                  8.868573055 * Math.pow(10, -1) * Math.pow(numMBCWpwm1, 2) -
                                                  18.04627377 * numMBCWpwm1 + 132.8211454
                                                 ) | 0;

        
/*

        if (numMBCWpwm1 >= 0 && 9 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[1]
        }
        else if (numMBCWpwm1 >= 10 && 13 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[2]
        }
        else if (numMBCWpwm1 >= 14 && 17 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[3]
        }
        else if (numMBCWpwm1 >= 18 && 20 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[4]
        }
        else if (numMBCWpwm1 >= 21 && 23 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[5]
        }
        else if (numMBCWpwm1 >= 24 && 25 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[6]
        }
        else if (numMBCWpwm1 >= 26 && 27 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[7]
        }
        else if (numMBCWpwm1 >= 28) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[8]
        }
        */

        $scope.numMBCWpwm1 = numMBCWpwm1 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCWpwm2 = function (numMBCWpwm2) {
        var index = numMBCWpwm2.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCWpwm2 = numMBCWpwm2.substring(0, index);
        }

        numMBCWpwm2 = parseFloat(numMBCWpwm2);


        $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[1]

        $scope.selectedMBWOMen2.value = (
                                                   -2.770786098 * Math.pow(10, -2) * Math.pow(numMBCWpwm2, 3) +
                                                  1.347470981 * Math.pow(numMBCWpwm2, 2) -
                                                  26.20906565 * numMBCWpwm2 + 158.1740597
                                                 ) | 0;

        /*

        if (numMBCWpwm2 >= 0 && 7 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[1]
        }
        else if (numMBCWpwm2 >= 8 && 9 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[2]
        }
        else if (numMBCWpwm2 >= 10 && 11 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[3]
        }
        else if (numMBCWpwm2 >= 12 && 13 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[4]
        }
        else if (numMBCWpwm2 >= 14 && 16 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[5]
        }
        else if (numMBCWpwm2 >= 17 && 19 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[6]
        }
        else if (numMBCWpwm2 >= 20 && 22 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[7]
        }
        else if (numMBCWpwm2 >= 23) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[8]
        }
        */
        $scope.numMBCWpwm2 = numMBCWpwm2 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCWpwm3 = function (numMBCWpwm3) {
        var index = numMBCWpwm3.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCWpwm3 = numMBCWpwm3.substring(0, index);
        }

        numMBCWpwm3 = parseFloat(numMBCWpwm3);

        $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[1]

        $scope.selectedMBWOMen3.value = (
                                                   -8.425432182 * Math.pow(10, -3) * Math.pow(numMBCWpwm3, 3) +
                                                  3.518695945 * Math.pow(10, -1) * Math.pow(numMBCWpwm3, 2) -
                                                  11.1143077 * numMBCWpwm3 + 86.629573
                                                 ) | 0;

       

        /*

        if (numMBCWpwm3 >= 0 && 6 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[1]
        }
        else if (numMBCWpwm3 >= 7 && 9 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[2]
        }
        else if (numMBCWpwm3 >= 10 && 11 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[3]
        }
        else if (numMBCWpwm3 >= 12 && 13 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[4]
        }
        else if (numMBCWpwm3 >= 14 && 15 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[5]
        }
        else if (numMBCWpwm3 >= 16 && 17 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[6]
        }
        else if (numMBCWpwm3 >= 18 && 20 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[7]
        }
        else if (numMBCWpwm3 >= 21) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[8]
        }
        */
        $scope.numMBCWpwm3 = numMBCWpwm3 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCWpwm4 = function (numMBCWpwm4) {
        var index = numMBCWpwm4.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCWpwm4 = numMBCWpwm4.substring(0, index);
        }

        numMBCWpwm4 = parseFloat(numMBCWpwm4);

        $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[1]

        $scope.selectedMBWOMen4.value = (
                                                  -2.562228992 * Math.pow(10, -2) * Math.pow(numMBCWpwm4, 3) +
                                                 9.032450705 * Math.pow(10, -1) * Math.pow(numMBCWpwm4, 2) -
                                                 17.08775733 * numMBCWpwm4 + 95.84888071
                                                ) | 0;

        /*
        if (numMBCWpwm4 >= 0 && 5 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[1]
        }
        else if (numMBCWpwm4 >= 6 && 7 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[2]
        }
        else if (numMBCWpwm4 >= 8 && 9 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[3]
        }
        else if (numMBCWpwm4 >= 10 && 11 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[4]
        }
        else if (numMBCWpwm4 >= 12 && 13 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[5]
        }
        else if (numMBCWpwm4 >= 14 && 15 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[6]
        }
        else if (numMBCWpwm4 >= 16 && 17 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[7]
        }
        else if (numMBCWpwm4 >= 18) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[8]
        }
        */

        $scope.numMBCWpwm4 = numMBCWpwm4 + "\'";


        $scope.goTotal();
    }

    ///
    /// men push
    ///

    $scope.gonumnpmen1 = function (numnpmen1) {
        var index = numnpmen1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen1 = numnpmen1.substring(0, index);
        }

        $scope.selectedPusMen1 = $scope.PusMens1[1]

        $scope.selectedPusMen1.value = (
                                                   -7.119185006 * Math.pow(10, -4) * Math.pow(numnpmen1, 3) +
                                                 0.051070354 * Math.pow(numnpmen1, 2) -
                                                 2.205830682 * numnpmen1 + 35.66748449
                                                ) | 0;
       
/*

        if (numnpmen1 >= 0 && 7 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[1]
        }
        else if (numnpmen1 >= 8 && 12 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[2]
        }
        else if (numnpmen1 >= 13 && 19 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[3]
        }
        else if (numnpmen1 >= 20 && 27 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[4]
        }
        else if (numnpmen1 >= 28 && 34 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[5]
        }
        else if (numnpmen1 >= 35 && 39 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[6]
        }
        else if (numnpmen1 >= 40 && 44 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[7]
        }
        else if (numnpmen1 >= 45 && 49 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[8]
        }
        else if (numnpmen1 >= 50 && 54 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[9]
        }
        else if (numnpmen1 >= 55) {
            $scope.selectedPusMen1 = $scope.PusMens1[10]
        }
        */

        $scope.numnpmen1 = numnpmen1 + " Push Ups ";

        $scope.goTotal();

    }

    $scope.gonumnpmen2 = function (numnpmen2) {
        var index = numnpmen2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen2 = numnpmen2.substring(0, index);
        }

        $scope.selectedPusMen2 = $scope.PusMens2[1]

        $scope.selectedPusMen2.value = (
                                                -9.592122551 * Math.pow(10, -4) * Math.pow(numnpmen2, 3) +
                                               0.05608089 * Math.pow(numnpmen2, 2) -
                                               2.441589573 * numnpmen2 + 32.45420853
                                              ) | 0;

        
        
        /*

        if (numnpmen2 >= 0 && 4 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[1]
        }
        else if (numnpmen2 >= 5 && 9 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[2]
        }
        else if (numnpmen2 >= 10 && 14 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[3]
        }
        else if (numnpmen2 >= 15 && 19 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[4]
        }
        else if (numnpmen2 >= 20 && 24 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[5]
        }
        else if (numnpmen2 >= 25 && 29 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[6]
        }
        else if (numnpmen2 >= 30 && 34 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[7]
        }
        else if (numnpmen2 >= 35 && 39 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[8]
        }
        else if (numnpmen2 >= 40 && 44 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[9]
        }
        else if (numnpmen2 >= 45) {
            $scope.selectedPusMen2 = $scope.PusMens2[10]
        }
        */
        $scope.numnpmen2 = numnpmen2 + " Push Ups ";

        $scope.goTotal();
    }

    $scope.gonumnpmen3 = function (numnpmen3) {
        var index = numnpmen3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen3 = numnpmen3.substring(0, index);
        }

        $scope.selectedPusMen3 = $scope.PusMens3[1]

        $scope.selectedPusMen3.value = (
                                                -1.151539958 * Math.pow(10, -3) * Math.pow(numnpmen3, 3) +
                                               6.560268089 * Math.pow(10, -2) * Math.pow(numnpmen3, 2) -
                                               2.868028793 * numnpmen3 + 32.23255037
                                              ) | 0;

        
        
/*

        if (numnpmen3 >= 0 && 3 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[1]
        }
        else if (numnpmen3 >= 4 && 8 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[2]
        }
        else if (numnpmen3 >= 9 && 11 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[3]
        }
        else if (numnpmen3 >= 12 && 15 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[4]
        }
        else if (numnpmen3 >= 16 && 19 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[5]
        }
        else if (numnpmen3 >= 20 && 24 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[6]
        }
        else if (numnpmen3 >= 25 && 29 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[7]
        }
        else if (numnpmen3 >= 30 && 34 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[8]
        }
        else if (numnpmen3 >= 35 && 39 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[9]
        }
        else if (numnpmen3 >= 40) {
            $scope.selectedPusMen3 = $scope.PusMens3[10]
        }
        */
        $scope.numnpmen3 = numnpmen3 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpmen4 = function (numnpmen4) {
        var index = numnpmen4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen4 = numnpmen4.substring(0, index);
        }

        $scope.selectedPusMen4 = $scope.PusMens4[1]

        $scope.selectedPusMen4.value = (
                                                -2.120838249 * Math.pow(10, -3) * Math.pow(numnpmen4, 3) +
                                               1.206231463 * Math.pow(10, -1) * Math.pow(numnpmen4, 2) -
                                               3.945869396 * numnpmen4 + 30.42194607
                                              ) | 0;

     
        /*
        if (numnpmen4 >= 0 && 2 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[1]
        }
        else if (numnpmen4 >= 3 && 5 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[2]
        }
        else if (numnpmen4 >= 6 && 7 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[3]
        }
        else if (numnpmen4 >= 8 && 10 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[4]
        }
        else if (numnpmen4 >= 11 && 14 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[5]
        }
        else if (numnpmen4 >= 15 && 19 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[6]
        }
        else if (numnpmen4 >= 20 && 24 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[7]
        }
        else if (numnpmen4 >= 25 && 29 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[8]
        }
        else if (numnpmen4 >= 30 && 34 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[9]
        }
        else if (numnpmen4 >= 35) {
            $scope.selectedPusMen4 = $scope.PusMens4[10]
        }
        */
        $scope.numnpmen4 = numnpmen4 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpmen5 = function (numnpmen5) {
        var index = numnpmen5.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen5 = numnpmen5.substring(0, index);
        }

        $scope.selectedPusMen5 = $scope.PusMens5[1]

        $scope.selectedPusMen5.value = (
                                               -3.473410639 * Math.pow(10, -3) * Math.pow(numnpmen5, 3) +
                                              1.826369247 * Math.pow(10, -1) * Math.pow(numnpmen5, 2) -
                                              4.923381129 * numnpmen5 + 26.60868519
                                             ) | 0;

  
        /*
        if (numnpmen5 >= 0 && 1 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[1]
        }
        else if (numnpmen5 >= 2 && 3 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[2]
        }
        else if (numnpmen5 >= 4 && 4 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[3]
        }
        else if (numnpmen5 >= 5 && 7 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[4]
        }
        else if (numnpmen5 >= 8 && 9 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[5]
        }
        else if (numnpmen5 >= 10 && 14 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[6]
        }
        else if (numnpmen5 >= 15 && 19 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[7]
        }
        else if (numnpmen5 >= 20 && 24 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[8]
        }
        else if (numnpmen5 >= 25 && 29 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[9]
        }
        else if (numnpmen5 >= 30) {
            $scope.selectedPusMen5 = $scope.PusMens5[10]
        }
        */
        $scope.numnpmen5 = numnpmen5 + " Push Ups ";


        $scope.goTotal();
    }



    ///
    /// woman push
    ///

    $scope.gonumnpwm1 = function (numnpwm1) {
        var index = numnpwm1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm1 = numnpwm1.substring(0, index);
        }

        $scope.selectedNPWM1 = $scope.PushNWomengpo1[1]

        $scope.selectedNPWM1.value = (
                                                  -1.976947341 * Math.pow(10, -3) * Math.pow(numnpwm1, 3) +
                                                 1.277894432 * Math.pow(10, -1) * Math.pow(numnpwm1, 2) -
                                                 4.166779759 * numnpwm1 + 27.94269382
                                                ) | 0;



        /*

        if (numnpwm1 >= 0 && 1 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[1]
        }
        else if (numnpwm1 >= 2 && 4 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[2]
        }
        else if (numnpwm1 >= 5 && 6 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[3]
        }
        else if (numnpwm1 >= 7 && 9 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[4]
        }
        else if (numnpwm1 >= 10 && 11 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[5]
        }
        else if (numnpwm1 >= 12 && 17 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[6]
        }
        else if (numnpwm1 >= 18 && 22 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[7]
        }
        else if (numnpwm1 >= 23 && 30 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[8]
        }
        else if (numnpwm1 >= 31 && 36 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[9]
        }
        else if (numnpwm1 >= 37) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[10]
        }
        */
        $scope.numnpwm1 = numnpwm1 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpwm2 = function (numnpwm2) {
        var index = numnpwm2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm2 = numnpwm2.substring(0, index);
        }

        $scope.selectedNPWM2 = $scope.PushNWomengpo2[1]

        $scope.selectedNPWM2.value = (
                                                -2.842649549 * Math.pow(10, -3) * Math.pow(numnpwm2, 3) +
                                               1.807813034 * Math.pow(10, -1) * Math.pow(numnpwm2, 2) -
                                               4.913622627 * numnpwm2 + 26.51792115
                                              ) | 0;

        /*
        if (numnpwm2 >= 0 && 1 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[1]
        }
        else if (numnpwm2 >= 2 && 3 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[2]
        }
        else if (numnpwm2 >= 4 && 4 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[3]
        }
        else if (numnpwm2 >= 5 && 7 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[4]
        }
        else if (numnpwm2 >= 8 && 9 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[5]
        }
        else if (numnpwm2 >= 10 && 16 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[6]
        }
        else if (numnpwm2 >= 17 && 21 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[7]
        }
        else if (numnpwm2 >= 22 && 29 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[8]
        }
        else if (numnpwm2 >= 30 && 37 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[9]
        }
        else if (numnpwm2 >= 38) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[10]
        }
        */
        $scope.numnpwm2 = numnpwm2 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpwm3 = function (numnpwm3) {
        var index = numnpwm3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm3 = numnpwm3.substring(0, index);
        }

        $scope.selectedNPWM3 = $scope.PushNWomengpo3[1]

        $scope.selectedNPWM3.value = (
                                                -3.060429216 * Math.pow(10, -3) * Math.pow(numnpwm3, 3) +
                                               1.839470073 * Math.pow(10, -1) * Math.pow(numnpwm3, 2) -
                                               4.985357305 * numnpwm3 + 22.08351343
                                              ) | 0;


        /*

        if (numnpwm3 >= 0 && 0 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[1]
        }
        else if (numnpwm3 >= 1 && 2 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[2]
        }
        else if (numnpwm3 >= 3 && 3 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[3]
        }
        else if (numnpwm3 >= 4 && 5 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[4]
        }
        else if (numnpwm3 >= 6 && 7 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[5]
        }
        else if (numnpwm3 >= 8 && 12 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[6]
        }
        else if (numnpwm3 >= 13 && 17 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[7]
        }
        else if (numnpwm3 >= 18 && 25 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[8]
        }
        else if (numnpwm3 >= 26 && 31 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[9]
        }
        else if (numnpwm3 >= 32) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[10]
        }
        */
        $scope.numnpwm3 = numnpwm3 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpwm4 = function (numnpwm4) {

        var index = numnpwm4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm4 = numnpwm4.substring(0, index);
        }

        $scope.selectedNPWM4 = $scope.PushNWomengpo4[1]

        $scope.selectedNPWM4.value = (
                                                -4.013207902 * Math.pow(10, -3) * Math.pow(numnpwm4, 3) +
                                               0.20504116 * Math.pow(numnpwm4, 2) -
                                               5.25546528 * numnpwm4 + 19.58822664
                                              ) | 0;

        /*
        if (numnpwm4 >= 0 && 0 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[1]
        }
        else if (numnpwm4 >= 1 && 1 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[2]
        }
        else if (numnpwm4 >= 2 && 2 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[3]
        }
        else if (numnpwm4 >= 3 && 4 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[4]
        }
        else if (numnpwm4 >= 5 && 6 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[5]
        }
        else if (numnpwm4 >= 7 && 10 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[6]
        }
        else if (numnpwm4 >= 11 && 14 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[7]
        }
        else if (numnpwm4 >= 15 && 20 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[8]
        }
        else if (numnpwm4 >= 21 && 25 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[9]
        }
        else if (numnpwm4 >= 26) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[10]
        }
        */
        $scope.numnpwm4 = numnpwm4 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpwm5 = function (numnpwm5) {
        var index = numnpwm5.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm5 = numnpwm5.substring(0, index);
        }

        $scope.selectedNPWM5 = $scope.PushNWomengpo5[1]

        $scope.selectedNPWM5.value = (
                                               -1.368096129 * Math.pow(10, -2) * Math.pow(numnpwm5, 3) +
                                              4.504165031 * Math.pow(10, -1) * Math.pow(numnpwm5, 2) -
                                              6.433534477 * numnpwm5 + 21.55788659
                                             ) | 0;

/*
        if (numnpwm5 >= 0 && 0 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[1]
        }
        else if (numnpwm5 >= 1 && 1 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[2]
        }
        else if (numnpwm5 >= 2 && 3 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[3]
        }
        else if (numnpwm5 >= 4 && 4 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[4]
        }
        else if (numnpwm5 >= 5 && 8 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[5]
        }
        else if (numnpwm5 >= 9 && 12 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[6]
        }
        else if (numnpwm5 >= 13 && 16 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[7]
        }
        else if (numnpwm5 >= 17 && 20 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[8]
        }
        else if (numnpwm5 >= 21 && 23 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[9]
        }
        else if (numnpwm5 >= 24) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[10]
        }
        */
        $scope.numnpwm5 = numnpwm5 + " Push Ups ";


        $scope.goTotal();
    }

    ///
    /// Modified women push
    ///

    $scope.gonumpwm1 = function (numpwm1) {

        var index = numpwm1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm1 = numpwm1.substring(0, index);
        }

        $scope.selectedPWM1 = $scope.PushWomengpo1[1]

        $scope.selectedPWM1.value = (
                                               -2.765169752 * Math.pow(10, -3) * Math.pow(numpwm1, 3) +
                                              1.687918905 * Math.pow(10, -1) * Math.pow(numpwm1, 2) -
                                              4.046430035 * numpwm1 + 25.36594402
                                             ) | 0;

        
/*
        if (numpwm1 >= 0 && 1 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[1]
        }
        else if (numpwm1 >= 2 && 3 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[2]
        }
        else if (numpwm1 >= 4 && 5 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[3]
        }
        else if (numpwm1 >= 6 && 10 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[4]
        }
        else if (numpwm1 >= 11 && 16 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[5]
        }
        else if (numpwm1 >= 17 && 24 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[6]
        }
        else if (numpwm1 >= 25 && 33 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[7]
        }
        else if (numpwm1 >= 34 && 38 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[8]
        }
        else if (numpwm1 >= 39 && 41 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[9]
        }
        else if (numpwm1 >= 42) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[10]
        }
        */
        $scope.numpwm1 = numpwm1 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumpwm2 = function (numpwm2) {
        var index = numpwm2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm2 = numpwm2.substring(0, index);
        }


        $scope.selectedPWM2 = $scope.PushWomengpo2[1]

        $scope.selectedPWM2.value = (
                                               -1.64436503 * Math.pow(10, -3) * Math.pow(numpwm2, 3) +
                                              1.009129199 * Math.pow(10, -1) * Math.pow(numpwm2, 2) -
                                              3.217181295 * numpwm2 + 19.09754563
                                             ) | 0;

       
/*

        if (numpwm2 >= 0 && 0 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[1]
        }
        else if (numpwm2 >= 1 && 1 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[2]
        }
        else if (numpwm2 >= 2 && 3 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[3]
        }
        else if (numpwm2 >= 4 && 8 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[4]
        }
        else if (numpwm2 >= 9 && 11 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[5]
        }
        else if (numpwm2 >= 12 && 18 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[6]
        }
        else if (numpwm2 >= 19 && 24 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[7]
        }
        else if (numpwm2 >= 25 && 32 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[8]
        }
        else if (numpwm2 >= 33 && 39 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[9]
        }
        else if (numpwm2 >= 40) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[10]
        }
        */

        $scope.numpwm2 = numpwm2 + " Push Ups ";

        $scope.goTotal();
    }

    $scope.gonumpwm3 = function (numpwm3) {

        var index = numpwm3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm3 = numpwm3.substring(0, index);
        }

        $scope.selectedPWM3 = $scope.PushWomengpo3[1]

        $scope.selectedPWM3.value = (
                                               -3.540916008 * Math.pow(10, -3) * Math.pow(numpwm3, 3) +
                                              1.950940576 * Math.pow(10, -1) * Math.pow(numpwm3, 2) -
                                              4.655319724 * numpwm3 + 19.16064832
                                             ) | 0;

      

/*
        if (numpwm3 >= 0 && 0 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[1]
        }
        else if (numpwm3 >= 1 && 1 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[2]
        }
        else if (numpwm3 >= 2 && 2 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[3]
        }
        else if (numpwm3 >= 3 && 5 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[4]
        }
        else if (numpwm3 >= 6 && 7 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[5]
        }
        else if (numpwm3 >= 8 && 14 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[6]
        }
        else if (numpwm3 >= 15 && 19 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[7]
        }
        else if (numpwm3 >= 20 && 27 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[8]
        }
        else if (numpwm3 >= 28 && 33 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[9]
        }
        else if (numpwm3 >= 34) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[10]
        }
        */
        $scope.numpwm3 = numpwm3 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumpwm4 = function (numpwm4) {
        var index = numpwm4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm4 = numpwm4.substring(0, index);
        }

        $scope.selectedPWM4 = $scope.PushWomengpo4[1]

        $scope.selectedPWM4.value = (
                                               -3.690231759 * Math.pow(10, -3) * Math.pow(numpwm4, 3) +
                                              1.685059521 * Math.pow(10, -1) * Math.pow(numpwm4, 2) -
                                              4.14004635 * numpwm4 + 19.58856752
                                             ) | 0;

       

        /*


        if (numpwm4 >= 0 && 0 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[1]
        }
        else if (numpwm4 >= 1 && 1 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[2]
        }
        else if (numpwm4 >= 2 && 3 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[3]
        }
        else if (numpwm4 >= 4 && 5 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[4]
        }
        else if (numpwm4 >= 6 && 10 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[5]
        }
        else if (numpwm4 >= 11 && 14 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[6]
        }
        else if (numpwm4 >= 15 && 19 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[7]
        }
        else if (numpwm4 >= 20 && 24 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[8]
        }
        else if (numpwm4 >= 25 && 29 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[9]
        }
        else if (numpwm4 >= 30) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[10]
        }
        */
        $scope.numpwm4 = numpwm4 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumpwm5 = function (numpwm5) {
        var index = numpwm5.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm5 = numpwm5.substring(0, index);
        }

        $scope.selectedPWM5 = $scope.PushWomengpo5[1]

        $scope.selectedPWM5.value = (
                                               -1.808906169 * Math.pow(10, -2) * Math.pow(numpwm5, 3) +
                                              5.963106591 * Math.pow(10, -1) * Math.pow(numpwm5, 2) -
                                              8.508173707 * numpwm5 + 21.88364433
                                             ) | 0;

      

/*

        if (numpwm5 >= 0 && 0 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[1]
        }
        else if (numpwm5 >= 1 && 1 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[2]
        }
        else if (numpwm5 >= 2 && 2 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[3]
        }
        else if (numpwm5 >= 3 && 3 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[4]
        }
        else if (numpwm5 >= 4 && 4 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[5]
        }
        else if (numpwm5 >= 5 && 8 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[6]
        }
        else if (numpwm5 >= 9 && 12 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[7]
        }
        else if (numpwm5 >= 13 && 15 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[8]
        }
        else if (numpwm5 >= 16 && 19 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[9]
        }
        else if (numpwm5 >= 20) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[10]
        }
        */
        $scope.numpwm5 = numpwm5 + " Push Ups ";


        $scope.goTotal();
    }

    var goGender = function () {


        if ($scope.selectedGender.id == 0) {
            totalQ = 31;

            if ($rootScope.phoneDevice < 0) {
                $scope.disablegendermen = false;
                $scope.disablegendermenWai = false;
                $scope.disablegendermenWai2 = false;
                $scope.disablegendermenSid = false;
            }

            $scope.disablegenderwomen = true;
            $scope.disablegenderwomenWai = true;
            $scope.disablegenderwomenWai2 = true;
            $scope.disablegenderwomenSid = true;
            $scope.disablegenderwomenMod = true;

            $scope.selectedWaiWomen = $scope.WaiWomens[0];

            $scope.selectedSidWomen = $scope.SidWomens[0];

            $scope.selectedPusWomen = $scope.PusWomens[5];

            $scope.selectedMBWomen = $scope.MBWomens[3];

            $scope.selectedCooWomen = $scope.CooWomens[5];

            if (flagcontinue) {
                $scope.selectedWaiMen = $scope.WaiMens[0];
                $scope.selectedSidMen = $scope.SidMens[0];
                $scope.selectedPusMen = $scope.PusMens[5];
                $scope.selectedMBMen = $scope.MBMens[3];
                $scope.selectedCooMen = $scope.CooMens[5];
            }


        }
        else {
            totalQ = 32;

            $scope.disablegendermen = true;
            $scope.disablegendermenWai = true;
            $scope.disablegendermenWai2 = true;
            $scope.disablegendermenSid = true;

            if ($rootScope.phoneDevice < 0) {
                $scope.disablegenderwomen = false;
                $scope.disablegenderwomenWai = false;
                $scope.disablegenderwomenWai2 = false;
                $scope.disablegenderwomenSid = false;
                $scope.disablegenderwomenMod = false;
            }

            $scope.selectedWaiMen = $scope.WaiMens[0];

            $scope.selectedSidMen = $scope.SidMens[0];

            $scope.selectedPusMen = $scope.PusMens[5];

            $scope.selectedMBMen = $scope.MBMens[3];

            $scope.selectedCooMen = $scope.CooMens[5];

            if (flagcontinue) {
                $scope.selectedWaiWomen = $scope.WaiWomens[0];
                $scope.selectedSidWomen = $scope.SidWomens[0];
                $scope.selectedPusWomen = $scope.PusWomens[5];
                $scope.selectedMBWomen = $scope.MBWomens[3];
                $scope.selectedCooWomen = $scope.CooWomens[5];
            }
        }

        if (flagcontinue) {
            $scope.selectedPusWomenModified = $scope.PusWomenModifieds[0];
        }

        goModified();

        putCounter();

        flagcontinue = true;


        /*
        $scope.disablegendermod1women = true;
        $scope.disablegendermod2women = true;
        $scope.disablegendermod3women = true;
        $scope.disablegendermod4women = true;
        $scope.disablegendermod5women = true;
      
        $scope.selectedPWM1 = $scope.PushWomengpo1[0];
        $scope.selectedPWM2 = $scope.PushWomengpo2[0];
        $scope.selectedPWM3 = $scope.PushWomengpo3[0];
        $scope.selectedPWM4 = $scope.PushWomengpo4[0];
        $scope.selectedPWM5 = $scope.PushWomengpo5[0];
       */

        //$scope.goTotal();
    }

    var goModified = function () {

        if (flagcontinue) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[1];
            $scope.selectedMBMen1.value = 0;
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[1];
            $scope.selectedMBMen2.value = 0;
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[1];
            $scope.selectedMBMen3.value = 0;
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[1];
            $scope.selectedMBMen4.value = 0;

            $scope.numMBCMpwm1 = "0.00" + "\'";
            $scope.numMBCMpwm2 = "0.00" + "\'";
            $scope.numMBCMpwm3 = "0.00" + "\'";
            $scope.numMBCMpwm4 = "0.00" + "\'";

            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[1];
            $scope.selectedMBWOMen1.value = 0;
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[1];
            $scope.selectedMBWOMen2.value = 0;
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[1];
            $scope.selectedMBWOMen3.value = 0;
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[1];
            $scope.selectedMBWOMen4.value = 0;

            $scope.numMBCWpwm1 = "0.00" + "\'";
            $scope.numMBCWpwm2 = "0.00" + "\'";
            $scope.numMBCWpwm3 = "0.00" + "\'";
            $scope.numMBCWpwm4 = "0.00" + "\'";

            $scope.selectedCooMen1 = $scope.CooMens1[1];
            $scope.selectedCooMen1.value = 0;
            $scope.selectedCooMen2 = $scope.CooMens2[1];
            $scope.selectedCooMen2.value = 0;
            $scope.selectedCooMen3 = $scope.CooMens3[1];
            $scope.selectedCooMen3.value = 0;
            $scope.selectedCooMen4 = $scope.CooMens4[1];
            $scope.selectedCooMen4.value = 0;

            $scope.numMBCOOWpwm1 = 0 + " miles";
            $scope.numMBCOOWpwm2 = 0 + " miles";
            $scope.numMBCOOWpwm3 = 0 + " miles";
            $scope.numMBCOOWpwm4 = 0 + " miles";

            $scope.selectedCW1 = $scope.CooWomens1[1];
            $scope.selectedCW1.value = 0;
            $scope.selectedCW2 = $scope.CooWomens2[1];
            $scope.selectedCW2.value = 0;
            $scope.selectedCW3 = $scope.CooWomens3[1];
            $scope.selectedCW3.value = 0;
            $scope.selectedCW4 = $scope.CooWomens4[1];
            $scope.selectedCW4.value = 0;

            $scope.numMBCOOWOpwm1 = 0 + " miles";
            $scope.numMBCOOWOpwm2 = 0 + " miles";
            $scope.numMBCOOWOpwm3 = 0 + " miles";
            $scope.numMBCOOWOpwm4 = 0 + " miles";

            $scope.selectedPusMen1 = $scope.PusMens1[1];
            $scope.selectedPusMen1.value = 0;
            $scope.selectedPusMen2 = $scope.PusMens2[1];
            $scope.selectedPusMen2.value = 0;
            $scope.selectedPusMen3 = $scope.PusMens3[1];
            $scope.selectedPusMen3.value = 0;
            $scope.selectedPusMen4 = $scope.PusMens4[1];
            $scope.selectedPusMen4.value = 0;
            $scope.selectedPusMen5 = $scope.PusMens5[1];
            $scope.selectedPusMen5.value = 0;

            $scope.numnpmen1 = 0 + " Push Ups ";
            $scope.numnpmen2 = 0 + " Push Ups ";
            $scope.numnpmen3 = 0 + " Push Ups ";
            $scope.numnpmen4 = 0 + " Push Ups ";
            $scope.numnpmen5 = 0 + " Push Ups ";

            changeModifiedWomanPush();

            calcData();

        }
        statusFields();
    }

    var changeModifiedWomanPush = function () {
        if (flagcontinue) {
            if (!flagModified) {
                $scope.selectedNPWM1 = $scope.PushNWomengpo1[1];
                $scope.selectedNPWM1.value = 0;
                $scope.selectedNPWM2 = $scope.PushNWomengpo2[1];
                $scope.selectedNPWM2.value = 0;
                $scope.selectedNPWM3 = $scope.PushNWomengpo3[1];
                $scope.selectedNPWM3.value = 0;
                $scope.selectedNPWM4 = $scope.PushNWomengpo4[1];
                $scope.selectedNPWM4.value = 0;
                $scope.selectedNPWM5 = $scope.PushNWomengpo5[1];
                $scope.selectedNPWM5.value = 0;

                $scope.numnpwm1 = 0 + " Push Ups ";
                $scope.numnpwm2 = 0 + " Push Ups ";
                $scope.numnpwm3 = 0 + " Push Ups ";
                $scope.numnpwm4 = 0 + " Push Ups ";
                $scope.numnpwm5 = 0 + " Push Ups ";


                $scope.selectedPWM1 = $scope.PushWomengpo1[1];
                $scope.selectedPWM1.value = 0;
                $scope.selectedPWM2 = $scope.PushWomengpo2[1];
                $scope.selectedPWM2.value = 0;
                $scope.selectedPWM3 = $scope.PushWomengpo3[1];
                $scope.selectedPWM3.value = 0;
                $scope.selectedPWM4 = $scope.PushWomengpo4[1];
                $scope.selectedPWM4.value = 0;
                $scope.selectedPWM5 = $scope.PushWomengpo5[1];
                $scope.selectedPWM5.value = 0;

                $scope.numpwm1 = 0 + " Push Ups ";
                $scope.numpwm2 = 0 + " Push Ups ";
                $scope.numpwm3 = 0 + " Push Ups ";
                $scope.numpwm4 = 0 + " Push Ups ";
                $scope.numpwm5 = 0 + " Push Ups ";
            }
            else {
                flagModified = false;
            }
        }
    }

    var statusFields = function () {

        if ($rootScope.phoneDevice < 0) {
            $scope.disableMBCM1 = true;
            $scope.disableMBCM2 = true;
            $scope.disableMBCM3 = true;
            $scope.disableMBCM4 = true;

            $scope.disableMBCW1 = true;
            $scope.disableMBCW2 = true;
            $scope.disableMBCW3 = true;
            $scope.disableMBCW4 = true;

            $scope.disablegendercoomen1 = true;
            $scope.disablegendercoomen2 = true;
            $scope.disablegendercoomen3 = true;
            $scope.disablegendercoomen4 = true;

            $scope.disablegendercoowomen1 = true;
            $scope.disablegendercoowomen2 = true;
            $scope.disablegendercoowomen3 = true;
            $scope.disablegendercoowomen4 = true;

            $scope.disablegendermen1 = true;
            $scope.disablegendermen2 = true;
            $scope.disablegendermen3 = true;
            $scope.disablegendermen4 = true;
            $scope.disablegendermen5 = true;

            $scope.disablegender1women = true;
            $scope.disablegender2women = true;
            $scope.disablegender3women = true;
            $scope.disablegender4women = true;
            $scope.disablegender5women = true;

            $scope.disablegendermod1women = true;
            $scope.disablegendermod2women = true;
            $scope.disablegendermod3women = true;
            $scope.disablegendermod4women = true;
            $scope.disablegendermod5women = true;


        }

        if ($rootScope.phoneDevice < 0) {

            if ($scope.selectedGender.id == 1) {

                genderWoMan(false);

                MBCW(false);

                coowomen(false);


            }
            else {
                MBCM(false);

                genderMan(false);

                coomen(false);

            }
        }

        $scope.goTotal();

    }

    var genderMan = function (opt) {

        if ($scope.selectedAge.id == 0) {
            $scope.disablegendermen1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendermen2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendermen3 = opt;
        }
        else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
            $scope.disablegendermen4 = opt;
        }
        else if ($scope.selectedAge.id >= 7) {
            $scope.disablegendermen5 = opt;
        }
    }

    var MBCM = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disableMBCM1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disableMBCM2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disableMBCM3 = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disableMBCM4 = opt;
        }
    }

    var coomen = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendercoomen1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendercoomen2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendercoomen3 = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disablegendercoomen4 = opt;
        }

    }

    var genderWoMan = function (opt) {
        if ($scope.selectedPusWomenModified.id == 1) {

            if ($scope.selectedAge.id == 0) {
                $scope.disablegendermod1women = opt;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.disablegendermod2women = opt;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.disablegendermod3women = opt;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.disablegendermod4women = opt;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.disablegendermod5women = opt;
            }
        }
        else {

            if ($scope.selectedAge.id == 0) {
                $scope.disablegender1women = opt;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.disablegender2women = opt;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.disablegender3women = opt;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.disablegender4women = opt;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.disablegender5women = opt;
            }
        }
    }

    var MBCW = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disableMBCW1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disableMBCW2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disableMBCW3 = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disableMBCW4 = opt;
        }
    }

    var coowomen = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendercoowomen1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendercoowomen2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendercoowomen3 = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disablegendercoowomen4 = opt;
        }
    }


    $scope.goTotal = function () {

        //$scope.total1 = $scope.selectedAge.value;
        $scope.total1 = $scope.BMILocal;
        $scope.total1 += $scope.selectedCar.value;

        $scope.total1 += $scope.selectedChe.value;
        $scope.total1 += $scope.selectedFat.value;

        $scope.total1 += $scope.selectedMot.value;
        $scope.total1 += $scope.selectedDiabetes.value;
        $scope.total1 += $scope.selectedMod.value;
        $scope.total1 += $scope.selectedVig.value;
        $scope.total1 += $scope.selectedSit.value;

        $scope.total1 += $scope.selectSmo.value;
        $scope.total1 += $scope.selectedSmokes.value;
        $scope.total1 += $scope.selectAlc.value;

        //$scope.total1 += $scope.selectedOra.value;
        $scope.total1 += $scope.selectedAnt.value;

        $scope.total2 = $scope.selectedSys.value;
        $scope.total2 += $scope.selectedDiastolic.value;
        console.log($scope.selectedSys.value + " + " + $scope.selectedDiastolic.value + " = " + $scope.total2);

    
        $scope.total2 += $scope.selectedDee.value;
        $scope.total2 += $scope.selectedAct.value;
        $scope.total2 += $scope.selectedMob.value;
        $scope.total2 += $scope.selectedSho.value;
        $scope.total2 += $scope.selectedSpi.value;
        $scope.total2 += $scope.selectedSpiExt.value;
      
        //$scope.total2 += $scope.selectedPusMen.value;
        //$scope.total2 += $scope.selectedPusWomen.value;

        if ($scope.radioGender) {
            $scope.total2 += $scope.selectedWaiMen.value;
            $scope.total2 += $scope.selectedSidMen.value;

            
            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedPusMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedPusMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedPusMen3.value;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.total2 += $scope.selectedPusMen4.value;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.total2 += $scope.selectedPusMen5.value;
            }

            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedMBMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedMBMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedMBMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.total2 += $scope.selectedMBMen4.value;
            }

            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedCooMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedCooMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedCooMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.total2 += $scope.selectedCooMen4.value;
            }
        }
        else {
            $scope.total2 += $scope.selectedWaiWomen.value;
            $scope.total2 += $scope.selectedSidWomen.value;
            
            if ($scope.selectedPusWomenModified.id == 0) {
                if ($scope.selectedAge.id == 0) {
                    $scope.total2 += $scope.selectedNPWM1.value;
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.total2 += $scope.selectedNPWM2.value;
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.total2 += $scope.selectedNPWM3.value;
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.total2 += $scope.selectedNPWM4.value;
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.total2 += $scope.selectedNPWM5.value;
                }
            }
            else {
                if ($scope.selectedAge.id == 0) {
                    $scope.total2 += $scope.selectedPWM1.value;
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.total2 += $scope.selectedPWM2.value;
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.total2 += $scope.selectedPWM3.value;
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.total2 += $scope.selectedPWM4.value;
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.total2 += $scope.selectedPWM5.value;
                }
            }
          
            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedMBWOMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedMBWOMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedMBWOMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.total2 += $scope.selectedMBWOMen4.value;
            }
           
            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedCW1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedCW2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedCW3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.total2 += $scope.selectedCW4.value;
            }

    
        }
       
        
        $scope.total3 = $scope.total1 + $scope.total2;

        //$scope.total4 = $scope.total3;

        $scope.total4 = $scope.total3 * -1 + 100;

        SaveInCookie();
    }


    $scope.chkOcultar = function () {
        if ($scope.checkOcultar == true) {

            /*
            if ($scope.selectedGender.id == 0) {
                $scope.ocultarMen = false;
            }
            else {
                $scope.ocultarWomen = false;
            }
            */

            $scope.ocultar = false;
        }
        else {
            $scope.ocultarMen = true;
            $scope.ocultarWomen = true;
            $scope.ocultar = true;
        }

        $scope.goTotal();
    }

    $scope.$watch('radioGender', function (value) {
        if (value == false) {
            $scope.selectedGender = $scope.Genders[1];
        }
        else if (value == true) {
            $scope.selectedGender = $scope.Genders[0];
        }
        $scope.chkOcultar();

        goGender();
    });

    $scope.$watch('radioMPW', function (value) {
        if (value == false) {
            $scope.selectedPusWomenModified = $scope.PusWomenModifieds[1];
        }
        else if (value == true) {
            $scope.selectedPusWomenModified = $scope.PusWomenModifieds[0];
        }
        changeModifiedWomanPush();
        calcData();
        statusFields();
        $scope.goTotal();

    });

    $scope.$watch('radioCar', function (value) {

        if (value == false) {
            $scope.selectedCar = $scope.CardioVascularHealths[1];
        }
        else if (value == true) {
            $scope.selectedCar = $scope.CardioVascularHealths[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioChe', function (value) {

        if (value == false) {
            $scope.selectedChe = $scope.ChestPains[1];
        }
        else if (value == true) {
            $scope.selectedChe = $scope.ChestPains[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioFat', function (value) {

        if (value == false) {
            $scope.selectedFat = $scope.FatherDiagnoseds[1];
        }
        else if (value == true) {
            $scope.selectedFat = $scope.FatherDiagnoseds[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioMot', function (value) {

        if (value == false) {
            $scope.selectedMot = $scope.MotherDiagnoseds[1];
        }
        else if (value == true) {
            $scope.selectedMot = $scope.MotherDiagnoseds[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioDia', function (value) {

        if (value == false) {
            $scope.selectedDiabetes = $scope.Diabetess[1];
        }
        else if (value == true) {
            $scope.selectedDiabetes = $scope.Diabetess[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioSmo', function (value) {

        if (value == false) {
            $scope.selectedSmokes = $scope.SecondHandsSmokes[1];
        }
        else if (value == true) {
            $scope.selectedSmokes = $scope.SecondHandsSmokes[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioOra', function (value) {
        /*
        if (value == false) {
            $scope.selectedOra = $scope.OralContraceptives[1];
        }
        else if (value == true) {
            $scope.selectedOra = $scope.OralContraceptives[0];
        }
        $scope.goTotal();
        */
    });

    $scope.$watch('radiofitness', function (value) {
        if (value == false) {
            $scope.selectedLife = $scope.selectedLifes[1];
        }
        else if (value == true) {
            $scope.selectedLife = $scope.selectedLifes[0];
        }
        $scope.goTotal();
    });

    $scope.$watch('radioOrg', function (value) {

        if (value == false) {
            $scope.selectedParticipated = $scope.selectedParticipateds[1];
        }
        else if (value == true) {
            $scope.selectedParticipated = $scope.selectedParticipateds[0];
        }

        $scope.goTotal();

    });

    $scope.$watch('radioPlaning', function (value) {

        if (value == false) {
            $scope.selectedPlaning = $scope.selectedPlanings[1];
        }
        else if (value == true) {
            $scope.selectedPlaning = $scope.selectedPlanings[0];
        }

        $scope.goTotal();

    });

    $scope.$watch('radioSho', function (value) {

        if (value == false) {
            $scope.selectedSho = $scope.ShoulderClearingTests[1];
        }
        else if (value == true) {
            $scope.selectedSho = $scope.ShoulderClearingTests[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioSpi', function (value) {

        if (value == false) {
            $scope.selectedSpi = $scope.SpinalFlexions[1];
        }
        else if (value == true) {
            $scope.selectedSpi = $scope.SpinalFlexions[0];
        }
        $scope.goTotal();

    });



    $scope.$watch('radioSpiExt', function (value) {

        if (value == false) {
            $scope.selectedSpiExt = $scope.SpinalExtensions[1];
        }
        else if (value == true) {
            $scope.selectedSpiExt = $scope.SpinalExtensions[0];
        }
        $scope.goTotal();

    });


    $scope.gohowHeight = function (howHeight) {

        var index = howHeight.indexOf(' ');
        var feet = 0;
        var inch = 0;
        if (index >= 0) {
            feet = howHeight.substring(0, index);
            inch = howHeight.substring(index + 1, howHeight.lenght);
        }
        $scope.howHeight = feet + '\' ' + inch + '\'\'';

        calcBMI();

        if ($scope.hidereview) {
            $scope.hideNext = false;
        }
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

        
    }

    $scope.gohowWeight = function (howWeight) {
        calcBMI();
        
        if ($scope.hidereview) {
            $scope.hideNext = false;
        }
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }
    }

    var calcBMI = function () {
        var valueTemp = $scope.howHeight.replace(/'/g, '');
        var index = valueTemp.indexOf(' ');
        var Height = 0;
        if (index >= 0) {
            Height += parseInt(valueTemp.substring(0, index)) * 12;
            Height += parseInt(valueTemp.substring(index + 1, valueTemp.lenght));
        }
        var Weight = parseInt($scope.howWeight);
        var BMI = 0;
        if (Height != 0 && Weight != 0) {
            BMI = Weight / (Height * Height) * 703;
        }
        var score = Math.round(1.3 * (BMI * BMI) - BMI * 63.65 + 779.75);
        var result = 0.00;
        var howwaistv = 0;
        var howhipv = 0;
       
        if ($scope.selectedGender.id == 0) {
            howwaistv = $scope.howwaist.replace(/'/g, '');
            howhipv = $scope.howhip.replace(/'/g, '');
        }
        else {
            howwaistv = $scope.howwaistw.replace(/'/g, '');
            howhipv = $scope.howhipw.replace(/'/g, '');
        }

        if (howwaistv > 0.00 && howhipv > 0.00) {
            result = (howwaistv / howhipv).toFixed(2);
        }
        

        var flag = false;
        if ($scope.selectedGender.id == 0) {
            if (result < 0.90) {
                flag = true;
            }
        }
        else {
            if (result < 0.80) {
                flag = true;
            }
        }

        if (BMI < 25) {
            score = 0;
        }
        else if (BMI > 40 && flag == true) {
            score = 40;
        }
        
        $scope.BMI = BMI;

        $scope.BMILocal = score;
     
        $scope.goTotal();
    }

    $scope.save = function () {
        $scope.hideSave = true;
        $scope.hideNext = true;
        $scope.hideBack = true;
        $scope.hideEmail = true;
        $scope.hidepoints = false;
        $scope.doneSubmitweb = false;


        /*
        if ($scope.email != null && $scope.email != "") {
            $scope.messageQuestion = "Are you sure to save it?";
            var myEl = $element.find('#openQuestion');
            myEl.click();
        }
        else {
            $scope.errorMessage = "Please type email";
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        }
        */
    }

    var SaveInCookie = function () {

        questionFactory.email = $scope.email;
        questionFactory.iduser = $rootScope.userId;
        questionFactory.total1 = $scope.total1;
        questionFactory.total2 = $scope.total2;
        questionFactory.total3 = 0;

        questionFactory.grantotal = $scope.total3;
        questionFactory.conversiontotal = $scope.total4;

        questionFactory.Gender = $scope.selectedGender.id;
        questionFactory.Age = $scope.howold;


        var valueTemp = $scope.howHeight.replace(/'/g, '');
        var index = valueTemp.indexOf(' ');
        var feet = 0;
        var inch = 0;
        if (index >= 0) {
            feet = valueTemp.substring(0, index);
            inch = valueTemp.substring(index + 1, valueTemp.lenght);
        }
        questionFactory.HowHeightFeet = feet;
        questionFactory.HowHeightInchs = inch;

        questionFactory.HowWeight = $scope.howWeight;

        questionFactory.CardioVascularHealth = $scope.selectedCar.id;
        questionFactory.ChestPain = $scope.selectedChe.id;;
        questionFactory.FatherDiagnosed = $scope.selectedFat.id;
        questionFactory.MotherDiagnosed = $scope.selectedMot.id;
        questionFactory.Diabetes = $scope.selectedDiabetes.id;;

        questionFactory.ModerateExercise = $scope.howmod;
        questionFactory.Vigorous = $scope.howvig;

        questionFactory.Sitting = $scope.selectedSit.id;

        questionFactory.Smoke = $scope.selectSmo.id;
        questionFactory.Secondhandsmoke = $scope.selectedSmokes.id;
        questionFactory.Alcohol = $scope.selectAlc.id;
        //questionFactory.OralContraceptive = $scope.selectedOra.id;
        questionFactory.OralContraceptive = 0;
        questionFactory.Antibiotics = $scope.selectedAnt.id;

        questionFactory.Systolic = $scope.howsys;
        questionFactory.Diastolic = $scope.howdia;

        valueTemp = $scope.howwaist.replace(/'/g, '');
        questionFactory.WaistMen = valueTemp;
        valueTemp = $scope.howhip.replace(/'/g, '');
        questionFactory.HipMen = valueTemp;

        valueTemp = $scope.howwaistw.replace(/'/g, '');
        questionFactory.WaistWomen = valueTemp;
        valueTemp = $scope.howhipw.replace(/'/g, '');
        questionFactory.HipWomen = valueTemp;

        var index = $scope.howSidMen.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSidMen.substring(0, index);
        }

        questionFactory.SideBridgeMen = value;

        var index = $scope.howSidMenLeft.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSidMenLeft.substring(0, index);
        }

        questionFactory.SideBridgeMenLeft = value;

        var index = $scope.howSidWomen.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSidWomen.substring(0, index);
        }
        questionFactory.SideBridgeWomen = value;

        var index = $scope.howSidWomenLeft.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSidWomenLeft.substring(0, index);
        }
        questionFactory.SideBridgeWomenLeft = value;


        questionFactory.DeepSquat = $scope.selectedDee.id;
        questionFactory.ActiveStraightLegRaise = $scope.selectedAct.id;
        questionFactory.ShoulderClearingTest = $scope.selectedSho.id;
        questionFactory.ShoulderMobility = $scope.selectedMob.id;
        questionFactory.SpinalFlexion = $scope.selectedSpi.id;
        questionFactory.SpinalExtension = $scope.selectedSpiExt.id;

        if ($scope.selectedAge.id == 0) {
            var index = $scope.numnpmen1.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen1.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numnpmen2.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen2.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numnpmen3.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen3.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }
        else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
            var index = $scope.numnpmen4.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen4.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }
        else if ($scope.selectedAge.id >= 7) {
            var index = $scope.numnpmen5.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen5.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }

        questionFactory.PushuptestModifiedWomen = $scope.selectedPusWomenModified.id;

        if ($scope.selectedPusWomenModified.id == 0) {
            if ($scope.selectedAge.id == 0) {
                var index = $scope.numnpwm1.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm1.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                var index = $scope.numnpwm2.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm2.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                var index = $scope.numnpwm3.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm3.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                var index = $scope.numnpwm4.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm4.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
            else if ($scope.selectedAge.id >= 7) {
                var index = $scope.numnpwm5.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm5.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
        }
        else {
            if ($scope.selectedAge.id == 0) {
                var index = $scope.numpwm1.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm1.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                var index = $scope.numpwm2.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm2.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                var index = $scope.numpwm3.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm3.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = value;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                var index = $scope.numpwm4.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm4.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = $value;
            }
            else if ($scope.selectedAge.id >= 7) {
                var index = $scope.numpwm5.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm5.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = value;
            }
        }


        if ($scope.selectedAge.id == 0) {
            var index = $scope.numMBCMpwm1.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCMpwm1.substring(0, index);
            }
            questionFactory.MBThrowMen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numMBCMpwm2.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCMpwm2.substring(0, index);
            }
            questionFactory.MBThrowMen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numMBCMpwm3.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCMpwm3.substring(0, index);
            }
            questionFactory.MBThrowMen = value;
        }
        else if ($scope.selectedAge.id >= 5) {
            var index = $scope.numMBCMpwm4.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCMpwm4.substring(0, index);
            }
            questionFactory.MBThrowMen = value;
        }

        if ($scope.selectedAge.id == 0) {
            var index = $scope.numMBCWpwm1.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCWpwm1.substring(0, index);
            }
            questionFactory.MBThrowWomen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numMBCWpwm2.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCWpwm2.substring(0, index);
            }
            questionFactory.MBThrowWomen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numMBCWpwm3.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCWpwm3.substring(0, index);
            }
            questionFactory.MBThrowWomen = value;
        }
        else if ($scope.selectedAge.id >= 5) {
            var index = $scope.numMBCWpwm4.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCWpwm4.substring(0, index);
            }
            questionFactory.MBThrowWomen = value;
        }

        if ($scope.selectedAge.id == 0) {
            var index = $scope.numMBCOOWpwm1.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWpwm1.substring(0, index);
            }
            questionFactory.CoopertestMen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numMBCOOWpwm2.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWpwm2.substring(0, index);
            }
            questionFactory.CoopertestMen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numMBCOOWpwm3.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWpwm3.substring(0, index);
            }
            questionFactory.CoopertestMen = value;
        }
        else if ($scope.selectedAge.id >= 5) {
            var index = $scope.numMBCOOWpwm4.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWpwm4.substring(0, index);
            }
            questionFactory.CoopertestMen = value;
        }

        if ($scope.selectedAge.id == 0) {
            var index = $scope.numMBCOOWOpwm1.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWOpwm1.substring(0, index);
            }
            questionFactory.CoopertestWomen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numMBCOOWOpwm2.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWOpwm2.substring(0, index);
            }
            questionFactory.CoopertestWomen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numMBCOOWOpwm3.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWOpwm3.substring(0, index);
            }
            questionFactory.CoopertestWomen = value;
        }
        else if ($scope.selectedAge.id >= 5) {
            var index = $scope.numMBCOOWOpwm4.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWOpwm4.substring(0, index);
            }
            questionFactory.CoopertestWomen = $scope.value;
        }

        questionFactory.RateFitness = $scope.selectedRated.id;
        questionFactory.RankFitness = $scope.selectedLife.id;
        questionFactory.Particpe = $scope.selectedParticipated.id;
        questionFactory.Planing = $scope.selectedPlaning.id;

        questionFactory.Genderpts = 0;
        questionFactory.Agetpts = 0;
        questionFactory.HowHeightpts = $scope.BMILocal;
        questionFactory.HowWeightpts = 0;
        questionFactory.CardioVascularHealthpts = $scope.selectedCar.value;
        questionFactory.ChestPainpts = $scope.selectedChe.value;
        questionFactory.FatherDiagnosedpts = $scope.selectedFat.value;
        questionFactory.MotherDiagnosedpts = $scope.selectedMot.value;
        questionFactory.Diabetespts = $scope.selectedDiabetes.value;
        questionFactory.ModerateExercisepts = $scope.selectedMod.value;
        questionFactory.Vigorouspts = $scope.selectedVig.value;;
        questionFactory.Sittingpts = $scope.selectedSit.value;
        questionFactory.Smokepts = $scope.selectSmo.value;
        questionFactory.Secondhandsmokepts = $scope.selectedSmokes.value;
        questionFactory.Alcoholpts = $scope.selectAlc.value;
        questionFactory.OralContraceptivepts = 0;
        //questionFactory.OralContraceptivepts = $scope.selectedOra.value;
        questionFactory.Antibioticspts = $scope.selectedAnt.value;
        questionFactory.Systolicpts = $scope.selectedSys.value;
        questionFactory.Diastolicpts = $scope.selectedDiastolic.value;

        questionFactory.WaisttoHipMenpts = $scope.selectedWaiMen.value;;
        questionFactory.WaisttoHipWomenpts = $scope.selectedWaiWomen.value;

        questionFactory.SideBridgeMenpts = $scope.selectedSidMen.value;
        questionFactory.SideBridgeWomenpts = $scope.selectedSidWomen.value;
        questionFactory.DeepSquatpts = $scope.selectedDee.value;

        questionFactory.ActiveStraightLegRaisepts = $scope.selectedAct.value;
        questionFactory.ShoulderMobilitypts = $scope.selectedMob.value;

        questionFactory.ShoulderClearingTestpts = $scope.selectedSho.value;
        questionFactory.SpinalFlexionpts = $scope.selectedSpi.value;
        questionFactory.SpinalExtensionpts = $scope.selectedSpiExt.value;

        if ($scope.radioGender) {
            if ($scope.selectedAge.id == 0) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen3.value;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen4.value;
            }
            else if ($scope.selectedAge.id >= 7) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen5.value;
            }

            if ($scope.selectedAge.id == 0) {
                questionFactory.MBThrowMenpts = $scope.selectedMBMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.MBThrowMenpts = $scope.selectedMBMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.MBThrowMenpts = $scope.selectedMBMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                questionFactory.MBThrowMenpts = $scope.selectedMBMen4.value;
            }

            if ($scope.selectedAge.id == 0) {
                questionFactory.CoopertestMenpts = $scope.selectedCooMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.CoopertestMenpts = $scope.selectedCooMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.CoopertestMenpts = $scope.selectedCooMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                questionFactory.CoopertestMenpts = $scope.selectedCooMen4.value;
            }
        }
        else {
            questionFactory.PushuptestModifiedWomenpts = 0;

            if ($scope.selectedPusWomenModified.id == 0) {
                if ($scope.selectedAge.id == 0) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM1.value;
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM2.value;
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM3.value;
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM4.value;
                }
                else if ($scope.selectedAge.id >= 7) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM5.value;
                }
            }
            else {
                if ($scope.selectedAge.id == 0) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM1.value;
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM2.value;
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM3.value;
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM4.value;
                }
                else if ($scope.selectedAge.id >= 7) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM5.value;
                }
            }

            if ($scope.selectedAge.id == 0) {
                questionFactory.MBThrowWomenpts = $scope.selectedMBWOMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.MBThrowWomenpts = $scope.selectedMBWOMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.MBThrowWomenpts = $scope.selectedMBWOMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                questionFactory.MBThrowWomenpts = $scope.selectedMBWOMen4.value;
            }

            if ($scope.selectedAge.id == 0) {
                questionFactory.CoopertestWomenpts = $scope.selectedCW1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.CoopertestWomenpts = $scope.selectedCW2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.CoopertestWomenpts = $scope.selectedCW3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                questionFactory.CoopertestWomenpts = $scope.selectedCW4.value;
            }
        }


        questionFactory.ateFitnesspts = 0;
        questionFactory.RankFitnesspts = 0;
        questionFactory.Particpepts = 0.


        if (questionFactory.datelocal == undefined || questionFactory.datelocal == null) {
            questionFactory.datelocal = new Date();
        }
        questionFactory.userid = $rootScope.userId.userId;
        questionFactory.firstname = $scope.firstname;
        questionFactory.lastname = $scope.lastname;


        localStorage.setItem("questionFactory", JSON.stringify(questionFactory));

        saveStateForm();
    }


    var saveStateForm = function () {

        queryQuestionTempFactory.phoneType = $rootScope.phoneDevice;
        queryQuestionTempFactory.countQ = countQ;
        queryQuestionTempFactory.totalQ = totalQ;
        queryQuestionTempFactory.pageQ = pageQ;
        localStorage.setItem("queryQuestionTempFactory", JSON.stringify(queryQuestionTempFactory));



    }



    $scope.savedata = function () {

        SaveInCookie();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var yyyy = questionFactory.datelocal.getFullYear().toString();
        var mm = (questionFactory.datelocal.getMonth()); // getMonth() is zero-based
        var dd = questionFactory.datelocal.getDate().toString();

        $scope.datedone = monthNames[mm] + " " + dd + " of " + yyyy;

        doSave();
    }


    var doSave = function () {


        $("#dialog").dialog("open");

        apiServices.getData(questionFactory, 'api/Questions/AddUpdate')
        .then(function (data) {
            //stopTime = $interval(backTop, $rootScope.dialogTimer);
            $("#dialog").dialog("close");
            $scope.hidereview = true;
            $scope.doneSubmitwebPoints = false;
            $scope.doneSubmitweb = true;
            $scope.hideSubmitweb = true;
            $scope.hideBackweb = true;
            $scope.puntos = $scope.total4;
            $scope.avarage = changeAbbrev(data.avarage);
            $scope.totalUsers = data.totalUsers;
            $scope.hideEmail = true;
            $scope.hidepoints = false;
            $scope.hideSave = true;
            $scope.hideBack = true;
            $scope.hideAll = true;

            localStorage.removeItem('queryQuestionTempFactory');
            localStorage.removeItem('questionFactory');
            


        }, function (error) {
            $("#dialog").dialog("close");
            $scope.hidereview = true;
            $scope.hideEmail = true;
            $scope.hideerrors = false;
            $scope.hideSubmitweb = true;
            $scope.hideSaveReview = true;
            $scope.hideerrors = false;
            $scope.errorMessage = error;

        });
    }

    $scope.back = function () {
        if (!$scope.hideEmail) {
            pageQ = 0;
            saveStateForm();

            $scope.questions = false;
            $scope.hideEmail = true;
        }
        else if (!$scope.questions || !$scope.hidepoints) {
            pageQ = 0;
            saveStateForm();

            backTop();
        }
        else if (!$scope.hideerrors) {
            $scope.hideerrors = true;
            $scope.hidereview = false;
            $scope.hideSaveReview = false;
        }
    }

    $scope.submitweb = function () {
        if (!$scope.hidereview) {
            if ($scope.firstname != undefined && $scope.firstname != "" &&
                $scope.lastname != undefined && $scope.lastname != "" &&
                $scope.email != undefined && $scope.email != "") {
                $scope.savedata();
            }
        }
        else if (!$scope.hideEmail && $scope.email != "") {
            if ($scope.firstname != undefined && $scope.firstname != "" &&
                $scope.lastname != undefined && $scope.lastname != "" &&
                $scope.email != undefined && $scope.email != "") {
                $scope.hideEmail = true;

                if ($rootScope.phoneDevice >= 0) {
                    $scope.hideSave = true;
                    $scope.hideSaveReview = false;
              
                    showReview();
                }
                else {
                    $scope.savedata();
                }
            }
        }
        else if (!$scope.questions) {
            pageQ = 1;
            saveStateForm();
            $scope.questions = true;
            $scope.hideEmail = false;
            if (state == "1") {
                $scope.emailDisable = true;
            }
            else {
                $scope.emailDisable = false;
            }
            $scope.emailDisable = false;
        }
    }

    var showReview = function () {
        $scope.hidereview = false;
        $scope.hideBack = true;

        $scope.disablegendermenWaiReview = true;
        $scope.disablegendermenWai2Review = true;

        $scope.disablegendermenSidReview = true;


        $scope.disablegendermen1Review = true;
        $scope.disablegendermen2Review = true;
        $scope.disablegendermen3Review = true;
        $scope.disablegendermen4Review = true;
        $scope.disablegendermen5Review = true;

        $scope.disableMBCM1Review = true;
        $scope.disableMBCM2Review = true;
        $scope.disableMBCM3Review = true;
        $scope.disableMBCM4Review = true;

        $scope.disablegendercoomen1Review = true;
        $scope.disablegendercoomen2Review = true;
        $scope.disablegendercoomen3Review = true;
        $scope.disablegendercoomen4Review = true;

        $scope.disablegenderwomenModReview = true;

        $scope.disablegenderwomenWaiReview = true;
        $scope.disablegenderwomenWai2Review = true;

        $scope.disablegenderwomenSidReview = true;

        $scope.disablegendermod1womenReview = true;
        $scope.disablegendermod2womenReview = true;
        $scope.disablegendermod3womenReview = true;
        $scope.disablegendermod4womenReview = true;
        $scope.disablegendermod5womenReview = true;

        $scope.disablegender1womenReview = true;
        $scope.disablegender2womenReview = true;
        $scope.disablegender3womenReview = true;
        $scope.disablegender4womenReview = true;
        $scope.disablegender5womenReview = true;

        $scope.disableMBCW1Review = true;
        $scope.disableMBCW2Review = true;
        $scope.disableMBCW3Review = true;
        $scope.disableMBCW4Review = true;

        $scope.disablegendercoowomen1Review = true;
        $scope.disablegendercoowomen2Review = true;
        $scope.disablegendercoowomen3Review = true;
        $scope.disablegendercoowomen4Review = true;

        if ($scope.selectedGender.id == 0) {

            $scope.disablegendermenWaiReview = false;
            $scope.disablegendermenWai2Review = false;

            $scope.disablegendermenSidReview = false;
        
          
            genderManReview(false);
            MBCMReview(false);
            coomenReview(false);
        }
        else 
        {
            $scope.disablegenderwomenModReview = false;

            $scope.disablegenderwomenWaiReview = false;
            $scope.disablegenderwomenWai2Review = false;

            $scope.disablegenderwomenSidReview = false;

           

            genderWoManReview(false);
            MBCWReview(false);
            coowomenReview(false);

        }

        $('#idfirstname').focus();
    }

    var genderManReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendermen1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendermen2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendermen3Review = opt;
        }
        else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
            $scope.disablegendermen4Review = opt;
        }
        else if ($scope.selectedAge.id >= 7) {
            $scope.disablegendermen5Review = opt;
        }
    }

    var MBCMReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disableMBCM1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disableMBCM2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disableMBCM3Review = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disableMBCM4Review = opt;
        }
    }

    var coomenReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendercoomen1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendercoomen2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendercoomen3Review = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disablegendercoomen4Review = opt;
        }

    }

    var genderWoManReview = function (opt) {
        if ($scope.selectedPusWomenModified.id == 1) {

            if ($scope.selectedAge.id == 0) {
                $scope.disablegendermod1womenReview = opt;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.disablegendermod2womenReview = opt;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.disablegendermod3womenReview = opt;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.disablegendermod4womenReview = opt;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.disablegendermod5womenReview = opt;
            }
        }
        else {

            if ($scope.selectedAge.id == 0) {
                $scope.disablegender1womenReview = opt;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.disablegender2womenReview = opt;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.disablegender3womenReview = opt;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.disablegender4womenReview = opt;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.disablegender5womenReview = opt;
            }
        }
    }

    var MBCWReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disableMBCW1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disableMBCW2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disableMBCW3Review = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disableMBCW4Review = opt;
        }
    }

    var coowomenReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendercoowomen1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendercoowomen2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendercoowomen3Review = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disablegendercoowomen4Review = opt;
        }
    }




    var backTop = function () {
        localStorage.removeItem('queryQuestionTempFactory');
        localStorage.removeItem('questionFactory');

        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-leon-questions-user');
    }

    /// start phone
    var startPhoneValues = function () {




        if ($rootScope.phoneDevice >= 0) {
            $scope.radioGender = null;
            $scope.radioCar = null;
            $scope.radioChe = null;
            $scope.radioFat = null;
            $scope.radioMot = null;
            $scope.radioDia = null;
            $scope.radioSmo = null;
            $scope.radioOra = null;
            $scope.radioOrg = null;
            $scope.radioPlaning = null;
            $scope.radioSho = null;
            $scope.radioSpi = null;
            $scope.radioSpiExt = null;
            $scope.radioMPW = null;
            $scope.radiofitness = null;
        }
    }


    $scope.changeMale = function () {
        if (flagImgFamele == 1) {
            $scope.imgfemale = "styles/mztimgs/women.png";
            flagImgFamele = 0;
        }
        if (flagImgMale == 0) {
            $scope.imgmale = "styles/mztimgs/men-anaranjado.png";
            flagImgMale = 1;
            $scope.radioGender = true;
        }
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.changeFamele = function () {
        if (flagImgMale == 1) {
            $scope.imgmale = "styles/mztimgs/men.png";
            flagImgMale = 0;
        }
        if (flagImgFamele == 0) {
            $scope.imgfemale = "styles/mztimgs/women-anaranjado.png";
            flagImgFamele = 1;
            $scope.radioGender = false;
        }
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioCarNo = function () {
        $("#doctor-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#doctor-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioCar = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioCarYes = function () {
        $("#doctor-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#doctor-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioCar = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioCheNo = function () {
        $("#pain-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#pain-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioChe = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioCheYes = function () {
        $scope.radioChe = false;
        $("#pain-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#pain-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioChe = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioFatNo = function () {
        $("#father-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#father-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioFat = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioFatYes = function () {
        $("#father-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#father-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioFat = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioMotNo = function () {
        $("#mother-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#mother-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioMot = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioMotYes = function () {
        $("#mother-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#mother-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioMot = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioDiaNo = function () {
        $("#either-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#either-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioDia = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioDiaYes = function () {
        $("#either-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#either-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioDia = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.moderate = function (value) {
        if (value == 0) {
            $("#moderate-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#moderate-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#moderate-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#moderate-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#moderate-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#moderate-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#moderate-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#moderate-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedMod = $scope.Mods[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.vigorous = function (value) {
        if (value == 0) {
            $("#vigorous-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#vigorous-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#vigorous-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#vigorous-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#vigorous-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#vigorous-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#vigorous-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#vigorous-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }


        $scope.selectedVig = $scope.Vigs[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.sitting = function (value) {
        if (value == 0) {
            $("#time-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#time-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#time-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#time-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#time-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#time-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#time-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#time-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedSit = $scope.Sits[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.smoke = function (value) {
        if (value == 0) {
            $("#smoke-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#smoke-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#smoke-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#smoke-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 4) {
            $("#smoke-color5").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 5) {
            $("#smoke-color6").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectSmo = $scope.Smos[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.goradioSmoNo = function () {
        $("#second-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#second-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioSmo = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSmoYes = function () {
        $("#second-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#second-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioSmo = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.alcohol = function (value) {
        if (value == 0) {
            $("#alcohol-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#alcohol-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#alcohol-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#alcohol-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#alcohol-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#alcohol-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#alcohol-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#alcohol-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectAlc = $scope.Alcs[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.goradioOraNo = function () {
        $("#oral-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#oral-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioOra = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioOraYes = function () {
        $("#oral-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#oral-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioOra = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.antibiotics = function (value) {
        if (value == 0) {
            $("#length-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#length-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#length-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#length-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#length-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#length-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#length-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#length-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }


        $scope.selectedAnt = $scope.Ants[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.fitness = function (value) {
        if (value == 0) {
            $("#fitness-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color5").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#fitness-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color5").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#fitness-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color5").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#fitness-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 4) {
            $("#fitness-color5").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedRated = $scope.selectedRateds[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.lifetime = function (value) {
        if (value == 0) {
            $("#lifetime-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#lifetime-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#lifetime-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $scope.radiofitness = true;
        }
        else {
            $("#lifetime-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#lifetime-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#lifetime-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $scope.radiofitness = false;
        }

        //$scope.selectedLife = $scope.selectedLifes[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioOrgNo = function () {
        $("#organized-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#organized-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioOrg = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioOrgYes = function () {
        $("#organized-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#organized-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioOrg = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioPlaningNo = function () {
        $("#planing-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#planing-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioPlaning = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioPlaningYes = function () {
        $("#planing-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#planing-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioPlaning = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.ilumination = function (value) {
        var $iluminationText1 = $('#iluminationText1');
        var $iluminationText2 = $('#iluminationText2');
        var $iluminationText3 = $('#iluminationText3');

        if (value == 2) {
            $("#ilumination1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ilumination2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ilumination3").css("background-color", "rgba(232,  232,  233,  1)");

            $('#deep-green-wShadow').animate({
                height: 165
            }, 200);

            $iluminationText1.slideDown('fast', function () {
                $('#deep-blue-wShadow').animate({
                    height: 110
                }, 200);

                $('#deep-red-wShadow').animate({
                    height: 110
                }, 200);

                $('.deep-green').animate({
                    height: 165
                }, 200);

                $('.deep-red').animate({
                    height: 110
                }, 200);

                $('.deep-blue').animate({
                    height: 110
                }, 200);

                $iluminationText2.slideUp();
                $iluminationText3.slideUp();

            });
        }
        else if (value == 1) {
            $("#ilumination2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ilumination1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ilumination3").css("background-color", "rgba(232,  232,  233,  1)");

            $('#deep-blue-wShadow').animate({
                height: 165
            }, 200);

            $iluminationText2.slideDown('fast', function () {

                $('#deep-green-wShadow').animate({
                    height: 110
                }, 200);

                $('#deep-red-wShadow').animate({
                    height: 110
                }, 200);

                $('.deep-green').animate({
                    height: 110
                }, 200);

                $('.deep-red').animate({
                    height: 110
                }, 200);

                $('.deep-blue').animate({
                    height: 165
                }, 200);


                $iluminationText1.slideUp();
                $iluminationText3.slideUp();

            });



        }
        else if (value == 0) {
            $("#ilumination3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ilumination1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ilumination2").css("background-color", "rgba(232,  232,  233,  1)");

            $('#deep-red-wShadow').animate({
                height: 165
            }, 200);

            $iluminationText3.slideDown('fast', function () {
                $('#deep-blue-wShadow').animate({
                    height: 110
                }, 200);

                $('#deep-green-wShadow').animate({
                    height: 110
                }, 200);

                $('.deep-green').animate({
                    height: 110
                }, 200);

                $('.deep-red').animate({
                    height: 165
                }, 200);

                $('.deep-blue').animate({
                    height: 110
                }, 200);

                $iluminationText1.slideUp();
                $iluminationText2.slideUp();

            });


        }

        $scope.selectedDee = $scope.Dees[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.actleg = function (value) {
        if (value == 2) {
            $("#idactlegs1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#idactlegs2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#idactlegs3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#idactlegs2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#idactlegs1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#idactlegs3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 0) {
            $("#idactlegs3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#idactlegs1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#idactlegs2").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedAct = $scope.Acts[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.shomob = function (value) {
        if (value == 2) {
            $("#ishomob1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ishomob2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ishomob3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#ishomob2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ishomob1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ishomob3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 0) {
            $("#ishomob3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ishomob1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ishomob2").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedMob = $scope.Mobs[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioShoClearNo = function () {
        $("#shoclear-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#shoclear-color2").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioSho = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioShoClearYes = function () {
        $("#shoclear-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#shoclear-color1").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioSho = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSpiNo = function () {
        $("#spi-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#spi-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioSpi = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSpiYes = function () {
        $("#spi-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#spi-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioSpi = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSpiExtNo = function () {
        $("#spiext-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#spiext-color2").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioSpiExt = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSpiExtYes = function () {
        $("#spiext-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#spiext-color1").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioSpiExt = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioWmodNo = function () {
        $("#mwomen-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#mwomen-color2").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioMPW = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioWmodYes = function () {
        $("#mwomen-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#mwomen-color1").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioMPW = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.mostrarToolTip = function () {
        $element.find("#tooltip-gender").modal('show');
    };

    $scope.toolTipHearthCondition = function () {
        $element.find("#tooltip-hearth-condition").modal('show');
    };

    $scope.toolTipFamilyHistory = function () {
        $element.find("#tooltip-family-history").modal('show');
    };

    $scope.toolTipActivity = function () {
        $element.find("#tooltip-activity").modal('show');
    };

    $scope.toolTipWaist = function () {
        $element.find("#tooltip-waist").modal('show');
    };

    $scope.toolTipWaist2 = function () {
        $element.find("#tooltip-waist2").modal('show');
    };

    $scope.toolTipDeepSquat = function () {
        $element.find("#tooltip-deepsquat").modal('show');
    }

    $scope.toolTipPushUp = function () {
        $element.find("#tooltip-push-up").modal('show');
    }

    $scope.toolTipMbThrow = function () {
        $element.find("#tooltip-mb-throw").modal('show');
    };

    $scope.toolTipSystolic = function () {
        $element.find("#tooltip-systolic").modal('show');
    };

    $scope.toolTipActiveLeg = function () {
        $element.find("#tooltip-activeLeg").modal('show');
    };

    $scope.toolTipShoulder = function () {
        $element.find("#tooltip-shoulder").modal('show');
    };

    $scope.toolTipSideBridge = function () {
        $element.find("#tooltip-sideBridge").modal('show');
    };

    $scope.toolTipSideBridge2 = function () {
        $element.find("#tooltip-sideBridge2").modal('show');
    };

    $scope.toolTipMB1 = function () {
        $element.find("#tooltip-mb1").modal('show');
    };

    $scope.toolTipMB2 = function () {
        $element.find("#tooltip-mb2").modal('show');
    };

    $scope.toolTipMB3 = function () {
        $element.find("#tooltip-mb3").modal('show');
    };

    $scope.toolTipMB4 = function () {
        $element.find("#tooltip-mb4").modal('show');
    };

    $scope.toolTipMB5 = function () {
        $element.find("#tooltip-mb5").modal('show');
    };

    $scope.toolTipCooper = function () {
        $element.find("#tooltip-cooper").modal('show');
    };

    $scope.goradioScoreQ = function (value) {
        pageQ = 0;
        SaveInCookie();
        $scope.hideScoreQ = true;
        if (value == 0) {
            $scope.hideAll = false;
        }
        else {

            $scope.hidepoints = false;
            $scope.doneSubmitwebPoints = false;

            localStorage.removeItem('queryQuestionTempFactory');
            localStorage.removeItem('questionFactory');

        }
    }

    startPhoneValues();

    init();


});

app.directive('mztLeonQuestionsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-questions/mzt-leon-questions-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                fields: {
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'Empty email is invalid'
                            },
                        }
                    },
                    firstname: {
                        validators: {
                            notEmpty: {
                                message: 'Empty first name is invalid'
                            },
                        }
                    },
                    lastname: {
                        validators: {
                            notEmpty: {
                                message: 'Empty last name invalid is invalid'
                            },
                        }
                    },
                }
            })
        },
        controller: 'mztLeonQuestionsCtrl as datatables'
    }

});
