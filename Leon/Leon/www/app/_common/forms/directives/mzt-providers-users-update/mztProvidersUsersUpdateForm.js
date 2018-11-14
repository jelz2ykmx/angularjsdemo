"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztProvidersUsersUpdateCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

    $scope.statusdelete = true;
    var operation = 0;

    var init = function () {
        var state = $window.sessionStorage["subscriberstatus"];

        if (state == "1") {
            var subscribers = JSON.parse($window.sessionStorage["subscriber"]);
            $scope.nombre = subscribers.email;
            $scope.statusdelete = false;
            $scope.status = true;
        }
    }

    $scope.save = function () {
        $scope.messageQuestion = "Are you sure to save it?";
        var myEl = $element.find('#openQuestion');
        myEl.click();
    }

    $scope.delete = function () {
        $scope.messageQuestion = "Are you sure to delete it?";
        var myEl = $element.find('#openQuestion');
        myEl.click();
        operation = 1;
    }

    var stopTime;

    $scope.savedata = function () {
        if (operation == 0) {
            doSave();
        }
        else {
            doDelete();
        }
    }

    var doDelete = function () {
        $("#dialog").dialog("open");

        var temp = [];
        for (var x = 0; x < $rootScope.subscribers.length; x++) {
            if ($rootScope.subscribers[x].idcompany != $rootScope.idcompany) {
                temp.push($rootScope.subscribers[x]);
            }
            else if ($rootScope.subscribers[x].iduser != $scope.nombre ) {
                temp.push($rootScope.subscribers[x]);
            }
        }

        $rootScope.subscribers = temp;
      
        localStorage.setItem('subscribers', JSON.stringify($rootScope.subscribers));

        stopTime = $interval(backTop, $rootScope.dialogTimer);

    }

    var doSave = function () {
        
        var flag = 3;

        for (var x = 0; x < $rootScope.users.length; x++) {
            if ($rootScope.users[x].email == $scope.nombre) {
                flag = 0;
            }
        }

        if (flag == 0) {
            for (var x = 0; x < $rootScope.subscribers.length; x++) {
                if ($rootScope.subscribers[x].idcompany == $rootScope.idcompany) {
                    if ($rootScope.subscribers[x].iduser == $scope.nombre) {
                        flag = 1;
                        break;
                    }
                }
            }
        }

        if (flag == 0) {
            $("#dialog").dialog("open");

            var data = {
                idcompany: $rootScope.idcompany,
                iduser: $scope.nombre,
            }

            $rootScope.subscribers.push(data);
       
            localStorage.setItem('subscribers', JSON.stringify($rootScope.subscribers));

            stopTime = $interval(backTop, $rootScope.dialogTimer);

        }
        else if (flag == 1) {
            stopTime = $interval(backTop, $rootScope.dialogTimer);
        }
        else if (flag == 3) {
            $scope.errorMessage = "the user not exist";
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        }
    }

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-providers-users');
    }

    init();

    
});
    

app.directive('mztProvidersUsersUpdateForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-providers-users-update/mzt-providers-users-update-form.tpl.html',
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
        controller: 'mztProvidersUsersUpdateCtrl as datatables'
    }

});
