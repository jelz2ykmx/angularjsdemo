"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonProvidersChangePasswordCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, ChangePasswordFactory, UserProviderFactory, apiServices) {
    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }


    var init = function () {

        var state = $window.sessionStorage["stateuserprovideraFactory"];

        if (state == "1") {
            UserProviderFactory = JSON.parse($window.sessionStorage["userproviderFactory"]);
            $scope.email = UserProviderFactory.email;
        }
    }

    $scope.save = function () {
        if ($scope.email != "" && $scope.password != "" && $scope.passwordConfirm != "") {
            if ($scope.password.length >= 10 && $scope.passwordConfirm.length >= 10) {
       
                if ($scope.password == $scope.passwordConfirm) {

                    //var matches = $scope.password.match(/^(([A-Z][a-zA-Z\d])(?=.*?[?!@#$%\^&*\(\)\-_+=;:'""\/\[\]{},.<>|`])).{8,}$/);
                    //var matches = $scope.password.match((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/));
                    
                    
                    //var matches = $scope.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)?(?=.*[$@$!%*=?_{}/-])?[A-Za-z\d$@$!%*=?_{}/-]{8,}$/);
                    //if (matches != null) {
                       $scope.messageQuestion = "Are you sure to save it?";
                       var myEl = $element.find('#openQuestion');
                       myEl.click();
                    //}
                 }
            }
        }
    }

  
    var stopTime;

    $scope.savedata = function () {
        doSave();
    }

    var doSave = function () {
        ChangePasswordFactory.userId = UserProviderFactory.userId;
        ChangePasswordFactory.OldPassword = "";
        ChangePasswordFactory.NewPassword = $scope.password;
        $("#dialog").dialog("open");

        apiServices.getData(ChangePasswordFactory, 'api/Account/ChangeUserPassword')
        .then(function (data) {
            stopTime = $interval(backTop, $rootScope.dialogTimer);
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-leon-providers');
    }

    init();
});


app.directive('mztLeonProvidersChangePasswordForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-providers-change-password/mzt-leon-providers-change-password-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                container: '#messages',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'Empty email is invalid'
                            },
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'Empty new password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in new password is 10'
                            },
                            identical: {
                                field: 'passwordConfirm',
                                message: 'The password and its retype are not the same'
                            },
                            /*
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)?(?=.*[$@$!%*=?_{}/-])?[A-Za-z\d$@$!%*=?_{}/-]{8,}$/,
                                message: 'Password at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:'
                            }
                           */
                        }
                    },
                    passwordConfirm: {
                        validators: {
                            notEmpty: {
                                message: 'Empty retype password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in retype password is 10'
                            },
                            identical: {
                                field: 'password',
                                message: 'The password and its retype are not the same'
                            },
                            /*
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)?(?=.*[$@$!%*=?_{}/-])?[A-Za-z\d$@$!%*=?_{}/-]{8,}$/,
                                message: 'Retype at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:'
                            }
                            */
                        }
                    },

                }
            })
        },
        controller: 'mztLeonProvidersChangePasswordCtrl as datatables'
    }

});
