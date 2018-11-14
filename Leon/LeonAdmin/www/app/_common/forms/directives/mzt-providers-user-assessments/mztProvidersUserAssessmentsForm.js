"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztProvidersUserAssessmentsCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {

    var init = function () {
        var subscriber = JSON.parse($window.sessionStorage["subscriber"]);
        $scope.nombre = subscriber.email;

        $scope.assessmenttemp = [];
        
        for (var x = 0; x < $rootScope.userassessments.length; x++) {
            if ($rootScope.userassessments[x].iduser == $scope.nombre) {
                var data = {
                    id: $rootScope.userassessments[x].id,
                    iduser: $rootScope.userassessments[x].nombre,
                    avarage: $rootScope.userassessments[x].avarage
                }
                $scope.assessmenttemp.push(data);
            }
        }
    }

    $scope.save = function () {
        var myEl = $element.find('#queryAssessments');
        myEl.click();
    }

    $scope.goAssessments = function (assessment) {
        
    
        var flag = true;
        for (var x = 0; x < $rootScope.userassessments.length; x++)
        {
            if ($rootScope.userassessments[x].iduser == $scope.nombre &&
                $rootScope.userassessments[x].id == assessment.id)
            {
                flag = false;
                break;
            }
        }

        if (flag) {
            var assessment = {
                idcompany: $rootScope.idcompany,
                iduser: $scope.nombre,
                id: assessment.id,
                nombre: assessment.nombre,
                days: assessment.days,
                points: assessment.points,
                htmlcontent: assessment.htmlcontent,
                avarage: 0
            }
            $rootScope.userassessments.push(assessment);
           
            localStorage.setItem('userassessments', JSON.stringify($rootScope.userassessments));
        }

        init();

        var myEl = $element.find('#botonCerrarAssessments');
        myEl.click();


    }

    $scope.go = function (assessment) {
        var temp;
        for (var x = 0; x < $rootScope.userassessments.length; x++) {
            if ($rootScope.userassessments[x].iduser == $scope.nombre &&
                $rootScope.userassessments[x].id == assessment.id) {
                temp = $rootScope.userassessments[x];
            }
        }
        

        $window.sessionStorage["assessment"] = JSON.stringify(temp);
        $window.sessionStorage["assessmentstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-providers-addupdate-assessments');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1)
    ];

    $scope.back = function () {
        $location.path('/form/mzt-providers-assessments');
    }

    init();
});

app.directive('mztProvidersUserAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-providers-user-assessments/mzt-providers-user-assessments-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztProvidersUserAssessmentsCtrl as datatables'
    }

});
