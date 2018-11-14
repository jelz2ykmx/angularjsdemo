"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztCompanyUsersUpdateCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

    $scope.statusdelete = true;
    var operation = 0;

    var init = function () {
        var state = $window.sessionStorage["companyuserstatus"];

        if (state == "1") {
            var companyuser = JSON.parse($window.sessionStorage["companyuser"]);
            $scope.nombre = companyuser.email;
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
        for (var x = 0; x < $rootScope.companyusers.length; x++) {
            if ($rootScope.companyusers[x].iduser != $scope.nombre) {
                temp.push($rootScope.companyusers[x]);
            }
        }

        $rootScope.companyusers = temp;
      
        localStorage.setItem('companyusers', JSON.stringify($rootScope.companyusers));

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
            for (var x = 0; x < $rootScope.companyusers.length; x++) {
                if ($rootScope.companyusers[x].iduser == $scope.nombre) {
                    flag = 1;
                    if ($rootScope.companyusers[x].idcompany != $rootScope.idcompany) {
                        flag = 2;
                    }
                    break;
                }
            }
        }

        if (flag == 0) {
            $("#dialog").dialog("open");

            var data = {
                idcompany: $rootScope.idcompany,
                iduser: $scope.nombre,
            }

            $rootScope.companyusers.push(data);

            localStorage.setItem('companyusers', JSON.stringify($rootScope.companyusers));

            stopTime = $interval(backTop, $rootScope.dialogTimer);

        }
        else if (flag == 1) {
            stopTime = $interval(backTop, $rootScope.dialogTimer);
        }
        else if (flag == 2) {
            $scope.errorMessage = "the user is registered with another company";
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
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
        $location.path('/form/mzt-company-users');
    }

    init();

    
});
    

app.directive('mztCompanyUsersUpdateForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-company-users-update/mzt-company-users-update-form.tpl.html',
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
        controller: 'mztCompanyUsersUpdateCtrl as datatables'
    }

});
