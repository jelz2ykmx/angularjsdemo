/// js client

"use strict";

var app = angular.module('SmartAdmin.Forms')

//Codigo de cliente
app.factory('clientObject', function () {
    return {
        copy: function (id, name) {
            return angular.extend({ id: id, name: name }, this);
        }
    };

});

app.factory('comprobanteDetalleModel', function () {

    return {
        copy: function (cadena, descripcion, cantidad, cadenaRemision, descripcionRemision, cantidadRemision) {

            return angular.extend({
                cadena: cadena, descripcion: descripcion, cantidad: cantidad, cadenaRemision: cadenaRemision,
                descripcionRemision: descripcionRemision, cantidadRemision: cantidadRemision
            }, this);
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

app.service('comprobanteDetalleService', function ($http, $q, $window, $rootScope) {

    this.getComprobanteDetalles = function (serieFolio, folioFactura) {

        var deferred = $q.defer();

        var listModel = [];
        listModel.push(serieFolio);
        listModel.push(folioFactura);
        var searchModel = { parameters: listModel };


        var tokenInfo = JSON.parse($window.sessionStorage["TokenInfo"]);

        var req = {
            method: 'POST',
            url: $rootScope.serviceBase + $rootScope.serviceModulo + '/api/Comprobantes/QueryOne',
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
//Codigo de comprobante
app.factory('comprobanteObject', function () {

    var factory = {};
    factory.rfc = '';
    factory.name = '';
    factory.fromDate = '';
    factory.toDate = '';

    return factory;
});


// aqui agregar id propertie



app.factory('CapturaFacturacionModel', function () {

    return {
        copy: function (idRow, serie, folio, fecha, fechaString, subTotal, subTotalString, totalImpuestosTrasladados, totalImpuestosTrasladadosString,
                       remisiones, importe, importeString, fechaRemision, fechaRemisionString, cadenafactura) {

           return angular.extend({
                idRow: idRow, serie: serie, folio: folio, fecha: fecha, fechaString: fechaString, subTotal: subTotal, subTotalString: subTotalString,
                totalImpuestosTrasladados: totalImpuestosTrasladados, totalImpuestosTrasladadosString: totalImpuestosTrasladadosString,
                remisiones: remisiones, importe: importe, importeString: importeString, fechaRemision: fechaRemision, fechaRemisionString: fechaRemisionString,
                cadenafactura: cadenafactura
            }, this);
        }

    };

});





app.service('comprobantesService', function ($http, $q, $window, $rootScope) {

    this.getComprobantes = function (rfc, fromDate, toDate) {
        var deferred = $q.defer();
        
         
        var searchModel = JSON.stringify({ rfc: rfc, dateIni: fromDate.toDateString(), dateEnd: toDate.toDateString() });

        var tokenInfo = JSON.parse($window.sessionStorage["TokenInfo"]);

        var req = {
            method: 'POST',
            url: $rootScope.serviceBase + $rootScope.serviceModulo + 'api/Comprobantes/Query',
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

app.controller('mztComprobantesCtrl', function ($scope, $window, $element, comprobanteObject,
    comprobantesService, CapturaFacturacionModel, DTOptionsBuilder, DTColumnBuilder, customerService, clientObject, comprobanteDetalleModel, comprobanteDetalleService) {

    // somewhere in your controller
    $scope.options = {
        format: 'yyyy-mm-dd', // ISO formatted date
        onClose: function (e) {
            // do something when the picker closes   
        }
    }

    //Codigo de cliente
    $scope.SelectedItem = {};
    function cargaCliente() {

        customerService.getCustomers()
        .then(function (data) {

            $scope.clients = data;
            if ($scope.clients.length > 0) {
                $scope.existingClient = $scope.clients[0];
            }
        }, function (error) {
        });
    }

     $scope.linkQuery = '#/form/mzt-query-cliente';
     $scope.editableOptions = {
        mode: 'popup',
        disabled: false
    };


    var init = function () {
        if ($window.sessionStorage["comprobanteObject"] != undefined) {
            comprobanteObject = JSON.parse($window.sessionStorage["comprobanteObject"]);
            $scope.nameClient = comprobanteObject.name;
            $scope.dateInicio = comprobanteObject.fromDate;
            $scope.dateFin = comprobanteObject.toDate;
        }
        else {
            $scope.dateInicio = new Date();
            $scope.dateFin = new Date();
            comprobanteObject.fromDate = $scope.dateInicio;
            comprobanteObject.toDate = $scope.dateFin;         
            $window.sessionStorage["comprobanteObject"] = JSON.stringify(comprobanteObject);
        }

        //Codigo de cliente
        if ($scope.clients == undefined || $scope.clients.length == 0) {
          
            cargaCliente();
            
        }


    }



    $scope.linkQueryClient = function () {
       SaveData();
    }


    $scope.clickSearch = function () {
        
        if (comprobanteObject.fromDate != undefined && comprobanteObject.toDate  != undefined) {
            comprobanteObject.fromDate = $scope.dateInicio;
            comprobanteObject.toDate = $scope.dateFin;

            if (comprobanteObject.rfc != "") {
                SaveData();
                comprobantesService.getComprobantes(comprobanteObject.rfc, comprobanteObject.fromDate, comprobanteObject.toDate)
                .then(function (data) {
                    var facturas = data;
                    var facturasList = [];           
                    var countId = 0;
                    if (facturas.length > 0) {
                        $scope.existingComprobante = facturas[0];
                        var RemisionesModel = {};
                        var x = 0;
                        var flagContinue = true;
                        while (flagContinue) {
                            var RemisionesInternas = {};
                            var modelFaturacion = facturas[x];
                            var cadenaRemision = modelFaturacion.serieRemision + modelFaturacion.folioRemision;
                            var d = modelFaturacion.fecha.substring(8, 10);
                            var m = modelFaturacion.fecha.substring(5, 6) + 1;
                            var y = modelFaturacion.fecha.substring(0, 4);
                            var factFecha = d + "." + m + '.' + y;
                            var iva = "";

                            if (modelFaturacion.totalImpuestosTrasladados != 0) {
                                iva = modelFaturacion.totalImpuestosTrasladados.toFixed(2).formatMoney(2, ',', '.');
                            }


                            //aqui

                            var capturaFacturacion = new CapturaFacturacionModel.copy(
                                countId.toString(),
                                modelFaturacion.serie, modelFaturacion.folio,
                                modelFaturacion.fecha, factFecha,
                                modelFaturacion.subTotal, '$' + modelFaturacion.subTotal.toFixed(2).formatMoney(2, ',', '.'),
                                modelFaturacion.totalImpuestosTrasladados, iva,
                                '', '', '', '', '', modelFaturacion.serie + modelFaturacion.folio);

                            //aqui
                            countId++;
                            capturaFacturacion.remisiones = cadenaRemision;
                            if (RemisionesModel[cadenaRemision] == undefined) {
                                var d = modelFaturacion.fechaRemision.substring(8, 10);
                                var m = modelFaturacion.fechaRemision.substring(5, 6) + 1;
                                var y = modelFaturacion.fechaRemision.substring(0, 4);
                                var remiFecha = d + "." + m + '.' + y;
                                capturaFacturacion.importe = modelFaturacion.importe;
                                capturaFacturacion.importeString = '$' + modelFaturacion.importe.toFixed(2).formatMoney(2, ',', '.');
                                capturaFacturacion.fechaRemision = modelFaturacion.fechaRemision;
                                capturaFacturacion.fechaRemisionString = remiFecha;
                                RemisionesModel[cadenaRemision] = "";
                            }
                            RemisionesInternas[cadenaRemision] = "";
                            var remisionesAdiccionales = [];
                            var flagLoop = true;
                            do {
                                x++;
                                if (x < facturas.length) {
                                    var facturacion = facturas[x];
                                    if (modelFaturacion.serie != facturacion.serie || modelFaturacion.folio != facturacion.folio || modelFaturacion.fecha != facturacion.fecha) {
                                         flagLoop = false;
                                    }
                                    else {
                                        cadenaRemision = facturacion.serieRemision + facturacion.folioRemision;
                                        if (RemisionesModel[cadenaRemision] == undefined) {
                                            var d = facturacion.fechaRemision.substring(8, 10);
                                            var m = facturacion.fechaRemision.substring(5, 6) + 1;
                                            var y = facturacion.fechaRemision.substring(0, 4);
                                            var fechaRemi = d + "." + m + '.' + y;
                                            var remisonAdiccional = new CapturaFacturacionModel.copy(
                                                countId.toString(),
                                                modelFaturacion.serie, modelFaturacion.folio,
                                                modelFaturacion.fecha, "",
                                                modelFaturacion.subTotal, "",
                                                modelFaturacion.totalImpuestosTrasladados, "",
                                                cadenaRemision,
                                                facturacion.importe, facturacion.importe.toFixed(2).formatMoney(2, ',', '.'),
                                                facturacion.fechaRemision, fechaRemi, '');

                                                //aqui
                                                countId++;
                                                remisionesAdiccionales.push(remisonAdiccional);
                                                RemisionesModel[cadenaRemision] = "";
                                                RemisionesInternas[cadenaRemision] = "";
                                        }
                                        else if (RemisionesInternas[cadenaRemision] == undefined) {
                                            capturaFacturacion.remisiones += '\n' + cadenaRemision;
                                            RemisionesInternas[cadenaRemision] = "";
                                        }
                                    }
                                }
                                else
                                    flagContinue = false;
                            } while (flagContinue && flagLoop);
                            facturasList.push(capturaFacturacion);
                            for (var index in remisionesAdiccionales) {
                                facturasList.push(remisionesAdiccionales[index]);
                            }
                        }
                    }
                    $scope.comprobantes = facturasList;
                }, function (error) {
                });
            }
            else {
            alert('Necesita cliente');
            }
        }
        else {
            alert('Necesita fechas');
            
        }

    
    }
    var SaveData = function () {
        $window.sessionStorage["comprobanteObject"] = JSON.stringify(comprobanteObject);
    }
    String.prototype.formatMoney = function (decPlaces, thouSeparator, decSeparator) {
        var n = this,
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSeparator = decSeparator == undefined ? "." : decSeparator,
        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
         j = (j = i.length) > 3 ? j % 3 : 0;
        return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
    };
    init();
    //aqui
    
    $scope.go = function (comprobante) {

        comprobanteDetalleService.getComprobanteDetalles(comprobante.serie, comprobante.folio)
         .then(function (data) {
             
             var conceptosTemp = data;
             var detallesComprobantes = [];
             for (var index = 0; index < conceptosTemp.length; index++) {
              
                 var comprobanteDetalle = new comprobanteDetalleModel.copy(
                                                comprobante.serie + comprobante.folio,
                                                conceptosTemp[index].name, conceptosTemp[index].cant,
                                                conceptosTemp[index].serieRemision + conceptosTemp[index].folioRemision,
                                                conceptosTemp[index].nameExcel,
                                                conceptosTemp[index].cantExcel);


                 detallesComprobantes.push(comprobanteDetalle);
             };
             $scope.detalleComprobante = detallesComprobantes;
             var myEl = $element.find('#comprobanteDetalleModal');
             myEl.click();
     
         }, function (error) {
         });
        
        

       
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    //Add Bootstrap compatibility
    .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
    "t" +
    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
     .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0).notSortable(),
     DTColumnBuilder.newColumn(1).notSortable(),
     DTColumnBuilder.newColumn(2).notSortable(),
     DTColumnBuilder.newColumn(3).notSortable(),
     DTColumnBuilder.newColumn(4).notSortable(),
     DTColumnBuilder.newColumn(5).notSortable(),
     DTColumnBuilder.newColumn(6).notSortable(),
     DTColumnBuilder.newColumn(7).notSortable()
    ];
    this.standardColumns[0].visible = false;

    this.standardOptionsClientes = DTOptionsBuilder.newOptions()
    //Add Bootstrap compatibility
    .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
    "t" +
    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
     .withBootstrap();
    this.standardColumnsClientes = [
     DTColumnBuilder.newColumn(0).notSortable()
    ];

    //Comprobante detalle tabla
    this.detalleComprobanteOpciones = DTOptionsBuilder.newOptions()
    //Add Bootstrap compatibility
    .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
    "t" +
    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
     .withBootstrap();
    this.detalleComprobanteColumnas = [
     DTColumnBuilder.newColumn(0).notSortable(),
     DTColumnBuilder.newColumn(1).notSortable(),
     DTColumnBuilder.newColumn(2).notSortable(),
     DTColumnBuilder.newColumn(3).notSortable(),
     DTColumnBuilder.newColumn(4).notSortable(),
     DTColumnBuilder.newColumn(5).notSortable()   
    ];

    $scope.goCliente = function (client) {
     
        $scope.nameClient = client.nombre;

        //var comprobanteObject = JSON.parse($window.sessionStorage["comprobanteObject"]);

        comprobanteObject.rfc = client.rfc;
        
        comprobanteObject.name = client.nombre;

        $window.sessionStorage["comprobanteObject"] = JSON.stringify(comprobanteObject);

        
        var myEl = $element.find('#botonCerrarCliente');
        myEl.click();
        
       

    }
});

app.directive('mztTransaccionesComprobantesForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-transacciones-comprobantes/mzt-transacciones-comprobantes-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztComprobantesCtrl as datatables'
    }

});
