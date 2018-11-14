/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms');

app.controller('mztLeonValidicPointsAdsCtrl', function ($scope, $window, $element, $location, $rootScope, $interval, $document, queryQuestionFactory, apiServices, $compile, $timeout) {

    var dataModel = {
        steps: new HealthDataModel({
            value: 7015,
            score: 10
        }),
        sleep: new HealthDataModel({
            start: 1360713600000 + 5 * 60 * 60 * 1000,
            end: 1360735440000 + 5 * 60 * 60 * 1000 + 500,
            value: '6:15:00',
            score: 10
        }),
        activity: new HealthDataModel({
            start: 1360713600000 + 5 * 60 * 60 * 1000,
            end: 1360716300000 + 5 * 60 * 60 * 1000 + 500,
            value: '0:45:00',
            cal: 617,
            score: 15
        }),
        food: new HealthDataModel({
            cal: 1325,
            score: 10
        })
    };

    dataModel.steps.duration = Math.log(dataModel.steps.value / 500);
    dataModel.sleep.duration = Math.log((dataModel.sleep.end - dataModel.sleep.start) / 1000000);
    dataModel.activity.duration = Math.log((dataModel.activity.end - dataModel.activity.start) / 100000);
    dataModel.food.duration = Math.log(dataModel.food.cal / 100);

    //console.log(dataModel);

    var totalScore = 50;
    var currentScore = 0;
    var bar;

    var filldemo =  function () {

        bar = new ProgressBar.Circle('#score-container', {
            color: '#ffa202',
            trailColor: '#eaeaea',
            strokeWidth: 3,
            easing: 'easeOutCubic',
            svgStyle: {
                display: 'block',
                width: '50%',
                margin: '0 auto',
                transform: 'rotate(180deg)'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#ffa202',
                    position: 'absolute',
                    "font-size": "6em",
                    "font-weight": "600",
                    left: '50%',
                    top: '50%',
                    padding: 0,
                    margin: 0,
                    // You can specify styles which will be browser prefixed
                    transform: {
                        prefix: true,
                        value: 'translate(-50%, -50%)'
                    }
                }
            }
        });

        // trigger the angular animation differently (the slide from bottom)
        setTimeout(function () {
            $('#steps').animate({
                top: 0,
            }, 1500, 'easeOutCubic');
        }, 0);

        setTimeout(function () {
            startCountingSteps();
        }, 750);

        setTimeout(function () {
            $('#sleep').animate({
                top: 0
            }, 1500, 'easeOutCubic');
        }, dataModel.steps.duration * 1000);

        setTimeout(function () {
            startCountingSleep();
        }, dataModel.steps.duration * 1000 + 750);

        setTimeout(function () {
            $('#activity').animate({
                top: 0
            }, 1500, 'easeOutCubic');
        }, (dataModel.steps.duration + dataModel.sleep.duration) * 1000);

        setTimeout(function () {
            startCountingActivity();
        }, (dataModel.steps.duration + dataModel.sleep.duration) * 1000 + 750);

        setTimeout(function () {
            $('#food').animate({
                top: 0
            }, 1500, 'easeOutCubic');
        }, (dataModel.steps.duration + dataModel.sleep.duration + dataModel.activity.duration) * 1000);

        setTimeout(function () {
            startCountingFood();
        }, (dataModel.steps.duration + dataModel.sleep.duration + dataModel.activity.duration) * 1000 + 750);
    };

    function startCountingSteps() {
        animateProgressBar(dataModel.steps.score, dataModel.steps.duration);
        scoreAnimation('#steps-counter', 10, dataModel.steps.duration, 'steps', dataModel.steps.value, 0, dataModel.steps.value);
    }
    function startCountingSleep() {
        animateProgressBar(dataModel.sleep.score, dataModel.sleep.duration);
        scoreAnimation('#sleep-counter', 10, dataModel.sleep.duration, 'sleep', dataModel.sleep.value, dataModel.sleep.start, dataModel.sleep.end);
    }
    function startCountingActivity() {
        animateProgressBar(dataModel.activity.score, dataModel.activity.duration);
        scoreAnimation('#activity-counter', 10, dataModel.activity.duration, 'activityDuration', dataModel.activity.value, dataModel.activity.start, dataModel.activity.end);
        //scoreAnimation('#activity-counter2', 10, dataModel.activity.duration, 'activityCal', dataModel.activity.cal, 0, dataModel.activity.cal);
    }
    function startCountingFood() {
        animateProgressBar(dataModel.food.score, dataModel.food.duration);
        scoreAnimation('#food-counter', 10, dataModel.food.duration, 'foodCal', dataModel.food.cal, 0, dataModel.food.cal);
    }

    function scoreAnimation(selector, delay, time, formatter, value, from, to) {

        //console.log(selector);
        //console.log(formatter);
        
        switch (formatter) {
            case 'steps':
                $(selector).number(value);
                break;
            case 'activityCal':
                $(selector).number(value);
                break;
            case 'foodCal':
                $(selector).number(value);
                break;
            default:
                $(selector).text(value);
                break;
        }

        $(selector).countTo({
            from: from,
            to: to,
            speed: time * 100 + 2000,
            refreshInterval: 10,
            formatter: function (value, options) {
                switch (formatter) {
                    case 'sleep':
                        // return n.split(':').splice(0, 2).join(':') + ' hr';
                        return calcSleepTime(value);
                    case 'activityDuration':
                        //return value.toFixed(options.decimals).split(':').splice(1, 1).join(':') + ' m';
                        return calcActivityTime(value);
                    case 'activityCal':
                        return value.toFixed(options.decimals).toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2') + ' cal';
                    case 'foodCal':
                        return value.toFixed(options.decimals).toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2') + ' cal';
                    default:
                        return value.toFixed(options.decimals).toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                }
            }
        });
        
    }

    // data model prototype
    function HealthDataModel(data) {
        this.start = data.start || undefined;
        this.end = data.end || undefined;
        this.cal = data.cal || undefined;
        this.score = data.score || undefined;
        this.value = data.value || undefined;
    }

    function animateProgressBar(score, duration) {
        currentScore += score;
        // set the current progress
        bar.animate(currentScore / totalScore, {
            duration: duration * 1000 + 500,
            easing: 'easeOutCubic',
            step: barStep
        });
    }

    function barStep(state, circle, attachment) {
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(Math.round(totalScore * value / 100));
        }
    }

    function calcSleepTime(difference) {
        var time = new Date(difference);

        var minutes = time.getMinutes();

        if (minutes < 10) minutes = "0" + minutes.toString();

        return time.getHours() + ":" + minutes + " hr";
    }

    function calcActivityTime(difference) {
        var time = new Date(difference);

        var result = "";

        var hours = time.getHours();
        if (hours > 0) result += hours + ":";

        var minutes = time.getMinutes();
        if (minutes < 10) minutes = "0" + minutes.toString();
        result += minutes;

        return result + " m";
    }

    function formatNumber(num) {
        var isComma = /[0-9]+,[0-9]+/.test(num);

    }

    filldemo();
  
});

app.directive('mztLeonValidicPointsFormAds', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-validic-points-ads/mzt-leon-validic-points-form-ads.tpl.html',
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
        controller: 'mztLeonValidicPointsAdsCtrl as datatables'
    }
});