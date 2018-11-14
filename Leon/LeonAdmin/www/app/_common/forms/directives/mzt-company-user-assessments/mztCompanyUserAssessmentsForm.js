"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztCompanyUserAssessmentsCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
    var init = function () {
        var subscriber = JSON.parse($window.sessionStorage["employee"]);
        $scope.nombre = subscriber.email;

        $scope.assessmenttemp = [];
     
        for (var x = 0; x < $rootScope.userassessments.length; x++) {
            if ($rootScope.userassessments[x].iduser == $scope.nombre) {
                var data = {
                    id: $rootScope.userassessments[x].id,
                    iduser: $rootScope.userassessments[x].nombre,
                    avarage: $rootScope.userassessments[x].avarage
                }
                $scope.assessmenttemp.push(data);
            }
        }
    }

    $scope.go = function (assessment) {
        var temp;
        for (var x = 0; x < $rootScope.userassessments.length; x++) {
            if ($rootScope.userassessments[x].iduser == $scope.nombre &&
                $rootScope.userassessments[x].id == assessment.id) {
                temp = $rootScope.userassessments[x];
            }
        }
        

        $window.sessionStorage["assessment"] = JSON.stringify(temp);
        $window.sessionStorage["assessmentstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-company-user-show-assessment');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1)
    ];

    $scope.back = function () {
        $location.path('/form/mzt-company-users-assessments');
    }

    init();
});

app.directive('mztCompanyUserAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-company-user-assessments/mzt-company-user-assessments-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztCompanyUserAssessmentsCtrl as datatables'
    }

});
