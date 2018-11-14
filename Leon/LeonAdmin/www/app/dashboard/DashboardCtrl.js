'use strict';
 
//var app = angular.module('SmartAdmin.Forms', ['datatables.fixedcolumns']);
var app = angular.module('SmartAdmin.Forms');

app.controller('DashboardCtrl' , function ($scope, DTOptionsBuilder, DTColumnBuilder, apiServices, assementsLast20Factory,
    totalAssementsFactory, assementsTopBottomFactory) {

    var totTables = 4;
    var count = 0;
   
    var init = function () {
        getAssements();
        getTotalAssements();
        getTop10Assements();
        getBottom10Assements();
    }

    var getAssements = function () {
        $("#dialog").dialog("open");

        var arreglo = [];
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/DashBoard/QueryLastAssessments')
        .then(function (data) {
            $scope.assessments = [];
            for (var x = 0; x < data.length; x++) {
                $scope.assessments.push(
                    new assementsLast20Factory.copy(data[x].dateLocal, data[x].Name, data[x].Age, data[x].Score, data[x].Percentile,
                    data[x].Health, data[x].Lifestyle, data[x].Biodata, data[x].Mobility, data[x].Fitness,
                    data[x].Assessor, data[x].Location)
                );
                
            }
            count++;
            if (count == totTables) {
                $("#dialog").dialog("close");
            }
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    var getTotalAssements = function () {

        $("#dialog").dialog("open");

        var arreglo = [];
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/DashBoard/QueryTotalAssessments')
        .then(function (data) {
            $scope.tassessments = [];
            for (var x = 0; x < data.length; x++) {
                $scope.tassessments.push(
                    new totalAssementsFactory.copy(data[x].Total, data[x].Score, data[x].Locations, data[x].Age)
                );

            }
            count++;
            if (count == totTables) {
                $("#dialog").dialog("close");
            }
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    var getTop10Assements = function () {

        $("#dialog").dialog("open");

        var arreglo = [];
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/DashBoard/QueryTop10Assessments')
        .then(function (data) {
            $scope.topassessments = [];
            for (var x = 0; x < data.length; x++) {
                $scope.topassessments.push(
                    new assementsTopBottomFactory.copy(data[x].Score, data[x].Age, data[x].Health, data[x].Lifestyle,
                    data[x].Biodata, data[x].Mobility, data[x].Fitness, data[x].Assessor)
                );
            }
            count++;
            if (count == totTables) {
                $("#dialog").dialog("close");
            }
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }
   
    var getBottom10Assements = function () {

        $("#dialog").dialog("open");

        var arreglo = [];
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/DashBoard/QueryBottom0Assessments')
        .then(function (data) {
            $scope.bopassessments = [];
            for (var x = 0; x < data.length; x++) {
                $scope.bopassessments.push(
                    new assementsTopBottomFactory.copy(data[x].Score, data[x].Age, data[x].Health, data[x].Lifestyle,
                    data[x].Biodata, data[x].Mobility, data[x].Fitness, data[x].Assessor)
                );
            }
            count++;
            if (count == totTables) {
                $("#dialog").dialog("close");
            }
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

        /*
       .withFixedColumns({
           leftColumns: 1
       })

*/

    this.standardOptions = DTOptionsBuilder.newOptions()
     .withOption('order', [0, 'desc'])
   .withDisplayLength(20)
   .withDOM("" + "t" + "")
   .withBootstrap();
     
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
     DTColumnBuilder.newColumn(3),
     DTColumnBuilder.newColumn(4),
     DTColumnBuilder.newColumn(5),
     DTColumnBuilder.newColumn(6),
     DTColumnBuilder.newColumn(7),
     DTColumnBuilder.newColumn(8),
     DTColumnBuilder.newColumn(9),
     DTColumnBuilder.newColumn(10),
     DTColumnBuilder.newColumn(11)
    ];
   

    //this.standardColumns[0].visible = false;

    this.standardOptionsTotal = DTOptionsBuilder.newOptions()
     .withOption('order', [0, 'desc'])
   .withDisplayLength(20)
   .withDOM("" + "t" + "")
   .withBootstrap();

    this.standardColumnsTotal = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
     DTColumnBuilder.newColumn(3)
    ];

    this.standardOptionsTop10 = DTOptionsBuilder.newOptions()
    .withOption('order', [0, 'desc'])
  .withDisplayLength(10)
  .withDOM("" + "t" + "")
  .withBootstrap();

    this.standardColumnsTop10 = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
     DTColumnBuilder.newColumn(3),
     DTColumnBuilder.newColumn(4),
     DTColumnBuilder.newColumn(5),
     DTColumnBuilder.newColumn(6),
     DTColumnBuilder.newColumn(7)
    ];

    this.standardOptionsBottom10 = DTOptionsBuilder.newOptions()
   .withOption('order', [0, 'asc'])
 .withDisplayLength(10)
 .withDOM("" + "t" + "")
 .withBootstrap();

    this.standardColumnsBottom10 = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
     DTColumnBuilder.newColumn(3),
     DTColumnBuilder.newColumn(4),
     DTColumnBuilder.newColumn(5),
     DTColumnBuilder.newColumn(6),
     DTColumnBuilder.newColumn(7)
    ];

    init();
});