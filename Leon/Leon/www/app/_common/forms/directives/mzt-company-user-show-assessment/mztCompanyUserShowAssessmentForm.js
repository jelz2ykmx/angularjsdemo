"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztCompanyUserShowAssessmentCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

    var id;
    var init = function () {
        var state = $window.sessionStorage["assessmentstatus"];

        if (state == "1") {
            var assessment = JSON.parse($window.sessionStorage["assessment"]);
            id = assessment.id;
            $scope.nombreuser = assessment.iduser;
            $scope.nombre = assessment.nombre;
            $scope.days = assessment.days;
            $scope.cant = assessment.points;
            $scope.htmlcontent = assessment.htmlcontent;
            $scope.avarage = assessment.avarage;
            $scope.status = true;
        }
    }


    $scope.back = function () {
        $location.path('/form/mzt-company-user-assessments');
    }

    init();
    
});
    

app.directive('mztCompanyUserShowAssessmentForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-company-user-show-assessment/mzt-company-user-show-assessment-form.tpl.html',
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
        controller: 'mztCompanyUserShowAssessmentCtrl as datatables'
    }

});
