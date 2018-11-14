/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonProvidersCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope, UserProviderFactory, apiServices) {
    var USERS = 2;
    $scope.hideCvsButton = true;
    $scope.selectDailyPlan = null;

    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }

    $scope.hideFilterDailyPlan = true;

    $scope.changeSelectDailyPlan = function () {
        search();
    }

    $scope.radioType = {
        type: '0'
    };

    $scope.getCvs = function () {
        var $link = $("#dataLink");
        var csv = "";
        _.each($scope.providers, function (provider, index) {
            csv += provider.email + ',' + (provider.firtsName == null ? '' : provider.firtsName) + ',' + (provider.lastName == null ? '' : provider.lastName);
            csv += '\r\n';
        });

        if (!window.navigator.userAgent.toUpperCase().indexOf("MSIE")) {
            var a = document.querySelector('#dataLink');
            a.href = 'data:attachment/csv,' + encodeURIComponent(csv);
            a.target = '_blank';
            a.download = 'users.csv';
            $link.attr("href", 'data:Application/octet-stream,' + encodeURIComponent(csv))[0].click();
        }
        else {
            //var oWin = window.open();
            //oWin.document.write(csv);
            //oWin.document.close();
            //oWin.document.execCommand('SaveAs', true, fileName + ".csv");
            //oWin.close();
            var blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
            saveAs(blob, "Users.csv");

        }


    };

    var search = function () {

        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($scope.radioType.type);
        arreglo.push($scope.selectDailyPlan);
        var model = { parameters: arreglo };
        apiServices.getData(model, "api/Users/QueryProviders")
        .then(function (data) {
            $scope.providers = [];
            for (var x = 0; x < data.length; x++) {
                $scope.providers.push(
                    new UserProviderFactory.copy(data[x].email, data[x].userid, data[x].firtsName, data[x].lastName)
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

    var mostrarBotonCvs = function () {
        $scope.hideCvsButton = false;
    };

    $scope.$watch('radioType.type', function (value) {
        if (value == USERS) {
            mostrarBotonCvs();
            $scope.hideFilterDailyPlan = false;
        } else {
            $scope.hideCvsButton = true;
            $scope.hideFilterDailyPlan = true;
            $scope.selectDailyPlan = "-1";
        }
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
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2)

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
