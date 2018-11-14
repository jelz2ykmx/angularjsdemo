"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztAssessmentsLionUpdateCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

    var init = function () {
        var state = $window.sessionStorage["assessmentstatus"];

        if (state == "1") {
            var assessment = JSON.parse($window.sessionStorage["assessment"]);
            $scope.nombre = assessment.nombre;
            $scope.days = assessment.days;
            $scope.cant = assessment.points;
            $scope.htmlcontent = assessment.htmlcontent;
            $scope.status = true;
        }
    }

    $scope.save = function () {
        $scope.messageQuestion = "Are you sure to save it?";
        var myEl = $element.find('#openQuestion');
        myEl.click();
    }

    var stopTime;

    $scope.savedata = function () {
        doSave();
    }

    var doSave = function () {
        $("#dialog").dialog("open");

        var assessment = {
            id: uuid2.newguid(),
            nombre: $scope.nombre,
            days : $scope.days,
            points: $scope.cant,
            htmlcontent: $scope.htmlcontent
        }
        $rootScope.assessments.push(assessment);

        localStorage.setItem('assessments', JSON.stringify($rootScope.assessments));

        stopTime = $interval(backTop, $rootScope.dialogTimer);
    }

    

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-assessment-lion');
    }

    init();
    
});
    

app.directive('mztAssessmentsLionUpdateForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-assessments-lion-update/mzt-assessments-lion-update-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                container: '#messages',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    nombre: {
                        validators: {
                            notEmpty: {
                                message: 'Introduzca un valor nombre'
                            },
                            stringLength: {
                                max: 30,
                                message: 'Unicamente un maximo de 30 caracteres son permitidos en nombre'
                            }
                        }
                    },
                }
            })
        },
        controller: 'mztAssessmentsLionUpdateCtrl as datatables'
    }

});
