/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms');

app.controller('mztLeonValidicPointsCtrl', function ($scope, $window, $element, $location, $rootScope, $interval, $document, queryQuestionFactory, apiServices, $compile, $timeout) {

    var flagSameDay = false;

    $scope.countPoints = 0;
    $scope.hideactivity = true;
    $scope.hidecalendarmonth = true;
    $scope.hidecalendarweek = true;
    $scope.monthweekcalendar = true;

    var flagChangedate = false;
    var today = new Date();
    $scope.TodayText = "";

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var convertDate = function () {
        var mm = today.getMonth();
        var dd = today.getDate();

        $scope.TodayText = monthNames[mm] + " " + changeAbbrev(dd);

        checkdate();
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

    var checkdate = function () {
        var yyyy = today.getFullYear();
        var mm = today.getMonth();
        var dd = today.getDate();

        var todayNew = new Date();
        var yyyyNew = todayNew.getFullYear();
        var mmNew = todayNew.getMonth();
        var ddNew = todayNew.getDate();

        if (yyyy == yyyyNew && mm == mmNew && dd == ddNew) {
            $("#idrowright").css("opacity", 0);
        }
        else {
            $("#idrowright").css("opacity", 1);
        }
    }

    convertDate();

    var flag = false;
    $scope.goGetDate = function (value) {
        if (value == 1 && $("#idrowright").css("opacity") == 0) {

        }
        else {
            today = new Date(today.setDate(today.getDate() + value));
            convertDate();
        }
    }

    $scope.$watch('TodayText', function () {
        $("#dialog").dialog("open");
        flagSameDay = false;
        avarage = 0;
        flag = true;

        bar.set(0);
        getOneData();
        //odometer();
    });


    var myEl = $element.find("#inputDate");
    myEl.mobiscroll().date({
        lang: 'en-US',
        theme: 'ios',
        max: today,
        formatValue: function (data) {
            today = new Date(data[2], data[0], data[1]);
            return monthNames[data[0]] + ' ' + changeAbbrev(data[1]);
        },
        onSet: function (event, inst) {
            checkdate();
        }
    });

    var eles = [];
    var elen = [];
    var eleh = [];
    var elep = [];
    var eleb = [];

    var count = 0;

    var x1 = undefined;
    var x2 = undefined;
    var x3 = undefined;
    var x4 = undefined;

    var sizeOdometer = 200;
    var avarage = 0;

    var checkSizeOdometer = function () {
        if ($rootScope.phoneType == 8 && $rootScope.isSafari) {
            sizeOdometer = 120;
        } else if ($rootScope.phoneType == 8) {
            sizeOdometer = 200;
        } else if ($rootScope.phoneType == 7 && $rootScope.isSafari) {
            sizeOdometer = 100;
        } else if ($rootScope.phoneType == 7) {
            sizeOdometer = 150;
        } else if ($rootScope.phoneType == 9 && $rootScope.isSafari) {
            sizeOdometer = 160;
        } else if ($rootScope.phoneType == 9) {
            sizeOdometer = 200;
        }
    };
    checkSizeOdometer();

    var odometer = function () {
        if (x2 != undefined && x2.hidden == true) {
            x1.removeEventListener("webkitAnimationEnd", myEndFunction);
            x2.hidden = false;
            x2.addEventListener("webkitAnimationEnd", myEndFunction);
            x2.classList.add('pointsanimation');
        }
        else if (x3 != undefined && x3.hidden == true) {
            x2.removeEventListener("webkitAnimationEnd", myEndFunction);
            x3.hidden = false;
            x3.addEventListener("webkitAnimationEnd", myEndFunction);
            x3.classList.add('pointsanimation');
        }
        else if (x4 != undefined && x4.hidden == true) {
            x3.removeEventListener("webkitAnimationEnd", myEndFunction);
            x4.hidden = false;
            x4.addEventListener("webkitAnimationEnd", myEndFunction);
            x4.classList.add('pointsanimation');
        }

        /*
        var chart = $(".chart-points");
        chart.attr("data-percent", avarage);
        if (chart.data("easyPieChart") !== undefined) {
            $(".chart-points").data('easyPieChart').update(avarage);
        } else {
            chart.easyPieChart({
                animate: {
                    duration: 1000,
                    enabled: true
                },
                barColor: '#FFA202',
                trackColor: false,
                scaleColor: false,
                lineWidth: 8,
                trackWidth: 5,
                lineCap: 'circle',
                scaleLength: 10,
                size: sizeOdometer,
                onStop: function (from, to) {
                    if (flag) {
                        flag = false;
                        getOneData();
                    }
                    else {
                        if (x2 != undefined && x2.hidden == true) {
                            x1.removeEventListener("webkitAnimationEnd", myEndFunction);
                            x2.hidden = false;
                            x2.addEventListener("webkitAnimationEnd", myEndFunction);
                            x2.classList.add('pointsanimation');
                        }
                        else if (x3 != undefined && x3.hidden == true) {
                            x2.removeEventListener("webkitAnimationEnd", myEndFunction);
                            x3.hidden = false;
                            x3.addEventListener("webkitAnimationEnd", myEndFunction);
                            x3.classList.add('pointsanimation');
                        }
                        else if (x4 != undefined && x4.hidden == true) {
                            x3.removeEventListener("webkitAnimationEnd", myEndFunction);
                            x4.hidden = false;
                            x4.addEventListener("webkitAnimationEnd", myEndFunction);
                            x4.classList.add('pointsanimation');
                        }

                    }
                },
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
        */
    }

    $scope.steps = "";
    $scope.stepsPoints = 0;
    $scope.sleep = "";
    $scope.sleepPoints = 0;
    $scope.activity = "";
    $scope.activityPoints = 0;
    $scope.nutrition = "";
    $scope.nutritionPoints = 0;

    var p1 = $("#one");
    var p2 = $("#two");
    var p3 = $("#three");
    var p4 = $("#four");

    var fillData = function () {
        $("#one").remove();
        $("#two").remove();
        $("#three").remove();
        $("#four").remove();

        $("#barOne").append(p1);
        $("#barTwo").append(p2);
        $("#barThree").append(p3);
        $("#barFour").append(p4);

        count = 0;

        eles = [];
        elen = [];
        elep = [];
        eleb = [];

        x1 = undefined;
        x2 = undefined;
        x3 = undefined;
        x4 = undefined;

        if ($scope.steps != "") {
            eles.push(1);
            elen.push("one");
            elep.push($scope.stepsPoints);
        }
        else {
            eleb.push("one");
        }

        if ($scope.sleep != "") {
            eles.push(2);
            elen.push("two");
            elep.push($scope.sleepPoints);
        }
        else {
            eleb.push("two");
        }

        if ($scope.activity != "") {
            eles.push(3);
            elen.push("three");
            elep.push($scope.activityPoints);
        }
        else {
            eleb.push("three");
        }

        if ($scope.nutrition != "") {
            eles.push(4);
            elen.push("four");
            elep.push($scope.nutritionPoints);
        }
        else {
            eleb.push("four");
        }
        for (var x = 0; x < eles.length; x++) {
            var targetFn = $compile($('#' + elen[x]));
            if (x == 0) {
                if (eles[x] != 1) {
                    targetFn($scope).prependTo('#barOne');
                }
                x1 = $document[0].getElementById(elen[x]);
                x1.hidden = true;
            }
            if (x == 1) {
                if (eles[x] != 2) {
                    targetFn($scope).prependTo('#barTwo');
                }
                x2 = $document[0].getElementById(elen[x]);
                x2.hidden = true;
            }
            else if (x == 2) {
                if (eles[x] != 3) {
                    targetFn($scope).prependTo('#barThree');
                }
                x3 = $document[0].getElementById(elen[x]);
                x3.hidden = true;
            }
            else {
                x4 = $document[0].getElementById(elen[x]);
                x4.hidden = true;
            }
        }

        for (var x = 0; x < eleb.length; x++) {
            $("#" + eleb[x]).remove();
        }

        if (x1 != undefined) {
            x1.hidden = false;
            x1.addEventListener("webkitAnimationEnd", myEndFunction);
            x1.classList.add('pointsanimation');
        }
        else {
            $('#idScoreHideDate').css("width", "0%");

            //odometer();
        }
        avarage = 0;
        $('.percent').text(avarage);
        $('.bubbleScoreCircleFront').css("opacity", 0);
    }

    function myEndFunction() {
        var points = elep[count];
        avarage += points;
        init_transition(avarage, points, idProgressPointsback, idProgressPoints)
        count++;
    }

    var getOneData = function () {
        $('#idScoreHideDate').css("width", "100%");

        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push(today.getFullYear());
        arreglo.push(today.getMonth() + 1);
        arreglo.push(today.getDate());
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/ValidicPoints/Points')
        .then(function (data) {
            $scope.steps = data.stepsCount;
            $scope.stepsPoints = data.stepsPoints;
            $scope.sleep = data.sleepCount;
            $scope.sleepPoints = data.sleepPoints;
            $scope.nutrition = data.nutritionCount;
            $scope.nutritionPoints = data.nutritionPoints;
            $scope.activity = data.fitnessCount;
            $scope.activityPoints = data.fitnessPoints;

            $("#dialog").dialog("close");
            fillData();
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };

    $scope.hideToolBar = true;
    $scope.hideChartBar = true;
    $scope.hidePoints = false;

    $scope.back = function () {
        if (!$rootScope.userRole) {
            $(".globalPageFooter").show();
        }

        $("#one").removeClass("pointsanimation");
        $("#two").removeClass("pointsanimation");
        $("#three").removeClass("pointsanimation");
        $("#four").removeClass("pointsanimation");

        $scope.hideToolBar = true;
        $scope.hideactivity = true;
        $scope.hideChartBar = true;
        $scope.hidePoints = false;
    }


    $scope.getChartBar = function ($event) {
        if (!$rootScope.userRole) {
            $(".globalPageFooter").hide();
        }
       
        var value = event.target.id;
        if (value == 1) {
            getChartStepsBar();
        }
        else if (value == 3) {
            getChartActivityBar();
        }

        /*
        if (elep.length == count)
        {
            if (!flagSameDay) {
                flagSameDay = true;
                getOneValue(value);
            }
            else {
                $scope.createChartBar(value);
            }
        }
        */
    }


    var dataSteps = [];
    var dataSleep = [];
    var dataFitnessMiles = [];
    var dataFitnessCals = [];
    var dataCalories = [];

    $scope.createChartBar = function (value) {

        var position = 0;
        $scope.hidePoints = true;
        $scope.hideToolBar = false;
        $scope.hideChartBar = false;

        $scope.data = [[]];
        $scope.labels = [];

        if (value == 0) {
            if ($scope.monthweek) {
                for (var x = 0; x < monthPoints.length; x++) {
                    $scope.data[0].push(monthPoints[x]);
                    $scope.labels.push('');
                }
            }
            else {
                for (var x = 0; x < weekPoints.length; x++) {
                    $scope.data[0].push(weekPoints[x]);
                    $scope.labels.push('');
                }
            }

        }
        else if (value == 1) {
            for (var x = 0; x < dataSteps.length; x++) {
                $scope.data[0].push(dataSteps[x]);
                $scope.labels.push('');
            }
        }
        else if (value == 2) {
            for (var x = 0; x < dataSleep.length; x++) {
                $scope.data[0].push(dataSleep[x]);
                $scope.labels.push('');
            }
        }
        else if (value == 3) {
            for (var x = 0; x < dataFitnessMiles.length; x++) {
                $scope.data[0].push(dataFitnessMiles[x]);
                $scope.data[0].push(dataFitnessCals[x]);
                $scope.labels.push('');
            }
        }
        else if (value == 4) {
            for (var x = 0; x < dataCalories.length; x++) {
                $scope.data[0].push(dataCalories[x]);
                $scope.labels.push('');
            }
        }

        $scope.optionsbar = {
            tooltips: {
                enabled: false
            },
            legend: {
                display: false
            },


            scales: {
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }

                }]
            },

            animation: {
                onComplete: function () {
                    if (!$scope.alternativeScore) {
                        $scope.scoreBack = false;
                        $scope.alternativeScoreFitnessButtons = false;
                    }
                }
            }


        }

        $scope.datasetOverride = [{ backgroundColor: [] }];
        $scope.datasetOverride[0].backgroundColor = getColorsFitness($scope.data[0].length);

        /*
        $scope.datasetOverride = [
        {
            lineTension: 0.1
            fill: false
            backgroundColor: "#000"
            borderColor: "rgba(75,192,192,1)"
        }
        {
            lineTension: 0.1
            fill: false
            backgroundColor: "#f00"
            borderColor: "rgba(75,192,192,1)"
        }
        ]*/
    };


    var getColorsFitness = function (length) {
        var backgroundColours = [];
        //#2BCBC9

        for (var i = 0; i < length; i++) {
            backgroundColours.push("#2BCBC9");
        }

        return backgroundColours;
    };

    var getOneValue = function (value) {
        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push(today.getFullYear());
        arreglo.push(today.getMonth() + 1);
        arreglo.push(today.getDate());
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/ValidicPoints/OneValue')
        .then(function (data) {
            dataSteps = [];
            dataSleep = [];
            dataFitnessMiles = [];
            dataFitnessCals = [];
            dataCalories = [];
            for (var x = 0; x < data.steps.length; x++) {
                dataSteps.push(data.steps[x]);
                dataSleep.push(data.sleep[x]);
                dataFitnessMiles.push(data.fitnessMiles[x]);
                dataFitnessCals.push(data.fitnessCals[x]);
                dataCalories.push(data.calories[x]);
            }

            $("#dialog").dialog("close");
            $scope.createChartBar(value);
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };



    $scope.getPointsChart = function () {
        if (!$rootScope.userRole) {
            $(".globalPageFooter").hide();
        }

        if (elep.length == count) {
            $scope.chartLabel = "Points";
            getMonthData("MonthPoints");
        }
    }

    var getChartStepsBar = function ($event) {
        if (elep.length == count) {
            $scope.chartLabel = "Steps";
            getMonthData("MonthSteps");
        }
    }


    $scope.last7Days = 0;
    $scope.avarageDay = 0;
    $scope.avarageWeek = 0;
    $scope.avarageMonth = 0;
    var weekPoints = [];
    var monthPoints = [];
    $scope.monthweek = true;

    $scope.clickToogle = function () {
        $scope.createChartBar(0);
    }

    var getMonthData = function (path) {
        $scope.monthweek = true;
        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push(today.getFullYear());
        arreglo.push(today.getMonth() + 1);
        arreglo.push(today.getDate());
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/ValidicPoints/' + path)
        .then(function (data) {
            $scope.last7Days = data.last7Days;
            $scope.avarageDay = data.avarageDay;
            $scope.avarageWeek = data.avarageWeek;
            $scope.avarageMonth = data.avarageMonth;
            weekPoints = data.weekPoints;
            monthPoints = data.monthPoints;

            $scope.createChartBar(0);


            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };

    var iniWeek = new Date();
    var endWeek = new Date();

    $scope.clickToogleCalendar = function () {
        if ($scope.monthweekcalendar) {
            $scope.hidecalendarweek = true;
            $scope.hidecalendarmonth = false;
        }
        else {
            GenerateWeekDays(today);

            $scope.hidecalendarweek = false;
            $scope.hidecalendarmonth = true;
        }
    }

    var GenerateWeekDays = function (value) {
        var dayPosition = value.getDay();
        if (dayPosition > 0) {
            value.setDate(value.getDate() - (dayPosition - 1));
        }
        else {
            value.setDate(value.getDate() - 6);
        }
        iniWeek = new Date(value);

        endWeek = new Date(iniWeek);
        for (var x = 0; x < 6; x++) {
            endWeek.setDate(endWeek.getDate() + 1);
        }

        if (iniWeek.getMonth() == endWeek.getMonth()) {
            // $('.cb_month_week').text(iniWeek.getDate() + " - " + endWeek.getDate() + " " + months[endWeek.getMonth()]);
            $scope.WeekText = iniWeek.getDate() + " - " + endWeek.getDate() + " " + months[endWeek.getMonth()].substring(0, 3);
        }
        else {
            //$('.cb_month_week').text(iniWeek.getDate() + " " + months[iniWeek.getMonth()] + " - " + endWeek.getDate() + " " + months[endWeek.getMonth()]);
            $scope.WeekText = iniWeek.getDate() + " " + months[iniWeek.getMonth()].substring(0, 3) + " - " + endWeek.getDate() + " " + months[endWeek.getMonth()].substring(0, 3);
        }

        getActivitiesWeek();
    }

    $('.cb_prev_week').click(function () {
        iniWeek.setDate(iniWeek.getDate() - 7);
        GenerateWeekDays(iniWeek);
    });

    $('.cb_next_week').click(function () {
        endWeek.setDate(endWeek.getDate() + 1);
        GenerateWeekDays(endWeek);
    });


    var activitiesWeek = [];
    $scope.milesWeek = "";
    $scope.caloriesWeek = "";
    $scope.durationWeek = ""

    var getActivitiesWeek = function () {

        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push(iniWeek.getFullYear());
        arreglo.push(iniWeek.getMonth() + 1);
        arreglo.push(iniWeek.getDate());
        arreglo.push(endWeek.getFullYear());
        arreglo.push(endWeek.getMonth() + 1);
        arreglo.push(endWeek.getDate());
        var model = { parameters: arreglo };

        activitiesWeek = [];
        $scope.milesWeek = "";
        $scope.caloriesWeek = "";
        $scope.durationWeek = "";

        apiServices.getData(model, 'api/ValidicPoints/WeekActivity')
        .then(function (data) {
            $scope.milesWeek = data.miles;
            $scope.caloriesWeek = data.calories;
            $scope.durationWeek = data.duration;
            activitiesWeek = data.data;

            getMonthMatrixWeek();

            $("#dialog").dialog("close");

        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };

    $scope.WeekText = "";

    var myEl = $element.find("#inputWeek");
    myEl.mobiscroll().date({
        lang: 'en-US',
        theme: 'ios',
        max: today,
        formatValue: function (data) {
            iniWeek = new Date(data[2], data[0], data[1]);
            return monthNames[data[0]];
        },
        onSet: function (event, inst) {
            GenerateWeekDays(iniWeek);
            getActivitiesWeek();
        }
    });

    var getMonthMatrixWeek = function () {
        var contex = '.cb_mzt_calendarweek';
        var calendar = document.querySelector(contex);

        var aux = new Date(iniWeek);
        var d = new Date();
        var full = false;
        for (var j = 0; j <= 6; j++) {

            var week = calendar.querySelector('.cb_week_' + (j + 1));
            week.classList.remove('cb_n');
            var day = week.querySelector('.cb_day_1');

            var dayName = week.querySelector('.divtotalweekday');
            var e = day.querySelector('.cb_day_num');
            e.innerHTML = aux.getDate();

            day.classList.remove('cb_nday');
            day.classList.remove('cb_now');
            day.classList.remove('divtotalweekday');

            if (aux.getFullYear() == d.getFullYear() && aux.getMonth() == d.getMonth() && aux.getDate() == d.getDate()) {
                day.classList.add('cb_now');
            }
            day.appendChild(e);
            day.appendChild(dayName);

            day = week.querySelector('.cb_day_2');
            day.innerHTML = "";
            if (activitiesWeek[j].miles != "0" || activitiesWeek[j].calories != "0" || activitiesWeek[j].duration != "0") {
                var cadena = '<img ng-src="styles/mztimgs/cyclinglogo.png" class="mzt_img_calendar_activities"/>';
                if (activitiesWeek[j].activity.length == 1) {
                    cadena += '<div class="cellfitnessWeek cellfitnessWeekImg">' + activitiesWeek[j].activity[0] + '</>';
                }
                else {
                    cadena += '<div class="cellfitnessWeek">Multi</>';
                }
                var targetFn = $compile(cadena);
                targetFn($scope).prependTo(day);
            }
            day = week.querySelector('.cb_day_3');
            day.innerHTML = "";
            if (activitiesWeek[j].miles != "0") {
                day.innerHTML = activitiesWeek[j].miles;
            }

            day = week.querySelector('.cb_day_4');
            day.innerHTML = "";
            if (activitiesWeek[j].duration != "0") {
                day.innerHTML = activitiesWeek[j].duration;
            }
            day = week.querySelector('.cb_day_5');
            day.innerHTML = "";
            if (activitiesWeek[j].calories != "0") {
                day.innerHTML = activitiesWeek[j].calories;
            }
            aux.setDate(aux.getDate() + 1);
        }
    };



    var activitiesMonthly = [];
    var milesActivityMonthly = "";
    $scope.durationActivityMonthly = "";
    $scope.caloriesActivityMonthly = "";

    var dateFitnees = today;

    var getChartActivityBar = function () {
        $scope.monthweekcalendar = true;
        $scope.hidePoints = true;
        $scope.hideToolBar = false;
        $scope.hideactivity = false;
        $scope.hidecalendarmonth = false;
        $scope.hidecalendarweek = true;
        dateFitnees = today;
        getActivitiesMonthly();

    }

    $scope.MonthText = "";

    var myEl = $element.find("#inputMonth");
    myEl.mobiscroll().date({
        lang: 'en-US',
        theme: 'ios',
        max: today,
        formatValue: function (data) {
            dateFitnees = new Date(data[2], data[0], data[1]);
            return monthNames[data[0]];
        },
        onSet: function (event, inst) {
            getActivitiesMonthly();
        }
    });

    var getActivitiesMonthly = function () {

        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push(dateFitnees.getFullYear());
        arreglo.push(dateFitnees.getMonth() + 1);
        arreglo.push(dateFitnees.getDate());
        var model = { parameters: arreglo };
        activitiesMonthly = [];
        milesActivityMonthly = "";
        $scope.durationActivityMonthly = "";
        $scope.caloriesActivityMonthly = "";
        apiServices.getData(model, 'api/ValidicPoints/MonthActivity')
        .then(function (data) {
            milesActivityMonthly = data.miles;
            $scope.durationActivityMonthly = data.duration;
            $scope.caloriesActivityMonthly = data.calories;
            activitiesMonthly = data.activities;

            var m = dateFitnees.getMonth();
            //$('.cb_month').text(months[m]);
            $scope.MonthText = months[m];
            getMonthMatrix('.cb_calendar', dateFitnees.getFullYear(), m);

            $("#dialog").dialog("close");

        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };

    var getMonthMatrix = function (contex, year, month) {
        var days = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

        var d = new Date();
        var firstDay = -(new Date(year, month).getDay() - 1);
        var calendar = document.querySelector(contex);
        var result = [];
        var full = false;
        for (var j = 0; j <= 5; j++) {
            var week = calendar.querySelector('.cb_week_' + (j + 1));
            week.classList.remove('cb_n');
            var k = 1;
            for (var i = firstDay; i <= (firstDay + 6) ; i++) {
                var aux = new Date(year, month, i);
                var day = week.querySelector('.cb_day_' + (k));
                var e = day.querySelector('.cb_day_num');
                e.innerHTML = aux.getDate();

                day.classList.remove('cb_nday');
                day.classList.remove('cb_now');
                if (aux.getFullYear() == d.getFullYear() && aux.getMonth() == d.getMonth() && aux.getDate() == d.getDate()) {
                    day.classList.add('cb_now');
                }
                if ((aux.getMonth()) != (new Date(year, month).getMonth())) {
                    day.classList.add('cb_nday');
                    if ((j + 1) === 5) {
                        full = true;
                    }
                    if (full && (j + 1) === 6 && week.style.display != 'none') {
                        week.classList.add('cb_n');
                    }
                    if (k === 1 && (j + 1) === 6 && week.style.display != 'none') {
                        week.classList.add('cb_n');
                    }
                }
                day.appendChild(e);
                k++;

                var pictures = day.querySelector('.mzt_pictures_Monthly_Activities');
                pictures.innerHTML = "";

                var miles = day.querySelector('.mzt_miles_Monthly_Activities');
                miles.innerHTML = "";

                if (i > 0 && i <= days) {
                    if (activitiesMonthly[i].miles != "0") {
                        var cadena = '<img src="styles/mztimgs/cyclinglogo.png" class="mzt_img_calendar_activities"/>';
                        var targetFn = $compile(cadena);
                        targetFn($scope).prependTo(pictures);

                        miles.innerHTML = activitiesMonthly[i].miles;

                        day.appendChild(pictures);
                        day.appendChild(miles);

                    }
                }

            }
            firstDay = i;
        }
        return result;
    };

    var months = [
           "January",
           "February",
           "March",
           "April",
           "May",
           "June",
           "July",
           "August",
           "September",
           "October",
           "November",
           "December"
    ];

    $('.cb_prev').click(function () {
        var m = dateFitnees.getMonth();
        var y = dateFitnees.getFullYear();
        m = m - 1;
        if (m == -1) {
            m = 11;
            y--;
        }

        dateFitnees = new Date(y, m, 1);
        getActivitiesMonthly();
    });

    $('.cb_next').click(function () {
        var m = dateFitnees.getMonth();
        var y = dateFitnees.getFullYear();
        m = m + 1;
        if (m == 12) {
            m = 0;
            y++;
        }
        dateFitnees = new Date(y, m, 1);
        getActivitiesMonthly();
    });


    var bar = undefined;
   

    function init_transition(hasta, value, idelementback, idelementfront) {
        var timerLine = 5000;
        if (value == 0) {
            timerLine = 0;
        }
        else
        {
            bar.animate(hasta * .01);  // Number from 0.0 to 1.0
        }
       
        var id = window.setInterval(function () {
            if (elep.length == count) {
                $('#idScoreHideDate').css("width", "0%");
            }
            clearInterval(id);
            if (x2 != undefined && x2.hidden == true) {
                x1.removeEventListener("webkitAnimationEnd", myEndFunction);
                x2.hidden = false;
                x2.addEventListener("webkitAnimationEnd", myEndFunction);
                x2.classList.add('pointsanimation');
            }
            else if (x3 != undefined && x3.hidden == true) {
                x2.removeEventListener("webkitAnimationEnd", myEndFunction);
                x3.hidden = false;
                x3.addEventListener("webkitAnimationEnd", myEndFunction);
                x3.classList.add('pointsanimation');
            }
            else if (x4 != undefined && x4.hidden == true) {
                x3.removeEventListener("webkitAnimationEnd", myEndFunction);
                x4.hidden = false;
                x4.addEventListener("webkitAnimationEnd", myEndFunction);
                x4.classList.add('pointsanimation');
            }
            //odometer();
        }, timerLine);

    }



    var createBubbles = function (hasta, idProgressPointsback, idProgressPoints) {
        bar = new ProgressBar.Circle(idProgressCircleFront, {
            strokeWidth: 4,
            trailWidth: 4,
            easing: 'easeInOut',
            duration: 5000,
            text: {
                autoStyleContainer: false
            },
            from: { color: '#FFA202', width: 4 },
            to: { color: '#FFA202', width: 4 }
        });

        bar = new ProgressBar.Circle(idProgressPointsback, {
        });
       
        bar = new ProgressBar.Circle(idProgressPoints, {
            //color: '#94959A',
            //trailColor: '#dcdcdc',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 4,
            trailWidth: 4,
            easing: 'easeInOut',
            duration: 5000,
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
                else if (value == 100) {
                     $('.bubbleScoreCircleFront').css("opacity", 1);
                }
                $('.percent').text(value);


            }

        });
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '2rem';



    }

    createBubbles(0, idProgressPointsback, idProgressPoints);
    
    
    //getOneData();

});

app.directive('mztLeonValidicPointsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-validic-points/mzt-leon-validic-points-form.tpl.html',
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
        controller: 'mztLeonValidicPointsCtrl as datatables'
    }
});