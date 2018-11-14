/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms');

app.controller('mztLeonAssessmentCtrl', function ($scope, $window, $element, $location, $rootScope, $interval, queryQuestionFactory, apiServices, $compile, $timeout,
    chartBarOptions, chartBarColors) {
    $scope.hideAll = true; //this code make the view hidden when the page is refreshed in the safari mobile.
    
    $scope.animationCircleTime = 2500;
    $scope.animationBarTime = 2500;

    $scope.barProcess = true;
    $scope.waisthip = 0;
    $scope.bmi = 0;

    $scope.imgActive1 = "";
    $scope.imgActive2 = "";
    $scope.imgActive3 = "";

    $scope.DeepSquat1L = "";
    $scope.DeepSquat1R = "";
    $scope.DeepSquat2L = "";
    $scope.DeepSquat2R = "";
    $scope.DeepSquat3L = "";
    $scope.DeepSquat3R = "";
    
    $scope.imgShouldeClearing1 = "";
    $scope.imgShouldeClearing2 = "";

    $scope.imgSpinalExtension = "";
    $scope.imgSpinalExtensionClearing = "";
    $scope.imgsidebridge = "";
    
    $scope.scoreBeforeDay = true;
    $scope.arrayidforms = {};
    $scope.indexforms = 0;
    $scope.idformscore = "";
    $scope.alternativeScore = true;
    $scope.alternativeScoreItems = true;
    $scope.odometerType = "";
    $scope.avaragePercentile = 0;
    $scope.hidepoints = true;
    $scope.scoreFitness = true;
    $scope.imgmale = "styles/mztimgs/men-gray.png";
    $scope.imgfemale = "styles/mztimgs/women-gray.png";
    $scope.sex = null;
    $scope.heartCondition = null;
    $scope.painChest = null;
    $scope.fatherCardiovascularDisease = null;
    $scope.motherCardiovascularDisease = null;
    $scope.diabetes = null;
    $scope.sitting = null;
    $scope.doYouSmoke = null;
    $scope.exposedSmoke = null;
    $scope.consumeAlcohol = null;
    $scope.antibiotics = null;
    $scope.rateFitness = null;
    $scope.rankFitness = null;
    $scope.participe = null;
    $scope.planning = null;
    $scope.shoulderClearingTest = 1;
    $scope.spinalFlexion = 1;
    $scope.spinalExtension = 1;
    $scope.modified = true;
    $scope.deepSquat = null;
    $scope.activeStraightLegRaise = null;
    $scope.shoulderMobility = null;
    $scope.firstname = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.datelocal = null;
    $scope.currentPagePosition = 0;
    $scope.disablegenderwomenMod = true;
    $scope.allValues = {
        idform: "",
        sex: null,
        heartCondition: null,
        painChest: null,
        fatherCardiovascularDisease: null,
        motherCardiovascularDisease: null,
        diabetes: null,
        sitting: null,
        doYouSmoke: null,
        exposedSmoke: null,
        consumeAlcohol: null,
        antibiotics: null,
        rateFitness: null,
        rankFitness: null,
        participe: null,
        planning: null,
        shoulderClearingTest: 1,
        spinalFlexion: 1,
        spinalExtension: 1,
        modified: null,
        deepSquat: null,
        activeStraightLegRaise: null,
        shoulderMobility: null,
        howold: 0,
        birthday: new Date(),
        daybirth: 0,
        monthbirth: 0,
        yearbirth: 0,
        howHeightFeet: 0,
        howHeightInch: 0,
        howWeight: 0,
        howWaist: 0,
        howHip: 0,
        sideBridge: 0,
        sideBridgeLeft: 0,
        moderateExercise: 0,
        vigorous: 0,
        systolic: 0,
        Diastolic: 0,
        pushs: 0,
        throws: 0,
        cooper: 0,
        fisrtName: "",
        lastName: "",
        email: "",
        datelocal: null,
        datelocalN: "",
        userid: "",
        provider: "",
        currentPagePosition: 0
    };
    
    /* To initialize the swiper control. */
    var swiper = new Swiper(".swiper-container", {
        simulateTouch: false,
        iOSEdgeSwipeDetection: true,
        speed: 1000
    });

    swiper.on('onSlideNextEnd', function (event) {
        //console.log(swiper.activeIndex);
        
      
        var showMessage = false;
        if ($(".swiper-slide-prev").find("#male").length > 0) {
            if ($(".swiper-slide-prev img#female").attr("src").indexOf("anaranjado") === -1 && $(".swiper-slide-prev img#male").attr("src").indexOf("anaranjado") === -1) {
                swiper.slidePrev();
                //showMessage = true;
            }
        }
        if ( $(".swiper-slide-prev").find("#Height-Id").length > 0 || $(".swiper-slide-prev").find("#Weight-Id").length > 0
              || $(".swiper-slide-prev").find("#blood-id").length > 0 || $(".swiper-slide-prev").find("#diastolic-id").length > 0
              || $(".swiper-slide-prev").find("#waist-id").length > 0 || $(".swiper-slide-prev").find("#hip-id").length > 0) {
            if ($(".swiper-slide-prev input").length > 1) {
                $(".swiper-slide-prev input").each(function (index, element) {
                    if (parseFloat($(element).val()) === 0) {
                        swiper.slidePrev();
                        //showMessage = true;
                        return false;
                    }
                });
            } else {
                if (parseFloat($(".swiper-slide-prev input").val()) === 0) {
                    swiper.slidePrev();
                    //showMessage = true;
                }
            }
        }
        if ($(".swiper-slide-prev").find("#Car-Id").length > 0 || $(".swiper-slide-prev").find("#Che-Id").length > 0 || $(".swiper-slide-prev").find("#Fat-Id").length > 0
              || $(".swiper-slide-prev").find("#Mot-Id").length > 0 || $(".swiper-slide-prev").find("#Dia-Id").length > 0 || $(".swiper-slide-prev").find("#sit-id").length > 0
              || $(".swiper-slide-prev").find("#smo-id").length > 0 || $(".swiper-slide-prev").find("#smokes-id").length > 0 || $(".swiper-slide-prev").find("#alc-id").length > 0
              || $(".swiper-slide-prev").find("#ant-id").length > 0 || $(".swiper-slide-prev").find("#rated-id").length > 0 || $(".swiper-slide-prev").find("#life-id").length > 0
              || $(".swiper-slide-prev").find("#org-id").length > 0 || $(".swiper-slide-prev").find("#planing-id").length > 0 || $(".swiper-slide-prev").find("#dee-id").length > 0
              || $(".swiper-slide-prev").find("#act-id").length > 0 || $(".swiper-slide-prev").find("#mob-id").length > 0 || $(".swiper-slide-prev").find("#sho-id").length > 0
              || $(".swiper-slide-prev").find("#spi-id").length > 0 || $(".swiper-slide-prev").find("#spi-ext-id").length > 0) {
            if ($(".swiper-slide-prev button.button-activated").length === 0) {
                swiper.slidePrev();
                //showMessage = true;
            }
        }

       if (swiper.activeIndex == 1) {
            var rex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if ($scope.firstname == "" ||  $scope.lastName == "" || $scope.email == "" || !rex.test($scope.email)) {
                swiper.slidePrev();
            }
        }
        if (showMessage) {
            $scope.Message = "Please choose an option.";
            $element.find("#Tooltip-Id").modal('show');
        }
        $scope.submitAllValues();
    });

    swiper.on('onSlidePrevEnd', function (event) {
        $scope.submitAllValues();
    });

    $scope.mostrarToolTip = function (value) {
        $scope.Message = value;
        //$scope.cbj_dialog();
        $element.find("#Tooltip-Id").modal('show');
    };

    var cbj_modal = function() {
        $("#cb_modalc")[0].classList.toggle('cb_modal');
    }

  
    $scope.cbj_dialog = function() {
        cbj_modal();
        $("#cb_dialogc")[0].classList.toggle('cb_activate');
    }

    $scope.checkButton = function (event) {
        $("#" + event.target.id).parents(".cb_container").find(".cb_mzt_buttons button").removeClass("button-activated").addClass("button-deactivated");
        $("#" + event.target.id).removeClass("button-deactivated").addClass("button-activated");

 
        $("#" + event.target.id).parents(".page").find(".button-container button").removeClass("button-activated").addClass("button-deactivated");
        $("#" + event.target.id).removeClass("button-deactivated").addClass("button-activated");
    };

    $scope.checkButtonValue = function (section, value) {
        if (section === "#dee-id" || section === "#act-id" || section === "#mob-id") {
            switch (value) {
                case 0:
                    value = 2;
                    break;
                case 2:
                    value = 0;
                    break;
            }
        }
        $(section).find(".cb_mzt_buttons button").removeClass("button-activated").addClass("button-deactivated");
        $(section).find(".cb_mzt_buttons button:eq(" + value + ")").removeClass("button-deactivated").addClass("button-activated");

        $(section).find(".button-container button").removeClass("button-activated").addClass("button-deactivated");
        $(section).find(".button-container button:eq(" + value + ")").removeClass("button-deactivated").addClass("button-activated");
    };

    $scope.setGender = function (value) {
        if (value === 1) {
            $scope.disablegenderwomenMod = true;
            $scope.imgmale = "styles/mztimgs/men-anaranjado.png";
            $scope.imgfemale = "styles/mztimgs/women-gray.png";
            $("section#push-id").parent().removeClass("swiper-slide").addClass("swiper-slide-hidden");
        } else if (value === 0) {
            $scope.disablegenderwomenMod = false;
            $scope.imgmale = "styles/mztimgs/men-gray.png";
            $scope.imgfemale = "styles/mztimgs/women-anaranjado.png";
            $("section#push-id").parent().removeClass("swiper-slide-hidden").addClass("swiper-slide");
        }
        $scope.sex = value;
        doChangeImages();
    };

    $scope.setCardio = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.heartCondition = value;
    };

    $scope.setChest = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.painChest = value;
    };

    $scope.setFather = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.fatherCardiovascularDisease = value;
    };

    $scope.setMother = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.motherCardiovascularDisease = value;
    };

    $scope.setDiabetes = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.diabetes = value;
    };

    $scope.setSitting = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.sitting = value;
    };

    $scope.setSmokeAverage = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.doYouSmoke = value;
    };

    $scope.setHandSmoke = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.exposedSmoke = value;
    };

    $scope.setAlcohol = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.consumeAlcohol = value;
    };

    $scope.setAntibiotics = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.antibiotics = value;
    };

    $scope.setFitness = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.rateFitness = value;
    };

    $scope.setLifeTime = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.rankFitness = value;
    };

    $scope.setCompetitiveEvent = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.participe = value;
    };

    $scope.setOrganisedEvent = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.planning = value;
    };

    $scope.setShoulder = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.shoulderClearingTest = value;
    };

    $scope.setSpinalFlexion = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.spinalFlexion = value;
    };

    $scope.setSpinalExtension = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.spinalExtension = value;
    };

    $scope.setModifiedMaxPushUps = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.modified = value;
    };

    $scope.setDeepSquat = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.deepSquat = value;

        $("#deep-green").removeClass("deep-green-shown");
        $("#iluminationText1").removeClass("iluminationText1-shown");
        $("#deep-blue").removeClass("deep-blue-shown");
        $("#iluminationText2").removeClass("iluminationText2-shown");
        $("#deep-red").removeClass("deep-red-shown");
        $("#iluminationText3").removeClass("iluminationText3-shown");

        switch (value) {
            case 0:
                $("#deep-red").addClass("deep-red-shown");
                $("#iluminationText3").addClass("iluminationText3-shown");
                
                break;
            case 1:
                $("#deep-blue").addClass("deep-blue-shown");
                $("#iluminationText2").addClass("iluminationText2-shown");
                break;
            case 2:
                $("#deep-green").addClass("deep-green-shown");
                $("#iluminationText1").addClass("iluminationText1-shown");
                break;
        }
        
    }

    $scope.setStraightLeg = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.activeStraightLegRaise = value;
    };

    $scope.setShoulderMobility = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.shoulderMobility = value;
    };

    $scope.submitAllValues = function () {
        $scope.allValues.userid = $scope.userid;
        $scope.allValues.provider = $scope.provider;
        $scope.allValues.sex = $scope.sex;
        $scope.allValues.heartCondition = $scope.heartCondition;
        $scope.allValues.painChest = $scope.painChest;
        $scope.allValues.fatherCardiovascularDisease = $scope.fatherCardiovascularDisease;
        $scope.allValues.motherCardiovascularDisease = $scope.motherCardiovascularDisease;
        $scope.allValues.diabetes = $scope.diabetes;
        $scope.allValues.sitting = $scope.sitting;
        $scope.allValues.doYouSmoke = $scope.doYouSmoke;
        $scope.allValues.exposedSmoke = $scope.exposedSmoke;
        $scope.allValues.consumeAlcohol = $scope.consumeAlcohol;
        $scope.allValues.antibiotics = $scope.antibiotics;
        $scope.allValues.rateFitness = $scope.rateFitness;
        $scope.allValues.rankFitness = $scope.rankFitness;
        $scope.allValues.participe = $scope.participe;
        $scope.allValues.planning = $scope.planning;
        $scope.allValues.shoulderClearingTest = $scope.shoulderClearingTest;
        $scope.allValues.spinalFlexion = $scope.spinalFlexion;
        $scope.allValues.spinalExtension = $scope.spinalExtension;
        $scope.allValues.modified = $scope.modified;
        $scope.allValues.deepSquat = $scope.deepSquat;
        $scope.allValues.activeStraightLegRaise = $scope.activeStraightLegRaise;
        $scope.allValues.shoulderMobility = $scope.shoulderMobility;

        // values from number control 
        $scope.allValues.birthday = birthday;
        $scope.allValues.daybirth = birthday.getDate();
        $scope.allValues.monthbirth = birthday.getMonth() + 1;
        $scope.allValues.yearbirth = birthday.getFullYear();
        $scope.allValues.howold = $scope.howold;
        var valueTemp = $scope.howHeight.replace(/'/g, '');
        var index = valueTemp.indexOf(' ');
        var feet = 0;
        var inch = 0;
        if (index >= 0) {
            feet = valueTemp.substring(0, index);
            inch = valueTemp.substring(index + 1, valueTemp.lenght);
        }
        $scope.allValues.howHeightFeet = feet;
        $scope.allValues.howHeightInch = inch;
        $scope.allValues.howWeight = $scope.howWeight;
        $scope.allValues.howWaist = $scope.howwaist.replace(/'/g, '');
        $scope.allValues.howHip = $scope.howhip.replace(/'/g, '');
     
        var index = $scope.howSide.indexOf('s');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSide.substring(0, index);
        }
        $scope.allValues.sideBridge = value;

        var index = $scope.howSideLeft.indexOf('s');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSideLeft.substring(0, index);
        }
        $scope.allValues.sideBridgeLeft = value;

        $scope.allValues.moderateExercise = $scope.howmod;
        $scope.allValues.vigorous = $scope.howvig;
        $scope.allValues.systolic = $scope.howsys;
        $scope.allValues.Diastolic = $scope.howdia;
       
        var index = $scope.numPush.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.numPush.substring(0, index);
        }
        $scope.allValues.pushs = value;

        var index = $scope.numMBCM.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            value = $scope.numMBCM.substring(0, index);
        }
        $scope.allValues.throws = value;

        var index = $scope.numCOO.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.numCOO.substring(0, index);
        }
        $scope.allValues.cooper = value;
        $scope.allValues.fisrtName = $scope.firstname;
        $scope.allValues.lastName = $scope.lastName;
        $scope.allValues.email = $scope.email;

        if ($scope.datelocal == undefined || $scope.datelocal == null) {
            var local = new Date();
            $scope.allValues.datelocal = local;
            $scope.allValues.datelocalN = local.getFullYear() + "-";
            var pad = "00";
            var str = (local.getMonth() + 1).toString();
            var value = pad.substring(0, pad.length - str.length) + str;
            $scope.allValues.datelocalN += value + "-";
            str = local.getDate().toString();
            value = pad.substring(0, pad.length - str.length) + str;
            $scope.allValues.datelocalN += value + " ";
            str = local.getHours().toString();
            value = pad.substring(0, pad.length - str.length) + str;
            $scope.allValues.datelocalN += value + ":";
            str = local.getMinutes().toString();
            value = pad.substring(0, pad.length - str.length) + str;
            $scope.allValues.datelocalN += value + ":";
            str = local.getSeconds().toString();
            value = pad.substring(0, pad.length - str.length) + str;
            $scope.allValues.datelocalN += value;
        }
        else 
        {
            $scope.allValues.datelocal = $scope.datelocal;
            $scope.allValues.datelocalN = $scope.datelocal;
        }

        if (!_.isUndefined($scope.selectedLocation)) {
            $scope.allValues.cityId = $scope.selectedLocation.cityId;
        }
        else {
            $scope.allValues.cityId = 0;
        }
        
        $scope.allValues.currentPagePosition = swiper.activeIndex;

        localStorage.setItem("questionFactoryAllValues", JSON.stringify($scope.allValues));
        //console.dir(JSON.parse(localStorage.getItem("queryQuestionTempFactory")));

        /*
        var rex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if ($scope.firstname != "" && $scope.lastName != "" && ($scope.email != "" && rex.test($scope.email)))
        {
            $("#idbtnsubmit").css("background-color", "rgb(255, 162, 2)");
        }
        else 
        {
            $("#idbtnsubmit").css("background-color", "rgb(221, 221, 221)");
        }
        */
    };

    $scope.validateEmail = function(){
        var rex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (rex.test($scope.email)) {
            $("#idemail").css("border-color", "#ffffff");
            ///$scope.submitAllValues();
        }
        else {
            $("#idemail").css("border-color", "red");
            $("#idbtnsubmit").css("background-color", "rgb(221, 221, 221)");
            
        }
    }

    var stopTime;
    
    $scope.slidePageForward = function () {
        //swiper.slideTo(5);
        
        var flagNextSlide = false;
        
        if (swiper.activeIndex == 20)
        {
            var index = $("#inputHeight").val().indexOf(' ');
            var feet = 0;
            var inch = 0;
            if (index >= 0) {
                feet = parseInt($("#inputHeight").val().substring(0, index));
                inch = parseInt($("#inputHeight").val().substring(index + 1, $("#inputHeight").val().lenght));
            }

            var weight = parseInt($("#inputWeight").val());

            if ((feet + inch > 0) && (weight > 0)) 
            {
                flagNextSlide = true;
            }
        }
        else if (swiper.activeIndex == 21) {
            var howwaistv = $("#inputWaist").val().replace(/'/g, '');
            var howhipv = $("#inputHip").val().replace(/'/g, '');
         
            if ((howwaistv > 0) && (howhipv > 0)) {
                flagNextSlide = true;
            }
        }
        else if (swiper.activeIndex == 19) {
            
            var sysddata = parseInt($("#inputSys").val());
            var diadata = parseInt($("#inputDia").val());
            
            if ((sysddata > 0) && (diadata > 0)) {
                flagNextSlide = true;
            }
        }
        else {
            flagNextSlide = true;
        }
        
        if (flagNextSlide) {
            stopTime = $interval(timerNextSlide, 500);
        }
    
    };

    var doChangeImages = function () {
        if ($scope.sex == 0) {
            $scope.imgActive1 = "styles/mztimgs/assessment/leongallegraise1.png";
            $scope.imgActive2 = "styles/mztimgs/assessment/leongallegraise2.png";
            $scope.imgActive3 = "styles/mztimgs/assessment/leongallegraise3.png";

            $scope.DeepSquat1L = "styles/mztimgs/assessment/leongalsquat1.png";
            $scope.DeepSquat1R = "styles/mztimgs/assessment/leongalsqaut1side.png";
            $scope.DeepSquat2L = "styles/mztimgs/assessment/leongalsquat2.png";
            $scope.DeepSquat2R = "styles/mztimgs/assessment/leongalsqaut2side.png";
            $scope.DeepSquat3L = "styles/mztimgs/assessment/leongalsquat3.png";
            $scope.DeepSquat3R = "styles/mztimgs/assessment/leongalsqaut3side.png";

            $scope.imgShouldeClearing1 = "styles/mztimgs/assessment/leongalshoulderpain1.png";
            $scope.imgShouldeClearing2 = "styles/mztimgs/assessment/leongalshoulderpain2.png";

            $scope.imgSpinalExtension = "styles/mztimgs/assessment/leongalextension.png";
            $scope.imgSpinalExtensionClearing = "styles/mztimgs/assessment/leongalflexion.png";

            $scope.imgsidebridge = "styles/mztimgs/assessment/leongalsidebridge.png";
        }
        else {
            $scope.imgActive1 = "styles/mztimgs/assessment/leonguylegraise1.png";
            $scope.imgActive2 = "styles/mztimgs/assessment/leonguylegraise2.png";
            $scope.imgActive3 = "styles/mztimgs/assessment/leonguylegraise3.png";

            $scope.DeepSquat1L = "styles/mztimgs/assessment/leonguysquat1.png";
            $scope.DeepSquat1R = "styles/mztimgs/assessment/leonguysquat1side.png";
            $scope.DeepSquat2L = "styles/mztimgs/assessment/leonguysquat2.png";
            $scope.DeepSquat2R = "styles/mztimgs/assessment/leonguysquat2side.png";
            $scope.DeepSquat3L = "styles/mztimgs/assessment/leonguysquat3.png";
            $scope.DeepSquat3R = "styles/mztimgs/assessment/leonguysquat3side.png";

            $scope.imgShouldeClearing1 = "styles/mztimgs/assessment/leonguyshoulderpain1.png";
            $scope.imgShouldeClearing2 = "styles/mztimgs/assessment/leonguyshoulderpain2.png";

            $scope.imgSpinalExtension = "styles/mztimgs/assessment/leonguyextension.png";
            $scope.imgSpinalExtensionClearing = "styles/mztimgs/assessment/leonguyflexion.png";

            $scope.imgsidebridge = "styles/mztimgs/assessment/leonguysidebridge.png";
        }
    }

    var timerNextSlide = function () {
        $interval.cancel(stopTime);
        swiper.slideNext();
        checkSwiperPage();
        $scope.cbj_step_next();
    }

    $scope.slidePageBackward = function () {
        swiper.slidePrev();
        checkSwiperPage();
    };

    var checkSwiperPage = function () {
        if ($rootScope.phoneDevice < 0) {
            $scope.scoreBack = false;
            $scope.scoreNext = false;
            if (swiper.activeIndex == 0) {
                $scope.scoreBack = true;
            }
            else if (swiper.activeIndex == 32) {
                $scope.scoreNext = true;
            }
        }
    }

    $scope.doSave = function () {
        if ($scope.allValues.idform == "")
        {
            $("#dialog").dialog("open");
            $scope.submitAllValues();
            apiServices.getData($scope.allValues, 'api/Assessments/AddUpdate')
            .then(function (data) {
                //Assessment
                HealthPoints = data.health;
                LifestylePoints = data.Lifestyle;
                BiodataPoints = data.Biodata;
                MobilityPoints = data.Mobility;
                FitnessPoints = data.Fitness;

                //Fitness
                SideBridgeFitness = data.FitnessPoints.SideBridge;
                SideBridgeLeftFitness = data.FitnessPoints.SideBridgeLeft;
                PushuptestFitness = data.FitnessPoints.Pushuptest;
                MBThrowFitness = data.FitnessPoints.MBThrow;
                CoopertestFitness = data.FitnessPoints.Coopertest;
                SideBridgePoints = data.FitnessPoints.SideBridgePercentil;
                PushuptestPoints = data.FitnessPoints.PushuptestPercentil;
                MBThrowPoints = data.FitnessPoints.MBThrowPercentil;
                CoopertestPoints = data.FitnessPoints.CoopertestPercentil;
                PuntosFitness = data.FitnessPoints.points;

                var dataTemp = {
                    WaisthipScore: data.WaisthipScore,
                    bmiScore: data.bmiScore,
                    byAreas: data
                }

                fillFitnessScore(dataTemp);

                //Biometrics
                SystolicBiometrics = data.BiometricsPoints.Systolic;
                DiastolicBiometrics = data.BiometricsPoints.Diastolic;
                HowWaistBiometrics = data.BiometricsPoints.HowWaist;
                HowHipBiometrics = data.BiometricsPoints.HowHip;
                BMIBiometrics = data.BiometricsPoints.BMI;
                SystolicptsPercentilPoints = data.BiometricsPoints.SystolicptsPercentil;
                DiastolicPercentilPoints = data.BiometricsPoints.DiastolicPercentil;
                WaistToHipPercentilPoints = data.BiometricsPoints.WaistToHipPercentil;
                BMIPercentilPoints = data.BiometricsPoints.BMIPercentil;
                PuntosBiometrics = data.BiometricsPoints.points;

                //Mobility
                DeepSquatMobility = data.MobilityPoints.DeepSquat;
                ActiveStraightLegRaiseMobility = data.MobilityPoints.ActiveStraightLegRaise;
                ShoulderMobilityMobility = data.MobilityPoints.ShoulderMobility;
                ShoulderClearingTestMobility = data.MobilityPoints.ShoulderClearingTest;
                SpinalFlexionMobility = data.MobilityPoints.SpinalFlexion;
                SpinalExtensionMobility = data.MobilityPoints.SpinalExtension;
                DeepSquatPercentilPoints = data.MobilityPoints.DeepSquatPercentil;
                ActiveStraightLegRaisePercentilPoints = data.MobilityPoints.ActiveStraightLegRaisePercentil;
                ShoulderMobilityPercentilPoints = data.MobilityPoints.ShoulderMobilityPercentil;
                ShoulderClearingTestPercentilPoints = data.MobilityPoints.ShoulderClearingTestPercentil;
                SpinalFlexionPercentilPoints = data.MobilityPoints.SpinalFlexionPercentil;
                SpinalExtensionPercentilPoints = data.MobilityPoints.SpinalExtensionPercentil;
                PuntosMobility = data.MobilityPoints.points;

                //Lifestyle
                ModerateExerciseLifestyle = data.LifestylePoints.ModerateExercise;
                VigorousLifestyle = data.LifestylePoints.Vigorous;
                SittingLifestyle = data.LifestylePoints.Sitting;
                SmokeLifestyle = data.LifestylePoints.Smoke;
                SecondhandsmokeLifestyle = data.LifestylePoints.Secondhandsmoke;
                AlcoholLifestyle = data.LifestylePoints.Alcohol;
                AntibioticsLifestyle = data.LifestylePoints.Antibiotics;
                ModerateExercisePercentilPoints = data.LifestylePoints.ModerateExercisePercentil;
                VigorousPercentilPoints = data.LifestylePoints.VigorousPercentil;
                SittingPercentilPoints = data.LifestylePoints.SittingPercentil;
                SmokePercentilPoints = data.LifestylePoints.SmokePercentil;
                SecondhandsmokePercentilPoints = data.LifestylePoints.SecondhandsmokePercentil;
                AlcoholPercentilPoints = data.LifestylePoints.AlcoholPercentil;
                AntibioticsPercentilPoints = data.LifestylePoints.AntibioticsPercentil;
                PuntosLifestyle = data.LifestylePoints.points;

                $scope.avarage = data.avarage;
                $scope.totalUsers = data.totalUsers;
                $scope.puntos = data.points;

                localStorage.removeItem('questionFactoryAllValues');

                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                var yyyy = $scope.allValues.datelocal.getFullYear().toString();
                var mm = ($scope.allValues.datelocal.getMonth()); // getMonth() is zero-based
                var dd = $scope.allValues.datelocal.getDate().toString();

                $scope.datedone = monthNames[mm] + " " + dd + " of " + yyyy;

                $scope.hideAll = true;
                $scope.hidepoints = false;
                $scope.doneSubmitwebPoints = false;

                $("#dialog").dialog("close");

                $scope.goradioScoreQ(1);


            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });

        }
        else {
            $scope.back();
        }
    };

    
    var getOneData = function () {
        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push(queryQuestionFactory.id);
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Assessments/QueryOneUserQuestions')
        .then(function (data) {
            fillData(data);
            $scope.submitAllValues();
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };

    $scope.userid = "";
    $scope.provider = $rootScope.userId.userId;

    var fillData = function (data) {
        $scope.datelocal = new Date(data.datelocal);
        $scope.userid = data.userid;
        $scope.provider = data.provider;
        $scope.setGender(data.sex);
        $scope.howold = data.howold;
        birthday = new Date(data.birthday);
        convertDate();
        $scope.howHeight = data.howHeightFeet + "\' " + data.howHeightInch + "\'\'";
        $scope.howWeight = data.howWeight;
        $scope.setCardio("#Car-Id", data.heartCondition);
        $scope.setChest("#Che-Id", data.painChest);
        $scope.setFather("#Fat-Id", data.fatherCardiovascularDisease);
        $scope.setMother("#Mot-Id", data.motherCardiovascularDisease);
        $scope.setDiabetes("#Dia-Id", data.diabetes);
        $scope.howmod = data.moderateExercise;
        $scope.howvig = data.vigorous;
        $scope.setSitting("#sit-id", data.sitting);
        $scope.setSmokeAverage("#smo-id", data.doYouSmoke);
        $scope.setHandSmoke("#smokes-id", data.exposedSmoke);
        $scope.setAlcohol("#alc-id", data.consumeAlcohol);
        $scope.setAntibiotics("#ant-id", data.antibiotics);
        $scope.setFitness("#rated-id", data.rateFitness);
        $scope.setLifeTime("#life-id", data.rankFitness);
        $scope.setCompetitiveEvent("#org-id", data.participe);
        $scope.setOrganisedEvent("#planing-id", data.planning);
        $scope.howsys = data.systolic;
        $scope.howdia = data.Diastolic;
        $scope.howwaist = data.howWaist + "\'\'";
        $scope.howhip = data.howHip + "\'\'";
        $scope.howSide = data.sideBridge + "s";
        $scope.howSideLeft = data.sideBridgeLeft + "s";
        $scope.setDeepSquat("#dee-id", data.deepSquat)
        $scope.setStraightLeg("#act-id", data.activeStraightLegRaise);
        $scope.setShoulderMobility("#mob-id", data.shoulderMobility);
        $scope.setShoulder("#sho-id", data.shoulderClearingTest);
        $scope.setSpinalFlexion("#spi-id", data.spinalFlexion);
        $scope.setSpinalExtension("#spi-ext-id", data.spinalExtension);
        $scope.setModifiedMaxPushUps("#push-id", data.modified);
        $scope.numPush = data.pushs + " Push Ups ";
        $scope.numMBCM = data.throws + "\'";
        $scope.numCOO = data.cooper + " miles";
        
        $scope.firstname = data.fisrtName;
        $scope.lastName = data.lastName;
        $scope.email = data.email;
        _.each($scope.locationList, function (location, index) {
            if (location.cityId == data.cityId) {
                $scope.selectedLocation = location;
            }
        });

        if (localStorage.getItem("questionFactoryAllValues") === null) {
            //Assessment
            HealthPoints = data.health;
            LifestylePoints = data.lifestyle;
            BiodataPoints = data.biodata;
            MobilityPoints = data.mobility;
            FitnessPoints = data.fitness;

            //Fitness
            SideBridgeFitness = data.byAreas.FitnessPoints.SideBridge;
            SideBridgeLeftFitness = data.byAreas.FitnessPoints.SideBridgeLeft;
            PushuptestFitness = data.byAreas.FitnessPoints.Pushuptest;
            MBThrowFitness = data.byAreas.FitnessPoints.MBThrow;
            CoopertestFitness = data.byAreas.FitnessPoints.Coopertest;
            SideBridgePoints = data.byAreas.FitnessPoints.SideBridgePercentil;
            PushuptestPoints = data.byAreas.FitnessPoints.PushuptestPercentil;
            MBThrowPoints = data.byAreas.FitnessPoints.MBThrowPercentil;
            CoopertestPoints = data.byAreas.FitnessPoints.CoopertestPercentil;
            PuntosFitness = data.byAreas.FitnessPoints.points;

            fillFitnessScore(data);

            //Biometrics
            SystolicBiometrics = data.byAreas.BiometricsPoints.Systolic;
            DiastolicBiometrics = data.byAreas.BiometricsPoints.Diastolic;
            HowWaistBiometrics = data.byAreas.BiometricsPoints.HowWaist;
            HowHipBiometrics = data.byAreas.BiometricsPoints.HowHip;
            BMIBiometrics = data.byAreas.BiometricsPoints.BMI;
            SystolicptsPercentilPoints = data.byAreas.BiometricsPoints.SystolicptsPercentil;
            DiastolicPercentilPoints = data.byAreas.BiometricsPoints.DiastolicPercentil;
            WaistToHipPercentilPoints = data.byAreas.BiometricsPoints.WaistToHipPercentil;
            BMIPercentilPoints = data.byAreas.BiometricsPoints.BMIPercentil;
            PuntosBiometrics = data.byAreas.BiometricsPoints.points;

            //Mobility
            DeepSquatMobility = data.byAreas.MobilityPoints.DeepSquat;
            ActiveStraightLegRaiseMobility = data.byAreas.MobilityPoints.ActiveStraightLegRaise;
            ShoulderMobilityMobility = data.byAreas.MobilityPoints.ShoulderMobility;
            ShoulderClearingTestMobility = data.byAreas.MobilityPoints.ShoulderClearingTest;
            SpinalFlexionMobility = data.byAreas.MobilityPoints.SpinalFlexion;
            SpinalExtensionMobility = data.byAreas.MobilityPoints.SpinalExtension;
            DeepSquatPercentilPoints = data.byAreas.MobilityPoints.DeepSquatPercentil;
            ActiveStraightLegRaisePercentilPoints = data.byAreas.MobilityPoints.ActiveStraightLegRaisePercentil;
            ShoulderMobilityPercentilPoints = data.byAreas.MobilityPoints.ShoulderMobilityPercentil;
            ShoulderClearingTestPercentilPoints = data.byAreas.MobilityPoints.ShoulderClearingTestPercentil;
            SpinalFlexionPercentilPoints = data.byAreas.MobilityPoints.SpinalFlexionPercentil;
            SpinalExtensionPercentilPoints = data.byAreas.MobilityPoints.SpinalExtensionPercentil;
            PuntosMobility = data.byAreas.MobilityPoints.points;

            //Lifestyle
            ModerateExerciseLifestyle = data.byAreas.LifestylePoints.ModerateExercise;
            VigorousLifestyle = data.byAreas.LifestylePoints.Vigorous;
            SittingLifestyle = data.byAreas.LifestylePoints.Sitting;
            SmokeLifestyle = data.byAreas.LifestylePoints.Smoke;
            SecondhandsmokeLifestyle = data.byAreas.LifestylePoints.Secondhandsmoke;
            AlcoholLifestyle = data.byAreas.LifestylePoints.Alcohol;
            AntibioticsLifestyle = data.byAreas.LifestylePoints.Antibiotics;
            ModerateExercisePercentilPoints = data.byAreas.LifestylePoints.ModerateExercisePercentil;
            VigorousPercentilPoints = data.byAreas.LifestylePoints.VigorousPercentil;
            SittingPercentilPoints = data.byAreas.LifestylePoints.SittingPercentil;
            SmokePercentilPoints = data.byAreas.LifestylePoints.SmokePercentil;
            SecondhandsmokePercentilPoints = data.byAreas.LifestylePoints.SecondhandsmokePercentil;
            AlcoholPercentilPoints = data.byAreas.LifestylePoints.AlcoholPercentil;
            AntibioticsPercentilPoints = data.byAreas.LifestylePoints.AntibioticsPercentil;
            PuntosLifestyle = data.byAreas.LifestylePoints.points;
        }
        
        $scope.avarage = data.avarage;
        $scope.totalUsers = data.totalUsers;
        $scope.puntos = data.points;
        
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dateTamp = new Date(data.datelocal);

        var yyyy = dateTamp.getFullYear().toString();
        var mm = (dateTamp.getMonth()); // getMonth() is zero-based
        var dd = dateTamp.getDate().toString();

        $scope.datedone = monthNames[mm] + " " + dd + " of " + yyyy;
        $scope.currentPagePosition = data.currentPagePosition;

        swiper.slideTo($scope.currentPagePosition);

        if ($window.sessionStorage["idformbyuser"] !== undefined) {
            $scope.goradioScoreQ(1);
        }

    };

    var prepara = function () {
        if ($rootScope.phoneDevice >= 0) {
            PutScrollNumber('inputAge', 100, 14, 35);
            PutScrollNumber('inputMod', 7, 0, 0);
            PutScrollNumber('inputVig', 7, 0, 0);
            PutScrollNumber('inputSys', 200, 50, 120);
            PutScrollNumber('inputDia', 200, 30, 70);

            var values = [];
            for (var x = 10; x < 120; x++) {
                values.push(x);
            }

            var wheel = [[
                            {
                                circular: false,
                                data: values,
                            },
                            {
                                data: [.0, .25, .50, .75]
                            }
            ]];
            PutScroll('inputWaist', true, wheel);
            PutScroll('inputHip', true, wheel);
            PutScrollNumber('inputSide', 200, 0, 60);
            PutScrollNumber('inputSideLeft', 200, 0, 60);
            PutScrollNumber('inputPush', 100, 0, 15);
        }
        else {
            PutScrollNumPad('inputAge', 100, 14, 0, 0);
            PutScrollNumPad('inputMod', 7, 0, 0, 0);
            PutScrollNumPad('inputVig', 7, 0, 0, 0);
            PutScrollNumPad('inputSys', 220, 50, 0, 0);
            PutScrollNumPad('inputDia', 200, 30, 0, 0);
            PutScrollNumPad('inputWaist', 120, 10, 0, 2);
            PutScrollNumPad('inputHip', 120, 10, 0, 2);
            PutScrollNumPad('inputSide', 200, 0, 0, 0);
            PutScrollNumPad('inputSideLeft', 200, 0, 0, 0);
            PutScrollNumPad('inputPush', 100, 0, 0, 0);
        }

        var wheel = [[
                     {
                         circular: false,
                         data: [4, 5, 6, 7, 8],
                         label: 'Feet'
                     },
                     {
                         circular: false,
                         data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                         label: 'Inchs'
                     }
        ]];
        PutScroll('inputHeight', true, wheel);
        PutScrollNumPad('inputWeight', 400, 1, 0, 0);

        var valuesOne = [];
        for (var x = 0; x <= 100; x++) {
            valuesOne.push(x);
        }
        var wheel = [[
                        {
                            circular: false,
                            data: valuesOne,
                        },
                        {
                            data: [.0, .25, .50, .75]
                        }
        ]];
        PutScroll('inputChest', true, wheel);
        PutScrollNumPad('inputCooper', 100, 0, 0, 2);
    }


    var PutScrollNumber = function (idElement, varMax, varMin, varDefault) {
        var myEl = $element.find("#" + idElement);
        myEl.mobiscroll().number({
            lang: 'en-US',
            theme: 'ios',
            mode: 'scroller',
            step: '1',
            max: varMax,
            min: varMin,
            defaultValue: varDefault,
            onSet: function (event, inst) {
                if ($(".swiper-slide-active").find("#core-id").length > 0) {
                    if (parseInt($(".swiper-slide-active #inputSide").val()) > 0 && parseInt($(".swiper-slide-active #inputSideLeft").val()) > 0) {
                        $scope.slidePageForward();
                    }
                } else {
                    $scope.slidePageForward();
                }
            }
        });
    }

    var PutScrollNumPad = function (idElement, varMax, varMin, varDefault, varScale) {
        var myEl = $element.find("#" + idElement);
        myEl.mobiscroll().numpad({
            lang: 'en-US',
            mode: 'scroller',
            theme: 'ios',
            preset: 'decimal',
            max: varMax,
            min: varMin,
            defaultValue: varDefault,
            scale: varScale,
            onSet: function (event, inst) {
                if ($(".swiper-slide-active").find("#core-id").length > 0) {
                    if (parseInt($(".swiper-slide-active #inputSide").val()) > 0 && parseInt($(".swiper-slide-active #inputSideLeft").val()) > 0) {
                        $scope.slidePageForward();
                    }
                } else {
                    $scope.slidePageForward();
                }
            }
        });
    }

    var PutScroll = function (idElement, label, wheel) {
        var myEl = $element.find('#' + idElement);
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',
            theme: 'ios',
            showLabel: label,
            wheels: wheel,
            formatValue: function (data) {
                var value = undefined
                if (idElement == "inputHeight") {
                    value = data[0] + " " + data[1];
                }
                else {
                    value = parseFloat(data[0]) + parseFloat(data[1]);
                }
                
                return value;
            },
            onSet: function (event, inst) {
                $scope.slidePageForward();
            }
        });
    }

    prepara();

    $scope.gohowHeight = function (howHeight) {
        var index = howHeight.indexOf(' ');
        var feet = 0;
        var inch = 0;
        if (index >= 0) {
            feet = howHeight.substring(0, index);
            inch = howHeight.substring(index + 1, howHeight.lenght);
        }
        $scope.howHeight = feet + '\' ' + inch + '\'\'';
    }

    $scope.gohowwaist = function (howwaist) {
        var howwaistv = howwaist.replace(/'/g, '');
        $scope.howwaist = howwaistv + '\'\'';
    }

    $scope.gohowhip = function (howhip) {
        var howhipv = howhip.replace(/'/g, '');
        $scope.howhip = howhipv + '\'\'';
    }

    var flagSidebrige = false;
    var flagSidebrigeCounter = false;
    var contersidebridge = 0;
    $scope.contersidebridge = "0";
    $scope.StopStart = "Stop";

    $scope.setBridge = function (value) {
        //rgb(0, 128, 0) green
        //rgb(255, 255, 255) white
        //rgb(255, 0, 0) red
        if (!flagSidebrige) {
          
            if (value == 0)
            {
                var color = $("#idsidebridge").css("background-color");
                if (color == "rgb(255, 162, 2)") {
                    $("#idsidebridge").css("background-color", "white");
                    $("#idsidebridge").css("color", "#a5a5a5");
                }
                else {
                    $("#idsidebridge").css("background-color", "rgb(255, 162, 2)");
                    $("#idsidebridge").css("color", "white");
                    $("#idsidebridgeleft").css("background-color", "white");
                    $("#idsidebridgeleft").css("color", "#a5a5a5");
                }
            }
            else
            {
                var color = $("#idsidebridgeleft").css("background-color");
                if (color == "rgb(255, 162, 2)") {
                    $("#idsidebridgeleft").css("background-color", "white");
                    $("#idsidebridgeleft").css("color", "#a5a5a5");
                }
                else {
                    $("#idsidebridgeleft").css("background-color", "rgb(255, 162, 2)");
                    $("#idsidebridgeleft").css("color", "white");
                    $("#idsidebridge").css("background-color", "white");
                    $("#idsidebridge").css("color", "#a5a5a5");
                }
            }
            var color0 = $("#idsidebridge").css("background-color");
            var color1 = $("#idsidebridgeleft").css("background-color");
            if (color0 == "rgb(255, 255, 255)" && color1 == "rgb(255, 255, 255)") {
                $("#idstartCircle").css("background-color", "red");
                $scope.StopStart = "Stop";
                flagSidebrigeCounter = false;
            }
            else {
                $("#idstartCircle").css("background-color", "green");
                $("#idstarttext").html("Start");
                $scope.StopStart = "Start";
                flagSidebrigeCounter = true;
            }
        }
    }

    var stopTimeSideBridge;
    
    $scope.startCountersideBridge = function () {
        if (flagSidebrigeCounter) {
            var color = $("#idstartCircle").css("background-color");
            if (color == "rgb(255, 0, 0)") {
                $interval.cancel(stopTimeSideBridge);
                flagSidebrige = false;
                flagSidebrigeCounter = true;

                var color0 = $("#idsidebridge").css("background-color");
                if (color0 == "rgb(255, 162, 2)") {
                    $scope.howSide = $scope.contersidebridge + "s";
                }
                else {
                    $scope.howSideLeft = $scope.contersidebridge + "s";
                }
                contersidebridge = 0;
                $scope.contersidebridge = contersidebridge;

                $("#idstartCircle").css("background-color", "green");
                $scope.StopStart = "Start";
                $("#idstarttext").html("Start");
                flagSidebrigeCounter = true;

            }
            else {
                stopTimeSideBridge = $interval(stopBridgeCounter, 1000);
                $("#idstartCircle").css("background-color", "red");
                $("#idstarttext").html("Stop");
                flagSidebrige = true;
            }
        }
    }
    
    var stopBridgeCounter = function () {
      
        contersidebridge++;
        //var str = "" + contersidebridge;
        //var pad = "000";
        //var ans = pad.substring(0, pad.length - str.length) + str
        $scope.contersidebridge = contersidebridge;
    }

    $scope.clickSideBridge = function () {
        

        if (!flagSidebrige && flagSidebrigeCounter) {
            $("#inputSide").click();
        }
    }

    $scope.gohowSideBridge = function () {
        var color0 = $("#idsidebridge").css("background-color");
        if (color0 == "rgb(255, 162, 2)") {
            $scope.howSide = $scope.howSideBridge + "s";
        }
        else {
            $scope.howSideLeft = $scope.howSideBridge + "s";
        }
        console.log($scope.howSide);
        console.log($scope.howSideLeft);
    }

   
    $scope.gohowSide = function (howSide) {
        var index = howSide.indexOf('s');
        if (index >= 0) {
            howSide = howSide.substring(0, index);
        }
        $scope.howSide = howSide + 's';
    }

    $scope.gohowSideLeft = function (howSideLeft) {
        var index = howSideLeft.indexOf('s');
        if (index >= 0) {
            howSideLeft = howSideLeft.substring(0, index);
        }
        $scope.howSideLeft = howSideLeft + 's';
    }

    $scope.gonumPush = function (numPush) {
        var index = numPush.indexOf(' ');
        if (index >= 0) {
            numPush = numPush.substring(0, index);
        }
        $scope.numPush = numPush + " Push Ups ";
    }

    $scope.gonumMBCM = function (numMBCM) {
        var index = numMBCM.indexOf('\'');
        if (index >= 0) {
            numMBCM = numMBCM.substring(0, index);
        }
        $scope.numMBCM = numMBCM + "\'";
    }

    $scope.gonumCOO = function (numCOO) {
        var index = numCOO.indexOf(' ');
        if (index >= 0) {
            numCOO = numCOO.substring(0, index);
        }
        $scope.numCOO = numCOO + " miles";
    }

    var birthday = new Date();
    var defaultValues = function () {
        // number controls
        $scope.howold = 0;
        birthday = new Date();
        $scope.howHeight = '0\' 0\'\'';
        $scope.howWeight = 0;
        $scope.howmod = 0;
        $scope.howvig = 0;
        $scope.howsys = 0;
        $scope.howdia = 0;
        $scope.howwaist = '0\'\'';
        $scope.howhip = '0\'\'';
        $scope.howSide = '100s';
        $scope.howSideLeft = '100s';
        $scope.numPush = 0 + ' Push Ups ';
        $scope.numMBCM = 0.00 + "\'";
        $scope.numCOO = 0 + " miles";
    }

    defaultValues();
    
    var init = function () {
        //console.dir($window.sessionStorage["statequestion"]);
        //console.dir($window.sessionStorage["question"]);
        if (parseInt($window.sessionStorage["statequestion"]) === 1) {
            queryQuestionFactory = JSON.parse($window.sessionStorage["question"]);
            $scope.allValues.idform = queryQuestionFactory.id;
            flagStatus = queryQuestionFactory.status;
           
            if (flagStatus == "") {
                $scope.assessmentecover = true;
            }
            else {
                $scope.assessmentdeleted = true;
            }
           
            if (localStorage.getItem("questionFactoryAllValues") !== null) {
                fillData(JSON.parse(localStorage.getItem("questionFactoryAllValues")));
            } else {
                getOneData();
            }
         
            if ($window.sessionStorage["idformbyuser"] === undefined) {
                $scope.hideAll = true;
                $scope.hidepoints = true;
                $scope.hideScoreQ = false;
            }
           
      
        } else {
            if (localStorage.getItem("questionFactoryAllValues") !== null) {
                fillData(JSON.parse(localStorage.getItem("questionFactoryAllValues")));
            }
            else 
            {
                $scope.hideAll = false;
                $scope.barProcess = false;
            }
        }
    };

    $scope.hideScoreQ = true;

    $scope.goGetScoreQ = function () {
        flagMoveFitness = false;
        flagMoveBiometrics = false;
        flagFirstTime = false;
        flagMoveFitness = false;
        flagMoveBiometrics = false;
        if ($scope.indexforms == 0) {
            queryQuestionFactory.id = $scope.arrayidforms[1].idform;
            $scope.indexforms = 1;
        }
        else
        {
            queryQuestionFactory.id = $scope.arrayidforms[0].idform;
            $scope.indexforms = 0;
        }
        hideAllScore();
        localStorage.removeItem("questionFactoryAllValues");
        getOneData();
        $scope.goradioScoreQ(1);
 
    }
    
    var hideAllScore = function () {
        $scope.scoreBeforeDay = true;
        $scope.hideScoreQ = true;
        $scope.scoreAnimated = true;
        $scope.hideLifeStyleScore = true;
        $scope.hideBiometricsScore = true;
        $scope.hideMobilityScore = true;
        $scope.scoreFooter = true;
        $scope.scoreChart = true;
        $scope.scoreAssessmentChart = false;
        $scope.alternativeScore = true;
        $scope.alternativeScoreItems = true;
        $scope.alternativeScoreFitness = true;
        $scope.alternativeScoreFitnessButtons = true;
        $scope.scoreBack = true;
        $scope.score3 = true;
        $scope.score4 = true;
        $scope.score5 = true;
        $scope.hideheaderscore = true;

        //odometer(0, sizeOdometer, "assessment");
    }

    var flagFirstTime = false;
    $scope.scoreNext = true;


    $scope.goradioScoreQ = function (value) {
      

        $("#score-header-label").css("color", "#FAFEFE");
        hideAllScore();
        onScore = false;
        if (value == 0) {
            if ($rootScope.phoneDevice < 0)
            {
                $scope.scoreNext = false;
            }
            $scope.hideAll = false;
            $scope.barProcess = false;
        }
        else if (value == 1 && $scope.hideAll) {

            $scope.hidepoints = false;
            $scope.doneSubmitwebPoints = false;
            

            if ($scope.indexforms == 0) {
                $scope.puntos = $scope.arrayidforms[0].points;
                $scope.avarage = $scope.arrayidforms[0].avarage;
            }
            else
            {
                $scope.puntos = $scope.arrayidforms[1].points;
                $scope.avarage = $scope.arrayidforms[1].avarage;
            }

            if (!flagMoveFitness && !flagMoveBiometrics && !flagFirstTime)
            {
                //odometer(0, sizeOdometer, "assessment");
                document.getElementById("bar1").style.display = 'none';
                document.getElementById("bar2").style.display = 'none';
                document.getElementById("bar3").style.display = 'none';
                document.getElementById("bar4").style.display = 'none';

                init_transition($scope.avarage, idProgressAssessmentback, idProgressAssessment);
                
               //odometer($scope.avarage, sizeOdometer, "assessment");
                
            }
            else {
                if ($scope.arrayidforms.length > 1) {
                    $scope.scoreBeforeDay = false;
                }
                $scope.scoreAnimated = false;
                $scope.scoreFooter = false;
                $scope.scoreChart = false;
                $scope.scoreAssessmentChart = false;
                $scope.score1 = false;
                $scope.score2 = false;
                $scope.score3 = false;
                $scope.score4 = false;

            }

            //localStorage.removeItem('queryQuestionTempFactory');
            //localStorage.removeItem('questionFactory');
        }
        else if ($rootScope.phoneDevice < 0)
        {
            if (value == 2 && !$scope.hideAll) {
                timerNextSlide();
            }
            else if (value == 1 && !$scope.hideAll) {
                $scope.slidePageBackward();
            }
        }
        
        flagFirstTime = true;

    }

    var fitnessScoreTypeScore = 0;
    var fitnessScoreType = 0;

    $scope.goFitnessAlternative = function (value) {
        var color;
        if (value == 1) {
            color = $(".scoreBarFitneesAge").css("background-color");
            if (color == "rgb(221, 221, 221)")
            {
                $(".scoreBarFitneesAge").css("background-color", "rgb(255, 162, 2)");
            }
            else 
            {
                $(".scoreBarFitneesAge").css("background-color", "rgb(221, 221, 221)");
            }
        }
        else if (value == 2) {
            color = $(".scoreBarFitneesGender").css("background-color");
            if (color == "rgb(221, 221, 221)") {
                $(".scoreBarFitneesGender").css("background-color", "rgb(255, 162, 2)");
            }
            else {
                $(".scoreBarFitneesGender").css("background-color", "rgb(221, 221, 221)");
            }
        }
     
        var colorAge = $(".scoreBarFitneesAge").css("background-color");
        var colorGender = $(".scoreBarFitneesGender").css("background-color");
        if ((colorAge == "rgb(255, 162, 2)") && (colorGender == "rgb(255, 162, 2)")) {
            value = 3;
        }
        else if ((colorAge == "rgb(221, 221, 221)") && (colorGender == "rgb(221, 221, 221)")) {
            value = 0;
        }
        else if ((colorAge == "rgb(255, 162, 2)")) {
            value = 1;
        }
        else if ((colorGender == "rgb(255, 162, 2)")) {
            value = 2;
        }

        fitnessScoreType = value;

        odometer_score_barFitness()
    }

    var flagMoveFitness = false;
    var flagMoveBiometrics = false;

    var openBarBottom = function () {
        if (!$rootScope.userRole) {
            $(".globalPageFooter").hide();
        }
    }

    $scope.goRadioScoreFitness = function () {

        openBarBottom();

        if (!flagMoveFitness) {
            flagMoveFitness = true;

            fitnessScoreTypeScore = 0;
            fitnessScoreType = 0;

            $(".scoreBarFitneesAge").css("background-color", "rgb(221, 221, 221)");
            $(".scoreBarFitneesGender").css("background-color", "rgb(221, 221, 221)");

            //if (!onScore) {
            //$("#score-header-label").text("Fitness");
            //$("#score-header-label").removeAttr("style");
            //onScore = true;
            //$scope.scoreAnimated = true;
            //$scope.scoreFooter = true;
            //$scope.scoreChart = true;
            //$scope.scoreBack = true;
            //$scope.score3 = true;
            //$scope.score4 = true;
            //$scope.score5 = true;
            //odometer(FitnessPoints, sizeOdometer, "fitness");
            //}
            $scope.scoreBeforeDay = true;
            $scope.scoreAssessmentChart = true;
            $scope.scoreAnimated = true;
            $scope.scoreFooter = true;
            //$scope.scoreChart = true;
            $scope.scoreBack = true;
            $scope.scoreFitness = false;
            $scope.alternativeScore = false;
            $scope.alternativeScoreItems = false;
            $scope.hideheaderscore = true;

            //
            var valueMain = 0;
            var valueItem = 0;
            if ($rootScope.phoneType == 7 && $rootScope.isSafari) {
                var valueMain = 80;
                var valueItem = 50;
            } else if ($rootScope.phoneType == 7) {
                var valueMain = 80;
                var valueItem = 50;
            }
            else {
                var valueMain = 100;
                var valueItem = 70;
            }

            //odometer_score(0, valueMain, ".chart-score-main"); //FitnessPoints

            //odometer_score(0, valueItem, ".chart-score-item1"); //SideBridgePoints
            //odometer_score(0, valueItem, ".chart-score-item2"); //MBThrowPoints
            //odometer_score(0, valueItem, ".chart-score-item3"); //PushuptestPoints
            //odometer_score(0, valueItem, ".chart-score-item4"); //CoopertestPoints

            // Main
            
            //odometer_score(FitnessPoints, valueMain, ".chart-score-main"); //FitnessPoints
            /*$(".chart-score-main .percent").text("Fitness");*/
            $("#idProgressSecondaryMainBack").html("");
            $("#idProgressSecondaryMainFront").html("");
            $("#idProgressItem1Back").html("");
            $("#idProgressItem1Front").html("");
            $("#idProgressItem2Back").html("");
            $("#idProgressItem2Front").html("");
            $("#idProgressItem3Back").html("");
            $("#idProgressItem3Front").html("");
            $("#idProgressItem4Back").html("");
            $("#idProgressItem4Front").html("");


            init_transition(FitnessPoints, idProgressSecondaryMainBack, idProgressSecondaryMainFront);
            $(".score-avarage-main").text(changeAbbrev(FitnessPoints * 1));

            // Items

            //odometer_score(SideBridgePoints, valueItem, ".chart-score-item1"); //SideBridgePoints
            init_transition(SideBridgePoints, idProgressItem1Back, idProgressItem1Front);
            //$(".chart-score-item1 .percent").text("Sidebridge");
            var sideTime = Math.round((SideBridgeFitness + SideBridgeLeftFitness) / 2)
            $("#scoreitem1").text(sideTime + "s");

            //odometer_score(MBThrowPoints, valueItem, ".chart-score-item2"); //MBThrowPoints
            init_transition(MBThrowPoints, idProgressItem2Back, idProgressItem2Front);
            //$(".chart-score-item2 .percent").text("MB Throw");
            $("#scoreitem2").text(MBThrowFitness + "'");

            //odometer_score(PushuptestPoints, valueItem, ".chart-score-item3"); //PushuptestPoints
            init_transition(PushuptestPoints, idProgressItem3Back, idProgressItem3Front);
            //$(".chart-score-item3 .percent").text("Push Up");
            $("#scoreitem3").text(PushuptestFitness);
            
            //odometer_score(CoopertestPoints, valueItem, ".chart-score-item4"); //CoopertestPoints
            init_transition(CoopertestPoints, idProgressItem4Back, idProgressItem4Front);
            //$(".chart-score-item4 .percent").text("Cooper");
            $("#scoreitem4").text(CoopertestFitness);

        }
        else 
        {
            $scope.scoreBeforeDay = true;
            $scope.scoreAssessmentChart = true;
            $scope.scoreAnimated = true;
            $scope.scoreFooter = true;
            $scope.scoreBack = true;
            $scope.hideheaderscore = true;
            $scope.scoreFitness = false;
            $scope.alternativeScore = false;
            $scope.alternativeScoreItems = false;
            $scope.alternativeScoreFitness = false;
            $scope.scoreBarFitneeButtons = false;
            $scope.scoreBack = false;
        }
        
        

    };

    var sysidAnimation;
    var sysCircleAni = 0;
    var sysCircleTmp = "";
    var sysTextAni = 0;
    var sysTextTmp = "";
    var sysFlag = true;

    var diaidAnimation;
    var diaCircleAni = 0;
    var diaCircleTmp = "";
    var diaTextAni = 0;
    var diaTextTmp = "";
    var diaFlag = true;

    var waistidAnimation;
    var waistCircleAni = 0;
    var waistCircleTmp = "";
    var waistTextTmp = "";
    var waistFlag = true;

    var bmiidAnimation;
    var bmiCircleAni = 0;
    var bmiCircleTmp = "";
    var bmiTextTmp = "";
    var bmiFlag = true;

    
    $scope.goRadioScoreBiometrics = function () {
        openBarBottom();

        $("#score-header-label").text("Biometrics");
        $("#score-header-label").removeAttr("style");

        if (!flagMoveBiometrics) {
            flagMoveBiometrics = true;

            if (!onScore) {
                $scope.scoreBeforeDay = true;
                onScore = true;
                $scope.scoreAnimated = true;
                $scope.scoreFooter = true;
                $scope.scoreChart = true;
                $scope.scoreBack = true;
                $scope.score3 = true;
                $scope.score4 = true;
                $scope.score5 = true;
                $scope.scoreAssessmentChart = true;
                $scope.hideBiometricsScore = false;
                $scope.countsys = 70;
                $scope.countdia = 40;
                $scope.countwh = 0;
                $scope.countbmi = 0;

                sysFlag = true;
                waistFlag = true;
                bmiFlag = true;


                if (waistCircleTmp != "") {
                    $('#sysTA').css('margin-left', sysTextTmp);
                    $('#syscA').css('margin-left', sysCircleTmp);
                    $('#diaTA').css('margin-left', diaTextTmp);
                    $('#diacA').css('margin-left', diaCircleTmp);
                    $('#waisthipTA').css('margin-left', waistTextTmp);
                    $('#waisthipcA').css('margin-left', waistCircleTmp);
                    $('#bmiTA').css('margin-left', bmiTextTmp);
                    $('#bmicA').css('margin-left', bmiCircleTmp);
                }

                sysTextTmp = $('#sysTA').css('margin-left');
                sysCircleTmp = $('#syscA').css('margin-left');
                sysCircleAni = parseInt($('#syscA').css('margin-left').replace('px', ''));
                sysTextAni = parseInt($('#sysTA').css('margin-left').replace('px', ''));

                diaTextTmp = $('#diaTA').css('margin-left');
                diaCircleTmp = $('#diacA').css('margin-left');
                diaCircleAni = parseInt($('#diacA').css('margin-left').replace('px', ''));
                diaTextAni = parseInt($('#diaTA').css('margin-left').replace('px', ''));

                waistTextTmp = $('#waisthipTA').css('margin-left');
                waistCircleTmp = $('#waisthipcA').css('margin-left');
                waistCircleAni = parseInt($('#waisthipcA').css('margin-left').replace('px', ''));

                bmiTextTmp = $('#bmiTA').css('margin-left');
                bmiCircleTmp = $('#bmicA').css('margin-left');
                bmiCircleAni = parseInt($('#bmicA').css('margin-left').replace('px', ''));

                //valores limites
                //$scope.howsys = 200;
                //$scope.howdia = 110;
                //$scope.waisthip = 100;
                //$scope.bmi = 40;

               

                $('#sysTA').css({ opacity: 0 });
                $('#diaTA').css({ opacity: 0 });
                $('#waisthipTA').css({ opacity: 0 });
                $('#bmiTA').css({ opacity: 0 });
                var factor = .174;
                var pointAvarage = (100 * $scope.howsys / 200);
                var left = 0;
                left = (117.38999999999969 * pointAvarage / 100) * factor;
                initAnimation('#syscA', '#sysTA', left, $scope.howsys);

                pointAvarage = (100 * $scope.howdia / 110);
                left = (118 * pointAvarage / 100) * factor;
                initAnimation('#diacA', '#diaTA', left, $scope.howdia);

                pointAvarage = (100 * $scope.waisthip / 100);
                left = (85.07999999999983 * pointAvarage / 100) * factor;
                initAnimation('#waisthipcA', '#waisthipTA', left, $scope.waisthip);

                pointAvarage = (100 * $scope.bmi / 40);
                left = (85.07999999999983 * pointAvarage / 100) * factor;
                initAnimation('#bmicA', '#bmiTA', left, $scope.bmi);

                //sysidAnimation = setInterval(sysanimation, 20);
                //diaidAnimation = setInterval(diaanimation, 37);
                //waistidAnimation = setInterval(waistanimation, 25);
                //bmiidAnimation = setInterval(bmianimation, 45);
            }
        }
        else 
        {
            $scope.scoreBeforeDay = true;
            $scope.scoreAssessmentChart = true;
            $scope.scoreAnimated = true;
            $scope.scoreFooter = true;
            $scope.scoreChart = true;
            $scope.scoreBack = true;
            $scope.score3 = true;
            $scope.score4 = true;
            $scope.score5 = true;
            $scope.scoreAssessmentChart = true;
            $scope.hideBiometricsScore = false;
            $scope.scoreBack = false;
        }
        
    };

    var initAnimation = function (eleCir, elemTex, left, value) {
        $(eleCir).animate({
            "margin-left": left + "vh",
        }, $scope.animationCircleTime, function () {
            $(elemTex).css('margin-left', left + "vh");
            $(elemTex).text(value);
            $(elemTex).css({ opacity: 1 });

            $scope.scoreBack = false;
        });
    }

    var sysanimation = function () {
        $scope.countsys++;
        if ($scope.countsys < $scope.howsys) {
           sysCircleAni += 0.91;
           sysTextAni += 0.87;
           $('#sysTA').css('margin-left', sysTextAni + 'vh');
           $('#syscA').css('margin-left', sysCircleAni + 'vh');
        }
        else {
            sysFlag = false;;
            clearInterval(sysidAnimation);
        }

        checStopAnimation();

    }

    var diaanimation = function () {
        $scope.countdia++;
        if ($scope.countdia < $scope.howdia) {
           diaCircleAni += 1.69;
           diaTextAni += 1.65;
           //$('#diaTA').css('margin-left', diaTextAni + 'vh');
           $('#diacA').css('margin-left', diaCircleAni + 'vh');
        }
        else {
         
            diaFlag = false;;
            clearInterval(diaidAnimation);
        }

        checStopAnimation();

    }

    var waistanimation = function () {
        $scope.countwh++;
        if ($scope.countwh < $scope.waisthip) {
            waistCircleAni += .85;
            //$('#waisthipTA').css('margin-left', 7 + waistCircleAni + 'vh');
            $('#waisthipcA').css('margin-left', waistCircleAni + 'vh');
        }
        else {
          
            waistFlag = false;;
            clearInterval(waistidAnimation);
        }

        checStopAnimation();
        
    }

    var bmianimation = function () {
        $scope.countbmi++;
        if (bmiFlag && $scope.countbmi < $scope.bmi) {
            bmiCircleAni += 2.12;
            //$('#bmiTA').css('margin-left', 8 + bmiCircleAni + 'vh');
            $('#bmicA').css('margin-left', bmiCircleAni + 'vh');
        }
        else {
        
            bmiFlag = false;;
            clearInterval(bmiidAnimation);
        }

        checStopAnimation();
    }

    var checStopAnimation = function () {
        if (!waistFlag && !bmiFlag && !sysFlag && !diaFlag) {
            $scope.scoreBack = false;
            
        }
    }

    $scope.goRadioScoreMobility = function () {

        openBarBottom();
     
        if (!onScore) {
            $scope.scoreBeforeDay = true;
            $("#score-header-label").text("Mobility");
            $("#score-header-label").removeAttr("style");
            onScore = true;
            $scope.scoreAnimated = true;
            $scope.scoreFooter = true;
            $scope.scoreChart = true;
            $scope.scoreBack = true;
            $scope.score3 = true;
            $scope.score4 = true;
            $scope.score5 = true;
            $scope.scoreAssessmentChart = true;
            $scope.hideMobilityScore = false;
            $scope.scoreBack = false;

            var margin = -8 + (8 * $scope.shoulderMobility);
            $("#idmobilityshouldercircle").css("margin-left", margin + "vh");
            $scope.imgShoulder = $scope.shoulderMobility + 1;

            margin = -8 + (8 * $scope.deepSquat);
            $("#idmobilitysquatcircle").css("margin-left", margin + "vh");
            $scope.imgSquat = $scope.deepSquat + 1;
           
            margin = -8 + (8 * $scope.activeStraightLegRaise);
            $("#idmobilitylegcircle").css("margin-left", margin + "vh");
            $scope.imgStraight = $scope.activeStraightLegRaise + 1;

            if ($scope.imgPain == 1)
            {
                $("#idmobilityshoulderpaincircle").css("margin-left", "-4vh");
                $scope.imgPain = "Yes";
            }
            else {
                $("#idmobilityshoulderpaincircle").css("margin-left", "4vh");
                $scope.imgPain = "No";
            }
          
            if ($scope.spinalExtension == 1) {
                $("#idmobilitySpinalExtensioncircle").css("margin-left", "-4vh");
                $scope.imgSpinalExtension = "Yes";
            }
            else {
                $("#idmobilitySpinalExtensioncircle").css("margin-left", "4vh");
                $scope.imgSpinalExtension = "No";
            }

            if ($scope.spinalFlexion == 1) {
                $("#idmobilitySpinalFlexioncircle").css("margin-left", "-4vh");
                $scope.imgSpinalFlexion = "Yes";
            }
            else {
                $("#idmobilitySpinalFlexioncircle").css("margin-left", "4vh");
                $scope.imgSpinalFlexion = "No";
            }

/*
            $scope.imgShoulder = "styles/mztimgs/LifestyleMobility" + $scope.shoulderMobility + ".png";
            $scope.imgPain = "styles/mztimgs/LifestyleMobilityPain" + $scope.shoulderClearingTest + ".png";
            $scope.imgSpinalExtension = "styles/mztimgs/LifestyleMobilityPain" + $scope.spinalExtension + ".png";
            $scope.imgSpinalFlexion = "styles/mztimgs/LifestyleMobilityPain" + $scope.spinalFlexion + ".png";
            $scope.imgSquat = "styles/mztimgs/LifestyleMobility" + $scope.deepSquat + ".png";
            $scope.imgStraight = "styles/mztimgs/LifestyleMobility" + $scope.activeStraightLegRaise + ".png";
*/
        }
    };
   

    $scope.goRadioScoreLifestyle = function () {

        openBarBottom();
       
        if (!onScore) {
            $scope.scoreBeforeDay = true;
            $("#score-header-label").text("Lifestyle");
            $("#score-header-label").removeAttr("style");
            onScore = true;
            $scope.scoreAnimated = true;
            $scope.scoreAssessmentChart = true;
            $scope.scoreFooter = true;
            $scope.scoreChart = true;
            $scope.score3 = true;
            $scope.score4 = true;
            $scope.score5 = true;
            $scope.hideLifeStyleScore = false;
            $scope.scoreBack = false;
            
            
            var margin = -23.5 + (6.7 * ($scope.howmod - 1));
            if ($scope.howmod == 0) {
                margin = -23.5;
            }
            $("#idlifedailycircle").css("margin-left",margin + "vh");
            $scope.imgaADaily = $scope.howmod;

            
            var margin = -24 + (6.7 * ($scope.howvig - 1));
            if ($scope.howvig == 0) {
                margin = -24;
            }
            $("#idlifeweeklycircle").css("margin-left", margin + "vh");
            $scope.imgWeekly = $scope.howvig;

            var margin = .6 - (6.6 * ($scope.sitting));
            $("#idlifesittingcircle").css("margin-left", margin + "vh");
            if ($scope.sitting == 0)
            {
                $scope.imgsitting = "0-3";
            }
            else if ($scope.sitting == 1) {
                $scope.imgsitting = "4-7";
            }
            else if ($scope.sitting == 2) {
                $scope.imgsitting = "8-11";
            }
            else {
                $scope.imgsitting = "12+";
            }

            var valuedoYouSmoke = $scope.doYouSmoke;
            if ($scope.doYouSmoke == 0) {
                valuedoYouSmoke = 0;
                $scope.smoking = "No";
            }
            else if ($scope.doYouSmoke == 1) {
                valuedoYouSmoke = 1;
                $scope.smoking = "Ex";
            }
            else if ($scope.doYouSmoke == 2) {
                valuedoYouSmoke = 1;
                $scope.smoking = "1-4";
            }
            else if ($scope.doYouSmoke == 3) {
                valuedoYouSmoke = 2;
                $scope.smoking = "5-9";
            }
            else if ($scope.doYouSmoke == 4) {
                valuedoYouSmoke = 3;
                $("#idlifesmokingtextcircle").css("font-size", "1.2vh");
                $scope.smoking = "10-14";
            }
            else {
                valuedoYouSmoke = 4;
                $scope.smoking = "15+";
            }
            var margin = -6;
            //if ($scope.doYouSmoke > 0)
            //{
            margin = margin - (5.8 * (valuedoYouSmoke));
            //}
            $("#idlifesmokingcircle").css("margin-left", margin + "vh");
            $("#idlifesmokingcircle").show();
            $("#idlifeNosmokingcircle").hide();
            /*
            if ($scope.doYouSmoke == 0) {
                $("#idlifesmokingcircle").hide();
                $("#idlifeNosmokingcircle").show();
                $scope.smoking = "No";
            }
            */

            
            var margin = -15 - (6 * ($scope.exposedSmoke));
            $("#idlifeexposedSmokecircle").css("margin-left", margin + "vh");
            if ($scope.exposedSmoke == 0) {
                $scope.imgsecond = "No";
            }
            else if ($scope.exposedSmoke == 1) {
                $scope.imgsecond = "Yes";
            }

            var valueAlcohol = $scope.consumeAlcohol;
            if ($scope.consumeAlcohol == 0) {
                valueAlcohol = 1;
                $scope.imgdrinking = "1-";
            }
            else if ($scope.consumeAlcohol == 2) {
                valueAlcohol = 1;
                $scope.imgdrinking = "2";
            }
            else if ($scope.consumeAlcohol == 1) {
                valueAlcohol = 0;
                $scope.imgdrinking = "1";
            }
            else if ($scope.consumeAlcohol == 3) {
                valueAlcohol = 2;
                $scope.imgdrinking = "3+";
            }
            var margin = 1 - (7 * (valueAlcohol));
            $("#idlifedrikingcircle").css("margin-left", margin + "vh");

            /*
            if ($scope.consumeAlcohol == 0) {
                $scope.imgdrinking = "1-";
            }
            else if ($scope.consumeAlcohol == 1) {
                $scope.imgdrinking = "1";
            }
            else if ($scope.consumeAlcohol == 2) {
                $scope.imgdrinking = "2";
            }
            else if ($scope.consumeAlcohol == 3) {
                $scope.imgdrinking = "3+";
            }
            */
           
            var margin = -9.4 - (7 * ($scope.antibiotics));
            $("#idlifeantibioticscircle").css("margin-left", margin + "vh");
            if ($scope.antibiotics == 0) {
                $scope.imgantibiotics = "2";
            }
            else if ($scope.antibiotics == 1) {
                $scope.imgantibiotics = "2-6";
            }
            else if ($scope.antibiotics == 2) {
                $scope.imgantibiotics = "6-11";
            }
            else if ($scope.antibiotics == 3) {
                $scope.imgantibiotics = "12+";
            }

/*
            $scope.imgaADaily = "styles/mztimgs/LifestyleDays" + ($scope.howmod - 1) + ".png";
            $scope.imgWeekly = "styles/mztimgs/LifestyleDays" + ($scope.howvig - 1) + ".png";
            $scope.imgsitting = "styles/mztimgs/LifestyleSitting" + $scope.sitting + ".png";
            $scope.smoking = "styles/mztimgs/LifestyleSmoking" + $scope.doYouSmoke + ".png";
            $scope.imgsecond = "styles/mztimgs/LifestyleSecondhandsmoke" + $scope.exposedSmoke + ".png";
            $scope.imgdrinking = "styles/mztimgs/Lifestyledrinking" + $scope.consumeAlcohol + ".png";
            $scope.imgantibiotics = "styles/mztimgs/LifestyleAntibiotics" + $scope.antibiotics + ".png";
*/

        }
    };

    $scope.scoreAnimated = true;
    $scope.hideLifeStyleScore = true;
    $scope.hideMobilityScore = true;
    $scope.hideBiometricsScore = true;
    $scope.scoreFooter = true;
    $scope.scoreChart = true;
    $scope.scoreBack = true;
    var sizeOdometer = 250;
    $scope.avarageData = 0;
    var onScore = false;

    //Assesment
    var HealthPoints = 0;
    var LifestylePoints = 0;
    var BiodataPoints = 0;
    var MobilityPoints = 0;
    var FitnessPoints = 0;

    //Fitness
    var SideBridgeFitness = 0;
    var SideBridgeLeftFitness = 0;
    var PushuptestFitness = 0;
    var MBThrowFitness = 0;
    var CoopertestFitness = 0;
    var SideBridgePoints = 0;
    var PushuptestPoints = 0;
    var MBThrowPoints = 0;
    var CoopertestPoints = 0;
    var PuntosFitness = 0;

     var FitnessAgeRank = [];
     var FitnessAgePosition = 0;
     var SideBridgeAgeRank = [];
     var SideBridgeAgePosition = 0;
     var PushuptestAgeRank = [];
     var PushuptestAgePosition = 0;
     var MBThrowAgeRank = [];
     var MBThrowAgePosition = 0;
     var CoopertestAgeRank = [];
     var CoopertestAgePosition = 0;

     var FitnessGenderRank = [];
     var FitnessGenderPosition = 0;
     var SideBridgeGenderRank = [];
     var SideBridgeGenderPosition = 0;
     var PushuptestGenderRank = [];
     var PushuptestGenderPosition = 0;
     var MBThrowGenderRank = [];
     var MBThrowGenderPosition = 0;
     var CoopertestGenderRank = [];
     var CoopertestGenderPosition = 0;

     var FitnessAllRank = [];
     var FitnessAllPosition = 0;
     var SideBridgeAllRank = [];
     var SideBridgeAllPosition = 0;
     var PushuptestAllRank = [];
     var PushuptestAllPosition = 0;
     var MBThrowAllRank = [];
     var MBThrowAllPosition = 0;
     var CoopertestAllRank = [];
     var CoopertestAllPosition = 0;

     var FitnessBothlRank = [];
     var FitnessBothPosition = 0;
     var SideBridgeBothRank = [];
     var SideBridgeBothPosition = 0;
     var PushuptestBothRank = [];
     var PushuptestBothPosition = 0;
     var MBThrowBothRank = [];
     var MBThrowBothPosition = 0;
     var CoopertestBothRank = [];
     var CoopertestBothPosition = 0;

    //Biometrics
    var SystolicBiometrics = 0;
    var DiastolicBiometrics = 0;
    var HowWaistBiometrics = 0;
    var HowHipBiometrics = 0;
    var BMIBiometrics = 0;
    var SystolicptsPercentilPoints = 0;
    var DiastolicPercentilPoints = 0;
    var WaistToHipPercentilPoints = 0;
    var BMIPercentilPoints = 0;
    var PuntosBiometrics = 0;

    //Mobility
    var DeepSquatMobility = 0;
    var ActiveStraightLegRaiseMobility = 0;
    var ShoulderMobilityMobility = 0;
    var ShoulderClearingTestMobility = 0;
    var SpinalFlexionMobility = 0;
    var SpinalExtensionMobility = 0;
    var DeepSquatPercentilPoints = 0;
    var ActiveStraightLegRaisePercentilPoints = 0;
    var ShoulderMobilityPercentilPoints = 0;
    var ShoulderClearingTestPercentilPoints = 0;
    var SpinalFlexionPercentilPoints = 0;
    var SpinalExtensionPercentilPoints = 0;
    var PuntosMobility = 0;

    //Lifestyle
    var ModerateExerciseLifestyle = 0;
    var VigorousLifestyle = 0;
    var SittingLifestyle = 0;
    var SmokeLifestyle = 0;
    var SecondhandsmokeLifestyle = 0;
    var AlcoholLifestyle = 0;
    var AntibioticsLifestyle = 0;
    var ModerateExercisePercentilPoints = 0;
    var VigorousPercentilPoints = 0;
    var SittingPercentilPoints = 0;
    var SmokePercentilPoints = 0;
    var SecondhandsmokePercentilPoints = 0;
    var AlcoholPercentilPoints = 0;
    var AntibioticsPercentilPoints = 0;
    var PuntosLifestyle = 0;
  
    var getDailySittingsValues = function (value) {
        var dailySittingFormat = "";
        switch(value) {
            case 0:
                dailySittingFormat = "0-3 Hrs";
                break;
            case 1:
                dailySittingFormat = "4-7 Hrs";
                break;
            case 2:
                dailySittingFormat = "8-11 Hrs";
                break;
            case 3:
                dailySittingFormat = "12 or more Hours";
                break;
        };
        return dailySittingFormat;
    };

    var getSmokeValues = function (value) {
        var smokeFormat = "";
        switch (value) {
            case 0:
                smokeFormat = "Never";
                break;
            case 1:
                smokeFormat = "Ex-smoker (last 5 years)";
                break;
            case 2:
                smokeFormat = "1-4 Cigarretes per day";
                break;
            case 3:
                smokeFormat = "5-9 Cigarretes per day";
                break;
            case 4:
                smokeFormat = "10-14 Cigarretes per day";
                break;
            case 5:
                smokeFormat = "15 or more per day";
                break;
        };
        return smokeFormat;
    };

    var getAlcoholValues = function (value) {
        var smokeFormat = "";
        switch (value) {
            case 0:
                smokeFormat = "Less than 1 per day";
                break;
            case 1:
                smokeFormat = "1 drink per day(7 per week)";
                break;
            case 2:
                smokeFormat = "2 drink per day(14 per week)";
                break;
            case 3:
                smokeFormat = "3 or more drinks per day(21 < per week)";
                break;
        };
        return smokeFormat;
    };

    var checkSizeOdometer = function () {
        sizeOdometer = 135;

/*
        sizeOdometer = 200;
        if ($rootScope.phoneType == 8 && $rootScope.isSafari) {
            sizeOdometer = 170;
        } else if ($rootScope.phoneType == 8) {
            sizeOdometer = 170;
        } else if ($rootScope.phoneType == 7 && $rootScope.isSafari) {
            sizeOdometer = 135;
        } else if ($rootScope.phoneType == 7) {
            sizeOdometer = 135;
        } else if ($rootScope.phoneType == 9 && $rootScope.isSafari) {
            sizeOdometer = 200;
        } else if ($rootScope.phoneType == 9) {
            sizeOdometer = 200;
        }
        */
    };
    checkSizeOdometer();

   

    var odometer_score = function (avarage, size, idElement) {
        var chart = $(idElement);
        //chart.data("easyPieChart", null);
        chart.attr("data-percent", avarage);
        //$(idElement).attr("style", "width: " + size + "px; height: " + size + "px;");
        if (chart.data("easyPieChart") !== undefined) {
            chart.data('easyPieChart').update(avarage);
        } else {
            chart.easyPieChart({
                animate: {
                    duration: $scope.animationCircleTime,
                    enabled: true
                },
                barColor: '#FFA202',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                trackWidth: 10,
                lineCap: 'circle',
                scaleLength: 10,
                size: size,
                onStop: function (from, to) {
                    if ($window.sessionStorage["idformbyuser"] !== undefined) {
                        $window.sessionStorage["idformbyuser"] = undefined;
                        $scope.doneSubmitwebPoints = true;
                    }
                    
                    if ($scope.alternativeScoreFitness) {
                        $scope.alternativeScoreFitness = false;
                        odometer_score_barFitness();
                    }
              
                },
                onStep: function (from, to, percent) {
                    //$(this.el).find('.percent').text(Math.floor(Math.random() * 1000) + 1);
                }
            });
            $(".score-chart-main-front canvas").css("height", "14vh");
            $(".score-chart-main-front canvas").css("width", "14vh");
            $(".chart-score-item1 canvas").css("height", "9vh");
            $(".chart-score-item1 canvas").css("width", "9vh");
            $(".chart-score-item2 canvas").css("height", "9vh");
            $(".chart-score-item2 canvas").css("width", "9vh");
            $(".chart-score-item3 canvas").css("height", "9vh");
            $(".chart-score-item3 canvas").css("width", "9vh");
            $(".chart-score-item4 canvas").css("height", "9vh");
            $(".chart-score-item4 canvas").css("width", "9vh");
       
        }


    };
   
    $scope.fitnessScore = function (value) {
        if (!$scope.scoreBack) {
            $('#idfitnessBarChart').html('');
            var cadena = '<canvas id="bar" class="chart chart-bar scoreBarFitnees" chart-data="data" chart-labels="labels" chart-options="optionsbar" chart-dataset-override="datasetOverride"></canvas>';
            var targetFn = $compile(cadena);
            targetFn($scope).prependTo('#idfitnessBarChart');
            fitnessScoreTypeScore = value;
            odometer_score_barFitness();
        }
    }

    var odometer_score_barFitness = function () {

        var position = 0;
        if (fitnessScoreTypeScore == 0)
        {
           
            if (fitnessScoreType == 0)
            {
                position = FitnessAllPosition;
                $scope.data = getDataFitness(FitnessAllRank);
            }
            else if (fitnessScoreType == 1)
            {
                position = FitnessAgePosition;
                $scope.data = getDataFitness(FitnessAgeRank);
            }
            else if (fitnessScoreType == 2)
            {
                position = FitnessGenderPosition;
                $scope.data = getDataFitness(FitnessGenderRank);
            }
            else if (fitnessScoreType == 3) {
                position = FitnessBothPosition;
                $scope.data = getDataFitness(FitnessBothlRank);
            }
        }
        else if (fitnessScoreTypeScore == 1) {

            if (fitnessScoreType == 0) {
                position = SideBridgeAllPosition;
                $scope.data = getDataFitness(SideBridgeAllRank);
            }
            else if (fitnessScoreType == 1) {
                position = SideBridgeAgePosition;
                $scope.data = getDataFitness(SideBridgeAgeRank);
            }
            else if (fitnessScoreType == 2) {
                position = SideBridgeGenderPosition;
                $scope.data = getDataFitness(SideBridgeGenderRank);
            }
            else if (fitnessScoreType == 3) {
                position = SideBridgeBothPosition;
                $scope.data = getDataFitness(SideBridgeBothRank);
            }
        }
        else if (fitnessScoreTypeScore == 2) {

            if (fitnessScoreType == 0) {
                position = PushuptestAllPosition;
                $scope.data = getDataFitness(PushuptestAllRank);
            }
            else if (fitnessScoreType == 1) {
                position = PushuptestAgePosition;
                $scope.data = getDataFitness(PushuptestAgeRank);
            }
            else if (fitnessScoreType == 2)  {
                position = PushuptestGenderPosition;
                $scope.data = getDataFitness(PushuptestGenderRank);
            }
            else if (fitnessScoreType == 3) {
                position = PushuptestBothPosition;
                $scope.data = getDataFitness(PushuptestBothRank);
            }
        }
        else if (fitnessScoreTypeScore == 3) {

            if (fitnessScoreType == 0) {
                position = MBThrowAllPosition;
                $scope.data = getDataFitness(MBThrowAllRank);
            }
            else if (fitnessScoreType == 1) {
                position = MBThrowAgePosition;
                $scope.data = getDataFitness(MBThrowAgeRank);
            }
            else if (fitnessScoreType == 2) {
                position = MBThrowGenderPosition;
                $scope.data = getDataFitness(MBThrowGenderRank);
            }
            else if (fitnessScoreType == 3) {
                position = MBThrowBothPosition;
                $scope.data = getDataFitness(MBThrowBothRank);
            }
        }
        else if (fitnessScoreTypeScore == 4) {

            if (fitnessScoreType == 0) {
                position = CoopertestAllPosition;
                $scope.data = getDataFitness(CoopertestAllRank);
            }
            else if (fitnessScoreType == 1) {
                position = CoopertestAgePosition;
                $scope.data = getDataFitness(CoopertestAgeRank);
            }
            else if (fitnessScoreType == 2) {
                position = CoopertestGenderPosition;
                $scope.data = getDataFitness(CoopertestGenderRank);
            }
            else if (fitnessScoreType == 2) {
                position = CoopertestBothPosition;
                $scope.data = getDataFitness(CoopertestBothRank);
            }
        }
        else if (fitnessScoreTypeScore == -1) {
            $scope.data = [
                      [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0,0,0,0,0,0,0,0,0,0,0]
            ];
        }
    
        $scope.labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
      
        $scope.optionsbar = chartBarOptions;

        $scope.optionsbar.animation = {
            onComplete: function () {
                if (!$scope.alternativeScore) {
                    $scope.scoreBack = false;
                    $scope.alternativeScoreFitnessButtons = false;
                }
            }
        };

        $scope.datasetOverride = [{ backgroundColor: [] }];
        $scope.datasetOverride[0].backgroundColor = getColorsFitness(position);
        $scope.datasetOverride[0].borderColor = getColorsFitness(position);
    };

    var getColorsFitness = function (position) {
        var backgroundColours = [];
       
        for (var i = 0; i < 20; i++) {
            if (i == position) {
                backgroundColours.push(chartBarColors.onebar);
            }
            else {
                backgroundColours.push(chartBarColors.allbars);
            }
     
        }

        return backgroundColours;
    }

   

    var getDataFitness = function(data) {
        
        var value = [];
        var innerValue = [];
        value.push(innerValue);
        for (var i = 0; i < data.length; i++) {
            innerValue.push(data[i]);
        }
         
        return value;
    }

    var odometer = function (avarage, size, typeOdometer, timeType) {
        if (typeOdometer == "assessment") {
            $scope.mainScoreAnimated = true;
            $("#percentile-label1").addClass("label-name-main-score");
            $("#percentile-label2").addClass("label-name-main-score");
            $("#percentile-label3").addClass("label-name-main-score");
            $("#percentile-label4").addClass("label-name-main-score");
            $("#percentile-label5").addClass("label-name-main-score");
            $("#percentile1").addClass("label-name-main-score");
            $("#percentile2").addClass("label-name-main-score");
            $("#percentile3").addClass("label-name-main-score");
            $("#percentile4").addClass("label-name-main-score");
            $("#percentile5").addClass("label-name-main-score");

            $scope.scoreAnimated = false;
            $scope.scoreFooter = false;
            $scope.scoreChart = false;

            if ($window.sessionStorage["idformbyuser"] !== undefined) {
                $window.sessionStorage["idformbyuser"] = undefined;
                $scope.doneSubmitwebPoints = true;
            }
            $("#dialog").dialog("close");


           
            $scope.avaragePercentile = changeAbbrev(avarage * 1);
            $scope.score3 = false;
            $scope.score4 = false;
            document.getElementById("bar1").style.width = '0%';
            document.getElementById("bar2").style.width = '0%';
            document.getElementById("bar3").style.width = '0%';
            document.getElementById("bar4").style.width = '0%';
            document.getElementById("bar1").style.display = 'block';
            document.getElementById("bar2").style.display = 'block';
            document.getElementById("bar3").style.display = 'block';
            document.getElementById("bar4").style.display = 'block';
            progressBar("bar1", 0, FitnessPoints, "percentile1", "percentile-label1", "Fitness", "percentile-label-description1", "");
            progressBar("bar2", 0, BiodataPoints, "percentile2", "percentile-label2", "Biometrics", "percentile-label-description2", "");
            progressBar("bar3", 0, MobilityPoints, "percentile3", "percentile-label3", "Mobility", "percentile-label-description3", "");
            progressBar("bar4", 0, LifestylePoints, "percentile4", "percentile-label4", "Lifestyle", "percentile-label-description4", "");
            $('.percent').text($scope.puntos);

            if ($scope.arrayidforms.length > 1) {
                $scope.scoreBeforeDay = false;
                if ($scope.indexforms == 0) {
                    $('.score-percent-beforeDay').text($scope.arrayidforms[1].points);
                }
                else {
                    $('.score-percent-beforeDay').text($scope.arrayidforms[0].points);
                }
            }

            var HealthPoints = 0;
        }
        else
        {
            $scope.mainScoreAnimated = false;
            $("#percentile-label1").removeClass("label-name-main-score");
            $("#percentile-label2").removeClass("label-name-main-score");
            $("#percentile-label3").removeClass("label-name-main-score");
            $("#percentile-label4").removeClass("label-name-main-score");
            $("#percentile-label5").removeClass("label-name-main-score");
            $("#percentile1").removeClass("label-name-main-score");
            $("#percentile2").removeClass("label-name-main-score");
            $("#percentile3").removeClass("label-name-main-score");
            $("#percentile4").removeClass("label-name-main-score");
            $("#percentile5").removeClass("label-name-main-score");
        }

        $scope.scoreHeader = true;
        /*
        $scope.odometerType = typeOdometer;
        if (_.isUndefined(size)) {
            size = 250;
        }
        var chart = $(".chart-assessment");
        //chart.data("easyPieChart", null);
        chart.attr("data-percent", avarage);
        $scope.avaragePercentile = changeAbbrev(avarage * 1);
        if (chart.data("easyPieChart") !== undefined) {
            $(".chart-assessment").data('easyPieChart').update(avarage);
        } else {
            chart.easyPieChart({
                animate: {
                    duration: 5000,
                    enabled: true
                },
                barColor: '#FFA202',
                /*
                barColor: function (percent) {
                    var ctx = this.renderer.getCtx();
                    var canvas = this.renderer.getCanvas();
                    var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
                    gradient.addColorStop(0, "#ffce03");
                    gradient.addColorStop(1, "#ffa202");
                    return gradient;
                },
                */
        /*
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                trackWidth: 5,
                lineCap: 'circle',
                scaleLength: 10,
                size: size,
                onStop: function (from, to) {
                    $scope.scoreAnimated = false;
                    $scope.scoreFooter = false;
                    $scope.scoreChart = false;

                    if ($window.sessionStorage["idformbyuser"] !== undefined) {
                        $window.sessionStorage["idformbyuser"] = undefined;
                        $scope.doneSubmitwebPoints = true;
                    }
                    //$(".progress").removeClass("my-progress-score").addClass("myProgress");
                    $("#dialog").dialog("close");
                    switch ($scope.odometerType) {
                        case "assessment":
                            $scope.score3 = false;
                            $scope.score4 = false;
                            progressBar("bar1", 0, FitnessPoints, "percentile1", "percentile-label1", "Fitness", "percentile-label-description1", "");
                            progressBar("bar2", 0, BiodataPoints, "percentile2", "percentile-label2", "Biometrics", "percentile-label-description2", "");
                            progressBar("bar3", 0, MobilityPoints, "percentile3", "percentile-label3", "Mobility", "percentile-label-description3", "");
                            progressBar("bar4", 0, LifestylePoints, "percentile4", "percentile-label4", "Lifestyle", "percentile-label-description4", "");
                            $('.percent').text($scope.puntos);

                            if ($scope.arrayidforms.length > 1) {
                                $scope.scoreBeforeDay = false;
                                if ($scope.indexforms == 0)  
                                {
                                    $('.score-percent-beforeDay').text($scope.arrayidforms[1].points);
                                }
                                else {
                                    $('.score-percent-beforeDay').text($scope.arrayidforms[0].points);
                                }
                            }
                          
                            var HealthPoints = 0;
                            break;
                        case "fitness":
                            //$scope.scoreHeader = false;
                            //$scope.scoreFooter = true;
                            //$scope.scoreBack = false;
                            //$scope.score3 = false;
                            //$scope.score4 = false;
                            //var sideBridgeFormat = SideBridgeFitness + "s / " + SideBridgeLeftFitness + "s";
                            //var mbThrowFormat = PushuptestFitness + " feet";
                            //var coopertestFormat = CoopertestFitness + " miles";
                            ////$(".progress").removeClass("myProgress").addClass("my-progress-score");
                            //progressBar("bar1", 0, SideBridgePoints, "percentile1", "percentile-label1", sideBridgeFormat, "percentile-label-description1", "Side Bridge");
                            //progressBar("bar2", 0, PushuptestPoints, "percentile2", "percentile-label2", mbThrowFormat, "percentile-label-description2", "Mb Throw");
                            //progressBar("bar3", 0, MBThrowPoints, "percentile3", "percentile-label3", PushuptestFitness, "percentile-label-description3", "Push Ups");
                            //progressBar("bar4", 0, CoopertestPoints, "percentile4", "percentile-label4", coopertestFormat, "percentile-label-description4", "12 Minute Cooper");
                            //$scope.avaragePercentile = changeAbbrev(FitnessPoints * 1);
                            //$('.percent').text(PuntosFitness);
                            break;
                        case "biometrics":
                            $scope.scoreHeader = false;
                            $scope.scoreFooter = true;
                            $scope.scoreBack = false;
                            $scope.score3 = false;
                            var waistToHipFormat = ((HowWaistBiometrics / HowHipBiometrics) * 100) + " %";
                            var waistToHipResult = ((HowWaistBiometrics / HowHipBiometrics) * 100);
                            var systolicDiastolicFormat = SystolicBiometrics + "/" + DiastolicBiometrics;
                            //$(".progress").removeClass("myProgress").addClass("my-progress-score");
                            progressBar("bar1", 0, BMIPercentilPoints, "percentile1", "percentile-label1", BMIBiometrics, "percentile-label-description1", "BMI");
                            progressBar("bar2", 0, waistToHipResult, "percentile2", "percentile-label2", waistToHipFormat, "percentile-label-description2", "Waist to Hip Ratio");
                            progressBar("bar3", 0, 100, "percentile3", "percentile-label3", systolicDiastolicFormat, "percentile-label-description3", "Blood Pressure");
                            $scope.avaragePercentile = changeAbbrev(BiodataPoints * 1);
                            $('.percent').text(PuntosBiometrics);
                            break;
                        case "mobility":
                            $scope.scoreHeader = false;
                            $scope.scoreFooter = true;
                            $scope.scoreBack = false;
                            var movementMobilityFormat = (DeepSquatMobility + ActiveStraightLegRaiseMobility + ShoulderMobilityMobility) + " (" + DeepSquatMobility + " + " + ActiveStraightLegRaiseMobility + " + " + ShoulderMobilityMobility + ")";
                            //$(".progress").removeClass("myProgress").addClass("my-progress-score");
                            progressBar("bar1", 0, 100, "percentile1", "percentile-label1", movementMobilityFormat, "percentile-label-description1", "Movement mobility");
                            progressBar("bar2", 0, 100, "percentile2", "percentile-label2", "", "percentile-label-description2", "Pain in joints");
                            $scope.avaragePercentile = changeAbbrev(MobilityPoints * 1);
                            $('.percent').text(PuntosMobility);
                            break;
                        case "lifestyle":
                            $scope.score3 = false;
                            $scope.score4 = false;
                            $scope.score5 = false;
                            $scope.scoreHeader = false;
                            $scope.scoreFooter = true;
                            $scope.scoreBack = false;
                            var moderateExerciseFormat = ModerateExerciseLifestyle + " day(s)";
                            var vigorousFormat = VigorousLifestyle + " day(s)";
                            var sittingFormat = getDailySittingsValues(SittingLifestyle);
                            var smokeFormat = getSmokeValues(SmokeLifestyle);
                            var alcoholFormat = getAlcoholValues(AlcoholLifestyle);
                            //$(".progress").removeClass("myProgress").addClass("my-progress-score");
                            progressBar("bar1", 0, ModerateExercisePercentilPoints, "percentile1", "percentile-label1", moderateExerciseFormat, "percentile-label-description1", "Active days per week");
                            progressBar("bar2", 0, VigorousPercentilPoints, "percentile2", "percentile-label2", vigorousFormat, "percentile-label-description2", "Exercise days per week");
                            progressBar("bar3", 0, SittingPercentilPoints, "percentile3", "percentile-label3", sittingFormat, "percentile-label-description3", "Daily sitting hours");
                            progressBar("bar4", 0, SmokePercentilPoints, "percentile4", "percentile-label4", smokeFormat, "percentile-label-description4", "Cigarrettes per day");
                            progressBar("bar5", 0, AlcoholPercentilPoints, "percentile5", "percentile-label5", alcoholFormat, "percentile-label-description5", "Drinks per day");
                            $scope.avaragePercentile = changeAbbrev(LifestylePoints * 1);
                            $('.percent').text(PuntosLifestyle);
                            break;
                    };
                },
                onStep: function (from, to, percent) {
                    //$(this.el).find('.percent').text(Math.floor(Math.random() * 1000) + 1);
                }
            });
        }
        $(".score-Assessment-today-front canvas").css("height", "24vh");
        $(".score-Assessment-today-front canvas").css("width", "24vh");


        /*

        var optionsTitle1 = "options='{" +
                                    "title: \"Health History\",";

        var optionsTitle2 = "options='{" +
                                   "title: \"Lifestyle\",";

        var optionsTitle3 = "options='{" +
                                   "title: \"Biodata\",";

        var optionsTitle4 = "options='{" +
                                   "title: \"Mobility\",";

        var optionsTitle5 = "options='{" +
                                   "title: \"Fitness/Performance\",";


        var optionsGauge = "min: 0," +
                                     "max: 100," +
                                     "value: 78," +
                                     "gaugeWidthScale: 0.4," +
                                     "valueMinFontSize: 18," +
                                     "titleMinFontSize: 14," +
                                     "titleFontColor: \"#FFFFFF\"," +
                                     "titleFontFamily: \"Montserrat\"," +
                                     "valueFontColor: \"#FFFFFF\"," +
                                     "valueFontFamily:  \"Montserrat\"," +
                                     "gaugeColor: \"rgba(255,  162,  2,  0.4)\"," +
                                     "customSectors: [{" +
                                        "color: \"#FFA201\"," +
                                        "lo: 50000," +
                                        "hi: 100000" +
                                        "}, {" +
                                        "color: \"#FFA201\"," +
                                        "lo: 0," +
                                        "hi: 50000" +
                                    "}]," +
                                    "startAnimationTime: 5000," +
                                    "refreshAnimationTime: 5000," +
                                    "hideMinMax: true" +
                                "}'";

        var template = $compile(
            "<style>" +
            ".gauge {" +
                "width: 120px;" +
                "height: 55px;" +
           "}" +
            "</style>" +
             "<table>" +
               "<tr>" +
                   "<td>" +
                            "<just-gage id='test1' class='gauge' " + optionsTitle1 + optionsGauge + "></just-gage>" +
                   "</td>" +
                   "<td>" +
                            "<just-gage id='test2' class='gauge' " + optionsTitle2 + optionsGauge + "></just-gage>" +
                   "</td>" +
                   "<td>" +
                            "<just-gage id='test3' class='gauge' " + optionsTitle3 + optionsGauge + "></just-gage>" +
                   "</td>" +
                   "<td>" +
                            "<just-gage id='test4' class='gauge' " + optionsTitle4 + optionsGauge + "></just-gage>" +
                   "</td>" +
                   "<td>" +
                            "<just-gage id='test5' class='gauge' " + optionsTitle5 + optionsGauge + "></just-gage>" +
                   "</td>" +
                "</tr>" +
           "</table>"
        )($scope);


        $("#idSocreData").append(template);
        */
      
    }

    var progressBar = function (elemName, startWidth, endWidth, label, elemPercentile, valuePercentile, elemPercentileDescription, valuePercentileDescription) {
        document.getElementById(label).innerHTML = "";

        
        $("#" + elemName).animate({
            width: endWidth + "%"
        }, $scope.animationBarTime, function () {
            var id = $(this).attr('id');
            var label = "";
            if (id == "bar1")
            {
                label = "percentile1";
            }
            else if (id == "bar2") {
                label = "percentile2";
            }
            else if (id == "bar3") {
                label = "percentile3";
            }
            else if (id == "bar4") {
                label = "percentile4";
            }
            $("#" + label).text(changeAbbrev(endWidth * 1));
        });

        /*
        var valores = {
            width: 0,
            endWidth: 0
        };
        if (valores) {
            startWidth = valores.width;
        }
        var elem = document.getElementById(elemName);
        var elemPerc = document.getElementById(elemPercentile);
        var elemPercDesc = document.getElementById(elemPercentileDescription);
        var width = startWidth;
        var id = setInterval(frame, 80);
        elemPerc.textContent = valuePercentile;
        elemPercDesc.textContent = valuePercentileDescription;
        function frame() {
            if (width >= endWidth) {
                clearInterval(id);
                if (endWidth == 0) {
                    elem.style.display = 'none';
                }
                document.getElementById(label).innerHTML = changeAbbrev(width * 1);
            } else {
                elem.style.display = 'block';
                width++;
                elem.style.width = width + '%';
                elem.style.left = startWidth + '%';
                elem.style.borderRadius = '29px';
                //document.getElementById(label).innerHTML = changeAbbrev(width * 1);
            }
        }
        */
    };

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

    $scope.back = function () {
        if (!$rootScope.userRole) {
            $(".globalPageFooter").show();
        }

        backTop();
    }

    var backTop = function () {
        $location.path('/form/mzt-leon-questions-user');
    }

    var flagStatus = "";

    $scope.modalDelete = function () {
        $("#modalDelete").modal('show');
    };

    $scope.modalRecover = function () {
        $("#modalRecover").modal('show');
    }

    $rootScope.statusDelete = function () {
        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push(queryQuestionFactory.id);
        if (flagStatus == "D") {
            arreglo.push("");
        }
        else {
            arreglo.push("D");
        }
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Assessments/StatusAssessment')
        .then(function (data) {
            $("#dialog").dialog("close");
            backTop();
            //stopTime = $interval(backTop, $rootScope.dialogTimer);
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };

    var fillFitnessScore = function (data) {
        $scope.waisthip = data.WaisthipScore;
        $scope.bmi = data.bmiScore;

   
        FitnessAgeRank = data.byAreas.FitnessAgeRank;
        FitnessAgePosition = data.byAreas.FitnessAgePosition;
        SideBridgeAgeRank = data.byAreas.SideBridgeAgeRank;
        SideBridgeAgePosition = data.byAreas.SideBridgeAgePosition;
        PushuptestAgeRank = data.byAreas.PushuptestAgeRank;
        PushuptestAgePosition = data.byAreas.PushuptestAgePosition;
        MBThrowAgeRank = data.byAreas.MBThrowAgeRank;
        MBThrowAgePosition = data.byAreas.MBThrowAgePosition;
        CoopertestAgeRank = data.byAreas.CoopertestAgeRank;
        CoopertestAgePosition = data.byAreas.CoopertestAgePosition;

        FitnessGenderRank = data.byAreas.FitnessGenderRank;
        FitnessGenderPosition = data.byAreas.FitnessGenderPosition;
        SideBridgeGenderRank = data.byAreas.SideBridgeGenderRank;
        SideBridgeGenderPosition = data.byAreas.SideBridgeGenderPosition;
        PushuptestGenderRank = data.byAreas.PushuptestGenderRank;
        PushuptestGenderPosition = data.byAreas.PushuptestGenderPosition;
        MBThrowGenderRank = data.byAreas.MBThrowGenderRank;
        MBThrowGenderPosition = data.byAreas.MBThrowGenderPosition;
        CoopertestGenderRank = data.byAreas.CoopertestGenderRank;
        CoopertestGenderPosition = data.byAreas.CoopertestGenderPosition;
        
        FitnessAllRank = data.byAreas.FitnessAllRank;
        FitnessAllPosition = data.byAreas.FitnessAllPosition;
        SideBridgeAllRank = data.byAreas.SideBridgeAllRank;
        SideBridgeAllPosition = data.byAreas.SideBridgeAllPosition;
        PushuptestAllRank = data.byAreas.PushuptestAllRank;
        PushuptestAllPosition = data.byAreas.PushuptestAllPosition;
        MBThrowAllRank = data.byAreas.MBThrowAllRank;
        MBThrowAllPosition = data.byAreas.MBThrowAllPosition;
        CoopertestAllRank = data.byAreas.CoopertestAllRank;
        CoopertestAllPosition = data.byAreas.CoopertestAllPosition;

        FitnessBothlRank = data.byAreas.FitnessBothRank;
        FitnessBothPosition = data.byAreas.FitnessBothPosition;
        SideBridgeBothRank = data.byAreas.SideBridgeBothRank;
        SideBridgeBothPosition = data.byAreas.SideBridgeBothPosition;
        PushuptestBothRank = data.byAreas.PushuptestBothRank;
        PushuptestBothPosition = data.byAreas.PushuptestBothPosition;
        MBThrowBothRank = data.byAreas.MBThrowBothRank;
        MBThrowBothPosition = data.byAreas.MBThrowBothPosition;
        CoopertestBothRank = data.byAreas.CoopertestBothRank;
        CoopertestBothPosition = data.byAreas.CoopertestBothPosition;

        $scope.arrayidforms = data.byAreas.scores;
       
    }

    var initUser = function () {
        var pointsFlag = $window.sessionStorage["pointsFlag"];
        if (pointsFlag != undefined && pointsFlag == "1") {

            var dataPoints = $window.sessionStorage["dataPoints"];
            dataPoints = JSON.parse(dataPoints);
            $scope.avarageData = dataPoints.avarage;
            //Assessment
            HealthPoints = dataPoints.Health;
            LifestylePoints = dataPoints.Lifestyle;
            BiodataPoints = dataPoints.Biodata;
            MobilityPoints = dataPoints.Mobility;
            FitnessPoints = dataPoints.Fitness;

            //Fitness
            SideBridgeFitness = dataPoints.byAreas.FitnessPoints.SideBridge;
            SideBridgeLeftFitness = dataPoints.byAreas.FitnessPoints.SideBridgeLeft;
            PushuptestFitness = dataPoints.byAreas.FitnessPoints.Pushuptest;
            MBThrowFitness = dataPoints.byAreas.FitnessPoints.MBThrow;
            CoopertestFitness = dataPoints.byAreas.FitnessPoints.Coopertest;
            SideBridgePoints = dataPoints.byAreas.FitnessPoints.SideBridgePercentil;
            PushuptestPoints = dataPoints.byAreas.FitnessPoints.PushuptestPercentil;
            MBThrowPoints = dataPoints.byAreas.FitnessPoints.MBThrowPercentil;
            CoopertestPoints = dataPoints.byAreas.FitnessPoints.CoopertestPercentil;
            PuntosFitness = dataPoints.byAreas.FitnessPoints.points;

            //Biometrics
            SystolicBiometrics = dataPoints.byAreas.BiometricsPoints.Systolic;
            DiastolicBiometrics = dataPoints.byAreas.BiometricsPoints.Diastolic;
            HowWaistBiometrics = dataPoints.byAreas.BiometricsPoints.HowWaist;
            HowHipBiometrics = dataPoints.byAreas.BiometricsPoints.HowHip;
            BMIBiometrics = dataPoints.byAreas.BiometricsPoints.BMI;
            SystolicptsPercentilPoints = dataPoints.byAreas.BiometricsPoints.SystolicptsPercentil;
            DiastolicPercentilPoints = dataPoints.byAreas.BiometricsPoints.DiastolicPercentil;
            WaistToHipPercentilPoints = dataPoints.byAreas.BiometricsPoints.WaistToHipPercentil;
            BMIPercentilPoints = dataPoints.byAreas.BiometricsPoints.BMIPercentil;
            PuntosBiometrics = dataPoints.byAreas.BiometricsPoints.points;

            //Mobility
            DeepSquatMobility = dataPoints.byAreas.MobilityPoints.DeepSquat;
            ActiveStraightLegRaiseMobility = dataPoints.byAreas.MobilityPoints.ActiveStraightLegRaise;
            ShoulderMobilityMobility = dataPoints.byAreas.MobilityPoints.ShoulderMobility;
            ShoulderClearingTestMobility = dataPoints.byAreas.MobilityPoints.ShoulderClearingTest;
            SpinalFlexionMobility = dataPoints.byAreas.MobilityPoints.SpinalFlexion;
            SpinalExtensionMobility = dataPoints.byAreas.MobilityPoints.SpinalExtension;
            DeepSquatPercentilPoints = dataPoints.byAreas.MobilityPoints.DeepSquatPercentil;
            ActiveStraightLegRaisePercentilPoints = dataPoints.byAreas.MobilityPoints.ActiveStraightLegRaisePercentil;
            ShoulderMobilityPercentilPoints = dataPoints.byAreas.MobilityPoints.ShoulderMobilityPercentil;
            ShoulderClearingTestPercentilPoints = dataPoints.byAreas.MobilityPoints.ShoulderClearingTestPercentil;
            SpinalFlexionPercentilPoints = dataPoints.byAreas.MobilityPoints.SpinalFlexionPercentil;
            SpinalExtensionPercentilPoints = dataPoints.byAreas.MobilityPoints.SpinalExtensionPercentil;
            PuntosMobility = dataPoints.byAreas.MobilityPoints.points;

            //Lifestyle
            ModerateExerciseLifestyle = dataPoints.byAreas.LifestylePoints.ModerateExercise;
            VigorousLifestyle = dataPoints.byAreas.LifestylePoints.Vigorous;
            SittingLifestyle = dataPoints.byAreas.LifestylePoints.Sitting;
            SmokeLifestyle = dataPoints.byAreas.LifestylePoints.Smoke;
            SecondhandsmokeLifestyle = dataPoints.byAreas.LifestylePoints.Secondhandsmoke;
            AlcoholLifestyle = dataPoints.byAreas.LifestylePoints.Alcohol;
            AntibioticsLifestyle = dataPoints.byAreas.LifestylePoints.Antibiotics;
            ModerateExercisePercentilPoints = dataPoints.byAreas.LifestylePoints.ModerateExercisePercentil;
            VigorousPercentilPoints = dataPoints.byAreas.LifestylePoints.VigorousPercentil;
            SittingPercentilPoints = dataPoints.byAreas.LifestylePoints.SittingPercentil;
            SmokePercentilPoints = dataPoints.byAreas.LifestylePoints.SmokePercentil;
            SecondhandsmokePercentilPoints = dataPoints.byAreas.LifestylePoints.SecondhandsmokePercentil;
            AlcoholPercentilPoints = dataPoints.byAreas.LifestylePoints.AlcoholPercentil;
            AntibioticsPercentilPoints = dataPoints.byAreas.LifestylePoints.AntibioticsPercentil;
            PuntosLifestyle = dataPoints.byAreas.LifestylePoints.points;

            $scope.avarage = dataPoints.avarage;
            $scope.hideAll = true;
            $scope.doneSubmitwebPoints = true;
            $scope.hidepoints = false;
            $scope.hidereview = true;
            $scope.hideNext = true;
            $scope.hideBack = true;
            $element.find("#done-web").hide();
            $scope.hideerrors = true;
            $scope.firstname = dataPoints.first;
            $scope.totalUsers = dataPoints.totalUsers;
            $scope.lastName = dataPoints.lastName;
            $scope.datedone = dataPoints.date;
            $scope.puntos = dataPoints.points;

            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var dateTamp = new Date(dataPoints.date);

            var yyyy = dateTamp.getFullYear().toString();
            var mm = (dateTamp.getMonth()); // getMonth() is zero-based
            var dd = dateTamp.getDate().toString();

            $scope.datedone = monthNames[mm] + " " + dd + " of " + yyyy;
            //$scope.scoreAnimated = false;

            $scope.goradioScoreQ(1);

            //odometer(dataPoints.avarage, sizeOdometer, "assessment");
        }
        else {

            init();

        }
    }


    $scope.cbj_step_next = function () {
        var active = $(".cb_progress_bar").find('.cb_current').data('step');
        if (active + 1 <= $(".cb_progress_bar").find('.cb_step').length) {
            cbj_step_process(active, active + 1);
        } else {
            cbj_step_process(active, 1);
        }
    }

    /**
    Mueve la barra a un valor espesifico

    form: posicion en la que se encuentra la barra
    to: posicion a la que se movera la barra
    dir (opcional): direccion de la animacion acendente o desendente
*/

    $scope.cbj_step_process = function (from, to, dir) {
        if (to <= $(".cb_progress_bar").find('.cb_step').length) {
            if (typeof (dir) === 'undefined') dir = 'asc';
            var old_move = '';
            var new_start = '';
            var speed = 500;

            if (dir == 'asc') {
                old_move = '-';
                new_start = '';
            } else if (dir == 'desc') {
                old_move = '';
                new_start = '-';
            }

            if (Math.abs(from - to) === 1) {
                // Next Step
                if (from < to) $("#step" + from).addClass('cb_complete').removeClass('cb_current');
                else $("#step" + from).removeClass('cb_complete').removeClass('cb_current');
                var width = (parseInt(to) - 1) * 16.5;
                $(".cb_progress_bar").find('.cb_current_steps').animate({ 'width': width + '%' }, speed, function () {
                    $("#step" + to).removeClass('cb_complete').addClass('cb_current');
                });
            } else {
                // Move to Step
                var steps = Math.abs(from - to);
                var step_speed = speed / steps;
                if (from < to) {
                    move_to_step(from, to, 'asc', step_speed);
                } else {
                    move_to_step(from, to, 'desc', step_speed);
                }
            }
        }
    }

    /**
        Animacion de la barra (esta funccion es automanticamente utilizada por las anteriores)
    
        step: posicion inicial
        end: posicion hasta la cual llegara la animacion
        dir: direccion de la animacion (acendente o desendente)
        step_speed: velocidad de la animacion
    */

    $scope.move_to_step = function (step, end, dir, step_speed) {
        if (dir == 'asc') {
            $("#step" + step).addClass('cb_complete').removeClass('cb_current');
            var width = (parseInt(step + 1) - 1) * 20;
            $(".cb_progress_bar").find('.cb_current_steps').animate({ 'width': width + '%' }, step_speed, function () {
                $("#step" + (step + 1)).removeClass('cb_complete').addClass('cb_current');
                if (step + 1 < end) move_to_step((step + 1), end, dir, step_speed);
            });
        } else {
            $("#step" + step).removeClass('cb_complete').removeClass('cb_current');
            var width = (parseInt(step - 1) - 1) * 20;
            $(".cb_progress_bar").find('.cb_current_steps').animate({ 'width': width + '%' }, step_speed, function () {
                $("#step" + (step - 1)).removeClass('cb_complete').addClass('cb_current');
                if (step - 1 > end) move_to_step((step - 1), end, dir, step_speed);
            });
        }
    }

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var convertDate = function () {
        $scope.bmonth = monthNames[birthday.getMonth()];
        $scope.bday = birthday.getDate();
        $scope.byear = birthday.getFullYear();
    }

    convertDate();

    var myEl = $element.find("#inputAgeDate");
    myEl.mobiscroll().date({
        lang: 'en-US',
        theme: 'ios',
        onSet: function (event, inst) {
            birthday = new Date(inst._tempWheelArray[2], inst._tempWheelArray[0], inst._tempWheelArray[1]);
            //birthday = new Date(Date.UTC(birthday.getFullYear(), birthday.getMonth(), birthday.getDate(), birthday.getHours(), birthday.getMinutes(), birthday.getSeconds()));
            convertDate();
            $scope.slidePageForward();
            
        }
    });
    
    var bar = undefined;
   
    function init_transition(hasta, idelementback, idelementfront) {
        if (idelementback == idProgressAssessmentback) {
            $("#idProgressAssessmentback").html("");
            $("#idProgressAssessment").html("");
        }
        createBubbles(hasta, idelementback, idelementfront);
        bar.set(0);
        bar.animate(hasta * .01);  // Number from 0.0 to 1.0

        var id = window.setInterval(function () {
            clearInterval(id);
            if (idelementback == idProgressSecondaryMainBack) {
                // bar.stop();
                if ($window.sessionStorage["idformbyuser"] !== undefined) {
                    $window.sessionStorage["idformbyuser"] = undefined;
                    $scope.doneSubmitwebPoints = true;
                }

                if ($scope.alternativeScoreFitness) {
                    $scope.alternativeScoreFitness = false;
                    odometer_score_barFitness();
                }
            }
            else if (idelementback == idProgressAssessmentback) {
                odometer($scope.avarage, sizeOdometer, "assessment");
            }
        }, $scope.animationCircleTime);

    }

    var createBubbles = function (hasta, idelementback, idelementfront) {
        bar = new ProgressBar.Circle(idelementback, {
        });

        bar = new ProgressBar.Circle(idelementfront, {
            //color: '#94959A',
            //trailColor: '#dcdcdc',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 4,
            trailWidth: 4,
            easing: 'easeInOut',
            duration: $scope.animationCircleTime,
            text: {
                autoStyleContainer: false
            },
            from: { color: '#FFA202', width: 4 },
            to: { color: '#FFA202', width: 4 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);
                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } 
                else if (value == hasta) {
                    
                }


               
            }

        });
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '2rem';
   
    }
    


    initUser();
});

app.directive('mztLeonAssessmentForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-Assessment/mzt-leon-assessment-form.tpl.html',
        controller: 'mztLeonAssessmentCtrl as datatables'
    }
});