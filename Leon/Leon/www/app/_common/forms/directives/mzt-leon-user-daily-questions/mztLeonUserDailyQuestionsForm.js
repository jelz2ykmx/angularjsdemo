/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')

app.controller('mztLeonUserDailyQuestionsCtrl', function ($scope, $window, $element, $location, $rootScope, $interval, apiServices, $compile, $timeout) {

    $(document).ready(function () {
        if ($('body').hasClass('mobile-detected')) {
            $("body").removeClass("hidden-menu");
        } else {
            $("body").addClass("hidden-menu");
        }
    });


    $scope.imgsunlight = "styles/mztimgs/sunlight-anaranjado.png";
    $scope.imgnightlight = "styles/mztimgs/nightlight-anaranjado.png";
    $scope.disabledSunlight = false;
    $scope.disabledNightlight = false;
    $scope.userid = "";
    $scope.sleeping = 0;
    $scope.moodlike = 0;
    $scope.sore = 0;
    $scope.nutrition = 0;
    $scope.datelocal = null;
    $scope.datedone = null;
    $scope.transactionType = 0;
    $scope.allValues = {
        userid: "",
        sleeping: 0,
        moodlike: 0,
        sore: 0,
        nutrition: 0,
        datelocal: null,
        datelocalN: "",
        transactionType: 0 //1: Insert; 2: Update;
    };

    /* To initialize the swiper control. */
    var swiper = new Swiper("#swiper-container-sunlight", {
        simulateTouch: false,
        iOSEdgeSwipeDetection: true
    });

    var swiper2 = new Swiper("#swiper-container-nightlight", {
        simulateTouch: false,
        iOSEdgeSwipeDetection: true
    });

    swiper.on('onSlideNextEnd', function (event) {
        var showMessage = false;

        if ($(".swiper-slide-prev").find("#sleep-id").length > 0 || $(".swiper-slide-prev").find("#mood-id").length > 0) {
            if ($(".swiper-slide-prev button.button-activated").length === 0) {
                swiper.slidePrev();
                showMessage = true;
            }
        }
        if (showMessage) {
            $scope.Message = "Please choose an option.";
            $element.find("#Tooltip-Id").modal('show');
        }
        //$scope.submitAllValues();
    });

    swiper.on('onSlidePrevEnd', function (event) {
        //$scope.submitAllValues();
    });

    $scope.slidePageForward = function () {
        swiper.slideNext();
    };

    $scope.slidePageBackward = function () {
        swiper.slidePrev();
    };

    $scope.checkButton = function (event) {
        $("#" + event.target.id).parents(".page").find(".button-container button").removeClass("button-activated").addClass("button-deactivated");
        $("#" + event.target.id).removeClass("button-deactivated").addClass("button-activated");
    };

    $scope.checkButtonValue = function (section, value) {
        $(section).find(".button-container button").removeClass("button-activated").addClass("button-deactivated");
        $(section).find(".button-container button:eq(" + value - 1 + ")").removeClass("button-deactivated").addClass("button-activated");
    };

    $scope.setSleeping = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.sleeping = value;
    }

    $scope.setMoodlike = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.moodlike = value;
    }

    $scope.setSore = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.sore = value;
    }

    $scope.setNutrition = function (event, value) {
        if (typeof event === "string") {
            $scope.checkButtonValue(event, value);
        } else {
            $scope.checkButton(event);
        }
        $scope.nutrition = value;
    }

    $scope.sunlightGo = function () {
        if (!$scope.disabledSunlight) {
            $scope.hideDailyOption = true;
            $scope.hideSunlight = false;
        }
    }

    $scope.nightlightGo = function () {
        if (!$scope.disabledNightlight) {
            $scope.hideDailyOption = true;
            $scope.hideNightlight = false;
        }
    }

    $scope.submitAllValues = function () {
        $scope.allValues.userid = $scope.userid;
        $scope.allValues.sleeping = $scope.sleeping;
        $scope.allValues.moodlike = $scope.moodlike;
        $scope.allValues.sore = $scope.sore;
        $scope.allValues.nutrition = $scope.nutrition;
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
        else {
            $scope.allValues.datelocal = $scope.datelocal;
            $scope.allValues.datelocalN = $scope.datelocal;
        }
        $scope.allValues.transactionType = $scope.transactionType;
        console.dir(JSON.stringify($scope.allValues));
    };

    $scope.doSave = function () {
        if ($(".swiper-slide-active button.button-activated").length === 0) {
            $scope.Message = "Please choose an option.";
            $element.find("#Tooltip-Id").modal('show');
        } else {
            $("#dialog").dialog("open");
            $scope.submitAllValues();
            apiServices.getData($scope.allValues, 'api/QuestionsDaily/AddUpdate')
            .then(function (data) {
                $("#dialog").dialog("close");
                $scope.hideDailyOption = false;
                $scope.hideSunlight = true;
                $scope.hideNightlight = true;
                checkQuestionaryData($scope.allValues);
            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });
        }
    };

    var getOneData = function () {
        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push($scope.userid);
        arreglo.push(new Date());
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/QuestionsDaily/QueryOneUserDailyQuestions')
        .then(function (data) {
            console.dir(data);
            checkQuestionaryData(data);
            fillData(data);
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };

    var fillData = function (data) {
        $scope.sleeping = data.sleeping;
        $scope.moodlike = data.moodlike;
        $scope.sore = data.sore;
        $scope.nutrition = data.nutrition;

        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dateTamp = null;
        if ($scope.disabledSunlight || $scope.disabledNightlight) {
            $scope.datelocal = data.datelocal;
            dateTamp = new Date($scope.datelocal.substring(0, $scope.datelocal.indexOf("T")).replace(new RegExp("-", "g"), "/"));
        } else {
            $scope.datelocal = new Date();
            dateTamp = new Date();
        }

        var yyyy = dateTamp.getFullYear().toString();
        var mm = (dateTamp.getMonth()); // getMonth() is zero-based
        var dd = (dateTamp.getDate()).toString();

        $scope.datedone = monthNames[mm] + " " + dd + " of " + yyyy;
    }

    var checkQuestionaryData = function (data) {
        $scope.transactionType = 1;
        if (data.sleeping > 0 && data.moodlike > 0 && data.sore > 0) {
            $scope.imgsunlight = "styles/mztimgs/sunlight-gray.png";
            $scope.disabledSunlight = true;
            $scope.transactionType = 2;
        }
        if (data.nutrition > 0) {
            $scope.disabledNightlight = true;
            $scope.imgnightlight = "styles/mztimgs/nightlight-gray.png";
            $scope.transactionType = 2;
        }
    }

    var init = function() {
        $scope.hideDailyOption = false;
        $scope.hideSunlight = true;
        $scope.hideNightlight = true;
        $scope.userid = $rootScope.userId.userId;
        getOneData();
    }

    init();
});

app.directive('mztLeonUserDailyQuestionsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-user-daily-questions/mzt-leon-user-daily-questions-form.tpl.html',
        controller: 'mztLeonUserDailyQuestionsCtrl as datatables'
    }
});