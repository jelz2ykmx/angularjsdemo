"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztProvidersAddupdateAssessmentsCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

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
            //$scope.status = true;
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

        for (var x = 0; x < $rootScope.userassessments.length; x++) {
         
            if ($rootScope.userassessments[x].iduser == $scope.nombreuser &&
                $rootScope.userassessments[x].id == id) {
                $rootScope.userassessments[x].nombre = $scope.nombre;
                $rootScope.userassessments[x].days = $scope.days;
                $rootScope.userassessments[x].points = $scope.cant;
                $rootScope.userassessments[x].htmlcontent = $scope.htmlcontent;
                $rootScope.userassessments[x].avarage = $scope.avarage;

            }
        }

       
        localStorage.setItem('userassessments', JSON.stringify($rootScope.userassessments));

        stopTime = $interval(backTop, $rootScope.dialogTimer);
    }

    

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-providers-user-assessments');
    }

    init();
    
});
    

app.directive('mztProvidersAddupdateAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-providers-addupdate-assessments/mzt-providers-addupdate-assessments-form.tpl.html',
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
        controller: 'mztProvidersAddupdateAssessmentsCtrl as datatables'
    }

});
