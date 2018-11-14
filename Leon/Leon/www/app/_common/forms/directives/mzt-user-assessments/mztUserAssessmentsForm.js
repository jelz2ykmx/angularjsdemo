"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztUserAssessmentsCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
    var init = function () {
        
        $scope.assessmenttemp = [];
      
        for (var x = 0; x < $rootScope.userassessments.length; x++) {
            if ($rootScope.userassessments[x].iduser == $rootScope.email) {
                var data = {
                    id: $rootScope.userassessments[x].id,
                    iduser: $rootScope.userassessments[x].nombre,
                    avarage: $rootScope.userassessments[x].avarage,
                    points: 0
                }
                if ($rootScope.userassessments[x].avarage >= 100) {
                    data.avarage = $rootScope.userassessments[x].points;
                }
                $scope.assessmenttemp.push(data);
            }
        }
    }


    $scope.go = function (assessment) {
        var temp;
        for (var x = 0; x < $rootScope.userassessments.length; x++) {
            if ($rootScope.userassessments[x].iduser == $rootScope.email &&
                $rootScope.userassessments[x].id == assessment.id) {
                temp = $rootScope.userassessments[x];
            }
        }
     
        $window.sessionStorage["assessment"] = JSON.stringify(temp);
        $window.sessionStorage["assessmentstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-user-show-assessment');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2)
    ];

    init();
  
});

app.directive('mztUserAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-user-assessments/mzt-user-assessments-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztUserAssessmentsCtrl as datatables'
    }

});
