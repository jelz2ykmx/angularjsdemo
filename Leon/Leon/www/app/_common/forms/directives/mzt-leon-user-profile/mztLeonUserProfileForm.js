/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonUserProfileCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope, UserProviderFactory, apiServices, RegisterUserFactory, $interval) {
    var _state = {};
    var _city = {};
    var _indexLocation = {};
    var state;
    var changePasswordFlag = false;
    var userProvider = {};
    $scope.locationList = [];
    $scope.stateList = [];
    $scope.cityList = [];
    $scope.ocultaCampos = false;
    $scope.ocultaLocationCampos = true;
    $scope.ocultaQueryState = true;
    $scope.ocultaQueryCity = true;

    var init = function () {
        var mostrarModal = $window.sessionStorage["mostrarModal"];
        //if (mostrarModal == "1") {
        //    var myEl = $element.find('#dialogModalUpdated');
        //    myEl.click();
        //}
        //if (state == "1") {
            $scope.hideButtonChangePassword = false;
            $scope.hidePasswordFields = true;
            getDataProvider();
            $scope.hideTypeEmail = true;
            $scope.hideChangeProvider = true;
            $scope.hideButtonRole = false;
            $scope.userId = $rootScope.userId.userId;
        //} else {
        //    $scope.hidePasswordFields = false;
        //    $scope.hideButtonChangePassword = true;
        //    $scope.hideChangeProvider = true;
        //    $scope.hideButtonRole = true;
        //    $scope.hideButtonBackPassword = true;
        //    $scope.hideTypeEmail = false;
        //}
    };

    $scope.doChangePassword = function () {
        if ($scope.password != "" && $scope.passwordConfirm != "") {
            if ($scope.password.length >= 10 && $scope.passwordConfirm.length >= 10) {
                if ($scope.password == $scope.passwordConfirm) {
                    $scope.messageQuestion = "Are you sure of save it?";
                    var myEl = $element.find('#openQuestion');
                    myEl.click();
                    changePasswordFlag = true;
                }
            }
        }
    };

    $scope.changePassword = function () {
        $scope.ocultaCampos = true;
        $scope.hidePasswordFields = false;
    };

    $scope.changeProvider = function () {
        $scope.ocultaCampos = true;
        $scope.hideChangeProvider = false;
    };

    $scope.doChangeProvider = function () {
        if (!_.isUndefined($scope.radioTypeChange)) {
            var myEl = $element.find('#openQuestionChangeRole');
            myEl.click();
        }
    };

    $scope.doChangeRole = function () {
        var changeRoleFactory = {};
        changeRoleFactory.userId = $scope.userId;
        changeRoleFactory.roleId = $scope.radioTypeChange;
        $("#dialog").dialog("open");

        apiServices.getData(changeRoleFactory, 'api/Profiles/ChangeRole')
        .then(function (data) {
            stopTime = $interval(backTop, $rootScope.dialogTimer);
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    $scope.backChangeProvider = function () {
        $scope.ocultaCampos = false;
        $scope.hideChangeProvider = true;
    };

    $scope.backChangePassword = function () {
        $scope.ocultaCampos = false;
        $scope.hidePasswordFields = true;
        $scope.password = "";
        $scope.passwordConfirm = "";
        $scope.changePasswordFlag = false;
        $("#dialog").dialog("close");
    };

    var getDataProvider = function () {
        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        var model = { parameters: arreglo };
        
        apiServices.getData(model, 'api/Profiles/Queryprofile')
        .then(function (data) {
            $scope.userId = data.id;
            $scope.email = data.email;
            $scope.firstName = data.firstName;
            $scope.lastName = data.lastName;
            $scope.phone = data.phone;
            if (data.role == "User") {
                $scope.radioType.type = 2;
            } else if (data.role == "Provider") {
                $scope.radioType.type = 1;
            } else if (data.role == "Administrador") {
                $scope.radioType.type = 0;
            }
            $scope.locationList = data.locations;
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };

    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }

    $scope.radioType = {
        type: '1'
    };

    $scope.save = function () {
        if ($scope.firstName != "" && $scope.lastName != "") {
            //if (!_.isEmpty($scope.locationList)) {
                $scope.messageQuestion = "Are you sure of save it?";
                var myEl = $element.find('#openQuestion');
                myEl.click();
            //}
        }
    }


    var stopTime;

    $scope.savedata = function () {
        if (changePasswordFlag) {
            changePassword();
        } else {
            doSave();
        }
    };

    var changePassword = function () {
        var ChangePasswordFactory = {};
        ChangePasswordFactory.userId = $scope.userId;
        ChangePasswordFactory.OldPassword = "";
        ChangePasswordFactory.NewPassword = $scope.password;
        ChangePasswordFactory.email = $scope.email;
        $("#dialog").dialog("open");

        apiServices.getData(ChangePasswordFactory, 'api/Profiles/ChangePassword')
        .then(function (data) {
            changePasswordFlag = false;
            $scope.backChangePassword();
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    };

    var doSave = function () {
        RegisterUserFactory.email = $scope.email;
        RegisterUserFactory.password = $scope.password;
        RegisterUserFactory.role = $scope.radioType.type;
        RegisterUserFactory.phone = $scope.phone;
        RegisterUserFactory.firstName = $scope.firstName;
        RegisterUserFactory.lastName = $scope.lastName;
        RegisterUserFactory.locations = $scope.locationList;
        RegisterUserFactory.id = $scope.userId;

        $("#dialog").dialog("open");
            RegisterUserFactory.id = $scope.userId;
            apiServices.getData(RegisterUserFactory, 'api/Profiles/Update')
            .then(function (data) {
                $element.find('#dialogModalUpdated').modal();
                $window.sessionStorage["mostrarModal"] = "1";
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

        $location.path('/form/mzt-leon-user-profile');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    //this.standardColumns = [
    // DTColumnBuilder.newColumn(0),
    // DTColumnBuilder.newColumn(1),
    // DTColumnBuilder.newColumn(2),
    //];

    $scope.addLocation = function () {
        if (!_.isEmpty(_city)) {
            $scope.locationList.push({
                city: _city
            });
            $scope.backAddLocation()
        }
    };

    $scope.showAddLocation = function () {
        $scope.ocultaCampos = true;
        $scope.ocultaLocationCampos = true;
        $scope.ocultaQueryCity = false;
        $scope.hidePasswordFields = true;
        $scope.state = "";
        $scope.city = "";
        $scope.shortCountry = "";
        $scope.shortState = "";
        _state = {};
        _city = {};
    };

    $scope.backAddLocation = function () {
        $scope.ocultaCampos = false;
        $scope.ocultaLocationCampos = true;
        $scope.hidePasswordFields = true;
    };

    $scope.queryStates = function () {
        $scope.ocultaQueryState = false;
        $scope.ocultaCampos = true;
        $scope.ocultaLocationCampos = true;
    };

    $scope.queryCities = function () {
        $scope.ocultaCampos = true;
        $scope.ocultaLocationCampos = true;
        $scope.ocultaQueryCity = false;
    };

    $scope.backQueryState = function () {
        $scope.ocultaCampos = true;
        $scope.ocultaLocationCampos = false;
        $scope.ocultaQueryState = true;
    };

    $scope.backQueryCity = function () {
        $scope.ocultaCampos = false;
        $scope.ocultaLocationCampos = true;
        $scope.ocultaQueryCity = true;
            $scope.hidePasswordFields = true;
    };

    $scope.clickSearchState = function () {
        if ($scope.textSearchState.trim().length >= 3) {
            $("#dialog").dialog("open");
            var arreglo = [];
            arreglo.push($scope.textSearchState);
            var model = { parameters: arreglo };
            apiServices.getData(model, 'api/State/QueryStates')
            .then(function (data) {
                $scope.stateList = data;
                $("#dialog").dialog("close");
            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });
        }
    };

    $scope.clickSearchCity = function () {
        if ($scope.textSearchCity.trim().length >= 3) {
            $("#dialog").dialog("open");
            var arreglo = [];
            arreglo.push($scope.textSearchCity);
            var model = { parameters: arreglo };
            apiServices.getData(model, 'api/State/QueryCity')
            .then(function (data) {
                $scope.cityList = data;
                $("#dialog").dialog("close");
            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });
        }
    };

    $scope.goState = function (state) {
        _state = state;
        $scope.state = state.name;
        $scope.backQueryState();
    };

    $scope.goCity = function (city) {
        if (!_.isEmpty(city)) {
            $scope.locationList.push(
                {
                    id: 0,
                    cityId: city.id,
                    name: city.name,
                    zipCode: city.zipCode,
                    shortState: city.shortState,
                    shortCountry: city.shortCountry,
                    status: true
                }
            );
            $scope.backAddLocation();
        }
        $scope.ocultaCampos = false;
        $scope.ocultaQueryCity = true;
    };

    $scope.showRemoveLocation = function (location, index) {
        _indexLocation = index;
        $element.find("#removeLocation").modal();
    };

    $scope.removeLocation = function () {
        //$scope.locationList.splice(_indexLocation, 1);
        $scope.locationList[_indexLocation].status = false;
        $element.find("#removeLocation").modal('hide');
    };


    init();
});

app.directive('mztLeonUserProfileForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-user-profile/mzt-leon-user-profile-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                container: '#messages',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    firstName: {
                        validators: {
                            notEmpty: {
                                message: 'Empty First name is invalid'
                            },
                        }
                    },
                    lastName: {
                        validators: {
                            notEmpty: {
                                message: 'Empty last name is invalid'
                            },
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'Empty password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in password is 10'
                            },
                            identical: {
                                field: 'passwordConfirm',
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                    passwordConfirm: {
                        validators: {
                            notEmpty: {
                                message: 'Empty passwordConfirm password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in password is 10'
                            },
                            identical: {
                                field: 'password',
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },

                }
            })
        },
        controller: 'mztLeonUserProfileCtrl as datatables'
    }

});
