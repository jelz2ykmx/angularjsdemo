/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonQuestionsUserCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope, queryQuestionFactory, apiServices) {
    localStorage.removeItem('queryQuestionTempFactory');
    localStorage.removeItem('questionFactory');

    if ($rootScope.phoneDevice >= 0) {
        
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }

    }


    var searchManyData = function () {
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push($scope.textSearch.trim());
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Questions/QueryUserQuestions')
        .then(function (data) {
            $scope.questionsList = [];
            for (var x = 0; x < data.length; x++) {
                $scope.questionsList.push(
                    new queryQuestionFactory.copy(data[x].id, data[x].email, data[x].firstName, data[x].lastName)
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

    $scope.clickSearch = function () {
        if ($scope.textSearch != "" && $scope.textSearch.length > 2) {
            searchManyData();
        }
    }

    $scope.go = function (question) {
        $window.sessionStorage["question"] = JSON.stringify(question);
        $window.sessionStorage["statequestion"] = "1"; // Operacion update
        goQuestions();
    }

    $scope.save = function () {
        $window.sessionStorage["statequestion"] = "0"; // Operacion insert
        $location.path('/form/mzt-leon-questions');
        goQuestions();
    }

    var goQuestions = function () {
        if ($rootScope.phoneDevice >= 0) {
            $location.path('/form/mzt-leon-phone-questions');
        }
        else {
            $location.path('/form/mzt-leon-questions');
        }

    }


    $scope.showclient = function () {
        $location.path('/form/mzt-leon-providers');
    }


    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
    ];

    var init = function () {

        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push("");
        if (!$rootScope.adminRole) {
            arreglo.push("1");
        }
        else {
            arreglo.push("0");
        }
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Questions/QueryUserQuestions')
        .then(function (data) {
            $scope.questionsList = [];
            for (var x = 0; x < data.length; x++) {
                $scope.questionsList.push(
                    new queryQuestionFactory.copy(data[x].id, data[x].email, data[x].firstName, data[x].lastName)
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


    init();


});

app.directive('mztLeonQuestionsUserForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-questions-user/mzt-leon-questions-user-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                fields: {
                    search: {
                        validators: {
                            notEmpty: {
                                message: 'Empty not allowed'
                            },
                            stringLength: {
                                min: 3,
                                message: 'At less 3 characters are allowed'
                            }
                        }
                    },
                }
            })
        },
        controller: 'mztLeonQuestionsUserCtrl as datatables'
    }

});
