"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztRewardsLionUpdateCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

    $scope.save = function () {
        $scope.messageQuestion = "Are you sure to save it?";
        var myEl = $element.find('#openQuestion');
        myEl.click();
    }

    var stopTime;

    $scope.savedata = function () {
        doSave();
    }

    var doSave = function () {
        $("#dialog").dialog("open");
        var reward = {
            id: uuid2.newguid(),
            nombre: $scope.nombre,
            cant : $scope.cant,
            level: $scope.level
        }

        $rootScope.rewards.push(reward);

        localStorage.setItem('rewards', JSON.stringify($rootScope.rewards));

        stopTime = $interval(backTop, $rootScope.dialogTimer);
    }

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-rewards-lion');
    }

    
});
    

app.directive('mztRewardsLionUpdateForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-rewards-lion-update/mzt-rewards-lion-update-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                container: '#messages',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    nombre: {
                        validators: {
                            notEmpty: {
                                message: 'Introduzca un valor nombre'
                            },
                            stringLength: {
                                max: 30,
                                message: 'Unicamente un maximo de 30 caracteres son permitidos en nombre'
                            }
                        }
                    },
                }
            })
        },
        controller: 'mztRewardsLionUpdateCtrl as datatables'
    }

});
