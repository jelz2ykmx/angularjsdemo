"use strict";

// production
var serviceBase = 'http://app.goleon.com';
var serviceModulo = "/LeonAPI/";

// sean testing
//var serviceBase = 'http://test.goleon.com';
//var serviceModulo = "/SeanTestingAPI/";

// testing
//var serviceBase = 'http://test.goleon.com';
//var serviceModulo = "/TestAPI/";


// android
//var serviceBase = 'http://169.254.80.80:1532/';
//var serviceModulo = "/";

//https https://localhost:44306/

//local
var serviceBase = 'http://localhost:1532/';
var serviceModulo = "/";

var app = angular.module('app.layout', ['ui.router'])

app.directive('innerHtmlBind', function () {
    return {
        restrict: 'A',
        scope: {
            inner_html: '=innerHtml'
        },
        link: function (scope, element, attrs) {
            scope.inner_html = element.html();
        }
    }
});

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

app.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'app/layout/layout.tpl.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/dashboard');
})
.config(['$httpProvider', function ($httpProvider) {

    $httpProvider.interceptors.push(function ($q, $rootScope, $window, $location, authData) {

        return {
            request: function (config) {
                if (authData.authenticationData == undefined || !authData.authenticationData.IsAuthenticated) {
                    $location.path('/login');
                } 
                return config;
            },
            requestError: function (rejection) {
                return $q.reject(rejection);
            },
            response: function (response) {
                if (response.status == "401") {
                    $location.path('/login');
                }
                return response;
            },
            responseError: function (rejection) {
                if (rejection.status == "401") {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        };
    });
}])
.run(function ($q, $rootScope, $window, $location, authData) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
        if (toState.url != '/login') {
            $rootScope.returnToState = toState.url;
        }
    });
});

/*
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });


    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (typeof (current) !== 'undefined') {
            $templateCache.remove(current.templateUrl);
        }
    });
});
*/

app.factory('authData', [function () {
    var authDataFactory = {};

    var _authentication = {
        IsAuthenticated: false,
        userName: ""
    };
    authDataFactory.authenticationData = _authentication;

    return authDataFactory;
}]);

