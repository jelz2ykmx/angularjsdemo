/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonValidicStepsCtrl', function ($scope, $q, $http, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope, validicAppsFactory, apiServices) {
   
    $scope.datestart = new Date();
    var dateTemp = $scope.datestart;
    var dateIni = dateTemp;
    var dateEnd = dateTemp;
    var count = 8;
    var associativeArray = {};

    $scope.options = {
        format: 'mm/dd/yyyy', // ISO formatted date
        onClose: function (e) {
            // do something when the picker closes   
        }
    }

    $(document).ready(function () {
        //if (!$("body").hasClass("hidden-menu")) {
        //    $("body").addClass("hidden-menu");
        //    $("body").removeClass("hidden-menu");
        //}
        //else {
        //    $("#left-panel").attr('style', 'background: black; left: -100%');
        //}
        if ($('body').hasClass('mobile-detected')) {
            $("body").removeClass("hidden-menu");
        } else {
            $("body").addClass("hidden-menu");
        }
    });

    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }

    $scope.Previous = function () {
        dateTemp.setDate(dateTemp.getDate() - 1);
        count--;
        UpdateDates();
    }

    $scope.Next = function () {
        dateTemp.setDate(dateTemp.getDate() + 1);
        count++;
        UpdateDates();
    }

    $scope.Go = function () {
        dateTemp = $scope.datestart;
        getSteps();
    }

    var UpdateDates = function () {
        $scope.DateString = (dateTemp.getMonth() + 1) + "/" + dateTemp.getDate() + "/" + dateTemp.getFullYear();
        $scope.steps = associativeArray[dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" + dateTemp.getDate()];

        if (count == 0 || count == 15) {
            getSteps();
        }
    }

    var getSteps = function () {
   
        dateIni = new Date(dateTemp.getFullYear(), dateTemp.getMonth(), dateTemp.getDate(), 0, 0, 0, 0);
        dateIni.setDate(dateIni.getDate() - 7);

        dateEnd = new Date(dateTemp.getFullYear(), dateTemp.getMonth(), dateTemp.getDate(), 0, 0, 0, 0);
        dateEnd.setDate(dateEnd.getDate() + 7);

        var dateAux = dateIni;
        
        while (dateAux <= dateEnd)
        {
            associativeArray[dateAux.getFullYear() + "-" + (dateAux.getMonth() + 1) + "-" + dateAux.getDate()] = 0;
            dateAux.setDate(dateAux.getDate() + 1);
        }
      
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push(dateTemp.getFullYear());
        arreglo.push(dateTemp.getMonth()+1);
        arreglo.push(dateTemp.getDate());
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/ValidicData/Steps')
        .then(function (data) {
            for (var x = 0; x < data.length; x++) {
                associativeArray[data[x].date] = data[x].steps;
            }
            $("#dialog").dialog("close");

            $scope.DateString = (dateTemp.getMonth() + 1) + "/" + dateTemp.getDate() + "/" + dateTemp.getFullYear();
            $scope.steps = associativeArray[dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" + dateTemp.getDate()];
      
            count = 8;

        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }
   
   
   
   

});

app.directive('mztLeonValidicStepsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-validic-steps/mzt-leon-validic-steps-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztLeonValidicStepsCtrl as datatables'
    }

});
