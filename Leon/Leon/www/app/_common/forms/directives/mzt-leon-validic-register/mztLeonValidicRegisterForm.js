/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonValidicRegisterCtrl', function ($scope, $q, $http, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope, validicAppsFactory, apiServices) {
   
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

    $scope.gosync = function (app) {
        if (app.mobile) {
            healthKit(1);
        }
        else {
            localStorage.setItem("validic", 1);
            window.location = app.syncUrl;
        }
    }

    $scope.gounsync = function (app) {
        if (app.mobile) {
            healthKit(0);
        }
        else {
            //window.location.href = app.unsyncUrl;
            validUnsync(app.unsyncUrl)
            .then(function (data) {
                init();
            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });
        }
    }

    var healthKit = function (sync) {
        if (sync) {
            healthProvision(sync);
        }
        else 
        {
            healtRefresh(sync);
        }
    }

    var healthProvision = function (sync) {
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Validic/ValidicProvision')
        .then(function (data) {

            ValidicMobile.Session.setSessionListener(logSuccess, logFail);
            ValidicMobile.Session.startSession(data.validicId, data.idUser, data.validicToken);
          
            var getSetRoutine = function (object) {
                var sampleTypes = object.sampleTypes;
                sampleTypes.push(ValidicMobile.HealthKit.SampleType.HKQuantityTypeIdentifierStepCount);
                ValidicMobile.HealthKit.setSubscriptions(sampleTypes);
                /*
                var sampleTypes = object.sampleTypes;
                sampleTypes.push(ValidicMobile.HealthKit.SampleType.HKQuantityTypeIdentifierStepCount);
                ValidicMobile.HealthKit.setSubscriptions(sampleTypes, function () {
                    ValidicMobile.HealthKit.getSubscriptions(function (object) {
                        alert("GetSubscriptions success" + JSON.stringify(object))
                    });
                });
                */
            };
            ValidicMobile.HealthKit.getSampleTypesForSubscriptionSet(ValidicMobile.HealthKit.SubscriptionSet.ROUTINE, getSetRoutine);
            
            /*
            ValidicMobile.HealthKit.getSampleTypesForSubscriptionSet(ValidicMobile.HealthKit.SubscriptionSet.DIABETES, getSetSuccess);
            ValidicMobile.HealthKit.getSampleTypesForSubscriptionSet(ValidicMobile.HealthKit.SubscriptionSet.WEIGHT, getSetSuccess);
            ValidicMobile.HealthKit.getSampleTypesForSubscriptionSet(ValidicMobile.HealthKit.SubscriptionSet.FITNESS, getSetSuccess);
            ValidicMobile.HealthKit.getSampleTypesForSubscriptionSet(ValidicMobile.HealthKit.SubscriptionSet.SLEEP, getSetSuccess);
            ValidicMobile.HealthKit.getSampleTypesForSubscriptionSet(ValidicMobile.HealthKit.SubscriptionSet.NUTRITION, getSetSuccess);
            ValidicMobile.HealthKit.getSampleTypesForSubscriptionSet(ValidicMobile.HealthKit.SubscriptionSet.REPRODUCTIVEHEALTH, getSetSuccess);
            ValidicMobile.HealthKit.getSampleTypesForSubscriptionSet(ValidicMobile.HealthKit.SubscriptionSet.BLOODPRESSURE, getSetSuccess);
            */
            healtRefresh(sync);

            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    var healtRefresh = function (sync) {
        if (!sync) {
            ValidicMobile.HealthKit.setSubscriptions([]);
            ValidicMobile.Session.endSession();
        }
        localStorage.setItem("validicSyncHealthKit", sync);
        init();
    }

    var logSuccess = function (object) {
        console.log(object);
    };
    var logFail = function (object) {
        console.log(object)
    };
    
    var sucessHeathKit = false;
    var successHealthEvent = function (response) {
        sucessHeathKit = response.isAvailable;
        init();
    }
    
    var validUnsync = function (apiPath) {
        var deferred = $q.defer();

        var req = {
            method: 'GET',
            url: apiPath,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }

        $http(req)
        .then(function successCallback(response) {
            deferred.resolve(response.data);
        }
        , function errorCallback(response) {
            if (response != null && response.status != -1) {
                if (response.error != undefined) {
                    deferred.reject(response.error_description);
                }
                else if (response.data != null) {
                    deferred.reject(JSON.stringify(response.data));
                }
                else 
                {
                    deferred.reject(response.error);
                }
            }

            deferred.resolve(response.data);
        });

        return deferred.promise;
    }

    var init = function () {

        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Validic/ConnectDevices')
        .then(function (data) {
            $scope.apps = [];
            if ($rootScope.mobileApp) {
               
                if (sucessHeathKit) {
                    var syncMobile = localStorage.getItem("validicSyncHealthKit");

                    if (syncMobile == 1) {
                        $scope.apps.push(
                            new validicAppsFactory.copy("Apple HealthKit", "", "", "", 1, true)
                        );
                    }
                    else {
                        $scope.apps.push(
                            new validicAppsFactory.copy("Apple HealthKit", "", "", "", 0, true)
                        );
                    }
                }
            }
            for (var x = 0; x < data.length; x++) {
                
                $scope.apps.push(
                    new validicAppsFactory.copy(data[x].name, data[x].syncUrl + "&format_redirect=json&redirect_uri=" + $window.location.href,
                    data[x].unsyncUrl + "&format_redirect=json&redirect_uri=" + $window.location.href, data[x].logoUrl, data[x].synced, false)
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
   
    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2)

    ];

    if ($rootScope.mobileApp) {
        ValidicMobile.HealthKit.isHealthKitAvailable(successHealthEvent);
    }
    else {
        init();
    }
   
});

app.directive('mztLeonValidicRegisterForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-validic-register/mzt-leon-validic-register-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztLeonValidicRegisterCtrl as datatables'
    }

});
