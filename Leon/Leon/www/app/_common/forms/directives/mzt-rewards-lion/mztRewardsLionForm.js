"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztRewardsLionCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
    
    $scope.save = function () {
        $location.path('/form/mzt-rewards-lion-update');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1).notSortable(),
     DTColumnBuilder.newColumn(2).notSortable()
    ];

  
});

app.directive('mztRewardsLionForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-rewards-lion/mzt-rewards-lion-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztRewardsLionCtrl as datatables'
    }

});
