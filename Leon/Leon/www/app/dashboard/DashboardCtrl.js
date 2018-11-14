'use strict';

angular.module('app.dashboard').controller('DashboardCtrl', function ($scope, $window, $location, $rootScope, apiServices, DTOptionsBuilder, DTColumnBuilder,
    assementsLast20Factory, totalAssementsFactory, assementsTopBottomFactory, queryQuestionFactory) {

    var unblockScroll = function () {
        // Bind:
        $('body').unbind('touchmove')
    };


    //if ($rootScope.phoneDevice >= 0) {
    //    var value = $("#left-panel").css("left");
    //    if (value != undefined && value == '0px') {
    //        $("#toggle-menu").click();
    //    }
    //}

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

    $scope.go = function (question) {
        $window.sessionStorage["question"] = JSON.stringify(question);
        $window.sessionStorage["statequestion"] = "1"; // Operacion update
        goQuestions();
    }

    $scope.save = function () {
        localStorage.removeItem('queryQuestionTempFactory');
        localStorage.removeItem('questionFactory');
        $window.sessionStorage["statequestion"] = "0"; // Operacion insert
        //$location.path('/form/mzt-leon-questions');
        goQuestions();
    }

    var goQuestions = function () {
        $location.path('/form/mzt-leon-assessment');

        /*
        if ($rootScope.phoneDevice >= 0) {
            $location.path('/form/mzt-leon-phone-questions');
        }
        else {
            $location.path('/form/mzt-leon-questions');
        }
        if ($rootScope.phoneType == 2) {
            $location.path('/form/mzt-leon-phone-questions-iphone5');
        } else if ($rootScope.phoneType == 5 || $rootScope.phoneType == 6) {
            $location.path('/form/mzt-leon-phone-questions-ipad');
            if ($rootScope.phoneType == 6) {
                $("#main-menu").removeAttr('style');
                $("html").css("background", "url('styles/mztimgs/fondo-negro-phone.jpg')");
                $("html").css("background-size", "100% 100%");
                $("html").css("background-attachment", "fixed");
            }
        } else if ($rootScope.phoneType == 7) {
            $location.path('/form/mzt-leon-phone-questions-iphone5-safari');
        } else if ($rootScope.phoneType == 8) {
            $location.path('/form/mzt-leon-phone-questions-iphone6-safari');
        } else if ($rootScope.phoneType == 9) {
            $location.path('/form/mzt-leon-phone-questions-iphone6Plus-safari');
        } else if ($rootScope.phoneType == 10) {
            $location.path('/form/mzt-leon-phone-questions-iphone6Plus-safari');
        }
        */

    }

   
    $scope.showclient = function () {
        $location.path('/form/mzt-leon-questions-user');
    }

    $scope.hidepoints = true;
    //if (!$rootScope.userRole) {

        var getPoints = function () {
            $("#dialog").dialog("open");
            
            var arreglo = [];
            arreglo.push($rootScope.userId.userId);
            var model = { parameters: arreglo };
            apiServices.getData(model, 'api/Assessments/IdFormByUser')
            .then(function (data) {
                if (data.userId != "") {
                    var question = new queryQuestionFactory.copy(data.userId, " ", " ", " ", " ", " ", " ");

                    localStorage.removeItem('queryQuestionTempFactory');
                    localStorage.removeItem('questionFactory');
                    localStorage.removeItem('questionFactoryAllValues');

                    $window.sessionStorage["question"] = JSON.stringify(question);
                    $window.sessionStorage["statequestion"] = "1"; // Operacion update
                    $window.sessionStorage["idformbyuser"] = "1"; // Operacion update

                    $("#dialog").dialog("close");

                    goQuestions();

                }
                else 
                {
                    $("#dialog").dialog("close");
                }
            
            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });

        }
        
        //getPoints();

    //}

   
    $("body").css("overflow", "auto");

    //admin

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
                    data[x].Assessor, data[x].city, data[x].idForm)
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
                    data[x].Biodata, data[x].Mobility, data[x].Fitness, data[x].Assessor, data[x].idForm)
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
                    data[x].Biodata, data[x].Mobility, data[x].Fitness, data[x].Assessor, data[x].idForm)
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

    $scope.goLastAssessments = function (assessment) {
        getOneAssessment(assessment.idForm);
    }

    $scope.goTopAssessments = function (topassessment) {
        getOneAssessment(topassessment.idForm);
    }

    $scope.goBottomAssessments = function (bopassessment) {
        getOneAssessment(bopassessment.idForm);
    }
   
    var getOneAssessment = function (idForm) {
        var question = new queryQuestionFactory.copy(idForm, " ", " ", " ", " ", " ", " ");
      
        localStorage.removeItem('queryQuestionTempFactory');
        localStorage.removeItem('questionFactory');
        localStorage.removeItem('questionFactoryAllValues');

        $window.sessionStorage["question"] = JSON.stringify(question);
        $window.sessionStorage["statequestion"] = "1"; // Operacion update
        goQuestions();
      
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

    if (!$rootScope.adminRole) {
       // init();
    }

    unblockScroll();
  
    $scope.$watch('adminRole', function () {
        if (!$rootScope.adminRole) {
            init();
        }
        else if (!$rootScope.userRole) {
            getPoints();
        }
    });
});