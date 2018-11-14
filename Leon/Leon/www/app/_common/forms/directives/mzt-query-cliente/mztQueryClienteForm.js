"use strict";


var app = angular.module('SmartAdmin.Forms')

app.factory('clientObject', function () {
    return {
        copy: function (id, name)
        {
            return angular.extend({ id: id, name: name }, this);
        }
    };

});

app.service('customerService', function ($http, $q, $window, $rootScope) {
    
    this.getCustomers = function () {
       
        var deferred = $q.defer();

        var searchModel = [];
        
        var tokenInfo = JSON.parse($window.sessionStorage["TokenInfo"]);

        var req = {
            method: 'POST',
            url: $rootScope.serviceBase + $rootScope.serviceModulo + 'api/Receptors/QueryReceptors',
            headers: {
                'Authorization': 'Bearer ' + tokenInfo.accessToken,
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: searchModel
        }

        $http(req)
        .then(function successCallback(response) {
            deferred.resolve(response.data);
        }
        , function errorCallback(response) {
            deferred.reject(response.error);
        });
        
        return deferred.promise;
    }
});

app.directive('mztQueryClienteForm', function () {

    return {
        restrict: 'E',
        scope: {
            factoryName : '@'
        },
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-query-cliente/mzt-query-cliente-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: function ($scope, $window, customerService) {
            $scope.SelectedItem = {};

            init();

            function init() {
                customerService.getCustomers()
                .then(function (data) {
                    $scope.clients = data;
                    if ($scope.clients.length > 0) {
                        $scope.existingClient = $scope.clients[0];
                    }
                }, function (error) {
                });
            }

            $scope.update = function () {
                var client = JSON.parse($scope.existingClient);
             
              
                var comprobanteObject = JSON.parse($window.sessionStorage["comprobanteObject"]);

                comprobanteObject.rfc = client.rfc;
                comprobanteObject.name = client.nombre;
                
                $window.sessionStorage["comprobanteObject"] = JSON.stringify(comprobanteObject);

                $window.location.href('#/form/mzt-transacciones-comprobantes');
               
            }
        }


    }

});




