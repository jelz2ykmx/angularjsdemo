"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztCompanyUsersAssessmentsCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
   
    var init = function () {
        $scope.companyuserstemp = [];
        for (var x = 0; x < $rootScope.companyusers.length; x++) {
            if ($rootScope.companyusers[x].idcompany == $rootScope.idcompany) {
                var data = {
                    email: $rootScope.companyusers[x].iduser
                }
                $scope.companyuserstemp.push(data);
            }
        }
    }

    $scope.go = function (user) {
        $window.sessionStorage["employee"] = JSON.stringify(user);
        $location.path('/form/mzt-company-user-assessments');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0).notSortable()
    ];

    init();
});

app.directive('mztCompanyUsersAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-company-users-assessments/mzt-company-users-assessments-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztCompanyUsersAssessmentsCtrl as datatables'
    }

});
