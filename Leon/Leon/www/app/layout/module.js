"use strict";

// production
//var serviceBase = 'https://app.goleon.com';
//var serviceModulo = "/LeonAPI/";

// sean testing
//var serviceBase = 'http://test.goleon.com';
//var serviceModulo = "/SeanTestingAPI/";

// testing
//var serviceBase = 'http://test.goleon.com';
//var serviceModulo = "/testapi/";

// testing
var serviceBase = 'https://test.goleon.com';
var serviceModulo = "/TestAPI/";

//android and safari
//var serviceBase = 'http://10.211.55.5:1532/';
//var serviceModulo = "/";

//android and safari Francisco
//var serviceBase = 'http://192.168.2.37:1532/';
//var serviceModulo = "/";

//android 
//var serviceBase = 'http://169.254.80.80:1532/';
//var serviceModulo = "/";

//https https://localhost:44306/

//local
var serviceBase = 'http://localhost:1532/';
var serviceModulo = "/";

//var magicservice = "/";
var magicservice = "/TestClient";
//var magicservice = "/leonclient";

var magicemail = undefined;
var magictoken = undefined;
if (emailMagicMobile != "") {
    magicemail = emailMagicMobile;
    magictoken = tokenMagicMobile;
}
var dialyquestions = undefined;
if (dialyquestionsRemainder != "") {
    dialyquestions = dialyquestionsRemainder;
}

