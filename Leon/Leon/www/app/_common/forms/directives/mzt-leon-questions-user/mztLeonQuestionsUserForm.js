/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonQuestionsUserCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope, queryQuestionFactory, apiServices) {
    localStorage.removeItem('queryQuestionTempFactory');
    localStorage.removeItem('questionFactory');
    
    localStorage.removeItem('questionFactoryAllValues');

    $scope.checkDelete = false;

    if ($rootScope.phoneDevice >= 0) {
        
        //var value = $("#left-panel").css("left");
        //if (value != undefined && value == '0px') {
        //    $("#id-toggle-menu").click();
        //}

    }


    var searchManyData = function () {
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push($scope.textSearch.trim());
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Assessments/QueryUserQuestions')
        .then(function (data) {
            $scope.questionsList = [];
            for (var x = 0; x < data.length; x++) {
                $scope.questionsList.push(
                    new queryQuestionFactory.copy(data[x].id, data[x].email, data[x].firstName)
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
        $location.path('/form/mzt-leon-assessment-form');
        goQuestions();
    }

    //var goQuestions = function () {
    //    if ($rootScope.phoneDevice >= 0) {
    //        $location.path('/form/mzt-leon-phone-questions');
    //    }
    //    else {
    //        $location.path('/form/mzt-leon-questions');
    //    }

    //}

    var goQuestions = function () {
        //if ($rootScope.phoneDevice >= 0) {
        //    $location.path('/form/mzt-leon-phone-questions');
        //}
        //else {
        //    $location.path('/form/mzt-leon-questions');
        //}
        //if ($rootScope.phoneType == 2) {
        //    $location.path('/form/mzt-leon-phone-questions-iphone5');
        //} else if ($rootScope.phoneType == 5 || $rootScope.phoneType == 6) {
        //    $location.path('/form/mzt-leon-phone-questions-ipad');
        //    if ($rootScope.phoneType == 6) {
        //        $("#main-menu").removeAttr('style');
        //        $("html").css("background", "url('styles/mztimgs/fondo-negro-phone.jpg')");
        //        $("html").css("background-size", "100% 100%");
        //        $("html").css("background-attachment", "fixed");
        //    }
        //} else if ($rootScope.phoneType == 7) {
        //    $location.path('/form/mzt-leon-phone-questions-iphone5-safari');
        //} else if ($rootScope.phoneType == 8) {
        //    $location.path('/form/mzt-leon-phone-questions-iphone6-safari');
        //} else if ($rootScope.phoneType == 9) {
        //    $location.path('/form/mzt-leon-phone-questions-iphone6Plus-safari');
        //} else if ($rootScope.phoneType == 10) {
        //    $location.path('/form/mzt-leon-phone-questions-ipad2-safari');
        //}
        $location.path('/form/mzt-leon-assessment');
    }


    $scope.showclient = function () {
        $location.path('/form/mzt-leon-providers');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDOM("tp")
    .withDisplayLength($rootScope.rowsForTable)
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
     DTColumnBuilder.newColumn(3),
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
        var deleted = "";
        if ($scope.checkDelete) {
            deleted = "D";
        }
        arreglo.push(deleted);
        var model = { parameters: arreglo };
        //apiServices.getData(model, 'api/Questions/QueryUserQuestions')
        apiServices.getData(model, 'api/Assessments/QueryUserQuestions')
        .then(function (data) {
            $scope.questionsList = [];
            for (var x = 0; x < data.length; x++) {
                $scope.questionsList.push(
                    new queryQuestionFactory.copy(data[x].id, data[x].email, data[x].firstName, data[x].lastName, deleted, data[x].datelocal)
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

    $scope.clickDelete = function() {
        init();
    }


    init();

    var blockScroll = function () {
        // Bind:
        $('body').unbind('touchmove')
    };

    var unblockScroll = function () {
        $('body').bind('touchmove', function (e) { e.preventDefault() })
    };
    blockScroll();


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
