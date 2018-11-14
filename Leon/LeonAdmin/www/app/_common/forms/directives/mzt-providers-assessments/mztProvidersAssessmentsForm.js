"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztProvidersAssessmentsCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
   
    var init = function () {
        $scope.subscriberstemp = [];

        for (var x = 0; x < $rootScope.subscribers.length; x++) {
            if ($rootScope.subscribers[x].idcompany == $rootScope.idcompany) {
                var data = {
                    email: $rootScope.subscribers[x].iduser
                }
                $scope.subscriberstemp.push(data);
            }
        }
    }

    $scope.go = function (subscriber) {
        $window.sessionStorage["subscriber"] = JSON.stringify(subscriber);
        $location.path('/form/mzt-providers-user-assessments');
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

app.directive('mztProvidersAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-providers-assessments/mzt-providers-assessments-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztProvidersAssessmentsCtrl as datatables'
    }

});