var idFBUser = undefined;
//var idFBUserNum = undefined;

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
        

    //$urlRouterProvider.otherwise('/dashboard');

    $urlRouterProvider.otherwise(function ($injector, $location) {
        var path = $location.path(), normalized = path.toLowerCase();
        if (path == "") {
            $location.replace().path('/dashboard');
        }
        else if (path != normalized) {
            //instead of returning a new url string, I'll just change the $location.path directly so I don't have to worry about constructing a new url string and so a new state change is not triggered
            $location.replace().path(normalized);
        }

    });

  
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

    (function (d) {
        var js = d.createElement('script');
        js.async = true;
        js.defer = true;
        js.src = "https://apis.google.com/js/client:plusone.js?onload=startApp";
        d.getElementsByTagName('head')[0].appendChild(js);

        // validation to chance the css reference of login depending the mobile device.
        var phoneDevice = -1;
        var isSafari = false;
        var css = "";

        phoneDevice = window.navigator.userAgent.toLowerCase().indexOf("android");
        if (phoneDevice >= 0) {
            phoneDevice = window.navigator.userAgent.toLowerCase().indexOf("mobile");
        }
        if (phoneDevice < 0) {
            phoneDevice = window.navigator.userAgent.toLowerCase().indexOf("iphone");
            if (phoneDevice < 0) {
                phoneDevice = window.navigator.userAgent.toLowerCase().indexOf("ipad");
                if (phoneDevice < 0) {
                    phoneDevice = window.navigator.userAgent.toLowerCase().indexOf("windows")
                    if (phoneDevice >= 0) {
                        phoneDevice = window.navigator.userAgent.toLowerCase().indexOf("phone")
                    }
                }
            }
        }
        if (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/) && navigator.userAgent.toLowerCase().indexOf('safari') > 1) {
            isSafari = true;
        } else {
            isSafari = false;
        }
        //isSafari = false;
        //isSafari = true;

        $rootScope.isSafari = isSafari;
        if (phoneDevice >= 0) {
            if (isSafari) {
                /*
                js.name = 'viewport';
                js.content = "width=device-width,height=300,initial-scale=1.0, maximum-scale=1.0";
                d.getElementsByTagName('head')[0].appendChild(js);
                /*
                css = d.createElement('link');
                css.rel = "stylesheet";
                css.type = "text/css";
                css.href = "styles/css/goleon/go-leon-native-iphone-device-safari.css";
                d.getElementsByTagName('head')[0].appendChild(css);*/
            } else {
                /*
                css = d.createElement('link');
                css.rel = "stylesheet";
                css.type = "text/css";
                css.href = "styles/css/goleon/go-leon-native-iphone-device.css";
                d.getElementsByTagName('head')[0].appendChild(css);
                */
            }
        } else {
            /*
            css = d.createElement('link');
            css.rel = "stylesheet";
            css.type = "text/css";
            css.href = "styles/css/goleon/go-leon.css";
            d.getElementsByTagName('head')[0].appendChild(css);*/

        }
        
        // validation to chance the css reference of login depending the mobile device.

    }(document));
  
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
        if (toState.url != '/login') {
            $rootScope.returnToState = toState.url;
        }
        else {
            if (magicemail == undefined) {
                magicemail = $location.search().email;
                magictoken = $location.search().token;
            }
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
        this.login = function (userName, password, token, externallogin) {
            deferred = $q.defer();
            var data = "grant_type=password&username=" + userName + "&password=" + password;
            $http.post(loginServiceURL, data, {
                headers:
                       {
                           'Content-Type': 'application/x-www-form-urlencoded',
                           'magictoken': token,
                           'externallogin': externallogin
                       }
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
                'Content-Type': 'application/json; charset=utf-8',
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

    //hice nuevo metodo de apiservice para poder ejecutar los metodos anonimos de la api
    this.getDataAnonymous = function (model, apiPath) {
        var deferred = $q.defer();

        //var tokenInfo = JSON.parse($window.sessionStorage["TokenInfo"]);

        var req = {
            method: 'POST',
            url: $rootScope.serviceBase + $rootScope.serviceModulo + apiPath,
            headers: {
                //'Authorization': 'Bearer ' + tokenInfo.accessToken,
                'Content-Type': 'application/json; charset=utf-8',
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


app.controller('loginController', ['$scope', 'LoginService', '$location', 'AuthenticationService', 'authData', '$rootScope', '$window', '$element', 'apiServices',
    '$cacheFactory', '$templateCache', 
function ($scope, loginService, $location, authenticationService, authData, $rootScope, $window, $element,
    apiServices, $cacheFactory, $templateCache) {
    
    authenticationService.removeToken();
    $window.sessionStorage.clear();
    authData.authenticationData.IsAuthenticated = false;
    authData.authenticationData.userName = "";

    $rootScope.serviceBase = serviceBase;
    $rootScope.serviceModulo = serviceModulo;
    $rootScope.rowsForTable = 100;
    $rootScope.dialogTimer = 500;
    $rootScope.roleLeonAdmin = true;

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

    $scope.width = $window.innerWidth;
    $scope.height = $window.innerHeight

    //mobile app
    $rootScope.mobileApp = false;
    $rootScope.realMobileApp = false;

    //testing
    $scope.testApp = true;

    var versionapp = "";

    $scope.hideMagicLink = true;
    $scope.hideAssociatedEmail = true;
    
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

            if ($window.innerWidth >= 1024 && 1346 <= $window.innerHeight) {
                $rootScope.phoneType = 6 //IPAD PRO
            }
            else if ($window.innerWidth >= 768 && 1004 <= $window.innerHeight) {
                $rootScope.phoneType = 5 //IPAD 2
            }
            else if ($window.innerWidth >= 414 && 716 <= $window.innerHeight) {
                //$rootScope.phoneType = 0 //iphone 6 plus and iphone 6s plus
                $rootScope.phoneType = 9 //iphone 6plus and 6sPlus Safari
            }
            else if ($window.innerWidth >= 375 && 647 <= $window.innerHeight) {
                //$rootScope.phoneType = 1 //iphone 6 and 6s
                $rootScope.phoneType = 8 //iphone 6 and 6s
            }
            else if ($window.innerWidth >= 320 && 548 <= $window.innerHeight) {
                //$rootScope.phoneType = 2 //iphone 5 and SE
                $rootScope.phoneType = 7; //Iphone 5 Safari
            }
            else if ($window.innerWidth >= 360 && 640 <= $window.innerHeight) {
                $rootScope.phoneType = 3 //samsung galaxy 5 and xpiria z5
            }
            else if ($window.innerWidth >= 320 && 640 <= $window.innerHeight) {
                $rootScope.phoneType = 4 //samsung galaxy 3/4 
            }
            //Safari browsers IPADs IPHONEs
            checkSafari();
            if ($scope.isSafari) {
                if ($window.innerWidth == 320 && 460 == $window.innerHeight) {
                    $rootScope.phoneType = 7; //Iphone 5 Safari
                } else if ($window.innerWidth == 1024 && 1302 == $window.innerHeight) {
                    $rootScope.phoneType = 6 //IPAD PRO Safari
                } else if ($window.innerWidth == 375 && 559 == $window.innerHeight) {
                    $rootScope.phoneType = 8 //iphone 6 and 6s Safari
                } else if ($window.innerWidth == 414 && 628 == $window.innerHeight) {
                    $rootScope.phoneType = 9 //iphone 6plus and 6sPlus Safari
                } else if ($window.innerWidth == 768 && 960 == $window.innerHeight) {
                    $rootScope.phoneType = 5 //Ipad 2 Safari
                }
            }
        }
        else {
            $rootScope.roothidemobile = true;
        }

        if ($rootScope.phoneType == 2) {
            $("body").css("overflow", "hidden");
            $element.find("#email").css('margin-top', '50px');
            $("#logo-login").css("margin-top", "50px");
        } else {
            $("#logo-login").attr('src', 'styles/mztimgs/logo-letras-negras.png')
        }
        if ($rootScope.phoneType == 7) {
            $element.find("#email").css('margin-top', '45px');
            $("#logo-login").attr('src', 'styles/mztimgs/logo-letras-negras-iphone.png');
        } else if ($rootScope.phoneType == 8) {
            $("#logo-login").css('margin-top', '40px');
            $element.find("#email").css('margin-top', '70px');
            $("#logo-login").attr('src', 'styles/mztimgs/logo-letras-negras-iphone.png');
        }

    }

    //alert($window.innerWidth);
    //alert($window.innerHeight);

    var checkSafari = function () {
        if (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)) {
            $scope.isSafari = true;
        } else {
            $scope.isSafari = false;
            if (navigator.userAgent.indexOf('Mac') > 1) {
                $scope.isSafari = true;
            }
        }
        //$scope.isSafari = true;
    }
    checkWebMobile();

    $scope.phoneType = $rootScope.phoneType;


    var checkversion = function () {
        if (!$scope.mobileApp) {
            var version = null;
            if ($scope.testApp == false) {
                version = localStorage.getItem("versionleonapp");
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

    $scope.hideForgotPassword = true;
    $scope.forgotPassword = function () {
        $scope.hidelogin = true;
        $scope.hideGUID = true;

        $scope.emailForgotPassword = "";
        $scope.recoverForgotPassword = "";
        $scope.recoverForgotPasswordConfirm = "";
        $scope.recoverCode = "";
        $scope.hideForgotPassword = false;
    }

    $scope.backForgotPassword = function () {
        $scope.loginData.userName = "";
        $scope.loginData.password = "";

        $scope.hideMagicLink = true;
        $scope.hideForgotPassword = true;
        $scope.hideAssociatedEmail = true;
        $scope.hidelogin = false;
        localStorage.removeItem("idFBUser");
        idFBUser = undefined;
    }

    $scope.hideGUID = true;
    $scope.doForgotPassword = function () {
        if ($scope.emailForgotPassword.trim() != "") {
            var ChangePasswordFactory = {};
            ChangePasswordFactory.userId = "";
            ChangePasswordFactory.OldPassword = "";
            ChangePasswordFactory.NewPassword = "";
            ChangePasswordFactory.forgotPasswordOrFirstTime = 1;
            ChangePasswordFactory.email = $scope.emailForgotPassword;
            ChangePasswordFactory.mobileapp = $rootScope.mobileApp;
            if ($rootScope.mobileApp) {
                ChangePasswordFactory.magichost = serviceBase;
            }
            else {
                ChangePasswordFactory.magichost = $location.protocol() + '://' + $location.host() + magicservice;
                //ChangePasswordFactory.magichost = $location.protocol() + '://' + $location.host() + ":" + $location.port() + magicservice;
            }

            $("#dialog").dialog("open");

            apiServices.getDataAnonymous(ChangePasswordFactory, 'api/Profiles/GenerateGuid')
            .then(function (data) {
                //stopTime = $interval(backTop, $rootScope.dialogTimer);
                if (data) {
                    $scope.hideForgotPassword = true;
                    $scope.hideMagicLink = false;
                }
                $("#dialog").dialog("close");
            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });
        }
    }
    
    $scope.backRecover = function () {
        $scope.hideGUID = true;
        $scope.hidelogin = false;
    };
    
    var validPassword = function () {
        var valid = false;
        if ($scope.recoverCode.trim() != "") {
            if ($scope.recoverForgotPassword.trim() != "" && $scope.recoverForgotPasswordConfirm.trim() != "") {
                if ($scope.recoverForgotPassword.length >= 8 && $scope.recoverForgotPasswordConfirm.length >= 8) {
                    if ($scope.recoverForgotPassword == $scope.recoverForgotPasswordConfirm) {
                        valid = true;
                    }
                }
            }
        }
        return valid;
    }

    $scope.doChangeNewPassword = function () {
        if (validPassword()) {
            var recoverPasswordFactory = {};
            recoverPasswordFactory.newPassword = $scope.recoverForgotPassword;
            recoverPasswordFactory.passwordConfirm = $scope.recoverForgotPasswordConfirm;
            recoverPasswordFactory.recoverCode = $scope.recoverCode;

            $("#dialog").dialog("open");

            apiServices.getDataAnonymous(recoverPasswordFactory, 'api/Profiles/ChangePasswordRecover')
            .then(function (data) {
                //stopTime = $interval(backTop, $rootScope.dialogTimer);
                if (data) {
                    $scope.hideGUID = true;
                    $scope.hideForgotPassword = true;
                    $scope.hidelogin = false;
                    var myEl = $element.find('#passwordChanged');
                    myEl.click();
                } else {
                    var myEl = $element.find('#openCodeInvalid');
                    myEl.click();
                }
                $("#dialog").dialog("close");
            }, function (error) {
                $("#dialog").dialog("close");
                $scope.errorMessage = error;
                var myEl = $element.find('#idErrorMessage');
                myEl.click();
            });
        }
    }

    $scope.clickExternalLogin = function () {
        $scope.login();
    }

    $scope.UpdateVersion = function () {
        if ($scope.testApp == false) {
            localStorage.setItem("versionleonapp", versionapp);

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

    var ss;

    if ($rootScope.realMobileApp) {
        var myAPP = "goleon";
        if ($scope.testApp) {
            myAPP = "goleontest"
        }
        ss = new cordova.plugins.SecureStorage(
                function () { console.log('Success') },
                function (error) { console.log('Error ' + error); },
                myAPP);
    }

    var validic = localStorage.getItem("validic");
    localStorage.removeItem("validic");

    if (magicemail != undefined) {
        $scope.loginData.userName = magicemail;
        if (magictoken != undefined) {
            $scope.loginData.password = "";
        }
    }
    
    
    $scope.login = function () {

        $location.search('email', null);
        $location.search('token', null);

        $("#dialog").dialog("open");

        var emailToLogin = $scope.loginData.userName;
        if (idFBUser != undefined) {
            if ($scope.emailForgotPassword == undefined) {
                emailToLogin = "";
            }
            else {
                emailToLogin = $scope.emailForgotPassword;
            }
        }
        loginService.login(emailToLogin, $scope.loginData.password, magictoken, idFBUser)
        .then(function (response) {
            //alert(response);
            if (response != null && response.error != undefined) {
                $("#dialog").dialog("close");
                if (response.error_description != undefined) {
                    if (response.error_description == "externallogin") {
                        $scope.loginData.userName = "";
                        $scope.loginData.password = "";
                        $scope.hidelogin = true;
                        $scope.initialPage = true;
                        $scope.hideAssociatedEmail = false;
                    }
                    else {
                        if (response.error_description != "Invalid Associated email" && 
                            response.error_description != "The magic link is invalid or has expired") {
                            $scope.hidelogin = false;
                        }
                        setTimeout(function () {
                            $scope.errorMessage = response.error_description;
                            var myEl = $element.find('#errorMessage');
                            myEl.click();
                        }, 500);
                    }
                }
                else if (response.message != undefined) {
                    setTimeout(function () {
                        $("#dialog").dialog("close");
                        $scope.errorMessage = response.error_description;
                        var myEl = $element.find('#errorMessage');
                        myEl.click();
                    }, 500);
                    $scope.hidelogin = false;
                }
            }
            else if (authData.authenticationData.IsAuthenticated == true) {
                $scope.loginData.userName = authData.authenticationData.userName;
                $rootScope.emailid = authData.authenticationData.userName;
             
                if ($rootScope.realMobileApp) {
                    ss.set(
                        function (key) {
                            console.log('jesusuSet');
                            ss.set(
                                  function (key) {
                                      console.log('jesuspSet');
                                  },
                                  function (error) {
                                      console.log('jesuspError ' + error);
                                  },
                                  'password', $scope.loginData.password
                            );
                        },
                        function (error) {
                            console.log('jesusuError ' + error);
                        },
                        'user', $scope.loginData.userName
                    );
                }
                userInfoFromServer($scope.loginData.userName);
            }
            else {
                $("#dialog").dialog("close");
                $scope.errorMessage = response.error_description;
                var myEl = $element.find('#errorMessage');
                myEl.click();
            }
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = response.error_description;
            var myEl = $element.find('#errorMessage');
            myEl.click();

        });
        magicemail = undefined;
        magictoken = undefined;
    }

    $rootScope.firstTime = true;
    
    var userInfoFromServer = function (userName) {
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push(userName);
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Users/QueryUserRoles')
        .then(function (data) {
            $rootScope.firstTime = data.firstTime;
            versionapp = data.version;
            if (checkversion()) {

                if ($rootScope.phoneDevice < 0) {
                    localStorage.removeItem("uTokenInfo");
                }
                var cookieroleLeonAdminUser = localStorage.getItem('roleLeonAdminUser');
                localStorage.removeItem('roleLeonAdminUser');
                //for (var x = 1; x < data.length; x++) {
                if (data.role == "Administrador") {
                    $rootScope.adminRole = false;
                    $rootScope.roleLeonAdmin = false;
                    if (cookieroleLeonAdminUser != null && cookieroleLeonAdminUser == "1") {
                        $rootScope.adminRole = true;
                        $rootScope.userRole = false;
                    }
                }
                else if (data.role == "User") {
                    $rootScope.userRole = false;
                }
                else if (data.role == "Company") {
                    $rootScope.companyRole = false;
                }
                else if (data.role == "Provider") {
                    $rootScope.providerRole = false;
                }
                $rootScope.locationList = data.locations;

                //}
                apiServices.getData(model, 'api/Account/UserId')
                .then(function (data) {
                    $rootScope.userId = JSON.stringify(data);
                    $rootScope.userId = JSON.parse($rootScope.userId);
                    $("#dialog").dialog("close");

                   


                    //if ($rootScope.phoneDevice >= 0) {
                        localStorage.setItem("uTokenInfo", $window.sessionStorage["TokenInfo"]);
                    //}
                        if (!$rootScope.userRole && dialyquestions == 1) {
                            dialyquestions = 0;
                            $location.path('/form/mzt-leon-user-daily-questions');
                        }
                        else if ($scope.mobileApp &&
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

                            if ($rootScope.returnToState != undefined && $rootScope.returnToState != "/login") {
                                if (validic == null) {

                                    var urlTemporal = $rootScope.returnToState;
                                    $rootScope.returnToState = undefined;
                                    $location.path(urlTemporal);
                                }
                                else {
                                    $location.path("/form/mzt-leon-validic-register");
                                }
                            }
                            else {
                                $location.path("/dashboard");

                            }
                        }

                }, function (error) {
                    $("#dialog").dialog("close");
                    $scope.errorMessage = "Internet conection problems: can not connect to leon server data";
                    var myEl = $element.find('#errorMessage');
                    myEl.click();
                    if ($scope.initialPage) {
                        $scope.hidelogin = false;
                    }
                });
            }


        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = "Internet conection problems: can not connect to leon server data";
            var myEl = $element.find('#errorMessage');
            myEl.click();
            if ($scope.initialPage) {
                $scope.hidelogin = false;
            }

        });


    }

    var getUserInfo = function () {
        if ($rootScope.realMobileApp) {
            ss.get(
                function (value) {
                    console.log('JesusuSuccess');
                    $scope.loginData.userName = value;
                    ss.get(
                       function (value) {
                           console.log('jesuspSuccess');
                           $scope.loginData.password = value;
                           $scope.login();
                       },
                       function (error) {
                           console.log('JesuspError ' + error);
                           $scope.initialPage = false;
                       },
                       'password'
                   );
                },
                function (error) {
                    console.log('jesusuError ' + error);
                    $scope.initialPage = false;
                },
                'user'
            );
        }
        else {
            var userinfo = localStorage.getItem("uTokenInfo");
            if (userinfo != null) {
                $window.sessionStorage["TokenInfo"] = userinfo;
                userinfo = JSON.parse(userinfo);
                authData.authenticationData.userName = userinfo.userName;
                authData.authenticationData.IsAuthenticated = true;
                $rootScope.emailid = userinfo.userName;

                userInfoFromServer(authData.authenticationData.userName);
            }
            else {
                //alert(localStorage.getItem("activeLoginFB"));
                //alert("entra aqui y regresa la vista de login al frente.");
                if (localStorage.getItem("activeLoginFB")) {
                    $scope.hidelogin = false;
                    $scope.initialPage = true;
                    fLogout();
                    //localStorage.removeItem("activeLoginFB");
                } else {
                    $scope.initialPage = false;
                }
                
            }
        }
    }

    $rootScope.ocultarMenus = function (dashboard) {
        //$("html").removeClass("hidden-menu-mobile-lock");
        //$("body").addClass("hidden-menu");
        //$("aside").trigger('mouseleave');
        //$("#id-toggle-menu").click();
        //$("aside").trigger('mouseout');
        $("#left-panel").css("left", "-100%");
        $("#left-panel").css("z-index", "903");
        $("#main").css("margin-left", "0");
        $("#main").css("left", "0");
       
            // Bind:
        $('body').unbind('touchmove'); //regresa el evento scroll cuando se selecciona cualquier elemento de la navegacion

        //hoverMenu();
      
    };

    $rootScope.showBarBottomClient = function () {
        if (!$rootScope.roleLeonAdmin) {
           
            localStorage.removeItem('queryQuestionTempFactory');
            localStorage.removeItem('questionFactory');
            localStorage.removeItem('questionFactoryAllValues');
            $window.sessionStorage.removeItem("statequestion");
            $window.sessionStorage.removeItem("question");
            $window.sessionStorage.removeItem("idformbyuser");
            if (!$rootScope.adminRole) {
                $rootScope.adminRole = true;
                $rootScope.userRole = false;
                localStorage.setItem('roleLeonAdminUser', "1");
            }
            else {
                $rootScope.adminRole = false;
                $rootScope.userRole = true;
                localStorage.setItem('roleLeonAdminUser', "0");
            }
        }
        $rootScope.ocultarMenus();
        $location.path("/dashboard");
       
    };

    $rootScope.menuToggle = function () {
        var cssLeft = $("#left-panel").css("left");
        if (cssLeft >= "0px") {
            $("#left-panel").css("left", "-100%");
            $("#left-panel").css("z-index", "903");
        } else {
            $("#left-panel").css("left", "0px");
        }
        $("#main").css("margin-left", "0");
        $("#main").css("left", "0");
    };

    $rootScope.changetop = function () {
        if ($rootScope.phoneDevice >= 0) {
            //$("#header").css('margin-top', '10px');
        }
  
    };

    //var hoverMenu = function () {
    //    $("#left-panel").hover(
    //        function () {
    //            $(this).css("left", "0px")
    //        }, function () {
    //            $(this).css("left", "-99.5%")
    //        }
    //    );
    //    $("#main").css("margin-left", "0");
    //    $("#main").css("left", "0");
    //};

    var userinfo = localStorage.getItem("uTokenInfo");
    if (userinfo == null && magictoken == undefined) {

        (function (d) {
            var js, id = 'facebook-jssdk'; if (d.getElementById(id)) { return; }
            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            d.getElementsByTagName('head')[0].appendChild(js);

            /*
            js = d.createElement('script');
            js.async = true;
            js.src = "https://apis.google.com/js/client:plusone.js?onload=startApp";
            d.getElementsByTagName('head')[0].appendChild(js);
            */

        }(document));

        // facebook Login

        //teslocal 
        //var appId = '1613709598654547';

        //Production 
        //var appId = '1778288612432869';

        //test Leon 
        var appId = '1750261838630378';

        $window.fbAsyncInit = function () {
            FB.init({
                appId: appId,
                status: false,
                cookie: true,
                xfbml: true,
                oauth: true
            });

        };
        
        $(".fb_login").click(function () {
            if ($rootScope.mobileApp) {
                mobileGetStatus();
            }
            else {
                FB.login(Facebook_login);
            }

        });

        var mobileGetStatus = function () {
            localStorage.setItem("activeLoginFB", true);
            facebookConnectPlugin.getLoginStatus(
                function (sucess) {
                    if (sucess.status == "connected") {
                        idFBUser = "F" + sucess.authResponse.userID;
                        //alert(JSON.stringify(sucess.authResponse));
                        //alert("connected");
                        facebookConnectPlugin.api("<" + sucess.authResponse.userID + ">/?fields=id,email",
                          function onSuccess(result) {
                              //alert("Result: ", JSON.stringify(result));
                          }, function onError(error) {
                              //alert("Failed: ", error);
                          }
                        );
                        fLogout();
                        $scope.login();
                    } else {
                        facebookConnectPlugin.login(["public_profile"],
                            function (userData) {
                                localStorage.setItem("idFBUser", "F" + userData.authResponse.userID);
                                //alert("public profile");
                                //alert(JSON.stringify(userData.authResponse));
                                facebookConnectPlugin.api("<" + userData.authResponse.userID + ">/?fields=id,email",
                                    function onSuccess(result) {
                                        //alert("Result: ", JSON.stringify(result));
                                    }, function onError(error) {
                                        //alert("Failed: ", error);
                                    }
                                );
                                fLogout();
                            },
                            function (error) {
                                //alert("error public_profile:" + error);
                                $scope.hidelogin = true;
                                $scope.initialPage = false;
                            });
                    }
                },
                function (error) {
                    //alert("error getLoginStatus: " + error);
                }
            );
        }
        
        var fLogout = function () {
            //alert("entro al logout");
            localStorage.removeItem("activeLoginFB");
            facebookConnectPlugin.logout(
                function (success) {
                    //alert("success logout 1: " + success);
                },
                function (failure) {
                    //alert("error logout 1:" + error);
                }
            );
        };

        var Facebook_login = function () {
            FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    getUserFBInfo();
                }
            });
        }
        
        var getUserFBInfo = function () {

            FB.api('/me', function (res) {
                $rootScope.$apply(function () {
                    idFBUser = "F" + res.id;
                    logoutFB();
                    $scope.login();

                });
            });

        }

        var logoutFB = function () {

            FB.logout(function (response) {
                $rootScope.$apply(function () {
                });
            });

        }

        // facebook login

        // Google login
        //alert(gapi);
        if (typeof gapi !== "undefined" && !$rootScope.mobileApp) {
            var auth2 = {};
            var googleUser = {};

            (function startApp() {
                // local
                //var idGoogle = "200903355762-694pls2lle19i48p24e65e8tspukp0cr.apps.googleusercontent.com";
                
                // Production
                //var idGoogle = "";

                // Test
                var idGoogle = "1041894007825-enh0am33bih1ind37m4vaetiiah7rbe7.apps.googleusercontent.com";

                gapi.load('auth2', function () {
                    // Retrieve the singleton for the GoogleAuth library and set up the client.
                    auth2 = gapi.auth2.init({
                        'client_id': idGoogle,
                        'cookiepolicy': 'single_host_origin',
                        // Request scopes in addition to 'profile' and 'email'
                        scope: 'profile email'
                    });
                    auth2.attachClickHandler(document.getElementById('googleSignInImg'), {},
                    function (googleUser) {
                        idFBUser = "G" + googleUser.El
                        gapi.auth.signOut();
                        $scope.login();
                    }, function (error) {
                        $scope.errorMessage = JSON.stringify(error, undefined, 2);
                        var myEl = $element.find('#errorMessage');
                        myEl.click();

                    });
                });
        
            })();
        } else {
            $("#googleSignInImg").click(function () {
                $scope.gLogin();
            });
        }
            
        // Google login
    }
   
    $("#errorMessage").click(function (element) {
        $("#dialog_simple").css("display","flex");
    });

    $scope.hidelogin = true;
    $scope.initialPage = false;
    $scope.goToSignUp = function () {
        $scope.initialPage = true;
        $scope.hidelogin = false;
    };
    $scope.gLogin = function () {
        $scope.gUserId = "";
        $scope.gRefreshToken = "";
        $scope.gEmail = "";
        $scope.gAccessToken = "";
        $scope.gIdToken = "";
        window.plugins.googleplus.login(
            {},
            function (obj) {
                idFBUser = "G" + obj.userId;
                //$scope.emailForgotPassword = obj.email;
                $scope.gUserId = obj.userId;
                $scope.gRefreshToken = obj.refreshToken;
                $scope.gEmail = obj.email;
                $scope.gAccessToken = obj.accessToken;
                $scope.gIdToken = obj.idToken;
                $scope.gLogout();
                $scope.login();
            },
            function (msg) {
                $scope.errorMessage = JSON.stringify(msg);
                var myEl = $element.find('#errorMessage');
                myEl.click();
            }
        );
    };
    $scope.gLogout = function () {
        window.plugins.googleplus.logout(
            function (msg) {
                
            },
            function (msg) {
                
            }
        );
    };

    
    //hoverMenu();
    idFBUser = localStorage.getItem("idFBUser");
    if (magictoken != undefined || idFBUser != null) {
        localStorage.removeItem("idFBUser");
        $scope.login();
        //if (idFBUser.toString().indexOf("F") !== -1) {
            
        //    idFBUserNum = idFBUser.toString().replace(/F/g, "");
        //    facebookConnectPlugin.api("<" + idFBUserNum + ">/?fields=id,email",
        //        function onSuccess(result) {
        //            alert("Result: ", JSON.stringify(result));
        //        }, function onError(error) {
        //            alert("Failed: ", error);
        //        }
        //    );
        //    alert("entro??" + idFBUserNum);
        //}
        //alert("entra aqui despues del deslogeo 1");
    }
    else {
        //alert("entra aqui despues del deslogeo 2");
        idFBUser = undefined;
        getUserInfo();
    }
    
}]);


app.controller('headerAppController', function ($rootScope, $element) {
o
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