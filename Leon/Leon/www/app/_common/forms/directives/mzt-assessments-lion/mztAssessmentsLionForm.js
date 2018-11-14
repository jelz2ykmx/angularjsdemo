"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztAssessmentsLionCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
   
    $scope.save = function () {
        $window.sessionStorage["assessmentstatus"] = "0"; // Operacion update
        $location.path('/form/mzt-assessment-lion-update');
    }

    $scope.go = function (assessment) {
        $window.sessionStorage["assessment"] = JSON.stringify(assessment);
        $window.sessionStorage["assessmentstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-assessment-lion-update');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0).notSortable()
    ];

  
});

app.directive('mztAssessmentsLionForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-assessments-lion/mzt-assessments-lion-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztAssessmentsLionCtrl as datatables'
    }

});