app.service('AuthenticationService', ['$http', '$q', '$window', function ($http, $q, $window) {
    var tokenInfo;

    this.setTokenInfo = function (data) {
        tokenInfo = data;
        $window.sessionStorage["TokenInfo"] = JSON.stringify(tokenInfo);
    }

    this.getTokenInfo = function () {
        return tokenInfo;
    }

    this.removeToken = function () {
        tokenInfo = null;
        $window.sessionStorage["TokenInfo"] = null;
    }

    this.init = function () {
        if ($window.sessionStorage["TokenInfo"]) {
            tokenInfo = JSON.parse($window.sessionStorage["TokenInfo"]);
        }
    }

    this.setHeader = function (http) {
        delete http.defaults.headers.common['X-Requested-With'];
        if ((tokenInfo != undefined) && (tokenInfo.accessToken != undefined) && (tokenInfo.accessToken != null) && (tokenInfo.accessToken != "")) {
            http.defaults.headers.common['Authorization'] = 'Bearer ' + tokenInfo.accessToken;
            http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        }
    }

    this.validateRequest = function () {
        var url = serviceBase + 'api/home';
        var deferred = $q.defer();
        $http.get(url).then(function () {
            deferred.resolve(null);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    this.init();
}]);

app.service('LoginService', ['$http', '$q', 'AuthenticationService', 'authData',
    function ($http, $q, authenticationService, authData) {
        var userInfo;
        var loginServiceURL = serviceBase + serviceModulo + 'token';
        var deviceInfo = [];
        var deferred;
        this.login = function (userName, password) {
            deferred = $q.defer();
            var data = "grant_type=password&username=" + userName + "&password=" + password;
            $http.post(loginServiceURL, data, {
                headers:
                       { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function (response) {
                var o = response;
                userInfo = {
                    accessToken: response.access_token,
                    userName: response.userName
                };
                authenticationService.setTokenInfo(userInfo);
                authData.authenticationData.IsAuthenticated = true;
                authData.authenticationData.userName = response.userName;
                deferred.resolve(null);
            })
            .error(function (err, status) {
                authData.authenticationData.IsAuthenticated = false;
                authData.authenticationData.userName = "";
                deferred.resolve(err);
            });
            return deferred.promise;
        }

        this.logOut = function () {
            authenticationService.removeToken();
            authData.authenticationData.IsAuthenticated = false;
            authData.authenticationData.userName = "";
        }
    }
]);

app.service('apiServices', function ($http, $q, $window, $rootScope) {

    this.getData = function (model, apiPath) {
        var deferred = $q.defer();

        var tokenInfo = JSON.parse($window.sessionStorage["TokenInfo"]);

        var req = {
            method: 'POST',
            url: $rootScope.serviceBase + $rootScope.serviceModulo + apiPath,
            headers: {
                'Authorization': 'Bearer ' + tokenInfo.accessToken,
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: model
        }

        $http(req)
        .then(function successCallback(response) {
            deferred.resolve(response.data);
        }
        , function errorCallback(response) {
            
            if (response != null) {
                if (response.error != undefined) {
                    deferred.reject(response.error_description);
                }
                else if (response.data != null) {
                    deferred.reject(JSON.stringify(response.data));
                }
            }

            deferred.reject(response.error);
        });

        return deferred.promise;
    }
});


app.controller('loginController', ['$scope', 'LoginService', '$location', 'AuthenticationService', 'authData', '$rootScope', '$window', '$element', 'apiServices', '$cacheFactory', '$templateCache', 
function ($scope, loginService, $location, authenticationService, authData, $rootScope, $window, $element, apiServices, $cacheFactory, $templateCache) {

    
    authenticationService.removeToken();
    $window.sessionStorage.clear();
    authData.authenticationData.IsAuthenticated = false;
    authData.authenticationData.userName = "";

    $rootScope.serviceBase = serviceBase;
    $rootScope.serviceModulo = serviceModulo;
    $rootScope.rowsForTable = 100;
    $rootScope.dialogTimer = 500;

    $scope.loginData = {
        userName: "jelz2yk@hotmail.com",
        password: "Hotelera2015?"
    };

    $("#dialog").dialog({
        title: "Processing",
        width: 100,
        heigth: 30,
        resizable: false,
        draggable: false,
        modal: true,
        closeOnEscape: false,
        autoOpen: false,
        open: function (event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); }
    });


    $rootScope.adminRole = true;
    $rootScope.userRole = true;
    $rootScope.companyRole = true;
    $rootScope.providerRole = true;
    $rootScope.userId = "";
    $rootScope.phoneDevice = -1;
    $rootScope.emailid = "";
  
    $scope.hidelogin = true;
    $scope.hidemNewVersion = true;
    $rootScope.roothideweb = false;
    $rootScope.roothidemobile = false;//

    //mobile app
    $scope.mobileApp = false;

    //testing
    $scope.testApp = false;

    var versionapp = "";

    var checkWebMobile = function () {
        $rootScope.phoneDevice = $window.navigator.userAgent.toLowerCase().indexOf("android");
        if ($rootScope.phoneDevice >= 0) {
            $rootScope.phoneDevice = $window.navigator.userAgent.toLowerCase().indexOf("mobile");
        }
        if ($rootScope.phoneDevice < 0) {
            $rootScope.phoneDevice = $window.navigator.userAgent.toLowerCase().indexOf("iphone");
            if ($rootScope.phoneDevice < 0) {
                $rootScope.phoneDevice = $window.navigator.userAgent.toLowerCase().indexOf("ipad");
                if ($rootScope.phoneDevice < 0) {
                    $rootScope.phoneDevice = $window.navigator.userAgent.toLowerCase().indexOf("windows")
                    if ($rootScope.phoneDevice >= 0) {
                        $rootScope.phoneDevice = $window.navigator.userAgent.toLowerCase().indexOf("phone")
                    }
                }
            }
        }
        //$rootScope.phoneDevice = 0;
        
        if ($rootScope.phoneDevice >= 0) {
            $rootScope.roothideweb = true;

            if ($window.innerWidth >= 414 && 736 <= $window.innerHeight) {
                $rootScope.phoneType = 0 //iphone 6 plus and iphone 6s plus
            }
            else if ($window.innerWidth >= 375 && 667 <= $window.innerHeight) {
                $rootScope.phoneType = 1 //iphone 6 and 6s
            }
            else if ($window.innerWidth >= 320 && 568 <= $window.innerHeight) {
                $rootScope.phoneType = 2 //iphone 5 and SE
            }
            else if ($window.innerWidth >= 360 && 640 <= $window.innerHeight) {
                $rootScope.phoneType = 3 //samsung galaxy 5 and xpiria z5
            }
            else if ($window.innerWidth >= 320 && 640 <= $window.innerHeight) {
                $rootScope.phoneType = 4 //samsung galaxy 3/4 
            }

        }
        else {
            $rootScope.roothidemobile = true;
        }
       
        
    }

    checkWebMobile();

   
    var checkversion = function () {
        if (!$scope.mobileApp) {
            var version = null;
            if ($scope.testApp ==  false) {
                version = localStorage.getItem("versionAdminleonapp");
            }
            else {
                version = localStorage.getItem("versiontestleonapp");
            }
            if (version == null || version != versionapp) {
                $scope.hidelogin = true;
                $scope.UpdateVersion();
                //$scope.hidemNewVersion = false;
                $("#dialog").dialog("close");
                return false;
            }
        }
        return true;
    }

    $scope.UpdateVersion = function () {
        if ($scope.testApp ==  false) {
            localStorage.setItem("versionAdminleonapp", versionapp);
      
        }
        else {
            localStorage.setItem("versiontestleonapp", versionapp);
        }
        var userinfo = {
            userName: $scope.loginData.userName,
            password: $scope.loginData.password
        }
           
        localStorage.setItem("uTokenInfo", $window.sessionStorage["TokenInfo"]);
      
        $templateCache.removeAll();
        $templateCache.destroy();
        $window.location.reload(true);
    
    }

   
    $scope.login = function () {
        $("#dialog").dialog("open");
        
        $rootScope.emailid = $scope.loginData.userName;

       
        loginService.login($scope.loginData.userName, $scope.loginData.password, $element)
        .then(function (response) {
            if (response != null && response.error != undefined) {
                $("#dialog").dialog("close");
                if (response.error_description != undefined) {
                    $scope.errorMessage = response.error_description;
                    var myEl = $element.find('#errorMessage');
                    myEl.click();

                }
                else if (response.message != undefined) {
                    $("#dialog").dialog("close");
                    $scope.errorMessage = response.error_description;
                    var myEl = $element.find('#errorMessage');
                    myEl.click();
                }
            }
            else if (authData.authenticationData.IsAuthenticated == true) {
                userInfoFromServer($scope.loginData.userName);
            }
            else {
                $("#dialog").dialog("close");
            }
        }, function (error) {
            $("#dialog").dialog("close");
            
        });
        
    }

    var userInfoFromServer = function (userName) {
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push(userName);
        var model = { parameters: arreglo };

        apiServices.getData(model, 'api/Users/QueryAdminVersion')
        .then(function (data) {
            versionapp = data[0].role;
            if (checkversion()) {
                
                if ($rootScope.phoneDevice < 0) {
                    localStorage.removeItem("uTokenInfo");
                }

                $rootScope.adminRole = false;
                if ($rootScope.adminRole == false) {
                    apiServices.getData(model, 'api/Account/UserId')
                    .then(function (data) {
                        $rootScope.userId = JSON.stringify(data);
                        $rootScope.userId = JSON.parse($rootScope.userId);
                        $("#dialog").dialog("close");

                        if ($rootScope.phoneDevice >= 0) {
                            localStorage.setItem("uTokenInfo", $window.sessionStorage["TokenInfo"]);
                        }

                        if ($scope.mobileApp &&
                            ($rootScope.returnToState == "/form/mzt-leon-questions" ||
                            $rootScope.returnToState == "/form/mzt-leon-phone-questions")) {
                            var urlTemporal = $rootScope.returnToState;
                            $rootScope.returnToState = undefined;

                            var tempFactory = localStorage.getItem("queryQuestionTempFactory");

                            var pageTemp = null;
                            if (tempFactory != null) {
                                var queryQuestionTempFactory = JSON.parse(tempFactory);
                                pageTemp = queryQuestionTempFactory.pageQ;
                            }


                            if (pageTemp != null && pageTemp != -1) {
                                $location.path(urlTemporal);
                            }
                            else {
                                localStorage.removeItem('queryQuestionTempFactory');
                                localStorage.removeItem('questionFactory');

                                $location.path('/dashboard');
                            }


                        } else {
                            localStorage.removeItem('queryQuestionTempFactory');
                            localStorage.removeItem('questionFactory');

                            $location.path('/dashboard');
                        }

                    }, function (error) {
                        $("#dialog").dialog("close");
                        $scope.hidelogin = false;
                    });
                }
                else {
                    $("#dialog").dialog("close");
                    $scope.errorMessage = "You do not have Administrador rights";
                    var myEl = $element.find('#idErrorMessage');
                    myEl.click();
                }
            }


        }, function (error) {
            $("#dialog").dialog("close");
            $scope.hidelogin = false;
        });


    }

    var getUserInfo = function () {
        var userinfo = localStorage.getItem("uTokenInfo");
        if (userinfo != null) {
            $window.sessionStorage["TokenInfo"] = userinfo;
            userinfo = JSON.parse(userinfo);
            authData.authenticationData.userName = userinfo.userName;
            authData.authenticationData.IsAuthenticated = true;

            userInfoFromServer(authData.authenticationData.userName);
        }
        else {
            $scope.hidelogin = false;
        }
    }
 
    getUserInfo();

}]);


app.controller('headerAppController', function ($rootScope, $element) {
   
    var init = function () {
        if ($rootScope.phoneDevice >= 0) {
            var myEl = $element.find('#idfullscreen');
            
        
            myEl.click();
           // alert(myEl);
        }
    }


    //init();

});


app.controller('nextController', ['$scope', 'AuthenticationService', function ($scope, authenticationService) {
    authenticationService.validateRequest();
}]);

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|ms-appx):/);
}]);
