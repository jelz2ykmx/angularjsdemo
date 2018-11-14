'use strict';

angular.module('app.forms').controller('MztLeonValidicData', function ($scope, $window, $location, $rootScope, $element, apiServices, DTOptionsBuilder, DTColumnBuilder) {
    
    $scope.Measurements = [];
    /*
    var data = {
        id: 0,
        name: 'Imperial',
    }
    $scope.Measurements.push(data);
    */
    var data = {
        id: 1,
        name: 'Metric',
    }
    $scope.Measurements.push(data);
    
    $scope.selectedMeasurement = $scope.Measurements[0];

    $scope.datestart = new Date();

    $scope.options = {
        format: 'mm/dd/yyyy', // ISO formatted date
        onClose: function (e) {
            // do something when the picker closes   
        }
    }
   
    var unblockScroll = function () {
        // Bind:
        $('body').unbind('touchmove')
    };

    $(document).ready(function () {
        if ($('body').hasClass('mobile-detected')) {
            $("body").removeClass("hidden-menu");
        } else {
            $("body").addClass("hidden-menu");
        }
    });
  

    $scope.Go = function () {
        $scope.fitnesst = [];
        $scope.routines = [];
        $scope.sleeps = [];
        $scope.weights = [];

        $("#dialog").dialog("open");
        var arreglo = [];
        arreglo.push($scope.datestart.getFullYear());
        arreglo.push($scope.datestart.getMonth() + 1);
        arreglo.push($scope.datestart.getDate());
        var model = { parameters: arreglo };
        
        apiServices.getData(model, 'api/ValidicData/AllDataByDay')
        .then(function (data) {
  
            for (var x = 0; x < data.fitness.length; x++) {
                $scope.fitnesst.push(
                    {
                        email: data.fitness[x].email, timestamp: data.fitness[x].timestamp, device: data.fitness[x].device, 
                        activity: data.fitness[x].activity,
                        calories: data.fitness[x].calories, distance: data.fitness[x].distance, duration: data.fitness[x].duration, 
                        intensity: data.fitness[x].intensity, starttime: data.fitness[x].starttime
                    }
                );
            }
            
            for (var x = 0; x < data.routine.length; x++) {
                $scope.routines.push(
                    {
                        email: data.routine[x].email, timestamp: data.routine[x].timestamp, device: data.routine[x].device,
                        caloriesburned: data.routine[x].caloriesburned, distance: data.routine[x].distance, elevation: data.routine[x].elevation,
                        floors: data.routine[x].floors, steps: data.routine[x].steps, water: data.routine[x].water
                    }
                );
            }
            
          
            for (var x = 0; x < data.sleep.length; x++) {
                $scope.sleeps.push(
                    {
                        email: data.sleep[x].email, timestamp: data.sleep[x].timestamp, device: data.sleep[x].device,
                        awake: data.sleep[x].awake, deep: data.sleep[x].deep, light: data.sleep[x].light,
                        rem: data.sleep[x].rem, timeswoken: data.sleep[x].timeswoken, totalsleep: data.sleep[x].totalsleep
                    }
                );
            }
            for (var x = 0; x < data.weight.length; x++) {
                $scope.weights.push(
                    {
                        email: data.weight[x].email, timestamp: data.weight[x].timestamp, device: data.weight[x].device,
                        bmi: data.weight[x].bmi, fatpercent: data.weight[x].fatpercent, free_mass: data.weight[x].free_mass,
                        height: data.weight[x].height, massweight: data.weight[x].massweight, weight: data.weight[x].weight
                    }
                );
            }
            goConversion();
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
  
    }

    var goConversion = function () {
        /*
        if ($scope.selectedMeasurement.id == 0) {
            _.each($scope.fitnesst, function (fitness, index) {
                fitness.distance = parseFloat(fitness.distance) * 0.00062137;
                fitness.duration = parseFloat(fitness.duration) / 60;
            });

            _.each($scope.routines, function (routine, index) {
                routine.distance = parseFloat(routine.distance) * 0.00062137;
                routine.elevation = parseFloat(routine.elevation) * 0.00062137;
            });
        }
        */
    }


    this.standardOptionsFitness = DTOptionsBuilder.newOptions()
     .withOption('order', [0, 'desc'])
   .withDOM("" + "t" + "")
   .withBootstrap();
   
    /*
    this.standardColumnsFitness = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
     DTColumnBuilder.newColumn(3),
     DTColumnBuilder.newColumn(4),
     DTColumnBuilder.newColumn(5),
     DTColumnBuilder.newColumn(6),
     DTColumnBuilder.newColumn(7),
     DTColumnBuilder.newColumn(8),
    ];

    */
    //this.standardColumns[0].visible = false;

    this.standardOptionsRoutine = DTOptionsBuilder.newOptions()
     .withOption('order', [0, 'desc'])
   .withDOM("" + "t" + "")
   .withBootstrap();
    /*
    this.standardColumnsRoutine = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
     DTColumnBuilder.newColumn(3),
     DTColumnBuilder.newColumn(4),
     DTColumnBuilder.newColumn(5),
     DTColumnBuilder.newColumn(6),
     DTColumnBuilder.newColumn(7)
    ];
    */
    this.standardOptionsSleep = DTOptionsBuilder.newOptions()
    .withOption('order', [0, 'desc'])
  .withDOM("" + "t" + "")
  .withBootstrap();
    /*
    this.standardColumnsSleep = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
     DTColumnBuilder.newColumn(3),
     DTColumnBuilder.newColumn(4),
     DTColumnBuilder.newColumn(5),
     DTColumnBuilder.newColumn(6),
     DTColumnBuilder.newColumn(7)
    ];
    */
    this.standardOptionsWeight = DTOptionsBuilder.newOptions()
   .withOption('order', [0, 'desc'])
 .withDOM("" + "t" + "")
 .withBootstrap();
    /*
    this.standardColumnsWeight = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
     DTColumnBuilder.newColumn(3),
     DTColumnBuilder.newColumn(4),
     DTColumnBuilder.newColumn(5),
     DTColumnBuilder.newColumn(6),
     DTColumnBuilder.newColumn(7)
    ];
    */
    unblockScroll();
  
});