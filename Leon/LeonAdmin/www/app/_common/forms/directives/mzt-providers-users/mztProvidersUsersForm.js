"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztProvidersUsersCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
 
    var init = function()
    {
        $scope.subscriberstemp = [];
        
        for (var x = 0; x < $rootScope.subscribers.length; x++)
        {
            if ($rootScope.subscribers[x].idcompany == $rootScope.idcompany)
            {
                var data = {
                    email: $rootScope.subscribers[x].iduser
                }
                $scope.subscriberstemp.push(data);
            }
        }
    }

    $scope.go = function (subscriber) {
        $window.sessionStorage["subscriber"] = JSON.stringify(subscriber);
        $window.sessionStorage["subscriberstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-providers-users-update');
    }

    $scope.save = function () {
        $location.path('/form/mzt-providers-users-update');
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

app.directive('mztProvidersUsersForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-providers-users/mzt-providers-users-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztProvidersUsersCtrl as datatables'
    }

});
