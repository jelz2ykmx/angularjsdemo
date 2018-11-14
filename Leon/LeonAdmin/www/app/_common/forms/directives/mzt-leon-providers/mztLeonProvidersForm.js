/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonProvidersCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope, UserProviderFactory, apiServices) {
   
    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }
   

    $scope.radioType = {
        type: '0'
    };

    var search = function () {
     
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($scope.radioType.type)
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Users/QueryProviders')
        .then(function (data) {
            $scope.providers = [];
            for (var x = 0; x < data.length; x++) {
                $scope.providers.push(
                    new UserProviderFactory.copy(data[x].email, data[x].userid)
                );
            }
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    $scope.$watch('radioType.type', function (value) {
        search();
    });

    $scope.save = function () {
        $window.sessionStorage["stateuserprovideraFactory"] = "0";
        $location.path('/form/mzt-leon-providers-addupdate');
    }

    $scope.go = function (provider) {
        $window.sessionStorage["userproviderFactory"] = JSON.stringify(provider);
        $window.sessionStorage["stateuserprovideraFactory"] = "1"; // Operacion update
        $location.path('/form/mzt-leon-providers-addupdate');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0)
    ];

   


});

app.directive('mztLeonProvidersForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-providers/mzt-leon-providers-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztLeonProvidersCtrl as datatables'
    }

});
