"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonProvidersAddupdateCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, RegisterUserFactory, apiServices, DTOptionsBuilder, DTColumnBuilder) {
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
    $scope.hideDailyPlan = true;

    var init = function () {
        state = $window.sessionStorage["stateuserprovideraFactory"];
        if (state == "1") {
            $scope.hideButtonChangePassword = false;
            $scope.hidePasswordFields = true;
            userProvider = JSON.parse($window.sessionStorage["userproviderFactory"]);
            getDataProvider(userProvider);
            $scope.hideTypeEmail = true;
            $scope.hideChangeProvider = true;
            $scope.hideButtonRole = false;
        } else {
            $scope.hidePasswordFields = false;
            $scope.hideButtonChangePassword = true;
            $scope.hideChangeProvider = true;
            $scope.hideButtonRole = true;
            $scope.hideButtonBackPassword = true;
            $scope.hideTypeEmail = false;
        }
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

    $scope.changeRadioType = function ( ) {
        $scope.dailyPlan = false;
        if (parseInt($scope.radioType.type) === 2) {
            $scope.hideDailyPlan = false;
        } else {
            $scope.hideDailyPlan = true;
        }
    };

    $scope.doChangeProvider = function () {
        if (!_.isUndefined($scope.radioTypeChange)) {
            var myEl = $element.find('#openQuestionChangeRole');
            myEl.click();
        }
    };

    $scope.doChangeRole = function () {
        var changeRoleFactory = {};
        var userProviderTemp = {};
        changeRoleFactory.userId = $scope.userId;
        if (_.isNull(changeRoleFactory.userId)) {
            userProviderTemp = JSON.parse($window.sessionStorage["userproviderFactory"]);
            changeRoleFactory.userId = userProviderTemp.userId;
        }
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
        $scope.hideChangeProvider  = true;
    };

    $scope.backChangePassword = function () {
        $scope.ocultaCampos = false;
        $scope.hidePasswordFields = true;
    };

    var getDataProvider = function (userProvider) {
        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push(userProvider.userId);
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Profiles/Queryprofile')
        .then(function (data) {
            $scope.userId = data.id;
            $scope.email = data.email;
            $scope.firstName = data.firstName;
            $scope.lastName = data.lastName;
            $scope.phone = data.phone;
            $scope.dailyPlan = data.dailyPlan;
            if (data.role == "User") {
                $scope.radioType.type = 2;
                $scope.hideDailyPlan = false;
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
        if ($scope.nombre.trim().length > 0 && $scope.nombre.trim().length <= 30) {
            var myEl = $element.find('#openQuestion');
            myEl.click();
        }
    }

    $scope.save = function () {
        if (state == "1") { //UPDATE
            if ($scope.email != "" && $scope.password != "" && $scope.passwordConfirm != "" && $scope.firstName != "" && $scope.lastName != "") {
                //if (!_.isEmpty($scope.locationList)) {
                    $scope.messageQuestion = "Are you sure of save it?";
                    var myEl = $element.find('#openQuestion');
                    myEl.click();
                //}
            }
        } else {
            if ($scope.email != "" && $scope.password != "" && $scope.passwordConfirm != "" && $scope.firstName != "" && $scope.lastName != "") {
                if ($scope.password.length >= 10 && $scope.passwordConfirm.length >= 10) {
                    if ($scope.password == $scope.passwordConfirm) {
                        //if (!_.isEmpty($scope.locationList)) {
                            //var matches = $scope.password.match(/^((?=.*\d)(?=.*[a-z])(?=.*?[?!@#$%\^&*\(\)\-_+=;:'""\/\[\]{},.<>|`])).{8,}$/);
                            //var matches = $scope.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*=?_{}/-])[A-Za-z\d$@$!%*=?_{}/-]{8,}$/);
                            //if (matches != null) {
                            $scope.messageQuestion = "Are you sure of save it?";
                            var myEl = $element.find('#openQuestion');
                            myEl.click();
                            //}
                        //}
                    }
                }
            }
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
        ChangePasswordFactory.userId = userProvider.userId;
        ChangePasswordFactory.OldPassword = "";
        ChangePasswordFactory.NewPassword = $scope.password;
        ChangePasswordFactory.email = $scope.email;
        $("#dialog").dialog("open");

        apiServices.getData(ChangePasswordFactory, 'api/Profiles/ChangePassword')
        .then(function (data) {
            stopTime = $interval(backTop, $rootScope.dialogTimer);
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
        RegisterUserFactory.dailyPlan = $scope.dailyPlan;
        RegisterUserFactory.locations = $scope.locationList;
        RegisterUserFactory.id = $scope.userId;

        $("#dialog").dialog("open");

        if (state == "0") {
            apiServices.getData(RegisterUserFactory, 'api/Profiles/AddUpdate')
            .then(function (data) {
                stopTime = $interval(backTop, $rootScope.dialogTimer);
            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });
        } else if (state == "1") {
            RegisterUserFactory.id = userProvider.userId;
            apiServices.getData(RegisterUserFactory, 'api/Profiles/Update')
            .then(function (data) {
                stopTime = $interval(backTop, $rootScope.dialogTimer);
            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });
        }

    }

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-leon-providers');
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
        if (state == "1") {
            $scope.hidePasswordFields = true;
        } else {
            $scope.hidePasswordFields = false;
        }
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
        if (state == "1") {
            $scope.hidePasswordFields = true;
        } else {
            $scope.hidePasswordFields = false;
        }
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


app.directive('mztLeonProvidersAddupdateForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-providers-addupdate/mzt-leon-providers-addupdate-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                container: '#messages',
                feedbackIcons: {
                    valid: 'fa fa-check',
                    invalid: 'fa fa-close ',
                    validating: 'fa fa-refresh'
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
                                message: 'Empty password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in password is 10'
                            },
                            identical: {
                                field: 'passwordConfirm',
                                message: 'The password and its confirm are not the same'
                            },
                            /*
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*=?_{}/-])[A-Za-z\d$@$!%*=?_{}/-]{8,}$/,
                                message: 'Password at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:'
                            }
                            */
                        }
                    },
                    passwordConfirm: {
                        validators: {
                            notEmpty: {
                                message: 'Empty password Confirm password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in password is 10'
                            },
                            identical: {
                                field: 'password',
                                message: 'The password and its confirm are not the same'
                            },
                            /*
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*=?_{}/-])[A-Za-z\d$@$!%*=?_{}/-]{8,}$/,
                                message: 'Retype at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:'
                            }
                            */
                        }
                    },

                }
            })
        },
        controller: 'mztLeonProvidersAddupdateCtrl as datatables'
    }

});
