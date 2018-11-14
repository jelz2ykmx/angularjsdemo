"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztUserShowAssessmentCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {

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
        $location.path('/form/mzt-user-assessments');
    }

    init();
  
});

app.directive('mztUserShowAssessmentForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-user-show-assessment/mzt-user-show-assessment-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztUserShowAssessmentCtrl as datatables'
    }

});
