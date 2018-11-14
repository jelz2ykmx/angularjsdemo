"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztCompanyUsersCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
    
    var init = function()
    {
        $scope.companyuserstemp = [];
        for (var x = 0; x < $rootScope.companyusers.length; x++)
        {
            if ($rootScope.companyusers[x].idcompany == $rootScope.idcompany)
            {
                var data = {
                    email: $rootScope.companyusers[x].iduser
                }
                $scope.companyuserstemp.push(data);
            }
        }
    }

    $scope.go = function (companyuser) {
        $window.sessionStorage["companyuser"] = JSON.stringify(companyuser);
        $window.sessionStorage["companyuserstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-company-users-update');
    }

    $scope.save = function () {
        $location.path('/form/mzt-company-users-update');
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

app.directive('mztCompanyUsersForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-company-users/mzt-company-users-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztCompanyUsersCtrl as datatables'
    }

});
