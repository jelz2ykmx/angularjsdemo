'use strict';



var appConfig = window.appConfig || {};

appConfig.menu_speed = 200;

appConfig.smartSkin = "smart-style-0";

appConfig.skins = [
    {name: "smart-style-0",
        logo: "styles/img/logo.png",
        class: "btn btn-block btn-xs txt-color-white margin-right-5",
        style: "background-color:#4E463F;",
        label: "Smart Default"},

    {name: "smart-style-1",
        logo: "styles/img/logo-white.png",
        class: "btn btn-block btn-xs txt-color-white",
        style: "background:#3A4558;",
        label: "Dark Elegance"},

    {name: "smart-style-2",
        logo: "styles/img/logo-blue.png",
        class: "btn btn-xs btn-block txt-color-darken margin-top-5",
        style: "background:#fff;",
        label: "Ultra Light"},

    {name: "smart-style-3",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background:#f78c40",
        label: "Google Skin"},

    {name: "smart-style-4",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #bbc0cf; border: 1px solid #59779E; color: #17273D !important;",
        label: "PixelSmash"},

    {name: "smart-style-5",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: rgba(153, 179, 204, 0.2); border: 1px solid rgba(121, 161, 221, 0.8); color: #17273D !important;",
        label: "Glass"},

    {name: "smart-style-6",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #2196F3; border: 1px solid rgba(121, 161, 221, 0.8); color: #FFF !important;",
        beta: true,
        label: "MaterialDesign"
    }


];



appConfig.sound_path = "sound/";
appConfig.sound_on = true; 


/*
* DEBUGGING MODE
* debugState = true; will spit all debuging message inside browser console.
* The colors are best displayed in chrome browser.
*/


appConfig.debugState = false;	
appConfig.debugStyle = 'font-weight: bold; color: #00f;';
appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
appConfig.debugStyle_warning = 'background-color:yellow';
appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';


appConfig.voice_command = true;
appConfig.voice_command_auto = false;

/*
 *  Sets the language to the default 'en-US'. (supports over 50 languages 
 *  by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  CatalГ            ['ca-ES']
 *  ДЊeЕЎtina         ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  EspaГ±ol          ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'EspaГ±a']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'MГ©xico']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'PanamГЎ']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'PerГє']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'RepГєblica Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  FranГ§ais         ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  ГЌslenska         ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmГҐl     ['nb-NO']
 *  Polski            ['pl-PL']
 *  PortuguГЄs        ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  RomГўnДѓ          ['ro-RO']
 *  SlovenДЌina       ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  TГјrkГ§e          ['tr-TR']
 *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
 *  PСѓСЃСЃРєРёР№     ['ru-RU']
 *  РЎСЂРїСЃРєРё      ['sr-RS']
 *  н•њкµ­м–ґ         ['ko-KR']
 *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
 *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
 *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
 *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
 *  ж—Ґжњ¬иЄћ         ['ja-JP']
 *  Lingua latД«na    ['la']
 */
appConfig.voice_command_lang = 'en-US';
/*
 *  Use localstorage to remember on/off (best used with HTML Version)
 */ 
appConfig.voice_localStorage = false;
/*
 * Voice Commands
 * Defines all voice command variables and functions
 */ 
if (appConfig.voice_command) {
        
     	appConfig.commands = {
                
        'show dashboard' : function() { window.location.hash = "dashboard" },
        'show inbox' : function() {  window.location.hash = "inbox/" },
        'show graphs' : function() {  window.location.hash = "graphs/flot" },
        'show flotchart' : function() { window.location.hash = "graphs/flot" },
        'show morris chart' : function() { window.location.hash = "graphs/morris" },
        'show inline chart' : function() { window.location.hash = "graphs/inline-charts" },
        'show dygraphs' : function() { window.location.hash = "graphs/dygraphs" },
        'show tables' : function() { window.location.hash = "tables/table" },
        'show data table' : function() { window.location.hash = "tables/datatable" },
        'show jquery grid' : function() { window.location.hash = "tables/jqgrid" },
        'show form' : function() { window.location.hash = "forms/form-elements" },
        'show form layouts' : function() { window.location.hash = "forms/form-templates" },
        'show form validation' : function() { window.location.hash = "forms/validation" },
        'show form elements' : function() { window.location.hash = "forms/bootstrap-forms" },
        'show form plugins' : function() { window.location.hash = "forms/plugins" },
        'show form wizards' : function() { window.location.hash = "forms/wizards" },
        'show bootstrap editor' : function() { window.location.hash = "forms/other-editors" },
        'show dropzone' : function() { window.location.hash = "forms/dropzone" },
        'show image cropping' : function() { window.location.hash = "forms/image-editor" },
        'show general elements' : function() { window.location.hash = "ui/general-elements" },
        'show buttons' : function() { window.location.hash = "ui/buttons" },
        'show fontawesome' : function() { window.location.hash = "ui/icons/fa" },
        'show glyph icons' : function() { window.location.hash = "ui/icons/glyph" },
        'show flags' : function() { window.location.hash = "ui/icons/flags" },
        'show grid' : function() { window.location.hash = "ui/grid" },
        'show tree view' : function() { window.location.hash = "ui/treeview" },
        'show nestable lists' : function() { window.location.hash = "ui/nestable-list" },
        'show jquery U I' : function() { window.location.hash = "ui/jqui" },
        'show typography' : function() { window.location.hash = "ui/typography" },
        'show calendar' : function() { window.location.hash = "calendar" },
        'show widgets' : function() { window.location.hash = "widgets" },
        'show gallery' : function() { window.location.hash = "gallery" },
        'show maps' : function() { window.location.hash = "gmap-xml" },
        'go back' :  function() { history.back(1); }, 
        'scroll up' : function () { $('html, body').animate({ scrollTop: 0 }, 100); },
        'scroll down' : function () { $('html, body').animate({ scrollTop: $(document).height() }, 100);},
        'hide navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'show navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'mute' : function() {
            appConfig.sound_on = false;
            $.smallBox({
                title : "MUTE",
                content : "All sounds have been muted!",
                color : "#a90329",
                timeout: 4000,
                icon : "fa fa-volume-off"
            });
        },
        'sound on' : function() {
            appConfig.sound_on = true;
            $.speechApp.playConfirmation();
            $.smallBox({
                title : "UNMUTE",
                content : "All sounds have been turned on!",
                color : "#40ac2b",
                sound_file: 'voice_alert',
                timeout: 5000,
                icon : "fa fa-volume-up"
            });
        },
        'stop' : function() {
            smartSpeechRecognition.abort();
            $( ":root" ).removeClass("voice-command-active");
            $.smallBox({
                title : "VOICE COMMAND OFF",
                content : "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                color : "#40ac2b",
                sound_file: 'voice_off',
                timeout: 8000,
                icon : "fa fa-microphone-slash"
            });
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }
        },
        'help' : function() {

            $('#voiceModal').removeData('modal').modal( { remote: "app/layout/partials/voice-commands.tpl.html", show: true } );
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }

        },      
        'got it' : function() {
            $('#voiceModal').modal('hide');
        },  
        'logout' : function() {
            $.speechApp.stop();
            window.location = $('#logout > span > a').attr("href");
        }
    };
}

appConfig.apiRootUrl = 'api';

window.appConfig = appConfig;

/*
* END APP.appConfig
*/
'use strict';

$.sound_path = appConfig.sound_path;
$.sound_on = appConfig.sound_on;


$(function () {

    // moment.js default language
    moment.locale('en')

    angular.bootstrap(document, ['app']);
 
});

'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    'ngSanitize',
    'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',

    // Smartadmin Angular Common Module
    'SmartAdmin',

    // App
    'app.auth',
    'app.layout',
    'app.dashboard',
    'app.tables',
    'app.forms',
    'app.ui',
    'app.smartAdmin',
])
.config(function ($provide, $httpProvider, RestangularProvider) {


    // Intercept http calls.
    $provide.factory('ErrorHttpInterceptor', function ($q) {
        var errorCounter = 0;
        function notifyError(rejection){
            console.log(rejection);
            $.bigBox({
                title: rejection.status + ' ' + rejection.statusText,
                content: rejection.data,
                color: "#C46A69",
                icon: "fa fa-warning shake animated",
                number: ++errorCounter,
                timeout: 6000
            });
        }

        return {
            // On request failure
            requestError: function (rejection) {
                // show notification
                notifyError(rejection);

                // Return the promise rejection.
                return $q.reject(rejection);
            },

            // On response failure
            responseError: function (rejection) {
                // show notification
                notifyError(rejection);
                // Return the promise rejection.
                return $q.reject(rejection);
            }
        };
    });

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('ErrorHttpInterceptor');

    RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

})
.constant('APP_CONFIG', window.appConfig)

.run(function ($rootScope
    , $state, $stateParams
    ) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    // editableOptions.theme = 'bs3';

});



"use strict";

angular.module('app.auth', [
    'ui.router'
//        ,
//        'ezfb',
//        'googleplus'
]).config(function ($stateProvider
//        , ezfbProvider
//        , GooglePlusProvider
    ) {
//        GooglePlusProvider.init({
//            clientId: authKeys.googleClientId
//        });
//
//        ezfbProvider.setInitParams({
//            appId: authKeys.facebookAppId
//        });
    $stateProvider.state('realLogin', {
        url: '/real-login',

        views: {
            root: {
                templateUrl: "app/auth/login/login.html",
                controller: 'LoginCtrl'
            }
        },
        data: {
            title: 'Login',
            rootId: 'extra-page'
        }

    })

    .state('login', {
        url: '/login',
        views: {
            root: {
                templateUrl: 'app/auth/views/login.html'
            }
        },
        data: {
            title: 'Login',
            htmlId: 'extr-page'
        },
        resolve: {
            srcipts: function(lazyScript){
                return lazyScript.register([
                    'build/vendor.ui.js'
                ])

            }
        }
    })

    .state('register', {
        url: '/register',
        views: {
            root: {
                templateUrl: 'app/auth/views/register.html'
            }
        },
        data: {
            title: 'Register',
            htmlId: 'extr-page'
        }
    })

    .state('forgotPassword', {
        url: '/forgot-password',
        views: {
            root: {
                templateUrl: 'app/auth/views/forgot-password.html'
            }
        },
        data: {
            title: 'Forgot Password',
            htmlId: 'extr-page'
        }
    })

    .state('lock', {
        url: '/lock',
        views: {
            root: {
                templateUrl: 'app/auth/views/lock.html'
            }
        },
        data: {
            title: 'Locked Screen',
            htmlId: 'lock-page'
        }
    })


}).constant('authKeys', {
    googleClientId: '',
    facebookAppId: ''
});

'use strict';

angular.module('app.dashboard', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard',
            views: {
                "content@app": {
                    controller: 'DashboardCtrl as datatables',
                    templateUrl: 'app/dashboard/dashboard.html'
                }
            },
            data:{
                title: 'Dashboard'
            }
        })
        .state('app.dashboard-social', {
            url: '/dashboard-social',
            views: {
                "content@app": {
                    templateUrl: 'app/dashboard/social-wall.html'
                }
            },
            data:{
                title: 'Dashboard Social'
            }
        });
});

"use strict";


angular.module('app.forms', ['ui.router'])


angular.module('app.forms').config(function ($stateProvider) {

    $stateProvider
        .state('app.form', {
            abstract: true,
            data: {
                title: 'Forms'
            }
        })

        // mzt 
        .state('app.form.mztTransaccionesComprobantes', {
            url: '/form/mzt-transacciones-comprobantes',
            data: {
                title: 'Comprobantes'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-transacciones-comprobantes.html'
                }
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })
        .state('app.form.mztQueryCliente', {
            url: '/form/mzt-query-cliente',
            data: {
                title: 'Cliente'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-query-cliente.html'
                }
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })
        .state('app.form.mztRewardsLion', {
            url: '/form/mzt-rewards-lion',
            data: {
                title: 'Rewards'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-rewards-lion.html'
                }
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })
        .state('app.form.mztRewardsLionUpdate', {
            url: '/form/mzt-rewards-lion-update',
            data: {
                title: 'Rewards'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-rewards-lion-update.html'
                }
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })
        .state('app.form.mztAssessmentLion', {
            url: '/form/mzt-assessment-lion',
            data: {
                title: 'Assessments'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-assessment-lion.html'
                }
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })
        .state('app.form.mztAssessmentLionUpdate', {
            url: '/form/mzt-assessment-lion-update',
             data: {
                 title: 'Assessment'
             },
             views: {
                 "content@app": {
                     templateUrl: 'app/forms/views/mzt-assessment-lion-update.html'
                 }
             },
             resolve: {
                 srcipts: function (lazyScript) {
                     return lazyScript.register([
                         'build/vendor.ui.js'
                     ])
                 }
             }
         })
         .state('app.form.mztCompanyUsers', {
              url: '/form/mzt-company-users',
              data: {
                  title: 'Users'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-company-users.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztCompanyUsersUpdate', {
              url: '/form/mzt-company-users-update',
              data: {
                  title: 'User'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-company-users-update.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztProvidersUsers', {
              url: '/form/mzt-providers-users',
              data: {
                  title: 'Users'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-providers-users.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztProvidersUsersUpdate', {
              url: '/form/mzt-providers-users-update',
              data: {
                  title: 'User'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-providers-users-update.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztProvidersAssessments', {
              url: '/form/mzt-providers-assessments',
              data: {
                  title: 'Assessments'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-providers-assessments.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztProvidersUserAssessments', {
              url: '/form/mzt-providers-user-assessments',
              data: {
                  title: 'Assessments'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-providers-user-assessments.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztProvidersAddupdateAssessments', {
              url: '/form/mzt-providers-addupdate-assessments',
              data: {
                  title: 'Assessments'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-providers-addupdate-assessments.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztUserAssessments', {
              url: '/form/mzt-user-assessments',
              data: {
                  title: 'Assessments'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-user-assessments.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztUserShowAssessment', {
              url: '/form/mzt-user-show-assessment',
              data: {
                  title: 'Assessment'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-user-show-assessment.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztCompanyUsersAssessments', {
              url: '/form/mzt-company-users-assessments',
              data: {
                  title: 'Assessment'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-company-users-assessments.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztCompanyUserAssessments', {
              url: '/form/mzt-company-user-assessments',
              data: {
                  title: 'Assessment'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-company-user-assessments.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztCompanyUserShowAssessments', {
              url: '/form/mzt-company-user-show-assessment',
              data: {
                  title: 'Assessment'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-company-user-show-assessment.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztLeonProviders', {
              url: '/form/mzt-leon-providers',
              data: {
                  title: 'Assessment'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-leon-providers.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztLeonProvidersAddUpdate', {
              url: '/form/mzt-leon-providers-addupdate',
              data: {
                  title: 'Assessment'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-leon-providers-addupdate.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })
          .state('app.form.mztLeonProvidersChangePassword', {
              url: '/form/mzt-leon-providers-change-password',
              data: {
                  title: 'Assessment'
              },
              views: {
                  "content@app": {
                      templateUrl: 'app/forms/views/mzt-leon-providers-change-password.html'
                  }
              },
              resolve: {
                  srcipts: function (lazyScript) {
                      return lazyScript.register([
                          'build/vendor.ui.js'
                      ])
                  }
              }
          })

        //Questions
        .state('app.form.mztLeonQuestions', {
            url: '/form/mzt-leon-questions',
            data: {
                title: 'Questions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-questions.html'
                }
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })
        .state('app.form.mztLeonPhoneQuestions', {
            url: '/form/mzt-leon-phone-questions',
            data: {
                title: 'Questions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-phone-questions.html'
                }
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })
        .state('app.form.mztLeonQuestionsUser', {
            url: '/form/mzt-leon-questions-user',
            data: {
                title: 'Questions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-questions-user.html'
                }
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })
});
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
                $rootScope.phoneDevice = $window.navigator.userAgent.toLowerCase().indexOf("windows")
                if ($rootScope.phoneDevice >= 0) {
                    $rootScope.phoneDevice = $window.navigator.userAgent.toLowerCase().indexOf("phone")
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
                        $scope.errorMessage = error;
                        var myEl = $element.find('#idErrorMessage');
                        myEl.click();
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
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();

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

"use strict";


angular.module('app.smartAdmin', ['ui.router']);


angular.module('app.smartAdmin').config(function ($stateProvider) {

    $stateProvider
        .state('app.smartAdmin', {
            abstract: true,
            data: {
                title: 'SmartAdmin Intel'
            }
        })

        .state('app.smartAdmin.appLayout', {
            url: '/app-layout',
            data: {
                title: 'App Layout'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layout.html'
                }
            }
        })

        .state('app.smartAdmin.diffVer', {
            url: '/different-versions',
            data: {
                title: 'Different Versions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/different-versions.html'
                }
            }
        })

        .state('app.smartAdmin.appLayouts', {
            url: '/app-layouts',
            data: {
                title: 'App Layouts'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layouts.html'
                }
            }
        })

        .state('app.smartAdmin.prebuiltSkins', {
            url: '/prebuilt-skins',
            data: {
                title: 'Prebuilt Skins'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/prebuilt-skins.html'
                }
            }
        })
});
"use strict";

angular.module('app.tables', [ 'ui.router', 'datatables', 'datatables.bootstrap']);

angular.module('app.tables').config(function ($stateProvider) {

    $stateProvider
        .state('app.tables', {
            abstract: true,
            data: {
                title: 'Tables'
            }
        })

        .state('app.tables.normal', {
            url: '/tables/normal',
            data: {
                title: 'Normal Tables'
            },
            views: {
                "content@app": {
                    templateUrl: "app/tables/views/normal.html"

                }
            }
        })

        .state('app.tables.datatables', {
            url: '/tables/datatables',
            data: {
                title: 'Data Tables'
            },
            views: {
                "content@app": {
                    controller: 'DatatablesCtrl as datatables',
                    templateUrl: "app/tables/views/datatables.html"
                }
            }
        })

        .state('app.tables.jqgrid', {
            url: '/tables/jqgrid',
            data: {
                title: 'Jquery Grid'
            },
            views: {
                "content@app": {
                    controller: 'JqGridCtrl',
                    templateUrl: "app/tables/views/jqgrid.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                        'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                    ])

                }
            }
        })
});
'use strict'

angular.module('app.ui', ['ui.router']);

angular.module('app.ui').config(function($stateProvider){

    $stateProvider
        .state('app.ui', {
            abstract: true,
            data: {
                title: 'UI Elements'
            }
        })
        .state('app.ui.general', {
            url: '/ui/general',
            data: {
                title: 'General Elements'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/general-elements.html',
                    controller: 'GeneralElementsCtrl'
                }
            }
        })
        .state('app.ui.buttons', {
            url: '/ui/buttons',
            data: {
                title: 'Buttons'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/buttons.html',
                    controller: 'GeneralElementsCtrl'
                }
            }
        })
        .state('app.ui.iconsFa', {
            url: '/ui/icons-font-awesome',
            data: {
                title: 'Font Awesome'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/icons-fa.html'
                }
            }
        })
        .state('app.ui.iconsGlyph', {
            url: '/ui/icons-glyph',
            data: {
                title: 'Glyph Icons'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/icons-glyph.html'
                }
            }
        })
        .state('app.ui.iconsFlags', {
            url: '/ui/icons-flags',
            data: {
                title: 'Flags'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/icons-flags.html'
                }
            }
        })
        .state('app.ui.grid', {
            url: '/ui/grid',
            data: {
                title: 'Grid'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/grid.html'
                }
            }
        })
        .state('app.ui.treeView', {
            url: '/ui/tree-view',
            data: {
                title: 'Tree View'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/tree-view.html',
                    controller: 'TreeviewCtrl'
                }
            }
        })
        .state('app.ui.nestableLists', {
            url: '/ui/nestable-lists',
            data: {
                title: 'Nestable Lists'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/nestable-lists.html'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])

                }
            }
        })
        .state('app.ui.jqueryUi', {
            url: '/ui/jquery-ui',
            data: {
                title: 'JQuery UI'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/jquery-ui.html',
                    controller: 'JquiCtrl'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])

                }
            }
        })
        .state('app.ui.typography', {
            url: '/ui/typography',
            data: {
                title: 'JQuery UI'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/typography.html'
                }
            }
        })
});
(function(){
    "use strict";

    angular.module('SmartAdmin', [
        "SmartAdmin.Forms",
        "SmartAdmin.Layout",
        "SmartAdmin.UI",
    ]);
})();
    "use strict";


angular.module('app.chat', ['ngSanitize'])
.run(function ($templateCache) {

    $templateCache.put("template/popover/popover.html",
        "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
        "  <div class=\"arrow\"></div>\n" +
        "\n" +
        "  <div class=\"popover-inner\">\n" +
        "      <h3 class=\"popover-title\" ng-bind-html=\"title | unsafe\" ng-show=\"title\"></h3>\n" +
        "      <div class=\"popover-content\"ng-bind-html=\"content | unsafe\"></div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");

}).filter('unsafe', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);
(function(){
    "use strict";

    angular.module('SmartAdmin.Forms', ['angular-datepicker', 'ui.utils.masks']);


    app.factory('UserProviderFactory', function () {
        return {
            copy: function (email, userId) {
                return angular.extend({ email: email, userId: userId }, this);
            }
        };

    });

    app.factory('RegisterUserFactory', function () {
        return {
            copy: function (email, password, role) {
                return angular.extend({ email: email, password: password, role: role }, this);
            }
        };

    });

    app.factory('ChangePasswordFactory', function () {
        return {
            copy: function (userId, OldPassword, NewPassword) {
                return angular.extend({ userId: userId, OldPassword: OldPassword, NewPassword: NewPassword }, this);
            }
        };

    });

    app.factory('queryQuestionFactory', function () {
        return {
            copy: function (id, email, firstName, lastName) {
                return angular.extend({ id: id, email: email, firstName: firstName, lastName: lastName }, this);
            }
        };

    });

    app.factory('queryQuestionTempFactory', function () {
        return {
            copy: function (phoneType, countQ, totalQ, pageQ) {
                return angular.extend({ phoneType: phoneType, countQ: countQ, totalQ: totalQ, pageQ: pageQ }, this);
            }
        };

    });
   

    app.factory('questionFactory', function () {
        return {
            copy: function (

                idform, email, userid, total1, total2, total3, grantotal, conversiontotal, datelocal,

                Gender, Age, HowHeightFeet, HowHeightInchs, HowWeight, CardioVascularHealth,
                ChestPain, FatherDiagnosed, MotherDiagnosed, Diabetes, ModerateExercise, Vigorous, Sitting,
                Smoke, Secondhandsmoke, Alcohol, OralContraceptive, Antibiotics, Systolic, Diastolic,
                WaistMen, HipMen, WaistWomen, HipWomen, SideBridgeMen, SideBridgeWomen, DeepSquat, ActiveStraightLegRaise,
                ShoulderMobility, ShoulderClearingTest, SpinalFlexion, SpinalExtension, PushuptestMen, 
                PushuptestModifiedWomen, PushuptestWomen, PushuptestWomenModified, MBThrowMen, MBThrowWomen,
                CoopertestMen, CoopertestWomen, RateFitness, RankFitness, Particpe, 

                Genderpts, Agepts, HowHeightpts, HowWeightpts, CardioVascularHealthpts,
                ChestPainpts, FatherDiagnosedpts, MotherDiagnosedpts, Diabetespts, ModerateExercisepts, Vigorouspts, Sittingpts,
                Smokepts, Secondhandsmokepts, Alcoholpts, OralContraceptivepts, Antibioticspts, Systolicpts, Diastolicpts,
                WaisttoHipMenpts, WaisttoHipWomenpts, SideBridgeMenpts, SideBridgeWomenpts, DeepSquatpts, ActiveStraightLegRaisepts,
                ShoulderMobilitypts, ShoulderClearingTestpts, SpinalFlexionpts, SpinalExtensionpts, PushuptestMenpts,
                PushuptestModifiedWomenpts, PushuptestWomenpts, PushuptestWomenModifiedpts, MBThrowMenpts, MBThrowWomenpts,
                CoopertestMenpts, CoopertestWomenpts, RateFitnesspts, RankFitnesspts, Particpepts,

                firstname, lastname, Planing, Planingpts, SideBridgeMenLeft, SideBridgeWomenLeft

                ) {
                return angular.extend({

                    idform: idform, email: email, userid: userid, total1: total1, total2: total2, total3: total3, grantotal: grantotal,
                    conversiontotal: conversiontotal, datelocal: datelocal,

                    Gender: Gender, Age: Age, HowHeightFeet: HowHeightFeet, HowHeightInchs: HowHeightInchs, HowWeight: HowWeight,
                    CardioVascularHealth: CardioVascularHealth,
                    ChestPain: ChestPain, FatherDiagnosed: FatherDiagnosed, MotherDiagnosed: MotherDiagnosed, Diabetes: Diabetes,
                    ModerateExercise: ModerateExercise, Vigorous: Vigorous, Sitting: Sitting,
                    Smoke: Smoke, Secondhandsmoke: Secondhandsmoke, Alcohol: Alcohol, OralContraceptive: OralContraceptive, Antibiotics: Antibiotics,
                    Systolic: Systolic, Diastolic: Diastolic,
                    WaistMen: WaistMen, HipMen: HipMen, WaistWomen: WaistWomen, HipWomen: HipWomen, SideBridgeMen: SideBridgeMen, SideBridgeWomen: SideBridgeWomen,
                    DeepSquat: DeepSquat, ActiveStraightLegRaise: ActiveStraightLegRaise,
                    ShoulderMobility: ShoulderMobility, ShoulderClearingTest: ShoulderClearingTest, SpinalFlexion: SpinalFlexion, SpinalExtension: SpinalExtension,
                    PushuptestMen: PushuptestMen,
                    PushuptestModifiedWomen: PushuptestModifiedWomen, PushuptestWomen: PushuptestWomen, PushuptestWomenModified: PushuptestWomenModified,
                    MBThrowMen: MBThrowMen, MBThrowWomen: MBThrowWomen,
                    CoopertestMen: CoopertestMen, CoopertestWomen: CoopertestWomen, RateFitness: RateFitness, RankFitness: RankFitness, Particpe: Particpe,

                    Genderpts: Genderpts, Agepts: Agepts, HowHeightpts: HowHeightpts, HowWeightpts: HowWeightpts,
                    CardioVascularHealthpts: CardioVascularHealthpts,
                    ChestPainpts: ChestPainpts, FatherDiagnosedpts: FatherDiagnosedpts, MotherDiagnosedpts: MotherDiagnosedpts, Diabetespts: Diabetespts,
                    ModerateExercisepts: ModerateExercisepts, Vigorouspts: Vigorouspts, Sittingpts: Sittingpts,
                    Smokepts: Smokepts, Secondhandsmokepts: Secondhandsmokepts, Alcoholpts: Alcoholpts, OralContraceptivepts: OralContraceptivepts,
                    Antibioticspts: Antibioticspts, Systolicpts: Systolicpts, Diastolicpts: Diastolicpts,
                    WaisttoHipMenpts: WaisttoHipMenpts, WaisttoHipWomenpts: WaisttoHipWomenpts, SideBridgeMenpts: SideBridgeMenpts,
                    SideBridgeWomenpts: SideBridgeWomenpts, DeepSquatpts: DeepSquatpts, ActiveStraightLegRaisepts: ActiveStraightLegRaisepts,
                    ShoulderMobilitypts: ShoulderMobilitypts, ShoulderClearingTestpts: ShoulderClearingTestpts, SpinalFlexionpts: SpinalFlexionpts,
                    SpinalExtensionpts: SpinalExtensionpts, PushuptestMenpts: PushuptestMenpts,
                    PushuptestModifiedWomenpts: PushuptestModifiedWomenpts, PushuptestWomenpts: PushuptestWomenpts,
                    PushuptestWomenModifiedpts: PushuptestWomenModifiedpts, MBThrowMenpts: MBThrowMenpts, MBThrowWomenpts: MBThrowWomenpts,
                    CoopertestMenpts: CoopertestMenpts, CoopertestWomenpts: CoopertestWomenpts, RateFitnesspts: RateFitnesspts, RankFitnesspts: RankFitnesspts,
                    Particpepts: Particpepts,

                    firstname: firstname, lastname: lastname, Planing: Planing, Planingpts: Planingpts, SideBridgeMenLeft: SideBridgeMenLeft, SideBridgeWomenLeft: SideBridgeWomenLeft

                }, this);
            }
        };

    });

    app.factory('assementsLast20Factory', function () {
        return {
            copy: function (dateLocal, Name, Age, Score, Percentile, Health, Lifestyle, Biodata, Mobility, Fitness, Assessor, Location ) {
                return angular.extend({
                    dateLocal: dateLocal, Name: Name, Age: Age, Score: Score, Percentile: Percentile, Health: Health, Lifestyle: Lifestyle,
                    Biodata: Biodata, Mobility: Mobility, Fitness: Fitness, Assessor: Assessor, Location: Location,
                }, this);
            }
        };

    });

    app.factory('totalAssementsFactory', function () {
        return {
            copy: function (Total, Score, Locations, Age) {
                return angular.extend({
                    Total: Total, Score: Score, Locations: Locations, Age: Age
                }, this);
            }
        };

    });

    app.factory('assementsTopBottomFactory', function () {
        return {
            copy: function (Score, Age, Health, Lifestyle, Biodata, Mobility, Fitness, Assessor) {
                return angular.extend({
                    Score: Score, Age: Age, Health: Health, Lifestyle: Lifestyle,
                    Biodata: Biodata, Mobility: Mobility, Fitness: Fitness, Assessor: Assessor
                }, this);
            }
        };

    });
   
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.UI', []);
})();
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
'use strict'

angular.module('app.forms').value('formsCommon', {
        countries: [
            {key: "244", value: "Aaland Islands"},
            {key: "1", value: "Afghanistan"},
            {key: "2", value: "Albania"},
            {key: "3", value: "Algeria"},
            {key: "4", value: "American Samoa"},
            {key: "5", value: "Andorra"},
            {key: "6", value: "Angola"},
            {key: "7", value: "Anguilla"},
            {key: "8", value: "Antarctica"},
            {key: "9", value: "Antigua and Barbuda"},
            {key: "10", value: "Argentina"},
            {key: "11", value: "Armenia"},
            {key: "12", value: "Aruba"},
            {key: "13", value: "Australia"},
            {key: "14", value: "Austria"},
            {key: "15", value: "Azerbaijan"},
            {key: "16", value: "Bahamas"},
            {key: "17", value: "Bahrain"},
            {key: "18", value: "Bangladesh"},
            {key: "19", value: "Barbados"},
            {key: "20", value: "Belarus"},
            {key: "21", value: "Belgium"},
            {key: "22", value: "Belize"},
            {key: "23", value: "Benin"},
            {key: "24", value: "Bermuda"},
            {key: "25", value: "Bhutan"},
            {key: "26", value: "Bolivia"},
            {key: "245", value: "Bonaire, Sint Eustatius and Saba"},
            {key: "27", value: "Bosnia and Herzegovina"},
            {key: "28", value: "Botswana"},
            {key: "29", value: "Bouvet Island"},
            {key: "30", value: "Brazil"},
            {key: "31", value: "British Indian Ocean Territory"},
            {key: "32", value: "Brunei Darussalam"},
            {key: "33", value: "Bulgaria"},
            {key: "34", value: "Burkina Faso"},
            {key: "35", value: "Burundi"},
            {key: "36", value: "Cambodia"},
            {key: "37", value: "Cameroon"},
            {key: "38", value: "Canada"},
            {key: "251", value: "Canary Islands"},
            {key: "39", value: "Cape Verde"},
            {key: "40", value: "Cayman Islands"},
            {key: "41", value: "Central African Republic"},
            {key: "42", value: "Chad"},
            {key: "43", value: "Chile"},
            {key: "44", value: "China"},
            {key: "45", value: "Christmas Island"},
            {key: "46", value: "Cocos (Keeling) Islands"},
            {key: "47", value: "Colombia"},
            {key: "48", value: "Comoros"},
            {key: "49", value: "Congo"},
            {key: "50", value: "Cook Islands"},
            {key: "51", value: "Costa Rica"},
            {key: "52", value: "Cote D'Ivoire"},
            {key: "53", value: "Croatia"},
            {key: "54", value: "Cuba"},
            {key: "246", value: "Curacao"},
            {key: "55", value: "Cyprus"},
            {key: "56", value: "Czech Republic"},
            {key: "237", value: "Democratic Republic of Congo"},
            {key: "57", value: "Denmark"},
            {key: "58", value: "Djibouti"},
            {key: "59", value: "Dominica"},
            {key: "60", value: "Dominican Republic"},
            {key: "61", value: "East Timor"},
            {key: "62", value: "Ecuador"},
            {key: "63", value: "Egypt"},
            {key: "64", value: "El Salvador"},
            {key: "65", value: "Equatorial Guinea"},
            {key: "66", value: "Eritrea"},
            {key: "67", value: "Estonia"},
            {key: "68", value: "Ethiopia"},
            {key: "69", value: "Falkland Islands (Malvinas)"},
            {key: "70", value: "Faroe Islands"},
            {key: "71", value: "Fiji"},
            {key: "72", value: "Finland"},
            {key: "74", value: "France, skypolitan"},
            {key: "75", value: "French Guiana"},
            {key: "76", value: "French Polynesia"},
            {key: "77", value: "French Southern Territories"},
            {key: "126", value: "FYROM"},
            {key: "78", value: "Gabon"},
            {key: "79", value: "Gambia"},
            {key: "80", value: "Georgia"},
            {key: "81", value: "Germany"},
            {key: "82", value: "Ghana"},
            {key: "83", value: "Gibraltar"},
            {key: "84", value: "Greece"},
            {key: "85", value: "Greenland"},
            {key: "86", value: "Grenada"},
            {key: "87", value: "Guadeloupe"},
            {key: "88", value: "Guam"},
            {key: "89", value: "Guatemala"},
            {key: "241", value: "Guernsey"},
            {key: "90", value: "Guinea"},
            {key: "91", value: "Guinea-Bissau"},
            {key: "92", value: "Guyana"},
            {key: "93", value: "Haiti"},
            {key: "94", value: "Heard and Mc Donald Islands"},
            {key: "95", value: "Honduras"},
            {key: "96", value: "Hong Kong"},
            {key: "97", value: "Hungary"},
            {key: "98", value: "Iceland"},
            {key: "99", value: "India"},
            {key: "100", value: "Indonesia"},
            {key: "101", value: "Iran (Islamic Republic of)"},
            {key: "102", value: "Iraq"},
            {key: "103", value: "Ireland"},
            {key: "104", value: "Israel"},
            {key: "105", value: "Italy"},
            {key: "106", value: "Jamaica"},
            {key: "107", value: "Japan"},
            {key: "240", value: "Jersey"},
            {key: "108", value: "Jordan"},
            {key: "109", value: "Kazakhstan"},
            {key: "110", value: "Kenya"},
            {key: "111", value: "Kiribati"},
            {key: "113", value: "Korea, Republic of"},
            {key: "114", value: "Kuwait"},
            {key: "115", value: "Kyrgyzstan"},
            {key: "116", value: "Lao People's Democratic Republic"},
            {key: "117", value: "Latvia"},
            {key: "118", value: "Lebanon"},
            {key: "119", value: "Lesotho"},
            {key: "120", value: "Liberia"},
            {key: "121", value: "Libyan Arab Jamahiriya"},
            {key: "122", value: "Liechtenstein"},
            {key: "123", value: "Lithuania"},
            {key: "124", value: "Luxembourg"},
            {key: "125", value: "Macau"},
            {key: "127", value: "Madagascar"},
            {key: "128", value: "Malawi"},
            {key: "129", value: "Malaysia"},
            {key: "130", value: "Maldives"},
            {key: "131", value: "Mali"},
            {key: "132", value: "Malta"},
            {key: "133", value: "Marshall Islands"},
            {key: "134", value: "Martinique"},
            {key: "135", value: "Mauritania"},
            {key: "136", value: "Mauritius"},
            {key: "137", value: "Mayotte"},
            {key: "138", value: "Mexico"},
            {key: "139", value: "Micronesia, Federated States of"},
            {key: "140", value: "Moldova, Republic of"},
            {key: "141", value: "Monaco"},
            {key: "142", value: "Mongolia"},
            {key: "242", value: "Montenegro"},
            {key: "143", value: "Montserrat"},
            {key: "144", value: "Morocco"},
            {key: "145", value: "Mozambique"},
            {key: "146", value: "Myanmar"},
            {key: "147", value: "Namibia"},
            {key: "148", value: "Nauru"},
            {key: "149", value: "Nepal"},
            {key: "150", value: "Netherlands"},
            {key: "151", value: "Netherlands Antilles"},
            {key: "152", value: "New Caledonia"},
            {key: "153", value: "New Zealand"},
            {key: "154", value: "Nicaragua"},
            {key: "155", value: "Niger"},
            {key: "156", value: "Nigeria"},
            {key: "157", value: "Niue"},
            {key: "158", value: "Norfolk Island"},
            {key: "112", value: "North Korea"},
            {key: "159", value: "Northern Mariana Islands"},
            {key: "160", value: "Norway"},
            {key: "161", value: "Oman"},
            {key: "162", value: "Pakistan"},
            {key: "163", value: "Palau"},
            {key: "247", value: "Palestinian Territory, Occupied"},
            {key: "164", value: "Panama"},
            {key: "165", value: "Papua New Guinea"},
            {key: "166", value: "Paraguay"},
            {key: "167", value: "Peru"},
            {key: "168", value: "Philippines"},
            {key: "169", value: "Pitcairn"},
            {key: "170", value: "Poland"},
            {key: "171", value: "Portugal"},
            {key: "172", value: "Puerto Rico"},
            {key: "173", value: "Qatar"},
            {key: "174", value: "Reunion"},
            {key: "175", value: "Romania"},
            {key: "176", value: "Russian Federation"},
            {key: "177", value: "Rwanda"},
            {key: "178", value: "Saint Kitts and Nevis"},
            {key: "179", value: "Saint Lucia"},
            {key: "180", value: "Saint Vincent and the Grenadines"},
            {key: "181", value: "Samoa"},
            {key: "182", value: "San Marino"},
            {key: "183", value: "Sao Tome and Principe"},
            {key: "184", value: "Saudi Arabia"},
            {key: "185", value: "Senegal"},
            {key: "243", value: "Serbia"},
            {key: "186", value: "Seychelles"},
            {key: "187", value: "Sierra Leone"},
            {key: "188", value: "Singapore"},
            {key: "189", value: "Slovak Republic"},
            {key: "190", value: "Slovenia"},
            {key: "191", value: "Solomon Islands"},
            {key: "192", value: "Somalia"},
            {key: "193", value: "South Africa"},
            {key: "194", value: "South Georgia &amp; South Sandwich Islands"},
            {key: "248", value: "South Sudan"},
            {key: "195", value: "Spain"},
            {key: "196", value: "Sri Lanka"},
            {key: "249", value: "St. Barthelemy"},
            {key: "197", value: "St. Helena"},
            {key: "250", value: "St. Martin (French part)"},
            {key: "198", value: "St. Pierre and Miquelon"},
            {key: "199", value: "Sudan"},
            {key: "200", value: "Suriname"},
            {key: "201", value: "Svalbard and Jan Mayen Islands"},
            {key: "202", value: "Swaziland"},
            {key: "203", value: "Sweden"},
            {key: "204", value: "Switzerland"},
            {key: "205", value: "Syrian Arab Republic"},
            {key: "206", value: "Taiwan"},
            {key: "207", value: "Tajikistan"},
            {key: "208", value: "Tanzania, United Republic of"},
            {key: "209", value: "Thailand"},
            {key: "210", value: "Togo"},
            {key: "211", value: "Tokelau"},
            {key: "212", value: "Tonga"},
            {key: "213", value: "Trinidad and Tobago"},
            {key: "214", value: "Tunisia"},
            {key: "215", value: "Turkey"},
            {key: "216", value: "Turkmenistan"},
            {key: "217", value: "Turks and Caicos Islands"},
            {key: "218", value: "Tuvalu"},
            {key: "219", value: "Uganda"},
            {key: "220", value: "Ukraine"},
            {key: "221", value: "United Arab Emirates"},
            {key: "222", value: "United Kingdom"},
            {key: "223", value: "United States"},
            {key: "224", value: "United States Minor Outlying Islands"},
            {key: "225", value: "Uruguay"},
            {key: "226", value: "Uzbekistan"},
            {key: "227", value: "Vanuatu"},
            {key: "228", value: "Vatican City State (Holy See)"},
            {key: "229", value: "Venezuela"},
            {key: "230", value: "Viet Nam"},
            {key: "231", value: "Virgin Islands (British)"},
            {key: "232", value: "Virgin Islands (U.S.)"},
            {key: "233", value: "Wallis and Futuna Islands"},
            {key: "234", value: "Western Sahara"},
            {key: "235", value: "Yemen"},
            {key: "238", value: "Zambia"},
            {key: "239", value: "Zimbabwe"}
        ],
        validateOptions: {
            errorElement: 'em',
            errorClass: 'invalid',
            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).parent().addClass('state-error').removeClass('state-success');

            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).parent().removeClass('state-error').addClass('state-success');
            },
            errorPlacement : function(error, element) {
                error.insertAfter(element.parent());
            }
        }
    });
"use strict";

angular.module('app.auth').directive('loginInfo', function (User, $rootScope) {

    return {
        restrict: 'A',
        templateUrl: 'app/auth/directives/login-info.tpl.html',
        link: function(scope, element){
            User.initialized.then(function(){
                scope.username = $rootScope.userInfo
            });
        }
    }
})

"use strict";

angular.module('app.auth').controller('LoginCtrl', function ($scope, $state, GooglePlus, User, ezfb) {

    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
        if (authResult.status.method == 'PROMPT') {
            GooglePlus.getUser().then(function (user) {
                User.username = user.name;
                User.picture = user.picture;
                $state.go('app.dashboard');
            });
        }
    });

    $scope.$on('event:facebook-signin-success', function (event, authResult) {
        ezfb.api('/me', function (res) {
            User.username = res.name;
            User.picture = 'https://graph.facebook.com/' + res.id + '/picture';
            $state.go('app.dashboard');
        });
    });
})



'use strict';

angular.module('app.auth').factory('User', function ($http, $q, APP_CONFIG) {
    var dfd = $q.defer();

    var UserModel = {
        initialized: dfd.promise,
        username: undefined,
        picture: undefined
    };
     $http.get(APP_CONFIG.apiRootUrl + '/user.json').then(function(response){
         UserModel.username = response.data.username;
         UserModel.picture= response.data.picture;
         dfd.resolve(UserModel)
     });

    return UserModel;
});

"use strict";	

angular.module('app').controller("ActivitiesCtrl", function ActivitiesCtrl($scope, $log, activityService){

	$scope.activeTab = 'default';
	$scope.currentActivityItems = [];
	
	// Getting different type of activites
	activityService.get(function(data){

		$scope.activities = data.activities;
		
	});


	$scope.isActive = function(tab){
		return $scope.activeTab === tab;
	};

	$scope.setTab = function(activityType){
		$scope.activeTab = activityType;

		activityService.getbytype(activityType, function(data) {

			$scope.currentActivityItems = data.data;

		});

	};

});
"use strict";

angular.module('app').directive('activitiesDropdownToggle', function($log) {

	var link = function($scope,$element, attrs){
		var ajax_dropdown = null;

		$element.on('click',function(){
			var badge = $(this).find('.badge');

			if (badge.hasClass('bg-color-red')) {

				badge.removeClass('bg-color-red').text(0);

			}

			ajax_dropdown = $(this).next('.ajax-dropdown');

			if (!ajax_dropdown.is(':visible')) {

				ajax_dropdown.fadeIn(150);

				$(this).addClass('active');

			}
			 else {
				
				ajax_dropdown.fadeOut(150);
				
				$(this).removeClass('active');

			}

		})

		$(document).mouseup(function(e) {
			if (ajax_dropdown && !ajax_dropdown.is(e.target) && ajax_dropdown.has(e.target).length === 0) {
				ajax_dropdown.fadeOut(150);
				$element.removeClass('active');
			}
		});
	}
	
	return{
		restrict:'EA',
		link:link
	}
});
"use strict";

angular.module('app').factory('activityService', function($http, $log, APP_CONFIG) {

	function getActivities(callback){

		$http.get(APP_CONFIG.apiRootUrl + '/activities/activity.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getActivitiesByType(type, callback){

		$http.get(APP_CONFIG.apiRootUrl + '/activities/activity-' + type + '.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}
	
	return{
		get:function(callback){
			getActivities(callback);
		},
		getbytype:function(type,callback){
			getActivitiesByType(type, callback);
		}
	}
});
"use strict";

angular.module('app').factory('Project', function($http, APP_CONFIG){
    return {
        list: $http.get(APP_CONFIG.apiRootUrl + '/projects.json')
    }
});
"use strict";

angular.module('app').directive('recentProjects', function(Project){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/dashboard/projects/recent-projects.tpl.html",
        scope: true,
        link: function(scope, element){

            Project.list.then(function(response){
                scope.projects = response.data;
            });
            scope.clearProjects = function(){
                scope.projects = [];
            }
        }
    }
});
"use strict";

angular.module('app').controller('TodoCtrl', function ($scope, $timeout, Todo) {
    $scope.newTodo = undefined;

    $scope.states = ['Critical', 'Important', 'Completed'];

    $scope.todos = Todo.getList().$object;

    // $scope.$watch('todos', function(){ }, true)

    $scope.toggleAdd = function () {
        if (!$scope.newTodo) {
            $scope.newTodo = {
                state: 'Important'
            };
        } else {
            $scope.newTodo = undefined;
        }
    };

    $scope.createTodo = function () {
        $scope.todos.push(
           Todo.normalize($scope.newTodo)
        );
        $scope.newTodo = undefined;

    };

    $scope.deleteTodo = function (todo) {
        todo.remove().then(function () {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
        });

    };

});

"use strict";

angular.module('app.forms').controller('FormLayoutsCtrl', function($scope, $modal, $log){

    $scope.openModal = function () {
        var modalInstance = $modal.open({
            templateUrl: 'app/forms/views/form-layout-modal.html',
            controller: 'ModalDemoCtrl' 
        });

        modalInstance.result.then(function () {
            $log.info('Modal closed at: ' + new Date());

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });


    };

    $scope.registration = {};

    $scope.$watch('registration.date', function(changed){
        console.log('registration model changed', $scope.registration)
    })


});

"use strict";

angular.module('app.forms').controller('FormPluginsCtrl', function($scope, $log){

	$scope.editableOptions =  {
		mode: 'popup',
		disabled: false
	};

	$scope.toggleInline = function() {
		if($scope.editableOptions.mode == 'popup') {
			$scope.editableOptions.mode = 'inline';
		}
		else {
			$scope.editableOptions.mode = 'popup'
		}
	};

	$scope.toggleDisabled = function() {
		$scope.editableOptions.disabled = !$scope.editableOptions.disabled;
	};


	$scope.datepickerOptions = {
		changeMonth: true,
		changeYear: true
	}
});
"use strict";


angular.module('app.forms').controller('FormWizardCtrl', function($scope){

    $scope.wizard1CompleteCallback = function(wizardData){
        console.log('wizard1CompleteCallback', wizardData);
        $.smallBox({
            title: "Congratulations! Smart wizard finished",
            content: "<i class='fa fa-clock-o'></i> <i>1 seconds ago...</i>",
            color: "#5F895F",
            iconSmall: "fa fa-check bounce animated",
            timeout: 4000
        });
    };

    $scope.wizard2CompleteCallback = function(wizardData){
        console.log('wizard2CompleteCallback', wizardData);
        $.smallBox({
            title: "Congratulations! Smart fuekux wizard finished",
            content: "<i class='fa fa-clock-o'></i> <i>1 seconds ago...</i>",
            color: "#5F895F",
            iconSmall: "fa fa-check bounce animated",
            timeout: 4000
        });

    };

});
"use strict";

angular.module('app.forms').controller('FormXeditableCtrl', function($scope, $log){

    $scope.username = 'superuser';
    $scope.firstname = null;
    $scope.sex = 'not selected';
    $scope.group = "Admin";
    $scope.vacation = "25.02.2013";
    $scope.combodate = "15/05/1984";
    $scope.event = null;
    $scope.comments = 'awesome user!';
    $scope.state2 = 'California';
    $scope.fruits = 'peach<br/>apple';
    

    $scope.fruits_data = [
        {value: 'banana', text: 'banana'},
        {value: 'peach', text: 'peach'},
        {value: 'apple', text: 'apple'},
        {value: 'watermelon', text: 'watermelon'},
        {value: 'orange', text: 'orange'}]
    ;


    $scope.genders =  [
        {value: 'not selected', text: 'not selected'},
        {value: 'Male', text: 'Male'},
        {value: 'Female', text: 'Female'}
    ];

    $scope.groups =  [
        {value: 'Guest', text: 'Guest'},
        {value: 'Service', text: 'Service'},
        {value: 'Customer', text: 'Customer'},
        {value: 'Operator', text: 'Operator'},
        {value: 'Support', text: 'Support'},
        {value: 'Admin', text: 'Admin'}
    ]; 

});
"use strict";


angular.module('app.forms').controller('ImageEditorCtrl', function ($scope) {

    // api tab
    $scope.apiDemoSelection = [100, 100, 400, 300];

    $scope.apiDemoOptions = {
        allowSelect: true,
        allowResize: true,
        allowMove: true,
        animate: false
    };

    $scope.apiRandomSelection = function () {
        $scope.apiDemoOptions.animate = false;
        $scope.apiDemoSelection = [
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400)
        ]
    };

    $scope.apiRandomAnimation = function () {
        $scope.apiDemoOptions.animate = true;
        $scope.apiDemoSelection = [
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400)
        ]
    };

    $scope.apiReleaseSelection = function () {
        $scope.apiDemoOptions.animate = true;
        $scope.apiDemoSelection = 'release';
    };


    $scope.apiToggleDisable = function () {
        $scope.apiDemoOptions.disabled = !$scope.apiDemoOptions.disabled;
    };

    $scope.apiToggleDestroy = function () {
        $scope.apiDemoOptions.destroyed = !$scope.apiDemoOptions.destroyed;
    };

    $scope.apiDemoShowAspect = false;
    $scope.apiDemoToggleAspect = function () {
        $scope.apiDemoShowAspect = !$scope.apiDemoShowAspect;
        if ($scope.apiDemoShowAspect)
            $scope.apiDemoOptions.aspectRatio = 4 / 3;
        else
            $scope.apiDemoOptions.aspectRatio = 0;
    };

    $scope.apiDemoShowSizeRestrict = false;
    $scope.apiDemoToggleSizeRestrict = function () {
        $scope.apiDemoShowSizeRestrict = !$scope.apiDemoShowSizeRestrict;
        if ($scope.apiDemoShowSizeRestrict) {
            $scope.apiDemoOptions.minSizeWidth = 80;
            $scope.apiDemoOptions.minSizeHeight = 80;
            $scope.apiDemoOptions.maxSizeWidth = 350;
            $scope.apiDemoOptions.maxSizeHeight = 350;
        } else {
            $scope.apiDemoOptions.minSizeWidth = 0;
            $scope.apiDemoOptions.minSizeHeight = 0;
            $scope.apiDemoOptions.maxSizeWidth = 0;
            $scope.apiDemoOptions.maxSizeHeight = 0;
        }

    };


    $scope.setApiDemoImage = function (image) {
        $scope.apiDemoImage = image;
        $scope.apiDemoOptions.src = image.src;
        $scope.apiDemoOptions.bgOpacity = image.bgOpacity;
        $scope.apiDemoOptions.outerImage = image.outerImage;
        $scope.apiRandomAnimation();
    };

    $scope.apiDemoImages = [
        {
            name: 'Lego',
            src: 'styles/img/superbox/superbox-full-24.jpg',
            bgOpacity: .6
        },
        {
            name: 'Breakdance',
            src: 'styles/img/superbox/superbox-full-7.jpg',
            bgOpacity: .6
        },
        {
            name: 'Dragon Fly',
            src: 'styles/img/superbox/superbox-full-20.jpg',
            bgOpacity: 1,
            outerImage: 'styles/img/superbox/superbox-full-20-bw.jpg'
        }
    ];

    $scope.apiDemoImage = $scope.apiDemoImages[1];

    // animations tab
    $scope.animationsDemoOptions = {
        bgOpacity: undefined,
        bgColor: undefined,
        bgFade: true,
        shade: false,
        animate: true
    };
    $scope.animationsDemoSelection = undefined;
    $scope.selections = {
        1: [217, 122, 382, 284],
        2: [20, 20, 580, 380],
        3: [24, 24, 176, 376],
        4: [347, 165, 550, 355],
        5: [136, 55, 472, 183],
        Release: 'release'
    };

    $scope.opacities = {
        Low: .2,
        Mid: .5,
        High: .8,
        Full: 1
    };

    $scope.colors = {
        R: '#900',
        B: '#4BB6F0',
        Y: '#F0B207',
        G: '#46B81C',
        W: 'white',
        K: 'black'
    };


    // styling tab

    $scope.styles = [
        {
            name: 'jcrop-light',
            bgFade: true,
            animate: true,
            selection: [130, 65, 130 + 350, 65 + 285],
            bgColor: 'white',
            bgOpacity: 0.5
        },
        {
            name: 'jcrop-dark',
            bgFade: true,
            animate: true,
            selection: [130, 65, 130 + 350, 65 + 285],
            bgColor: 'black',
            bgOpacity: 0.4
        },
        {
            name: 'jcrop-normal',
            bgFade: true,
            animate: true,
            selection: [130, 65, 130 + 350, 65 + 285],
            bgColor: 'black',
            bgOpacity: 0.6
        }
    ];

    $scope.demoStyle = $scope.styles[0]
});
'use strict'

angular.module('app.forms').controller('ModalDemoCtrl', function($scope, $modalInstance){
    $scope.closeModal = function(){
        $modalInstance.dismiss('cancel');
    }
});
"use strict";

angular.module('app').controller("LanguagesCtrl",  function LanguagesCtrl($scope, $rootScope, $log, Language){

    $rootScope.lang = {};
    
    Language.getLanguages(function(data){

        $rootScope.currentLanguage = data[0];

        $rootScope.languages = data;

        Language.getLang(data[0].key,function(data){

            $rootScope.lang = data;
        });

    });

    $scope.selectLanguage = function(language){
        $rootScope.currentLanguage = language;
        
        Language.getLang(language.key,function(data){

            $rootScope.lang = data;
            
        });
    }

    $rootScope.getWord = function(key){
        if(angular.isDefined($rootScope.lang[key])){
            return $rootScope.lang[key];
        } 
        else {
            return key;
        }
    }

});
"use strict";

angular.module('app').factory('Language', function($http, APP_CONFIG){

	function getLanguage(key, callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/langs/' + key + '.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getLanguages(callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/languages.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	return {
		getLang: function(type, callback) {
			getLanguage(type, callback);
		},
		getLanguages:function(callback){
			getLanguages(callback);
		}
	}

});
"use strict";

angular.module('app').directive('languageSelector', function(Language){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/layout/language/language-selector.tpl.html",
        scope: true
    }
});
"use strict";

angular.module('app').directive('toggleShortcut', function($log,$timeout) {

	var initDomEvents = function($element){

		var shortcut_dropdown = $('#shortcut');

		$element.on('click',function(){
		
			if (shortcut_dropdown.is(":visible")) {
				shortcut_buttons_hide();
			} else {
				shortcut_buttons_show();
			}

		})

		shortcut_dropdown.find('a').click(function(e) {
			e.preventDefault();
			window.location = $(this).attr('href');
			setTimeout(shortcut_buttons_hide, 300);
		});

		

		// SHORTCUT buttons goes away if mouse is clicked outside of the area
		$(document).mouseup(function(e) {
			if (shortcut_dropdown && !shortcut_dropdown.is(e.target) && shortcut_dropdown.has(e.target).length === 0) {
				shortcut_buttons_hide();
			}
		});

		// SHORTCUT ANIMATE HIDE
		function shortcut_buttons_hide() {
			shortcut_dropdown.animate({
				height : "hide"
			}, 300, "easeOutCirc");
			$('body').removeClass('shortcut-on');

		}

		// SHORTCUT ANIMATE SHOW
		function shortcut_buttons_show() {
			shortcut_dropdown.animate({
				height : "show"
			}, 200, "easeOutCirc");
			$('body').addClass('shortcut-on');
		}
	}

	var link = function($scope,$element){
		$timeout(function(){
			initDomEvents($element);
		});
	}

	return{
		restrict:'EA',
		link:link
	}
})
/**
 * Created by griga on 2/9/16.
 */


angular.module('app.tables').controller('DatatablesCtrl', function(DTOptionsBuilder, DTColumnBuilder){


    this.standardOptions = DTOptionsBuilder
        .fromSource('api/tables/datatables.standard.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.standardColumns = [
        DTColumnBuilder.newColumn('id').withClass('text-danger'),
        DTColumnBuilder.newColumn('name'),
        DTColumnBuilder.newColumn('phone'),
        DTColumnBuilder.newColumn('company'),
        DTColumnBuilder.newColumn('zip'),
        DTColumnBuilder.newColumn('city'),
        DTColumnBuilder.newColumn('date')
    ];


});
'use strict';

angular.module('app.tables').controller('JqGridCtrl', function ($scope) {
    $scope.gridData = {
        data: [
            {
                id: "1",
                date: "2007-10-01",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "2",
                date: "2007-10-02",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "3",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "4",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "5",
                date: "2007-10-05",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "6",
                date: "2007-09-06",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "7",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "8",
                date: "2007-10-03",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "9",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "10",
                date: "2007-10-01",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "11",
                date: "2007-10-02",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "12",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "13",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "14",
                date: "2007-10-05",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "15",
                date: "2007-09-06",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "16",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "17",
                date: "2007-10-03",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "18",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            }
        ],
        colNames: ['Actions', 'Inv No', 'Date', 'Client', 'Amount', 'Tax', 'Total', 'Notes'],
        colModel: [
            {
                name: 'act',
                index: 'act',
                sortable: false
            },
            {
                name: 'id',
                index: 'id'
            },
            {
                name: 'date',
                index: 'date',
                editable: true
            },
            {
                name: 'name',
                index: 'name',
                editable: true
            },
            {
                name: 'amount',
                index: 'amount',
                align: "right",
                editable: true
            },
            {
                name: 'tax',
                index: 'tax',
                align: "right",
                editable: true
            },
            {
                name: 'total',
                index: 'total',
                align: "right",
                editable: true
            },
            {
                name: 'note',
                index: 'note',
                sortable: false,
                editable: true
            }
        ]
    }


    $scope.getSelection = function(){
        alert(jQuery('table').jqGrid('getGridParam', 'selarrrow'));
    };

    $scope.selectRow = function(row){
       jQuery('table').jqGrid('setSelection', row);

    }
});
"use strict";

angular.module('app.ui').controller('GeneralElementsCtrl', function ($scope, $sce) {
    /*
     * Smart Notifications
     */
    $scope.eg1 = function () {

        $.bigBox({
            title: "Big Information box",
            content: "This message will dissapear in 6 seconds!",
            color: "#C46A69",
            //timeout: 6000,
            icon: "fa fa-warning shake animated",
            number: "1",
            timeout: 6000
        });
    };

    $scope.eg2 = function () {

        $.bigBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#3276B1",
            //timeout: 8000,
            icon: "fa fa-bell swing animated",
            number: "2"
        });

    };

    $scope.eg3 = function () {

        $.bigBox({
            title: "Shield is up and running!",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#C79121",
            //timeout: 8000,
            icon: "fa fa-shield fadeInLeft animated",
            number: "3"
        });

    };

    $scope.eg4 = function () {

        $.bigBox({
            title: "Success Message Example",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#739E73",
            //timeout: 8000,
            icon: "fa fa-check",
            number: "4"
        }, function () {
            $scope.closedthis();
        });

    };


    $scope.eg5 = function() {

        $.smallBox({
            title: "Ding Dong!",
            content: "Someone's at the door...shall one get it sir? <p class='text-align-right'><a href-void class='btn btn-primary btn-sm'>Yes</a> <a href-void class='btn btn-danger btn-sm'>No</a></p>",
            color: "#296191",
            //timeout: 8000,
            icon: "fa fa-bell swing animated"
        });
    };


    $scope.eg6 = function() {

        $.smallBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#5384AF",
            //timeout: 8000,
            icon: "fa fa-bell"
        });

    };

    $scope.eg7 = function() {

        $.smallBox({
            title: "James Simmons liked your comment",
            content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
            color: "#296191",
            iconSmall: "fa fa-thumbs-up bounce animated",
            timeout: 4000
        });

    };

    $scope.closedthis = function() {
        $.smallBox({
            title: "Great! You just closed that last alert!",
            content: "This message will be gone in 5 seconds!",
            color: "#739E73",
            iconSmall: "fa fa-cloud",
            timeout: 5000
        });
    };

    /*
     * SmartAlerts
     */
    // With Callback
    $scope.smartModEg1 =  function () {
        $.SmartMessageBox({
            title: "Smart Alert!",
            content: "This is a confirmation box. Can be programmed for button callback",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed === "Yes") {

                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed Yes...</i>",
                    color: "#659265",
                    iconSmall: "fa fa-check fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }
            if (ButtonPressed === "No") {
                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed No...</i>",
                    color: "#C46A69",
                    iconSmall: "fa fa-times fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }

        });
    };

    // With Input
    $scope.smartModEg2 =  function () {
        $.SmartMessageBox({
            title: "Smart Alert: Input",
            content: "Please enter your user name",
            buttons: "[Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });
    };

    // With Buttons
    $scope.smartModEg3 =  function () {
        $.SmartMessageBox({
            title: "Smart Notification: Buttons",
            content: "Lots of buttons to go...",
            buttons: '[Need?][You][Do][Buttons][Many][How]'
        });

    }
    // With Select
    $scope.smartModEg4 =  function () {
        $.SmartMessageBox({
            title: "Smart Alert: Select",
            content: "You can even create a group of options.",
            buttons: "[Done]",
            input: "select",
            options: "[Costa Rica][United States][Autralia][Spain]"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });

    };

    // With Login
    $scope.smartModEg5 =  function () {

        $.SmartMessageBox({
            title: "Login form",
            content: "Please enter your user name",
            buttons: "[Cancel][Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            if (ButtonPress == "Cancel") {
                alert("Why did you cancel that? :(");
                return 0;
            }

            var Value1 = Value.toUpperCase();
            var ValueOriginal = Value;
            $.SmartMessageBox({
                title: "Hey! <strong>" + Value1 + ",</strong>",
                content: "And now please provide your password:",
                buttons: "[Login]",
                input: "password",
                placeholder: "Password"
            }, function (ButtonPress, Value) {
                alert("Username: " + ValueOriginal + " and your password is: " + Value);
            });
        });

    };

    $scope.tabsPopoverContent = $sce.trustAsHtml("<ul id='popup-tab' class='nav nav-tabs bordered'><li class='active'><a href='#pop-1' data-toggle='tab'>Active Tab </a></li><li><a href='#pop-2' data-toggle='tab'>Tab 2</a></li></ul><div id='popup-tab-content' class='tab-content padding-10'><div class='tab-pane fade in active' id='pop-1'><p>I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.</p></div><div class='tab-pane fade' id='pop-2'><p>Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. wes anderson artisan four loko farm-to-table craft beer twee.</p></div></div>")

    $scope.formPopoverContent = $sce.trustAsHtml("<form action='/api/plug' style='min-width:170px'><div class='checkbox'><label><input type='checkbox' class='checkbox style-0' checked='checked'><span>Read</span></label></div><div class='checkbox'><label><input type='checkbox' class='checkbox style-0'><span>Write</span></label></div><div class='checkbox'><label><input type='checkbox' class='checkbox style-0'><span>Execute</span></label></div><div class='form-actions'><div class='row'><div class='col-md-12'><button class='btn btn-primary btn-sm' type='submit'>SAVE</button></div></div></div></form>")

});

"use strict";


angular.module('app.ui').controller('JquiCtrl', function ($scope) {
    $scope.demoAutocompleteWords = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"];


    $scope.demoAjaxAutocomplete = '';


    $scope.modalDemo1 = function(){
        console.log('modalDemo1');
    }

    $scope.modalDemo2 = function(){
        console.log('modalDemo2');
    }


});
"use strict";


angular.module('app.ui').controller('TreeviewCtrl', function ($scope) {
    $scope.demoTree1 = [
        {"content": "<span><i class=\"fa fa-lg fa-calendar\"></i> 2013, Week 2</span>", "expanded": true, "children": [
            {"content": "<span class=\"label label-success\"><i class=\"fa fa-lg fa-plus-circle\"></i> Monday, January 7: 8.00 hours</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 8.00</span> &ndash; <a> Changed CSS to accomodate...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 8.00</span> &ndash; <a> Changed CSS to accomodate...</a>"},
            {"content": "<span class=\"label label-success\"><i class=\"fa fa-lg fa-minus-circle\"></i> Tuesday, January 8: 8.00 hours</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 6.00</span> &ndash; <a> Altered code...</a>"},
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Simplified our approach to...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 6.00</span> &ndash; <a> Altered code...</a>"},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Simplified our approach to...</a>"},
            {"content": "<span class=\"label label-warning\"><i class=\"fa fa-lg fa-minus-circle\"></i> Wednesday, January 9: 6.00 hours</span>", "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Fixed bug caused by...</a>"},
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Comitting latest code to Git...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Fixed bug caused by...</a>"},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Comitting latest code to Git...</a>"},
            {"content": "<span class=\"label label-danger\"><i class=\"fa fa-lg fa-minus-circle\"></i> Wednesday, January 9: 4.00 hours</span>", "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Create component that...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Create component that...</a>"}
        ]},
        {"content": "<span><i class=\"fa fa-lg fa-calendar\"></i> 2013, Week 3</span>", "children": [
            {"content": "<span class=\"label label-success\"><i class=\"fa fa-lg fa-minus-circle\"></i> Monday, January 14: 8.00 hours</span>", "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 7.75</span> &ndash; <a> Writing documentation...</a>"},
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 0.25</span> &ndash; <a> Reverting code back to...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 7.75</span> &ndash; <a> Writing documentation...</a>"},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 0.25</span> &ndash; <a> Reverting code back to...</a>"}
        ]}
    ]

    $scope.demoTree2 = [
        {"content": "<span><i class=\"fa fa-lg fa-folder-open\"></i> Parent</span>", "expanded": true, "children": [
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Administrators</span>", "expanded": true, "children": [
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" name=\"checkbox-inline\"><i></i>Michael.Jackson</label> </span>"},
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Sunny.Ahmed</label> </span>"},
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Jackie.Chan</label> </span>"}
            ]},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" name=\"checkbox-inline\"><i></i>Michael.Jackson</label> </span>"},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Sunny.Ahmed</label> </span>"},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Jackie.Chan</label> </span>"},
            {"content": "<span><i class=\"fa fa-lg fa-minus-circle\"></i> Child</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Grand Child</span>",  "children": [
                    {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                        {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                        {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                    ]},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Grand Child</span>", "children": [
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
        ]},
        {"content": "<span><i class=\"fa fa-lg fa-folder-open\"></i> Parent2</span>", "children": [
            {"content": "<span><i class=\"icon-leaf\"></i> Child</span>"}
        ]}
    ]
});
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/dashboard/live-feeds.tpl.html","<div jarvis-widget id=\"live-feeds-widget\" data-widget-togglebutton=\"false\" data-widget-editbutton=\"false\"\r\n     data-widget-fullscreenbutton=\"false\" data-widget-colorbutton=\"false\" data-widget-deletebutton=\"false\">\r\n<!-- widget options:\r\nusage: <div class=\"jarviswidget\" id=\"wid-id-0\" data-widget-editbutton=\"false\">\r\n\r\ndata-widget-colorbutton=\"false\"\r\ndata-widget-editbutton=\"false\"\r\ndata-widget-togglebutton=\"false\"\r\ndata-widget-deletebutton=\"false\"\r\ndata-widget-fullscreenbutton=\"false\"\r\ndata-widget-custombutton=\"false\"\r\ndata-widget-collapsed=\"true\"\r\ndata-widget-sortable=\"false\"\r\n\r\n-->\r\n<header>\r\n    <span class=\"widget-icon\"> <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\r\n\r\n    <h2>Live Feeds </h2>\r\n\r\n    <ul class=\"nav nav-tabs pull-right in\" id=\"myTab\">\r\n        <li class=\"active\">\r\n            <a data-toggle=\"tab\" href=\"#s1\"><i class=\"fa fa-clock-o\"></i> <span class=\"hidden-mobile hidden-tablet\">Live Stats</span></a>\r\n        </li>\r\n\r\n        <li>\r\n            <a data-toggle=\"tab\" href=\"#s2\"><i class=\"fa fa-facebook\"></i> <span class=\"hidden-mobile hidden-tablet\">Social Network</span></a>\r\n        </li>\r\n\r\n        <li>\r\n            <a data-toggle=\"tab\" href=\"#s3\"><i class=\"fa fa-dollar\"></i> <span class=\"hidden-mobile hidden-tablet\">Revenue</span></a>\r\n        </li>\r\n    </ul>\r\n\r\n</header>\r\n\r\n<!-- widget div-->\r\n<div class=\"no-padding\">\r\n\r\n    <div class=\"widget-body\">\r\n        <!-- content -->\r\n        <div id=\"myTabContent\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade active in padding-10 no-padding-bottom\" id=\"s1\">\r\n                <div class=\"row no-space\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\r\n														<span class=\"demo-liveupdate-1\"> <span\r\n                                                                class=\"onoffswitch-title\">Live switch</span> <span\r\n                                                                class=\"onoffswitch\">\r\n																<input type=\"checkbox\" name=\"start_interval\" ng-model=\"autoUpdate\"\r\n                                                                       class=\"onoffswitch-checkbox\" id=\"start_interval\">\r\n																<label class=\"onoffswitch-label\" for=\"start_interval\">\r\n                                                                    <span class=\"onoffswitch-inner\"\r\n                                                                          data-swchon-text=\"ON\"\r\n                                                                          data-swchoff-text=\"OFF\"></span>\r\n                                                                    <span class=\"onoffswitch-switch\"></span>\r\n                                                                </label> </span> </span>\r\n\r\n                        <div id=\"updating-chart\" class=\"chart-large txt-color-blue\" flot-basic flot-data=\"liveStats\" flot-options=\"liveStatsOptions\"></div>\r\n\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> My Tasks <span\r\n                                    class=\"pull-right\">130/200</span> </span>\r\n\r\n                                <div class=\"progress\">\r\n                                    <div class=\"progress-bar bg-color-blueDark\" style=\"width: 65%;\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> Transfered <span\r\n                                    class=\"pull-right\">440 GB</span> </span>\r\n\r\n                                <div class=\"progress\">\r\n                                    <div class=\"progress-bar bg-color-blue\" style=\"width: 34%;\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> Bugs Squashed<span\r\n                                    class=\"pull-right\">77%</span> </span>\r\n\r\n                                <div class=\"progress\">\r\n                                    <div class=\"progress-bar bg-color-blue\" style=\"width: 77%;\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> User Testing <span\r\n                                    class=\"pull-right\">7 Days</span> </span>\r\n\r\n                                <div class=\"progress\">\r\n                                    <div class=\"progress-bar bg-color-greenLight\" style=\"width: 84%;\"></div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <span class=\"show-stat-buttons\"> <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"> <a\r\n                                    href-void class=\"btn btn-default btn-block hidden-xs\">Generate PDF</a> </span> <span\r\n                                    class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"> <a href-void\r\n                                                                                     class=\"btn btn-default btn-block hidden-xs\">Report\r\n                                a bug</a> </span> </span>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"show-stat-microcharts\" data-sparkline-container data-easy-pie-chart-container>\r\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\r\n\r\n                        <div class=\"easy-pie-chart txt-color-orangeDark\" data-percent=\"33\" data-pie-size=\"50\">\r\n                            <span class=\"percent percent-sign\">35</span>\r\n                        </div>\r\n                        <span class=\"easy-pie-title\"> Server Load <i class=\"fa fa-caret-up icon-color-bad\"></i> </span>\r\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\r\n                            <li>\r\n                                <span class=\"label bg-color-greenLight\"><i class=\"fa fa-caret-up\"></i> 97%</span>\r\n                            </li>\r\n                            <li>\r\n                                <span class=\"label bg-color-blueLight\"><i class=\"fa fa-caret-down\"></i> 44%</span>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"sparkline txt-color-greenLight hidden-sm hidden-md pull-right\"\r\n                             data-sparkline-type=\"line\" data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\r\n                             data-fill-color=\"transparent\">\r\n                            130, 187, 250, 257, 200, 210, 300, 270, 363, 247, 270, 363, 247\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\r\n                        <div class=\"easy-pie-chart txt-color-greenLight\" data-percent=\"78.9\" data-pie-size=\"50\">\r\n                            <span class=\"percent percent-sign\">78.9 </span>\r\n                        </div>\r\n                        <span class=\"easy-pie-title\"> Disk Space <i class=\"fa fa-caret-down icon-color-good\"></i></span>\r\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\r\n                            <li>\r\n                                <span class=\"label bg-color-blueDark\"><i class=\"fa fa-caret-up\"></i> 76%</span>\r\n                            </li>\r\n                            <li>\r\n                                <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 3%</span>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"sparkline txt-color-blue hidden-sm hidden-md pull-right\" data-sparkline-type=\"line\"\r\n                             data-sparkline-height=\"33px\" data-sparkline-width=\"70px\" data-fill-color=\"transparent\">\r\n                            257, 200, 210, 300, 270, 363, 130, 187, 250, 247, 270, 363, 247\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\r\n                        <div class=\"easy-pie-chart txt-color-blue\" data-percent=\"23\" data-pie-size=\"50\">\r\n                            <span class=\"percent percent-sign\">23 </span>\r\n                        </div>\r\n                        <span class=\"easy-pie-title\"> Transfered <i class=\"fa fa-caret-up icon-color-good\"></i></span>\r\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\r\n                            <li>\r\n                                <span class=\"label bg-color-darken\">10GB</span>\r\n                            </li>\r\n                            <li>\r\n                                <span class=\"label bg-color-blueDark\"><i class=\"fa fa-caret-up\"></i> 10%</span>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"sparkline txt-color-darken hidden-sm hidden-md pull-right\"\r\n                             data-sparkline-type=\"line\" data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\r\n                             data-fill-color=\"transparent\">\r\n                            200, 210, 363, 247, 300, 270, 130, 187, 250, 257, 363, 247, 270\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\r\n                        <div class=\"easy-pie-chart txt-color-darken\" data-percent=\"36\" data-pie-size=\"50\">\r\n                            <span class=\"percent degree-sign\">36 <i class=\"fa fa-caret-up\"></i></span>\r\n                        </div>\r\n                        <span class=\"easy-pie-title\"> Temperature <i\r\n                                class=\"fa fa-caret-down icon-color-good\"></i></span>\r\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\r\n                            <li>\r\n                                <span class=\"label bg-color-red\"><i class=\"fa fa-caret-up\"></i> 124</span>\r\n                            </li>\r\n                            <li>\r\n                                <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 40 F</span>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"sparkline txt-color-red hidden-sm hidden-md pull-right\" data-sparkline-type=\"line\"\r\n                             data-sparkline-height=\"33px\" data-sparkline-width=\"70px\" data-fill-color=\"transparent\">\r\n                            2700, 3631, 2471, 2700, 3631, 2471, 1300, 1877, 2500, 2577, 2000, 2100, 3000\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- end s1 tab pane -->\r\n\r\n            <div class=\"tab-pane fade\" id=\"s2\">\r\n                <div class=\"widget-body-toolbar bg-color-white\">\r\n\r\n                    <form class=\"form-inline\" role=\"form\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"sr-only\" for=\"s123\">Show From</label>\r\n                            <input type=\"email\" class=\"form-control input-sm\" id=\"s123\" placeholder=\"Show From\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"email\" class=\"form-control input-sm\" id=\"s124\" placeholder=\"To\">\r\n                        </div>\r\n\r\n                        <div class=\"btn-group hidden-phone pull-right\">\r\n                            <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\r\n                                    class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\r\n                            <ul class=\"dropdown-menu pull-right\">\r\n                                <li>\r\n                                    <a href-void><i class=\"fa fa-file-text-alt\"></i> Export to PDF</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href-void><i class=\"fa fa-question-sign\"></i> Help</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </div>\r\n                <div class=\"padding-10\">\r\n                    <div id=\"statsChart\" class=\"chart-large has-legend-unique\" flot-basic flot-data=\"statsData\" flot-options=\"statsDisplayOptions\"></div>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- end s2 tab pane -->\r\n\r\n            <div class=\"tab-pane fade\" id=\"s3\">\r\n\r\n                <div class=\"widget-body-toolbar bg-color-white smart-form\" id=\"rev-toggles\">\r\n\r\n                    <div class=\"inline-group\">\r\n\r\n                        <label for=\"gra-0\" class=\"checkbox\">\r\n                            <input type=\"checkbox\" id=\"gra-0\" ng-model=\"targetsShow\">\r\n                            <i></i> Target </label>\r\n                        <label for=\"gra-1\" class=\"checkbox\">\r\n                            <input type=\"checkbox\" id=\"gra-1\" ng-model=\"actualsShow\">\r\n                            <i></i> Actual </label>\r\n                        <label for=\"gra-2\" class=\"checkbox\">\r\n                            <input type=\"checkbox\" id=\"gra-2\" ng-model=\"signupsShow\">\r\n                            <i></i> Signups </label>\r\n                    </div>\r\n\r\n                    <div class=\"btn-group hidden-phone pull-right\">\r\n                        <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\r\n                                class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\r\n                        <ul class=\"dropdown-menu pull-right\">\r\n                            <li>\r\n                                <a href-void><i class=\"fa fa-file-text-alt\"></i> Export to PDF</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href-void><i class=\"fa fa-question-sign\"></i> Help</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"padding-10\">\r\n                    <div id=\"flotcontainer\" class=\"chart-large has-legend-unique\" flot-basic flot-data=\"revenewData\" flot-options=\"revenewDisplayOptions\" ></div>\r\n                </div>\r\n            </div>\r\n            <!-- end s3 tab pane -->\r\n        </div>\r\n\r\n        <!-- end content -->\r\n    </div>\r\n\r\n</div>\r\n<!-- end widget div -->\r\n</div>\r\n");
$templateCache.put("app/layout/layout.tpl.html","<!-- HEADER -->\r\n\r\n<div data-smart-include=\"app/layout/partials/header.tpl.html\" class=\"placeholder-header\" ></div>\r\n<!-- END HEADER -->\r\n\r\n\r\n<!-- Left panel : Navigation area -->\r\n<!-- Note: This width of the aside area can be adjusted through LESS variables -->\r\n<div data-smart-include=\"app/layout/partials/navigation.tpl.html\" class=\"placeholder-left-panel\"></div>\r\n\r\n<!-- END NAVIGATION -->\r\n\r\n<!-- MAIN PANEL -->\r\n<div id=\"main\" role=\"main\">\r\n    <!--\r\n    <demo-states></demo-states>\r\n    \r\n    <!-- RIBBON -->\r\n<!--\r\n    <div id=\"ribbon\">\r\n                <span class=\"ribbon-button-alignment\">\r\n					<span id=\"refresh\" class=\"btn btn-ribbon\" reset-widgets\r\n                          tooltip-placement=\"bottom\"\r\n                          smart-tooltip-html=\"<i class=\'text-warning fa fa-warning\'></i> Warning! This will reset all your widget settings.\">\r\n						<i class=\"fa fa-refresh\"></i>\r\n					</span>\r\n				</span>\r\n\r\n        <!-- breadcrumb -->\r\n    <!--    \r\n    <state-breadcrumbs></state-breadcrumbs>\r\n        <!-- end breadcrumb -->\r\n  <!--\r\n    </div>\r\n    <!-- END RIBBON -->\r\n\r\n\r\n    <div data-smart-router-animation-wrap=\"content content@app\" data-wrap-for=\"#content\">\r\n        <div data-ui-view=\"content\" data-autoscroll=\"false\"></div>\r\n    </div>\r\n\r\n</div>\r\n<!-- END MAIN PANEL -->\r\n\r\n<!-- PAGE FOOTER -->\r\n<!--<div data-smart-include=\"app/layout/partials/footer.tpl.html\"></div>-->\r\n\r\n<!--\r\n<div data-smart-include=\"app/layout/shortcut/shortcut.tpl.html\"></div>\r\n    -->\r\n<!-- END PAGE FOOTER -->\r\n\r\n\r\n");
$templateCache.put("app/auth/directives/login-info.tpl.html","<div class=\"login-info ng-cloak\">\r\n    <span> <!-- User image size is adjusted inside CSS, it should stay as it -->\r\n        <a  href=\"\" toggle-shortcut>\r\n            <span>{{username}} </span>\r\n        </a>\r\n     </span>\r\n</div>");
$templateCache.put("app/dashboard/projects/recent-projects.tpl.html","<div class=\"project-context hidden-xs dropdown\" dropdown>\r\n\r\n    <span class=\"label\">{{getWord(\'Projects\')}}:</span>\r\n    <span class=\"project-selector dropdown-toggle\" data-toggle=\"dropdown\">{{getWord(\'Recent projects\')}} <i ng-if=\"projects.length\"\r\n            class=\"fa fa-angle-down\"></i></span>\r\n\r\n    <ul class=\"dropdown-menu\" ng-if=\"projects.length\">\r\n        <li ng-repeat=\"project in projects\">\r\n            <a href=\"{{project.href}}\">{{project.title}}</a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n        <li>\r\n            <a ng-click=\"clearProjects()\"><i class=\"fa fa-power-off\"></i> Clear</a>\r\n        </li>\r\n    </ul>\r\n\r\n</div>");
$templateCache.put("app/dashboard/todo/todo-widget.tpl.html","<div id=\"todo-widget\" jarvis-widget data-widget-editbutton=\"false\" data-widget-color=\"blue\"\r\n     ng-controller=\"TodoCtrl\">\r\n    <header>\r\n        <span class=\"widget-icon\"> <i class=\"fa fa-check txt-color-white\"></i> </span>\r\n\r\n        <h2> ToDo\'s </h2>\r\n\r\n        <div class=\"widget-toolbar\">\r\n            <!-- add: non-hidden - to disable auto hide -->\r\n            <button class=\"btn btn-xs btn-default\" ng-class=\"{active: newTodo}\" ng-click=\"toggleAdd()\"><i ng-class=\"{ \'fa fa-plus\': !newTodo, \'fa fa-times\': newTodo}\"></i> Add</button>\r\n\r\n        </div>\r\n    </header>\r\n    <!-- widget div-->\r\n    <div>\r\n        <div class=\"widget-body no-padding smart-form\">\r\n            <!-- content goes here -->\r\n            <div ng-show=\"newTodo\">\r\n                <h5 class=\"todo-group-title\"><i class=\"fa fa-plus-circle\"></i> New Todo</h5>\r\n\r\n                <form name=\"newTodoForm\" class=\"smart-form\">\r\n                    <fieldset>\r\n                        <section>\r\n                            <label class=\"input\">\r\n                                <input type=\"text\" required class=\"input-lg\" ng-model=\"newTodo.title\"\r\n                                       placeholder=\"What needs to be done?\">\r\n                            </label>\r\n                        </section>\r\n                        <section>\r\n                            <div class=\"col-xs-6\">\r\n                                <label class=\"select\">\r\n                                    <select class=\"input-sm\" ng-model=\"newTodo.state\"\r\n                                            ng-options=\"state as state for state in states\"></select> <i></i> </label>\r\n                            </div>\r\n                        </section>\r\n                    </fieldset>\r\n                    <footer>\r\n                        <button ng-disabled=\"newTodoForm.$invalid\" type=\"button\" class=\"btn btn-primary\"\r\n                                ng-click=\"createTodo()\">\r\n                            Add\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-default\" ng-click=\"toggleAdd()\">\r\n                            Cancel\r\n                        </button>\r\n                    </footer>\r\n                </form>\r\n            </div>\r\n\r\n            <todo-list state=\"Critical\"  title=\"Critical Tasks\" icon=\"warning\" todos=\"todos\"></todo-list>\r\n\r\n            <todo-list state=\"Important\" title=\"Important Tasks\" icon=\"exclamation\" todos=\"todos\"></todo-list>\r\n\r\n            <todo-list state=\"Completed\" title=\"Completed Tasks\" icon=\"check\" todos=\"todos\"></todo-list>\r\n\r\n            <!-- end content -->\r\n        </div>\r\n\r\n    </div>\r\n    <!-- end widget div -->\r\n</div>");
$templateCache.put("app/layout/language/language-selector.tpl.html","<ul class=\"header-dropdown-list hidden-xs ng-cloak\" ng-controller=\"LanguagesCtrl\">\r\n    <li class=\"dropdown\" dropdown>\r\n        <a class=\"dropdown-toggle\"  data-toggle=\"dropdown\" href> <img src=\"styles/img/blank.gif\" class=\"flag flag-{{currentLanguage.key}}\" alt=\"{{currentLanguage.alt}}\"> <span> {{currentLanguage.title}} </span>\r\n            <i class=\"fa fa-angle-down\"></i> </a>\r\n        <ul class=\"dropdown-menu pull-right\">\r\n            <li ng-class=\"{active: language==currentLanguage}\" ng-repeat=\"language in languages\">\r\n                <a ng-click=\"selectLanguage(language)\" ><img src=\"styles/img/blank.gif\" class=\"flag flag-{{language.key}}\"\r\n                                                   alt=\"{{language.alt}}\"> {{language.title}}</a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n</ul>");
$templateCache.put("app/layout/partials/footer.tpl.html","<div class=\"page-footer\" style=\"background-color:black;position:fixed; top:auto; z-index:15;\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-6\" >\r\n            <span class=\"txt-color-white\">Leon 2016</span>\r\n        </div>\r\n        <!--\r\n        <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\r\n            <div class=\"txt-color-white inline-block\">\r\n                <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i>\r\n                    <strong>52 mins ago &nbsp;</strong> </i>\r\n\r\n                <div class=\"btn-group dropup\">\r\n                    <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu pull-right text-left\">\r\n                        <li>\r\n                            <div class=\"padding-5\">\r\n                                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\r\n\r\n                                <div class=\"progress progress-micro no-margin\">\r\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li>\r\n                            <div class=\"padding-5\">\r\n                                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\r\n\r\n                                <div class=\"progress progress-micro no-margin\">\r\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li>\r\n                            <div class=\"padding-5\">\r\n                                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span>\r\n                                </p>\r\n\r\n                                <div class=\"progress progress-micro no-margin\">\r\n                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li>\r\n                            <div class=\"padding-5\">\r\n                                <button class=\"btn btn-block btn-default\">refresh</button>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n            -->\r\n    </div>\r\n</div>");
$templateCache.put("app/layout/partials/header.tpl.html","<div id=\"main-menu\" style=\"font-family: TradeGothic, sans-serif;\r\n      position: absolute;\r\n      height:  100%;\r\n      width:  100%;\r\n      background-image: url(\'styles/mztimgs/Black Background.jpg\');\r\n      background-size: 100% 100%;\r\n      background-attachment:fixed;\">\r\n    <header id=\"header\" style=\"background:black\">\r\n\r\n        <!--\r\n        <div id=\"logo-group\" >\r\n            <span id=\"logo\"> <label>{{userdata}} </label> </span>\r\n        </div>\r\n        -->\r\n        <div style=\"width:60%;background-color:black;color:white;position:absolute;\">\r\n            <img src=\"styles/mztimgs/logo-letras-blancas.png\" style=\"height:24px;margin:12px\" alt=\"Alternate Text\" />\r\n            <!--<p style=\"margin-left:10px; font-family:Montserrat;font-size:35px;font-weight:bold\">Le<span style=\"font-weight:bolder;font-family:Montserrat;color:#ffa202;\">O</span>N</p>-->\r\n        </div>\r\n        <!-- pulled right: nav area -->\r\n        <div class=\"pull-right\">\r\n            <!-- collapse menu button -->\r\n            <div id=\"hide-menu\" class=\"btn-header pull-right\">\r\n               <span > <a id=\"id-toggle-menu\" toggle-menu title=\"Collapse Menu\" style=\"background-image:none;background-color:black;color:white;border:0px;\" ><i class=\"fa fa-reorder\" style=\"color:white\" ></i></a> </span> \r\n            </div>\r\n            <!-- end collapse menu -->\r\n            <!-- #MOBILE -->\r\n            <!-- Top menu profile link : this shows only when top menu is active -->\r\n            <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\" style=\"background-color:black;\">\r\n                <li class=\"\">\r\n                    <a href=\"#\" class=\"dropdown-toggle no-margin userdropdown\" data-toggle=\"dropdown\">\r\n                        <img src=\"styles/img/avatars/sunny.png\" alt=\"John Doe\" class=\"online\" />\r\n                    </a>\r\n                    <ul class=\"dropdown-menu pull-right\">\r\n                        <li>\r\n                            <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\">\r\n                                <i class=\"fa fa-cog\"></i> Setting\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li>\r\n                            <a ui-sref=\"app.appViews.profileDemo\" class=\"padding-10 padding-top-0 padding-bottom-0\">\r\n                                <i class=\"fa fa-user\"></i>\r\n                                <u>P</u>rofile\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li>\r\n                            <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"\r\n                               data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i><u>S</u>hortcut</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li>\r\n                            <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"\r\n                               data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i>Full<u>S</u>creen</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n\r\n                        <li>\r\n                            <a href=\"#/login\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\">\r\n                                <i class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n\r\n            <!-- logout button -->\r\n            <!--\r\n            <div id=\"logout\" class=\"btn-header transparent pull-right\">\r\n                <span> <a ui-sref=\"login\" title=\"Sign Out\" data-action=\"userLogout\"\r\n                          data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\"><i\r\n                        class=\"fa fa-sign-out\"></i></a> </span>\r\n            </div>\r\n            <!-- end logout button -->\r\n            <!-- search mobile button (this is hidden till mobile view port) -->\r\n            <!--\r\n            <div id=\"search-mobile\" class=\"btn-header transparent pull-right\" data-search-mobile>\r\n                <span> <a href=\"#\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\r\n            </div>\r\n            <!-- end search mobile button -->\r\n            <!-- input: search field -->\r\n            <!--\r\n            <form action=\"#/search\" class=\"header-search pull-right\">\r\n                <input id=\"search-fld\" type=\"text\" name=\"param\" placeholder=\"Find reports and more\" data-autocomplete=\'[\r\n                            \"ActionScript\",\r\n                            \"AppleScript\",\r\n                            \"Asp\",\r\n                            \"BASIC\",\r\n                            \"C\",\r\n                            \"C++\",\r\n                            \"Clojure\",\r\n                            \"COBOL\",\r\n                            \"ColdFusion\",\r\n                            \"Erlang\",\r\n                            \"Fortran\",\r\n                            \"Groovy\",\r\n                            \"Haskell\",\r\n                            \"Java\",\r\n                            \"JavaScript\",\r\n                            \"Lisp\",\r\n                            \"Perl\",\r\n                            \"PHP\",\r\n                            \"Python\",\r\n                            \"Ruby\",\r\n                            \"Scala\",\r\n                            \"Scheme\"]\'>\r\n                <button type=\"submit\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <a href=\"$\" id=\"cancel-search-js\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\r\n            </form>\r\n            <!-- end input: search field -->\r\n            <!-- fullscreen button -->\r\n            <!--\r\n            <div id=\"fullscreen\" class=\"btn-header transparent pull-right\" ng-controller=\"headerAppController\" >\r\n                <span> <a  id=\"idfullscreen\" full-screen title=\"Full Screen\"><i class=\"fa fa-arrows-alt\"></i></a> </span>\r\n            </div>\r\n                -->\r\n            <!-- end fullscreen button -->\r\n            <!-- #Voice Command: Start Speech -->\r\n            <!--\r\n            <div id=\"speech-btn\" class=\"btn-header transparent pull-right hidden-sm hidden-xs\">\r\n                <div>\r\n                    <a title=\"Voice Command\" id=\"voice-command-btn\" speech-recognition><i class=\"fa fa-microphone\"></i></a>\r\n\r\n                    <div class=\"popover bottom\">\r\n                        <div class=\"arrow\"></div>\r\n                        <div class=\"popover-content\">\r\n                            <h4 class=\"vc-title\">Voice command activated <br>\r\n                                <small>Please speak clearly into the mic</small>\r\n                            </h4>\r\n                            <h4 class=\"vc-title-error text-center\">\r\n                                <i class=\"fa fa-microphone-slash\"></i> Voice command failed\r\n                                <br>\r\n                                <small class=\"txt-color-red\">Must <strong>\"Allow\"</strong> Microphone</small>\r\n                                <br>\r\n                                <small class=\"txt-color-red\">Must have <strong>Internet Connection</strong></small>\r\n                            </h4>\r\n                            <a href-void class=\"btn btn-success\" id=\"speech-help-btn\">See Commands</a>\r\n                            <a href-void class=\"btn bg-color-purple txt-color-white\"\r\n                               onclick=\"$(\'#speech-btn .popover\').fadeOut(50);\">Close Popup</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- end voice command -->\r\n            <!-- multiple lang dropdown : find all flags in the flags page -->\r\n\r\n            <language-selector ng-hide=\"true\"></language-selector>\r\n            <!-- end multiple lang -->\r\n\r\n\r\n        </div>\r\n        <!-- end pulled right: nav area -->\r\n\r\n    </header>\r\n</div>");
$templateCache.put("app/layout/partials/navigation.tpl.html","\r\n\r\n\r\n<aside id=\"left-panel\" style=\"background:none; background-color:black;\">\r\n\r\n    <!-- User info -->\r\n    <!--\r\n    <div login-info></div>\r\n    <!-- end user info -->\r\n\r\n    <nav style=\"background:none;background-color:black;\">\r\n        <!-- NOTE: Notice the gaps after each icon usage <i></i>..\r\n        Please note that these links work a bit different than\r\n        traditional href=\"\" links. See documentation for details.\r\n        -->\r\n\r\n        <ul data-smart-menu style=\"background:none;background-color:black;\">\r\n\r\n            <!-- mzt -->\r\n\r\n            <li data-menu-collapse>\r\n                <a data-ui-sref=\"app.dashboard\" title=\"{{getWord(\'Home\')}}\">\r\n                    <i class=\"fa fa-lg fa-fw fa-home\"></i> <span class=\"menu-item-parent\">{{getWord(\'Home\')}}</span>\r\n                </a>\r\n            </li>\r\n            \r\n            <li data-menu-collapse>\r\n                <a href=\"#\" title=\"{{getWord(\'Company\')}}\" ng-hide=\"companyRole\">\r\n                    <i class=\"fa fa-lg fa-fw fa-pencil-square-o\"></i> <span class=\"menu-item-parent\">{{getWord(\'Company\')}}</span>\r\n                </a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.mztCompanyUsers\">{{getWord(\'Users\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.mztCompanyUsersAssessments\">{{getWord(\'Assesments\')}}</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse>\r\n                <a href=\"#\" title=\"{{getWord(\'Provider\')}}\" ng-hide=\"providerRole\">\r\n                    <i class=\"fa fa-lg fa-fw fa-pencil-square-o\"></i> <span class=\"menu-item-parent\">{{getWord(\'Provider\')}}</span>\r\n                </a>\r\n                <ul>\r\n                    <!--\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.mztProvidersUsers\">{{getWord(\'Subscribers\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.mztProvidersAssessments\">{{getWord(\'Assessments\')}}</a>\r\n                    </li>\r\n                    -->\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.mztLeonQuestionsUser\">{{getWord(\'Assessments\')}}</a>\r\n                    </li>\r\n\r\n\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse style=\"background:none;background-color:black;\">\r\n                <a href=\"#\" title=\"{{getWord(\'Lion\')}}\" ng-hide=\"adminRole\">\r\n                    <i class=\"fa fa-lg fa-fw fa-pencil-square-o\"></i> <span class=\"menu-item-parent\">{{getWord(\'Leon\')}}</span>\r\n                </a>\r\n                <ul style=\"background:none;background-color:black;\">\r\n                    <!--\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.mztRewardsLion\">{{getWord(\'Rewards\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.mztAssessmentLion\">{{getWord(\'Assessments\')}}</a>\r\n                    </li>-->\r\n                    <li data-ui-sref-active=\"active\" style=\"background:none;background-color:black;\">\r\n                        <a data-ui-sref=\"app.form.mztLeonProviders\">{{getWord(\'Clients\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\" style=\"background:none;background-color:black;\">\r\n                        <a data-ui-sref=\"app.form.mztLeonQuestionsUser\">{{getWord(\'Assessments\')}}</a>\r\n                    </li>\r\n\r\n\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse>\r\n                <a ui-sref=\"login\" title=\"Sign Out\" data-action=\"userLogout\" onclick=\"\r\n                   localStorage.removeItem(\'queryQuestionTempFactory\');\r\n                   localStorage.removeItem(\'questionFactory\');\r\n                   localStorage.removeItem(\'uTokenInfo\');\r\n                   var $body = angular.element(document.body);\r\n                   var $rootScope = $body.injector().get(\'$rootScope\');\r\n                   $rootScope.returnToState = undefined;\">\r\n                    <i class=\"fa fa-sign-out\"></i> <span class=\"menu-item-parent\">{{getWord(\'Sign Out\')}}</span>\r\n                </a>\r\n\r\n            </li>\r\n           \r\n        </ul>\r\n\r\n     \r\n        <!--\r\n            <li data-menu-collapse>\r\n                <a href=\"#\" title=\"Dashboard\"><i class=\"fa fa-lg fa-fw fa-home\"></i> <span\r\n                        class=\"menu-item-parent\">{{getWord(\'Dashboard\')}}</span></a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.dashboard\">{{getWord(\'Analytics Dashboard\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.dashboard-social\">{{getWord(\'Social Wall\')}}</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse class=\"top-menu-invisible\">\r\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-cube txt-color-blue\"></i> <span class=\"menu-item-parent\">{{getWord(\'SmartAdmin Intel\')}}</span></a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.smartAdmin.appLayouts\"><i class=\"fa fa-gear\"></i>\r\n                            {{getWord(\'App Layouts\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.smartAdmin.prebuiltSkins\"><i class=\"fa fa-picture-o\"></i>\r\n                            {{getWord(\'Prebuilt Skins\')}}</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-ui-sref-active=\"active\">\r\n                <a data-ui-sref=\"app.inbox.folder\" title=\"Outlook\">\r\n                    <i class=\"fa fa-lg fa-fw fa-inbox\"></i> <span class=\"menu-item-parent\">{{getWord(\'Outlook\')}}</span><span\r\n                        unread-messages-count class=\"badge pull-right inbox-badge\"></span></a>\r\n            </li>\r\n\r\n            <li data-menu-collapse>\r\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-bar-chart-o\"></i> <span class=\"menu-item-parent\">{{getWord(\'Graphs\')}}</span></a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.graphs.flot\">{{getWord(\'Flot Chart\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.graphs.morris\">{{getWord(\'Morris Charts\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.graphs.sparkline\">{{getWord(\'Sparkline\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.graphs.easyPieCharts\">{{getWord(\'Easy Pie Charts\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.graphs.dygraphs\">{{getWord(\'Dygraphs\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.graphs.chartjs\">Chart.js</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.graphs.highchartTables\">Highchart Tables <span\r\n                                class=\"badge pull-right inbox-badge bg-color-yellow\">new</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse>\r\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-table\"></i> <span\r\n                        class=\"menu-item-parent\">{{getWord(\'Tables\')}}</span></a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.tables.normal\">{{getWord(\'Normal Tables\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.tables.datatables\">{{getWord(\'Data Tables\')}} <span\r\n                                class=\"badge inbox-badge bg-color-greenLight\">v1.10</span></a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.tables.jqgrid\">{{getWord(\'Jquery Grid\')}}</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse>\r\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-pencil-square-o\"></i> <span class=\"menu-item-parent\">{{getWord(\'Forms\')}}</span></a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.elements\">{{getWord(\'Smart Form Elements\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.layouts\">{{getWord(\'Smart Form Layouts\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.validation\">{{getWord(\'Smart Form Validation\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.bootstrapForms\">{{getWord(\'Bootstrap Form Elements\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.bootstrapValidation\">{{getWord(\'Bootstrap Form Validation\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.plugins\">{{getWord(\'Form Plugins\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.wizards\">{{getWord(\'Wizards\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.editors\">{{getWord(\'Bootstrap Editors\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.dropzone\">{{getWord(\'Dropzone\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.form.imageEditor\">{{getWord(\'Image Cropping\')}} <span\r\n                                class=\"badge pull-right inbox-badge bg-color-yellow\">new</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse>\r\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-desktop\"></i> <span class=\"menu-item-parent\">{{getWord(\'UI Elements\')}}</span></a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.ui.general\">{{getWord(\'General Elements\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.ui.buttons\">{{getWord(\'Buttons\')}}</a>\r\n                    </li>\r\n                    <li data-menu-collapse>\r\n                        <a href=\"#\">{{getWord(\'Icons\')}}</a>\r\n                        <ul>\r\n                            <li data-ui-sref-active=\"active\">\r\n                                <a data-ui-sref=\"app.ui.iconsFa\"><i class=\"fa fa-plane\"></i> {{getWord(\'Font Awesome\')}}</a>\r\n                            </li>\r\n                            <li data-ui-sref-active=\"active\">\r\n                                <a data-ui-sref=\"app.ui.iconsGlyph\"><i class=\"glyphicon glyphicon-plane\"></i>\r\n                                    {{getWord(\'Glyph Icons\')}}</a>\r\n                            </li>\r\n                            <li data-ui-sref-active=\"active\">\r\n                                <a data-ui-sref=\"app.ui.iconsFlags\"><i class=\"fa fa-flag\"></i> {{getWord(\'Flags\')}}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.ui.grid\">{{getWord(\'Grid\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.ui.treeView\">{{getWord(\'Tree View\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.ui.nestableLists\">{{getWord(\'Nestable Lists\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.ui.jqueryUi\">{{getWord(\'JQuery UI\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.ui.typography\">{{getWord(\'Typography\')}}</a>\r\n                    </li>\r\n                    <li data-menu-collapse>\r\n                        <a href=\"#\">{{getWord(\'Six Level Menu\')}}</a>\r\n                        <ul>\r\n                            <li data-menu-collapse>\r\n                                <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> {{getWord(\'Item #2\')}}</a>\r\n                                <ul>\r\n                                    <li data-menu-collapse>\r\n                                        <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> {{getWord(\'Sub #2.1\')}} </a>\r\n                                        <ul>\r\n                                            <li>\r\n                                                <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i> {{getWord(\'Item\r\n                                                    #2.1.1\')}}</a>\r\n                                            </li>\r\n                                            <li data-menu-collapse>\r\n                                                <a href=\"#\"><i class=\"fa fa-fw fa-plus\"></i>{{getWord(\'Expand\')}}</a>\r\n                                                <ul>\r\n                                                    <li>\r\n                                                        <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i>\r\n                                                            {{getWord(\'File\')}}</a>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <a href=\"#\"><i class=\"fa fa-fw fa-trash-o\"></i>\r\n                                                            {{getWord(\'Delete\')}}</a></li>\r\n                                                </ul>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </li>\r\n                            <li data-menu-collapse>\r\n                                <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> {{getWord(\'Item #3\')}}</a>\r\n\r\n                                <ul>\r\n                                    <li data-menu-collapse>\r\n                                        <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> {{getWord(\'3ed Level\')}}\r\n                                        </a>\r\n                                        <ul>\r\n                                            <li>\r\n                                                <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i>\r\n                                                    {{getWord(\'File\')}}</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i>\r\n                                                    {{getWord(\'File\')}}</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n\r\n            <li data-ui-sref-active=\"active\">\r\n                <a data-ui-sref=\"app.widgets\" title=\"Widgets\"><i class=\"fa fa-lg fa-fw fa-list-alt\"></i><span\r\n                        class=\"menu-item-parent\">{{getWord(\'Widgets\')}}</span></a>\r\n            </li>\r\n\r\n\r\n\r\n            <li data-menu-collapse>\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-lg fa-fw fa-cloud\"><em>3</em></i> <span class=\"menu-item-parent\">{{getWord(\'Cool Features\')}}</span></a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.calendar\" title=\"Calendar\"><i\r\n                                class=\"fa fa-lg fa-fw fa-calendar\"></i> <span\r\n                                class=\"menu-item-parent\">{{getWord(\'Calendar\')}}</span></a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.maps\"><i class=\"fa fa-lg fa-fw fa-map-marker\"></i> <span class=\"menu-item-parent\">{{getWord(\'GMap Skins\')}}</span><span\r\n                                class=\"badge bg-color-greenLight pull-right inbox-badge\">9</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse>\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-lg fa-fw fa-puzzle-piece\"></i> <span class=\"menu-item-parent\">{{getWord(\'App Views\')}}</span></a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.appViews.projects\"><i class=\"fa fa-file-text-o\"></i>\r\n                            {{getWord(\'Projects\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.appViews.blogDemo\"><i class=\"fa fa-paragraph\"></i> {{getWord(\'Blog\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.appViews.galleryDemo\"><i class=\"fa fa-picture-o\"></i>\r\n                            {{getWord(\'Gallery\')}}</a>\r\n                    </li>\r\n\r\n                    <li data-menu-collapse>\r\n                        <a href=\"#\"><i class=\"fa fa-comments\"></i> {{getWord(\'Forum Layout\')}}</a>\r\n                        <ul>\r\n                            <li data-ui-sref-active=\"active\">\r\n                                <a data-ui-sref=\"app.appViews.forumDemo\"><i class=\"fa fa-picture-o\"></i>\r\n                                    {{getWord(\'General View\')}}</a>\r\n                            </li>\r\n                            <li data-ui-sref-active=\"active\">\r\n                                <a data-ui-sref=\"app.appViews.forumTopicDemo\"><i class=\"fa fa-picture-o\"></i>\r\n                                    {{getWord(\'Topic View\')}}</a>\r\n                            </li>\r\n                            <li data-ui-sref-active=\"active\">\r\n                                <a data-ui-sref=\"app.appViews.forumPostDemo\"><i class=\"fa fa-picture-o\"></i>\r\n                                    {{getWord(\'Post View\')}}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.appViews.profileDemo\"><i class=\"fa fa-group\"></i>\r\n                            {{getWord(\'Profile\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.appViews.timelineDemo\"><i class=\"fa fa-clock-o\"></i>\r\n                            {{getWord(\'Timeline\')}}</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse>\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-lg fa-fw fa-shopping-cart\"></i> <span class=\"menu-item-parent\">{{getWord(\'E-Commerce\')}}</span></a>\r\n                <ul>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.eCommerce.orders\" title=\"Orders\"> {{getWord(\'Orders\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.eCommerce.products\" title=\"Products View\"> {{getWord(\'Products View\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.eCommerce.detail\" title=\"Products Detail\"> {{getWord(\'Products Detail\')}}</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse>\r\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-windows\"></i> <span class=\"menu-item-parent\">{{getWord(\'Miscellaneous\')}}</span></a>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"http://bootstraphunter.com/smartadmin-landing/\" target=\"_blank\">{{getWord(\'Landing\r\n                            Page\')}} <i class=\"fa fa-external-link\"></i></a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.misc.pricingTable\">{{getWord(\'Pricing Tables\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.misc.invoice\">{{getWord(\'Invoice\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"login\">{{getWord(\'Login\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"register\">{{getWord(\'Register\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"lock\">{{getWord(\'Locked Screen\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.misc.error404\">{{getWord(\'Error 404\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.misc.error500\">{{getWord(\'Error 500\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.misc.blank\">{{getWord(\'Blank Page\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.misc.emailTemplate\">{{getWord(\'Email Template\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.misc.search\">{{getWord(\'Search Page\')}}</a>\r\n                    </li>\r\n                    <li data-ui-sref-active=\"active\">\r\n                        <a data-ui-sref=\"app.misc.ckeditor\">{{getWord(\'CK Editor\')}}</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li data-menu-collapse class=\"chat-users top-menu-invisible\">\r\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-comment-o\"><em class=\"bg-color-pink flash animated\">!</em></i>\r\n                    <span class=\"menu-item-parent\">{{getWord(\'Smart Chat API\')}} <sup>{{getWord(\'beta\')}}</sup></span></a>\r\n                <div aside-chat-widget></div>\r\n            </li>\r\n        </ul>\r\n         -->\r\n        <!-- NOTE: This allows you to pull menu items from server -->\r\n        <!-- <ul data-smart-menu-items=\"/api/menu-items.json\"></ul> -->\r\n\r\n    </nav>\r\n    <span class=\"minifyme\" data-action=\"minifyMenu\" minify-menu style=\"background-color:black;\">\r\n        <i class=\"fa fa-arrow-circle-left hit\"></i>\r\n    </span>\r\n\r\n</aside>\r\n\r\n");
$templateCache.put("app/layout/partials/sub-header.tpl.html","<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" data-sparkline-container>\r\n    <ul id=\"sparks\" class=\"\">\r\n        <li class=\"sparks-info\">\r\n            <h5> My Income <span class=\"txt-color-blue\">$47,171</span></h5>\r\n            <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\r\n                1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\r\n            </div>\r\n        </li>\r\n        <li class=\"sparks-info\">\r\n            <h5> Site Traffic <span class=\"txt-color-purple\"><i class=\"fa fa-arrow-circle-up\"></i>&nbsp;45%</span></h5>\r\n            <div class=\"sparkline txt-color-purple hidden-mobile hidden-md hidden-sm\">\r\n                110,150,300,130,400,240,220,310,220,300, 270, 210\r\n            </div>\r\n        </li>\r\n        <li class=\"sparks-info\">\r\n            <h5> Site Orders <span class=\"txt-color-greenDark\"><i class=\"fa fa-shopping-cart\"></i>&nbsp;2447</span></h5>\r\n            <div class=\"sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm\">\r\n                110,150,300,130,400,240,220,310,220,300, 270, 210\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n			");
$templateCache.put("app/layout/partials/voice-commands.tpl.html","<!-- TRIGGER BUTTON:\r\n<a href=\"/my-ajax-page.html\" data-toggle=\"modal\" data-target=\"#remoteModal\" class=\"btn btn-default\">Open Modal</a>  -->\r\n\r\n<!-- MODAL PLACE HOLDER\r\n<div class=\"modal fade\" id=\"remoteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"remoteModalLabel\" aria-hidden=\"true\">\r\n<div class=\"modal-dialog\">\r\n<div class=\"modal-content\"></div>\r\n</div>\r\n</div>   -->\r\n<!--////////////////////////////////////-->\r\n\r\n<!--<div class=\"modal-header\">\r\n<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n&times;\r\n</button>\r\n<h4 class=\"modal-title\" id=\"myModalLabel\">Command List</h4>\r\n</div>-->\r\n<div class=\"modal-body\">\r\n\r\n	<h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1>\r\n	<hr class=\"simple\">\r\n	<h5>Instruction</h5>\r\n\r\n	Click <span class=\"text-success\">\"Allow\"</span> to access your microphone and activate Voice Command.\r\n	You will notice a <span class=\"text-primary\"><strong>BLUE</strong> Flash</span> on the microphone icon indicating activation.\r\n	The icon will appear <span class=\"text-danger\"><strong>RED</strong></span> <span class=\"label label-danger\"><i class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=\"text-danger\">\"Deny\"</span> access or don\'t have any microphone installed.\r\n	<br>\r\n	<br>\r\n	As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not being used). In which case Voice Command will prompt you again to <span class=\"text-success\">\"Allow\"</span> or <span class=\"text-danger\">\"Deny\"</span> access to your microphone.\r\n	<br>\r\n	<br>\r\n	If you host your page over <strong>http<span class=\"text-success\">s</span></strong> (secure socket layer) protocol you can wave this security measure and have an unintrupted Voice Command.\r\n	<br>\r\n	<br>\r\n	<h5>Commands</h5>\r\n	<ul>\r\n		<li>\r\n			<strong>\'show\' </strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show inbox\"</strong> or <strong>\"show calendar\"</strong>\r\n		</li>\r\n		<li>\r\n			<strong>\'mute\' </strong> - mutes all sound effects for the theme.\r\n		</li>\r\n		<li>\r\n			<strong>\'sound on\'</strong> - unmutes all sound effects for the theme.\r\n		</li>\r\n		<li>\r\n			<span class=\"text-danger\"><strong>\'stop\'</strong></span> - deactivates voice command.\r\n		</li>\r\n		<li>\r\n			<span class=\"text-primary\"><strong>\'help\'</strong></span> - brings up the command list\r\n		</li>\r\n		<li>\r\n			<span class=\"text-danger\"><strong>\'got it\'</strong></span> - closes help modal\r\n		</li>\r\n		<li>\r\n			<strong>\'hide navigation\'</strong> - toggle navigation collapse\r\n		</li>\r\n		<li>\r\n			<strong>\'show navigation\'</strong> - toggle navigation to open (can be used again to close)\r\n		</li>\r\n		<li>\r\n			<strong>\'scroll up\'</strong> - scrolls to the top of the page\r\n		</li>\r\n		<li>\r\n			<strong>\'scroll down\'</strong> - scrollts to the bottom of the page\r\n		</li>\r\n		<li>\r\n			<strong>\'go back\' </strong> - goes back in history (history -1 click)\r\n		</li>\r\n		<li>\r\n			<strong>\'logout\'</strong> - logs you out\r\n		</li>\r\n	</ul>\r\n	<br>\r\n	<h5>Adding your own commands</h5>\r\n	Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored inside <strong>app.config.js</strong> file under the <code>var commands = {...}</code>. \r\n\r\n	<hr class=\"simple\">\r\n	<div class=\"text-right\">\r\n		<button type=\"button\" class=\"btn btn-success btn-lg\" data-dismiss=\"modal\">\r\n			Got it!\r\n		</button>\r\n	</div>\r\n\r\n</div>\r\n<!--<div class=\"modal-footer\">\r\n<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Got it!</button>\r\n</div> -->");
$templateCache.put("app/layout/shortcut/shortcut.tpl.html","<div id=\"shortcut\">\r\n	<ul>\r\n		<li>\r\n			<a href=\"#/inbox/\" class=\"jarvismetro-tile big-cubes bg-color-blue\"> <span class=\"iconbox\"> <i class=\"fa fa-envelope fa-4x\"></i> <span>Mail <span class=\"label pull-right bg-color-darken\">14</span></span> </span> </a>\r\n		</li>\r\n		<li>\r\n			<a href=\"#/calendar\" class=\"jarvismetro-tile big-cubes bg-color-orangeDark\"> <span class=\"iconbox\"> <i class=\"fa fa-calendar fa-4x\"></i> <span>Calendar</span> </span> </a>\r\n		</li>\r\n		<li>\r\n			<a href=\"#/maps\" class=\"jarvismetro-tile big-cubes bg-color-purple\"> <span class=\"iconbox\"> <i class=\"fa fa-map-marker fa-4x\"></i> <span>Maps</span> </span> </a>\r\n		</li>\r\n		<li>\r\n			<a href=\"#/invoice\" class=\"jarvismetro-tile big-cubes bg-color-blueDark\"> <span class=\"iconbox\"> <i class=\"fa fa-book fa-4x\"></i> <span>Invoice <span class=\"label pull-right bg-color-darken\">99</span></span> </span> </a>\r\n		</li>\r\n		<li>\r\n			<a href=\"#/gallery\" class=\"jarvismetro-tile big-cubes bg-color-greenLight\"> <span class=\"iconbox\"> <i class=\"fa fa-picture-o fa-4x\"></i> <span>Gallery </span> </span> </a>\r\n		</li>\r\n		<li>\r\n			<a href=\"#/profile\" class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i class=\"fa fa-user fa-4x\"></i> <span>My Profile </span> </span> </a>\r\n		</li>\r\n	</ul>\r\n</div>");
$templateCache.put("app/dashboard/chat/directives/aside-chat-widget.tpl.html","<ul>\r\n    <li>\r\n        <div class=\"display-users\">\r\n            <input class=\"form-control chat-user-filter\" placeholder=\"Filter\" type=\"text\">\r\n            <dl>\r\n                <dt>\r\n                    <a href=\"#\" class=\"usr\"\r\n                       data-chat-id=\"cha1\"\r\n                       data-chat-fname=\"Sadi\"\r\n                       data-chat-lname=\"Orlaf\"\r\n                       data-chat-status=\"busy\"\r\n                       data-chat-alertmsg=\"Sadi Orlaf is in a meeting. Please do not disturb!\"\r\n                       data-chat-alertshow=\"true\"\r\n                       popover-trigger=\"hover\"\r\n                       popover-placement=\"right\"\r\n                       smart-popover-html=\"\r\n										<div class=\'usr-card\'>\r\n											<img src=\'styles/img/avatars/5.png\' alt=\'Sadi Orlaf\'>\r\n											<div class=\'usr-card-content\'>\r\n												<h3>Sadi Orlaf</h3>\r\n												<p>Marketing Executive</p>\r\n											</div>\r\n										</div>\r\n									\">\r\n                        <i></i>Sadi Orlaf\r\n                    </a>\r\n                </dt>\r\n                <dt>\r\n                    <a href=\"#\" class=\"usr\"\r\n                       data-chat-id=\"cha2\"\r\n                       data-chat-fname=\"Jessica\"\r\n                       data-chat-lname=\"Dolof\"\r\n                       data-chat-status=\"online\"\r\n                       data-chat-alertmsg=\"\"\r\n                       data-chat-alertshow=\"false\"\r\n                       popover-trigger=\"hover\"\r\n                       popover-placement=\"right\"\r\n                       smart-popover-html=\"\r\n										<div class=\'usr-card\'>\r\n											<img src=\'styles/img/avatars/1.png\' alt=\'Jessica Dolof\'>\r\n											<div class=\'usr-card-content\'>\r\n												<h3>Jessica Dolof</h3>\r\n												<p>Sales Administrator</p>\r\n											</div>\r\n										</div>\r\n									\">\r\n                        <i></i>Jessica Dolof\r\n                    </a>\r\n                </dt>\r\n                <dt>\r\n                    <a href=\"#\" class=\"usr\"\r\n                       data-chat-id=\"cha3\"\r\n                       data-chat-fname=\"Zekarburg\"\r\n                       data-chat-lname=\"Almandalie\"\r\n                       data-chat-status=\"online\"\r\n                       popover-trigger=\"hover\"\r\n                       popover-placement=\"right\"\r\n                       smart-popover-html=\"\r\n										<div class=\'usr-card\'>\r\n											<img src=\'styles/img/avatars/3.png\' alt=\'Zekarburg Almandalie\'>\r\n											<div class=\'usr-card-content\'>\r\n												<h3>Zekarburg Almandalie</h3>\r\n												<p>Sales Admin</p>\r\n											</div>\r\n										</div>\r\n									\">\r\n                        <i></i>Zekarburg Almandalie\r\n                    </a>\r\n                </dt>\r\n                <dt>\r\n                    <a href=\"#\" class=\"usr\"\r\n                       data-chat-id=\"cha4\"\r\n                       data-chat-fname=\"Barley\"\r\n                       data-chat-lname=\"Krazurkth\"\r\n                       data-chat-status=\"away\"\r\n                       popover-trigger=\"hover\"\r\n                       popover-placement=\"right\"\r\n                       smart-popover-html=\"\r\n										<div class=\'usr-card\'>\r\n											<img src=\'styles/img/avatars/4.png\' alt=\'Barley Krazurkth\'>\r\n											<div class=\'usr-card-content\'>\r\n												<h3>Barley Krazurkth</h3>\r\n												<p>Sales Director</p>\r\n											</div>\r\n										</div>\r\n									\">\r\n                        <i></i>Barley Krazurkth\r\n                    </a>\r\n                </dt>\r\n                <dt>\r\n                    <a href=\"#\" class=\"usr offline\"\r\n                       data-chat-id=\"cha5\"\r\n                       data-chat-fname=\"Farhana\"\r\n                       data-chat-lname=\"Amrin\"\r\n                       data-chat-status=\"incognito\"\r\n                       popover-trigger=\"hover\"\r\n                       popover-placement=\"right\"\r\n                       smart-popover-html=\"\r\n										<div class=\'usr-card\'>\r\n											<img src=\'styles/img/avatars/female.png\' alt=\'Farhana Amrin\'>\r\n											<div class=\'usr-card-content\'>\r\n												<h3>Farhana Amrin</h3>\r\n												<p>Support Admin <small><i class=\'fa fa-music\'></i> Playing Beethoven Classics</small></p>\r\n											</div>\r\n										</div>\r\n									\">\r\n                        <i></i>Farhana Amrin (offline)\r\n                    </a>\r\n                </dt>\r\n                <dt>\r\n                    <a href=\"#\" class=\"usr offline\"\r\n                       data-chat-id=\"cha6\"\r\n                       data-chat-fname=\"Lezley\"\r\n                       data-chat-lname=\"Jacob\"\r\n                       data-chat-status=\"incognito\"\r\n                       popover-trigger=\"hover\"\r\n                       popover-placement=\"right\"\r\n                       smart-popover-html=\"\r\n										<div class=\'usr-card\'>\r\n											<img src=\'styles/img/avatars/male.png\' alt=\'Lezley Jacob\'>\r\n											<div class=\'usr-card-content\'>\r\n												<h3>Lezley Jacob</h3>\r\n												<p>Sales Director</p>\r\n											</div>\r\n										</div>\r\n									\">\r\n                        <i></i>Lezley Jacob (offline)\r\n                    </a>\r\n                </dt>\r\n            </dl>\r\n\r\n\r\n            <!--<a href=\"chat.html\" class=\"btn btn-xs btn-default btn-block sa-chat-learnmore-btn\">About the API</a>-->\r\n        </div>\r\n    </li>\r\n</ul>");
$templateCache.put("app/dashboard/chat/directives/chat-users.tpl.html","<div id=\"chat-container\" ng-class=\"{open: open}\">\r\n    <span class=\"chat-list-open-close\" ng-click=\"openToggle()\"><i class=\"fa fa-user\"></i><b>!</b></span>\r\n\r\n    <div class=\"chat-list-body custom-scroll\">\r\n        <ul id=\"chat-users\">\r\n            <li ng-repeat=\"chatUser in chatUsers | filter: chatUserFilter\">\r\n                <a ng-click=\"messageTo(chatUser)\"><img ng-src=\"{{chatUser.picture}}\">{{chatUser.username}} <span\r\n                        class=\"badge badge-inverse\">{{chatUser.username.length}}</span><span class=\"state\"><i\r\n                        class=\"fa fa-circle txt-color-green pull-right\"></i></span></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"chat-list-footer\">\r\n        <div class=\"control-group\">\r\n            <form class=\"smart-form\">\r\n                <section>\r\n                    <label class=\"input\" >\r\n                        <input type=\"text\" ng-model=\"chatUserFilter\" id=\"filter-chat-list\" placeholder=\"Filter\">\r\n                    </label>\r\n                </section>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");
$templateCache.put("app/dashboard/chat/directives/chat-widget.tpl.html","<div id=\"chat-widget\" jarvis-widget data-widget-color=\"blueDark\" data-widget-editbutton=\"false\"\r\n     data-widget-fullscreenbutton=\"false\">\r\n\r\n\r\n    <header>\r\n        <span class=\"widget-icon\"> <i class=\"fa fa-comments txt-color-white\"></i> </span>\r\n\r\n        <h2> SmartMessage </h2>\r\n\r\n        <div class=\"widget-toolbar\">\r\n            <!-- add: non-hidden - to disable auto hide -->\r\n\r\n            <div class=\"btn-group\" data-dropdown>\r\n                <button class=\"btn dropdown-toggle btn-xs btn-success\" data-toggle=\"dropdown\">\r\n                    Status <i class=\"fa fa-caret-down\"></i>\r\n                </button>\r\n                <ul class=\"dropdown-menu pull-right js-status-update\">\r\n                    <li>\r\n                        <a href-void><i class=\"fa fa-circle txt-color-green\"></i> Online</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href-void><i class=\"fa fa-circle txt-color-red\"></i> Busy</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href-void><i class=\"fa fa-circle txt-color-orange\"></i> Away</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                        <a href-void><i class=\"fa fa-power-off\"></i> Log Off</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </header>\r\n\r\n    <!-- widget div-->\r\n    <div>\r\n        <div class=\"widget-body widget-hide-overflow no-padding\">\r\n            <!-- content goes here -->\r\n\r\n            <chat-users></chat-users>\r\n\r\n            <!-- CHAT BODY -->\r\n            <div id=\"chat-body\" class=\"chat-body custom-scroll\">\r\n                <ul>\r\n                    <li class=\"message\" ng-repeat=\"message in chatMessages\">\r\n                        <img class=\"message-picture online\" ng-src=\"{{message.user.picture}}\">\r\n\r\n                        <div class=\"message-text\">\r\n                            <time>\r\n                                {{message.date | date }}\r\n                            </time>\r\n                            <a ng-click=\"messageTo(message.user)\" class=\"username\">{{message.user.username}}</a>\r\n                            <div ng-bind-html=\"message.body\"></div>\r\n\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n            <!-- CHAT FOOTER -->\r\n            <div class=\"chat-footer\">\r\n\r\n                <!-- CHAT TEXTAREA -->\r\n                <div class=\"textarea-div\">\r\n\r\n                    <div class=\"typearea\">\r\n                        <textarea placeholder=\"Write a reply...\" id=\"textarea-expand\"\r\n                                  class=\"custom-scroll\" ng-model=\"newMessage\"></textarea>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- CHAT REPLY/SEND -->\r\n											<span class=\"textarea-controls\">\r\n												<button class=\"btn btn-sm btn-primary pull-right\" ng-click=\"sendMessage()\">\r\n                                                    Reply\r\n                                                </button> <span class=\"pull-right smart-form\"\r\n                                                                style=\"margin-top: 3px; margin-right: 10px;\"> <label\r\n                                                    class=\"checkbox pull-right\">\r\n                                                <input type=\"checkbox\" name=\"subscription\" id=\"subscription\">\r\n                                                <i></i>Press <strong> ENTER </strong> to send </label> </span> <a\r\n                                                    href-void class=\"pull-left\"><i\r\n                                                    class=\"fa fa-camera fa-fw fa-lg\"></i></a> </span>\r\n\r\n            </div>\r\n\r\n            <!-- end content -->\r\n        </div>\r\n\r\n    </div>\r\n    <!-- end widget div -->\r\n</div>");
$templateCache.put("app/dashboard/todo/directives/todo-list.tpl.html","<div>\r\n    <h5 class=\"todo-group-title\"><i class=\"fa fa-{{icon}}\"></i> {{title}} (\r\n        <small class=\"num-of-tasks\">{{scopeItems.length}}</small>\r\n        )\r\n    </h5>\r\n    <ul class=\"todo\">\r\n        <li ng-class=\"{complete: todo.completedAt}\" ng-repeat=\"todo in todos | orderBy: todo._id | filter: filter  track by todo._id\" >\r\n    	<span class=\"handle\"> <label class=\"checkbox\">\r\n            <input type=\"checkbox\" ng-click=\"todo.toggle()\" ng-checked=\"todo.completedAt\"\r\n                   name=\"checkbox-inline\">\r\n            <i></i> </label> </span>\r\n\r\n            <p>\r\n                <strong>Ticket #{{$index + 1}}</strong> - {{todo.title}}\r\n                <span class=\"text-muted\" ng-if=\"todo.description\">{{todo.description}}</span>\r\n                <span class=\"date\">{{todo.createdAt | date}} &dash; <a ng-click=\"deleteTodo(todo)\" class=\"text-muted\"><i\r\n                        class=\"fa fa-trash\"></i></a></span>\r\n\r\n            </p>\r\n        </li>\r\n    </ul>\r\n</div>");
$templateCache.put("app/_common/forms/directives/mzt-assessments-lion-update/mzt-assessments-lion-update-form.tpl.html","\r\n<form name=\"myFormAgencia\">\r\n    <fieldset>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label\">Name</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"nombre\" class=\"form-control\" data-ng-model=\"nombre\" ng-disabled=\"status\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Days</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"days\" ng-model=\"days\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Points</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"cant\" ng-model=\"cant\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-12\">\r\n                    <text-angular name=\"htmlcontent\" ng-model=\"htmlcontent\" class=\"container app\" ng-disabled=\"status\">\r\n                    </text-angular>\r\n                </div>\r\n            </div>\r\n            \r\n\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-success\" ng-click=\"save()\" ng-disabled=\"status\" >Save</button>\r\n                    <button class=\"btn btn-info\" ng-click=\"back()\">Back</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <div>\r\n        <a id=\"openQuestion\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogTipoAgenciaUpdate\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogTipoAgenciaUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Advertencia</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <label>{{messageQuestion}}</label>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn\" ng-click=\"savedata()\" data-dismiss=\"modal\"><i class=\'fa fa-times\'></i>&nbsp; Si</button>\r\n                        <button class=\"btn\" data-dismiss=\"modal\">No</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogErrorMensaje\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogErrorMensaje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n");
$templateCache.put("app/_common/forms/directives/mzt-assessments-lion/mzt-assessments-lion-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" ng-click=\"save()\">New</button>\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Name</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"assessment in assessments\" ng-click=\"go(assessment)\">\r\n                        <td>{{assessment.nombre}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-company-user-assessments/mzt-company-user-assessments-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n    <div class=\"form-group\">\r\n        <h2>{{nombre}}</h2>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" ng-click=\"back()\">Back</button>\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Assessment</th>\r\n                        <th data-hide=\"phone\" style=\"text-align:right\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Percentage %</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"assessment in assessmenttemp\" ng-click=\"go(assessment)\">\r\n                        <td>{{assessment.iduser}}</td>\r\n                        <td style=\"text-align:right\">{{assessment.avarage}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"queryAssessments\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryAssessments\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryAssessments\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarAssessments\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Assessments</h4>\r\n                    </div>\r\n                    <div class=\"table-responsive\">\r\n                        <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Name</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                                <tr ng-repeat=\"assessment in assessments\" ng-click=\"goAssessments(assessment)\">\r\n                                    <td>{{assessment.nombre}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-company-user-show-assessment/mzt-company-user-show-assessment-form.tpl.html","\r\n<form name=\"myFormAgencia\">\r\n    <fieldset>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label\">Name</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"nombre\" class=\"form-control\" data-ng-model=\"nombre\" ng-disabled=\"status\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Days</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"days\" ng-model=\"days\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Points</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"cant\" ng-model=\"cant\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Percentage%</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"avarage\" ng-model=\"avarage\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-12\">\r\n                    <text-angular name=\"htmlcontent\" ng-model=\"htmlcontent\" class=\"container app\" ng-disabled=\"status\">\r\n                    </text-angular>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-info\" ng-click=\"back()\">Back</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <div>\r\n        <a id=\"openQuestion\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogTipoAgenciaUpdate\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogTipoAgenciaUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Advertencia</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <label>{{messageQuestion}}</label>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn\" ng-click=\"savedata()\" data-dismiss=\"modal\"><i class=\'fa fa-times\'></i>&nbsp; Si</button>\r\n                        <button class=\"btn\" data-dismiss=\"modal\">No</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogErrorMensaje\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogErrorMensaje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n");
$templateCache.put("app/_common/forms/directives/mzt-company-users/mzt-company-users-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" ng-click=\"save()\">Add</button>\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Employee</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"companyuser in companyuserstemp\" ng-click=\"go(companyuser)\">\r\n                        <td>{{companyuser.email}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-company-users-assessments/mzt-company-users-assessments-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Employee</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"user in companyuserstemp\" ng-click=\"go(user)\">\r\n                        <td>{{user.email}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-company-users-update/mzt-company-users-update-form.tpl.html","\r\n<form name=\"myFormAgencia\">\r\n    <fieldset>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label\">Employee</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"nombre\" class=\"form-control\" data-ng-model=\"nombre\" ng-disabled=\"status\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-success\" ng-click=\"delete()\" ng-disabled=\"statusdelete\">Delete</button>\r\n                    <button class=\"btn btn-success\" ng-click=\"save()\" ng-disabled=\"status\">Save</button>\r\n                    <button class=\"btn btn-info\" ng-click=\"back()\">Back</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <div>\r\n        <a id=\"openQuestion\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogTipoAgenciaUpdate\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogTipoAgenciaUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Advertencia</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <label>{{messageQuestion}}</label>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn\" ng-click=\"savedata()\" data-dismiss=\"modal\"><i class=\'fa fa-times\'></i>&nbsp; Si</button>\r\n                        <button class=\"btn\" data-dismiss=\"modal\">No</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogErrorMensaje\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogErrorMensaje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n");
$templateCache.put("app/_common/forms/directives/mzt-leon-phone-questions/mzt-leon-phone-questions-form.tpl.html","<form id=\"formQuestions\" class=\"smart-form client-form\">\r\n    <div ng-hide=\"hideSection1\">\r\n        <header ng-hide=\"hideHeader\">\r\n            <h4>{{totalQuestions}}</h4>\r\n        </header>\r\n        <fieldset>\r\n\r\n            <!--Pon aqui el diseno del circulo anaranjado-->\r\n          \r\n            <section ng-hide=\"hideEmail\">\r\n                <label class=\"label\">Email</label>\r\n                <input type=\"email\" class=\"form-control-bootstrap\" name=\"email\" data-ng-model=\"email\">\r\n            </section>\r\n\r\n            <section ng-hide=\"hideGender\">\r\n                <label class=\"label\">Gender2?</label>\r\n                <div class=\"inline-group\">\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioGender\" ng-model=\"radioGender\" ng-value=\"true\">\r\n                        <i></i>Men\r\n                    </label>\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioGender\" ng-model=\"radioGender\" ng-value=\"false\">\r\n                        <i></i>Women\r\n                    </label>\r\n                </div>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideOld\">\r\n                <label class=\"label\">How old are you?</label>\r\n                <input id=\"inputAge\" ng-model=\"howold\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowold(howold)\" />\r\n\r\n                <!--<input type=\"text\" name=\"howold\" ng-model=\"howold\" ui-number-mask=\"0\" class=\"form-control\" ng-blur=\"gohowold(howold)\">\r\n                <br />\r\n                <!--\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedAge\"\r\n                        ng-options=\"selectedAge.name for selectedAge in Ages track by selectedAge.name\"\r\n                        ng-change=\"goModified()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedAge.value}}</label>\r\n                -->\r\n            </section>\r\n\r\n            <section ng-hide=\"hideHeight\">\r\n                <label class=\"label\">Height?</label>\r\n                <input id=\"inputHeight\" ng-model=\"howHeight\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" />\r\n            </section>\r\n\r\n            <section ng-hide=\"hideWeight\">\r\n                <label class=\"label\">Weight?</label>\r\n                <input id=\"inputWeight\" ng-model=\"howWeight\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" />\r\n            </section>\r\n\r\n            <section ng-hide=\"hideCar\">\r\n                <label class=\"label\">Has a doctor ever diagnosed you with a heart condition?</label>\r\n                <div class=\"inline-group\">\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioCar\" ng-model=\"radioCar\" ng-value=\"true\">\r\n                        <i></i>No\r\n                    </label>\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioCar\" ng-model=\"radioCar\" ng-value=\"false\">\r\n                        <i></i>Yes\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedCar.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideChe\">\r\n                <label class=\"label\">Have you experienced pain in your chest (angina) during physical activity or at rest?</label>\r\n                <div class=\"inline-group\">\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioChe\" ng-model=\"radioChe\" ng-value=\"true\">\r\n                        <i></i>No\r\n                    </label>\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioChe\" ng-model=\"radioChe\" ng-value=\"false\">\r\n                        <i></i>Yes\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedChe.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideFat\">\r\n                <label class=\"label\">Has your father been diagnosed with a cardiovascular disease under the age of 55 (stroke, heart attack, high blood pressure, angina, atherosclerosis)?</label>\r\n                <div class=\"inline-group\">\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioFat\" ng-model=\"radioFat\" ng-value=\"true\">\r\n                        <i></i>No\r\n                    </label>\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioFat\" ng-model=\"radioFat\" ng-value=\"false\">\r\n                        <i></i>Yes\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedFat.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideMot\">\r\n                <label class=\"label\">Has your mother been diagnosed with cardiovascular disease under the age of 65 (stroke, heart attack, high blood pressure, angina, atherosclerosis)?</label>\r\n                <div class=\"inline-group\">\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioMot\" ng-model=\"radioMot\" ng-value=\"true\">\r\n                        <i></i>No\r\n                    </label>\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioMot\" ng-model=\"radioMot\" ng-value=\"false\">\r\n                        <i></i>Yes\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedMot.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideDia\">\r\n                <label class=\"label\">Has either parent been diagnosed with Type II diabetes?</label>\r\n                <div class=\"inline-group\">\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioDia\" ng-model=\"radioDia\" ng-value=\"true\">\r\n                        <i></i>No\r\n                    </label>\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioDia\" ng-model=\"radioDia\" ng-value=\"false\">\r\n                        <i></i>Yes\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedDiabetes.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideMod\">\r\n                <label class=\"label\">Moderate exercise or work which may include (yoga, walking, jogging, cycling, playing sports or any work that moderately increases breathing and heart rate continuously for at least 20 minutes.)?</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedMod\" ng-options=\"selectedMod.name for selectedMod in Mods track by selectedMod.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedMod.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideVig\">\r\n                <label class=\"label\">Vigorous exercise or work which may include (lifting, carrying, high intensity exercise, or work that significantly increases breathing and heart rate continuously for at least 10 mins.)?</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedVig\" ng-options=\"selectedVig.name for selectedVig in Vigs track by selectedVig.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedVig.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideSit\">\r\n                <label class=\"label\">How much time do you spend sitting throughout the day on average?</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedSit\" ng-options=\"selectedSit.name for selectedSit in Sits track by selectedSit.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedSit.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideSmo\">\r\n                <label class=\"label\">Do you smoke?</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectSmo\" ng-options=\"selectSmo.name for selectSmo in Smos track by selectSmo.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectSmo.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideSmokes\">\r\n                <label class=\"label\">Are you exposed to second hand smoke (frequently at home or work)?</label>\r\n                <div class=\"inline-group\">\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioSmo\" ng-model=\"radioSmo\" ng-value=\"true\">\r\n                        <i></i>No\r\n                    </label>\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioSmo\" ng-model=\"radioSmo\" ng-value=\"false\">\r\n                        <i></i>Yes\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedSmokes.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideAlc\">\r\n                <label class=\"label\">Alcohol consumption? </label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectAlc\" ng-options=\"selectAlc.name for selectAlc in Alcs track by selectAlc.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectAlc.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideOra\">\r\n                <label class=\"label\">Have you taken an oral contraceptive for longer than 6 months in the last year?</label>\r\n                <div class=\"inline-group\">\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioOra\" ng-model=\"radioOra\" ng-value=\"true\">\r\n                        <i></i>No\r\n                    </label>\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioOra\" ng-model=\"radioOra\" ng-value=\"false\">\r\n                        <i></i>Yes\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedOra.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideAnt\">\r\n                <label class=\"label\">For what length of time have you been on antibiotics in the last year?</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedAnt\" ng-options=\"selectedAnt.name for selectedAnt in Ants track by selectedAnt.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedAnt.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"ocultar\">\r\n                <label class=\"label\">Total</label>\r\n                <input type=\"text\" style=\"width:100px;\" data-ng-model=\"total1\" ng-readonly />\r\n            </section>\r\n\r\n            <section ng-hide=\"ocultarMessage\">\r\n                <h2>Assessments</h2>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideSys\">\r\n                <label class=\"label\">Blood Pressure Systolic</label>\r\n                <input id=\"inputSys\" ng-model=\"howsys\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowsys(howsys)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"howsys\" ng-model=\"howsys\" ui-number-mask=\"0\" class=\"form-control\" ng-blur=\"gohowsys(howsys)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedSys\" ng-options=\"selectedSys.name for selectedSys in Syss track by selectedSys.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedSys.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideDialostic\">\r\n                <label class=\"label\">Blood Pressure Diastolic</label>\r\n                <input id=\"inputDia\" ng-model=\"howdia\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowdia(howdia)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"howdia\" ng-model=\"howdia\" ui-number-mask=\"0\" class=\"form-control\" ng-blur=\"gohowdia(howdia)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedDiastolic\" ng-options=\"selectedDiastolic.name for selectedDiastolic in Dias track by selectedDiastolic.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedDiastolic.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermenWai\">\r\n                <label class=\"label\">Waist</label>\r\n                <input id=\"inputWaist\" ng-model=\"howwaist\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowwaisttohip()\" />\r\n                <!---\r\n                <input type=\"text\" name=\"howwaist\" ng-model=\"howwaist\" ui-number-mask=\"2\" class=\"form-control\" ng-blur=\"gohowwaisttohip()\">\r\n                -->\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermenWai2\">\r\n                <label class=\"label\">Hip</label>\r\n                <input id=\"inputHip\" ng-model=\"howhip\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowwaisttohip()\" />\r\n                <!--\r\n                <input type=\"text\" name=\"howhip\" ng-model=\"howhip\" ui-number-mask=\"2\" class=\"form-control\" ng-blur=\"gohowwaisttohip()\">\r\n                -->\r\n            </section>\r\n\r\n            <section ng-hide=\"ocultarMen\">\r\n                <select ng-hide=\"ocultarMen\" class=\"form-control-bootstrap\" ng-model=\"selectedWaiMen\" ng-options=\"selectedWaiMen.name for selectedWaiMen in WaiMens track by selectedWaiMen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermenWai\" />\r\n                <label ng-hide=\"ocultarMen\">{{selectedWaiMen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegenderwomenWai\">\r\n                <label class=\"label\">Waist</label>\r\n                <input id=\"inputwaistw\" ng-model=\"howwaistw\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowwaisttohipw()\" />\r\n                <!--\r\n                <input type=\"text\" name=\"howwaistw\" ng-model=\"howwaistw\" ui-number-mask=\"2\" class=\"form-control\" ng-blur=\"gohowwaisttohipw()\">\r\n                    -->\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegenderwomenWai2\">\r\n                <label class=\"label\">Hip</label>\r\n                <input id=\"inputhipw\" ng-model=\"howhipw\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowwaisttohipw()\" />\r\n                <!--\r\n                <input type=\"text\" name=\"howhipw\" ng-model=\"howhipw\" ui-number-mask=\"2\" class=\"form-control\" ng-blur=\"gohowwaisttohipw()\">\r\n                -->\r\n            </section>\r\n\r\n            <section ng-hide=\"ocultarWomen\">\r\n                <select ng-hide=\"ocultarWomen\" class=\"form-control-bootstrap\" ng-model=\"selectedWaiWomen\" ng-options=\"selectedWaiWomen.name for selectedWaiWomen in WaiWomens track by selectedWaiWomen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomenWai\" />\r\n                <label ng-hide=\"ocultarWomen\">{{selectedWaiWomen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermenSid\">\r\n                <label class=\"label\">Side Bridge</label>\r\n                <input id=\"inputSideMen\" ng-model=\"howSidMen\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowSidMen(howSidMen)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"howSidMen\" ng-model=\"howSidMen\" ui-number-mask=\"0\" class=\"form-control\" ng-blur=\"gohowSidMen(howSidMen)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedSidMen\" ng-options=\"selectedSidMen.name for selectedSidMen in SidMens track by selectedSidMen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermenSid\" />\r\n                <label ng-hide=\"ocultar\">{{selectedSidMen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegenderwomenSid\">\r\n                <label class=\"label\">Side Bridge</label>\r\n                <input id=\"howSidWomen\" ng-model=\"howSidMen\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowSidWomen(howSidWomen)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"howSidWomen\" ng-model=\"howSidWomen\" ui-number-mask=\"0\" class=\"form-control\" ng-blur=\"gohowSidWomen(howSidWomen)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedSidWomen\" ng-options=\"selectedSidWomen.name for selectedSidWomen in SidWomens track by selectedSidWomen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomenSid\" />\r\n                <label ng-hide=\"ocultar\">{{selectedSidWomen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideDee\">\r\n                <label class=\"label\">Deep Squat</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedDee\" ng-options=\"selectedDee.name for selectedDee in Dees track by selectedDee.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedDee.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideAct\">\r\n                <label class=\"label\">Active Straight Leg Raise</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedAct\" ng-options=\"selectedAct.name for selectedAct in Acts track by selectedAct.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedAct.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideMob\">\r\n                <label class=\"label\">Shoulder Mobility</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedMob\" ng-options=\"selectedMob.name for selectedMob in Mobs track by selectedMob.name\"\r\n                        ng-change=\"goTotal()\" />\r\n                <label ng-hide=\"ocultar\">{{selectedMob.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideSho\">\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                        <input type=\"checkbox\" ng-model=\"checkShoClear\" class=\"checkbox style-0\" ng-click=\"chkShoClear()\">\r\n                        <span>Shoulder Clearing Test</span>\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedSho.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideSpi\">\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                        <input type=\"checkbox\" ng-model=\"checkSpi\" class=\"checkbox style-0\" ng-click=\"chkSpi()\">\r\n                        <span>Spinal Felxion Clearing Test</span>\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedSpi.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideSpiExt\">\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                        <input type=\"checkbox\" ng-model=\"checkSpiExt\" class=\"checkbox style-0\" ng-click=\"chkSpiExt()\">\r\n                        <span>Spinal Extension Clearing Test</span>\r\n                    </label>\r\n                </div>\r\n                <label ng-hide=\"ocultar\">{{selectedSpiExt.value}}</label>\r\n            </section>\r\n\r\n            <!-- Men push group-->\r\n\r\n            <section ng-hide=\"true\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedPusMen\" ng-options=\"selectedPusMen.name for selectedPusMen in PusMens track by selectedPusMen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermen\" />\r\n                <label ng-hide=\"ocultar\">{{selectedPusMen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermen1\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushMen1\" ng-model=\"numnpmen1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen1(numnpmen1)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numnpmen1\" ng-model=\"numnpmen1\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermen1\" ng-blur=\"gonumnpmen1(numnpmen1)\">\r\n                -->\r\n                <br />\r\n                <select class=\"form-control-bootstrap\" ng-hide=\"ocultar\" ng-model=\"selectedPusMen1\" ng-options=\"selectedPusMen1.name for selectedPusMen1 in PusMens1 track by selectedPusMen1.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermen1\" />\r\n                <label ng-hide=\"ocultar\">Age 20-29  {{selectedPusMen1.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermen2\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushMen2\" ng-model=\"numnpmen2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen2(numnpmen2)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numnpmen2\" ng-model=\"numnpmen2\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermen2\" ng-blur=\"gonumnpmen2(numnpmen2)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" style=\"width:200px;\" ng-model=\"selectedPusMen2\"\r\n                        ng-options=\"selectedPusMen2.name for selectedPusMen2 in PusMens2 track by selectedPusMen2.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermen2\" />\r\n                <label ng-hide=\"ocultar\">Age 30-39 {{selectedPusMen2.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermen3\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushMen3\" ng-model=\"numnpmen3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen3(numnpmen3)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numnpmen3\" ng-model=\"numnpmen3\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermen3\" ng-blur=\"gonumnpmen3(numnpmen3)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" style=\"width:200px;\" ng-model=\"selectedPusMen3\"\r\n                        ng-options=\"selectedPusMen3.name for selectedPusMen3 in PusMens3 track by selectedPusMen3.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermen3\" />\r\n                <label ng-hide=\"ocultar\">Age 40-49 {{selectedPusMen3.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermen4\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushMen4\" ng-model=\"numnpmen4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen4(numnpmen4)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numnpmen4\" ng-model=\"numnpmen4\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermen4\" ng-blur=\"gonumnpmen4(numnpmen4)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" style=\"width:200px;\" ng-model=\"selectedPusMen4\" ng-options=\"selectedPusMen4.name for selectedPusMen4 in PusMens4 track by selectedPusMen4.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermen4\" />\r\n                <label ng-hide=\"ocultar\">Age 50- 59 {{selectedPusMen4.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermen5\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushMen5\" ng-model=\"numnpmen5\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen5(numnpmen5)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numnpmen5\" ng-model=\"numnpmen5\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermen5\" ng-blur=\"gonumnpmen5(numnpmen5)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" style=\"width:200px;\" ng-model=\"selectedPusMen5\" ng-options=\"selectedPusMen5.name for selectedPusMen5 in PushNWomengpo5 track by selectedPusMen5.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermen5\" />\r\n                <label ng-hide=\"ocultar\">Age 60+ {{selectedNPWM5.value}}</label>\r\n            </section>\r\n\r\n            <!--end -->\r\n            <!-- Women push group-->\r\n\r\n            <section ng-hide=\"true\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedPusWomen\" ng-options=\"selectedPusWomen.name for selectedPusWomen in PusWomens track by selectedPusWomen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomen\" />\r\n                <label>{{selectedPusWomen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegenderwomenMod\">\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                        <input type=\"checkbox\" ng-model=\"checkWModOpt\" class=\"checkbox style-0\" ng-click=\"checkWMod()\">\r\n                        <span>\"Modified\" Max Push ups</span>\r\n                    </label>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- Women push group Normal-->\r\n\r\n            <section ng-hide=\"disablegender1women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomen1\" ng-model=\"numnpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm1(numnpwm1)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numnpwm1\" ng-model=\"numnpwm1\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegender1women\" ng-blur=\"gonumnpwm1(numnpwm1)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedNPWM1\" ng-options=\"selectedNPWM1.name for selectedNPWM1 in PushNWomengpo1 track by selectedNPWM1.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegender1women\" />\r\n                <label ng-hide=\"ocultar\">Age 20-29  {{selectedNPWM1.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegender2women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomen2\" ng-model=\"numnpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm2(numnpwm2)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numnpwm2\" ng-model=\"numnpwm2\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegender2women\" ng-blur=\"gonumnpwm2(numnpwm2)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedNPWM2\" ng-options=\"selectedNPWM2.name for selectedNPWM2 in PushNWomengpo2 track by selectedNPWM2.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegender2women\" />\r\n                <label ng-hide=\"ocultar\">Age 30-39 {{selectedNPWM2.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegender3women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomen3\" ng-model=\"numnpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm3(numnpwm3)\" />\r\n                <!---\r\n                <input type=\"text\" name=\"numnpwm3\" ng-model=\"numnpwm3\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegender3women\" ng-blur=\"gonumnpwm3(numnpwm3)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedNPWM3\" ng-options=\"selectedNPWM3.name for selectedNPWM3 in PushNWomengpo3 track by selectedNPWM3.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegender3women\" />\r\n                <label ng-hide=\"ocultar\">Age 40-49 {{selectedNPWM3.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegender4women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomen4\" ng-model=\"numnpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm4(numnpwm4)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numnpwm4\" ng-model=\"numnpwm4\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegender4women\" ng-blur=\"gonumnpwm4(numnpwm4)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedNPWM4\" ng-options=\"selectedNPWM4.name for selectedNPWM4 in PushNWomengpo4 track by selectedNPWM4.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegender4women\" />\r\n                <label ng-hide=\"ocultar\">Age 50- 59 {{selectedNPWM4.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegender5women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomen5\" ng-model=\"numnpwm5\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm5(numnpwm5)\" />\r\n                <!---\r\n                <input type=\"text\" name=\"numnpwm5\" ng-model=\"numnpwm5\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegender5women\" ng-blur=\"gonumnpwm5(numnpwm5)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedNPWM5\" ng-options=\"selectedNPWM5.name for selectedNPWM5 in PushNWomengpo5 track by selectedNPWM5.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegender5women\" />\r\n                <label ng-hide=\"ocultar\">Age 60+ {{selectedNPWM5.value}}</label>\r\n            </section>\r\n\r\n            <!-- end -->\r\n            <!-- Modified wowen push group-->\r\n\r\n            <section ng-hide=\"disablegendermod1women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomenM1\" ng-model=\"numpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm1(numpwm1)\" />\r\n                <!---\r\n                <input type=\"text\" name=\"numpwm1\" ng-model=\"numpwm1\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermod1women\" ng-blur=\"gonumpwm1(numpwm1)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedPWM1\" ng-options=\"selectedPWM1.name for selectedPWM1 in PushWomengpo1 track by selectedPWM1.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermod1women\" />\r\n                <label ng-hide=\"ocultar\">Modified Age 20-29  {{selectedPWM1.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermod2women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomenM2\" ng-model=\"numpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm2(numpwm2)\" />\r\n                <!---\r\n                <input type=\"text\" name=\"numpwm2\" ng-model=\"numpwm2\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermod2women\" ng-blur=\"gonumpwm2(numpwm2)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedPWM2\" ng-options=\"selectedPWM2.name for selectedPWM2 in PushWomengpo2 track by selectedPWM2.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermod2women\" />\r\n                <label ng-hide=\"ocultar\">Modified Age 30-39 {{selectedPWM2.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermod3women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomenM3\" ng-model=\"numpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm3(numpwm3)\" />\r\n\r\n                <!--\r\n                <input stype=\"text\" name=\"numpwm3\" ng-model=\"numpwm3\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermod3women\" ng-blur=\"gonumpwm3(numpwm3)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedPWM3\" ng-options=\"selectedPWM3.name for selectedPWM3 in PushWomengpo3 track by selectedPWM3.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermod3women\" />\r\n                <label ng-hide=\"ocultar\">Modified Age 40-49 {{selectedPWM3.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermod4women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomenM4\" ng-model=\"numpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm4(numpwm4)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numpwm4\" ng-model=\"numpwm4\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermod4women\" ng-blur=\"gonumpwm4(numpwm4)\">\r\n                    -->\r\n\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedPWM4\" ng-options=\"selectedPWM4.name for selectedPWM4 in PushWomengpo4 track by selectedPWM4.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermod4women\" />\r\n                <label ng-hide=\"ocultar\">Modified Age 50- 59 {{selectedPWM4.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendermod5women\">\r\n                <label class=\"label\">1 min Push Up Test</label>\r\n                <input id=\"inputPushWomenM5\" ng-model=\"numpwm5\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm5(numpwm5)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numpwm5\" ng-model=\"numpwm5\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disablegendermod5women\" ng-blur=\"gonumpwm5(numpwm5)\">\r\n                    -->\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedPWM5\" ng-options=\"selectedPWM5.name for selectedPWM5 in PushWomengpo5 track by selectedPWM5.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermod5women\" />\r\n                <label ng-hide=\"ocultar\">Modified Age 60+ {{selectedPWM5.value}}</label>\r\n            </section>\r\n\r\n            <!-- end -->\r\n            <!-- MB CHEST MEN-->\r\n\r\n            <section ng-hide=\"true\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 8lbs</label>\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBMen\" ng-options=\"selectedMBMen.name for selectedMBMen in MBMens track by selectedMBMen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermen\" />\r\n                <label ng-hide=\"ocultar\">{{selectedMBMen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disableMBCM1\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 8lbs</label>\r\n                <input id=\"inputChestMen1\" ng-model=\"numMBCMpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCMpwm1(numMBCMpwm1)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCMpwm1\" ng-model=\"numMBCMpwm1\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disableMBCM1\" ng-blur=\"gonumMBCMpwm1(numMBCMpwm1)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBMen1\" ng-options=\"selectedMBMen1.name for selectedMBMen1 in PushMBCMgpo1 track by selectedMBMen1.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disableMBCM1\" />\r\n                <label ng-hide=\"ocultar\">Age 20-29  {{selectedMBMen1.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disableMBCM2\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 8lbs</label>\r\n                <input id=\"inputChestMen2\" ng-model=\"numMBCMpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCMpwm2(numMBCMpwm2)\" />\r\n\r\n                <!---\r\n                <input type=\"text\" name=\"numMBCMpwm2\" ng-model=\"numMBCMpwm2\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disableMBCM2\" ng-blur=\"gonumMBCMpwm2(numMBCMpwm2)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBMen2\" ng-options=\"selectedMBMen2.name for selectedMBMen2 in PushMBCMgpo2 track by selectedMBMen2.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disableMBCM2\" />\r\n                <label ng-hide=\"ocultar\">Age 30-39 {{selectedMBMen2.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disableMBCM3\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 8lbs</label>\r\n                <input id=\"inputChestMen3\" ng-model=\"numMBCMpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCMpwm3(numMBCMpwm3)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCMpwm3\" ng-model=\"numMBCMpwm3\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disableMBCM3\" ng-blur=\"gonumMBCMpwm3(numMBCMpwm3)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBMen3\" ng-options=\"selectedMBMen3.name for selectedMBMen3 in PushMBCMgpo3 track by selectedMBMen3.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disableMBCM3\" />\r\n                <label ng-hide=\"ocultar\">Age 40-49 {{selectedMBMen3.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disableMBCM4\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 8lbs</label>\r\n                <input id=\"inputChestMen4\" ng-model=\"numMBCMpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCMpwm4(numMBCMpwm4)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCMpwm4\" ng-model=\"numMBCMpwm4\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disableMBCM4\" ng-blur=\"gonumMBCMpwm4(numMBCMpwm4)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBMen4\" ng-options=\"selectedMBMen4.name for selectedMBMen4 in PushMBCMgpo4 track by selectedMBMen4.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disableMBCM4\" />\r\n                <label ng-hide=\"ocultar\">Age 50+ {{selectedMBMen4.value}}</label>\r\n            </section>\r\n\r\n            <!-- end -->\r\n            <!-- MB CHEST WOMEN-->\r\n\r\n            <section ng-hide=\"true\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 6lbs</label>\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBWomen\" ng-options=\"selectedMBWomen.name for selectedMBWomen in MBWomens track by selectedMBWomen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomen\" />\r\n                <label ng-hide=\"ocultar\">{{selectedMBWomen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disableMBCW1\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 6lbs</label>\r\n                <input id=\"inputChestWoMen1\" ng-model=\"numMBCWpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCWpwm1(numMBCWpwm1)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCWpwm1\" ng-model=\"numMBCWpwm1\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disableMBCW1\" ng-blur=\"gonumMBCWpwm1(numMBCWpwm1)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBWOMen1\" ng-options=\"selectedMBWOMen1.name for selectedMBWOMen1 in PushMBCWgpo1 track by selectedMBWOMen1.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disableMBCW1\" />\r\n                <label ng-hide=\"ocultar\">Age 20-29  {{selectedMBWOMen1.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disableMBCW2\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 6lbs</label>\r\n                <input id=\"inputChestWoMen2\" ng-model=\"numMBCWpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCWpwm2(numMBCWpwm2)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCWpwm2\" ng-model=\"numMBCWpwm2\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disableMBCW2\" ng-blur=\"gonumMBCWpwm2(numMBCWpwm2)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBWOMen2\" ng-options=\"selectedMBWOMen2.name for selectedMBWOMen2 in PushMBCWgpo2 track by selectedMBWOMen2.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disableMBCW2\" />\r\n                <label ng-hide=\"ocultar\">Age 30-39 {{selectedMBWOMen2.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disableMBCW3\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 6lbs</label>\r\n                <input id=\"inputChestWoMen3\" ng-model=\"numMBCWpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCWpwm3(numMBCWpwm3)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCWpwm3\" ng-model=\"numMBCWpwm3\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disableMBCW3\" ng-blur=\"gonumMBCWpwm3(numMBCWpwm3)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBWOMen3\" ng-options=\"selectedMBWOMen3.name for selectedMBWOMen3 in PushMBCWgpo3 track by selectedMBWOMen3.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disableMBCW3\" />\r\n                <label ng-hide=\"ocultar\">Age 40-49 {{selectedMBWOMen3.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disableMBCW4\">\r\n                <label class=\"label\">Kneeling MB Chest Throw 6lbs</label>\r\n                <input id=\"inputChestWoMen4\" ng-model=\"numMBCWpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCWpwm4(numMBCWpwm4)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCWpwm4\" ng-model=\"numMBCWpwm4\" ui-number-mask=\"0\" class=\"form-control\" ng-disabled=\"disableMBCW4\" ng-blur=\"gonumMBCWpwm4(numMBCWpwm4)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBWOMen4\" ng-options=\"selectedMBWOMen4.name for selectedMBWOMen4 in PushMBCWgpo4 track by selectedMBWOMen4.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disableMBCW4\" />\r\n                <label ng-hide=\"ocultar\">Age 50+ {{selectedMBWOMen4.value}}</label>\r\n            </section>\r\n\r\n            <!-- end -->\r\n            <!-- Cooper Endurance  Men Test -->\r\n\r\n            <section ng-hide=\"true\">\r\n                <br /><br />\r\n                <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedCooMen\" ng-options=\"selectedCooMen.name for selectedCooMen in CooMens track by selectedCooMen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendermen1\" />\r\n                <label ng-hide=\"ocultar\">{{selectedCooMen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendercoomen1\">\r\n                <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                <input id=\"inputCooperMen1\" ng-model=\"numMBCOOWpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWpwm1(numMBCOOWpwm1)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCOOWpwm1\" ng-model=\"numMBCOOWpwm1\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"disablegendercoomen1\"\r\n                       ng-blur=\"gonumMBCOOWpwm1(numMBCOOWpwm1)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedCooMen1\" ng-options=\"selectedCooMen1.name for selectedCooMen1 in CooMens1 track by selectedCooMen1.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendercoomen1\" />\r\n                <label ng-hide=\"ocultar\">Age 20-29 {{selectedCooMen1.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendercoomen2\">\r\n                <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                <input id=\"inputCooperMen2\" ng-model=\"numMBCOOWpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWpwm2(numMBCOOWpwm2)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCOOWpwm2\" ng-model=\"numMBCOOWpwm2\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"disablegendercoomen2\"\r\n                       ng-blur=\"gonumMBCOOWpwm2(numMBCOOWpwm2)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedCooMen2\" ng-options=\"selectedCooMen2.name for selectedCooMen2 in CooMens2 track by selectedCooMen2.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendercoomen2\" />\r\n                <label ng-hide=\"ocultar\">Age 30-39 {{selectedCooMen2.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendercoomen3\">\r\n                <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                <input id=\"inputCooperMen3\" ng-model=\"numMBCOOWpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWpwm3(numMBCOOWpwm3)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCOOWpwm3\" ng-model=\"numMBCOOWpwm3\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"disablegendercoomen3\"\r\n                       ng-blur=\"gonumMBCOOWpwm3(numMBCOOWpwm3)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedCooMen3\" ng-options=\"selectedCooMen3.name for selectedCooMen3 in CooMens3 track by selectedCooMen3.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendercoomen3\" />\r\n                <label ng-hide=\"ocultar\">Age 40-49 {{selectedCooMen3.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendercoomen4\">\r\n                <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                <input id=\"inputCooperMen4\" ng-model=\"numMBCOOWpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWpwm4(numMBCOOWpwm4)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCOOWpwm4\" ng-model=\"numMBCOOWpwm4\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"disablegendercoomen4\"\r\n                       ng-blur=\"gonumMBCOOWpwm4(numMBCOOWpwm4)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedCooMen4\" ng-options=\"selectedCooMen4.name for selectedCooMen4 in CooMens4 track by selectedCooMen4.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendercoomen4\" />\r\n                <label ng-hide=\"ocultar\">Age 50+ {{selectedCooMen4.value}}</label>\r\n            </section>\r\n\r\n            <!-- end -->\r\n            <!-- Cooper Endurance  WOMen Test -->\r\n\r\n            <section ng-hide=\"true\">\r\n                <label class=\"label\">12 min Cooper Endurance Test(Women Age Dependent)</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedCooWomen\" ng-options=\"selectedCooWomen.name for selectedCooMen in CooWomens track by selectedCooWomen.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomen\" />\r\n                <label ng-hide=\"ocultar\">{{selectedCooWomen.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendercoowomen1\">\r\n                <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                <input id=\"inputCooperWoMen1\" ng-model=\"numMBCOOWOpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWOpwm1(numMBCOOWOpwm1)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCOOWOpwm1\" ng-model=\"numMBCOOWOpwm1\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"disablegendercoowomen1\"\r\n                       ng-blur=\"gonumMBCOOWOpwm1(numMBCOOWOpwm1)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedCooWomen1\" ng-options=\"selectedCooWomen1.name for selectedCooMen1 in CooWomens1 track by selectedCooWomen1.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendercoowomen1\" />\r\n                <label ng-hide=\"ocultar\">Age 20-29 {{selectedCooWomen1.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendercoowomen2\">\r\n                <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                <input id=\"inputCooperWoMen2\" ng-model=\"numMBCOOWOpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWOpwm2(numMBCOOWOpwm2)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCOOWOpwm2\" ng-model=\"numMBCOOWOpwm2\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"disablegendercoowomen2\"\r\n                       ng-blur=\"gonumMBCOOWOpwm2(numMBCOOWOpwm2)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedCooWomen2\" ng-options=\"selectedCooWomen2.name for selectedCooMen2 in CooWomens2 track by selectedCooWomen2.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendercoowomen2\" />\r\n                <label ng-hide=\"ocultar\">Age 30-39 {{selectedCooWomen2.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendercoowomen3\">\r\n                <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                <input id=\"inputCooperWoMen3\" ng-model=\"numMBCOOWOpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWOpwm3(numMBCOOWOpwm3)\" />\r\n\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCOOWOpwm3\" ng-model=\"numMBCOOWOpwm3\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"disablegendercoowomen3\"\r\n                       ng-blur=\"gonumMBCOOWOpwm3(numMBCOOWOpwm3)\">\r\n                    -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedCooWomen3\" ng-options=\"selectedCooWomen3.name for selectedCooMen3 in CooWomens3 track by selectedCooWomen3.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendercoowomen3\" />\r\n                <label ng-hide=\"ocultar\">Age 40-49  {{selectedCooWomen3.value}}</label>\r\n            </section>\r\n\r\n            <section ng-hide=\"disablegendercoowomen4\">\r\n                <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                <input id=\"inputCooperWoMen4\" ng-model=\"numMBCOOWOpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWOpwm4(numMBCOOWOpwm4)\" />\r\n                <!--\r\n                <input type=\"text\" name=\"numMBCOOWOpwm4\" ng-model=\"numMBCOOWOpwm4\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"disablegendercoowomen4\"\r\n                       ng-blur=\"gonumMBCOOWOpwm4(numMBCOOWOpwm4)\">\r\n                -->\r\n                <br />\r\n                <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedCooWomen4\" ng-options=\"selectedCooWomen4.name for selectedCooMen4 in CooWomens4 track by selectedCooWomen4.name\"\r\n                        ng-change=\"goTotal()\" ng-disabled=\"disablegendercoowomen4\" />\r\n                <label ng-hide=\"ocultar\">Age 50+ {{selectedCooWomen4.value}}</label>\r\n            </section>\r\n\r\n            <!-- End -->\r\n\r\n            <section ng-hide=\"ocultar\">\r\n                <label class=\"label\">Total</label>\r\n                <input type=\"text\" class=\"form-control col-lg-offset-4\" style=\"width:100px;\" data-ng-model=\"total2\" ng-readonly />\r\n            </section>\r\n\r\n            <section ng-hide=\"ocultar\">\r\n                <label class=\"label\">Combined</label>\r\n                <input type=\"text\" class=\"form-control col-lg-offset-4\" style=\"width:100px;\" data-ng-model=\"total3\" ng-readonly />\r\n            </section>\r\n\r\n            <section ng-hide=\"ocultar\">\r\n                <label class=\"label\">Combined Conversion</label>\r\n                <input type=\"text\" class=\"form-control col-lg-offset-4\" style=\"width:100px;\" data-ng-model=\"total4\" ng-readonly />\r\n            </section>\r\n\r\n            <section ng-hide=\"ocultarMessage\">\r\n                <h2>Qualitative </h2>\r\n            </section>\r\n\r\n            <section ng-hide=\"hideRated\">\r\n                <label class=\"label\">How would you rate your fitness?</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedRated\" ng-options=\"selectedRated.name for selectedRated in selectedRateds track by selectedRated.name\" />\r\n            </section>\r\n\r\n            <section ng-hide=\"hideLife\">\r\n                <label class=\"label\">How would you rank your current fitness to your lifetime peak?</label>\r\n                <select class=\"form-control-bootstrap\" ng-model=\"selectedLife\" ng-options=\"selectedLife.name for selectedLife in selectedLifes track by selectedLife.name\" />\r\n            </section>\r\n\r\n            <section ng-hide=\"hideOrg\">\r\n                <label class=\"label\">Have you participated in an organized competitive event in the past 6 months? (marathon, triathlon, tough mudder, etc)</label>\r\n                <div class=\"inline-group\">\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioOrg\" ng-model=\"radioOrg\" ng-value=\"true\">\r\n                        <i></i>No\r\n                    </label>\r\n                    <label class=\"radio\">\r\n                        <input type=\"radio\" name=\"radioOrg\" ng-model=\"radioOrg\" ng-value=\"false\">\r\n                        <i></i>Yes\r\n                    </label>\r\n                </div>\r\n            </section>\r\n\r\n        </fieldset>\r\n\r\n        <footer>\r\n            <button class=\"btn btn-success\" ng-click=\"save()\" ng-hide=\"hideSave\">Save</button>\r\n            <button class=\"btn btn-success\" ng-click=\"next()\" ng-hide=\"hideNext\">Next</button>\r\n            <button class=\"btn btn-success\" ng-click=\"backQ()\" ng-hide=\"hideBack\">Back</button>\r\n            <button class=\"btn btn-success\" ng-click=\"back()\" ng-hide=\"doneSubmitweb\">Done</button>\r\n\r\n        </footer>\r\n        <fieldset>\r\n            <div class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\" ng-model=\"checkOcultar\" class=\"checkbox style-0\" ng-click=\"chkOcultar()\">\r\n                    <span>Show Points</span>\r\n                </label>\r\n            </div>\r\n        </fieldset>\r\n        <fieldset>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-9 col-md-offset-3\">\r\n                    <div id=\"messages\"></div>\r\n                </div>\r\n            </div>\r\n        </fieldset>\r\n    </div>\r\n</form>\r\n\r\n\r\n\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-leon-providers/mzt-leon-providers-form.tpl.html","\r\n<form id=\"comprobanteForm\" >\r\n\r\n   \r\n    <fieldset>\r\n            \r\n        <div class=\"form-group\">\r\n            <button class=\"btn\" ng-click=\"save()\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">New</button>\r\n        </div>\r\n         <section>\r\n            <div class=\"col-md-9 col-xs-10\">\r\n                <label >\r\n                    <input type=\"radio\" name=\"radioType\" ng-model=\"radioType.type\" value=\"0\">\r\n                    <i></i>Admin\r\n                </label>\r\n                <label >\r\n                    <input type=\"radio\" name=\"radioType\" ng-model=\"radioType.type\" value=\"1\">\r\n                    <i></i>Providers\r\n                </label>\r\n                <label >\r\n                    <input type=\"radio\" name=\"radioType\" ng-model=\"radioType.type\" value=\"2\">\r\n                    <i></i>Users\r\n                </label>\r\n            </div>\r\n        </section>\r\n      \r\n   \r\n    </fieldset>\r\n\r\n    <section>\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Email</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"provider in providers\" ng-click=\"go(provider)\">\r\n                        <td>{{provider.email}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </section>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-leon-providers-change-password/mzt-leon-providers-change-password-form.tpl.html","\r\n<form name=\"myFormAgencia\">\r\n    <fieldset>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label\">Email</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"email\" name=\"email\" class=\"form-control\" data-ng-model=\"email\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">New Password</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"password\" name=\"password\" ng-model=\"password\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Retype</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"password\" name=\"passwordConfirm\" ng-model=\"passwordConfirm\" class=\"form-control\"  placeholder=\"Confirm password\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn\" ng-click=\"save()\" ng-disabled=\"status\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">Save</button>\r\n                    <button class=\"btn\" ng-click=\"back()\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">Back</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </fieldset>\r\n    \r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n        \r\n    <div>\r\n        <a id=\"openQuestion\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogTipoAgenciaUpdate\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogTipoAgenciaUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Warning</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <label>{{messageQuestion}}</label>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn\" ng-click=\"savedata()\" data-dismiss=\"modal\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">Yes</button>\r\n                        <button class=\"btn\" data-dismiss=\"modal\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">No</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogErrorMensaje\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogErrorMensaje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n");
$templateCache.put("app/_common/forms/directives/mzt-leon-providers-addupdate/mzt-leon-providers-addupdate-form.tpl.html","\r\n<form name=\"myFormAgencia\">\r\n    <fieldset>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label\">Email</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"email\" name=\"email\" class=\"form-control\" data-ng-model=\"email\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Password</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"password\" name=\"password\" ng-model=\"password\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Retype</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"password\" name=\"passwordConfirm\" ng-model=\"passwordConfirm\" class=\"form-control\"  placeholder=\"Confirm password\">\r\n                </div>\r\n            </div>\r\n\r\n              <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"radioType\" ng-model=\"radioType.type\" value=\"0\">\r\n                            <i></i>Admin\r\n                        </label>\r\n                        <label>\r\n                            <input type=\"radio\" name=\"radioType\" ng-model=\"radioType.type\" value=\"1\">\r\n                            <i></i>Providers\r\n                        </label>\r\n                        <label>\r\n                            <input type=\"radio\" name=\"radioType\" ng-model=\"radioType.type\" value=\"2\">\r\n                            <i></i>Users\r\n                        </label>\r\n                    </div>\r\n                 </div>\r\n            </div>\r\n        <div class=\"col-md-8\">\r\n            <div class=\"form-group\">\r\n                <button class=\"btn\" ng-click=\"save()\" ng-disabled=\"status\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">Save</button>\r\n                <button class=\"btn\" ng-click=\"back()\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">Back</button>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <div>\r\n        <a id=\"openQuestion\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogTipoAgenciaUpdate\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogTipoAgenciaUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Warning!</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <label>{{messageQuestion}}</label>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn\" ng-click=\"savedata()\" data-dismiss=\"modal\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">Yes</button>\r\n                        <button class=\"btn\" data-dismiss=\"modal\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">No</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogErrorMensaje\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogErrorMensaje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n");
$templateCache.put("app/_common/forms/directives/mzt-leon-questions/mzt-leon-questions-form.tpl.html","\r\n<form id=\"formQuestions\" class=\"smart-form client-form\" style=\"background:inherit\">\r\n    \r\n    <section ng-hide=\"hideScoreQ\" >\r\n        <div style=\"text-align:center;\">\r\n            <button class=\"btn\" ng-click=\"goradioScoreQ(0)\" style=\"padding:5px 5px 5px 5px;font-size:30px;font-weight:bold;border:none;border-radius:5px;margin: 50px;background-color: rgba(255,  162,  2,  1);color:white;\">Assessment</button>\r\n        </div>\r\n        <div style=\"text-align:center;\">\r\n            <button class=\"btn\" ng-click=\"goradioScoreQ(1)\" style=\"padding:5px 5px 5px 5px;font-size:30px;font-weight:bold;border:none;border-radius:5px;background-color: rgba(255,  162,  2,  1);color:white;\">Score</button>\r\n        </div>\r\n    </section>\r\n\r\n    <section ng-hide=\"hidepoints\" >\r\n        <div style=\"display:flex;justify-content:center;align-items:center;\">\r\n            <div style=\"width:250px;height:250px;border-radius:100%;background-color:rgba(255,  162,  2,  0.4);border:solid 7px rgba(255,  162,  2,  1);margin-top:40px;\">\r\n                <p style=\"display:flex;justify-content:center;align-content:center;margin-top:30px;font-size:100px;color:white;font-weight:bold;\">\r\n                    {{puntos}}\r\n                </p>\r\n                <p style=\"margin-top:0px;color:white;font-size:15px;text-align:center;\">{{avarage}} Percentile</p>\r\n            </div>\r\n\r\n        </div>\r\n        <p style=\"font-size:20px;text-align: center;margin-top:10px;color:white\">{{firstname + \" \" + lastname}}, this is your score! Your last assessment was performed on {{datedone}}.</p>\r\n        <div style=\"display:flex;justify-content:center;align-items:center;margin-top:10px;margin-bottom:15px;\">\r\n          <a href=\"http://goleon.com/comp\" target=\"_blank\" style=\"font-size:25px;text-align: center;margin-top:10px;color:white\">Compare</a>\r\n        </div>\r\n        <div style=\"display:flex;justify-content:center;\" ng-hide=\"doneSubmitwebPoints\">\r\n            <button class=\"btn\" ng-click=\"back()\" style=\"font-size:30px;width:100px; height:50px;margin-top:10px;border-radius:5px;font-weight:bold;background-color: rgba(255,  162,  2,  1);color:white;\">Done</button>\r\n        </div>\r\n        <div style=\"display:flex;justify-content:center;\">\r\n            <p style=\"margin-top:30px;color:white;font-size:18px;text-align:center;\">{{totalUsers}} Assessments and counting...</p>\r\n        </div>\r\n    </section>\r\n  \r\n\r\n\r\n    <div  ng-hide=\"hideAll\" style=\"background-color:white\">\r\n\r\n        <div ng-hide=\"hideAll\">\r\n            <header ng-hide=\"hideHeader\">\r\n                <h4>{{totalQuestions}}</h4>\r\n            </header>\r\n            <fieldset>\r\n\r\n                <section ng-hide=\"hideEmail\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"label\">First Name</label>\r\n                        <input type=\"text\" class=\"form-control-bootstrap\" name=\"firstname\" ng-model=\"firstname\" ng-disabled=\"emailDisable\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"label\">Last Name</label>\r\n                        <input type=\"text\" class=\"form-control-bootstrap\" name=\"lastname\" ng-model=\"lastname\" ng-disabled=\"emailDisable\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"label\">Email</label>\r\n                        <input type=\"email\" class=\"form-control-bootstrap\" name=\"email\" ng-model=\"email\" ng-disabled=\"emailDisable\">\r\n                    </div>\r\n                </section>\r\n\r\n                <section ng-hide=\"questions\">\r\n\r\n                    <section ng-hide=\"hideGender\">\r\n                        <label class=\"label\">Gender?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input id=\"idreadiogender\" type=\"radio\" name=\"radioGender\" ng-model=\"radioGender\" ng-value=\"true\">\r\n                                <i></i>Men\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioGender\" ng-model=\"radioGender\" ng-value=\"false\">\r\n                                <i></i>Women\r\n                            </label>\r\n                        </div>\r\n                    </section>\r\n\r\n                    <section  ng-hide=\"hideOld\">\r\n                        <label class=\"label\">Age?</label>\r\n                        <input id=\"inputAge\" ng-model=\"howold\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowold(howold)\" />\r\n\r\n                        <!--<input type=\"text\" name=\"howold\" ng-model=\"howold\" ui-number-mask=\"0\" class=\"form-control\" ng-blur=\"gohowold(howold)\">\r\n                        <br />\r\n                        <!--\r\n                        <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedAge\"\r\n                                ng-options=\"selectedAge.name for selectedAge in Ages track by selectedAge.name\"\r\n                                ng-change=\"goModified()\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedAge.value}}</label>\r\n                        -->\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideHeight\">\r\n                        <label class=\"label\">Height?</label>\r\n                        <input id=\"inputHeight\" ng-model=\"howHeight\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowHeight(howHeight)\" />\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideWeight\">\r\n                        <label class=\"label\">Weight?</label>\r\n                        <input id=\"inputWeight\" ng-model=\"howWeight\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowWeight()\" />\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideCar\">\r\n                        <label class=\"label\">Has a doctor ever diagnosed you with a heart condition?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioCar\" ng-model=\"radioCar\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioCar\" ng-model=\"radioCar\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedCar.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerCar}} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideChe\">\r\n                        <label class=\"label\">Have you experienced pain in your chest (angina) during physical activity or at rest?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioChe\" ng-model=\"radioChe\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioChe\" ng-model=\"radioChe\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedChe.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChe}} )</label>\r\n\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideFat\">\r\n                        <label class=\"label\">Has your father been diagnosed with a cardiovascular disease under the age of 55 (stroke, heart attack, high blood pressure, angina, atherosclerosis)?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioFat\" ng-model=\"radioFat\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioFat\" ng-model=\"radioFat\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedFat.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerFat}} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideMot\">\r\n                        <label class=\"label\">Has your mother been diagnosed with cardiovascular disease under the age of 65 (stroke, heart attack, high blood pressure, angina, atherosclerosis)?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioMot\" ng-model=\"radioMot\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioMot\" ng-model=\"radioMot\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedMot.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerMot}} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideDia\">\r\n                        <label class=\"label\">Has either parent been diagnosed with Type II diabetes?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioDia\" ng-model=\"radioDia\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioDia\" ng-model=\"radioDia\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedDiabetes.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerDia}} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideMod\">\r\n                        <label class=\"label\">How many days a week do you engage in low and high intensity activities?</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideMod\">\r\n                        <label class=\"label\">Low</label>\r\n                        <input id=\"inputMod\" ng-model=\"howmod\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowmod(howmod)\" />\r\n                        <label class=\"label\">(yoga, walking, jogging, cycling, playing sports or any work)</label>\r\n                        <label ng-hide=\"ocultar\">{{selectedMod.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerMod}} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideMod\">\r\n                        <label class=\"label\">High</label>\r\n                        <input id=\"inputVig\" ng-model=\"howvig\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowvig(howvig)\" />\r\n                        <label class=\"label\">(lifting, carrying, high intensity exercise, or work)</label>\r\n                        <label ng-hide=\"ocultar\">{{selectedVig.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerVig}} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideSit\">\r\n                        <label class=\"label\">How much time do you spend sitting throughout the day on average?</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectedSit\" ng-options=\"selectedSit.name for selectedSit in Sits track by selectedSit.name\"\r\n                                ng-change=\"goTotal()\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedSit.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerSit }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideSmo\">\r\n                        <label class=\"label\">Do you smoke?</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectSmo\" ng-options=\"selectSmo.name for selectSmo in Smos track by selectSmo.name\"\r\n                                ng-change=\"goSmoCheckExposed(selectSmo)\" />\r\n                        <label ng-hide=\"ocultar\">{{selectSmo.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerSmo }} )</label>\r\n\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideSmokes\">\r\n                        <label class=\"label\">Are you exposed to second hand smoke frequently at home or work?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioSmo\" ng-model=\"radioSmo\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioSmo\" ng-model=\"radioSmo\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedSmokes.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerSmokes }} )</label>\r\n\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideAlc\">\r\n                        <label class=\"label\">How often do you consume alcohol? </label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectAlc\" ng-options=\"selectAlc.name for selectAlc in Alcs track by selectAlc.name\"\r\n                                ng-change=\"goTotal()\" />\r\n                        <label ng-hide=\"ocultar\">{{selectAlc.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerAlc }} )</label>\r\n\r\n                    </section>\r\n\r\n                    <section ng-hide=\"true\">\r\n                        <label class=\"label\">Have you taken an oral contraceptive for longer than 6 months in the last year?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioOra\" ng-model=\"radioOra\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioOra\" ng-model=\"radioOra\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedOra.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerOra }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideAnt\">\r\n                        <label class=\"label\">For what length of time have you been on antibiotics in the last year?</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectedAnt\" ng-options=\"selectedAnt.name for selectedAnt in Ants track by selectedAnt.name\"\r\n                                ng-change=\"goTotal()\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedAnt.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerAnt }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"ocultar\">\r\n                        <label class=\"label\">Total</label>\r\n                        <input type=\"text\" style=\"width:100px;\" data-ng-model=\"total1\" ng-readonly />\r\n                        <label ng-hide=\"ocultar\">( {{ServerTotal1 }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"ocultarMessage\">\r\n                        <h2>Qualitative </h2>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideRated\">\r\n                        <label class=\"label\">How would you rate your fitness?</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectedRated\" ng-options=\"selectedRated.name for selectedRated in selectedRateds track by selectedRated.name\" ng-change=\"goTotal()\" />\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideLife\">\r\n                        <label class=\"label\">Are you at or near your lifetime peak fitness level?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radiofitness\" ng-model=\"radiofitness\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radiofitness\" ng-model=\"radiofitness\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                       <!-- <select class=\"form-control-bootstrap\" ng-model=\"selectedLife\" ng-options=\"selectedLife.name for selectedLife in selectedLifes track by selectedLife.name\" ng-change=\"goTotal()\" />-->\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideOrg\">\r\n                        <label class=\"label\">Have you participated in an organized competitive event in the past 12 months? (marathon, triathlon, tough mudder, etc)</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioOrg\" ng-model=\"radioOrg\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioOrg\" ng-model=\"radioOrg\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hidePlaning\">\r\n                        <label class=\"label\">Are you planning to participate in an organised event in the next 12 months?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioPlaning\" ng-model=\"radioPlaning\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioPlaning\" ng-model=\"radioPlaning\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"ocultarMessage\">\r\n                        <h2>Physical Assessment</h2>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideSys\">\r\n                        <label class=\"label\">Systolic</label>\r\n                        <input id=\"inputSys\" ng-model=\"howsys\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowsys(howsys)\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedSys.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerSys }} )</label>\r\n\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideDialostic\">\r\n                        <label class=\"label\">Diastolic</label>\r\n                        <input id=\"inputDia\" ng-model=\"howdia\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowdia(howdia)\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedDiastolic.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerDiastolic }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermenWai\">\r\n                        <label class=\"label\">Waist</label>\r\n                        <input id=\"inputWaist\" ng-model=\"howwaist\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowwaist(howwaist)\" />\r\n                        <!---\r\n                        <input type=\"text\" name=\"howwaist\" ng-model=\"howwaist\" ui-number-mask=\"2\" class=\"form-control\" ng-blur=\"gohowwaisttohip()\">\r\n                        -->\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermenWai2\">\r\n                        <label class=\"label\">Hip</label>\r\n                        <input id=\"inputHip\" ng-model=\"howhip\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowhip(howhip)\" />\r\n\r\n                        <br />\r\n                        <div>\r\n                            <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedWaiMen\" ng-options=\"selectedWaiMen.name for selectedWaiMen in WaiMens track by selectedWaiMen.name\"\r\n                                    ng-change=\"goTotal()\" ng-disabled=\"disablegendermenWai\" />\r\n                            <label ng-hide=\"ocultar\">{{selectedWaiMen.value}}</label>\r\n                            <label ng-hide=\"ocultar\">( {{ServerWaiMen }} )</label>\r\n                        </div>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"ocultarMen\">\r\n                        <select ng-hide=\"ocultarMen\" class=\"form-control-bootstrap\" ng-model=\"selectedWaiMen\" ng-options=\"selectedWaiMen.name for selectedWaiMen in WaiMens track by selectedWaiMen.name\"\r\n                                ng-change=\"goTotal()\" ng-disabled=\"disablegendermenWai\" />\r\n                        <label ng-hide=\"ocultarMen\">{{selectedWaiMen.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerWaiMen }} )</label>\r\n\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegenderwomenWai\">\r\n                        <label class=\"label\">Waist</label>\r\n                        <input id=\"inputwaistw\" ng-model=\"howwaistw\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowwaistw(howwaistw)\" />\r\n                        <!--\r\n                        <input type=\"text\" name=\"howwaistw\" ng-model=\"howwaistw\" ui-number-mask=\"2\" class=\"form-control\" ng-blur=\"gohowwaisttohipw()\">\r\n                            -->\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegenderwomenWai2\">\r\n                        <label class=\"label\">Hip</label>\r\n                        <input id=\"inputhipw\" ng-model=\"howhipw\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowhipw(howhipw)\" />\r\n\r\n                        <br />\r\n                        <div>\r\n                            <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedWaiWomen\" ng-options=\"selectedWaiWomen.name for selectedWaiWomen in WaiWomens track by selectedWaiWomen.name\"\r\n                                    ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomenWai\" />\r\n                            <label ng-hide=\"ocultar\">{{selectedWaiWomen.value}}</label>\r\n                            <label ng-hide=\"ocultar\">( {{ServerWaiWomen }} )</label>\r\n\r\n                        </div>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"ocultarWomen\">\r\n                        <select ng-hide=\"ocultarWomen\" class=\"form-control-bootstrap\" ng-model=\"selectedWaiWomen\" ng-options=\"selectedWaiWomen.name for selectedWaiWomen in WaiWomens track by selectedWaiWomen.name\"\r\n                                ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomenWai\" />\r\n                        <label ng-hide=\"ocultarWomen\">{{selectedWaiWomen.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerWaiWomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideDee\">\r\n                        <label class=\"label\">Deep Squat</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectedDee\" ng-options=\"selectedDee.name for selectedDee in Dees track by selectedDee.name\"\r\n                                ng-change=\"goTotal()\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedDee.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerDee }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideAct\">\r\n                        <label class=\"label\">Active Straight Leg Raise</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectedAct\" ng-options=\"selectedAct.name for selectedAct in Acts track by selectedAct.name\"\r\n                                ng-change=\"goTotal()\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedAct.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerAct }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideMob\">\r\n                        <label class=\"label\">Shoulder Mobility</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectedMob\" ng-options=\"selectedMob.name for selectedMob in Mobs track by selectedMob.name\"\r\n                                ng-change=\"goTotal()\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedMob.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerMob }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideSho\">\r\n                        <label class=\"label\">Shoulder Clearing Test</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioSho\" ng-model=\"radioSho\" ng-value=\"true\">\r\n                                <i></i>No Pain\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioSho\" ng-model=\"radioSho\" ng-value=\"false\">\r\n                                <i></i>Pain\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedSho.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerdSho }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideSpi\">\r\n                        <label class=\"label\">Spinal Flexion Clearing Test</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioSpi\" ng-model=\"radioSpi\" ng-value=\"true\">\r\n                                <i></i>No Pain\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioSpi\" ng-model=\"radioSpi\" ng-value=\"false\">\r\n                                <i></i>Pain\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedSpi.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerdSpi }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"hideSpiExt\">\r\n                        <label class=\"label\">Spinal Extension Clearing Test</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioSpiExt\" ng-model=\"radioSpiExt\" ng-value=\"true\">\r\n                                <i></i>No Pain\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioSpiExt\" ng-model=\"radioSpiExt\" ng-value=\"false\">\r\n                                <i></i>Pain\r\n                            </label>\r\n                        </div>\r\n                        <label ng-hide=\"ocultar\">{{selectedSpiExt.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerSpiExt }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermenSid\">\r\n                        <label class=\"label\">Side Bridge</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermenSid\">\r\n                        <label class=\"label\">Right Side</label>\r\n                        <input id=\"inputSideMen\" ng-model=\"howSidMen\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowSidMen(howSidMen,howSidMenLeft)\" />\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermenSid\">\r\n                        <label class=\"label\">Left Side</label>\r\n                        <input id=\"inputSidMenLeft\" ng-model=\"howSidMenLeft\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowSidMen(howSidMen,howSidMenLeft)\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedSidMen.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerSidMen }} )</label>\r\n                    </section>\r\n\r\n\r\n                    <section ng-hide=\"disablegenderwomenSid\">\r\n                        <label class=\"label\">Side Bridge</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegenderwomenSid\">\r\n                        <label class=\"label\">Right Sde</label>\r\n                        <input id=\"howSidWomen\" ng-model=\"howSidWomen\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowSidWomen(howSidWomen,howSidWomenLeft)\" />\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegenderwomenSid\">\r\n                        <label class=\"label\">Left Side</label>\r\n                        <input id=\"howSidWomenLeft\" ng-model=\"howSidWomenLeft\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gohowSidWomen(howSidWomen,howSidWomenLeft)\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedSidWomen.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerSiddWomen }} )</label>\r\n                    </section>\r\n\r\n                   \r\n\r\n\r\n                    <!-- end -->\r\n                    <!-- MB CHEST MEN-->\r\n\r\n                    <section ng-hide=\"true\">\r\n                        <label class=\"label\">MB Throw 8lbs</label>\r\n                        <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBMen\" ng-options=\"selectedMBMen.name for selectedMBMen in MBMens track by selectedMBMen.name\"\r\n                                ng-change=\"goTotal()\" ng-disabled=\"disablegendermen\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedMBMen.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disableMBCM1\">\r\n                        <label class=\"label\">MB Throw 8lbs</label>\r\n                        <input id=\"inputChestMen1\" ng-model=\"numMBCMpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCMpwm1(numMBCMpwm1)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 20-29  {{selectedMBMen1.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disableMBCM2\">\r\n                        <label class=\"label\">MB Throw 8lbs </label>\r\n                        <input id=\"inputChestMen2\" ng-model=\"numMBCMpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCMpwm2(numMBCMpwm2)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 30-39 {{selectedMBMen2.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disableMBCM3\">\r\n                        <label class=\"label\">MB Throw 8lbs </label>\r\n                        <input id=\"inputChestMen3\" ng-model=\"numMBCMpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCMpwm3(numMBCMpwm3)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 40-49 {{selectedMBMen3.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disableMBCM4\">\r\n                        <label class=\"label\">MB Throw 8lbs</label>\r\n                        <input id=\"inputChestMen4\" ng-model=\"numMBCMpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCMpwm4(numMBCMpwm4)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 50+ {{selectedMBMen4.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestMen }} )</label>\r\n                    </section>\r\n\r\n                    <!-- end -->\r\n                    <!-- MB CHEST WOMEN-->\r\n\r\n                    <section ng-hide=\"true\">\r\n                        <label class=\"label\">MB Throw 6lbs</label>\r\n                        <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedMBWomen\" ng-options=\"selectedMBWomen.name for selectedMBWomen in MBWomens track by selectedMBWomen.name\"\r\n                                ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomen\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedMBWomen.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestWoMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disableMBCW1\">\r\n                        <label class=\"label\">MB Throw 6lbs</label>\r\n                        <input id=\"inputChestWoMen1\" ng-model=\"numMBCWpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCWpwm1(numMBCWpwm1)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 20-29  {{selectedMBWOMen1.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestWoMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disableMBCW2\">\r\n                        <label class=\"label\">MB Throw 6lbs</label>\r\n                        <input id=\"inputChestWoMen2\" ng-model=\"numMBCWpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCWpwm2(numMBCWpwm2)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 30-39 {{selectedMBWOMen2.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestWoMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disableMBCW3\">\r\n                        <label class=\"label\">MB Throw 6lbs</label>\r\n                        <input id=\"inputChestWoMen3\" ng-model=\"numMBCWpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCWpwm3(numMBCWpwm3)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 40-49 {{selectedMBWOMen3.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestWoMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disableMBCW4\">\r\n                        <label class=\"label\">MB Throw 6lbs</label>\r\n                        <input id=\"inputChestWoMen4\" ng-model=\"numMBCWpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCWpwm4(numMBCWpwm4)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 50+ {{selectedMBWOMen4.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerChestWoMen }} )</label>\r\n                    </section>\r\n\r\n                    <!-- end -->\r\n\r\n                    <!-- Men push group-->\r\n\r\n                    <section ng-hide=\"true\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <select ng-hide=\"ocultar\" class=\"form-control-bootstrap\" ng-model=\"selectedPusMen\" ng-options=\"selectedPusMen.name for selectedPusMen in PusMens track by selectedPusMen.name\"\r\n                                ng-change=\"goTotal()\" ng-disabled=\"disablegendermen\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedPusMen.value}}</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermen1\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushMen1\" ng-model=\"numnpmen1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen1(numnpmen1)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 20-29  {{selectedPusMen1.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermen2\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushMen2\" ng-model=\"numnpmen2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen2(numnpmen2)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 30-39 {{selectedPusMen2.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermen3\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushMen3\" ng-model=\"numnpmen3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen3(numnpmen3)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 40-49 {{selectedPusMen3.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermen4\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushMen4\" ng-model=\"numnpmen4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen4(numnpmen4)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 50- 59 {{selectedPusMen4.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusMen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermen5\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushMen5\" ng-model=\"numnpmen5\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpmen5(numnpmen5)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 60+ {{selectedNPWM5.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusMen }} )</label>\r\n                    </section>\r\n\r\n\r\n                    <!--end -->\r\n                    <!-- Women push group-->\r\n\r\n                    <section ng-hide=\"true\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectedPusWomen\" ng-options=\"selectedPusWomen.name for selectedPusWomen in PusWomens track by selectedPusWomen.name\"\r\n                                ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomen\" />\r\n                        <label>{{selectedPusWomen.value}}</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegenderwomenMod\">\r\n                        <label class=\"label\">\"Modified\" Max Push Ups?</label>\r\n                        <div class=\"inline-group\">\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioMPW\" ng-model=\"radioMPW\" ng-value=\"true\">\r\n                                <i></i>No\r\n                            </label>\r\n                            <label class=\"radio\">\r\n                                <input type=\"radio\" name=\"radioMPW\" ng-model=\"radioMPW\" ng-value=\"false\">\r\n                                <i></i>Yes\r\n                            </label>\r\n                        </div>\r\n                    </section>\r\n\r\n                    <!-- Women push group Normal-->\r\n\r\n                    <section ng-hide=\"disablegender1women\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushWomen1\" ng-model=\"numnpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm1(numnpwm1)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 20-29  {{selectedNPWM1.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusWomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegender2women\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushWomen2\" ng-model=\"numnpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm2(numnpwm2)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 30-39 {{selectedNPWM2.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusWomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegender3women\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushWomen3\" ng-model=\"numnpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm3(numnpwm3)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 40-49 {{selectedNPWM3.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusWomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegender4women\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushWomen4\" ng-model=\"numnpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm4(numnpwm4)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 50- 59 {{selectedNPWM4.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusWomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegender5women\">\r\n                        <label class=\"label\">Max Push Up test</label>\r\n                        <input id=\"inputPushWomen5\" ng-model=\"numnpwm5\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumnpwm5(numnpwm5)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Age 60+ {{selectedNPWM5.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerPusWomen }} )</label>\r\n                    </section>\r\n\r\n                    <!-- end -->\r\n                    <!-- Modified wowen push group-->\r\n\r\n                    <section ng-hide=\"disablegendermod1women\">\r\n                        <label class=\"label\">Max push up test</label>\r\n                        <input id=\"inputPushWomenM1\" ng-model=\"numpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm1(numpwm1)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Modified Age 20-29  {{selectedPWM1.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerMPusWomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermod2women\">\r\n                        <label class=\"label\">Max push up test</label>\r\n                        <input id=\"inputPushWomenM2\" ng-model=\"numpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm2(numpwm2)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Modified Age 30-39 {{selectedPWM2.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerMPusWomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermod3women\">\r\n                        <label class=\"label\">Max push up test</label>\r\n                        <input id=\"inputPushWomenM3\" ng-model=\"numpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm3(numpwm3)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Modified Age 40-49 {{selectedPWM3.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerMPusWomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermod4women\">\r\n                        <label class=\"label\">Max push up test</label>\r\n                        <input id=\"inputPushWomenM4\" ng-model=\"numpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm4(numpwm4)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Modified Age 50- 59 {{selectedPWM4.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerMPusWomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendermod5women\">\r\n                        <label class=\"label\">Max push up test</label>\r\n                        <input id=\"inputPushWomenM5\" ng-model=\"numpwm5\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumpwm5(numpwm5)\" />\r\n                        <br />\r\n                        <label ng-hide=\"ocultar\">Modified Age 60+ {{selectedPWM5.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerMPusWomen }} )</label>\r\n                    </section>\r\n\r\n\r\n                <!-- Cooper Endurance  Men Test -->\r\n\r\n                    <section ng-hide=\"true\">\r\n                        <br /><br />\r\n                        <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectedCooMen\" ng-options=\"selectedCooMen.name for selectedCooMen in CooMens track by selectedCooMen.name\"\r\n                                ng-change=\"goTotal()\" ng-disabled=\"disablegendermen1\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedCooMen.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerComen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendercoomen1\">\r\n                        <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                        <input id=\"inputCooperMen1\" ng-model=\"numMBCOOWpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWpwm1(numMBCOOWpwm1)\" />\r\n\r\n                        <label ng-hide=\"ocultar\">Age 20-29 {{selectedCooMen1.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerComen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendercoomen2\">\r\n                        <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                        <input id=\"inputCooperMen2\" ng-model=\"numMBCOOWpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWpwm2(numMBCOOWpwm2)\" />\r\n\r\n                        <label ng-hide=\"ocultar\">Age 30-39 {{selectedCooMen2.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerComen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendercoomen3\">\r\n                        <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                        <input id=\"inputCooperMen3\" ng-model=\"numMBCOOWpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWpwm3(numMBCOOWpwm3)\" />\r\n\r\n                        <label ng-hide=\"ocultar\">Age 40-49 {{selectedCooMen3.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerComen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendercoomen4\">\r\n                        <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                        <input id=\"inputCooperMen4\" ng-model=\"numMBCOOWpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWpwm4(numMBCOOWpwm4)\" />\r\n\r\n                        <label ng-hide=\"ocultar\">Age 50+ {{selectedCooMen4.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerComen }} )</label>\r\n                    </section>\r\n\r\n                    <!-- end -->\r\n                    <!-- Cooper Endurance  WOMen Test -->\r\n\r\n                    <section ng-hide=\"true\">\r\n                        <label class=\"label\">12 min Cooper Endurance Test(Women Age Dependent)</label>\r\n                        <select class=\"form-control-bootstrap\" ng-model=\"selectedCooWomen\" ng-options=\"selectedCooWomen.name for selectedCooMen in CooWomens track by selectedCooWomen.name\"\r\n                                ng-change=\"goTotal()\" ng-disabled=\"disablegenderwomen\" />\r\n                        <label ng-hide=\"ocultar\">{{selectedCooWomen.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerCowomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendercoowomen1\">\r\n                        <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                        <input id=\"inputCooperWoMen1\" ng-model=\"numMBCOOWOpwm1\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWOpwm1(numMBCOOWOpwm1)\" />\r\n\r\n                        <label ng-hide=\"ocultar\">Age 20-29 {{selectedCW1.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerCowomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendercoowomen2\">\r\n                        <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                        <input id=\"inputCooperWoMen2\" ng-model=\"numMBCOOWOpwm2\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWOpwm2(numMBCOOWOpwm2)\" />\r\n                        <label ng-hide=\"ocultar\">Age 30-39 {{selectedCW2.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerCowomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendercoowomen3\">\r\n                        <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                        <input id=\"inputCooperWoMen3\" ng-model=\"numMBCOOWOpwm3\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWOpwm3(numMBCOOWOpwm3)\" />\r\n                        <label ng-hide=\"ocultar\">Age 40-49  {{selectedCW3.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerCowomen }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"disablegendercoowomen4\">\r\n                        <label class=\"label\">12 min Cooper Endurance Test</label>\r\n                        <input id=\"inputCooperWoMen4\" ng-model=\"numMBCOOWOpwm4\" class=\"form-control-bootstrap\" placeholder=\"Please Select ...\" ng-change=\"gonumMBCOOWOpwm4(numMBCOOWOpwm4)\" />\r\n                        <label ng-hide=\"ocultar\">Age 50+ {{selectedCW4.value}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerCowomen }} )</label>\r\n                    </section>\r\n\r\n                    <!-- End -->\r\n\r\n                    <section ng-hide=\"ocultar\">\r\n                        <label ng-hide=\"ocultar\">BMI</label>\r\n                        <label ng-hide=\"ocultar\">{{BMI}}</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"ocultar\">\r\n                        <label ng-hide=\"ocultar\">BMI Score</label>\r\n                        <label ng-hide=\"ocultar\">{{BMILocal}}</label>\r\n                        <label ng-hide=\"ocultar\">( {{ServerBMI}} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"ocultar\">\r\n                        <label class=\"label\">Total</label>\r\n                        <input type=\"text\" class=\"form-control col-lg-offset-4\" style=\"width:100px;\" data-ng-model=\"total2\" ng-readonly />\r\n                        <label ng-hide=\"ocultar\">( {{ServerTotal2 }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"ocultar\">\r\n                        <label class=\"label\">Combined</label>\r\n                        <input type=\"text\" class=\"form-control col-lg-offset-4\" style=\"width:100px;\" data-ng-model=\"total3\" ng-readonly />\r\n                        <label ng-hide=\"ocultar\">( {{ServerTotal3 }} )</label>\r\n                    </section>\r\n\r\n                    <section ng-hide=\"ocultar\">\r\n                        <label class=\"label\">Combined Conversion</label>\r\n                        <input type=\"text\" class=\"form-control col-lg-offset-4\" style=\"width:100px;\" data-ng-model=\"total4\" ng-readonly />\r\n                        <label ng-hide=\"ocultar\">( {{ServerTotal4 }} )</label>\r\n                    </section>\r\n\r\n                    <section>\r\n                        <div class=\"checkbox\" ng-hide=\"adminRole\">\r\n                            <label>\r\n                                <input type=\"checkbox\" ng-model=\"checkOcultar\" class=\"checkbox style-0\" ng-click=\"chkOcultar()\">\r\n                                <span>Show Points</span>\r\n                            </label>\r\n                        </div>\r\n                    </section>\r\n\r\n                </section>\r\n\r\n                <section ng-hide=\"hideerrors\">\r\n                    <label class=\"label\">Oops!</label>\r\n                    <label class=\"label\">{{errorMessage}}</label>\r\n                </section>\r\n\r\n            </fieldset>\r\n\r\n            <footer >\r\n                <button class=\"btn\" ng-click=\"save()\" ng-hide=\"hideSave\" style=\"background-color:rgba(255,  162,  2,  1);color:white;\">Save</button>\r\n                <button class=\"btn\" ng-click=\"backQ()\" ng-hide=\"hideBack\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">Back</button>\r\n                <!--<button class=\"btn btn-success\" ng-click=\"next()\" ng-hide=\"hideNext\">Next</button>-->\r\n\r\n                <button class=\"btn\" ng-click=\"back()\" ng-hide=\"doneSubmitweb\">Done</button>\r\n                <button class=\"btn\" ng-click=\"submitweb()\" ng-hide=\"hideSubmitweb\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">Submit</button>\r\n                <button class=\"btn\" ng-click=\"back()\" ng-hide=\"hideBackweb\" style=\"background-color: rgba(255,  162,  2,  1);color:white;\">Back</button>\r\n\r\n                <!--\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-9 col-md-offset-3\">\r\n                        <div id=\"messages\"></div>\r\n                    </div>\r\n                </div>\r\n                    -->\r\n            </footer>\r\n\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-leon-questions-user/mzt-leon-questions-user-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n\r\n    <!--\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                    <div class=\"input-group input-group-lg\">\r\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                        <div class=\"icon-addon addon-lg\">\r\n                            <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"textSearch\">\r\n                        </div>\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-success\" ng-click=\"clickSearch()\">Buscar</button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n        -->\r\n\r\n    <div class=\"form-group\">\r\n        <button style=\"border-color: rgb(255, 255, 255); background-color: rgb(255, 162, 2);\" class=\"btn btn-success\" ng-click=\"save()\">Begin</button>\r\n\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaQuestion\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Email</th>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>First Name</th>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Last Name</th>\r\n                     </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"question in questionsList\" ng-click=\"go(question)\">\r\n                        <td>{{question.email}}</td>\r\n                        <td>{{question.firstName}}</td>\r\n                        <td>{{question.lastName}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-providers-assessments/mzt-providers-assessments-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Subscribers</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"subscriber in subscriberstemp\" ng-click=\"go(subscriber)\">\r\n                        <td>{{subscriber.email}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-providers-addupdate-assessments/mzt-providers-addupdate-assessments-form.tpl.html","\r\n<form name=\"myFormAgencia\">\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <h2>{{nombreuser}}</h2>\r\n        </div>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label\">Name</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"nombre\" class=\"form-control\" data-ng-model=\"nombre\" ng-disabled=\"status\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Days</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"days\" ng-model=\"days\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Points</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"cant\" ng-model=\"cant\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Percentage%</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"avarage\" ng-model=\"avarage\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-12\">\r\n                    <text-angular name=\"htmlcontent\" ng-model=\"htmlcontent\" class=\"container app\" ng-disabled=\"status\">\r\n                    </text-angular>\r\n                </div>\r\n            </div>\r\n            \r\n\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-success\" ng-click=\"save()\" ng-disabled=\"status\" >Save</button>\r\n                    <button class=\"btn btn-info\" ng-click=\"back()\">Back</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <div>\r\n        <a id=\"openQuestion\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogTipoAgenciaUpdate\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogTipoAgenciaUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Advertencia</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <label>{{messageQuestion}}</label>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn\" ng-click=\"savedata()\" data-dismiss=\"modal\"><i class=\'fa fa-times\'></i>&nbsp; Si</button>\r\n                        <button class=\"btn\" data-dismiss=\"modal\">No</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogErrorMensaje\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogErrorMensaje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n");
$templateCache.put("app/_common/forms/directives/mzt-providers-user-assessments/mzt-providers-user-assessments-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n    <div class=\"form-group\">\r\n        <h2>{{nombre}}</h2>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" ng-click=\"save()\">Add</button>\r\n        <button class=\"btn btn-success\" ng-click=\"back()\">Back</button>\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Assessment</th>\r\n                        <th data-hide=\"phone\" style=\"text-align:right\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Percentage %</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"assessment in assessmenttemp\" ng-click=\"go(assessment)\">\r\n                        <td>{{assessment.iduser}}</td>\r\n                        <td style=\"text-align:right\">{{assessment.avarage}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"queryAssessments\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryAssessments\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryAssessments\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarAssessments\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Assessments</h4>\r\n                    </div>\r\n                    <div class=\"table-responsive\">\r\n                        <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Name</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                                <tr ng-repeat=\"assessment in assessments\" ng-click=\"goAssessments(assessment)\">\r\n                                    <td>{{assessment.nombre}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-providers-users/mzt-providers-users-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" ng-click=\"save()\">Add</button>\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Subscribers</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"subscriber in subscriberstemp\" ng-click=\"go(subscriber)\">\r\n                        <td>{{subscriber.email}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-providers-users-update/mzt-providers-users-update-form.tpl.html","\r\n<form name=\"myFormAgencia\">\r\n    <fieldset>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label\">Subscriber</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"nombre\" class=\"form-control\" data-ng-model=\"nombre\" ng-disabled=\"status\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-success\" ng-click=\"delete()\" ng-disabled=\"statusdelete\">Delete</button>\r\n                    <button class=\"btn btn-success\" ng-click=\"save()\" ng-disabled=\"status\">Save</button>\r\n                    <button class=\"btn btn-info\" ng-click=\"back()\">Back</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <div>\r\n        <a id=\"openQuestion\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogTipoAgenciaUpdate\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogTipoAgenciaUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Advertencia</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <label>{{messageQuestion}}</label>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn\" ng-click=\"savedata()\" data-dismiss=\"modal\"><i class=\'fa fa-times\'></i>&nbsp; Si</button>\r\n                        <button class=\"btn\" data-dismiss=\"modal\">No</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogErrorMensaje\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogErrorMensaje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n");
$templateCache.put("app/_common/forms/directives/mzt-query-cliente/mzt-query-cliente-form.tpl.html","\r\n\r\n\r\n<form id=\"movieForm\" method=\"post\">\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"input-group input-group-md\">\r\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-filter\"></i></span>\r\n                        <div class=\"icon-addon addon-md\">\r\n                            <input type=\"text\" placeholder=\"Nombre del cliente\" class=\"form-control\" >\r\n                            <label for=\"email\" class=\"glyphicon glyphicon-search\" rel=\"tooltip\" title=\"email\"></label>\r\n                        </div>\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"button\"  ng-click=\"clickSearch()\" >Busca!</button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <select class=\"form-control custom-scroll\" size=\"10\" ng-change=\"update()\" ng-model=\"existingClient\">\r\n                        <option value=\"{{client}}\" ng-repeat=\"client in clients\">\r\n                            {{client.nombre}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n</form>\r\n    \r\n ");
$templateCache.put("app/_common/forms/directives/mzt-rewards-lion/mzt-rewards-lion-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" ng-click=\"save()\">New</button>\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Level</th>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Class</th>\r\n                        <th data-hide=\"phone\" style=\"text-align:right\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Points</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"reward in rewards\" ng-click=\"go(reward)\">\r\n                        <td>{{reward.level}}</td>\r\n                        <td>{{reward.nombre}}</td>\r\n                        <td style=\"text-align:right\">{{reward.cant}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-rewards-lion-update/mzt-rewards-lion-update-form.tpl.html","\r\n<form name=\"myFormAgencia\">\r\n    <fieldset>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label\">Class</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"nombre\" class=\"form-control\" data-ng-model=\"nombre\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Points</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"cant\" ng-model=\"cant\" ui-number-mask=\"2\" class=\"form-control\" >\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Level</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"level\" ng-model=\"level\" ui-number-mask=\"0\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-success\" ng-click=\"save()\" ng-disabled=\"status\">Save</button>\r\n                    <button class=\"btn btn-info\" ng-click=\"back()\">Back</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <div>\r\n        <a id=\"openQuestion\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogTipoAgenciaUpdate\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogTipoAgenciaUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Advertencia</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <label>{{messageQuestion}}</label>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn\" ng-click=\"savedata()\" data-dismiss=\"modal\"><i class=\'fa fa-times\'></i>&nbsp; Si</button>\r\n                        <button class=\"btn\" data-dismiss=\"modal\">No</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogErrorMensaje\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogErrorMensaje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n");
$templateCache.put("app/_common/forms/directives/mzt-transacciones-comprobantes/mzt-transacciones-comprobantes-form.tpl.html","\r\n<form id=\"comprobanteForm\">\r\n    <!--Boton modal de la tabla modal clientes-->\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\" selectContainer>\r\n                    <!--<a ng-href=\"{{linkQuery}}\" ng-click=\"linkQueryClient()\">Cliente: </a>-->\r\n                    <!--<a id=\"\" href=\"#\" data-smart-jqui-dialog-launcher=\"#dialogoCliente\" class=\"btn btn-success\"> Cliente</a>-->\r\n                    <a id=\"\" href=\"#\" class=\"btn btn-success btn-md\" data-toggle=\"modal\" data-target=\"#modalCliente\"> Cliente</a>\r\n                    <label class=\"control-label\">{{nameClient}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <!--Tabla modal de clientes-->\r\n    <!--<div id=\"dialogoCliente\" data-smart-jqui-dialog data-modal=\"true\">-->\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"modalCliente\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Clientes</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                                <div class=\"input-group input-group-lg\">\r\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                                    <div class=\"icon-addon addon-lg\">\r\n                                        <input type=\"text\" placeholder=\"Nombre del cliente\" class=\"form-control\">\r\n                                        <label for=\"email\" class=\"glyphicon glyphicon-search\" rel=\"tooltip\" title=\"email\"></label>\r\n                                    </div>\r\n                                    <span class=\"input-group-btn\">\r\n                                        <button class=\"btn btn-warning\" type=\"button\" ng-click=\"clickSearch()\">Buscar</button>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-8 col-lg-12\">\r\n                                <table id=\"\" datatable=\"ng\" dt-options=\"datatables.standardOptionsClientes\" dt-columns=\"datatables.standardColumnsClientes\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th data-class=\"expand\"><i class=\"fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs\"></i> Nombre</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr ng-repeat=\"client in clients\" ng-click=\"goCliente(client)\">\r\n                                            <td>{{client.nombre}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n\r\n                                </table>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn btn-danger btnModalHidden\"><i class=\'fa fa-times\'></i>&nbsp; Cerrar</button>\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cerrar</button>                      \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n       \r\n    <!--</div>-->\r\n    \r\n    <!--Ventanas modal de fecha-->\r\n    <fieldset>\r\n        <!--<input type=\"text\" pick-a-time=\"time\" placeholder=\"Select Time\" /> {{ time }}-->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-lg-5\">\r\n                <label class=\"control-label\"><span class=\"text-warning\">Fecha de entrada</span></label>\r\n                <br />\r\n                <div class=\"form-group\">\r\n                    <div class=\'input-group date\'>\r\n                        <input type=\"text\" class=\"form-control\" pick-a-date=\"dateInicio\" pick-a-date-options=\"options\" placeholder=\"Selecciona la fecha de entrada\" /><!--{{ dateInicio}}-->\r\n                        <span class=\"input-group-addon\">\r\n                            <span class=\"glyphicon glyphicon-calendar\"></span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-lg-5\">\r\n                <label class=\"control-label\"><span class=\"text-warning\">Fecha de salida</span></label>\r\n                <br />\r\n                <div class=\"form-group\">\r\n                    <div class=\'input-group date\'>\r\n                        <input type=\"text\" class=\"form-control\" pick-a-date=\"dateFin\" pick-a-date-options=\"options\" placeholder=\"Selecciona la fecha de salida\" /><!--{{ dateFin}}-->\r\n                        <span class=\"input-group-addon\">\r\n                            <span class=\"glyphicon glyphicon-calendar\"></span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>        \r\n            <div class=\"col-sm-12 col-lg-2\">\r\n                <button class=\"btn btn-warning\" id=\"alinearBoton\" type=\"button\" ng-click=\"clickSearch()\">Buscar</button>\r\n            </div>\r\n        </div>\r\n        <br />\r\n    </fieldset>\r\n\r\n    <!--\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-4\">\r\n                    <label class=\"control-label\">Desde</label>\r\n                    <a href=\"#\" id=\"idFromDate\" smart-xeditable ng-model=\"fromDate\" data-options=\"editableOptions\" data-type=\"date\" data-viewformat=\"dd.mm.yyyy\" data-pk=\"1\"\r\n                       data-placement=\"right\" data-original-title=\"\" class=\"editable editable-click\" >{{fromDate | date}}</a>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 col-md-4\">\r\n                    <label class=\"control-label\">Hasta</label>\r\n                    <a href=\"#\" id=\"idtoDate\" smart-xeditable ng-model=\"toDate\" data-options=\"editableOptions\" data-type=\"date\" data-viewformat=\"dd.mm.yyyy\"\r\n                       data-pk=\"1\" data-placement=\"right\" data-original-title=\"\" class=\"editable editable-click\" >{{toDate | date}}</a>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 col-md-4\">\r\n                    <button class=\"btn btn-default\" type=\"button\" ng-click=\"clickSearch()\">Busca!</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n     -->\r\n    <!--Tabla principal de clientes-->\r\n    <fieldset>\r\n        <div class=\"table-responsive\">\r\n            <table id=\"example\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\">Id</th>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Factura</th>\r\n                        <th data-class=\"expand\"><i class=\"fa fa-fw fa-calendar txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i> Fecha</th>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-money txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Subtotal</th>\r\n                        <th><i class=\"fa fa-fw fa-plus txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Iva</th>\r\n                        <th data-hide=\"phone,tablet\"><i class=\"fa fa-fw fa-file-text txt-color-blue hidden-md hidden-sm hidden-xs\"></i> Remision</th>\r\n                        <th data-hide=\"phone,tablet\"><i class=\"fa fa-fw fa-calendar txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Fecha</th>\r\n                        <th data-hide=\"phone,tablet\"><i class=\"fa fa-fw fa-money txt-color-blue hidden-md hidden-sm hidden-xs\"></i> Importe</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody >\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"comprobante in comprobantes\" ng-click=\"go(comprobante)\">\r\n                        <td>{{comprobante.idRow}}</td>\r\n                        <td>{{comprobante.cadenafactura}}</td>\r\n                        <td>{{comprobante.fechaString}}</td>\r\n                        <td style=\"text-align:right\">{{comprobante.subTotalString}}</td>\r\n                        <td style=\"text-align:right\">{{comprobante.totalImpuestosTrasladadosString}}</td>\r\n                        <td>{{comprobante.remisiones}}</td>\r\n                        <td>{{comprobante.fechaRemisionString}}</td>\r\n                        <td style=\"text-align:right\">{{comprobante.importeString}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n</fieldset>\r\n\r\n    <!--Tabla modal especifica de clientes, al dar click sobre un elemento se despliega una ventana modal de ese cliente-->\r\n   <!--<a id=\"\" href=\"#\" data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\" class=\"btn btn-success\"> Cliente Especifico</a>-->\r\n\r\n    <!--<div id=\"dialogoClienteEspecifico\" data-smart-jqui-dialog data-modal=\"true\">-->\r\n    <a id=\"comprobanteDetalleModal\" href=\"#\" class=\"btn btn-success btn-md\" data-toggle=\"modal\" data-target=\"#modalClienteEspecifico\" style=\"visibility:hidden\"> </a>\r\n        <div class=\"modal fade\" id=\"modalClienteEspecifico\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Detalles de cliente</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"table-responsive\">\r\n                            <table id=\"example\" datatable=\"ng\" dt-options=\"datatables.detalleComprobanteOpciones\" dt-columns=\"datatables.detalleComprobanteColumnas\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th data-hide=\"phone\">Factura</th>\r\n                                        <th data-class=\"expand\"><i class=\"fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs\"></i>Descripcion</th>\r\n                                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-phone text-muted hidden-md hidden-sm hidden-xs\"></i>Cantidad</th>\r\n                                        <th data-hide=\"phone,tablet\"><i class=\"fa fa-fw fa-map-marker txt-color-blue hidden-md hidden-sm hidden-xs\"></i> Remision</th>\r\n                                        <th data-hide=\"phone,tablet\">Descripcion</th>\r\n                                        <th data-hide=\"phone,tablet\"><i class=\"fa fa-fw fa-calendar txt-color-blue hidden-md hidden-sm hidden-xs\"></i> Cantidad</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr ng-repeat=\"comprobante in detalleComprobante\">\r\n                                        <td>{{comprobante.cadena}}</td>\r\n                                        <td>{{comprobante.descripcion}}</td>\r\n                                        <td style=\"text-align:right\">{{comprobante.cantidad}}</td>\r\n                                        <td style=\"text-align:right\">{{comprobante.cadenaRemision}}</td>\r\n                                        <td>{{comprobante.descripcionRemision}}</td>\r\n                                        <td>{{comprobante.cantidadRemision}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cerrar</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        \r\n    <!--</div>-->\r\n</form>\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-user-assessments/mzt-user-assessments-form.tpl.html","<form id=\"comprobanteForm\">\r\n    <div class=\"form-group\">\r\n        <div class=\"table-responsive\">\r\n            <table id=\"tablaTipoAgencia\" datatable=\"ng\" dt-options=\"datatables.standardOptions\" dt-columns=\"datatables.standardColumns\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th data-hide=\"phone\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Assessment</th>\r\n                        <th data-hide=\"phone\" style=\"text-align:right\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Percentage %</th>\r\n                        <th data-hide=\"phone\" style=\"text-align:right\"><i class=\"fa fa-fw fa-file-text-o txt-color-blue text-muted hidden-md hidden-sm hidden-xs\"></i>Points</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--data-smart-jqui-dialog-launcher=\"#dialogoClienteEspecifico\"-->\r\n                    <tr ng-repeat=\"assessment in assessmenttemp\" ng-click=\"go(assessment)\">\r\n                        <td>{{assessment.iduser}}</td>\r\n                        <td style=\"text-align:right\">{{assessment.avarage}}</td>\r\n                        <td style=\"text-align:right\">{{assessment.points}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogQueryTipoAgencia\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogQueryTipoAgencia\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n");
$templateCache.put("app/_common/forms/directives/mzt-user-show-assessment/mzt-user-show-assessment-form.tpl.html","\r\n<form name=\"myFormAgencia\">\r\n    <fieldset>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label\">Name</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"nombre\" class=\"form-control\" data-ng-model=\"nombre\" ng-disabled=\"status\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Days</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"days\" ng-model=\"days\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Points</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"cant\" ng-model=\"cant\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 control-label control-label\">Percentage%</label>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 col-lg-offset-1 \">\r\n                    <input type=\"text\" name=\"avarage\" ng-model=\"avarage\" ui-number-mask=\"2\" class=\"form-control\" ng-disabled=\"status\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-12\">\r\n                    <text-angular name=\"htmlcontent\" ng-model=\"htmlcontent\" class=\"container app\" ng-disabled=\"status\">\r\n                    </text-angular>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-info\" ng-click=\"back()\">Back</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-9 col-md-offset-3\">\r\n                <div id=\"messages\"></div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n\r\n    <div>\r\n        <a id=\"openQuestion\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogTipoAgenciaUpdate\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogTipoAgenciaUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title text-info\" id=\"myModalLabel\">Advertencia</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <label>{{messageQuestion}}</label>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div data-dialog-buttons>\r\n                        <button class=\"btn\" ng-click=\"savedata()\" data-dismiss=\"modal\"><i class=\'fa fa-times\'></i>&nbsp; Si</button>\r\n                        <button class=\"btn\" data-dismiss=\"modal\">No</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <a id=\"idErrorMessage\" href=\"#\" data-toggle=\"modal\" data-target=\"#dialogErrorMensaje\" style=\"visibility:hidden; width:0px; height:0px\"></a>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"dialogErrorMensaje\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"modal-header\">\r\n                        <button id=\"botonCerrarCliente\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Error</h4></div>\r\n                    </div>\r\n                    <p>\r\n                        <h4>{{errorMessage}}</h4>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n");
$templateCache.put("app/_common/layout/directives/demo/demo-states.tpl.html","<div class=\"demo\"><span id=\"demo-setting\"><i class=\"fa fa-cog txt-color-blueDark\"></i></span>\r\n\r\n    <form>\r\n        <legend class=\"no-padding margin-bottom-10\">Layout Options</legend>\r\n        <section>\r\n            <label><input type=\"checkbox\" ng-model=\"fixedHeader\"\r\n                          class=\"checkbox style-0\"><span>Fixed Header</span></label>\r\n            <label><input type=\"checkbox\"\r\n                          ng-model=\"fixedNavigation\"\r\n                          class=\"checkbox style-0\"><span>Fixed Navigation</span></label>\r\n            <label><input type=\"checkbox\"\r\n                          ng-model=\"fixedRibbon\"\r\n                          class=\"checkbox style-0\"><span>Fixed Ribbon</span></label>\r\n            <label><input type=\"checkbox\"\r\n                          ng-model=\"fixedPageFooter\"\r\n                          class=\"checkbox style-0\"><span>Fixed Footer</span></label>\r\n            <label><input type=\"checkbox\"\r\n                          ng-model=\"insideContainer\"\r\n                          class=\"checkbox style-0\"><span>Inside <b>.container</b></span></label>\r\n            <label><input type=\"checkbox\"\r\n                          ng-model=\"rtl\"\r\n                          class=\"checkbox style-0\"><span>RTL</span></label>\r\n            <label><input type=\"checkbox\"\r\n                          ng-model=\"menuOnTop\"\r\n                          class=\"checkbox style-0\"><span>Menu on <b>top</b></span></label>\r\n            <label><input type=\"checkbox\"\r\n                          ng-model=\"colorblindFriendly\"\r\n                          class=\"checkbox style-0\"><span>For Colorblind <div\r\n                    class=\"font-xs text-right\">(experimental)\r\n            </div></span>\r\n            </label><span id=\"smart-bgimages\"></span></section>\r\n        <section><h6 class=\"margin-top-10 semi-bold margin-bottom-5\">Clear Localstorage</h6><a\r\n                ng-click=\"factoryReset()\" class=\"btn btn-xs btn-block btn-primary\" id=\"reset-smart-widget\"><i\r\n                class=\"fa fa-refresh\"></i> Factory Reset</a></section>\r\n\r\n        <h6 class=\"margin-top-10 semi-bold margin-bottom-5\">SmartAdmin Skins</h6>\r\n\r\n\r\n        <section id=\"smart-styles\">\r\n            <a ng-repeat=\"skin in skins\" ng-click=\"setSkin(skin)\" class=\"{{skin.class}}\" style=\"{{skin.style}}\"><i ng-if=\"skin.name == $parent.smartSkin\" class=\"fa fa-check fa-fw\"></i> {{skin.label}} <sup ng-if=\"skin.beta\">beta</sup></a>\r\n        </section>\r\n    </form>\r\n</div>");}]);
'use strict';

angular.module('app.ui').directive('smartClassFilter', function () {
    return {
        restrict: 'A',
        scope: {
            model: '=',
            displayElements: '@',
            filterElements: '@'
        },
        link: function (scope, element) {
            scope.$watch('model', function (model) {
                if (angular.isString(model)) {
                    var search = model.trim();
                    if (search) {
                        angular.element(scope.displayElements, element).hide();

                        angular.element(scope.filterElements, element)
                            .filter(function () {
                                var r = new RegExp(search, 'i');
                                return r.test($(this).attr('class') + $(this).attr('alt'))
                            })
                            .closest(scope.displayElements).show();
                    } else {
                        angular.element(scope.displayElements, element).show();
                    }
                }
            })
        }
    }
});

"use strict";

angular.module('app.ui').directive('smartHtmlPopoverPopup', function () {
    return {
        restrict: "EA",
        replace: true,
        scope: { title: "@", content: "@", placement: "@", animation: "&", isOpen: "&" },
        template: '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title" bind-html-unsafe="title" ng-show="title"></h3><div class="popover-content" bind-html-unsafe="content"></div></div></div>'
    };
});
angular.module('app.ui').directive('smartHtmlPopover',function ($tooltip) {
    return $tooltip("smartHtmlPopover", "popover", "click");
});
'use strict';

angular.module('app.ui').directive('smartJquiAccordion', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            element.accordion({
                autoHeight : false,
                heightStyle : "content",
                collapsible : true,
                animate : 300,
                icons: {
                    header: "fa fa-plus",    // custom icon class
                    activeHeader: "fa fa-minus" // custom icon class
                },
                header : "h4"
            })
        }
    }
});

'use strict';

angular.module('app.ui').directive('smartJquiAjaxAutocomplete', function () {
    return {
        restrict: 'A',
        scope: {
            ngModel: '='
        },
        link: function (scope, element, attributes) {
            function split(val) {
                return val.split(/,\s*/);
            }

            function extractLast(term) {
                return split(term).pop();
            }

            function extractFirst(term) {
                return split(term)[0];
            }


            element.autocomplete({
                source: function (request, response) {
                    jQuery.getJSON(
                            "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + extractLast(request.term),
                        function (data) {
                            response(data);
                        }
                    );
                },
                minLength: 3,
                select: function (event, ui) {
                    var selectedObj = ui.item,
                    placeName = selectedObj.value;
                    if (typeof placeName == "undefined") placeName = element.val();

                    if (placeName) {
                        var terms = split(element.val());
                        // remove the current input
                        terms.pop();
                        // add the selected item (city only)
                        terms.push(extractFirst(placeName));
                        // add placeholder to get the comma-and-space at the end
                        terms.push("");

                        scope.$apply(function(){
                            scope.ngModel = terms.join(", ")
                        });
                    }

                    return false;
                },
                focus: function() {
                    // prevent value inserted on focus
                    return false;
                },
                delay: 100
            });
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiAutocomplete', function () {
    return {
        restrict: 'A',
        scope: {
            'source': '='
        },
        link: function (scope, element, attributes) {

            element.autocomplete({
                source: scope.source
            });
        }
    }
});
'use strict';

/*
 * CONVERT DIALOG TITLE TO HTML
 * REF: http://stackoverflow.com/questions/14488774/using-html-in-a-dialogs-title-in-jquery-ui-1-10
 */
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function (title) {
        if (!this.options.title) {
            title.html("&#160;");
        } else {
            title.html(this.options.title);
        }
    }
}));


angular.module('app.ui').directive('smartJquiDialog', function () {

    var optionAttributes = ['autoOpen', 'modal', 'width', 'resizable'];

    var defaults = {
        width: Math.min($(window).width() * .7, 600),
        autoOpen: false,
        resizable: false
    };


    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            var title = element.find('[data-dialog-title]').remove().html();

            var options = _.clone(defaults);

            optionAttributes.forEach(function (option) {
                if (element.data(option)) {
                    options[option] = element.data(option);
                }
            });

            var buttons = element.find('[data-dialog-buttons]').remove()
                .find('button').map(function (idx, button) {
                    return {
                        class: button.className,
                        html: button.innerHTML,
                        click: function () {
                            if ($(button).data('action'))
                                scope.$eval($(button).data('action'));
                            element.dialog("close");
                        }
                    }
                });

            element.dialog(_.extend({
                title: title,
                buttons: buttons
            }, options));

        }
    }
});
'use strict';

//    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
//        _title: function (title) {
//            if (!this.options.title) {
//                title.html("&#160;");
//            } else {
//                title.html(this.options.title);
//            }
//        }
//    }));


angular.module('app.ui').directive('smartJquiDialogLauncher', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-jqui-dialog-launcher data-smart-jqui-dialog-launcher');
            element.on('click', function (e) {
                $(attributes.smartJquiDialogLauncher).dialog('open');
                e.preventDefault();
            })
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiDynamicTabs', function ($timeout) {

	
	function addDomEvents(element){

		$('#tabs2').tabs();

		var tabTitle = $("#tab_title"), tabContent = $("#tab_content"), tabTemplate = "<li style='position:relative;'> <span class='air air-top-left delete-tab' style='top:7px; left:7px;'><button class='btn btn-xs font-xs btn-default hover-transparent'><i class='fa fa-times'></i></button></span></span><a href='#{href}'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #{label}</a></li>", tabCounter = 2;

		var tabs = $('#tabs2').tabs();

		// modal dialog init: custom buttons and a "close" callback reseting the form inside
		var dialog = $("#addtab").dialog({
			autoOpen : false,
			width : 600,
			resizable : false,
			modal : true,
			buttons : [{
			html : "<i class='fa fa-times'></i>&nbsp; Cancel",
			"class" : "btn btn-default",
			click : function() {
			$(this).dialog("close");

		}
		}, {

			html : "<i class='fa fa-plus'></i>&nbsp; Add",
			"class" : "btn btn-danger",
			click : function() {
				addTab();
				$(this).dialog("close");
			}
		}]
		});

		// addTab form: calls addTab function on submit and closes the dialog
		var form = dialog.find("form").submit(function(event) {
			addTab();
			dialog.dialog("close");
			event.preventDefault();
		});

		// actual addTab function: adds new tab using the input from the form above
		function addTab() {
			var label = tabTitle.val() || "Tab " + tabCounter, id = "tabs-" + tabCounter, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)), tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

			tabs.find(".ui-tabs-nav").append(li);
			tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
			tabs.tabs("refresh");
			tabCounter++;

			// clear fields
			$("#tab_title").val("");
			$("#tab_content").val("");
		}

		// addTab button: just opens the dialog
		$("#add_tab").button().click(function() {
			dialog.dialog("open");
		});

		// close icon: removing the tab on click
		$("#tabs2").on("click", 'span.delete-tab', function() {

			var panelId = $(this).closest("li").remove().attr("aria-controls");
			$("#" + panelId).remove();
			tabs.tabs("refresh");

		});

	}

	function link(element){

		$timeout(function(){
			addDomEvents(element);
		});

	}


    return {
        restrict: 'A',
        link: link
    }
});

'use strict';

angular.module('app.ui').directive('smartJquiMenu', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            element.menu();
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiTabs', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            element.tabs();
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartNestable', function () {
    return {
        restrict: 'A',
        scope: {
            group: '@',
            output: '='
        },
        link: function (scope, element, attributes) {
            var options = {};
            if(scope.group){
                options.group = scope.group;
            }
            element.nestable(options);
            if(attributes.output){
                element.on('change', function(){
                    scope.$apply(function(){
                        scope.output = element.nestable('serialize');
                    });
                });
                scope.output = element.nestable('serialize');
            }

        }
    }
});
'use strict';

angular.module('app.ui').directive('smartProgressbar', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
        	lazyScript.register('build/vendor.ui.js').then(function(){
        		tElement.removeAttr('smart-progressbar data-smart-progressbar');
        		tElement.progressbar({
        		    display_text : 'fill'
        		})
        	})

        }
    }
});
'use strict';

angular.module('app.ui').directive('smartRideCarousel', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-ride-carousel data-smart-ride-carousel');
            tElement.carousel(tElement.data());
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartSuperBox', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {

            tElement.removeAttr('smart-super-box data-smart-super-box');

            tElement.SuperBox();
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartTreeviewContent', function ($compile) {
    return {
        restrict: 'E',
        link: function (scope, element) {
            var $content = $(scope.item.content);

            function handleExpanded(){
                $content.find('>i')
                    .toggleClass('fa-plus-circle', !scope.item.expanded)
                    .toggleClass('fa-minus-circle', !!scope.item.expanded)

            }


            if (scope.item.children && scope.item.children.length) {
                $content.on('click', function(){
                    scope.$apply(function(){
                        scope.item.expanded = !scope.item.expanded;
                        handleExpanded();
                    });


                });
                handleExpanded();
            }

            element.replaceWith($content);


        }
    }
});

angular.module('app.ui').directive('smartTreeview', function ($compile, $sce) {
    return {
        restrict: 'A',
        scope: {
            'items': '='
        },
        template: '<li ng-class="{parent_li: item.children.length}" ng-repeat="item in items" role="treeitem">' +
            '<smart-treeview-content></smart-treeview-content>' +
            '<ul ng-if="item.children.length" smart-treeview ng-show="item.expanded"  items="item.children" role="group" class="smart-treeview-group" ></ul>' +
            '</li>',
        compile: function (element) {
            // Break the recursion loop by removing the contents
            var contents = element.contents().remove();
            var compiledContents;
            return {
                post: function (scope, element) {
                    // Compile the contents
                    if (!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    // Re-add the compiled contents to the element
                    compiledContents(scope, function (clone) {
                        element.append(clone);
                    });
                }
            };
        }
    };
});
"use strict";

angular.module('app.auth').directive('facebookSignin', function ($rootScope, ezfb) {
    return {
        replace: true,
        restrict: 'E',
        template: '<a class="btn btn-block btn-social btn-facebook"><i class="fa fa-facebook"></i> Sign in with Facebook</a>',
        link: function(scope, element){
            element.on('click', function(){
                ezfb.login(function (res) {
                    if (res.authResponse) {
                        $rootScope.$broadcast('event:facebook-signin-success', res.authResponse);
                    }
                }, {scope: 'public_profile'});
            })

        }
    }
});
"use strict";

angular.module('app.auth').directive('googleSignin', function ($rootScope, GooglePlus) {
    return {
        restrict: 'E',
        template: '<a class="g-signin btn btn-block btn-social btn-google-plus"><i class="fa fa-google-plus"></i> Sign in with Google</a>',
        replace: true,
        link: function (scope, element) {
            element.on('click', function(){
                GooglePlus.login().then(function (authResult) {
                    $rootScope.$broadcast('event:google-plus-signin-success', authResult);

                }, function (err) {
                    $rootScope.$broadcast('event:google-plus-signin-failure', err);

                });
            })
        }
    };
});

'use strict';

angular.module('app.chat').factory('ChatApi', function ($q, $rootScope, User, $http, APP_CONFIG) {
    var dfd = $q.defer();
    var _user;
    var ChatSrv = {
        initialized: dfd.promise,
        users: [],
        messages: [],
        statuses: ['Online', 'Busy', 'Away', 'Log Off'],
        status: 'Online',
        setUser: function (user) {
            if (ChatSrv.users.indexOf(_user) != -1)
                ChatSrv.users.splice(ChatSrv.users.indexOf(_user), 1);
            _user = user;
            ChatSrv.users.push(_user);
        },
        sendMessage: function (text) {
            var message = {
                user: _user,
                body: text,
                date: new Date()
            };
            this.messages.push(message);
        }
    };


    $http.get(APP_CONFIG.apiRootUrl + '/chat.json').then(function(res){
        ChatSrv.messages = res.data.messages;
        ChatSrv.users = res.data.users;
        dfd.resolve();
    });

    ChatSrv.initialized.then(function () {

        User.initialized.then(function () {
            ChatSrv.setUser({
                username: User.username,
                picture: User.picture,
                status: ChatSrv.status
            });
        });

        $rootScope.$watch(function () {
            return User.username
        }, function (name, oldName) {
            if (name != oldName) {
                ChatSrv.setUser({
                    username: User.username,
                    picture: User.picture,
                    status: ChatSrv.status
                });
            }
        });
    });


    return ChatSrv;

});
(function() {
        
   'use strict';

    /*
    * SMARTCHAT PLUGIN ARRAYS & CONFIG
    * Dependency: js/plugin/moment/moment.min.js 
    *             js/plugin/cssemotions/jquery.cssemoticons.min.js 
    *             js/smart-chat-ui/smart.chat.ui.js
    * (DO NOT CHANGE) 
    */ 
        var boxList = [],
        showList = [],
        nameList = [],
        idList = [];
    /*
    * Width of the chat boxes, and the gap inbetween in pixel (minus padding)
    */ 
        var chatbox_config = {
            width: 200,
            gap: 35,
            offset: 0
        };



    /*
    * SMART CHAT ENGINE
    * Copyright (c) 2013 Wen Pu
    * Modified by MyOrange
    * All modifications made are hereby copyright (c) 2014-2015 MyOrange
    */

    // TODO: implement destroy()
    (function($) {
    $.widget("ui.chatbox", {
        options: {
            id: null, //id for the DOM element
            title: null, // title of the chatbox
            user: null, // can be anything associated with this chatbox
            hidden: false,
            offset: 0, // relative to right edge of the browser window
            width: 300, // width of the chatbox
            status: 'online', //
            alertmsg: null,
            alertshow: null,
            messageSent: function(id, user, msg) {
                // override this
                this.boxManager.addMsg(user.first_name, msg);
            },
            boxClosed: function(id) {
            }, // called when the close icon is clicked
            boxManager: {
                // thanks to the widget factory facility
                // similar to http://alexsexton.com/?p=51
                init: function(elem) {
                    this.elem = elem;
                },
                addMsg: function(peer, msg) {
                    var self = this;
                    var box = self.elem.uiChatboxLog;
                    var e = document.createElement('div');
                    box.append(e);
                    $(e).hide();

                    var systemMessage = false;

                    if (peer) {
                        var peerName = document.createElement("b");
                        $(peerName).text(peer + ": ");
                        e.appendChild(peerName);
                    } else {
                        systemMessage = true;
                    }

                    var msgElement = document.createElement(
                        systemMessage ? "i" : "span");
                    $(msgElement).text(msg);
                    e.appendChild(msgElement);
                    $(e).addClass("ui-chatbox-msg");
                    $(e).css("maxWidth", $(box).width());
                    $(e).fadeIn();
                    //$(e).prop( 'title', moment().calendar() ); // add dep: moment.js
                    $(e).find("span").emoticonize(); // add dep: jquery.cssemoticons.js
                    self._scrollToBottom();

                    if (!self.elem.uiChatboxTitlebar.hasClass("ui-state-focus")
                        && !self.highlightLock) {
                        self.highlightLock = true;
                        self.highlightBox();
                    }
                },
                highlightBox: function() {
                    var self = this;
                    self.elem.uiChatboxTitlebar.effect("highlight", {}, 300);
                    self.elem.uiChatbox.effect("bounce", {times: 2}, 300, function() {
                        self.highlightLock = false;
                        self._scrollToBottom();
                    });
                },
                toggleBox: function() {
                    this.elem.uiChatbox.toggle();
                },
                _scrollToBottom: function() {
                    var box = this.elem.uiChatboxLog;
                    box.scrollTop(box.get(0).scrollHeight);
                }
            }
        },
        toggleContent: function(event) {
            this.uiChatboxContent.toggle();
            if (this.uiChatboxContent.is(":visible")) {
                this.uiChatboxInputBox.focus();
            }
        },
        widget: function() {
            return this.uiChatbox
        },
        _create: function() {
            var self = this,
            options = self.options,
            title = options.title || "No Title",
            // chatbox
            uiChatbox = (self.uiChatbox = $('<div></div>'))
                .appendTo(document.body)
                .addClass('ui-widget ' +
                          //'ui-corner-top ' +
                          'ui-chatbox'
                         )
                .attr('outline', 0)
                .focusin(function() {
                    // ui-state-highlight is not really helpful here
                    //self.uiChatbox.removeClass('ui-state-highlight');
                    self.uiChatboxTitlebar.addClass('ui-state-focus');
                })
                .focusout(function() {
                    self.uiChatboxTitlebar.removeClass('ui-state-focus');
                }),
            // titlebar
            uiChatboxTitlebar = (self.uiChatboxTitlebar = $('<div></div>'))
                .addClass('ui-widget-header ' +
                          //'ui-corner-top ' +
                          'ui-chatbox-titlebar ' +
                          self.options.status +
                          ' ui-dialog-header' // take advantage of dialog header style
                         )
                .click(function(event) {
                    self.toggleContent(event);
                })
                .appendTo(uiChatbox),
            uiChatboxTitle = (self.uiChatboxTitle = $('<span></span>'))
                .html(title)
                .appendTo(uiChatboxTitlebar),
            uiChatboxTitlebarClose = (self.uiChatboxTitlebarClose = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Hide"></a>'))
                .addClass(//'ui-corner-all ' +
                          'ui-chatbox-icon '
                         )
                .attr('role', 'button')
                .hover(function() { uiChatboxTitlebarClose.addClass('ui-state-hover'); },
                       function() { uiChatboxTitlebarClose.removeClass('ui-state-hover'); })
                .click(function(event) {
                    uiChatbox.hide();
                    self.options.boxClosed(self.options.id);
                    return false;
                })
                .appendTo(uiChatboxTitlebar),
            uiChatboxTitlebarCloseText = $('<i></i>')
                .addClass('fa ' +
                          'fa-times')
                .appendTo(uiChatboxTitlebarClose),
            uiChatboxTitlebarMinimize = (self.uiChatboxTitlebarMinimize = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Minimize"></a>'))
                .addClass(//'ui-corner-all ' +
                          'ui-chatbox-icon'
                         )
                .attr('role', 'button')
                .hover(function() { uiChatboxTitlebarMinimize.addClass('ui-state-hover'); },
                       function() { uiChatboxTitlebarMinimize.removeClass('ui-state-hover'); })
                .click(function(event) {
                    self.toggleContent(event);
                    return false;
                })
                .appendTo(uiChatboxTitlebar),
            uiChatboxTitlebarMinimizeText = $('<i></i>')
                .addClass('fa ' +
                          'fa-minus')
                .appendTo(uiChatboxTitlebarMinimize),
            // content
            uiChatboxContent = (self.uiChatboxContent = $('<div class="'+ self.options.alertshow +'"><span class="alert-msg">'+ self.options.alertmsg + '</span></div>'))
                .addClass('ui-widget-content ' +
                          'ui-chatbox-content '
                         )
                .appendTo(uiChatbox),
            uiChatboxLog = (self.uiChatboxLog = self.element)
                .addClass('ui-widget-content ' +
                          'ui-chatbox-log ' +
                          'custom-scroll'
                         )
                .appendTo(uiChatboxContent),
            uiChatboxInput = (self.uiChatboxInput = $('<div></div>'))
                .addClass('ui-widget-content ' +
                          'ui-chatbox-input'
                         )
                .click(function(event) {
                    // anything?
                })
                .appendTo(uiChatboxContent),
            uiChatboxInputBox = (self.uiChatboxInputBox = $('<textarea></textarea>'))
                .addClass('ui-widget-content ' +
                          'ui-chatbox-input-box '
                         )
                .appendTo(uiChatboxInput)
                .keydown(function(event) {
                    if (event.keyCode && event.keyCode == $.ui.keyCode.ENTER) {
                        var msg = $.trim($(this).val());
                        if (msg.length > 0) {
                            self.options.messageSent(self.options.id, self.options.user, msg);
                        }
                        $(this).val('');
                        return false;
                    }
                })
                .focusin(function() {
                    uiChatboxInputBox.addClass('ui-chatbox-input-focus');
                    var box = $(this).parent().prev();
                    box.scrollTop(box.get(0).scrollHeight);
                })
                .focusout(function() {
                    uiChatboxInputBox.removeClass('ui-chatbox-input-focus');
                });

            // disable selection
            uiChatboxTitlebar.find('*').add(uiChatboxTitlebar).disableSelection();

            // switch focus to input box when whatever clicked
            uiChatboxContent.children().click(function() {
                // click on any children, set focus on input box
                self.uiChatboxInputBox.focus();
            });

            self._setWidth(self.options.width);
            self._position(self.options.offset);

            self.options.boxManager.init(self);

            if (!self.options.hidden) {
                uiChatbox.show();
            }
            
            $(".ui-chatbox [rel=tooltip]").tooltip();
            //console.log("tooltip created");
        },
        _setOption: function(option, value) {
            if (value != null) {
                switch (option) {
                case "hidden":
                    if (value)
                        this.uiChatbox.hide();
                    else
                        this.uiChatbox.show();
                    break;
                case "offset":
                    this._position(value);
                    break;
                case "width":
                    this._setWidth(value);
                    break;
                }
            }
            $.Widget.prototype._setOption.apply(this, arguments);
        },
        _setWidth: function(width) {
            this.uiChatbox.width((width + 28) + "px");
            //this.uiChatboxTitlebar.width((width + 28) + "px");
            //this.uiChatboxLog.width(width + "px");
           // this.uiChatboxInput.css("maxWidth", width + "px");
            // padding:2, boarder:2, margin:5
            this.uiChatboxInputBox.css("width", (width + 18) + "px");
        },
        _position: function(offset) {
            this.uiChatbox.css("right", offset);
        }
    });
    }(jQuery));


    /*
    * jQuery CSSEmoticons plugin 0.2.9
    *
    * Copyright (c) 2010 Steve Schwartz (JangoSteve)
    *
    * Dual licensed under the MIT and GPL licenses:
    *   http://www.opensource.org/licenses/mit-license.php
    *   http://www.gnu.org/licenses/gpl.html
    *
    * Date: Sun Oct 22 1:00:00 2010 -0500
    */
    (function($) {
    $.fn.emoticonize = function(options) {

    var opts = $.extend({}, $.fn.emoticonize.defaults, options);

    var escapeCharacters = [ ")", "(", "*", "[", "]", "{", "}", "|", "^", "<", ">", "\\", "?", "+", "=", "." ];

    var threeCharacterEmoticons = [
        // really weird bug if you have :{ and then have :{) in the same container anywhere *after* :{ then :{ doesn't get matched, e.g. :] :{ :) :{) :) :-) will match everything except :{
        //  But if you take out the :{) or even just move :{ to the right of :{) then everything works fine. This has something to do with the preMatch string below I think, because
        //  it'll work again if you set preMatch equal to '()'
        //  So for now, we'll just remove :{) from the emoticons, because who actually uses this mustache man anyway?
      // ":{)",
      ":-)", ":o)", ":c)", ":^)", ":-D", ":-(", ":-9", ";-)", ":-P", ":-p", ":-Þ", ":-b", ":-O", ":-/", ":-X", ":-#", ":'(", "B-)", "8-)", ";*(", ":-*", ":-\\",
      "?-)", // <== This is my own invention, it's a smiling pirate (with an eye-patch)!
      // and the twoCharacterEmoticons from below, but with a space inserted
      ": )", ": ]", "= ]", "= )", "8 )", ": }", ": D", "8 D", "X D", "x D", "= D", ": (", ": [", ": {", "= (", "; )", "; ]", "; D", ": P", ": p", "= P", "= p", ": b", ": Þ", ": O", "8 O", ": /", "= /", ": S", ": #", ": X", "B )", ": |", ": \\", "= \\", ": *", ": &gt;", ": &lt;"//, "* )"
    ];

    var twoCharacterEmoticons = [ // separate these out so that we can add a letter-spacing between the characters for better proportions
      ":)", ":]", "=]", "=)", "8)", ":}", ":D", ":(", ":[", ":{", "=(", ";)", ";]", ";D", ":P", ":p", "=P", "=p", ":b", ":Þ", ":O", ":/", "=/", ":S", ":#", ":X", "B)", ":|", ":\\", "=\\", ":*", ":&gt;", ":&lt;"//, "*)"
    ];

    var specialEmoticons = { // emoticons to be treated with a special class, hash specifies the additional class to add, along with standard css-emoticon class
      "&gt;:)": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
      "&gt;;)": { cssClass: "red-emoticon small-emoticon spaced-emoticon"},
      "&gt;:(": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
      "&gt;: )": { cssClass: "red-emoticon small-emoticon" },
      "&gt;; )": { cssClass: "red-emoticon small-emoticon"},
      "&gt;: (": { cssClass: "red-emoticon small-emoticon" },
      ";(":     { cssClass: "red-emoticon spaced-emoticon" },
      "&lt;3":  { cssClass: "pink-emoticon counter-rotated" },
      "O_O":    { cssClass: "no-rotate" },
      "o_o":    { cssClass: "no-rotate" },
      "0_o":    { cssClass: "no-rotate" },
      "O_o":    { cssClass: "no-rotate" },
      "T_T":    { cssClass: "no-rotate" },
      "^_^":    { cssClass: "no-rotate" },
      "O:)":    { cssClass: "small-emoticon spaced-emoticon" },
      "O: )":   { cssClass: "small-emoticon" },
      "8D":     { cssClass: "small-emoticon spaced-emoticon" },
      "XD":     { cssClass: "small-emoticon spaced-emoticon" },
      "xD":     { cssClass: "small-emoticon spaced-emoticon" },
      "=D":     { cssClass: "small-emoticon spaced-emoticon" },
      "8O":     { cssClass: "small-emoticon spaced-emoticon" },
      "[+=..]":  { cssClass: "no-rotate nintendo-controller" }
      //"OwO":  { cssClass: "no-rotate" }, // these emoticons overflow and look weird even if they're made even smaller, could probably fix this with some more css trickery
      //"O-O":  { cssClass: "no-rotate" },
      //"O=)":    { cssClass: "small-emoticon" } 
    }

    var specialRegex = new RegExp( '(\\' + escapeCharacters.join('|\\') + ')', 'g' );
    // One of these characters must be present before the matched emoticon, or the matched emoticon must be the first character in the container HTML
    //  This is to ensure that the characters in the middle of HTML properties or URLs are not matched as emoticons
    //  Below matches ^ (first character in container HTML), \s (whitespace like space or tab), or \0 (NULL character)
    // (<\\S+.*>) matches <\\S+.*> (matches an HTML tag like <span> or <div>), but haven't quite gotten it working yet, need to push this fix now
    var preMatch = '(^|[\\s\\0])';

    for ( var i=threeCharacterEmoticons.length-1; i>=0; --i ){
      threeCharacterEmoticons[i] = threeCharacterEmoticons[i].replace(specialRegex,'\\$1');
      threeCharacterEmoticons[i] = new RegExp( preMatch+'(' + threeCharacterEmoticons[i] + ')', 'g' );
    }

    for ( var i=twoCharacterEmoticons.length-1; i>=0; --i ){
      twoCharacterEmoticons[i] = twoCharacterEmoticons[i].replace(specialRegex,'\\$1');
      twoCharacterEmoticons[i] = new RegExp( preMatch+'(' + twoCharacterEmoticons[i] + ')', 'g' );
    }

    for ( var emoticon in specialEmoticons ){
      specialEmoticons[emoticon].regexp = emoticon.replace(specialRegex,'\\$1');
      specialEmoticons[emoticon].regexp = new RegExp( preMatch+'(' + specialEmoticons[emoticon].regexp + ')', 'g' );
    }

    var exclude = 'span.css-emoticon';
    if(opts.exclude){ exclude += ','+opts.exclude; }
    var excludeArray = exclude.split(',')

    return this.not(exclude).each(function() {
      var container = $(this);
      var cssClass = 'css-emoticon'
      if(opts.animate){ cssClass += ' un-transformed-emoticon animated-emoticon'; }
      
      for( var emoticon in specialEmoticons ){
        var specialCssClass = cssClass + " " + specialEmoticons[emoticon].cssClass;
        container.html(container.html().replace(specialEmoticons[emoticon].regexp,"$1<span class='" + specialCssClass + "'>$2</span>"));
      }
      $(threeCharacterEmoticons).each(function(){
        container.html(container.html().replace(this,"$1<span class='" + cssClass + "'>$2</span>"));
      });                                                          
      $(twoCharacterEmoticons).each(function(){                    
        container.html(container.html().replace(this,"$1<span class='" + cssClass + " spaced-emoticon'>$2</span>"));
      });
      // fix emoticons that got matched more then once (where one emoticon is a subset of another emoticon), and thus got nested spans
      $.each(excludeArray,function(index,item){
        container.find($.trim(item)+" span.css-emoticon").each(function(){
          $(this).replaceWith($(this).text());
        });
      });
      if(opts.animate){
        setTimeout(function(){$('.un-transformed-emoticon').removeClass('un-transformed-emoticon');}, opts.delay);
      }
    });
    }

    $.fn.unemoticonize = function(options) {
    var opts = $.extend({}, $.fn.emoticonize.defaults, options);
    return this.each(function() {
      var container = $(this);
      container.find('span.css-emoticon').each(function(){
        // add delay equal to animate speed if animate is not false
        var span = $(this);
        if(opts.animate){
          span.addClass('un-transformed-emoticon');
          setTimeout(function(){span.replaceWith(span.text());}, opts.delay); 
        }else{
          span.replaceWith(span.text());
        }
      });
    });
    }

    $.fn.emoticonize.defaults = {animate: true, delay: 500, exclude: 'pre,code,.no-emoticons'}
    })(jQuery);

    var chatboxManager = function () {
        
    var init = function (options) {
        $.extend(chatbox_config, options)
    };


    var delBox = function (id) {
        // TODO
    };

    var getNextOffset = function () {
        return (chatbox_config.width + chatbox_config.gap) * showList.length;
    };

    var boxClosedCallback = function (id) {
        // close button in the titlebar is clicked
        var idx = showList.indexOf(id);
        if (idx != -1) {
            showList.splice(idx, 1);
            var diff = chatbox_config.width + chatbox_config.gap;
            for (var i = idx; i < showList.length; i++) {
                chatbox_config.offset = $("#" + showList[i]).chatbox("option", "offset");
                $("#" + showList[i]).chatbox("option", "offset", chatbox_config.offset - diff);
            }
        } else {
            alert("NOTE: Id missing from array: " + id);
        }
    };

    // caller should guarantee the uniqueness of id
    var addBox = function (id, user, name) {
        var idx1 = showList.indexOf(id);
        var idx2 = boxList.indexOf(id);
        if (idx1 != -1) {
            // found one in show box, do nothing
        } else if (idx2 != -1) {
            // exists, but hidden
            // show it and put it back to showList
            $("#" + id).chatbox("option", "offset", getNextOffset());
            var manager = $("#" + id).chatbox("option", "boxManager");
            manager.toggleBox();
            showList.push(id);
        } else {
            var el = document.createElement('div');
            el.setAttribute('id', id);
            $(el).chatbox({
                id: id,
                user: user,
                title: '<i title="' + user.status + '"></i>' + user.first_name + " " + user.last_name,
                hidden: false,
                offset: getNextOffset(),
                width: chatbox_config.width,
                status: user.status,
                alertmsg: user.alertmsg,
                alertshow: user.alertshow,
                messageSent: dispatch,
                boxClosed: boxClosedCallback
            });
            boxList.push(id);
            showList.push(id);
            nameList.push(user.first_name);
        }
    };

    var messageSentCallback = function (id, user, msg) {
        var idx = boxList.indexOf(id);
        chatbox_config.messageSent(nameList[idx], msg);
    };

    // not used in demo
    var dispatch = function (id, user, msg) {
        //$("#log").append("<i>" + moment().calendar() + "</i> you said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>");
        if ($('#chatlog').length){
            $("#chatlog").append("You said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>").effect("highlight", {}, 500);;
        }
        $("#" + id).chatbox("option", "boxManager").addMsg("Me", msg);
    }

    return {
        init: init,
        addBox: addBox,
        delBox: delBox,
        dispatch: dispatch
    };
    }();

    var link = function (scope, element, attributes) {

        $('a[data-chat-id]').click(function (event, ui) {
            if(!$(this).hasClass('offline')){

                var $this = $(this),
                    temp_chat_id = $this.attr("data-chat-id"),
                    fname = $this.attr("data-chat-fname"),
                    lname = $this.attr("data-chat-lname"),
                    status = $this.attr("data-chat-status") || "online",
                    alertmsg = $this.attr("data-chat-alertmsg"),
                    alertshow =  $this.attr("data-chat-alertshow") || false;


                chatboxManager.addBox(temp_chat_id, {
                    // dest:"dest" + counter, 
                    // not used in demo
                    title: "username" + temp_chat_id,
                    first_name: fname,
                    last_name: lname,
                    status: status,
                    alertmsg: alertmsg,
                    alertshow: alertshow
                    //you can add your own options too
                });
            }

            event.preventDefault();

        });

    }

    angular.module('app.chat').directive('asideChatWidget', function (ChatApi) {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/dashboard/chat/directives/aside-chat-widget.tpl.html',
            link: link
        }
    });

})(); 
"use strict";

angular.module('app.chat').directive('chatUsers', function(ChatApi){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/dashboard/chat/directives/chat-users.tpl.html',
        scope: true,
        link: function(scope, element){
            scope.open = false;
            scope.openToggle = function(){
                scope.open = !scope.open;
            };

            scope.chatUserFilter = '';

            ChatApi.initialized.then(function () {
                scope.chatUsers = ChatApi.users;
            });
        }
    }
});

"use strict";

angular.module('app.chat').directive('chatWidget', function (ChatApi) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/dashboard/chat/directives/chat-widget.tpl.html',
        scope: {},
        link: function (scope, element) {
            scope.newMessage = '';

            scope.sendMessage = function () {
                ChatApi.sendMessage(scope.newMessage);
                scope.newMessage = '';
            };

            scope.messageTo = function(user){
                scope.newMessage += (user.username + ', ');
            };

            ChatApi.initialized.then(function () {
                scope.chatMessages = ChatApi.messages;
            });
            scope.$watch(function () {
                return ChatApi.messages.length
            }, function (count) {
                if (count){
                    var $body = $('.chat-body', element);
                    $body.animate({scrollTop: $body[0].scrollHeight});
                }
            })
        }
    }
});
"use strict";

 angular.module('app').directive('todoList', function ($timeout, Todo) {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/dashboard/todo/directives/todo-list.tpl.html',
        scope: {
            todos: '='
        },
        link: function (scope, element, attributes) {
            scope.title = attributes.title
            scope.icon = attributes.icon
            scope.state = attributes.state
            scope.filter = {
                state: scope.state
            }

            element.find('.todo').sortable({
                handle: '.handle',
                connectWith: ".todo",
                receive: function (event, ui) {

                    console.log(ui.item.scope().todo,scope.state)
                    var todo = ui.item.scope().todo;
                    var state = scope.state
                    // // console.log(ui.item, todo, state)
                    // // console.log(state, todo)
                    if (todo && state) {
                        todo.setState(state);
                         // ui.sender.sortable("cancel");
                        // scope.$apply();
                    } else {
                        console.log('Wat', todo, state);
                    }
                    
                }
            }).disableSelection();

        }
    }
});
"use strict";

angular.module('app').factory('Todo', function (Restangular, APP_CONFIG, $httpBackend) {

    var normalize = function(todo) {
        if(!todo._id){
            todo._id = _.unique('todo')
        }
        todo.toggle = function(){
            if (!todo.completedAt) {
                todo.state = 'Completed';
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.state = 'Critical';
                todo.completedAt = null;
            }
        };

        todo.setState = function(state){
            todo.state = state;
            if (state == 'Completed') {
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.completedAt = null;
            }
        };

        return todo;
    };

    var Todo = Restangular.all(APP_CONFIG.apiRootUrl + '/todos.json');

    Restangular.extendModel(APP_CONFIG.apiRootUrl + '/todos.json', normalize);
    Todo.normalize = normalize;

    return Todo
});
'use strict';

angular.module('app.tables').directive('datatableBasic', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            tableOptions: '='
        },
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var options = {
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> ",
                    "sLengthMenu": "_MENU_"
                },
                "autoWidth": false,
                "smartResponsiveHelper": null,
                "preDrawCallback": function () {
                    // Initialize the responsive datatables helper once.
                    if (!this.smartResponsiveHelper) {
                        this.smartResponsiveHelper = new ResponsiveDatatablesHelper(element, {
                            tablet: 1024,
                            phone: 480
                        });
                    }
                },
                "rowCallback": function (nRow) {
                    this.smartResponsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback": function (oSettings) {
                    this.smartResponsiveHelper.respond();
                }
            };

            if(attributes.tableOptions){
                options = angular.extend(options, scope.tableOptions)
            }

            var _dataTable;

            var childFormat = element.find('.smart-datatable-child-format');
            if(childFormat.length){
                var childFormatTemplate = childFormat.remove().html();
                element.on('click', childFormat.data('childControl'), function () {
                    var tr = $(this).closest('tr');

                    var row = _dataTable.row( tr );
                    if ( row.child.isShown() ) {
                        // This row is already open - close it
                        row.child.hide();
                        tr.removeClass('shown');
                    }
                    else {
                        // Open this row
                        var childScope = scope.$new();
                        childScope.d = row.data();
                        var html = $compile(childFormatTemplate)(childScope);
                        row.child( html ).show();
                        tr.addClass('shown');
                    }
                })
            }



            _dataTable =  element.DataTable(options);

            if(attributes.bindFilters){
                element.parent().find("div.toolbar").html('<div class="text-right"><img src="styles/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');

                element.on( 'keyup change', 'thead th input[type=text]', function () {

                    _dataTable
                        .column( $(this).parent().index()+':visible' )
                        .search( this.value )
                        .draw();

                } );
            }
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableColumnFilter', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var responsiveHelper = undefined;

            var breakpointDefinition = {
                tablet: 1024,
                phone: 480
            };

            var otable = element.DataTable({
                //"bFilter": false,
                //"bInfo": false,
                //"bLengthChange": false
                //"bAutoWidth": false,
                //"bPaginate": false,
                //"bStateSave": true // saves sort state using localStorage
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6 hidden-xs'f><'col-sm-6 col-xs-12 hidden-xs'<'toolbar'>>r>"+
                    "t"+
                    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> "
                },
                "autoWidth" : false,
                "preDrawCallback" : function() {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(element, breakpointDefinition);
                    }
                },
                "rowCallback" : function(nRow) {
                    responsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback" : function(oSettings) {
                    responsiveHelper.respond();
                }

            });

            // custom toolbar
            element.parent().find("div.toolbar").html('<div class="text-right"><img src="styles/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');

            // Apply the filter
            element.on( 'keyup change', 'thead th input[type=text]', function () {

                otable
                    .column( $(this).parent().index()+':visible' )
                    .search( this.value )
                    .draw();

            } );
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableColumnReorder', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var responsiveHelper = undefined;

            var breakpointDefinition = {
                tablet: 1024,
                phone: 480
            };

            element.dataTable({
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 hidden-xs'C>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 hidden-xs'i><'col-sm-6 col-xs-12'p>>",
                oLanguage: {
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> "
                },
                "autoWidth": false,
                "preDrawCallback": function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(element, breakpointDefinition);
                    }
                },
                "rowCallback": function (nRow) {
                    responsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback": function (oSettings) {
                    responsiveHelper.respond();
                }
            });
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableTableTools', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */
            var responsiveHelper = undefined;

            var breakpointDefinition = {
                tablet: 1024,
                phone: 480
            };

            element.dataTable({
                // Tabletools options:
                //   https://datatables.net/extensions/tabletools/button_options
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 hidden-xs'T>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 hidden-xs'i><'col-sm-6 col-xs-12'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> "
                },

                sFilterInput:  "form-control",
                "oTableTools": {
                    "aButtons": [
                        "copy",
                        "csv",
                        "xls",
                        {
                            "sExtends": "pdf",
                            "sTitle": "SmartAdmin_PDF",
                            "sPdfMessage": "SmartAdmin PDF Export",
                            "sPdfSize": "letter"
                        },
                        {
                            "sExtends": "print",
                            "sMessage": "Generated by SmartAdmin <i>(press Esc to close)</i>"
                        }
                    ],
                    "sSwfPath": "bower_components/datatables-tabletools/swf/copy_csv_xls_pdf.swf"
                },
                "autoWidth": false,
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(element, breakpointDefinition);
                    }
                },
                rowCallback: function (nRow) {
                    responsiveHelper.createExpandIcon(nRow);
                },
                drawCallback: function (oSettings) {
                    responsiveHelper.respond();
                }
            });
        }
    }
});
'use strict';

angular.module('app.tables').directive('jqGrid', function ($compile) {
    var jqGridCounter = 0;

    return {
        replace: true,
        restrict: 'E',
        scope: {
            gridData: '='
        },
        template: '<div>' +
            '<table></table>' +
            '<div class="jqgrid-pagination"></div>' +
            '</div>',
        controller: function($scope, $element){
            $scope.editRow  = function(row){
                $element.find('table').editRow(row);
            };
            $scope.saveRow  = function(row){
                $element.find('table').saveRow(row);
            };
            $scope.restoreRow  = function(row){
                $element.find('table').restoreRow(row);
            };
        },
        link: function (scope, element) {
            var gridNumber = jqGridCounter++;
            var wrapperId = 'jqgrid-' + gridNumber;
            element.attr('id', wrapperId);

            var tableId = 'jqgrid-table-' + gridNumber;
            var table = element.find('table');
            table.attr('id', tableId);

            var pagerId = 'jqgrid-pager-' + gridNumber;
            element.find('.jqgrid-pagination').attr('id', pagerId);


            table.jqGrid({
                data : scope.gridData.data,
                datatype : "local",
                height : 'auto',
                colNames : scope.gridData.colNames || [],
                colModel : scope.gridData.colModel || [],
                rowNum : 10,
                rowList : [10, 20, 30],
                pager : '#' + pagerId,
                sortname : 'id',
                toolbarfilter : true,
                viewrecords : true,
                sortorder : "asc",
                gridComplete : function() {
                    var ids = table.jqGrid('getDataIDs');
                    for (var i = 0; i < ids.length; i++) {
                        var cl = ids[i];
                        var be = "<button class='btn btn-xs btn-default' uib-tooltip='Edit Row' tooltip-append-to-body='true' ng-click='editRow("+ cl +")'><i class='fa fa-pencil'></i></button>";

                        var se = "<button class='btn btn-xs btn-default' uib-tooltip='Save Row' tooltip-append-to-body='true' ng-click='saveRow("+ cl +")'><i class='fa fa-save'></i></button>";

                        var ca = "<button class='btn btn-xs btn-default' uib-tooltip='Cancel' tooltip-append-to-body='true' ng-click='restoreRow("+ cl +")'><i class='fa fa-times'></i></button>";

                        table.jqGrid('setRowData', ids[i], {
                            act : be + se + ca
                        });
                    }
                },
                editurl : "dummy.html",
                caption : "SmartAdmin jQgrid Skin",
                multiselect : true,
                autowidth : true

            });
            table.jqGrid('navGrid', '#' + pagerId, {
                edit : false,
                add : false,
                del : true
            });
            table.jqGrid('inlineNav', '#' + pagerId);


            element.find(".ui-jqgrid").removeClass("ui-widget ui-widget-content");
            element.find(".ui-jqgrid-view").children().removeClass("ui-widget-header ui-state-default");
            element.find(".ui-jqgrid-labels, .ui-search-toolbar").children().removeClass("ui-state-default ui-th-column ui-th-ltr");
            element.find(".ui-jqgrid-pager").removeClass("ui-state-default");
            element.find(".ui-jqgrid").removeClass("ui-widget-content");

            // add classes
            element.find(".ui-jqgrid-htable").addClass("table table-bordered table-hover");
            element.find(".ui-jqgrid-btable").addClass("table table-bordered table-striped");

            element.find(".ui-pg-div").removeClass().addClass("btn btn-sm btn-primary");
            element.find(".ui-icon.ui-icon-plus").removeClass().addClass("fa fa-plus");
            element.find(".ui-icon.ui-icon-pencil").removeClass().addClass("fa fa-pencil");
            element.find(".ui-icon.ui-icon-trash").removeClass().addClass("fa fa-trash-o");
            element.find(".ui-icon.ui-icon-search").removeClass().addClass("fa fa-search");
            element.find(".ui-icon.ui-icon-refresh").removeClass().addClass("fa fa-refresh");
            element.find(".ui-icon.ui-icon-disk").removeClass().addClass("fa fa-save").parent(".btn-primary").removeClass("btn-primary").addClass("btn-success");
            element.find(".ui-icon.ui-icon-cancel").removeClass().addClass("fa fa-times").parent(".btn-primary").removeClass("btn-primary").addClass("btn-danger");

            element.find(".ui-icon.ui-icon-seek-prev").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-prev").removeClass().addClass("fa fa-backward");

            element.find(".ui-icon.ui-icon-seek-first").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-first").removeClass().addClass("fa fa-fast-backward");

            element.find(".ui-icon.ui-icon-seek-next").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-next").removeClass().addClass("fa fa-forward");

            element.find(".ui-icon.ui-icon-seek-end").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-end").removeClass().addClass("fa fa-fast-forward");

            $(window).on('resize.jqGrid', function() {
               table.jqGrid('setGridWidth', $("#content").width());
            });


            $compile(element.contents())(scope);
        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('fullScreen', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');
            var toggleFullSceen = function(e){
                if (!$body.hasClass("full-screen")) {
                    $body.addClass("full-screen");
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    }
                } else {
                    $body.removeClass("full-screen");
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            };

            element.on('click', toggleFullSceen);

        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('minifyMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
                var $body = $('body');
            var minifyMenu = function() {
                if (!$body.hasClass("menu-on-top")) {
                    $body.toggleClass("minified");
                    $body.removeClass("hidden-menu");
                    $('html').removeClass("hidden-menu-mobile-lock");
                }
            };

            element.on('click', minifyMenu);
        }
    }
})
'use strict';

angular.module('SmartAdmin.Layout').directive('reloadState', function ($rootScope) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('reload-state data-reload-state');
            tElement.on('click', function (e) {
                $rootScope.$state.transitionTo($rootScope.$state.current, $rootScope.$stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
                e.preventDefault();
            })
        }
    }
});

"use strict";

angular.module('SmartAdmin.Layout').directive('resetWidgets', function($state){

    return {
        restrict: 'A',
        link: function(scope, element){
            element.on('click', function(){
                $.SmartMessageBox({
                    title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content : "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons : '[No][Yes]'
                }, function(ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });

            });
        }
    }

});

'use strict';

angular.module('SmartAdmin.Layout').directive('searchMobile', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('search-mobile data-search-mobile');

            element.on('click', function (e) {
                $('body').addClass('search-mobile');
                e.preventDefault();
            });

            $('#cancel-search-js').on('click', function (e) {
                $('body').removeClass('search-mobile');
                e.preventDefault();
            });
        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('toggleMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');

            var toggleMenu = function(){
                if (!$body.hasClass("menu-on-top")){
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                } else if ( $body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated") ) {
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                }
            };

            element.on('click', toggleMenu);

            scope.$on('requestToggleMenu', function(){
                toggleMenu();
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('bigBreadcrumbs', function () {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div><h1 class="page-title txt-color-blueDark"></h1></div>',
        scope: {
            items: '=',
            icon: '@'
        },
        link: function (scope, element) {
            var first = _.first(scope.items);

            var icon = scope.icon || 'home';
            element.find('h1').append('<i class="fa-fw fa fa-' + icon + '"></i> ' + first);
            _.rest(scope.items).forEach(function (item) {
                element.find('h1').append(' <span>> ' + item + '</span>')
            })
        }
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('dismisser', function () {
    return {
        restrict: 'A',
        compile: function (element) {
            element.removeAttr('dismisser data-dissmiser')
            var closer = '<button class="close">&times;</button>';
            element.prepend(closer);
            element.on('click', '>button.close', function(){
                element.fadeOut('fast',function(){ $(this).remove(); });

            })
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('hrefVoid', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.attr('href','#');
            element.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
            })
        }
    }
});
'use strict';

/*
* Directive for toggling a ng-model with a button
* Source: https://gist.github.com/aeife/9374784
*/

angular.module('SmartAdmin.Layout').directive('radioToggle', function ($log) {
    return {
        scope: {
            model: "=ngModel",
            value: "@value"
        },
        link: function(scope, element, attrs) {

            element.parent().on('click', function() {
                scope.model = scope.value;
                scope.$apply();
            });
        }
    }
});
/**
 * DETECT MOBILE DEVICES
 * Description: Detects mobile device - if any of the listed device is
 *
 * detected class is inserted to <tElement>.
 *
 *  (so far this is covering most hand held devices)
 */
'use strict';

angular.module('SmartAdmin.Layout').directive('smartDeviceDetect', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-device-detect data-smart-device-detect');

            var isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
            
            tElement.toggleClass('desktop-detected', !isMobile);
            tElement.toggleClass('mobile-detected', isMobile);


        }
    }
});
/**
 *
 * Description: Directive utilizes FastClick library.
 *
 *
 * FastClick is a simple, easy-to-use library for eliminating the
 * 300ms delay between a physical tap and the firing of a click event on mobile browsers.
 * FastClick doesn't attach any listeners on desktop browsers.
 * @link: https://github.com/ftlabs/fastclick
 *
 * On mobile devices 'needsclick' class is attached to <tElement>
 *
 */


'use strict';

angular.module('SmartAdmin.Layout').directive('smartFastClick', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-fast-click data-smart-fast-click');

            FastClick.attach(tElement);

            if(!FastClick.notNeeded())
                tElement.addClass('needsclick')
        }
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('smartFitAppView', function ($rootScope, SmartCss) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-fit-app-view data-smart-fit-app-view leading-y data-leading-y');

            var leadingY = attributes.leadingY ? parseInt(attributes.leadingY) : 0;

            var selector = attributes.smartFitAppView;

            if(SmartCss.appViewSize && SmartCss.appViewSize.height){
                var height =  SmartCss.appViewSize.height - leadingY < 252 ? 252 :  SmartCss.appViewSize.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            }

            var listenerDestroy = $rootScope.$on('$smartContentResize', function (event, data) {
                var height = data.height - leadingY < 252 ? 252 : data.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            });

            element.on('$destroy', function () {
                listenerDestroy();
                SmartCss.remove(selector, 'height');
            });


        }
    }
});

"use strict";

angular.module('SmartAdmin.Layout').directive('smartInclude', function () {
        return {
            replace: true,
            restrict: 'A',
            templateUrl: function (element, attr) {
                return attr.smartInclude;
            },
            compile: function(element){
                element[0].className = element[0].className.replace(/placeholder[^\s]+/g, '');
            }
        };
    }
);


'use strict';

angular.module('SmartAdmin.Layout').directive('smartLayout', function ($rootScope, $timeout, $interval, $q, SmartCss, APP_CONFIG) {
    
    var _debug = 0;

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    var initialized = false, 
           initializedResolver = $q.defer();
    initializedResolver.promise.then(function () {
        initialized = true;
    });

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body'),
        $navigation ,
        $menu,
        $ribbon,
        $footer,
        $contentAnimContainer;


    (function cacheElements() {
        $navigation = $('#header');
        $menu = $('#left-panel');
        $ribbon = $('#ribbon');
        $footer = $('.page-footer');
        if (_.every([$navigation, $menu, $ribbon, $footer], function ($it) {
            return angular.isNumber($it.height())
        })) {
            initializedResolver.resolve();
        } else {
            $timeout(cacheElements, 100);
        }
    })();

    (function applyConfigSkin(){
        if(APP_CONFIG.smartSkin){
            $body.removeClass(_.pluck(APP_CONFIG.skins, 'name').join(' '));
            $body.addClass(APP_CONFIG.smartSkin);
        }
    })();


    return {
        priority: 2014,
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-layout data-smart-layout');

            var appViewHeight = 0 ,
                appViewWidth = 0,
                calcWidth,
                calcHeight,
                deltaX,
                deltaY;

            var forceResizeTrigger = false;

            function resizeListener() {

//                    full window height appHeight = Math.max($menu.outerHeight() - 10, getDocHeight() - 10);

                var menuHeight = $body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.height() : 0;
                var menuWidth = !$body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.width() + $menu.offset().left : 0;

                var $content = $('#content');
                var contentXPad = $content.outerWidth(true) - $content.width();
                var contentYPad = $content.outerHeight(true) - $content.height();


                calcWidth = $window.width() - menuWidth - contentXPad;
                calcHeight = $window.height() - menuHeight - contentYPad - $navigation.height() - $ribbon.height() - $footer.height();

                deltaX = appViewWidth - calcWidth;
                deltaY = appViewHeight - calcHeight;
                if (Math.abs(deltaX) || Math.abs(deltaY) || forceResizeTrigger) {

                    //console.log('exec', calcWidth, calcHeight);
                    $rootScope.$broadcast('$smartContentResize', {
                        width: calcWidth,
                        height: calcHeight,
                        deltaX: deltaX,
                        deltaY: deltaY
                    });
                    appViewWidth = calcWidth;
                    appViewHeight = calcHeight;
                    forceResizeTrigger = false;
                }
            }


            var looping = false;
            $interval(function () {
                if (looping) loop();
            }, 300);

            var debouncedRun = _.debounce(function () {
                run(300)
            }, 300);

            function run(delay) {
                initializedResolver.promise.then(function () {
                    attachOnResize(delay);
                });
            }

            run(10);

            function detachOnResize() {
                looping = false;
            }

            function attachOnResize(delay) {
                $timeout(function () {
                    looping = true;
                }, delay);
            }

            function loop() {
                $body.toggleClass('mobile-view-activated', $window.width() < 979);

                if ($window.width() < 979)
                    $body.removeClass('minified');

                resizeListener();
            }

            function handleHtmlId(toState) {
                if (toState.data && toState.data.htmlId) $html.attr('id', toState.data.htmlId);
                else $html.removeAttr('id');
            }

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                //console.log(1, '$stateChangeStart', event, toState, toParams, fromState, fromParams);

                handleHtmlId(toState);
                detachOnResize();
            });

            // initialized with 1 cause we came here with one $viewContentLoading request
            var viewContentLoading = 1;
            $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
                //console.log(2, '$viewContentLoading', event, viewConfig);
                viewContentLoading++;
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                //console.log(3, '$stateChangeSuccess', event, toState, toParams, fromState, fromParams);
                forceResizeTrigger = true;
            });

            $rootScope.$on('$viewContentLoaded', function (event) {
                //console.log(4, '$viewContentLoaded', event);
                viewContentLoading--;

                if (viewContentLoading == 0 && initialized) {
                    debouncedRun();
                }
            });
        }
    }
});



'use strict';

angular.module('SmartAdmin.Layout').directive('smartPageTitle', function ($rootScope, $timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-page-title data-smart-page-title');

            var defaultTitle = attributes.smartPageTitle;
            var listener = function(event, toState, toParams, fromState, fromParams) {
                var title = defaultTitle;
                if (toState.data && toState.data.title) title = toState.data.title + ' | ' + title;
                // Set asynchronously so page changes before title does
                $timeout(function() {
                    $('html head title').text(title);
                });
            };

            $rootScope.$on('$stateChangeStart', listener);

        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('smartRouterAnimationWrap', function ($rootScope,$timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-router-animation-wrap data-smart-router-animation-wrap wrap-for data-wrap-for');

            element.addClass('router-animation-container');


            var $loader = $('<div class="router-animation-loader"><i class="fa fa-gear fa-4x fa-spin"></i></div>')
                .css({
                    position: 'absolute',
                    top: 50,
                    left: 10
                }).hide().appendTo(element);


            var animateElementSelector = attributes.wrapFor;
            var viewsToMatch = attributes.smartRouterAnimationWrap.split(/\s/);

            var needRunContentViewAnimEnd = false;
            function contentViewAnimStart() {
                needRunContentViewAnimEnd = true;
                element.css({
                    height: element.height() + 'px',
                    overflow: 'hidden'
                }).addClass('active');
                $loader.fadeIn();

                $(animateElementSelector).addClass('animated faster fadeOutDown');
            }

            function contentViewAnimEnd() {
                if(needRunContentViewAnimEnd){
                    element.css({
                        height: 'auto',
                        overflow: 'visible'
                    }).removeClass('active');
                    

                    $(animateElementSelector).addClass('animated faster fadeInUp');

                    needRunContentViewAnimEnd = false;

                    $timeout(function(){
                        $(animateElementSelector).removeClass('animated');
                    },10);
                }
                $loader.fadeOut();
            }


            var destroyForStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                var isAnimRequired = _.any(viewsToMatch, function(view){
                   return _.has(toState.views, view) || _.has(fromState.views, view);
                });
                if(isAnimRequired){
                    contentViewAnimStart()
                }
            });

            var destroyForEnd = $rootScope.$on('$viewContentLoaded', function (event) {
                contentViewAnimEnd();
            });

            element.on('$destroy', function(){
                destroyForStart();
                destroyForEnd();

            });



        }
    }
});
angular.module('SmartAdmin.Layout').directive('speechRecognition', function ($log) {
	'use strict';

	$.root_ = $('body');
	var root, commands;

    root = window;
    window.appConfig = window.appConfig || {};

	if (appConfig.voice_command) {
		commands = appConfig.commands;
	}


	/*
	 * SMART VOICE
	 * Author: MyOrange | @bootstraphunt
	 * http://www.myorange.ca
	 */

	var SpeechRecognition = root.SpeechRecognition || root.webkitSpeechRecognition || root.mozSpeechRecognition || root.msSpeechRecognition || root.oSpeechRecognition;

// ref: http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API


// function
	$.speechApp = (function(speech) {

		speech.start = function() {

			// Add our commands to smartSpeechRecognition
			smartSpeechRecognition.addCommands(commands);

			if (smartSpeechRecognition) {
				// activate plugin
				smartSpeechRecognition.start();
				// add btn class
				$.root_.addClass("voice-command-active");
				// play sound
				$.speechApp.playON();
				// set localStorage when switch is on manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'true');
				}

			} else {
				// if plugin not found
				alert("speech plugin not loaded");
			}

		};
		speech.stop = function() {

			if (smartSpeechRecognition) {
				// deactivate plugin
				smartSpeechRecognition.abort();
				// remove btn class
				$.root_.removeClass("voice-command-active");
				// sound
				$.speechApp.playOFF();
				// del localStorage when switch if off manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'false');
				}
				// remove popover if visible
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			}

		};

		// play sound
		speech.playON = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".mp3");

			//$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playOFF = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playConfirmation = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		return speech;

	})({});



	/*
	 * SPEECH RECOGNITION ENGINE
	 * Copyright (c) 2013 Tal Ater
	 * Modified by MyOrange
	 * All modifications made are hereby copyright (c) 2014 MyOrange
	 */

	(function(undefined) {"use strict";

		// Check browser support
		// This is done as early as possible, to make it as fast as possible for unsupported browsers
		if (!SpeechRecognition) {
			root.smartSpeechRecognition = null;
			return undefined;
		}

		var commandsList = [], recognition, callbacks = {
				start : [],
				error : [],
				end : [],
				result : [],
				resultMatch : [],
				resultNoMatch : [],
				errorNetwork : [],
				errorPermissionBlocked : [],
				errorPermissionDenied : []
			}, autoRestart, lastStartedAt = 0,
		//debugState = false, // decleared in app.appConfig.js
		//appConfig.debugStyle = 'font-weight: bold; color: #00f;', // decleared in app.appConfig.js

		// The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
			optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g, commandToRegExp = function(command) {
				command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
					return optional ? match : '([^\\s]+)';
				}).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
				return new RegExp('^' + command + '$', 'i');
			};

		// This method receives an array of callbacks to iterate over, and invokes each of them
		var invokeCallbacks = function(callbacks) {
			callbacks.forEach(function(callback) {
				callback.callback.apply(callback.context);
			});
		};

		var initIfNeeded = function() {
			if (!isInitialized()) {
				root.smartSpeechRecognition.init({}, false);
			}
		};

		var isInitialized = function() {
			return recognition !== undefined;
		};

		root.smartSpeechRecognition = {
			// Initialize smartSpeechRecognition with a list of commands to recognize.
			// e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
			// smartSpeechRecognition understands commands with named variables, splats, and optional words.
			init : function(commands, resetCommands) {

				// resetCommands defaults to true
				if (resetCommands === undefined) {
					resetCommands = true;
				} else {
					resetCommands = !!resetCommands;
				}

				// Abort previous instances of recognition already running
				if (recognition && recognition.abort) {
					recognition.abort();
				}

				// initiate SpeechRecognition
				recognition = new SpeechRecognition();

				// Set the max number of alternative transcripts to try and match with a command
				recognition.maxAlternatives = 5;
				recognition.continuous = true;
				// Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
				recognition.lang = appConfig.voice_command_lang || 'en-US';

				recognition.onstart = function() {
					invokeCallbacks(callbacks.start);
					//debugState
					if (appConfig.debugState) {
						root.console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', appConfig.debugStyle_success);
						root.console.log('Language setting is set to: ' + recognition.lang, appConfig.debugStyle);
					}
					$.root_.removeClass("service-not-allowed");
					$.root_.addClass("service-allowed");
				};

				recognition.onerror = function(event) {
					invokeCallbacks(callbacks.error);
					switch (event.error) {
						case 'network':
							invokeCallbacks(callbacks.errorNetwork);
							break;
						case 'not-allowed':
						case 'service-not-allowed':
							// if permission to use the mic is denied, turn off auto-restart
							autoRestart = false;
							$.root_.removeClass("service-allowed");
							$.root_.addClass("service-not-allowed");
							//debugState
							if (appConfig.debugState) {
								root.console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', appConfig.debugStyle_warning);
							}
							// determine if permission was denied by user or automatically.
							if (new Date().getTime() - lastStartedAt < 200) {
								invokeCallbacks(callbacks.errorPermissionBlocked);
							} else {
								invokeCallbacks(callbacks.errorPermissionDenied);
								//console.log("You need your mic to be active")
							}
							break;
					}
				};

				recognition.onend = function() {
					invokeCallbacks(callbacks.end);
					// smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
					if (autoRestart) {
						// play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
						var timeSinceLastStart = new Date().getTime() - lastStartedAt;
						if (timeSinceLastStart < 1000) {
							setTimeout(root.smartSpeechRecognition.start, 1000 - timeSinceLastStart);
						} else {
							root.smartSpeechRecognition.start();
						}
					}
				};

				recognition.onresult = function(event) {
					invokeCallbacks(callbacks.result);

					var results = event.results[event.resultIndex], commandText;

					// go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
					for (var i = 0; i < results.length; i++) {
						// the text recognized
						commandText = results[i].transcript.trim();
						if (appConfig.debugState) {
							root.console.log('Speech recognized: %c' + commandText, appConfig.debugStyle);
						}

						// try and match recognized text to one of the commands on the list
						for (var j = 0, l = commandsList.length; j < l; j++) {
							var result = commandsList[j].command.exec(commandText);
							if (result) {
								var parameters = result.slice(1);
								if (appConfig.debugState) {
									root.console.log('command matched: %c' + commandsList[j].originalPhrase, appConfig.debugStyle);
									if (parameters.length) {
										root.console.log('with parameters', parameters);
									}
								}
								// execute the matched command
								commandsList[j].callback.apply(this, parameters);
								invokeCallbacks(callbacks.resultMatch);

								// for commands "sound on", "stop" and "mute" do not play sound or display message
								//var myMatchedCommand = commandsList[j].originalPhrase;

								var ignoreCallsFor = ["sound on", "mute", "stop"];

								if (ignoreCallsFor.indexOf(commandsList[j].originalPhrase) < 0) {
									// play sound when match found
									console.log(2);
									$.smallBox({
										title : (commandsList[j].originalPhrase),
										content : "loading...",
										color : "#333",
										sound_file : 'voice_alert',
										timeout : 2000
									});

									if ($('#speech-btn .popover').is(':visible')) {
										$('#speech-btn .popover').fadeOut(250);
									}
								}// end if

								return true;
							}
						} // end for
					}// end for

					invokeCallbacks(callbacks.resultNoMatch);
					//console.log("no match found for: " + commandText)
					$.smallBox({
						title : "Error: <strong>" + ' " ' + commandText + ' " ' + "</strong> no match found!",
						content : "Please speak clearly into the microphone",
						color : "#a90329",
						timeout : 5000,
						icon : "fa fa-microphone"
					});
					if ($('#speech-btn .popover').is(':visible')) {
						$('#speech-btn .popover').fadeOut(250);
					}
					return false;
				};

				// build commands list
				if (resetCommands) {
					commandsList = [];
				}
				if (commands.length) {
					this.addCommands(commands);
				}
			},

			// Start listening (asking for permission first, if needed).
			// Call this after you've initialized smartSpeechRecognition with commands.
			// Receives an optional options object:
			// { autoRestart: true }
			start : function(options) {
				initIfNeeded();
				options = options || {};
				if (options.autoRestart !== undefined) {
					autoRestart = !!options.autoRestart;
				} else {
					autoRestart = true;
				}
				lastStartedAt = new Date().getTime();
				recognition.start();
			},

			// abort the listening session (aka stop)
			abort : function() {
				autoRestart = false;
				if (isInitialized) {
					recognition.abort();
				}
			},

			// Turn on output of debug messages to the console. Ugly, but super-handy!
			debug : function(newState) {
				if (arguments.length > 0) {
					appConfig.debugState = !!newState;
				} else {
					appConfig.debugState = true;
				}
			},

			// Set the language the user will speak in. If not called, defaults to 'en-US'.
			// e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
			setLanguage : function(language) {
				initIfNeeded();
				recognition.lang = language;
			},

			// Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
			addCommands : function(commands) {
				var cb, command;

				initIfNeeded();

				for (var phrase in commands) {
					if (commands.hasOwnProperty(phrase)) {
						cb = root[commands[phrase]] || commands[phrase];
						if ( typeof cb !== 'function') {
							continue;
						}
						//convert command to regex
						command = commandToRegExp(phrase);

						commandsList.push({
							command : command,
							callback : cb,
							originalPhrase : phrase
						});
					}
				}
				if (appConfig.debugState) {
					root.console.log('Commands successfully loaded: %c' + commandsList.length, appConfig.debugStyle);
				}
			},

			// Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
			removeCommands : function(commandsToRemove) {
				if (commandsToRemove === undefined) {
					commandsList = [];
					return;
				}
				commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
				commandsList = commandsList.filter(function(command) {
					for (var i = 0; i < commandsToRemove.length; i++) {
						if (commandsToRemove[i] === command.originalPhrase) {
							return false;
						}
					}
					return true;
				});
			},

			// Lets the user add a callback of one of 9 types:
			// start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
			// Can also optionally receive a context for the callback function as the third argument
			addCallback : function(type, callback, context) {
				if (callbacks[type] === undefined) {
					return;
				}
				var cb = root[callback] || callback;
				if ( typeof cb !== 'function') {
					return;
				}
				callbacks[type].push({
					callback : cb,
					context : context || this
				});
			}
		};

	}).call(this);

	var autoStart = function() {

		smartSpeechRecognition.addCommands(commands);

		if (smartSpeechRecognition) {
			// activate plugin
			smartSpeechRecognition.start();
			// add btn class
			$.root_.addClass("voice-command-active");
			// set localStorage when switch is on manually
			if (appConfig.voice_localStorage) {
				localStorage.setItem('sm-setautovoice', 'true');
			}

		} else {
			// if plugin not found
			alert("speech plugin not loaded");
		}
	}
// if already running with localstorage
	if (SpeechRecognition && appConfig.voice_command && localStorage.getItem('sm-setautovoice') == 'true') {
		autoStart();
	}

// auto start
	if (SpeechRecognition && appConfig.voice_command_auto && appConfig.voice_command) {
		autoStart();
	}


	var link = function(scope, element) {


		if (SpeechRecognition && appConfig.voice_command) {

			// create dynamic modal instance
			var modal = $('<div class="modal fade" id="voiceModal" tabindex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"></div></div></div>');
			// attach to body
			modal.appendTo("body");

			element.on("click", function(e) {

            	if ($.root_.hasClass("voice-command-active")) {
					$.speechApp.stop();
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone-slash');
				} else {
					$.speechApp.start();
					//add popover
					$('#speech-btn .popover').fadeIn(350);
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone')

				}

				e.preventDefault();

            });

			//remove popover
			$(document).mouseup(function(e) {
				if (!$('#speech-btn .popover').is(e.target) && $('#speech-btn .popover').has(e.target).length === 0) {
					$('#speech-btn .popover').fadeOut(250);
				}
			});


			$("#speech-help-btn").on("click", function() {
				commands.help();
			});

		}
		else {
			$("#speech-btn").addClass("display-none");
		}


	}



    return {
        restrict: 'AE',
        link: link
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('stateBreadcrumbs', function ($rootScope, $state) {


    return {
        restrict: 'EA',
        replace: true,
        template: '<ol class="breadcrumb"><li>Home</li></ol>',
        link: function (scope, element) {

            function setBreadcrumbs(breadcrumbs) {
                var html = '<li>Home</li>';
                angular.forEach(breadcrumbs, function (crumb) {
                    html += '<li>' + crumb + '</li>'
                });
                element.html(html)
            }

            function fetchBreadcrumbs(stateName, breadcrunbs) {

                var state = $state.get(stateName);

                if (state && state.data && state.data.title && breadcrunbs.indexOf(state.data.title) == -1) {
                    breadcrunbs.unshift(state.data.title)
                }

                var parentName = stateName.replace(/.?\w+$/, '');
                if (parentName) {
                    return fetchBreadcrumbs(parentName, breadcrunbs);
                } else {
                    return breadcrunbs;
                }
            }

            function processState(state) {
                var breadcrumbs;
                if (state.data && state.data.breadcrumbs) {
                    breadcrumbs = state.data.breadcrumbs;
                } else {
                    breadcrumbs = fetchBreadcrumbs(state.name, []);
                }
                setBreadcrumbs(breadcrumbs);
            }

            processState($state.current);

            $rootScope.$on('$stateChangeStart', function (event, state) {
                processState(state);
            })
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').factory('lazyScript', function($q, $http){

    var cache = {};

    function isPending(scriptName){
        return (cache.hasOwnProperty(scriptName) && cache[scriptName].promise && cache[scriptName].promise.$$state.pending)
    }

    function isRegistered(scriptName){
        return cache.hasOwnProperty(scriptName)
    }
    function loadScript(scriptName){
        if(!cache[scriptName]){
            cache[scriptName] = $q.defer();
            var el = document.createElement( 'script' );
            el.onload = function(script){
                console.log('script is lazy loaded:', scriptName)
                cache[scriptName].resolve(scriptName);
            };
            el.src = scriptName;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(el, x);
            
        }
        return cache[scriptName].promise;

    }

    function register(scriptName){
        if(isPending(scriptName)){
            return cache[scriptName].promise
        }
        if(isRegistered(scriptName)){
            return $q.resolve(scriptName);
        } else {
            var dfd = $q.defer();

            loadScript(scriptName).then(function(){
                dfd.resolve(scriptName);
            });

            return dfd.promise; 

        }
    }
    return {
        register: function (scripts) {
            
            var dfd = $q.defer();
            var promises = [];
            if (angular.isString(scripts))
                scripts = [scripts];

            angular.forEach(scripts, function(script){
                promises.push(register(script));
            })

            $q.all(promises).then(function(resolves){
                dfd.resolve(resolves);
            })
            return dfd.promise;

        }
    };
});
'use strict';

angular.module('SmartAdmin.Layout').factory('SmartCss', function ($rootScope, $timeout) {

    var sheet = (function () {
        // Create the <style> tag
        var style = document.createElement("style");

        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "@media only screen and (max-width : 1024px)")

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        return style.sheet;
    })();

    var _styles = {};


    var SmartCss = {
        writeRule: function(selector){
            SmartCss.deleteRuleFor(selector);
            if(_.has(_styles, selector)){
                var css = selector + '{ ' + _.map(_styles[selector], function(v, k){
                    return  k + ':' +  v + ';'
                }).join(' ') +'}';
                sheet.insertRule(css, _.size(_styles) - 1);
            }
        },
        add: function (selector, property, value, delay) {
            if(!_.has(_styles, selector))
                _styles[selector] = {};

            if(value == undefined || value == null || value == '')
                delete _styles[selector][property];
            else
                _styles[selector][property] = value;


            if(_.keys(_styles[selector]).length == 0)
                delete _styles[selector];

            if(!delay)
                delay = 0;
            $timeout(function(){
                SmartCss.writeRule(selector);
            }, delay);

        },
        remove: function(selector, property, delay){
            SmartCss.add(selector, property, null, delay);
        },
        deleteRuleFor: function (selector) {
            _(sheet.rules).forEach(function (rule, idx) {
                if (rule.selectorText == selector) {
                    sheet.deleteRule(idx);
                }
            });
        },
        appViewSize: null
    };

    $rootScope.$on('$smartContentResize', function (event, data) {
        SmartCss.appViewSize = data;
    });

    return SmartCss;

});





"use strict";

angular.module('SmartAdmin.UI').directive('smartPopoverHtml', function () {
    return {
        restrict: "A",
        link: function(scope, element, attributes){
            var options = {};
            options.content = attributes.smartPopoverHtml;
            options.placement = attributes.popoverPlacement || 'top';
            options.html = true;
            options.trigger =  attributes.popoverTrigger || 'click';
            options.title =  attributes.popoverTitle || attributes.title;
            element.popover(options)

        }

    };
});


"use strict";

angular.module('SmartAdmin.UI').directive('smartTooltipHtml', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attributes){
                element.tooltip({
                    placement: attributes.tooltipPlacement || 'top',
                    html: true,
                    title: attributes.smartTooltipHtml
                })
            }
        };
    }
);

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztAssessmentsLionUpdateCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

    var init = function () {
        var state = $window.sessionStorage["assessmentstatus"];

        if (state == "1") {
            var assessment = JSON.parse($window.sessionStorage["assessment"]);
            $scope.nombre = assessment.nombre;
            $scope.days = assessment.days;
            $scope.cant = assessment.points;
            $scope.htmlcontent = assessment.htmlcontent;
            $scope.status = true;
        }
    }

    $scope.save = function () {
        $scope.messageQuestion = "Are you sure to save it?";
        var myEl = $element.find('#openQuestion');
        myEl.click();
    }

    var stopTime;

    $scope.savedata = function () {
        doSave();
    }

    var doSave = function () {
        $("#dialog").dialog("open");

        var assessment = {
            id: uuid2.newguid(),
            nombre: $scope.nombre,
            days : $scope.days,
            points: $scope.cant,
            htmlcontent: $scope.htmlcontent
        }
        $rootScope.assessments.push(assessment);

        localStorage.setItem('assessments', JSON.stringify($rootScope.assessments));

        stopTime = $interval(backTop, $rootScope.dialogTimer);
    }

    

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-assessment-lion');
    }

    init();
    
});
    

app.directive('mztAssessmentsLionUpdateForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-assessments-lion-update/mzt-assessments-lion-update-form.tpl.html',
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
        controller: 'mztAssessmentsLionUpdateCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztAssessmentsLionCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
   
    $scope.save = function () {
        $window.sessionStorage["assessmentstatus"] = "0"; // Operacion update
        $location.path('/form/mzt-assessment-lion-update');
    }

    $scope.go = function (assessment) {
        $window.sessionStorage["assessment"] = JSON.stringify(assessment);
        $window.sessionStorage["assessmentstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-assessment-lion-update');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0).notSortable()
    ];

  
});

app.directive('mztAssessmentsLionForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-assessments-lion/mzt-assessments-lion-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztAssessmentsLionCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztCompanyUserAssessmentsCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
    var init = function () {
        var subscriber = JSON.parse($window.sessionStorage["employee"]);
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
        $location.path('/form/mzt-company-user-show-assessment');
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
        $location.path('/form/mzt-company-users-assessments');
    }

    init();
});

app.directive('mztCompanyUserAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-company-user-assessments/mzt-company-user-assessments-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztCompanyUserAssessmentsCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztCompanyUserShowAssessmentCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

    var id;
    var init = function () {
        var state = $window.sessionStorage["assessmentstatus"];

        if (state == "1") {
            var assessment = JSON.parse($window.sessionStorage["assessment"]);
            id = assessment.id;
            $scope.nombreuser = assessment.iduser;
            $scope.nombre = assessment.nombre;
            $scope.days = assessment.days;
            $scope.cant = assessment.points;
            $scope.htmlcontent = assessment.htmlcontent;
            $scope.avarage = assessment.avarage;
            $scope.status = true;
        }
    }


    $scope.back = function () {
        $location.path('/form/mzt-company-user-assessments');
    }

    init();
    
});
    

app.directive('mztCompanyUserShowAssessmentForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-company-user-show-assessment/mzt-company-user-show-assessment-form.tpl.html',
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
        controller: 'mztCompanyUserShowAssessmentCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztCompanyUsersCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
    
    var init = function()
    {
        $scope.companyuserstemp = [];
        for (var x = 0; x < $rootScope.companyusers.length; x++)
        {
            if ($rootScope.companyusers[x].idcompany == $rootScope.idcompany)
            {
                var data = {
                    email: $rootScope.companyusers[x].iduser
                }
                $scope.companyuserstemp.push(data);
            }
        }
    }

    $scope.go = function (companyuser) {
        $window.sessionStorage["companyuser"] = JSON.stringify(companyuser);
        $window.sessionStorage["companyuserstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-company-users-update');
    }

    $scope.save = function () {
        $location.path('/form/mzt-company-users-update');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0).notSortable()
    ];

    init();
  
});

app.directive('mztCompanyUsersForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-company-users/mzt-company-users-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztCompanyUsersCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztCompanyUsersAssessmentsCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
   
    var init = function () {
        $scope.companyuserstemp = [];
        for (var x = 0; x < $rootScope.companyusers.length; x++) {
            if ($rootScope.companyusers[x].idcompany == $rootScope.idcompany) {
                var data = {
                    email: $rootScope.companyusers[x].iduser
                }
                $scope.companyuserstemp.push(data);
            }
        }
    }

    $scope.go = function (user) {
        $window.sessionStorage["employee"] = JSON.stringify(user);
        $location.path('/form/mzt-company-user-assessments');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0).notSortable()
    ];

    init();
});

app.directive('mztCompanyUsersAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-company-users-assessments/mzt-company-users-assessments-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztCompanyUsersAssessmentsCtrl as datatables'
    }

});

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

/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonProvidersCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope, UserProviderFactory, apiServices) {
   
    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }
   

    $scope.radioType = {
        type: '0'
    };

    var search = function () {
     
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($scope.radioType.type)
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Users/QueryProviders')
        .then(function (data) {
            $scope.providers = [];
            for (var x = 0; x < data.length; x++) {
                $scope.providers.push(
                    new UserProviderFactory.copy(data[x].email, data[x].userid)
                );
            }
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    $scope.$watch('radioType.type', function (value) {
        search();
    });

    $scope.save = function () {
        $window.sessionStorage["stateuserprovideraFactory"] = "0";
        $location.path('/form/mzt-leon-providers-addupdate');
    }

    $scope.go = function (provider) {
        $window.sessionStorage["userproviderFactory"] = JSON.stringify(provider);
        $window.sessionStorage["stateuserprovideraFactory"] = "1"; // Operacion update
        $location.path('/form/mzt-leon-providers-change-password');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0)
    ];

   


});

app.directive('mztLeonProvidersForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-providers/mzt-leon-providers-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztLeonProvidersCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonProvidersChangePasswordCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, ChangePasswordFactory, UserProviderFactory, apiServices) {
    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }


    var init = function () {

        var state = $window.sessionStorage["stateuserprovideraFactory"];

        if (state == "1") {
            UserProviderFactory = JSON.parse($window.sessionStorage["userproviderFactory"]);
            $scope.email = UserProviderFactory.email;
        }
    }

    $scope.save = function () {
        if ($scope.email != "" && $scope.password != "" && $scope.passwordConfirm != "") {
            if ($scope.password.length >= 10 && $scope.passwordConfirm.length >= 10) {
       
                if ($scope.password == $scope.passwordConfirm) {

                    //var matches = $scope.password.match(/^(([A-Z][a-zA-Z\d])(?=.*?[?!@#$%\^&*\(\)\-_+=;:'""\/\[\]{},.<>|`])).{8,}$/);
                    //var matches = $scope.password.match((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/));
                    
                    
                    //var matches = $scope.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)?(?=.*[$@$!%*=?_{}/-])?[A-Za-z\d$@$!%*=?_{}/-]{8,}$/);
                    //if (matches != null) {
                       $scope.messageQuestion = "Are you sure to save it?";
                       var myEl = $element.find('#openQuestion');
                       myEl.click();
                    //}
                 }
            }
        }
    }

  
    var stopTime;

    $scope.savedata = function () {
        doSave();
    }

    var doSave = function () {
        ChangePasswordFactory.userId = UserProviderFactory.userId;
        ChangePasswordFactory.OldPassword = "";
        ChangePasswordFactory.NewPassword = $scope.password;
        $("#dialog").dialog("open");

        apiServices.getData(ChangePasswordFactory, 'api/Account/ChangeUserPassword')
        .then(function (data) {
            stopTime = $interval(backTop, $rootScope.dialogTimer);
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-leon-providers');
    }

    init();
});


app.directive('mztLeonProvidersChangePasswordForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-providers-change-password/mzt-leon-providers-change-password-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                container: '#messages',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'Empty email is invalid'
                            },
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'Empty new password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in new password is 10'
                            },
                            identical: {
                                field: 'passwordConfirm',
                                message: 'The password and its retype are not the same'
                            },
                            /*
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)?(?=.*[$@$!%*=?_{}/-])?[A-Za-z\d$@$!%*=?_{}/-]{8,}$/,
                                message: 'Password at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:'
                            }
                           */
                        }
                    },
                    passwordConfirm: {
                        validators: {
                            notEmpty: {
                                message: 'Empty retype password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in retype password is 10'
                            },
                            identical: {
                                field: 'password',
                                message: 'The password and its retype are not the same'
                            },
                            /*
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)?(?=.*[$@$!%*=?_{}/-])?[A-Za-z\d$@$!%*=?_{}/-]{8,}$/,
                                message: 'Retype at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:'
                            }
                            */
                        }
                    },

                }
            })
        },
        controller: 'mztLeonProvidersChangePasswordCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonProvidersAddupdateCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, RegisterUserFactory, apiServices) {
    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }


    $scope.radioType = {
        type: '1'
    };

    $scope.save = function () {
        if ($scope.nombre.trim().length > 0 && $scope.nombre.trim().length <= 30) {
            var myEl = $element.find('#openQuestion');
            myEl.click();
        }
    }

    $scope.save = function () {
        if ($scope.email != "" && $scope.password != "" && $scope.passwordConfirm != "") {
            if ($scope.password.length >= 10 && $scope.passwordConfirm.length >= 10) {
                if ($scope.password == $scope.passwordConfirm) {
                    //var matches = $scope.password.match(/^((?=.*\d)(?=.*[a-z])(?=.*?[?!@#$%\^&*\(\)\-_+=;:'""\/\[\]{},.<>|`])).{8,}$/);
                    //var matches = $scope.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*=?_{}/-])[A-Za-z\d$@$!%*=?_{}/-]{8,}$/);
                    //if (matches != null) {
                        $scope.messageQuestion = "Are you sure to save it?";
                        var myEl = $element.find('#openQuestion');
                        myEl.click();
                    //}
                 }
            }
        }
    }

  
    var stopTime;

    $scope.savedata = function () {
        doSave();
    }

    var doSave = function () {
        RegisterUserFactory.email = $scope.email;
        RegisterUserFactory.password = $scope.password;
        RegisterUserFactory.role = $scope.radioType.type;
        $("#dialog").dialog("open");

        apiServices.getData(RegisterUserFactory, 'api/Account/registeruser')
        .then(function (data) {
            stopTime = $interval(backTop, $rootScope.dialogTimer);
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-leon-providers');
    }


});


app.directive('mztLeonProvidersAddupdateForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-providers-addupdate/mzt-leon-providers-addupdate-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                container: '#messages',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'Empty email is invalid'
                            },
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'Empty password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in password is 10'
                            },
                            identical: {
                                field: 'passwordConfirm',
                                message: 'The password and its confirm are not the same'
                            },
                            /*
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*=?_{}/-])[A-Za-z\d$@$!%*=?_{}/-]{8,}$/,
                                message: 'Password at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:'
                            }
                            */
                        }
                    },
                    passwordConfirm: {
                        validators: {
                            notEmpty: {
                                message: 'Empty passwordConfirm password is invalid'
                            },
                            stringLength: {
                                min: 10,
                                message: 'Minimum of characters in password is 10'
                            },
                            identical: {
                                field: 'password',
                                message: 'The password and its confirm are not the same'
                            },
                            /*
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*=?_{}/-])[A-Za-z\d$@$!%*=?_{}/-]{8,}$/,
                                message: 'Retype at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:'
                            }
                            */
                        }
                    },

                }
            })
        },
        controller: 'mztLeonProvidersAddupdateCtrl as datatables'
    }

});

/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonQuestionsCtrl', function ($scope, $window, $element, $location, $rootScope, $interval, queryQuestionFactory, questionFactory, apiServices,
    queryQuestionTempFactory) {

    //Gender
    $scope.Genders = [];
    data = {
        id: 0,
        name: 'Men',
    }
    $scope.Genders.push(data);
    data = {
        id: 1,
        name: 'Women',
    }
    $scope.Genders.push(data);

    $scope.Ages = [];
    var data = {
        id: 0,
        name: 'Under 30',
        value: 0
    }
    $scope.Ages.push(data);
    data = {
        id: 1,
        name: '30-34',
        value: 5
    }
    $scope.Ages.push(data);
    data = {
        id: 2,
        name: '35-39',
        value: 10
    }
    $scope.Ages.push(data);
    data = {
        id: 3,
        name: '40-44',
        value: 20
    }
    $scope.Ages.push(data);
    data = {
        id: 4,
        name: '45-49',
        value: 25
    }
    $scope.Ages.push(data);
    data = {
        id: 5,
        name: '50-54',
        value: 40
    }
    $scope.Ages.push(data);
    data = {
        id: 6,
        name: '55-59',
        value: 55
    }
    $scope.Ages.push(data);
    data = {
        id: 7,
        name: '60-64',
        value: 60
    }
    $scope.Ages.push(data);
    data = {
        id: 8,
        name: '65-69',
        value: 65
    }
    $scope.Ages.push(data);
    data = {
        id: 9,
        name: '70-74',
        value: 70
    }
    $scope.Ages.push(data);
    data = {
        id: 10,
        name: '75 or Older',
        value: 75
    }
    $scope.Ages.push(data);

    //Cardio Vascular Health
    $scope.CardioVascularHealths = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.CardioVascularHealths.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 80
    }
    $scope.CardioVascularHealths.push(data);

    //Chest Pain
    $scope.ChestPains = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.ChestPains.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 50
    }
    $scope.ChestPains.push(data);

    //Father Diagnosed
    $scope.FatherDiagnoseds = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.FatherDiagnoseds.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 20
    }
    $scope.FatherDiagnoseds.push(data);

    //Mother Diagnosed
    $scope.MotherDiagnoseds = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.MotherDiagnoseds.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 20
    }
    $scope.MotherDiagnoseds.push(data);

    //Diabetes
    $scope.Diabetess = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.Diabetess.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 20
    }
    $scope.Diabetess.push(data);

    //Moderate Exercise
    $scope.Mods = [];
    var data = {
        id: 0,
        name: 'Less than 1x per week',
        value: 30
    }
    $scope.Mods.push(data);
    data = {
        id: 1,
        name: '2-3 per week',
        value: -10
    }
    $scope.Mods.push(data);
    data = {
        id: 2,
        name: '4-5 per week',
        value: -20
    }
    $scope.Mods.push(data);
    data = {
        id: 3,
        name: '5 or more per week',
        value: -40
    }
    $scope.Mods.push(data);

    //Vigorous
    $scope.Vigs = [];
    var data = {
        id: 0,
        name: 'Less than 1x per week',
        value: 10
    }
    $scope.Vigs.push(data);
    data = {
        id: 1,
        name: '1 per week',
        value: -4
    }
    $scope.Vigs.push(data);
    data = {
        id: 2,
        name: '2-3 per week',
        value: -10
    }
    $scope.Vigs.push(data);
    data = {
        id: 3,
        name: '4 or more per week',
        value: -4
    }
    $scope.Vigs.push(data);

    //Sitting
    $scope.Sits = [];
    var data = {
        id: 0,
        name: '0-3  Hrs',
        value: -10
    }
    $scope.Sits.push(data);
    data = {
        id: 1,
        name: '4-7  Hrs',
        value: 0
    }
    $scope.Sits.push(data);
    data = {
        id: 2,
        name: '8-11 Hrs',
        value: 14
    }
    $scope.Sits.push(data);
    data = {
        id: 3,
        name: '12 or more Hours',
        value: 20
    }
    $scope.Sits.push(data);

    //Smoker
    $scope.Smos = [];
    var data = {
        id: 0,
        name: 'Never',
        value: 0
    }
    $scope.Smos.push(data);
    data = {
        id: 1,
        name: 'Ex-smoker (last 5 years)',
        value: 20
    }
    $scope.Smos.push(data);
    data = {
        id: 2,
        name: '1-4 Cigarretes per day',
        value: 20
    }
    $scope.Smos.push(data);
    data = {
        id: 3,
        name: '5-9 Cigarretes per day',
        value: 30
    }
    $scope.Smos.push(data);
    data = {
        id: 4,
        name: '10-14 Cigarretes per day',
        value: 40
    }
    $scope.Smos.push(data);
    data = {
        id: 5,
        name: '15 or more per day',
        value: 50
    }
    $scope.Smos.push(data);

    //Second Hands Smoke
    $scope.SecondHandsSmokes = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.SecondHandsSmokes.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 10
    }
    $scope.SecondHandsSmokes.push(data);

    //Alcohol
    $scope.Alcs = [];
    var data = {
        id: 0,
        name: 'Less than 1 per day',
        value: -5
    }
    $scope.Alcs.push(data);
    data = {
        id: 1,
        name: '1 drink per day(7 per week)',
        value: -10
    }
    $scope.Alcs.push(data);
    data = {
        id: 2,
        name: '2 drinks per day(14 per week)',
        value: -5
    }
    $scope.Alcs.push(data);
    data = {
        id: 3,
        name: '3 or more drinks per day(21 < per week)',
        value: 10
    }
    $scope.Alcs.push(data);

    //Oral Contraceptives
    $scope.OralContraceptives = [];
    data = {
        id: 0,
        name: 'No',
        value: 0
    }
    $scope.OralContraceptives.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 6
    }
    $scope.OralContraceptives.push(data);

    //Antibiotics
    $scope.Ants = [];
    var data = {
        id: 0,
        name: 'Less than 2 weeks',
        value: 0
    }
    $scope.Ants.push(data);
    data = {
        id: 1,
        name: '2-6 weeks',
        value: 2
    }
    $scope.Ants.push(data);
    data = {
        id: 2,
        name: '6-11 weeks',
        value: 6
    }
    $scope.Ants.push(data);
    data = {
        id: 3,
        name: '12 weeks or more',
        value: 10
    }
    $scope.Ants.push(data);

    //Systolic
    $scope.Syss = [];
    var data = {
        id: 0,
        name: '115',
        value: -40
    }
    $scope.Syss.push(data);
    var data = {
        id: 1,
        name: '116',
        value: -35
    }
    $scope.Syss.push(data);
    var data = {
        id: 2,
        name: '117',
        value: -30
    }
    $scope.Syss.push(data);
    var data = {
        id: 3,
        name: '118',
        value: -25
    }
    $scope.Syss.push(data);
    var data = {
        id: 4,
        name: '119',
        value: -20
    }
    $scope.Syss.push(data);
    var data = {
        id: 5,
        name: '120',
        value: 0
    }
    $scope.Syss.push(data);
    var data = {
        id: 6,
        name: '121',
        value: 5
    }
    $scope.Syss.push(data);
    var data = {
        id: 7,
        name: '122',
        value: 10
    }
    $scope.Syss.push(data);
    var data = {
        id: 8,
        name: '123',
        value: 15
    }
    $scope.Syss.push(data);
    var data = {
        id: 9,
        name: '124',
        value: 20
    }
    $scope.Syss.push(data);
    data = {
        id: 10,
        name: '125-139',
        value: 20
    }
    $scope.Syss.push(data);
    data = {
        id: 11,
        name: '140-159',
        value: 30
    }
    $scope.Syss.push(data);
    data = {
        id: 12,
        name: '160 <',
        value: 40
    }
    $scope.Syss.push(data);

    //Diastolic
    $scope.Dias = [];
    var data = {
        id: 0,
        name: '54',
        value: 40
    }
    $scope.Dias.push(data);
    var data = {
        id: 1,
        name: '55',
        value: 34
    }
    $scope.Dias.push(data);
    var data = {
        id: 2,
        name: '56',
        value: 28
    }
    $scope.Dias.push(data);
    var data = {
        id: 3,
        name: '57',
        value: 22
    }
    $scope.Dias.push(data);
    var data = {
        id: 4,
        name: '58',
        value: 14
    }
    $scope.Dias.push(data);
    var data = {
        id: 5,
        name: '59',
        value: 8
    }
    $scope.Dias.push(data);
    var data = {
        id: 6,
        name: '60',
        value: 0
    }
    $scope.Dias.push(data);
    var data = {
        id: 7,
        name: '61',
        value: -5
    }
    $scope.Dias.push(data);
    var data = {
        id: 8,
        name: '62',
        value: -10
    }
    $scope.Dias.push(data);
    var data = {
        id: 9,
        name: '63',
        value: -15
    }
    $scope.Dias.push(data);
    var data = {
        id: 10,
        name: '64',
        value: -30
    }
    $scope.Dias.push(data);
    var data = {
        id: 11,
        name: '65',
        value: -40
    }
    $scope.Dias.push(data);
    data = {
        id: 1,
        name: '66-79',
        value: -40
    }
    $scope.Dias.push(data);
    data = {
        id: 2,
        name: '80-89',
        value: 20
    }
    $scope.Dias.push(data);
    data = {
        id: 3,
        name: '90-99',
        value: 30
    }
    $scope.Dias.push(data);
    data = {
        id: 4,
        name: '100 <',
        value: 40
    }
    $scope.Dias.push(data);
    
    //Waist to hip(Men)
    $scope.WaiMens = [];
    var data = {
        id: 0,
        name: '< 0.95',
        value: -20
    }
    $scope.WaiMens.push(data);
    data = {
        id: 1,
        name: '0.96 to 0.99',
        value: 10
    }
    $scope.WaiMens.push(data);
    data = {
        id: 2,
        name: '1.00 <',
        value: 20
    }
    $scope.WaiMens.push(data);
    data = {
        id: 3,
        name: 'NA',
        value: 0
    }
    $scope.WaiMens.push(data);

    //Waist to hip(WoMen)
    $scope.WaiWomens = [];
    var data = {
        id: 0,
        name: '< 0.80',
        value: -20
    }
    $scope.WaiWomens.push(data);
    data = {
        id: 1,
        name: '0.81 to 0.84',
        value: 10
    }
    $scope.WaiWomens.push(data);
    data = {
        id: 2,
        name: '0.85 <',
        value: 20
    }
    $scope.WaiWomens.push(data);
    data = {
        id: 3,
        name: 'NA',
        value: 0
    }
    $scope.WaiWomens.push(data);

    //Side Bridge(Men)
    $scope.SidMens = [];
    var data = {
        id: 0,
        name: '< 55 secs',
        value: 0
    }
    $scope.SidMens.push(data);
    data = {
        id: 1,
        name: '55-84 secs',
        value: -20
    }
    $scope.SidMens.push(data);
    data = {
        id: 2,
        name: '85-95 secs',
        value: -30
    }
    $scope.SidMens.push(data);
    data = {
        id: 3,
        name: '96 -126 secs',
        value: -40
    }
    $scope.SidMens.push(data);
    data = {
        id: 4,
        name: 'NA',
        value: 0
    }
    $scope.SidMens.push(data);

    //Side Bridge(WoMen)
    $scope.SidWomens = [];
    var data = {
        id: 0,
        name: '< 40 secs',
        value: 0
    }
    $scope.SidWomens.push(data);
    data = {
        id: 1,
        name: '40-69 secs',
        value: -20
    }
    $scope.SidWomens.push(data);
    data = {
        id: 2,
        name: '70-80 secs',
        value: -30
    }
    $scope.SidWomens.push(data);
    data = {
        id: 3,
        name: '81-110 secs',
        value: -40
    }
    $scope.SidWomens.push(data);
    data = {
        id: 4,
        name: 'NA',
        value: 0
    }
    $scope.SidWomens.push(data);

    //Deep Squat
    $scope.Dees = [];
    var data = {
        id: 0,
        name: '1',
        value: 0
    }
    $scope.Dees.push(data);
    data = {
        id: 1,
        name: '2',
        value: -10
    }
    $scope.Dees.push(data);
    data = {
        id: 2,
        name: '3',
        value: -20
    }

    $scope.Dees.push(data);

    //Active Straight Leg Raise
    $scope.Acts = [];
    var data = {
        id: 0,
        name: '1',
        value: 0
    }
    $scope.Acts.push(data);
    data = {
        id: 1,
        name: '2',
        value: -10
    }
    $scope.Acts.push(data);
    data = {
        id: 2,
        name: '3',
        value: -20
    }

    $scope.Acts.push(data);

    //Shoulder Mobility
    $scope.Mobs = [];
    var data = {
        id: 0,
        name: '1',
        value: 0
    }
    $scope.Mobs.push(data);
    data = {
        id: 1,
        name: '2',
        value: -10
    }
    $scope.Mobs.push(data);
    data = {
        id: 2,
        name: '3',
        value: -20
    }

    $scope.Mobs.push(data);

    //Shoulder ClearingTest
    $scope.ShoulderClearingTests = [];
    data = {
        id: 0,
        name: 'No',
        value: -20
    }
    $scope.ShoulderClearingTests.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 0
    }
    $scope.ShoulderClearingTests.push(data);

    //Spinal Flexion
    $scope.SpinalFlexions = [];
    data = {
        id: 0,
        name: 'No',
        value: -20
    }
    $scope.SpinalFlexions.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 0
    }
    $scope.SpinalFlexions.push(data);

    //Spinal Extension
    $scope.SpinalExtensions = [];
    data = {
        id: 0,
        name: 'No',
        value: -20
    }
    $scope.SpinalExtensions.push(data);
    data = {
        id: 1,
        name: 'Yes',
        value: 0
    }
    $scope.SpinalExtensions.push(data);


    // valid women push modified
    $scope.PusWomenModifieds = [];
    data = {
        id: 0,
        name: 'No',
    }
    $scope.PusWomenModifieds.push(data);
    data = {
        id: 1,
        name: 'Yes',
    }
    $scope.PusWomenModifieds.push(data);

    // modified women 20-29
    $scope.PushWomengpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 1,
        name: 'Poor 0-1',
        value: 30
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 2,
        name: 'Poor 2-3',
        value: 15
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 3,
        name: 'Poor 4-5',
        value: 5
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 4,
        name: 'Fair 6 - 10',
        value: 0
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 5,
        name: 'Fair 11 - 16',
        value: -3
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 6,
        name: 'Average 17 - 24',
        value: -6
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 7,
        name: 'Average 25 - 33',
        value: -12
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 8,
        name: 'Good 34 - 38',
        value: -16
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 9,
        name: 'Excellent 39 - 41',
        value: -23
    }
    $scope.PushWomengpo1.push(data);
    data = {
        id: 10,
        name: 'Excellent >42',
        value: -30
    }
    $scope.PushWomengpo1.push(data);

    // modified women 30-39
    $scope.PushWomengpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 30
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 15
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 3,
        name: 'Poor 2-3',
        value: 5
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 4,
        name: 'Poor 4-8',
        value: 0
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 5,
        name: 'Fair 9-11',
        value: -3
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 6,
        name: 'Average 12-18',
        value: -6
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 7,
        name: 'Average 19-24',
        value: -12
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 8,
        name: 'Good 25-32',
        value: -16
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 9,
        name: 'Good 33-39',
        value: -23
    }
    $scope.PushWomengpo2.push(data);
    data = {
        id: 10,
        name: 'Excellent >39',
        value: -30
    }
    $scope.PushWomengpo2.push(data);

    // modified women 40-49
    $scope.PushWomengpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 30
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 15
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 3,
        name: 'Poor 2',
        value: 5
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 4,
        name: 'Fair 3-5',
        value: 0
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 5,
        name: 'Fair 6-7',
        value: -3
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 6,
        name: 'Average 8 - 14',
        value: -6
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 7,
        name: 'Average 15-19',
        value: -12
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 8,
        name: 'Good 20-27',
        value: -16
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 9,
        name: 'Good 28-33',
        value: -23
    }
    $scope.PushWomengpo3.push(data);
    data = {
        id: 10,
        name: 'Excellent >34',
        value: -30
    }
    $scope.PushWomengpo3.push(data);

    // modified women 50-59
    $scope.PushWomengpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 30
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 10
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 3,
        name: 'Fair 2-3',
        value: 0
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 4,
        name: 'Fair 4-5',
        value: -3
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 5,
        name: 'Average 6-10',
        value: -6
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 6,
        name: 'Average 11-14',
        value: -9
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 7,
        name: 'Good 15-19',
        value: -12
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 8,
        name: 'Good 20-24',
        value: -16
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 9,
        name: 'Good 25-29',
        value: -23
    }
    $scope.PushWomengpo4.push(data);
    data = {
        id: 10,
        name: 'Excellent >29',
        value: -30
    }
    $scope.PushWomengpo4.push(data);

    // modified women 60+
    $scope.PushWomengpo5 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 30
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 2,
        name: 'Fair 1',
        value: 0
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 3,
        name: 'Fair 2',
        value: -3
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 4,
        name: 'Average 3',
        value: -6
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 5,
        name: 'Average 4',
        value: -9
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 6,
        name: 'Good 5-8',
        value: -12
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 7,
        name: 'Good 9-12',
        value: -15
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 8,
        name: 'Good 13-15',
        value: -18
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 9,
        name: 'Good 16-19',
        value: -23
    }
    $scope.PushWomengpo5.push(data);
    data = {
        id: 10,
        name: 'Excellent >19',
        value: -30
    }
    $scope.PushWomengpo5.push(data);

    ///
    /// normal women push
    ///

    // modified women 20-29
    $scope.PushNWomengpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 1,
        name: 'Poor 0-1',
        value: 20
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 2,
        name: 'Poor 2-4',
        value: 12
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 3,
        name: 'Poor 5-6',
        value: 6
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 4,
        name: 'Fair 7 - 9',
        value: 0
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 5,
        name: 'Fair 10 - 11',
        value: -5
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 6,
        name: 'Average 12 - 17',
        value: -10
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 7,
        name: 'Average 18 - 22',
        value: -17
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 8,
        name: 'Good 23 - 30',
        value: -24
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 9,
        name: 'Good 31 - 36',
        value: -32
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 10,
        name: 'Excellent >36',
        value: -40
    }
    $scope.PushNWomengpo1.push(data);

    // modified women 30-39
    $scope.PushNWomengpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 1,
        name: 'Poor 0 - 1',
        value: 20
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 2,
        name: 'Poor 2 - 3',
        value: 12
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 3,
        name: 'Poor 4',
        value: 6
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 4,
        name: 'Fair 5 - 7',
        value: 0
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 5,
        name: 'Fair 8 - 9',
        value: -5
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 6,
        name: 'Average 10-16',
        value: -10
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 7,
        name: 'Average 17-21',
        value: -17
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 8,
        name: 'Good 22-29',
        value: -24
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 9,
        name: 'Good 30-37',
        value: -32
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 10,
        name: 'Excellent >37',
        value: -40
    }
    $scope.PushNWomengpo2.push(data);

    // modified women 40-49
    $scope.PushNWomengpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 2,
        name: 'Poor 1-2',
        value: 12
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 3,
        name: 'Poor 3',
        value: 6
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 4,
        name: 'Fair 4-5',
        value: 0
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 5,
        name: 'Fair 6-7',
        value: -5
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 6,
        name: 'Average 8 - 12',
        value: -10
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 7,
        name: 'Average 13-17',
        value: -17
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 8,
        name: 'Good 18-25',
        value: -24
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 9,
        name: 'Good 26-31',
        value: -32
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 10,
        name: 'Excellent >31',
        value: -40
    }
    $scope.PushNWomengpo3.push(data);

    // modified women 50-59
    $scope.PushNWomengpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 12
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 3,
        name: 'Poor 2',
        value: 6
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 4,
        name: 'Fair 3-4',
        value: 0
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 5,
        name: 'Fair 5-6',
        value: -5
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 6,
        name: 'Average 7-10',
        value: -10
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 7,
        name: 'Average 11-14',
        value: -17
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 8,
        name: 'Good 15-20',
        value: -24
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 9,
        name: 'Good 21-25',
        value: -32
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 10,
        name: 'Excellent >25',
        value: -40
    }
    $scope.PushNWomengpo4.push(data);

    // modified women 60+
    $scope.PushNWomengpo5 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 10
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 3,
        name: 'Fair 2-3',
        value: 0
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 4,
        name: 'Fair 4',
        value: -3
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 5,
        name: 'Average 5-8',
        value: -6
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 6,
        name: 'Average 9-12',
        value: -10
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 7,
        name: 'Good 13-16',
        value: -17
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 8,
        name: 'Good 17-20',
        value: -24
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 9,
        name: 'Good 21-23',
        value: -32
    }
    $scope.PushNWomengpo5.push(data);
    data = {
        id: 10,
        name: 'Excellent >23',
        value: -40
    }
    $scope.PushWomengpo5.push(data);

    ///
    /// normal women push
    ///

    // modified women 20-29
    $scope.PushNWomengpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 1,
        name: 'Poor 0-1',
        value: 20
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 2,
        name: 'Poor 2-4',
        value: 12
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 3,
        name: 'Poor 5-6',
        value: 6
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 4,
        name: 'Fair 7 - 9',
        value: 0
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 5,
        name: 'Fair 10 - 11',
        value: -5
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 6,
        name: 'Average 12 - 17',
        value: -10
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 7,
        name: 'Average 18 - 22',
        value: -17
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 8,
        name: 'Good 23 - 30',
        value: -24
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 9,
        name: 'Good 31 - 36',
        value: -32
    }
    $scope.PushNWomengpo1.push(data);
    data = {
        id: 10,
        name: 'Excellent >36',
        value: -40
    }
    $scope.PushNWomengpo1.push(data);

    // modified women 30-39
    $scope.PushNWomengpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 1,
        name: 'Poor 0 - 1',
        value: 20
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 2,
        name: 'Poor 2 - 3',
        value: 12
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 3,
        name: 'Poor 4',
        value: 6
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 4,
        name: 'Fair 5 - 7',
        value: 0
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 5,
        name: 'Fair 8 - 9',
        value: -5
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 6,
        name: 'Average 10-16',
        value: -10
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 7,
        name: 'Average 17-21',
        value: -17
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 8,
        name: 'Good 22-29',
        value: -24
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 9,
        name: 'Good 30-37',
        value: -32
    }
    $scope.PushNWomengpo2.push(data);
    data = {
        id: 10,
        name: 'Excellent >37',
        value: -40
    }
    $scope.PushNWomengpo2.push(data);

    // modified women 40-49
    $scope.PushNWomengpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 2,
        name: 'Poor 1-2',
        value: 12
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 3,
        name: 'Poor 3',
        value: 6
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 4,
        name: 'Fair 4-5',
        value: 0
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 5,
        name: 'Fair 6-7',
        value: -5
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 6,
        name: 'Average 8 - 12',
        value: -10
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 7,
        name: 'Average 13-17',
        value: -17
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 8,
        name: 'Good 18-25',
        value: -24
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 9,
        name: 'Good 26-31',
        value: -32
    }
    $scope.PushNWomengpo3.push(data);
    data = {
        id: 10,
        name: 'Excellent >31',
        value: -40
    }
    $scope.PushNWomengpo3.push(data);

    // modified women 50-59
    $scope.PushNWomengpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 1,
        name: 'Poor 0',
        value: 20
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 2,
        name: 'Poor 1',
        value: 12
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 3,
        name: 'Poor 2',
        value: 6
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 4,
        name: 'Fair 3-4',
        value: 0
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 5,
        name: 'Fair 5-6',
        value: -5
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 6,
        name: 'Average 7-10',
        value: -10
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 7,
        name: 'Average 11-14',
        value: -17
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 8,
        name: 'Good 15-20',
        value: -24
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 9,
        name: 'Good 21-25',
        value: -32
    }
    $scope.PushNWomengpo4.push(data);
    data = {
        id: 10,
        name: 'Excellent >25',
        value: -40
    }
    $scope.PushNWomengpo4.push(data);


    ///
    /// Men Kneeling MB Chest Throw 8lbs
    ///

    //  20-29
    $scope.PushMBCMgpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 1,
        name: 'Poor <12',
        value: 20
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 2,
        name: 'Fair 12-15',
        value: 0
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 3,
        name: 'Fair 12-18',
        value: -4
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 4,
        name: 'Average  19 - 22',
        value: -10
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 5,
        name: 'Average 23 - 25',
        value: -18
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 6,
        name: 'Good 26-28',
        value: -24
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 7,
        name: 'Good 29-31',
        value: -32
    }
    $scope.PushMBCMgpo1.push(data);
    data = {
        id: 8,
        name: 'Excellent >31',
        value: -40
    }
    $scope.PushMBCMgpo1.push(data);

    // 30-39
    $scope.PushMBCMgpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 1,
        name: 'Poor <11',
        value: 20
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 2,
        name: 'Fair 11-14',
        value: 0
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 3,
        name: 'Fair 15-17',
        value: -4
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 4,
        name: 'Average  18 - 20',
        value: -10
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 5,
        name: 'Average 21 - 23',
        value: -18
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 6,
        name: 'Good 24-25',
        value: -24
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 7,
        name: 'Good 26-27',
        value: -32
    }
    $scope.PushMBCMgpo2.push(data);
    data = {
        id: 8,
        name: 'Excellent >28',
        value: -40
    }
    $scope.PushMBCMgpo2.push(data);

    // 40-49
    $scope.PushMBCMgpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 1,
        name: 'Poor <10',
        value: 20
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 2,
        name: 'Fair 10-12',
        value: 0
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 3,
        name: 'Fair 13-14',
        value: -4
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 4,
        name: 'Average 15-16',
        value: -10
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 5,
        name: 'Average 17-19',
        value: -18
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 6,
        name: 'Good 20 - 22',
        value: -24
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 7,
        name: 'Good 23-25',
        value: -32
    }
    $scope.PushMBCMgpo3.push(data);
    data = {
        id: 8,
        name: 'Excellent >25',
        value: -40
    }
    $scope.PushMBCMgpo3.push(data);

    //  50+
    $scope.PushMBCMgpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 1,
        name: 'Poor <9',
        value: 20
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 2,
        name: 'Fair 9-11',
        value: 0
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 3,
        name: 'Fair 12-13',
        value: -4
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 4,
        name: 'Average 14-15',
        value: -10
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 5,
        name: 'Average 16-17',
        value: -18
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 6,
        name: 'Good 18-19',
        value: -24
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 7,
        name: 'Good 20-22',
        value: -32
    }
    $scope.PushMBCMgpo4.push(data);
    data = {
        id: 8,
        name: 'Excellent >22',
        value: -40
    }
    $scope.PushMBCMgpo4.push(data);

    ///
    /// Men Kneeling MB Chest Throw 6lbs
    ///

    //  20-29
    $scope.PushMBCWgpo1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 1,
        name: 'Poor <10',
        value: 20
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 2,
        name: 'Fair 10-13',
        value: 0
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 3,
        name: 'Fair 14-17',
        value: -4
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 4,
        name: 'Average  18 - 20',
        value: -10
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 5,
        name: 'Average 21 - 23',
        value: -18
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 6,
        name: 'Good 24-25',
        value: -24
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 7,
        name: 'Good 26-27',
        value: -32
    }
    $scope.PushMBCWgpo1.push(data);
    data = {
        id: 8,
        name: 'Excellent >27',
        value: -40
    }
    $scope.PushMBCWgpo1.push(data);

    // 30-39
    $scope.PushMBCWgpo2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 1,
        name: 'Poor <8',
        value: 20
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 2,
        name: 'Fair 8-9',
        value: 0
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 3,
        name: 'Fair 10-11',
        value: -4
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 4,
        name: 'Average  12 - 13',
        value: -10
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 5,
        name: 'Average 14 - 16',
        value: -18
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 6,
        name: 'Good 17-19',
        value: -24
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 7,
        name: 'Good 20-22',
        value: -32
    }
    $scope.PushMBCWgpo2.push(data);
    data = {
        id: 8,
        name: 'Excellent >32',
        value: -40
    }
    $scope.PushMBCWgpo2.push(data);

    // 40-49
    $scope.PushMBCWgpo3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 1,
        name: 'Poor <7',
        value: 20
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 2,
        name: 'Fair 7-9',
        value: 0
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 3,
        name: 'Fair 10-11',
        value: -4
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 4,
        name: 'Average 12-13',
        value: -10
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 5,
        name: 'Average 14-15',
        value: -18
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 6,
        name: 'Good 16 - 17',
        value: -24
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 7,
        name: 'Good 18-20',
        value: -32
    }
    $scope.PushMBCWgpo3.push(data);
    data = {
        id: 8,
        name: 'Excellent >20',
        value: -40
    }
    $scope.PushMBCWgpo3.push(data);

    //  50+
    $scope.PushMBCWgpo4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 1,
        name: 'Poor <6',
        value: 20
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 2,
        name: 'Fair 6-7',
        value: 0
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 3,
        name: 'Fair 9-9',
        value: -4
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 4,
        name: 'Average 10-11',
        value: -10
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 5,
        name: 'Average 12-13',
        value: -18
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 6,
        name: 'Good 14-15',
        value: -24
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 7,
        name: 'Good 16-17',
        value: -32
    }
    $scope.PushMBCWgpo4.push(data);
    data = {
        id: 8,
        name: 'Excellent >17',
        value: -40
    }
    $scope.PushMBCWgpo4.push(data);

    ///
    /// MEN PUSH
    ///

    // modified women 20-29
    $scope.PusMens1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens1.push(data);
    data = {
        id: 1,
        name: 'Poor 0-7',
        value: 20
    }
    $scope.PusMens1.push(data);
    data = {
        id: 2,
        name: 'Poor 8-12',
        value: 12
    }
    $scope.PusMens1.push(data);
    data = {
        id: 3,
        name: 'Poor 13-19',
        value: 6
    }
    $scope.PusMens1.push(data);
    data = {
        id: 4,
        name: 'Fair 20 - 27',
        value: 0
    }
    $scope.PusMens1.push(data);
    data = {
        id: 5,
        name: 'Fair 28 - 34',
        value: -5
    }
    $scope.PusMens1.push(data);
    data = {
        id: 6,
        name: 'Average 35 - 39',
        value: -10
    }
    $scope.PusMens1.push(data);
    data = {
        id: 7,
        name: 'Average 40 - 44',
        value: -17
    }
    $scope.PusMens1.push(data);
    data = {
        id: 8,
        name: 'Good 45 - 45',
        value: -24
    }
    $scope.PusMens1.push(data);
    data = {
        id: 9,
        name: 'Good 50 -54',
        value: -32
    }
    $scope.PusMens1.push(data);
    data = {
        id: 10,
        name: 'Excellent >54',
        value: -40
    }
    $scope.PusMens1.push(data);

    // modified women 30-39
    $scope.PusMens2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens2.push(data);
    data = {
        id: 1,
        name: 'Poor 0 - 4',
        value: 20
    }
    $scope.PusMens2.push(data);
    data = {
        id: 2,
        name: 'Poor 5 - 9',
        value: 12
    }
    $scope.PusMens2.push(data);
    data = {
        id: 3,
        name: 'Poor 10-14',
        value: 6
    }
    $scope.PusMens2.push(data);
    data = {
        id: 4,
        name: 'Fair 15 - 19',
        value: 0
    }
    $scope.PusMens2.push(data);
    data = {
        id: 5,
        name: 'Fair 20-24',
        value: -5
    }
    $scope.PusMens2.push(data);
    data = {
        id: 6,
        name: 'Average 25-29',
        value: -10
    }
    $scope.PusMens2.push(data);
    data = {
        id: 7,
        name: 'Average 30-34',
        value: -17
    }
    $scope.PusMens2.push(data);
    data = {
        id: 8,
        name: 'Good 35-39',
        value: -24
    }
    $scope.PusMens2.push(data);
    data = {
        id: 9,
        name: 'Good 40-44',
        value: -32
    }
    $scope.PusMens2.push(data);
    data = {
        id: 10,
        name: 'Excellent >44',
        value: -40
    }
    $scope.PusMens2.push(data);

    // modified women 40-49
    $scope.PusMens3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens3.push(data);
    data = {
        id: 1,
        name: 'Poor 0-3',
        value: 20
    }
    $scope.PusMens3.push(data);
    data = {
        id: 2,
        name: 'Poor 4-8',
        value: 12
    }
    $scope.PusMens3.push(data);
    data = {
        id: 3,
        name: 'Poor 9-11',
        value: 6
    }
    $scope.PusMens3.push(data);
    data = {
        id: 4,
        name: 'Fair 12-15',
        value: 0
    }
    $scope.PusMens3.push(data);
    data = {
        id: 5,
        name: 'Fair 16-19',
        value: -5
    }
    $scope.PusMens3.push(data);
    data = {
        id: 6,
        name: 'Average 20-24',
        value: -10
    }
    $scope.PusMens3.push(data);
    data = {
        id: 7,
        name: 'Average 25-29',
        value: -17
    }
    $scope.PusMens3.push(data);
    data = {
        id: 8,
        name: 'Good 30-34',
        value: -24
    }
    $scope.PusMens3.push(data);
    data = {
        id: 9,
        name: 'Good 35-39',
        value: -32
    }
    $scope.PusMens3.push(data);
    data = {
        id: 10,
        name: 'Excellent >39',
        value: -40
    }
    $scope.PusMens3.push(data);

    // modified women 50-59
    $scope.PusMens4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens4.push(data);
    data = {
        id: 1,
        name: 'Poor 0-2',
        value: 20
    }
    $scope.PusMens4.push(data);
    data = {
        id: 2,
        name: 'Poor 3-5',
        value: 12
    }
    $scope.PusMens4.push(data);
    data = {
        id: 3,
        name: 'Poor 6-7',
        value: 6
    }
    $scope.PusMens4.push(data);
    data = {
        id: 4,
        name: 'Fair 8-10',
        value: 0
    }
    $scope.PusMens4.push(data);
    data = {
        id: 5,
        name: 'Fair 11-14',
        value: -5
    }
    $scope.PusMens4.push(data);
    data = {
        id: 6,
        name: 'Average 15-19',
        value: -10
    }
    $scope.PusMens4.push(data);
    data = {
        id: 7,
        name: 'Average 20-24',
        value: -17
    }
    $scope.PusMens4.push(data);
    data = {
        id: 8,
        name: 'Good 25-29',
        value: -24
    }
    $scope.PusMens4.push(data);
    data = {
        id: 9,
        name: 'Good 30-34',
        value: -32
    }
    $scope.PusMens4.push(data);
    data = {
        id: 10,
        name: 'Excellent >34',
        value: -40
    }
    $scope.PusMens4.push(data);
    //60+
    $scope.PusMens5 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.PusMens5.push(data);
    data = {
        id: 1,
        name: 'Poor 0-1',
        value: 20
    }
    $scope.PusMens5.push(data);
    data = {
        id: 2,
        name: 'Poor 2-3',
        value: 12
    }
    $scope.PusMens5.push(data);
    data = {
        id: 3,
        name: 'Poor 4 ',
        value: 6
    }
    $scope.PusMens5.push(data);
    data = {
        id: 4,
        name: 'Fair 5-7',
        value: 0
    }
    $scope.PusMens5.push(data);
    data = {
        id: 5,
        name: 'Fair 8-9',
        value: -5
    }
    $scope.PusMens5.push(data);
    data = {
        id: 6,
        name: 'Average 10-14',
        value: -10
    }
    $scope.PusMens5.push(data);
    data = {
        id: 7,
        name: 'Average 15-19',
        value: -17
    }
    $scope.PusMens5.push(data);
    data = {
        id: 8,
        name: 'Good 20-24',
        value: -24
    }
    $scope.PusMens5.push(data);
    data = {
        id: 9,
        name: 'Good 25-29',
        value: -32
    }
    $scope.PusMens5.push(data);
    data = {
        id: 10,
        name: 'Excellent >29',
        value: -40
    }
    $scope.PushWomengpo5.push(data);

    ///
    /// Men Cooper Test 
    ///

    //  20-29
    $scope.CooMens1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooMens1.push(data);
    data = {
        id: 1,
        name: 'Poor 800-959(.5)',
        value: 20
    }
    $scope.CooMens1.push(data);
    data = {
        id: 2,
        name: 'Poor 960-1059(.6)',
        value: 15
    }
    $scope.CooMens1.push(data);
    data = {
        id: 3,
        name: 'Poor 1060-1219(.7)',
        value: 12
    }
    $scope.CooMens1.push(data);
    data = {
        id: 4,
        name: 'Poor 1220-1379(.8)',
        value: 9
    }
    $scope.CooMens1.push(data);
    data = {
        id: 5,
        name: 'Poor 1380-1599(.9)',
        value: 6
    }
    $scope.CooMens1.push(data);
    data = {
        id: 6,
        name: 'Below Average 1600 - 1759 (1.0)',
        value: 0
    }
    $scope.CooMens1.push(data);
    data = {
        id: 7,
        name: 'Below Average 1760 - 1919 (1.1) ',
        value: -2
    }
    $scope.CooMens1.push(data);
    data = {
        id: 8,
        name: 'Below Average 1920 - 2079 (1.2)',
        value: -4
    }
    $scope.CooMens1.push(data);
    data = {
        id: 9,
        name: 'Below Average 2080 - 2239 (1.3)',
        value: -6
    }
    $scope.CooMens1.push(data);
    data = {
        id: 10,
        name: 'Average 2240 - 2399 (1.4)',
        value: -9
    }
    $scope.CooMens1.push(data);
    data = {
        id: 11,
        name: 'Above Average 2400 - 2559 (1.5) ',
        value: -12
    }
    $scope.CooMens1.push(data);
    data = {
        id: 12,
        name: 'Above Average 2560 - 2719 (1.6) ',
        value: -15
    }
    $scope.CooMens1.push(data);
    data = {
        id: 13,
        name: 'Above Average 2720 - 2879 (1.7)',
        value: -18
    }
    $scope.CooMens1.push(data);
    data = {
        id: 14,
        name: 'Excellent 2880 - 3039 (1.8)',
        value: -21
    }
    $scope.CooMens1.push(data);
    data = {
        id: 15,
        name: 'Excellent 3040 - 3199 ',
        value: -24
    }
    $scope.CooMens1.push(data);
    data = {
        id: 16,
        name: 'Excellent 3200 - 3359',
        value: -28
    }
    $scope.CooMens1.push(data);
    data = {
        id: 17,
        name: 'Excellent 3360 - 3519',
        value: -31
    }
    $scope.CooMens1.push(data);
    data = {
        id: 18,
        name: 'Excellent 3520 - 3679',
        value: -34
    }
    $scope.CooMens1.push(data);
    data = {
        id: 19,
        name: 'Excellent 3680 - 3839',
        value: -37
    }
    $scope.CooMens1.push(data);
    data = {
        id: 20,
        name: 'Excellent >3839',
        value: -40
    }
    $scope.CooMens1.push(data);


    // 30-39
    $scope.CooMens2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooMens2.push(data);
    data = {
        id: 1,
        name: 'Poor  700 - 859',
        value: 20
    }
    $scope.CooMens2.push(data);
    data = {
        id: 2,
        name: 'Poor 860 - 1019',
        value: 15
    }
    $scope.CooMens2.push(data);
    data = {
        id: 3,
        name: 'Poor 1020 - 1179',
        value: 12
    }
    $scope.CooMens2.push(data);
    data = {
        id: 4,
        name: 'Poor 1180 - 1339',
        value: 9
    }
    $scope.CooMens2.push(data);
    data = {
        id: 5,
        name: 'Poor 1340 - 1499',
        value: 6
    }
    $scope.CooMens2.push(data);
    data = {
        id: 6,
        name: 'Below Average 1500 - 1659  ',
        value: 0
    }
    $scope.CooMens2.push(data);
    data = {
        id: 7,
        name: 'Below Average 1660 - 1819  ',
        value: -2
    }
    $scope.CooMens2.push(data);
    data = {
        id: 8,
        name: 'Below Average 1820 - 1979 ',
        value: -4
    }
    $scope.CooMens2.push(data);
    data = {
        id: 9,
        name: 'Average 1980 - 2139',
        value: -6
    }
    $scope.CooMens2.push(data);
    data = {
        id: 10,
        name: 'Average 2140 - 2299',
        value: -9
    }
    $scope.CooMens2.push(data);
    data = {
        id: 11,
        name: 'Above Average 2300 - 2459 ',
        value: -12
    }
    $scope.CooMens2.push(data);
    data = {
        id: 12,
        name: 'Above Average 2460 - 2619 ',
        value: -15
    }
    $scope.CooMens2.push(data);
    data = {
        id: 13,
        name: 'Above Average 2620 - 2779 ',
        value: -18
    }
    $scope.CooMens2.push(data);
    data = {
        id: 14,
        name: 'Excellent 2780 - 2939 ',
        value: -21
    }
    $scope.CooMens2.push(data);
    data = {
        id: 15,
        name: 'Excellent 2940 - 3099 ',
        value: -24
    }
    $scope.CooMens2.push(data);
    data = {
        id: 16,
        name: 'Excellent 3100 - 3259',
        value: -28
    }
    $scope.CooMens2.push(data);
    data = {
        id: 17,
        name: 'Excellent 3260 - 3419',
        value: -31
    }
    $scope.CooMens2.push(data);
    data = {
        id: 18,
        name: 'Excellent 3420 - 3579',
        value: -34
    }
    $scope.CooMens2.push(data);
    data = {
        id: 19,
        name: 'Excellent 3580 - 3739 ',
        value: -37
    }
    $scope.CooMens2.push(data);
    data = {
        id: 20,
        name: 'Excellent >3739',
        value: -40
    }
    $scope.CooMens2.push(data);


    // 40-49
    $scope.CooMens3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooMens3.push(data);
    data = {
        id: 1,
        name: 'Poor  600 - 759',
        value: 20
    }
    $scope.CooMens3.push(data);
    data = {
        id: 2,
        name: 'Poor 760 - 919',
        value: 15
    }
    $scope.CooMens3.push(data);
    data = {
        id: 3,
        name: 'Poor 920 - 1079',
        value: 12
    }
    $scope.CooMens3.push(data);
    data = {
        id: 4,
        name: 'Poor 1080 - 1239',
        value: 9
    }
    $scope.CooMens3.push(data);
    data = {
        id: 5,
        name: 'Poor 1240 - 1399',
        value: 6
    }
    $scope.CooMens3.push(data);
    data = {
        id: 6,
        name: 'Below Average 1400 - 1559  ',
        value: 0
    }
    $scope.CooMens3.push(data);
    data = {
        id: 7,
        name: 'Below Average 1560 - 1719  ',
        value: -2
    }
    $scope.CooMens3.push(data);
    data = {
        id: 8,
        name: 'Average 1720 - 1879 ',
        value: -4
    }
    $scope.CooMens3.push(data);
    data = {
        id: 9,
        name: 'Average 1880 - 2039',
        value: -6
    }
    $scope.CooMens3.push(data);
    data = {
        id: 10,
        name: 'Above Average 2040 - 2199',
        value: -9
    }
    $scope.CooMens3.push(data);
    data = {
        id: 11,
        name: 'Above Average 2200 - 2359 ',
        value: -12
    }
    $scope.CooMens3.push(data);
    data = {
        id: 12,
        name: 'Above Average 2360 - 2519 ',
        value: -15
    }
    $scope.CooMens3.push(data);
    data = {
        id: 13,
        name: 'Excellent 2520-2679',
        value: -18
    }
    $scope.CooMens3.push(data);
    data = {
        id: 14,
        name: 'Excellent 2680-2839',
        value: -21
    }
    $scope.CooMens3.push(data);
    data = {
        id: 15,
        name: 'Excellent 2840-2999',
        value: -24
    }
    $scope.CooMens3.push(data);
    data = {
        id: 16,
        name: 'Excellent 3000-3159',
        value: -28
    }
    $scope.CooMens3.push(data);
    data = {
        id: 17,
        name: 'Excellent 3160-3319',
        value: -31
    }
    $scope.CooMens3.push(data);
    data = {
        id: 18,
        name: 'Excellent 3320-3479',
        value: -34
    }
    $scope.CooMens3.push(data);
    data = {
        id: 19,
        name: 'Excellent 3480-3639',
        value: -37
    }
    $scope.CooMens3.push(data);
    data = {
        id: 20,
        name: 'Excellent >3639',
        value: -40
    }
    $scope.CooMens3.push(data);

    //  50+
    $scope.CooMens4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooMens4.push(data);
    data = {
        id: 1,
        name: 'Poor  500 - 659',
        value: 20
    }
    $scope.CooMens4.push(data);
    data = {
        id: 2,
        name: 'Poor 660 - 819',
        value: 15
    }
    $scope.CooMens4.push(data);
    data = {
        id: 3,
        name: 'Poor 820 - 979',
        value: 12
    }
    $scope.CooMens4.push(data);
    data = {
        id: 4,
        name: 'Poor 980 - 1139',
        value: 9
    }
    $scope.CooMens4.push(data);
    data = {
        id: 5,
        name: 'Poor 1140 - 1299',
        value: 6
    }
    $scope.CooMens4.push(data);
    data = {
        id: 6,
        name: 'Below Average 1300 - 1459  ',
        value: 0
    }
    $scope.CooMens4.push(data);
    data = {
        id: 7,
        name: 'Below Average 1460 - 1619 ',
        value: -2
    }
    $scope.CooMens4.push(data);
    data = {
        id: 8,
        name: 'Average 1620 - 1779 ',
        value: -4
    }
    $scope.CooMens4.push(data);
    data = {
        id: 9,
        name: 'Average 1780 - 1939',
        value: -6
    }
    $scope.CooMens4.push(data);
    data = {
        id: 10,
        name: 'Above Average 1940 - 2099',
        value: -9
    }
    $scope.CooMens4.push(data);
    data = {
        id: 11,
        name: 'Above Average 2100 - 2259 ',
        value: -12
    }
    $scope.CooMens4.push(data);
    data = {
        id: 12,
        name: 'Above Average 2260 - 2419 ',
        value: -15
    }
    $scope.CooMens4.push(data);
    data = {
        id: 13,
        name: 'Excellent 2420-2579',
        value: -18
    }
    $scope.CooMens4.push(data);
    data = {
        id: 14,
        name: 'Excellent 2580-2739',
        value: -21
    }
    $scope.CooMens4.push(data);
    data = {
        id: 15,
        name: 'Excellent 2740-2899',
        value: -24
    }
    $scope.CooMens4.push(data);
    data = {
        id: 16,
        name: 'Excellent 2900-3059',
        value: -28
    }
    $scope.CooMens4.push(data);
    data = {
        id: 17,
        name: 'Exclellent 3060-3219',
        value: -31
    }
    $scope.CooMens4.push(data);
    data = {
        id: 18,
        name: 'Excellent 3220-3379',
        value: -34
    }
    $scope.CooMens4.push(data);
    data = {
        id: 19,
        name: 'Excellent 3380-3539',
        value: -37
    }
    $scope.CooMens4.push(data);
    data = {
        id: 20,
        name: 'Excellent >3539',
        value: -40
    }
    $scope.CooMens4.push(data);

    ///
    /// women Cooper Test 
    ///

    //  20-29
    $scope.CooWomens1 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 1,
        name: 'Poor  700 - 859',
        value: 20
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 2,
        name: 'Poor Poor 860 - 1019',
        value: 15
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 3,
        name: 'Poor 1020 - 1179',
        value: 12
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 4,
        name: 'Poor 1180 - 1339',
        value: 9
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 5,
        name: 'Poor 1340 - 1499',
        value: 6
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 6,
        name: 'Below Average 1500 - 1659  ',
        value: 0
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 7,
        name: 'Below Average 1660 - 1819   ',
        value: -2
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 8,
        name: 'Below Average 1820 - 1979 ',
        value: -4
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 9,
        name: 'Average 1980 - 2139',
        value: -6
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 10,
        name: 'Average 2140 - 2299',
        value: -9
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 11,
        name: 'Above Average 2300 - 2459  ',
        value: -12
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 12,
        name: 'Above Average 2460 - 2619  ',
        value: -15
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 13,
        name: 'Above Average 2620 - 2779 ',
        value: -18
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 14,
        name: 'Excellent 2780 - 2939 ',
        value: -21
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 15,
        name: 'Excellent 2940 - 3099  ',
        value: -24
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 16,
        name: 'Excellent 3100 - 3259',
        value: -28
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 17,
        name: 'Excellent 3260 - 3419',
        value: -31
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 18,
        name: 'Excellent 3420 - 3579',
        value: -34
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 19,
        name: 'Excellent 3580 - 3739',
        value: -37
    }
    $scope.CooWomens1.push(data);
    data = {
        id: 20,
        name: 'Excellent >3739',
        value: -40
    }
    $scope.CooWomens1.push(data);


    // 30-39
    $scope.CooWomens2 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 1,
        name: 'Poor  600 - 759',
        value: 20
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 2,
        name: 'Poor 760 - 919',
        value: 15
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 3,
        name: 'Poor 920 - 1079',
        value: 12
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 4,
        name: 'Poor 1080 - 1239',
        value: 9
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 5,
        name: 'Poor 1240 - 1399',
        value: 6
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 6,
        name: 'Below Average 1400 - 1559',
        value: 0
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 7,
        name: 'Below Average 1560 - 1719 ',
        value: -2
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 8,
        name: 'Average 1720 - 1879  ',
        value: -4
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 9,
        name: 'Average 1880 - 2039',
        value: -6
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 10,
        name: 'Above Average 2040 - 2199',
        value: -9
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 11,
        name: 'Above Average 2200 - 2359 ',
        value: -12
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 12,
        name: 'Above Average 2360 - 2519  ',
        value: -15
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 13,
        name: 'Excellent 2520-2679 ',
        value: -18
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 14,
        name: 'Excellent 2680-2839 ',
        value: -21
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 15,
        name: 'EExcellent 2840-2999 ',
        value: -24
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 16,
        name: 'Excellent 3000-3159',
        value: -28
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 17,
        name: 'Excellent 3160-3319',
        value: -31
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 18,
        name: 'Excellent 3320-3479',
        value: -34
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 19,
        name: 'Excellent 3480-3639 ',
        value: -37
    }
    $scope.CooWomens2.push(data);
    data = {
        id: 20,
        name: 'Excellent >3639',
        value: -40
    }
    $scope.CooWomens2.push(data);


    // 40-49
    $scope.CooWomens3 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 1,
        name: 'Poor  400 - 559',
        value: 20
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 2,
        name: 'Poor 560 - 719',
        value: 15
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 3,
        name: 'Poor 720 - 879',
        value: 12
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 4,
        name: 'Poor 880 - 1039',
        value: 9
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 5,
        name: 'Poor 1040 - 1199',
        value: 6
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 6,
        name: 'Below Average 1200 - 1359 ',
        value: 0
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 7,
        name: 'Below Average 1360 - 1519 ',
        value: -2
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 8,
        name: 'Average 1520 - 1679  ',
        value: -4
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 9,
        name: 'Average 1680 - 1839',
        value: -6
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 10,
        name: 'Above Average 1840 - 1999',
        value: -9
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 11,
        name: 'Above Average 2000 - 2159  ',
        value: -12
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 12,
        name: 'Above Average 2160 - 2319  ',
        value: -15
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 13,
        name: 'Excellent 2320-2479 ',
        value: -18
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 14,
        name: 'Excellent 2480-2639',
        value: -21
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 15,
        name: 'Excellent 2640-2879',
        value: -24
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 16,
        name: 'Excellent 2880-2959',
        value: -28
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 17,
        name: 'EExcellent 2960-3119',
        value: -31
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 18,
        name: 'Excellent 3220-3279',
        value: -34
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 19,
        name: 'Excellent 3280-3439',
        value: -37
    }
    $scope.CooWomens3.push(data);
    data = {
        id: 20,
        name: 'Excellent >3439',
        value: -40
    }
    $scope.CooWomens3.push(data);

    //  50+
    $scope.CooWomens4 = [];
    data = {
        id: 0,
        name: 'N/A',
        value: 0
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 1,
        name: 'Poor  300 - 459',
        value: 20
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 2,
        name: 'Poor 460 - 619',
        value: 15
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 3,
        name: 'Poor 620 - 779',
        value: 12
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 4,
        name: 'Poor 780 - 939',
        value: 9
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 5,
        name: 'Poor 940 - 1099',
        value: 6
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 6,
        name: 'Below Average 1100 - 1259 ',
        value: 0
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 7,
        name: 'Below Average 1260 - 1419 ',
        value: -2
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 8,
        name: 'Average 1420 - 1579 ',
        value: -4
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 9,
        name: 'Average 1580 - 1739',
        value: -6
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 10,
        name: 'Above Average 1740 - 1899',
        value: -9
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 11,
        name: 'Above Average 1900 - 2059 ',
        value: -12
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 12,
        name: 'Above Average 2060 - 2219 ',
        value: -15
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 13,
        name: 'Excellent 2220-2359',
        value: -18
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 14,
        name: 'Excellent 2360-2519',
        value: -21
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 15,
        name: 'Excellent 2520-2679',
        value: -24
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 16,
        name: 'Excellent 2680-2839',
        value: -28
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 17,
        name: 'Excellent 2840-2999',
        value: -31
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 18,
        name: 'Excellent 3000-3159',
        value: -34
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 19,
        name: 'Excellent 3160-3319',
        value: -37
    }
    $scope.CooWomens4.push(data);
    data = {
        id: 20,
        name: 'Excellent >3319',
        value: -40
    }
    $scope.CooWomens4.push(data);

    //
    // Qualitative 
    //
    $scope.selectedRateds = [];
    var data = {
        id: 0,
        name: 'Unfit',
    }
    $scope.selectedRateds.push(data);
    var data = {
        id: 1,
        name: 'Average',
    }
    $scope.selectedRateds.push(data);
    var data = {
        id: 2,
        name: 'Fit',
    }
    $scope.selectedRateds.push(data);
    var data = {
        id: 3,
        name: 'Weekend Warrior',
    }
    $scope.selectedRateds.push(data);
    var data = {
        id: 4,
        name: 'Elite',
    }
    $scope.selectedRateds.push(data);

    $scope.selectedLifes = [];
    var data = {
        id: 0,
        name: 'No',
    }
    $scope.selectedLifes.push(data);
    var data = {
        id: 1,
        name: 'Yes',
    }
    $scope.selectedLifes.push(data);
    
    $scope.selectedParticipateds = [];
    var data = {
        id: 0,
        name: 'No',
    }
    $scope.selectedParticipateds.push(data);
    var data = {
        id: 1,
        name: 'Yes',
    }
    $scope.selectedParticipateds.push(data);

    $scope.selectedPlanings = [];
    var data = {
        id: 0,
        name: 'No',
    }
    $scope.selectedPlanings.push(data);
    var data = {
        id: 1,
        name: 'Yes',
    }
    $scope.selectedPlanings.push(data);

    /// empieza old

    //Push Up Test(Men Age dependent)
    $scope.PusMens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.PusMens.push(data);
    data = {
        id: 1,
        name: 'Fair',
        value: -5
    }
    $scope.PusMens.push(data);
    data = {
        id: 2,
        name: 'Average',
        value: -10
    }
    $scope.PusMens.push(data);
    data = {
        id: 3,
        name: 'Good',
        value: -15
    }
    $scope.PusMens.push(data);
    data = {
        id: 4,
        name: 'Excellent',
        value: -20
    }
    $scope.PusMens.push(data);
    data = {
        id: 5,
        name: 'NA',
        value: 0
    }
    $scope.PusMens.push(data);

    //Push Up Test(Women Age dependent)
    $scope.PusWomens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.PusWomens.push(data);
    data = {
        id: 1,
        name: 'Fair',
        value: -5
    }
    $scope.PusWomens.push(data);
    data = {
        id: 2,
        name: 'Average',
        value: -10
    }
    $scope.PusWomens.push(data);
    data = {
        id: 3,
        name: 'Good',
        value: -15
    }
    $scope.PusWomens.push(data);
    data = {
        id: 4,
        name: 'Excellent',
        value: -20
    }
    $scope.PusWomens.push(data);
    data = {
        id: 5,
        name: 'NA',
        value: 0
    }
    $scope.PusWomens.push(data);

    //MB Throw(Men)
    $scope.MBMens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.MBMens.push(data);
    data = {
        id: 1,
        name: 'Average',
        value: -10
    }

    $scope.MBMens.push(data);
    data = {
        id: 2,
        name: 'Excellent',
        value: -20
    }
    $scope.MBMens.push(data);
    data = {
        id: 3,
        name: 'NA',
        value: 0
    }
    $scope.MBMens.push(data);

    //MB Throw(Women)
    $scope.MBWomens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.MBWomens.push(data);
    data = {
        id: 1,
        name: 'Average',
        value: -10
    }

    $scope.MBWomens.push(data);
    data = {
        id: 2,
        name: 'Excellent',
        value: -20
    }
    $scope.MBWomens.push(data);
    data = {
        id: 3,
        name: 'NA',
        value: 0
    }
    $scope.MBWomens.push(data);

    //Cooper test(Men Age Dependent)
    $scope.CooMens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.CooMens.push(data);
    data = {
        id: 1,
        name: 'Below Average',
        value: -5
    }
    $scope.CooMens.push(data);
    data = {
        id: 2,
        name: 'Average',
        value: -10
    }
    $scope.CooMens.push(data);
    data = {
        id: 3,
        name: 'Above Average',
        value: -15
    }
    $scope.CooMens.push(data);
    data = {
        id: 4,
        name: 'Excellent',
        value: -20
    }
    $scope.CooMens.push(data);
    data = {
        id: 5,
        name: 'NA',
        value: 0
    }
    $scope.CooMens.push(data);

    //Cooper test(Women Age Dependent)
    $scope.CooWomens = [];
    var data = {
        id: 0,
        name: 'Poor',
        value: 0
    }
    $scope.CooWomens.push(data);
    data = {
        id: 1,
        name: 'Below Average',
        value: -5
    }
    $scope.CooWomens.push(data);
    data = {
        id: 2,
        name: 'Average',
        value: -10
    }
    $scope.CooWomens.push(data);
    data = {
        id: 3,
        name: 'Above Average',
        value: -15
    }
    $scope.CooWomens.push(data);
    data = {
        id: 4,
        name: 'Excellent',
        value: -20
    }
    $scope.CooWomens.push(data);
    data = {
        id: 5,
        name: 'NA',
        value: 0
    }
    $scope.CooWomens.push(data);

    /// end old 

    $scope.disablegendermen = false;
    $scope.disablegendermenWai = false;
    $scope.disablegendermenWai2 = false;
    $scope.disablegendermenSid = false;

    $scope.disablegenderwomen = true;
    $scope.disablegenderwomenWai = true;
    $scope.disablegenderwomenWai2 = true;
    $scope.disablegenderwomenSid = true;
    $scope.disablegenderwomenMod = true;

    $scope.disableMBCM1 = false;
    $scope.disableMBCM2 = false;
    $scope.disableMBCM3 = false;
    $scope.disableMBCM4 = false;

    $scope.disableMBCW1 = true;
    $scope.disableMBCW2 = true;
    $scope.disableMBCW3 = true;
    $scope.disableMBCW4 = true;

    $scope.disablegendercoomen1 = true;
    $scope.disablegendercoomen2 = true;
    $scope.disablegendercoomen3 = true;
    $scope.disablegendercoomen4 = true;

    $scope.disablegendercoowomen1 = true;
    $scope.disablegendercoowomen2 = true;
    $scope.disablegendercoowomen3 = true;
    $scope.disablegendercoowomen4 = true;

    $scope.disablegendermen1 = true;
    $scope.disablegendermen2 = true;
    $scope.disablegendermen3 = true;
    $scope.disablegendermen4 = true;
    $scope.disablegendermen5 = true;

    $scope.disablegender1women = true;
    $scope.disablegender2women = true;
    $scope.disablegender3women = true;
    $scope.disablegender4women = true;
    $scope.disablegender5women = true;

    $scope.disablegendermod1women = true;
    $scope.disablegendermod2women = true;
    $scope.disablegendermod3women = true;
    $scope.disablegendermod4women = true;
    $scope.disablegendermod5women = true;

    $scope.ocultarMessage = false;
    $scope.hideHeader = true;


    var mile = 1609.344;
    var countQ = 1;
    var totalQ = 0;


    var prepara = function () {
        var myEl = $element.find('#inputAge');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '14',
                defaultValue: 35,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });

        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 14,
                max: 100,
                scale: 0,
                defaultValue: 35,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputAgeReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '14',
                defaultValue: 35,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });

        }

        var myEl = $element.find('#inputMod');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '7',
                min: '0',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 7,
                scale: 0,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputModReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '7',
                min: '0',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputVig');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '7',
                min: '0',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 7,
                scale: 0,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputVigReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '7',
                min: '0',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var wheel = [[
                        {
                            values: [4, 5, 6, 7, 8]
                        },
                        {
                            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                        }
        ]];
        var myEl = $element.find('#inputHeight');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = data[0] + " " + data[1];

                return value;
            }
        });

        var myEl = $element.find('#inputHeightReview');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = data[0] + " " + data[1];

                return value;
            }
        });

        var myEl = $element.find('#inputWeight');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 1,
            max: 400,
            scale: 0,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputWeightReview');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 1,
            max: 400,
            scale: 0,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputSys');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '220',
                min: '50',
                defaultValue: 120,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 50,
                max: 220,
                scale: 0,
                defaultValue: 120,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputSysReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '220',
                min: '50',
                defaultValue: 120,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputDia');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                defaultValue: 70,
                max: '200',
                min: '30',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 30,
                max: 200,
                scale: 0,
                defaultValue: 70,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputDiaReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                defaultValue: 70,
                max: '200',
                min: '30',
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var values = [];
        for (var x = 10; x < 120; x++) {
            values.push(x);
        }

        var wheel = [[
                        {
                            values: values
                        },
                        {
                            values: [.0, .25, .50 , .75]
                        }
        ]];
     
        var myEl = $element.find('#inputWaist');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) +  parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }
       
        var myEl = $element.find('#inputWaistReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }
        

        var myEl = $element.find('#inputHip');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputHipReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputwaistw');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputwaistwReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputhipw');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputhipwReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                wheels: wheel,
                formatValue: function (data) {
                    var value = parseFloat(data[0]) + parseFloat(data[1]);

                    return value;
                }
            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                defaultValue: 30,
                min: 10,
                max: 120,
                scale: 2,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputSideMen');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 200,
                scale: 0,
                defaultValue: 60,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputSideMenReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputSidMenLeft');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 200,
                scale: 0,
                defaultValue: 60,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputSidMenLeftReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#howSidWomen');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 200,
                scale: 0,
                defaultValue: 60,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#howSidWomenReview');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#howSidWomenLeft');
        if ($rootScope.phoneDevice >= 0) {

            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 200,
                scale: 0,
                defaultValue: 60,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#howSidWomenLeftReview');
        if ($rootScope.phoneDevice >= 0) {

            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '200',
                min: '0',
                defaultValue: 60,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen1');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushMen1Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen2');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushMen2Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen3');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }
        var myEl = $element.find('#inputPushMen3Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen4');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushMen4Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushMen5');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushMen5Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen1');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen1Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen2');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen2Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen3');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen3Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen4');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen4Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomen5');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomen5Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM1');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM1Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM2');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM2Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM3');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM3Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM4');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM4Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var myEl = $element.find('#inputPushWomenM5');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }
        else {
            myEl.mobiscroll().numpad({
                lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
                mode: 'scroller',
                min: 0,
                max: 100,
                scale: 0,
                defaultValue: 15,
                preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
            });
        }

        var myEl = $element.find('#inputPushWomenM5Review');
        if ($rootScope.phoneDevice >= 0) {
            myEl.mobiscroll().number({
                lang: 'en-US',
                mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
                max: '100',
                min: '0',
                defaultValue: 15,
                step: '1'                   // More info about step: https://docs.mobiscroll.com/angular/2-17-2/number#!opt-step

            });
        }

        var valuesOne = [];
        for (var x = 0; x <= 100; x++) {
            valuesOne.push(x);
        }
        var wheel = [[
                        {
                            values: valuesOne
                        },
                        {
                            values: [.0, .25, .50, .75]
                        }
        ]];
        var myEl = $element.find('#inputChestMen1');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

       
        var myEl = $element.find('#inputChestMen1Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });


        var myEl = $element.find('#inputChestMen2');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen2Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen3');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen3Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen4');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestMen4Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen1');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen1Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen2');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen2Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen3');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen3Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen4');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputChestWoMen4Review');
        myEl.mobiscroll({
            lang: 'en-US',
            mode: 'scroller',        // More info about mode: https://docs.mobiscroll.com/2-17-2/number#!opt-mode
            wheels: wheel,
            formatValue: function (data) {
                var value = parseInt(data[0]) + parseFloat(data[1]);

                return value;
            }
        });

        var myEl = $element.find('#inputCooperMen1');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen1Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen2');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen2Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen3');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen3Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen4');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperMen4Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen1');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen1Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen2');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen2Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen3');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen3Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen4');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });

        var myEl = $element.find('#inputCooperWoMen4Review');
        myEl.mobiscroll().numpad({
            lang: 'en-US',    // Specify language like: lang: 'pl' or omit setting to use default
            mode: 'scroller',
            min: 0,
            max: 100,
            scale: 2,
            preset: 'decimal'              // More info about preset: https://docs.mobiscroll.com/2-17-2/numpad#!opt-preset
        });
    }

    prepara();

    if ($rootScope.phoneDevice >= 0) {
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
    }


    var flagcontinue = true;
    var flagModified = false;

    var flagImgMale = 0;
    var flagImgFamele = 0;
    $scope.imgmale = "styles/mztimgs/men.png";
    $scope.imgfemale = "styles/mztimgs/women.png";

    $scope.hideScoreQ = true;
    $scope.hideAll = true;
    $scope.doneSubmitwebPoints = true;
    var state = "0";

    var pageQ = -1;

    var stopTime;

    var countSubmit = 0;

    var init = function () {

        var tempFactory = localStorage.getItem("queryQuestionTempFactory");

        $scope.hideSaveReview = true;

        $('#idreadiogender').focus();

        $scope.BMILocal = 0;
        $scope.ocultarMen = true;
        $scope.ocultarWomen = true;
        $scope.ocultar = true;

        $scope.ServerCar = "";
        $scope.ServerChe = "";
        $scope.ServerFat = "";
        $scope.ServerMot = "";
        $scope.ServerDia = "";
        $scope.ServerMod = "";
        $scope.ServerVig = "";
        $scope.ServerSit = "";
        $scope.ServerSmo = "";
        $scope.ServerSmokes = "";
        $scope.ServerAlc = "";
        $scope.ServerOra = "";
        $scope.ServerAnt = "";
        $scope.ServerAnt = "";

        $scope.ServerSys = "";
        $scope.ServerDiastolic = "";
        $scope.ServerWaiMen = "";
        $scope.ServerWaiWomen = "";
        $scope.ServerSidMen = "";
        $scope.ServerSiddWomen = "";
        $scope.ServerDee = "";
        $scope.ServerAct = "";
        $scope.ServerMob = "";
        $scope.ServerdSho = "";
        $scope.ServerdSpi = "";
        $scope.ServerSpiExt = "";

        $scope.ServerPusMen = "";
        $scope.ServerPusWomen = "";
        $scope.ServerMPusWomen = "";
        $scope.ServerChestMen = "";
        $scope.ServerChestWoMen = "";
        $scope.ServerComen = "";
        $scope.ServerCowomen = "";

        $scope.ServerTotal1 = "";
        $scope.ServerTotal2 = "";
        $scope.ServerTotal3 = "";
        $scope.ServerTotal4 = "";



        state = $window.sessionStorage["statequestion"];


        questionFactory.idform = "";
        questionFactory.userid = $rootScope.userId.userId;

        $scope.email = "";
        $scope.selectedGender = $scope.Genders[0];

        $scope.selectedAge = $scope.Ages[0];
        $scope.howold = 0;
        $scope.howHeight = '0\' 0\'\'';
        $scope.howWeight = 0;

        $scope.selectedCar = $scope.CardioVascularHealths[0];
        $scope.selectedChe = $scope.ChestPains[0];
        $scope.selectedFat = $scope.FatherDiagnoseds[0];
        $scope.selectedMot = $scope.MotherDiagnoseds[0];
        $scope.selectedDiabetes = $scope.Diabetess[0];

        $scope.selectedMod = $scope.Mods[0];
        $scope.selectedMod.value = 0;
        $scope.howmod = 0;
        $scope.selectedVig = $scope.Vigs[0];
        $scope.selectedVig.value = 0;
        $scope.howvig = 0;

        $scope.selectedSit = $scope.Sits[0];
        $scope.selectSmo = $scope.Smos[0];
        $scope.selectedSmokes = $scope.SecondHandsSmokes[0];
        $scope.selectAlc = $scope.Alcs[0];
        //$scope.selectedOra = $scope.OralContraceptives[0];
        $scope.selectedAnt = $scope.Ants[0];

        $scope.selectedSys = $scope.Syss[0];
        $scope.selectedSys.value = 0;
        $scope.howsys = 0;

        $scope.selectedDiastolic = $scope.Dias[0];
        $scope.selectedDiastolic.value = 0;
        $scope.howdia = 0;

        $scope.selectedWaiMen = $scope.WaiMens[0];
        $scope.howwaist = '0\'\'';
        $scope.howhip = '0\'\'';

        $scope.selectedWaiWomen = $scope.WaiWomens[0];
        $scope.howwaistw = '0\'\'';
        $scope.howhipw = '0\'\'';

        $scope.selectedSidMen = $scope.SidMens[0];
        $scope.howSidMen = '0 s';
        $scope.howSidMenLeft = '0 s';

        $scope.selectedSidWomen = $scope.SidWomens[0];
        $scope.howSidWomen = '0 s';
        $scope.howSidWomenLeft = '0 s';

        $scope.selectedDee = $scope.Dees[0];
        $scope.selectedAct = $scope.Acts[0];
        $scope.selectedMob = $scope.Mobs[0];
        $scope.selectedSho = $scope.ShoulderClearingTests[0];
        $scope.selectedSpi = $scope.SpinalFlexions[0];
        $scope.selectedSpiExt = $scope.SpinalExtensions[0];
        $scope.selectedPusMen = $scope.PusMens[5];

        $scope.selectedPusWomenModified = $scope.PusWomenModifieds[0];

        $scope.selectedPusWomen = $scope.PusWomens[5];

        $scope.selectedMBMen = $scope.MBMens[3];
        $scope.selectedMBWomen = $scope.MBWomens[3];
        $scope.selectedCooMen = $scope.CooMens[5];
        $scope.selectedCooWomen = $scope.CooWomens[5];

        $scope.disablegendermen = false;
        $scope.disablegendermenWai = false;
        $scope.disablegendermenWai2 = false;
        $scope.disablegendermenSid = false;

        $scope.disablegenderwomen = true;
        $scope.disablegenderwomenWai = true;
        $scope.disablegenderwomenWai2 = true;
        $scope.disablegenderwomenSid = true;
        $scope.disablegenderwomenMod = true;

        $scope.disablegender1women = true;
        $scope.disablegender2women = true;
        $scope.disablegender3women = true;
        $scope.disablegender4women = true;
        $scope.disablegender5women = true;

        $scope.selectedNPWM1 = $scope.PushNWomengpo1[1];
        $scope.selectedNPWM1.value = 0;
        $scope.selectedNPWM2 = $scope.PushNWomengpo2[1];
        $scope.selectedNPWM2.value = 0;
        $scope.selectedNPWM3 = $scope.PushNWomengpo3[1];
        $scope.selectedNPWM3.value = 0;
        $scope.selectedNPWM4 = $scope.PushNWomengpo4[1];
        $scope.selectedNPWM4.value = 0;
        $scope.selectedNPWM5 = $scope.PushNWomengpo5[1];
        $scope.selectedNPWM5.value = 0;

        $scope.disablegendermod1women = true;
        $scope.disablegendermod2women = true;
        $scope.disablegendermod3women = true;
        $scope.disablegendermod4women = true;
        $scope.disablegendermod5women = true;

        $scope.selectedPWM1 = $scope.PushWomengpo1[1];
        $scope.selectedPWM1.value = 0;
        $scope.selectedPWM2 = $scope.PushWomengpo2[1];
        $scope.selectedPWM2.value = 0;
        $scope.selectedPWM3 = $scope.PushWomengpo3[1];
        $scope.selectedPWM3.value = 0;
        $scope.selectedPWM4 = $scope.PushWomengpo4[1];
        $scope.selectedPWM4.value = 0;
        $scope.selectedPWM5 = $scope.PushWomengpo5[1];
        $scope.selectedPWM5.value = 0;


        $scope.disablegendermen1 = false;
        $scope.disablegendermen1 = false;
        $scope.disablegendermen1 = false;
        $scope.disablegendermen1 = false;
        $scope.disablegendermen1 = false;

        $scope.selectedPusMen1 = $scope.PusMens1[1];
        $scope.selectedPusMen1.value = 0;
        $scope.selectedPusMen2 = $scope.PusMens2[1];
        $scope.selectedPusMen2.value = 0;
        $scope.selectedPusMen3 = $scope.PusMens3[1];
        $scope.selectedPusMen3.value = 0;
        $scope.selectedPusMen4 = $scope.PusMens4[1];
        $scope.selectedPusMen4.value = 0;
        $scope.selectedPusMen5 = $scope.PusMens5[1];
        $scope.selectedPusMen5.value = 0;

        $scope.disableMBCM1 = false;
        $scope.disableMBCM2 = false;
        $scope.disableMBCM3 = false;
        $scope.disableMBCM4 = false;

        $scope.selectedMBMen1 = $scope.PushMBCMgpo1[1];
        $scope.selectedMBMen1.value = 0;
        $scope.selectedMBMen2 = $scope.PushMBCMgpo2[1];
        $scope.selectedMBMen2.value = 0;
        $scope.selectedMBMen3 = $scope.PushMBCMgpo3[1];
        $scope.selectedMBMen3.value = 0;
        $scope.selectedMBMen4 = $scope.PushMBCMgpo4[1];
        $scope.selectedMBMen4.value = 0;

        $scope.disableMBCW1 = true;
        $scope.disableMBCW2 = true;
        $scope.disableMBCW3 = true;
        $scope.disableMBCW4 = true;

        $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[1];
        $scope.selectedMBWOMen1.value = 0;
        $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[1];
        $scope.selectedMBWOMen2.value = 0;
        $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[1];
        $scope.selectedMBWOMen3.value = 0;
        $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[1];
        $scope.selectedMBWOMen4.value = 0;

        $scope.disablegendercoomen1 = true;
        $scope.disablegendercoomen2 = true;
        $scope.disablegendercoomen3 = true;
        $scope.disablegendercoomen4 = true;


        $scope.disablegendercoowomen1 = true;
        $scope.disablegendercoowomen2 = true;
        $scope.disablegendercoowomen3 = true;
        $scope.disablegendercoowomen4 = true;


        $scope.selectedCooMen1 = $scope.CooMens1[1];
        $scope.selectedCooMen1.value = 0;
        $scope.selectedCooMen2 = $scope.CooMens2[1];
        $scope.selectedCooMen2.value = 0;
        $scope.selectedCooMen3 = $scope.CooMens3[1];
        $scope.selectedCooMen3.value = 0;
        $scope.selectedCooMen4 = $scope.CooMens4[1];
        $scope.selectedCooMen4.value = 0;


        $scope.selectedCW1 = $scope.CooWomens1[1]
        $scope.selectedCW1.value = 0;
        $scope.selectedCW2 = $scope.CooWomens2[1];
        $scope.selectedCW2.value = 0;
        $scope.selectedCW3 = $scope.CooWomens3[1];
        $scope.selectedCW3.value = 0;
        $scope.selectedCW4 = $scope.CooWomens4[1];
        $scope.selectedCW4.value = 0;

        $scope.selectedRated = $scope.selectedRateds[0];
        $scope.selectedLife = $scope.selectedLifes[0];
        $scope.selectedParticipated = $scope.selectedParticipateds[0];
        $scope.selectedPlaning = $scope.selectedPlanings[0];


        //goGender();

        $scope.radioGender = true;
        $scope.radioCar = true;
        $scope.radioChe = true;
        $scope.radioFat = true;
        $scope.radioMot = true;
        $scope.radioDia = true;
        $scope.radioSmo = true;
        $scope.radioOra = true;
        $scope.radioOrg = true;
        $scope.radioPlaning = true;
        $scope.radioMPW = true;
        $scope.radiofitness = true;


        $scope.radioSho = true;
        $scope.radioSpi = true;
        $scope.radioSpiExt = true;

        $scope.howSidMen = '0 s';
        $scope.howSidMenLeft = '0 s';
        $scope.howSidWomen = '0 s';
        $scope.howSidWomenLeft = '0 s';

        $scope.numMBCMpwm1 = 0.00 + "\'";
        $scope.numMBCMpwm2 = 0.00 + "\'";
        $scope.numMBCMpwm3 = 0.00 + "\'";
        $scope.numMBCMpwm4 = 0.00 + "\'";

        $scope.numMBCWpwm1 = 0.00 + "\'";
        $scope.numMBCWpwm2 = 0.00 + "\'";
        $scope.numMBCWpwm3 = 0.00 + "\'";
        $scope.numMBCWpwm4 = 0.00 + "\'";

        $scope.numMBCOOWpwm1 = 0 + " miles";
        $scope.numMBCOOWpwm2 = 0 + " miles";
        $scope.numMBCOOWpwm3 = 0 + " miles";
        $scope.numMBCOOWpwm4 = 0 + " miles";

        $scope.numMBCOOWOpwm1 = 0 + " miles";
        $scope.numMBCOOWOpwm2 = 0 + " miles";
        $scope.numMBCOOWOpwm3 = 0 + " miles";
        $scope.numMBCOOWOpwm4 = 0 + " miles";

        $scope.numnpmen1 = 0 + ' Push Ups ';
        $scope.numnpmen2 = 0 + ' Push Ups ';
        $scope.numnpmen3 = 0 + ' Push Ups ';
        $scope.numnpmen4 = 0 + ' Push Ups ';
        $scope.numnpmen5 = 0 + ' Push Ups ';

        $scope.numnpwm1 = 0 + ' Push Ups ';
        $scope.numnpwm2 = 0 + ' Push Ups ';
        $scope.numnpwm3 = 0 + ' Push Ups ';
        $scope.numnpwm4 = 0 + ' Push Ups ';
        $scope.numnpwm5 = 0 + ' Push Ups ';

        $scope.numpwm1 = 0 + ' Push Ups ';
        $scope.numpwm2 = 0 + ' Push Ups ';
        $scope.numpwm3 = 0 + ' Push Ups ';
        $scope.numpwm4 = 0 + ' Push Ups ';
        $scope.numpwm5 = 0 + ' Push Ups ';

        
        if ($rootScope.phoneDevice > -1) {
            $scope.hideHeader = false;
            $scope.ocultarMessage = true;
            ocultarPhone();
        }
        else {
            $scope.hideNext = true;
            $scope.hideBack = true;
        }

        if (tempFactory != null) {
            queryQuestionTempFactory = JSON.parse(tempFactory);

            questionFactory = JSON.parse(localStorage.getItem("questionFactory"));
            pageQ = 0;
            if (queryQuestionTempFactory.pageQ == 1) {
                pageQ = 1;
            }

            countQ = queryQuestionTempFactory.countQ;
            totalQ = queryQuestionTempFactory.totalQ;

            fillData(JSON.parse(localStorage.getItem("questionFactory")));

            stopTime = $interval(closeMenu, $rootScope.dialogTimer);

            countSubmit = totalQ;

        }
        else if (state == "1") {
            

            queryQuestionFactory = JSON.parse($window.sessionStorage["question"]);

            questionFactory.idform = queryQuestionFactory.id;

            getOneData();

            if ($scope.selectedGender.id == 0) {
                countSubmit = 31;
            }
            else {
                countSubmit = 32;
            }
            

 
        }
        else {
            $scope.hideAll = false;
            pageQ = 0;
            saveStateForm();
        }
        $scope.hidereview = true;
        $scope.hideEmail = true;
        $scope.hidepoints = true;

        $scope.emailDisable = true;
        $scope.questions = false;
        $scope.hideSubmitweb = false;
        $scope.hideBackweb = false;
        $scope.doneSubmitweb = true;
        $scope.hidepoints = true;
        $scope.hideerrors = true;
        $scope.hideBack = true;
        $scope.hideSave = true;

        if ($rootScope.phoneDevice >= 0) {
            if (countQ > 2) {
                countQ = countQ - 1;
                $scope.next();
                $scope.hideGender = true;
                $scope.hideBack = false;
            }
            else {
                $scope.hideNext = true;
            }

            

        }
        if (tempFactory != null) {
            if (queryQuestionTempFactory.pageQ == 1) {
                $scope.hideAll = false;
                $scope.hideEmail = false;
                $scope.hideScoreQ = true;
                $scope.questions = true;

            }
            else {
                $scope.questions = false;
                $scope.hideScoreQ = true;
                $scope.hideAll = false;
            }

        }

        /*
        if ($rootScope.phoneDevice >= 0) {
            var value = $("#left-panel").css("left");
            if (value != undefined && value == '0px') {
                $("#id-toggle-menu").click();
            }

        }
        */
    }

    var calcData = function () {
       
        $scope.gohowmod($scope.howmod);
        $scope.gohowvig($scope.howvig);
        $scope.gohowsys($scope.howsys);
        $scope.gohowdia($scope.howdia);

        if ($scope.selectedGender.id == 0) {
            
            $scope.gohowSidMen($scope.howSidMen, $scope.howSidMenLeft);
            calculawaisttohip($scope.howwaist, $scope.howhip);

            if ($scope.selectedAge.id == 0) {
                $scope.gonumnpmen1($scope.numnpmen1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumnpmen2($scope.numnpmen2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumnpmen3($scope.numnpmen3);
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.gonumnpmen4($scope.numnpmen4);
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.gonumnpmen5($scope.numnpmen5);
            }

            if ($scope.selectedAge.id == 0) {
                $scope.gonumMBCMpwm1($scope.numMBCMpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumMBCMpwm2($scope.numMBCMpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumMBCMpwm3($scope.numMBCMpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.gonumMBCMpwm4($scope.numMBCMpwm4);
            }


            if ($scope.selectedAge.id == 0) {
                $scope.gonumMBCOOWpwm1($scope.numMBCOOWpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumMBCOOWpwm2($scope.numMBCOOWpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumMBCOOWpwm3($scope.numMBCOOWpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.gonumMBCOOWpwm4($scope.numMBCOOWpwm4);
            }
        }
        else {
            $scope.gohowSidWomen($scope.howSidWomen, $scope.howSidWomenLeft);
            calculawaisttohipw($scope.howwaistw, $scope.howhipw);

            if (!$scope.radioMPW) {
              
                if ($scope.selectedAge.id == 0) {
                    $scope.gonumpwm1($scope.numpwm1);
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.gonumpwm2($scope.numpwm2);
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.gonumpwm3($scope.numpwm3);
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.gonumpwm4($scope.numpwm4);
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.gonumpwm5($scope.numpwm5);
                }


            }
            else {
              
                if ($scope.selectedAge.id == 0) {
                    $scope.gonumnpwm1($scope.numnpwm1);
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.gonumnpwm2($scope.numnpwm2);
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.gonumnpwm3($scope.numnpwm3);
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.gonumnpwm4($scope.numnpwm4);
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.gonumnpwm5($scope.numnpwm5);
                }
            }

            if ($scope.selectedAge.id == 0) {
                $scope.gonumMBCWpwm1($scope.numMBCWpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumMBCWpwm2($scope.numMBCWpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumMBCWpwm3($scope.numMBCWpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.gonumMBCWpwm4($scope.numMBCWpwm4);
            }

            if ($scope.selectedAge.id == 0) {
                $scope.gonumMBCOOWOpwm1($scope.numMBCOOWOpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.gonumMBCOOWOpwm2($scope.numMBCOOWOpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.gonumMBCOOWOpwm3($scope.numMBCOOWOpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.gonumMBCOOWOpwm4($scope.numMBCOOWOpwm4);
            }
        }


    }

    var closeMenu = function () {
        $interval.cancel(stopTime);
        if ($rootScope.phoneDevice >= 0) {
            /*
            var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }
            */

            $('#inputAge').focus();
            $('#inputHeight').focus();
            $('#inputWeight').focus();
            $('#inputSys').focus();
            $('#inputDia').focus();
            $('#inputWaist').focus();
            $('#inputHip').focus();
            $('#inputwaistw').focus();
            $('#inputhipw').focus();
            $('#inputSideMen').focus();
            $('#inputSidMenLeft').focus();
            $('#howSidWomen').focus();
            $('#howSidWomenLeft').focus();
            $('#inputPushMen1').focus();
            $('#inputPushMen2').focus();
            $('#inputPushMen3').focus();
            $('#inputPushMen4').focus();
            $('#inputPushMen5').focus();
            $('#inputPushWomen1').focus();
            $('#inputPushWomen2').focus();
            $('#inputPushWomen3').focus();
            $('#inputPushWomen4').focus();
            $('#inputPushWomen5').focus();
            $('#inputPushWomenM1').focus();
            $('#inputPushWomenM2').focus();
            $('#inputPushWomenM3').focus();
            $('#inputPushWomenM4').focus();
            $('#inputPushWomenM5').focus();
            $('#inputChestMen1').focus();
            $('#inputChestMen2').focus();
            $('#inputChestMen3').focus();
            $('#inputChestMen4').focus();
            $('#inputChestWoMen1').focus();
            $('#inputChestWoMen2').focus();
            $('#inputChestWoMen3').focus();
            $('#inputChestWoMen4').focus();
            $('#inputCooperMen1').focus();
            $('#inputCooperMen2').focus();
            $('#inputCooperMen3').focus();
            $('#inputCooperMen4').focus();
            $('#inputCooperWoMen1').focus();
            $('#inputCooperWoMen2').focus();
            $('#inputCooperWoMen3').focus();
            $('#inputCooperWoMen4').focus();
        }


    }

    var getOneData = function () {
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push(queryQuestionFactory.id);
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Questions/QueryOneUserQuestions')
        .then(function (data) {
            fillData(data);
            
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    var fillData = function (data) {
        flagcontinue = false;

        $scope.email = data.email;

        $scope.howold = data.Age;
        $scope.gohowold($scope.howold);

        $scope.howHeight = data.HowHeightFeet + "\' " + data.HowHeightInchs + "\'\'";
        $scope.howWeight = data.HowWeight;

        if (data.CardioVascularHealth) {
            $scope.goradioCarYes();
        }
        else {
            $scope.goradioCarNo();
        }

        if (data.ChestPain) {
            $scope.goradioCheYes();
        }
        else {
            $scope.goradioCheNo();
        }

        if (data.FatherDiagnosed) {
            $scope.goradioFatYes();
        }
        else {
            $scope.goradioFatNo();
        }

        if (data.MotherDiagnosed) {
            $scope.goradioMotYes();
        }
        else {
            $scope.goradioMotNo();
        }

        if (data.Diabetes) {
            $scope.goradioDiaYes();
        }
        else {
            $scope.goradioDiaNo();
        }


        //$scope.moderate(data.ModerateExercise);
        //$scope.vigorous(data.Vigorous);
        $scope.howmod = data.ModerateExercise;
        $scope.gohowmod($scope.howmod);
        $scope.howvig = data.Vigorous;
        $scope.gohowvig($scope.howvig);

        $scope.sitting(data.Sitting);
        $scope.smoke(data.Smoke);


        if (data.Secondhandsmoke) {
            $scope.goradioSmoYes();
        }
        else {
            $scope.goradioSmoNo();
        }

        $scope.alcohol(data.Alcohol);

        if (data.OralContraceptives) {
            $scope.goradioOraYes();
        }
        else {
            $scope.goradioOraNo();
        }

        $scope.antibiotics(data.Antibiotics);

        $scope.howsys = data.Systolic;
        $scope.gohowsys($scope.howsys);

        $scope.howdia = data.Diastolic;
        $scope.gohowdia($scope.howdia);

        if (data.Gender == 0) {
            $scope.howwaist = data.WaistMen + '\'\'';
            $scope.howhip = data.HipMen + '\'\'';
            calculawaisttohip($scope.howwaist, $scope.howhip);
        }
        else {
            $scope.howwaistw = data.WaistWomen + '\'\'';
            $scope.howhipw = data.HipWomen + '\'\'';
            calculawaisttohipw($scope.howwaistw, $scope.howhipw);
        }
        
        $scope.ilumination(data.DeepSquat);
        $scope.actleg(data.ActiveStraightLegRaise);
        $scope.shomob(data.ShoulderMobility);

        if (data.ShoulderClearingTest) {
            $scope.goradioShoClearYes();
        }
        else {
            $scope.goradioShoClearNo();
        }

        if (data.SpinalFlexion) {
            $scope.goradioSpiYes();
        }
        else {
            $scope.goradioSpiNo();
        }

        if (data.SpinalExtension) {
            $scope.goradioSpiExtYes();
        }
        else {
            $scope.goradioSpiExtNo();
        }

        flagModified = true;

        if (!data.Gender) {
            $scope.gohowSidMen(data.SideBridgeMen + " s", data.SideBridgeMenLeft + " s");

            if ($scope.selectedAge.id == 0) {
                $scope.numnpmen1 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen1($scope.numnpmen1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numnpmen2 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen2($scope.numnpmen2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numnpmen3 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen3($scope.numnpmen3);
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.numnpmen4 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen4($scope.numnpmen4);
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.numnpmen5 = data.PushuptestMen + ' Push Ups ';
                $scope.gonumnpmen5($scope.numnpmen5);
            }

            if ($scope.selectedAge.id == 0) {
                $scope.numMBCMpwm1 = data.MBThrowMen + "\'";
                $scope.gonumMBCMpwm1($scope.numMBCMpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numMBCMpwm2 = data.MBThrowMen + "\'";
                $scope.gonumMBCMpwm2($scope.numMBCMpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numMBCMpwm3 = data.MBThrowMen + "\'";
                $scope.gonumMBCMpwm3($scope.numMBCMpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.numMBCMpwm4 = data.MBThrowMen + "\'";
                $scope.gonumMBCMpwm4($scope.numMBCMpwm4);
            }


            if ($scope.selectedAge.id == 0) {
                $scope.numMBCOOWpwm1 = data.CoopertestMen + " miles";
                $scope.gonumMBCOOWpwm1($scope.numMBCOOWpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numMBCOOWpwm2 = data.CoopertestMen + " miles";
                $scope.gonumMBCOOWpwm2($scope.numMBCOOWpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numMBCOOWpwm3 = data.CoopertestMen + " miles";
                $scope.gonumMBCOOWpwm3($scope.numMBCOOWpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.numMBCOOWpwm4 = data.CoopertestMen + " miles";
                $scope.gonumMBCOOWpwm4($scope.numMBCOOWpwm4);
            }
        }
        else {
            $scope.gohowSidWomen(data.SideBridgeWomen + " s", data.SideBridgeWomenLeft + " s");

            if (data.PushuptestModifiedWomen) {
                $scope.goradioWmodYes();

                if ($scope.selectedAge.id == 0) {
                    $scope.numpwm1 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm1($scope.numpwm1);
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.numpwm2 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm2($scope.numpwm2);
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.numpwm3 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm3($scope.numpwm3);
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.numpwm4 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm4($scope.numpwm4);
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.numpwm5 = data.PushuptestWomenModified + ' Push Ups ';
                    $scope.gonumpwm5($scope.numpwm5);
                }


            }
            else {
                $scope.goradioWmodNo();

                if ($scope.selectedAge.id == 0) {
                    $scope.numnpwm1 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm1($scope.numnpwm1);
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.numnpwm2 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm2($scope.numnpwm2);
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.numnpwm3 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm3($scope.numnpwm3);
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.numnpwm4 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm4($scope.numnpwm4);
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.numnpwm5 = data.PushuptestWomen + ' Push Ups ';
                    $scope.gonumnpwm5($scope.numnpwm5);
                }
            }

            if ($scope.selectedAge.id == 0) {
                $scope.numMBCWpwm1 = data.MBThrowWomen + "\'";
                $scope.gonumMBCWpwm1($scope.numMBCWpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numMBCWpwm2 = data.MBThrowWomen + "\'";
                $scope.gonumMBCWpwm2($scope.numMBCWpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numMBCWpwm3 = data.MBThrowWomen + "\'";
                $scope.gonumMBCWpwm3($scope.numMBCWpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.numMBCWpwm4 = data.MBThrowWomen + "\'";
                $scope.gonumMBCWpwm4($scope.numMBCWpwm4);
            }

            if ($scope.selectedAge.id == 0) {
                $scope.numMBCOOWOpwm1 = data.CoopertestWomen + " miles";
                $scope.gonumMBCOOWOpwm1($scope.numMBCOOWOpwm1);
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.numMBCOOWOpwm2 = data.CoopertestWomen + " miles";
                $scope.gonumMBCOOWOpwm2($scope.numMBCOOWOpwm2);
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.numMBCOOWOpwm3 = data.CoopertestWomen + " miles";
                $scope.gonumMBCOOWOpwm3($scope.numMBCOOWOpwm3);
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.numMBCOOWOpwm4 = data.CoopertestWomen + " miles";
                $scope.gonumMBCOOWOpwm4($scope.numMBCOOWOpwm4);
            }
        }

        $scope.fitness(data.RateFitness);
        $scope.lifetime(data.RankFitness);

        if (data.Particpe) {
            $scope.goradioOrgYes();
        }
        else {
            $scope.goradioOrgNo();
        }

        if (data.Planing) {
            $scope.goradioPlaningYes();
        }
        else {
            $scope.goradioPlaningNo();
        }

        if (data.Gender) {

            if ($rootScope.phoneDevice >= 0) {
                flagImgFamele = 0;
                $scope.changeFamele();
                $scope.selectedGender = $scope.Genders[1];
            }
            else {
                $scope.radioGender = false;
            }
        }
        else {
            if ($rootScope.phoneDevice >= 0) {
                flagImgMale = 0;
                $scope.changeMale();
            }
            else {
                $scope.radioGender = true;
            }
        }

        statusFields();
        $scope.ServerBMI = data.HowHeightpts;
        $scope.ServerCar = data.CardioVascularHealthpts;
        $scope.ServerChe = data.ChestPainpts;
        $scope.ServerFat = data.FatherDiagnosedpts;
        $scope.ServerMot = data.MotherDiagnosedpts
        $scope.ServerDia = data.Diabetespts;
        $scope.ServerMod = data.ModerateExercisepts;
        $scope.ServerVig = data.Vigorouspts;
        $scope.ServerSit = data.Sittingpts;
        $scope.ServerSmo = data.Smokepts;
        $scope.ServerSmokes = data.Secondhandsmokepts;
        $scope.ServerAlc = data.Alcoholpts;
        $scope.ServerOra = data.OralContraceptivepts;
        $scope.ServerAnt = data.Antibioticspts;

        $scope.ServerSys = data.Systolicpts;
        $scope.ServerDiastolic = data.Diastolicpts;
        $scope.ServerWaiMen = data.WaisttoHipMenpts;
        $scope.ServerWaiWomen = data.WaisttoHipWomenpts;
        $scope.ServerSidMen = data.SideBridgeMenpts;
        $scope.ServerSiddWomen = data.SideBridgeWomenpts;
        $scope.ServerDee = data.DeepSquatpts;
        $scope.ServerAct = data.ActiveStraightLegRaisepts;
        $scope.ServerMob = data.ShoulderMobilitypts;
        $scope.ServerdSho = data.ShoulderClearingTestpts;
        $scope.ServerdSpi = data.SpinalFlexionpts;
        $scope.ServerSpiExt = data.SpinalExtensionpts;

        $scope.ServerPusMen = data.PushuptestMenpts;
        $scope.ServerPusWomen = data.PushuptestWomenpts;
        $scope.ServerMPusWomen = data.PushuptestWomenModifiedpts;
        $scope.ServerChestMen = data.MBThrowMenpts;
        $scope.ServerChestWoMen = data.MBThrowWomenpts;
        $scope.ServerComen = data.CoopertestMenpts;
        $scope.ServerCowomen = data.CoopertestWomenpts;

        $scope.ServerTotal1 = data.total1;
        $scope.ServerTotal2 = data.total2;
        $scope.ServerTotal3 = data.grantotal;
        $scope.ServerTotal4 = data.conversiontotal;


        questionFactory.datelocal = data.datelocal;

        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dateTamp = new Date(data.datelocal);
        questionFactory.datelocal = dateTamp;

        var yyyy = dateTamp.getFullYear().toString();
        var mm = (dateTamp.getMonth()); // getMonth() is zero-based
        var dd = dateTamp.getDate().toString();

        $scope.datedone = monthNames[mm] + " " + dd + " of " + yyyy;

        $scope.puntos = $scope.ServerTotal4;
        if (data.avarage != undefined) {
            $scope.avarage = changeAbbrev(data.avarage);
        }
        else {
            $scope.avarage = changeAbbrev(0);
        }



        $scope.totalUsers = data.totalUsers;

        $scope.hideScoreQ = false;

        $scope.firstname = data.firstname;
        $scope.lastname = data.lastname;


        //$scope.disablegender3women = true;
    }

    var changeAbbrev = function (data) {
        data = data.toString();
        var value = parseInt(data.charAt(data.length - 1));
        if (value == 1) {
            data += "st";
        }
        else if (value == 2) {
            data += "nd";
        }
        else if (value == 3) {
            data += "rd";
        }
        else {
            data += "th";
        }
        return data;
    }

    ///
    /// how old
    ///

    $scope.gohowold = function (howold) {
        if (howold >= 0 && 29 >= howold) {
            $scope.selectedAge = $scope.Ages[0]
        }
        else if (howold >= 30 && 34 >= howold) {
            $scope.selectedAge = $scope.Ages[1]
        }
        else if (howold >= 35 && 39 >= howold) {
            $scope.selectedAge = $scope.Ages[2]
        }
        else if (howold >= 40 && 44 >= howold) {
            $scope.selectedAge = $scope.Ages[3]
        }
        else if (howold >= 45 && 49 >= howold) {
            $scope.selectedAge = $scope.Ages[4]
        }
        else if (howold >= 50 && 54 >= howold) {
            $scope.selectedAge = $scope.Ages[5]
        }
        else if (howold >= 55 && 59 >= howold) {
            $scope.selectedAge = $scope.Ages[6]
        }
        else if (howold >= 60 && 64 >= howold) {
            $scope.selectedAge = $scope.Ages[7]
        }
        else if (howold >= 65 && 69 >= howold) {
            $scope.selectedAge = $scope.Ages[8]
        }
        else if (howold >= 70 && 74 >= howold) {
            $scope.selectedAge = $scope.Ages[9]
        }
        else if (howold >= 75) {
            $scope.selectedAge = $scope.Ages[10]
        }

      
        goModified();
        //$scope.goTotal();
        if ($scope.hidereview) {
            $scope.hideNext = false;
        }
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    ///
    /// smoker
    ///

    $scope.goSmoCheckExposed = function (selectSmo) {

        if (selectSmo.id <= 1) {
            $scope.hideSmokes = false;
        }
        else {
            $scope.hideSmokes = true;
        }

        $scope.goTotal();


    }

    ///
    /// low
    ///

    $scope.gohowmod = function (howmod) {
        $scope.selectedMod = $scope.Mods[0]

        $scope.selectedMod.value = (1 - howmod) * 5;
        
        if ($scope.selectedMod.value < -20) {
            $scope.selectedMod.value = -20;
        }

        /*
        if (howmod <= 1) {
            $scope.selectedMod = $scope.Mods[0]
        }
        else if (howmod >= 2 && 3 >= howmod) {
            $scope.selectedMod = $scope.Mods[1]
        }
        else if (howmod >= 4 && 5 >= howmod) {
            $scope.selectedMod = $scope.Mods[2]
        }
        else if (howmod >= 5) {
            $scope.selectedMod = $scope.Mods[3]
        }
        */
        $scope.goTotal();


    }

    ///
    ///  high
    ///

    $scope.gohowvig = function (howvig) {

        $scope.selectedVig = $scope.Vigs[0]

        $scope.selectedVig.value = (howvig) * -5

        if ($scope.selectedVig.value < -20) {
            $scope.selectedVig.value = -20;
        }

        /*
        if (howvig == 0) {
            $scope.selectedVig = $scope.Vigs[0]
        }
        else if (howvig == 1) {
            $scope.selectedVig = $scope.Vigs[1]
        }
        else if (howvig >= 2 && 3 >= howvig) {
            $scope.selectedVig = $scope.Vigs[2]
        }
        else if (howvig >= 4) {
            $scope.selectedVig = $scope.Vigs[3]
        }
        */

        $scope.goTotal();

    }

    ///
    /// Blood Pressure Systolic
    ///

    $scope.gohowsys = function (howsys) {

        $scope.selectedSys = $scope.Syss[0]

        if (howsys > 130) {
            $scope.selectedSys.value = howsys - 130;

            if ($scope.selectedSys.value > 40) {
                $scope.selectedSys.value = 40;
            }
        }
        else {
            $scope.selectedSys.value = parseInt(0);
        }

        

        /*
        if (howsys >= 0 && 115 >= howsys) {
            $scope.selectedSys = $scope.Syss[0]
        }
        if (howsys == 116) {
            $scope.selectedSys = $scope.Syss[1]
        }
        if (howsys == 117) {
            $scope.selectedSys = $scope.Syss[2]
        }
        if (howsys == 118) {
            $scope.selectedSys = $scope.Syss[3]
        }
        if (howsys == 119) {
            $scope.selectedSys = $scope.Syss[4]
        }
        if (howsys == 120) {
            $scope.selectedSys = $scope.Syss[5]
        }
        if (howsys == 121) {
            $scope.selectedSys = $scope.Syss[6]
        }
        if (howsys == 122) {
            $scope.selectedSys = $scope.Syss[7]
        }
        if (howsys == 123) {
            $scope.selectedSys = $scope.Syss[8]
        }
        if (howsys == 124) {
            $scope.selectedSys = $scope.Syss[9]
        }
        if (howsys >= 125 && 139 >= howsys) {
            $scope.selectedSys = $scope.Syss[10]
        }
        if (howsys >= 140 && 159 >= howsys) {
            $scope.selectedSys = $scope.Syss[11]
        }
        else if (howsys >= 160) {
            $scope.selectedSys = $scope.Syss[12]
        }
        */

        $scope.goTotal();

        if ($scope.howdia > 0) {
            if ($scope.hidereview) {
                $scope.hideNext = false;
            }
            if (countSubmit < countQ) {
                countSubmit = countQ;
            }

        }
    }

    ///
    /// Blood Pressure Diastolic
    ///

    $scope.gohowdia = function (howdia) {
        $scope.selectedDiastolic = $scope.Dias[0]
        
        if (howdia > 80) {
            $scope.selectedDiastolic.value = howdia - 80;
        }
        else {
            $scope.selectedDiastolic.value = parseInt(0);
        }
        
        
        /*
        if (howdia >= 0 && 54 >= howdia) {
            $scope.selectedDiastolic = $scope.Dias[0]
        }
        if (howdia == 55) {
            $scope.selectedDiastolic = $scope.Dias[1]
        }
        if (howdia == 56) {
            $scope.selectedDiastolic = $scope.Dias[2]
        }
        if (howdia == 57) {
            $scope.selectedDiastolic = $scope.Dias[3]
        }
        if (howdia == 58) {
            $scope.selectedDiastolic = $scope.Dias[4]
        }
        if (howdia == 59) {
            $scope.selectedDiastolic = $scope.Dias[5]
        }
        if (howdia == 60) {
            $scope.selectedDiastolic = $scope.Dias[6]
        }
        if (howdia == 61) {
            $scope.selectedDiastolic = $scope.Dias[7]
        }
        if (howdia == 62) {
            $scope.selectedDiastolic = $scope.Dias[8]
        }
        if (howdia == 63) {
            $scope.selectedDiastolic = $scope.Dias[9]
        }
        if (howdia == 64) {
            $scope.selectedDiastolic = $scope.Dias[10]
        }
        if (howdia == 65) {
            $scope.selectedDiastolic = $scope.Dias[11]
        }
        if (howdia >= 65 && 79 >= howdia) {
            $scope.selectedDiastolic = $scope.Dias[12]
        }
        if (howdia >= 80 && 89 >= howdia) {
            $scope.selectedDiastolic = $scope.Dias[13]
        }
        if (howdia >= 90 && 99 >= howdia) {
            $scope.selectedDiastolic = $scope.Dias[14]
        }
        else if (howdia >= 100) {
            $scope.selectedDiastolic = $scope.Dias[15]
        }
        */

        $scope.goTotal();

        if ($scope.howsys > 0) {
            if ($scope.hidereview) {
                $scope.hideNext = false;
            }
            if (countSubmit < countQ) {
                countSubmit = countQ;
            }

        }

    }

    ///
    /// Side Bridge men
    ///

    $scope.gohowSidMen = function (howSidMen, howSidMenLeft) {

        var index = howSidMen.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            howSidMen = howSidMen.substring(0, index);
        }
        var index = howSidMenLeft.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            howSidMenLeft = howSidMenLeft.substring(0, index);
        }
        var value = Math.round((parseInt(howSidMen) + parseInt(howSidMenLeft)) / 2);

        $scope.selectedSidMen = $scope.SidMens[0]

        $scope.selectedSidMen.value = (56 - value);
        
        if ($scope.selectedSidMen.value < -40) {
            $scope.selectedSidMen.value = -40;
        }
        else if ($scope.selectedSidMen.value > 10) {
            $scope.selectedSidMen.value = 10;
        }
        

        /*
        if (value >= 0 && 54 >= value) {
            $scope.selectedSidMen = $scope.SidMens[0]
        }
        if (value >= 58 && 84 >= value) {
            $scope.selectedSidMen = $scope.SidMens[1]
        }
        if (value >= 85 && 95 >= value) {
            $scope.selectedSidMen = $scope.SidMens[2]
        }
        if (value >= 96 && 126 >= value) {
            $scope.selectedSidMen = $scope.SidMens[3]
        }
        else if (value >= 127) {
            $scope.selectedSidMen = $scope.SidMens[4]
        }
        */
        $scope.howSidMen = howSidMen + ' s';

        $scope.howSidMenLeft = howSidMenLeft + ' s';

        $scope.goTotal();
    }

    ///
    /// Side Bridge WOmen
    ///

    $scope.gohowSidWomen = function (howSidWomen, howSidWomenLeft) {

        var index = howSidWomen.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            howSidWomen = howSidWomen.substring(0, index);
        }
        var index = howSidWomenLeft.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            howSidWomenLeft = howSidWomenLeft.substring(0, index);
        }
        var value = Math.round((parseInt(howSidWomen) + parseInt(howSidWomenLeft)) / 2);

        $scope.selectedSidWomen = $scope.SidWomens[0]

        $scope.selectedSidWomen.value = (41 - value);

        if ($scope.selectedSidWomen.value < -40) {
            $scope.selectedSidWomen.value = -40;
        }
        else if ($scope.selectedSidWomen.value > 10) {
            $scope.selectedSidWomen.value = 10;
        }
 
        /*
        if (value >= 0 && 39 >= value) {
            $scope.selectedSidWomen = $scope.SidWomens[0]
        }
        if (value >= 40 && 69 >= value) {
            $scope.selectedSidWomen = $scope.SidWomens[1]
        }
        if (value >= 70 && 80 >= value) {
            $scope.selectedSidWomen = $scope.SidWomens[2];
        }
        if (value >= 81 && 110 >= value) {
            $scope.selectedSidWomen = $scope.SidWomens[3]
        }
        else if (value >= 111) {
            $scope.selectedSidWomen = $scope.SidWomens[4]
        }
        */

        $scope.howSidWomen = howSidWomen + ' s';

        $scope.howSidWomenLeft = howSidWomenLeft + ' s';


        $scope.goTotal();
    }

    ///
    /// Waist to hip men
    ///

    $scope.gohowwaist = function (howwaist) {
        calculawaisttohip(howwaist, $scope.howhip)
    }

    $scope.gohowhip = function (howhip) {
        calculawaisttohip($scope.howwaist, howhip)
    }

    var calculawaisttohip = function (howwaist, howhip) {
        var result = 0.00;

        var howwaistv = howwaist.replace(/'/g, '');
        var howhipv = howhip.replace(/'/g, '');
     

        if (howwaistv > 0.00 && howhipv > 0.00) {
            result = (howwaistv / howhipv).toFixed(2);
        }

        $scope.selectedWaiMen = $scope.WaiMens[0];

        $scope.selectedWaiMen.value = Math.round((result - 1) * 500 + 20);

        if ($scope.selectedWaiMen.value > 60) {
            $scope.selectedWaiMen.value = 60
        }
        else if ($scope.selectedWaiMen.value < -35) {
            $scope.selectedWaiMen.value = -35
        }

        $scope.howwaist = howwaistv + '\'\'';
        $scope.howhip = howhipv + '\'\'';
    
        $scope.goTotal();
        if (howwaistv > 0 && howhipv > 0) {
            if ($scope.hidereview) {
                $scope.hideNext = false;
            }
            if (countSubmit < countQ) {
                countSubmit = countQ;
            }

        }

        calcBMI();
    }




    ///
    /// Waist to hip WOmen
    ///

    $scope.gohowwaistw = function (howwaistw) {
        calculawaisttohipw(howwaistw, $scope.howhipw)
    }

    $scope.gohowhipw = function (howhipw) {
        calculawaisttohipw($scope.howwaistw, howhipw)
    }

    var calculawaisttohipw = function (howwaistw, howhipw) {
        var result = 0.00;
        var howwaistwv = howwaistw.replace(/'/g, '');
        var howhipwv = howhipw.replace(/'/g, '');


        if (howwaistwv > 0.00 && howhipwv > 0.00) {
            result = (howwaistwv / howhipwv).toFixed(2);
        }

        $scope.selectedWaiWomen = $scope.WaiWomens[0];

        $scope.selectedWaiWomen.value = Math.round((result - 0.85) * 500 + 20);

        if ($scope.selectedWaiWomen.value > 60) {
            $scope.selectedWaiWomen.value = 60
        }
        else if ($scope.selectedWaiWomen.value < -35) {
            $scope.selectedWaiWomen.value = -35
        }
        
        $scope.howwaistw = howwaistwv + '\'\'';
        $scope.howhipw = howhipwv + '\'\'';


        $scope.goTotal();

        if (howwaistwv > 0 && howhipwv > 0) {
            $scope.hideNext = false;
            if (countSubmit < countQ) {
                countSubmit = countQ;
            }

        }

        calcBMI();
    }

    ///
    /// Ocultar Phone
    ///
    var ocultarPhone = function () {
        $scope.hideEmail = true;
        $scope.hidepoints = true;
        $scope.hideGender = true;
        $scope.hideOld = true;
        $scope.hideHeight = true;
        $scope.hideWeight = true;
        $scope.hideCar = true;
        $scope.hideChe = true;
        $scope.hideFat = true;
        $scope.hideMot = true;
        $scope.hideDia = true;
        $scope.hideMod = true;
        $scope.hideVig = true;
        $scope.hideSit = true;
        $scope.hideSmo = true;
        $scope.hideSmokes = true;
        $scope.hideAlc = true;
        $scope.hideOra = true;
        $scope.hideAnt = true;
        $scope.hideSys = true;
        $scope.hideDialostic = true;

        $scope.disablegendermen = true;
        $scope.disablegendermenWai = true;
        $scope.disablegendermenWai2 = true;
        $scope.disablegendermenSid = true;

        $scope.disablegenderwomen = true;
        $scope.disablegenderwomenWai = true;
        $scope.disablegenderwomenWai2 = true;
        $scope.disablegenderwomenSid = true;
        $scope.disablegenderwomenMod = true;

        $scope.hideDee = true;
        $scope.hideAct = true;
        $scope.hideMob = true;
        $scope.hideSho = true;
        $scope.hideSpi = true;
        $scope.hideSpiExt = true;

        $scope.disablegendermen1 = true;
        $scope.disablegendermen2 = true;
        $scope.disablegendermen3 = true;
        $scope.disablegendermen4 = true;
        $scope.disablegendermen5 = true;

        $scope.disablegender1women = true;
        $scope.disablegender2women = true;
        $scope.disablegender3women = true;
        $scope.disablegender4women = true;
        $scope.disablegender5women = true;

        $scope.disablegendermod1women = true;
        $scope.disablegendermod2women = true;
        $scope.disablegendermod3women = true;
        $scope.disablegendermod4women = true;
        $scope.disablegendermod5women = true;

        $scope.disableMBCM1 = true;
        $scope.disableMBCM2 = true;
        $scope.disableMBCM3 = true;
        $scope.disableMBCM4 = true;

        $scope.disableMBCW1 = true;
        $scope.disableMBCW2 = true;
        $scope.disableMBCW3 = true;
        $scope.disableMBCW4 = true;

        $scope.disablegendercoomen1 = true;
        $scope.disablegendercoomen2 = true;
        $scope.disablegendercoomen3 = true;
        $scope.disablegendercoomen4 = true;

        $scope.disablegendercoowomen1 = true;
        $scope.disablegendercoowomen2 = true;
        $scope.disablegendercoowomen3 = true;
        $scope.disablegendercoowomen4 = true;

        $scope.hideRated = true;
        $scope.hideLife = true;
        $scope.hideOrg = true;
        $scope.hidePlaning = true;

        if (countQ == 1) {
            countQ = 2;

            $scope.hideGender = false;
            $scope.hideNext = false;
          
            $scope.hideBack = true;
        }
        else {
            $scope.hideGender = true;
            $scope.hideNext = false;
            $scope.hideBack = false;
        }
        $scope.hideSave = true;



        putCounter();
    }

    var putCounter = function () {
        $scope.totalQuestions = (countQ - 1) + '/' + totalQ;
    }

    $scope.next = function () {
        if (countQ == 2) {
            $scope.hideBack = false;
        }
        if (countQ <= 20) {
            HideShowAll(true, false);
        }
        else {
            if ($scope.selectedGender.id == 0) {
                if (countQ <= 31) {
                    HideShowMen(true, false);
                }
                else {
                    showEmail();
                }
            }
            else {
                if (countQ <= 32) {
                    HideShowWoMen(true, false);
                }
                else {
                    showEmail();
                }

            }

        }
        countQ++;
        putCounter();
        saveStateForm();
        if (countQ > countSubmit) {
            if ($scope.selectedGender.id == 0) {
                if (countQ != 11 && countQ != 29 && countQ != 30 && countQ != 31 && countQ != 32) {
                    $scope.hideNext = true;
                }
            }

        }


    }


    $scope.backQ = function () {
        countQ--;
        putCounter();
        saveStateForm();
       
     
        if (countQ == 2) {
            $scope.hideBack = true;
        }
        if (countQ <= 20) {
            HideShowAll(false, true);
        }
        else {
            if ($scope.selectedGender.id == 0) {
                if (countQ <= 31) {
                    HideShowMen(false, true);
                }
                else {
                    hideEmail();
                }
            }
            else {
                if (countQ <= 32) {
                    HideShowWoMen(false, true);
                }
                else {
                    hideEmail();
                }

            }
        }

        if (countQ <= countSubmit + 1) {
            $scope.hideNext = false;
        }


    }

    var showEmail = function () {
        $scope.hideHeader = true;
        if ($scope.radioGender == true) {
            coomen(true);
        }
        else {
            coowomen(true);
        }
        $scope.hideEmail = false;
        $scope.hideSave = false;
        $scope.hideNext = true;
    }

    var hideEmail = function () {
        $scope.hideHeader = false;
        if ($scope.radioGender == true) {
            coomen(false);
        }
        else {
            coowomen(false);
        }
        $scope.hideEmail = true;
        $scope.hideSave = true;
        $scope.hideBack = false;
        $scope.hideNext = false;
    }

    var HideShowAll = function (opt1, opt2) {
        switch (countQ) {
            case 2:
                $scope.hideGender = opt1;
                $scope.hideOld = opt2;
                break;
            case 3:
                $scope.hideOld = opt1;
                $scope.hideHeight = opt2;
                break;
            case 4:
                $scope.hideHeight = opt1;
                $scope.hideWeight = opt2;
                break;
            case 5:
                $scope.hideWeight = opt1;
                $scope.hideCar = opt2;
                break;
            case 6:
                $scope.hideCar = opt1;
                $scope.hideChe = opt2;
                break;
            case 7:
                $scope.hideChe = opt1;
                $scope.hideFat = opt2;
                break;
            case 8:
                $scope.hideFat = opt1;
                $scope.hideMot = opt2;
                break;
            case 9:
                $scope.hideMot = opt1;
                $scope.hideDia = opt2;
                break;
            case 10:
                $scope.hideDia = opt1;
                $scope.hideMod = opt2;
                $scope.hideNext = false;
                break;
            case 11:
                $scope.hideMod = opt1;
                $scope.hideSit = opt2;
                break;
            case 12:
                $scope.hideSit = opt1;
                $scope.hideSmo = opt2;
                break;
        }

        if ((countQ == 13 || countQ == 14) && $scope.selectSmo.id > 1) {
            $scope.goradioSmoNo();
            countQ = 14;
            switch (countQ) {
                case 14:
                    $scope.hideSmo = opt1;
                    $scope.hideAlc = opt2;
                    break;
            }
            if (opt2) {
                countQ = 13;
            }
        }
        else {
            switch (countQ) {
                case 13:
                    $scope.hideSmo = opt1;
                    $scope.hideSmokes = opt2;
                    break;
                case 14:
                    $scope.hideSmokes = opt1;
                    $scope.hideAlc = opt2;
                    break;
            }

        }

        if (countQ >= 15) {
            switch (countQ) {
                case 15:
                    $scope.hideAlc = opt1;
                    $scope.hideAnt = opt2;
                    break;
                case 16:
                    $scope.hideAnt = opt1;
                    $scope.hideRated = opt2;
                    break;
                case 17:
                    $scope.hideRated = opt1;
                    $scope.hideLife = opt2;
                    break;
                case 18:
                    $scope.hideLife = opt1;
                    $scope.hideOrg = opt2;
                    break;
                case 19:
                    $scope.hideOrg = opt1;
                    $scope.hidePlaning = opt2;
                    break;
                case 20:
                    $scope.hidePlaning = opt1;
                    $scope.hideSys = opt2;
                    break;
            }
        }

    }

    var HideShowMen = function (opt1, opt2) {
        switch (countQ) {
            case 21:
                $scope.hideSys = opt1;
                $scope.disablegendermenWai = opt2;
                break;
            case 22:
                $scope.disablegendermenWai = opt1;
                $scope.hideDee = opt2;
                break;
            case 23:
                $scope.hideDee = opt1;
                $scope.hideAct = opt2;
                break;
            case 24:
                $scope.hideAct = opt1;
                $scope.hideMob = opt2;
                break;
            case 25:
                $scope.hideMob = opt1;
                $scope.hideSho = opt2;
                break;
            case 26:
                $scope.hideSho = opt1;
                $scope.hideSpi = opt2;
                break;
            case 27:
                $scope.hideSpi = opt1;
                $scope.hideSpiExt = opt2;
                break;
            case 28:
                $scope.hideSpiExt = opt1;
                $scope.disablegendermenSid = opt2;
                $scope.hideNext = false;
                break;
            case 29:
                $scope.disablegendermenSid = opt1;
                MBCM(opt2);
                $scope.hideNext = false;
                break;
            case 30:
                MBCM(opt1);
                genderMan(opt2);
                $scope.hideNext = false;
                break;
            case 31:
                genderMan(opt1);
                coomen(opt2);
                $scope.hideNext = false;
                break;
        }
    }

    var HideShowWoMen = function (opt1, opt2) {
        switch (countQ) {
            case 21:
                $scope.hideSys = opt1;
                $scope.disablegenderwomenWai = opt2;
                break;
            case 22:
                $scope.disablegenderwomenWai = opt1;
                $scope.hideDee = opt2;
                break;
            case 23:
                $scope.hideDee = opt1;
                $scope.hideAct = opt2;
                break;
            case 24:
                $scope.hideAct = opt1;
                $scope.hideMob = opt2;
                break;
            case 25:
                $scope.hideMob = opt1;
                $scope.hideSho = opt2;
                break;
            case 26:
                $scope.hideSho = opt1;
                $scope.hideSpi = opt2;
                break;
            case 27:
                $scope.hideSpi = opt1;
                $scope.hideSpiExt = opt2;
                break;
            case 28:
                $scope.hideSpiExt = opt1;
                $scope.disablegenderwomenSid = opt2;
                $scope.hideNext = false;
                break;
            case 29:
                $scope.disablegenderwomenSid = opt1;
                MBCW(opt2);
                break;
                $scope.hideNext = false;
            case 30:
                MBCW(opt1);
                $scope.disablegenderwomenMod = opt2;
                break;
            case 31:
                $scope.disablegenderwomenMod = opt1;
                genderWoMan(opt2);
                $scope.hideNext = false;
                break;
            case 32:
                genderWoMan(opt1);
                coowomen(opt2);
                $scope.hideNext = false;
                break;
        }

         
    }

    ///
    /// MBCOO men
    ///

    $scope.gonumMBCOOWpwm1 = function (numMBCOOWpwm1) {
        var index = numMBCOOWpwm1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWpwm1 = numMBCOOWpwm1.substring(0, index);
        }

        numMBCOOWpwm1 = parseFloat(numMBCOOWpwm1);
        

       
        $scope.selectedCooMen1 = $scope.CooMens1[1]

        $scope.selectedCooMen1.value = (
                                               -96.62298 * Math.pow(numMBCOOWpwm1, 3) +
                                              342.04 * Math.pow(numMBCOOWpwm1, 2) -
                                              478.158 * numMBCOOWpwm1 + 236.533
                                             ) | 0;

       
        
        /*
       var mts = numMBCOOWpwm1 * mile;
       
       if (mts >= 800 && 959 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[1]
        }
        else if (mts >= 960 && 1059 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[2]
        }
        else if (mts >= 1060 && 1219 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[3]
        }
        else if (mts >= 1220 && 1379 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[4]
        }
        else if (mts >= 1380 && 1599 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[5]
        }
        else if (mts >= 1600 && 1759 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[6]
        }
        else if (mts >= 1760 && 1919 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[7]
        }
        else if (mts >= 1920 && 2079 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[8]
        }
        else if (mts >= 2080 && 2239 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[9]
        }
        else if (mts >= 2240 && 2399 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[10]
        }
        else if (mts >= 2400 && 2559 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[11]
        }
        else if (mts >= 2560 && 2719 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[12]
        }
        else if (mts >= 2720 && 2879 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[13]
        }
        else if (mts >= 2880 && 3039 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[14]
        }
        else if (mts >= 3040 && 3199 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[15]
        }
        else if (mts >= 3200 && 3359 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[16]
        }
        else if (mts >= 3360 && 3519 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[17]
        }
        else if (mts >= 3520 && 3679 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[18]
        }
        else if (mts >= 3680 && 3839 >= mts) {
            $scope.selectedCooMen1 = $scope.CooMens1[19]
        }
        else if (mts >= 3840) {
            $scope.selectedCooMen1 = $scope.CooMens1[20]
        }
        */

        $scope.numMBCOOWpwm1 = numMBCOOWpwm1 + " miles";

        $scope.goTotal();
    }

    $scope.gonumMBCOOWpwm2 = function (numMBCOOWpwm2) {
        var index = numMBCOOWpwm2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWpwm2 = numMBCOOWpwm2.substring(0, index);
        }

        numMBCOOWpwm2 = parseFloat(numMBCOOWpwm2);



        $scope.selectedCooMen2 = $scope.CooMens2[1]

        $scope.selectedCooMen2.value = (
                                               -99.8281 * Math.pow(numMBCOOWpwm2, 3) +
                                              336.2764 * Math.pow(numMBCOOWpwm2, 2) -
                                              452.967 * numMBCOOWpwm2 + 216.2947
                                             ) | 0;

    


/*
        var mts = numMBCOOWpwm2 * mile;

        if (mts >= 700 && 859 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[1]
        }
        else if (mts >= 860 && 1019 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[2]
        }
        else if (mts >= 1020 && 1179 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[3]
        }
        else if (mts >= 1180 && 1339 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[4]
        }
        else if (mts >= 1340 && 1499 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[5]
        }
        else if (mts >= 1500 && 1659 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[6]
        }
        else if (mts >= 1660 && 1819 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[7]
        }
        else if (mts >= 1820 && 1979 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[8]
        }
        else if (mts >= 1980 && 2139 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[9]
        }
        else if (mts >= 2140 && 2299 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[10]
        }
        else if (mts >= 2300 && 2459 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[11]
        }
        else if (mts >= 2460 && 2619 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[12]
        }
        else if (mts >= 2620 && 2779 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[13]
        }
        else if (mts >= 2780 && 2939 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[14]
        }
        else if (mts >= 2940 && 3099 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[15]
        }
        else if (mts >= 3100 && 3259 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[16]
        }
        else if (mts >= 3260 && 3419 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[17]
        }
        else if (mts >= 3420 && 3579 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[18]
        }
        else if (mts >= 3580 && 3739 >= mts) {
            $scope.selectedCooMen2 = $scope.CooMens2[19]
        }
        else if (mts >= 3740) {
            $scope.selectedCooMen2 = $scope.CooMens2[20]
        }
        */
        $scope.numMBCOOWpwm2 = numMBCOOWpwm2 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWpwm3 = function (numMBCOOWpwm3) {
        var index = numMBCOOWpwm3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWpwm3 = numMBCOOWpwm3.substring(0, index);
        }

        numMBCOOWpwm3 = parseFloat(numMBCOOWpwm3);

        $scope.selectedCooMen3 = $scope.CooMens3[1]

        $scope.selectedCooMen3.value = (
                                               -96.0889 * Math.pow(numMBCOOWpwm3, 3) +
                                              303.2461 * Math.pow(numMBCOOWpwm3, 2) -
                                              396.369 * numMBCOOWpwm3 + 184.5958
                                             ) | 0;

       

        /*
        var mts = numMBCOOWpwm3 * mile;

        if (mts >= 600 && 759 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[1]
        }
        else if (mts >= 760 && 919 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[2]
        }
        else if (mts >= 920 && 1079 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[3]
        }
        else if (mts >= 1080 && 2139 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[4]
        }
        else if (mts >= 1240 && 1399 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[5]
        }
        else if (mts >= 1400 && 1559 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[6]
        }
        else if (mts >= 1560 && 1719 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[7]
        }
        else if (mts >= 1720 && 1879 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[8]
        }
        else if (mts >= 1880 && 2039 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[9]
        }
        else if (mts >= 2040 && 2199 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[10]
        }
        else if (mts >= 2200 && 2359 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[11]
        }
        else if (mts >= 2360 && 2519 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[12]
        }
        else if (mts >= 2520 && 2679 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[13]
        }
        else if (mts >= 2680 && 2839 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[14]
        }
        else if (mts >= 2840 && 2999 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[15]
        }
        else if (mts >= 3000 && 3159 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[16]
        }
        else if (mts >= 3160 && 3319 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[17]
        }
        else if (mts >= 3320 && 3479 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[18]
        }
        else if (mts >= 3480 && 3639 >= mts) {
            $scope.selectedCooMen3 = $scope.CooMens3[19]
        }
        else if (mts >= 3640) {
            $scope.selectedCooMen3 = $scope.CooMens3[20]
        }
        */
        $scope.numMBCOOWpwm3 = numMBCOOWpwm3 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWpwm4 = function (numMBCOOWpwm4) {
        var index = numMBCOOWpwm4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWpwm4 = numMBCOOWpwm4.substring(0, index);
        }

        numMBCOOWpwm4 = parseFloat(numMBCOOWpwm4);


        $scope.selectedCooMen4 = $scope.CooMens4[1]

        $scope.selectedCooMen4.value = (
                                               -95.7836 * Math.pow(numMBCOOWpwm4, 3) +
                                              285.5609 * Math.pow(numMBCOOWpwm4, 2) -
                                              361.86 * numMBCOOWpwm4 + 162.4636
                                             ) | 0;
      
       
/*

        var mts = numMBCOOWpwm4 * mile;

        if (mts >= 500 && 659 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[1]
        }
        else if (mts >= 660 && 819 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[2]
        }
        else if (mts >= 820 && 979 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[3]
        }
        else if (mts >= 980 && 1139 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[4]
        }
        else if (mts >= 1140 && 1299 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[5]
        }
        else if (mts >= 1300 && 1459 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[6]
        }
        else if (mts >= 1460 && 1619 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[7]
        }
        else if (mts >= 1620 && 1779 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[8]
        }
        else if (mts >= 1780 && 1939 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[9]
        }
        else if (mts >= 1940 && 2099 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[10]
        }
        else if (mts >= 2100 && 2259 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[11]
        }
        else if (mts >= 2260 && 2419 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[12]
        }
        else if (mts >= 2420 && 2579 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[13]
        }
        else if (mts >= 2580 && 2739 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[14]
        }
        else if (mts >= 2740 && 2899 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[15]
        }
        else if (mts >= 2900 && 3059 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[16]
        }
        else if (mts >= 2060 && 3219 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[17]
        }
        else if (mts >= 3220 && 3379 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[18]
        }
        else if (mts >= 3380 && 3539 >= mts) {
            $scope.selectedCooMen4 = $scope.CooMens4[19]
        }
        else if (mts >= 3540) {
            $scope.selectedCooMen4 = $scope.CooMens4[20]
        }
        */

        $scope.numMBCOOWpwm4 = numMBCOOWpwm4 + " miles";


        $scope.goTotal();
    }

    ///
    /// MBCOO women
    ///

    $scope.gonumMBCOOWOpwm1 = function (numMBCOOWOpwm1) {
        var index = numMBCOOWOpwm1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWOpwm1 = numMBCOOWOpwm1.substring(0, index);
        }

        numMBCOOWOpwm1 = parseFloat(numMBCOOWOpwm1);


        $scope.selectedCW1 = $scope.CooWomens1[1]

        $scope.selectedCW1.value = (
                                               -99.82807 * Math.pow(numMBCOOWOpwm1, 3) +
                                              336.27641 * Math.pow(numMBCOOWOpwm1, 2) -
                                              452.9674  * numMBCOOWOpwm1 + 216.2947
                                             ) | 0;


        /*
        var mts = numMBCOOWOpwm1 * mile;
        if (mts >= 700 && 859 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[1]
        }
        else if (mts >= 860 && 1019 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[2]
        }
        else if (mts >= 1020 && 1179 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[3]
        }
        else if (mts >= 1180 && 1339 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[4]
        }
        else if (mts >= 1340 && 1499 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[5]
        }
        else if (mts >= 1500 && 1659 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[6]
        }
        else if (mts >= 1660 && 1819 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[7]
        }
        else if (mts >= 1820 && 1979 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[8]
        }
        else if (mts >= 1980 && 2139 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[9]
        }
        else if (mts >= 2140 && 2299 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[10]
        }
        else if (mts >= 2300 && 2459 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[11]
        }
        else if (mts >= 2460 && 2619 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[12]
        }
        else if (mts >= 2620 && 2779 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[13]
        }
        else if (mts >= 2780 && 2939 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[14]
        }
        else if (mts >= 2940 && 3099 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[15]
        }
        else if (mts >= 3100 && 3259 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[16]
        }
        else if (mts >= 3260 && 3419 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[17]
        }
        else if (mts >= 3420 && 3579 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[18]
        }
        else if (mts >= 3580 && 3739 >= mts) {
            $scope.selectedCW1 = $scope.CooWomens1[19]
        }
        else if (mts >= 3740) {
            $scope.selectedCW1 = $scope.CooWomens1[20]
        }
        */
        $scope.numMBCOOWOpwm1 = numMBCOOWOpwm1 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWOpwm2 = function (numMBCOOWOpwm2) {
        var index = numMBCOOWOpwm2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWOpwm2 = numMBCOOWOpwm2.substring(0, index);
        }

        numMBCOOWOpwm2 = parseFloat(numMBCOOWOpwm2);

        $scope.selectedCW2 = $scope.CooWomens2[1]

        $scope.selectedCW2.value = (
                                               -96.0889 * Math.pow(numMBCOOWOpwm2, 3) +
                                              303.2461 * Math.pow(numMBCOOWOpwm2, 2) -
                                              396.369 * numMBCOOWOpwm2 + 184.5958
                                             ) | 0;

      
/*


        var mts = numMBCOOWOpwm2 * mile;

        if (mts >= 600 && 759 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[1]
        }
        else if (mts >= 760 && 919 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[2]
        }
        else if (mts >= 920 && 1079 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[3]
        }
        else if (mts >= 1080 && 1239 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[4]
        }
        else if (mts >= 1240 && 1399 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[5]
        }
        else if (mts >= 1400 && 1559 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[6]
        }
        else if (mts >= 1560 && 1719 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[7]
        }
        else if (mts >= 1720 && 1879 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[8]
        }
        else if (mts >= 1880 && 2039 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[9]
        }
        else if (mts >= 2040 && 2199 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[10]
        }
        else if (mts >= 2200 && 2359 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[11]
        }
        else if (mts >= 2360 && 2519 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[12]
        }
        else if (mts >= 2520 && 2679 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[13]
        }
        else if (mts >= 2680 && 2839 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[14]
        }
        else if (mts >= 2840 && 2999 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[15]
        }
        else if (mts >= 3000 && 3159 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[16]
        }
        else if (mts >= 3160 && 3319 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[17]
        }
        else if (mts >= 3320 && 3479 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[18]
        }
        else if (mts >= 3480 && 3639 >= mts) {
            $scope.selectedCW2 = $scope.CooWomens2[19]
        }
        else if (mts >= 3640) {
            $scope.selectedCW2 = $scope.CooWomens2[20]
        }
        */
        $scope.numMBCOOWOpwm2 = numMBCOOWOpwm2 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWOpwm3 = function (numMBCOOWOpwm3) {
        var index = numMBCOOWOpwm3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWOpwm3 = numMBCOOWOpwm3.substring(0, index);
        }

        numMBCOOWOpwm3 = parseFloat(numMBCOOWOpwm3);

        $scope.selectedCW3 = $scope.CooWomens3[1]

        $scope.selectedCW3.value = (
                                             -102.268 * Math.pow(numMBCOOWOpwm3, 3) +
                                            292.9526 * Math.pow(numMBCOOWOpwm3, 2) -
                                            354.825 * numMBCOOWOpwm3 + 149.2205
                                           ) | 0;

        
        /*

        var mts = numMBCOOWOpwm3 * mile;

        if (mts >= 400 && 559 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[1]
        }
        else if (mts >= 560 && 719 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[2]
        }
        else if (mts >= 720 && 879 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[3]
        }
        else if (mts >= 880 && 1039 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[4]
        }
        else if (mts >= 1040 && 1199 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[5]
        }
        else if (mts >= 1200 && 1359 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[6]
        }
        else if (mts >= 1360 && 1519 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[7]
        }
        else if (mts >= 1520 && 1679 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[8]
        }
        else if (mts >= 1680 && 1839 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[9]
        }
        else if (mts >= 1840 && 1999 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[10]
        }
        else if (mts >= 2000 && 2159 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[11]
        }
        else if (mts >= 2160 && 2319 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[12]
        }
        else if (mts >= 2320 && 2479 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[13]
        }
        else if (mts >= 2480 && 2639 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[14]
        }
        else if (mts >= 2640 && 2879 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[15]
        }
        else if (mts >= 2800 && 2959 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[16]
        }
        else if (mts >= 2960 && 3119 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[17]
        }
        else if (mts >= 3120 && 3279 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[18]
        }
        else if (mts >= 3280 && 3439 >= mts) {
            $scope.selectedCW3 = $scope.CooWomens3[19]
        }
        else if (mts >= 3440) {
            $scope.selectedCW3 = $scope.CooWomens3[20]
        }
        */

        $scope.numMBCOOWOpwm3 = numMBCOOWOpwm3 + " miles";


        $scope.goTotal();
    }

    $scope.gonumMBCOOWOpwm4 = function (numMBCOOWOpwm4) {
        var index = numMBCOOWOpwm4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numMBCOOWOpwm4 = numMBCOOWOpwm4.substring(0, index);
        }

        numMBCOOWOpwm4 = parseFloat(numMBCOOWOpwm4);


        $scope.selectedCW4 = $scope.CooWomens4[1]

        $scope.selectedCW4.value = (
                                             -98.9177 * Math.pow(numMBCOOWOpwm4, 3) +
                                            255.9385 * Math.pow(numMBCOOWOpwm4, 2) -
                                            298.465 * numMBCOOWOpwm4 + 121.8606
                                           ) | 0;

 
      
/*

        var mts = numMBCOOWOpwm4 * mile;

        if (mts >= 300 && 459 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[1]
        }
        else if (mts >= 460 && 619 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[2]
        }
        else if (mts >= 620 && 779 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[3]
        }
        else if (mts >= 780 && 939 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[4]
        }
        else if (mts >= 940 && 1099 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[5]
        }
        else if (mts >= 1100 && 1259 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[6]
        }
        else if (mts >= 1260 && 1419 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[7]
        }
        else if (mts >= 1420 && 1579 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[8]
        }
        else if (mts >= 1580 && 1739 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[9]
        }
        else if (mts >= 1740 && 1899 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[10]
        }
        else if (mts >= 1900 && 2059 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[11]
        }
        else if (mts >= 2060 && 2219 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[12]
        }
        else if (mts >= 2220 && 2359 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[13]
        }
        else if (mts >= 2360 && 2519 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[14]
        }
        else if (mts >= 2520 && 2679 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[15]
        }
        else if (mts >= 2680 && 2839 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[16]
        }
        else if (mts >= 2840 && 2999 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[17]
        }
        else if (mts >= 3000 && 3159 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[18]
        }
        else if (mts >= 3160 && 3319 >= mts) {
            $scope.selectedCW4 = $scope.CooWomens4[19]
        }
        else if (mts >= 3320) {
            $scope.selectedCW4 = $scope.CooWomens4[20]
        }
        */
        $scope.numMBCOOWOpwm4 = numMBCOOWOpwm4 + " miles";


        $scope.goTotal();
    }


    ///
    /// MBC men
    ///

    $scope.gonumMBCMpwm1 = function (numMBCMpwm1) {
                var index = numMBCMpwm1.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCMpwm1 = numMBCMpwm1.substring(0, index);
        }

        numMBCMpwm1 = parseFloat(numMBCMpwm1);

       
        $scope.selectedMBMen1 = $scope.PushMBCMgpo1[1]

        $scope.selectedMBMen1.value = (
                                                  -6.365317495 * Math.pow(10, -3) * Math.pow(numMBCMpwm1, 3) +
                                                  3.868797912 * Math.pow(10, -1) * Math.pow(numMBCMpwm1, 2) -
                                                  11.54483308 * numMBCMpwm1 + 116.5852821
                                                 ) | 0;

       

        /*
        if (numMBCMpwm1 >= 0 && 11 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[1]
        }
        else if (numMBCMpwm1 >= 12 && 15 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[2]
        }
        else if (numMBCMpwm1 >= 16 && 18 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[3]
        }
        else if (numMBCMpwm1 >= 19 && 22 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[4]
        }
        else if (numMBCMpwm1 >= 23 && 25 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[5]
        }
        else if (numMBCMpwm1 >= 26 && 28 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[6]
        }
        else if (numMBCMpwm1 >= 29 && 31 >= numMBCMpwm1) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[7]
        }
        else if (numMBCMpwm1 >= 32) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[8]
        }
        */

        $scope.numMBCMpwm1 = numMBCMpwm1 + "\'";

        $scope.goTotal();
    }

    $scope.gonumMBCMpwm2 = function (numMBCMpwm2) {
        var index = numMBCMpwm2.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCMpwm2 = numMBCMpwm2.substring(0, index);
        }

        numMBCMpwm2 = parseFloat(numMBCMpwm2);

        $scope.selectedMBMen2 = $scope.PushMBCMgpo2[1]

        $scope.selectedMBMen2.value = (
                                                   -1.130738264 * Math.pow(10, -2) * Math.pow(numMBCMpwm2, 3) +
                                                  6.003098979 * Math.pow(10, -1) * Math.pow(numMBCMpwm2, 2) -
                                                  14.68385909 * numMBCMpwm2 + 127.3950837
                                                 ) | 0;

       
        /*
        if (numMBCMpwm2 >= 0 && 10 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[1]
        }
        else if (numMBCMpwm2 >= 11 && 14 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[2]
        }
        else if (numMBCMpwm2 >= 15 && 17 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[3]
        }
        else if (numMBCMpwm2 >= 18 && 20 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[4]
        }
        else if (numMBCMpwm2 >= 21 && 23 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[5]
        }
        else if (numMBCMpwm2 >= 24 && 25 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[6]
        }
        else if (numMBCMpwm2 >= 26 && 28 >= numMBCMpwm2) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[7]
        }
        else if (numMBCMpwm2 >= 29) {
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[8]
        }
        */

        $scope.numMBCMpwm2 = numMBCMpwm2 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCMpwm3 = function (numMBCMpwm3) {
        var index = numMBCMpwm3.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCMpwm3 = numMBCMpwm3.substring(0, index);
        }

        numMBCMpwm3 = parseFloat(numMBCMpwm3);

        $scope.selectedMBMen3 = $scope.PushMBCMgpo3[1]

        $scope.selectedMBMen3.value = (
                                                   -1.887821423 * Math.pow(10, -2) * Math.pow(numMBCMpwm3, 3) +
                                                  1.045900097 * Math.pow(numMBCMpwm3, 2) -
                                                  23.88870795 * numMBCMpwm3 + 176.7076887
                                                 ) | 0;

      

        /*

        if (numMBCMpwm3 >= 0 && 9 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[1]
        }
        else if (numMBCMpwm3 >= 10 && 12 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[2]
        }
        else if (numMBCMpwm3 >= 13 && 14 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[3]
        }
        else if (numMBCMpwm3 >= 15 && 16 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[4]
        }
        else if (numMBCMpwm3 >= 17 && 19 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[5]
        }
        else if (numMBCMpwm3 >= 20 && 22 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[6]
        }
        else if (numMBCMpwm3 >= 23 && 25 >= numMBCMpwm3) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[7]
        }
        else if (numMBCMpwm3 >= 26) {
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[8]
        }
        */

        $scope.numMBCMpwm3 = numMBCMpwm3 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCMpwm4 = function (numMBCMpwm4) {
        var index = numMBCMpwm4.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCMpwm4 = numMBCMpwm4.substring(0, index);
        }

        numMBCMpwm4 = parseFloat(numMBCMpwm4);

        $scope.selectedMBMen4 = $scope.PushMBCMgpo4[1]

        $scope.selectedMBMen4.value = (
                                                   -8.425432182 * Math.pow(10, -3) * Math.pow(numMBCMpwm4, 3) +
                                                  4.024221876 * Math.pow(10, -1) * Math.pow(numMBCMpwm4, 2) -
                                                  12.62289126 * numMBCMpwm4 + 110.3330702
                                                 ) | 0;

       
/*

        if (numMBCMpwm4 >= 0 && 8 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[1]
        }
        else if (numMBCMpwm4 >= 9 && 11 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[2]
        }
        else if (numMBCMpwm4 >= 12 && 13 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[3]
        }
        else if (numMBCMpwm4 >= 14 && 15 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[4]
        }
        else if (numMBCMpwm4 >= 16 && 17 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[5]
        }
        else if (numMBCMpwm4 >= 18 && 19 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[6]
        }
        else if (numMBCMpwm4 >= 20 && 22 >= numMBCMpwm4) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[7]
        }
        else if (numMBCMpwm4 >= 23) {
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[8]
        }
        */

        $scope.numMBCMpwm4 = numMBCMpwm4 + "\'";


        $scope.goTotal();
    }

    ///
    /// MBC WOMEN
    ///

    $scope.gonumMBCWpwm1 = function (numMBCWpwm1) {
        var index = numMBCWpwm1.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCWpwm1 = numMBCWpwm1.substring(0, index);
        }

        numMBCWpwm1 = parseFloat(numMBCWpwm1);

        $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[1]

        $scope.selectedMBWOMen1.value = (
                                                   -1.782786804 * Math.pow(10, -2) * Math.pow(numMBCWpwm1, 3) +
                                                  8.868573055 * Math.pow(10, -1) * Math.pow(numMBCWpwm1, 2) -
                                                  18.04627377 * numMBCWpwm1 + 132.8211454
                                                 ) | 0;

        
/*

        if (numMBCWpwm1 >= 0 && 9 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[1]
        }
        else if (numMBCWpwm1 >= 10 && 13 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[2]
        }
        else if (numMBCWpwm1 >= 14 && 17 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[3]
        }
        else if (numMBCWpwm1 >= 18 && 20 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[4]
        }
        else if (numMBCWpwm1 >= 21 && 23 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[5]
        }
        else if (numMBCWpwm1 >= 24 && 25 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[6]
        }
        else if (numMBCWpwm1 >= 26 && 27 >= numMBCWpwm1) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[7]
        }
        else if (numMBCWpwm1 >= 28) {
            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[8]
        }
        */

        $scope.numMBCWpwm1 = numMBCWpwm1 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCWpwm2 = function (numMBCWpwm2) {
        var index = numMBCWpwm2.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCWpwm2 = numMBCWpwm2.substring(0, index);
        }

        numMBCWpwm2 = parseFloat(numMBCWpwm2);


        $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[1]

        $scope.selectedMBWOMen2.value = (
                                                   -2.770786098 * Math.pow(10, -2) * Math.pow(numMBCWpwm2, 3) +
                                                  1.347470981 * Math.pow(numMBCWpwm2, 2) -
                                                  26.20906565 * numMBCWpwm2 + 158.1740597
                                                 ) | 0;

        /*

        if (numMBCWpwm2 >= 0 && 7 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[1]
        }
        else if (numMBCWpwm2 >= 8 && 9 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[2]
        }
        else if (numMBCWpwm2 >= 10 && 11 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[3]
        }
        else if (numMBCWpwm2 >= 12 && 13 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[4]
        }
        else if (numMBCWpwm2 >= 14 && 16 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[5]
        }
        else if (numMBCWpwm2 >= 17 && 19 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[6]
        }
        else if (numMBCWpwm2 >= 20 && 22 >= numMBCWpwm2) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[7]
        }
        else if (numMBCWpwm2 >= 23) {
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[8]
        }
        */
        $scope.numMBCWpwm2 = numMBCWpwm2 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCWpwm3 = function (numMBCWpwm3) {
        var index = numMBCWpwm3.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCWpwm3 = numMBCWpwm3.substring(0, index);
        }

        numMBCWpwm3 = parseFloat(numMBCWpwm3);

        $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[1]

        $scope.selectedMBWOMen3.value = (
                                                   -8.425432182 * Math.pow(10, -3) * Math.pow(numMBCWpwm3, 3) +
                                                  3.518695945 * Math.pow(10, -1) * Math.pow(numMBCWpwm3, 2) -
                                                  11.1143077 * numMBCWpwm3 + 86.629573
                                                 ) | 0;

       

        /*

        if (numMBCWpwm3 >= 0 && 6 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[1]
        }
        else if (numMBCWpwm3 >= 7 && 9 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[2]
        }
        else if (numMBCWpwm3 >= 10 && 11 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[3]
        }
        else if (numMBCWpwm3 >= 12 && 13 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[4]
        }
        else if (numMBCWpwm3 >= 14 && 15 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[5]
        }
        else if (numMBCWpwm3 >= 16 && 17 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[6]
        }
        else if (numMBCWpwm3 >= 18 && 20 >= numMBCWpwm3) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[7]
        }
        else if (numMBCWpwm3 >= 21) {
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[8]
        }
        */
        $scope.numMBCWpwm3 = numMBCWpwm3 + "\'";


        $scope.goTotal();
    }

    $scope.gonumMBCWpwm4 = function (numMBCWpwm4) {
        var index = numMBCWpwm4.indexOf('\'');
        var value = 0;
        if (index >= 0) {
            numMBCWpwm4 = numMBCWpwm4.substring(0, index);
        }

        numMBCWpwm4 = parseFloat(numMBCWpwm4);

        $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[1]

        $scope.selectedMBWOMen4.value = (
                                                  -2.562228992 * Math.pow(10, -2) * Math.pow(numMBCWpwm4, 3) +
                                                 9.032450705 * Math.pow(10, -1) * Math.pow(numMBCWpwm4, 2) -
                                                 17.08775733 * numMBCWpwm4 + 95.84888071
                                                ) | 0;

        /*
        if (numMBCWpwm4 >= 0 && 5 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[1]
        }
        else if (numMBCWpwm4 >= 6 && 7 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[2]
        }
        else if (numMBCWpwm4 >= 8 && 9 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[3]
        }
        else if (numMBCWpwm4 >= 10 && 11 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[4]
        }
        else if (numMBCWpwm4 >= 12 && 13 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[5]
        }
        else if (numMBCWpwm4 >= 14 && 15 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[6]
        }
        else if (numMBCWpwm4 >= 16 && 17 >= numMBCWpwm4) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[7]
        }
        else if (numMBCWpwm4 >= 18) {
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[8]
        }
        */

        $scope.numMBCWpwm4 = numMBCWpwm4 + "\'";


        $scope.goTotal();
    }

    ///
    /// men push
    ///

    $scope.gonumnpmen1 = function (numnpmen1) {
        var index = numnpmen1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen1 = numnpmen1.substring(0, index);
        }

        $scope.selectedPusMen1 = $scope.PusMens1[1]

        $scope.selectedPusMen1.value = (
                                                   -7.119185006 * Math.pow(10, -4) * Math.pow(numnpmen1, 3) +
                                                 0.051070354 * Math.pow(numnpmen1, 2) -
                                                 2.205830682 * numnpmen1 + 35.66748449
                                                ) | 0;
       
/*

        if (numnpmen1 >= 0 && 7 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[1]
        }
        else if (numnpmen1 >= 8 && 12 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[2]
        }
        else if (numnpmen1 >= 13 && 19 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[3]
        }
        else if (numnpmen1 >= 20 && 27 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[4]
        }
        else if (numnpmen1 >= 28 && 34 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[5]
        }
        else if (numnpmen1 >= 35 && 39 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[6]
        }
        else if (numnpmen1 >= 40 && 44 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[7]
        }
        else if (numnpmen1 >= 45 && 49 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[8]
        }
        else if (numnpmen1 >= 50 && 54 >= numnpmen1) {
            $scope.selectedPusMen1 = $scope.PusMens1[9]
        }
        else if (numnpmen1 >= 55) {
            $scope.selectedPusMen1 = $scope.PusMens1[10]
        }
        */

        $scope.numnpmen1 = numnpmen1 + " Push Ups ";

        $scope.goTotal();

    }

    $scope.gonumnpmen2 = function (numnpmen2) {
        var index = numnpmen2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen2 = numnpmen2.substring(0, index);
        }

        $scope.selectedPusMen2 = $scope.PusMens2[1]

        $scope.selectedPusMen2.value = (
                                                -9.592122551 * Math.pow(10, -4) * Math.pow(numnpmen2, 3) +
                                               0.05608089 * Math.pow(numnpmen2, 2) -
                                               2.441589573 * numnpmen2 + 32.45420853
                                              ) | 0;

        
        
        /*

        if (numnpmen2 >= 0 && 4 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[1]
        }
        else if (numnpmen2 >= 5 && 9 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[2]
        }
        else if (numnpmen2 >= 10 && 14 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[3]
        }
        else if (numnpmen2 >= 15 && 19 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[4]
        }
        else if (numnpmen2 >= 20 && 24 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[5]
        }
        else if (numnpmen2 >= 25 && 29 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[6]
        }
        else if (numnpmen2 >= 30 && 34 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[7]
        }
        else if (numnpmen2 >= 35 && 39 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[8]
        }
        else if (numnpmen2 >= 40 && 44 >= numnpmen2) {
            $scope.selectedPusMen2 = $scope.PusMens2[9]
        }
        else if (numnpmen2 >= 45) {
            $scope.selectedPusMen2 = $scope.PusMens2[10]
        }
        */
        $scope.numnpmen2 = numnpmen2 + " Push Ups ";

        $scope.goTotal();
    }

    $scope.gonumnpmen3 = function (numnpmen3) {
        var index = numnpmen3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen3 = numnpmen3.substring(0, index);
        }

        $scope.selectedPusMen3 = $scope.PusMens3[1]

        $scope.selectedPusMen3.value = (
                                                -1.151539958 * Math.pow(10, -3) * Math.pow(numnpmen3, 3) +
                                               6.560268089 * Math.pow(10, -2) * Math.pow(numnpmen3, 2) -
                                               2.868028793 * numnpmen3 + 32.23255037
                                              ) | 0;

        
        
/*

        if (numnpmen3 >= 0 && 3 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[1]
        }
        else if (numnpmen3 >= 4 && 8 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[2]
        }
        else if (numnpmen3 >= 9 && 11 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[3]
        }
        else if (numnpmen3 >= 12 && 15 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[4]
        }
        else if (numnpmen3 >= 16 && 19 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[5]
        }
        else if (numnpmen3 >= 20 && 24 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[6]
        }
        else if (numnpmen3 >= 25 && 29 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[7]
        }
        else if (numnpmen3 >= 30 && 34 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[8]
        }
        else if (numnpmen3 >= 35 && 39 >= numnpmen3) {
            $scope.selectedPusMen3 = $scope.PusMens3[9]
        }
        else if (numnpmen3 >= 40) {
            $scope.selectedPusMen3 = $scope.PusMens3[10]
        }
        */
        $scope.numnpmen3 = numnpmen3 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpmen4 = function (numnpmen4) {
        var index = numnpmen4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen4 = numnpmen4.substring(0, index);
        }

        $scope.selectedPusMen4 = $scope.PusMens4[1]

        $scope.selectedPusMen4.value = (
                                                -2.120838249 * Math.pow(10, -3) * Math.pow(numnpmen4, 3) +
                                               1.206231463 * Math.pow(10, -1) * Math.pow(numnpmen4, 2) -
                                               3.945869396 * numnpmen4 + 30.42194607
                                              ) | 0;

     
        /*
        if (numnpmen4 >= 0 && 2 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[1]
        }
        else if (numnpmen4 >= 3 && 5 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[2]
        }
        else if (numnpmen4 >= 6 && 7 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[3]
        }
        else if (numnpmen4 >= 8 && 10 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[4]
        }
        else if (numnpmen4 >= 11 && 14 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[5]
        }
        else if (numnpmen4 >= 15 && 19 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[6]
        }
        else if (numnpmen4 >= 20 && 24 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[7]
        }
        else if (numnpmen4 >= 25 && 29 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[8]
        }
        else if (numnpmen4 >= 30 && 34 >= numnpmen4) {
            $scope.selectedPusMen4 = $scope.PusMens4[9]
        }
        else if (numnpmen4 >= 35) {
            $scope.selectedPusMen4 = $scope.PusMens4[10]
        }
        */
        $scope.numnpmen4 = numnpmen4 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpmen5 = function (numnpmen5) {
        var index = numnpmen5.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpmen5 = numnpmen5.substring(0, index);
        }

        $scope.selectedPusMen5 = $scope.PusMens5[1]

        $scope.selectedPusMen5.value = (
                                               -3.473410639 * Math.pow(10, -3) * Math.pow(numnpmen5, 3) +
                                              1.826369247 * Math.pow(10, -1) * Math.pow(numnpmen5, 2) -
                                              4.923381129 * numnpmen5 + 26.60868519
                                             ) | 0;

  
        /*
        if (numnpmen5 >= 0 && 1 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[1]
        }
        else if (numnpmen5 >= 2 && 3 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[2]
        }
        else if (numnpmen5 >= 4 && 4 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[3]
        }
        else if (numnpmen5 >= 5 && 7 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[4]
        }
        else if (numnpmen5 >= 8 && 9 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[5]
        }
        else if (numnpmen5 >= 10 && 14 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[6]
        }
        else if (numnpmen5 >= 15 && 19 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[7]
        }
        else if (numnpmen5 >= 20 && 24 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[8]
        }
        else if (numnpmen5 >= 25 && 29 >= numnpmen5) {
            $scope.selectedPusMen5 = $scope.PusMens5[9]
        }
        else if (numnpmen5 >= 30) {
            $scope.selectedPusMen5 = $scope.PusMens5[10]
        }
        */
        $scope.numnpmen5 = numnpmen5 + " Push Ups ";


        $scope.goTotal();
    }



    ///
    /// woman push
    ///

    $scope.gonumnpwm1 = function (numnpwm1) {
        var index = numnpwm1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm1 = numnpwm1.substring(0, index);
        }

        $scope.selectedNPWM1 = $scope.PushNWomengpo1[1]

        $scope.selectedNPWM1.value = (
                                                  -1.976947341 * Math.pow(10, -3) * Math.pow(numnpwm1, 3) +
                                                 1.277894432 * Math.pow(10, -1) * Math.pow(numnpwm1, 2) -
                                                 4.166779759 * numnpwm1 + 27.94269382
                                                ) | 0;



        /*

        if (numnpwm1 >= 0 && 1 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[1]
        }
        else if (numnpwm1 >= 2 && 4 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[2]
        }
        else if (numnpwm1 >= 5 && 6 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[3]
        }
        else if (numnpwm1 >= 7 && 9 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[4]
        }
        else if (numnpwm1 >= 10 && 11 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[5]
        }
        else if (numnpwm1 >= 12 && 17 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[6]
        }
        else if (numnpwm1 >= 18 && 22 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[7]
        }
        else if (numnpwm1 >= 23 && 30 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[8]
        }
        else if (numnpwm1 >= 31 && 36 >= numnpwm1) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[9]
        }
        else if (numnpwm1 >= 37) {
            $scope.selectedNPWM1 = $scope.PushNWomengpo1[10]
        }
        */
        $scope.numnpwm1 = numnpwm1 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpwm2 = function (numnpwm2) {
        var index = numnpwm2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm2 = numnpwm2.substring(0, index);
        }

        $scope.selectedNPWM2 = $scope.PushNWomengpo2[1]

        $scope.selectedNPWM2.value = (
                                                -2.842649549 * Math.pow(10, -3) * Math.pow(numnpwm2, 3) +
                                               1.807813034 * Math.pow(10, -1) * Math.pow(numnpwm2, 2) -
                                               4.913622627 * numnpwm2 + 26.51792115
                                              ) | 0;

        /*
        if (numnpwm2 >= 0 && 1 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[1]
        }
        else if (numnpwm2 >= 2 && 3 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[2]
        }
        else if (numnpwm2 >= 4 && 4 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[3]
        }
        else if (numnpwm2 >= 5 && 7 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[4]
        }
        else if (numnpwm2 >= 8 && 9 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[5]
        }
        else if (numnpwm2 >= 10 && 16 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[6]
        }
        else if (numnpwm2 >= 17 && 21 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[7]
        }
        else if (numnpwm2 >= 22 && 29 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[8]
        }
        else if (numnpwm2 >= 30 && 37 >= numnpwm2) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[9]
        }
        else if (numnpwm2 >= 38) {
            $scope.selectedNPWM2 = $scope.PushNWomengpo2[10]
        }
        */
        $scope.numnpwm2 = numnpwm2 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpwm3 = function (numnpwm3) {
        var index = numnpwm3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm3 = numnpwm3.substring(0, index);
        }

        $scope.selectedNPWM3 = $scope.PushNWomengpo3[1]

        $scope.selectedNPWM3.value = (
                                                -3.060429216 * Math.pow(10, -3) * Math.pow(numnpwm3, 3) +
                                               1.839470073 * Math.pow(10, -1) * Math.pow(numnpwm3, 2) -
                                               4.985357305 * numnpwm3 + 22.08351343
                                              ) | 0;


        /*

        if (numnpwm3 >= 0 && 0 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[1]
        }
        else if (numnpwm3 >= 1 && 2 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[2]
        }
        else if (numnpwm3 >= 3 && 3 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[3]
        }
        else if (numnpwm3 >= 4 && 5 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[4]
        }
        else if (numnpwm3 >= 6 && 7 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[5]
        }
        else if (numnpwm3 >= 8 && 12 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[6]
        }
        else if (numnpwm3 >= 13 && 17 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[7]
        }
        else if (numnpwm3 >= 18 && 25 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[8]
        }
        else if (numnpwm3 >= 26 && 31 >= numnpwm3) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[9]
        }
        else if (numnpwm3 >= 32) {
            $scope.selectedNPWM3 = $scope.PushNWomengpo3[10]
        }
        */
        $scope.numnpwm3 = numnpwm3 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpwm4 = function (numnpwm4) {

        var index = numnpwm4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm4 = numnpwm4.substring(0, index);
        }

        $scope.selectedNPWM4 = $scope.PushNWomengpo4[1]

        $scope.selectedNPWM4.value = (
                                                -4.013207902 * Math.pow(10, -3) * Math.pow(numnpwm4, 3) +
                                               0.20504116 * Math.pow(numnpwm4, 2) -
                                               5.25546528 * numnpwm4 + 19.58822664
                                              ) | 0;

        /*
        if (numnpwm4 >= 0 && 0 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[1]
        }
        else if (numnpwm4 >= 1 && 1 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[2]
        }
        else if (numnpwm4 >= 2 && 2 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[3]
        }
        else if (numnpwm4 >= 3 && 4 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[4]
        }
        else if (numnpwm4 >= 5 && 6 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[5]
        }
        else if (numnpwm4 >= 7 && 10 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[6]
        }
        else if (numnpwm4 >= 11 && 14 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[7]
        }
        else if (numnpwm4 >= 15 && 20 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[8]
        }
        else if (numnpwm4 >= 21 && 25 >= numnpwm4) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[9]
        }
        else if (numnpwm4 >= 26) {
            $scope.selectedNPWM4 = $scope.PushNWomengpo4[10]
        }
        */
        $scope.numnpwm4 = numnpwm4 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumnpwm5 = function (numnpwm5) {
        var index = numnpwm5.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numnpwm5 = numnpwm5.substring(0, index);
        }

        $scope.selectedNPWM5 = $scope.PushNWomengpo5[1]

        $scope.selectedNPWM5.value = (
                                               -1.368096129 * Math.pow(10, -2) * Math.pow(numnpwm5, 3) +
                                              4.504165031 * Math.pow(10, -1) * Math.pow(numnpwm5, 2) -
                                              6.433534477 * numnpwm5 + 21.55788659
                                             ) | 0;

/*
        if (numnpwm5 >= 0 && 0 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[1]
        }
        else if (numnpwm5 >= 1 && 1 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[2]
        }
        else if (numnpwm5 >= 2 && 3 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[3]
        }
        else if (numnpwm5 >= 4 && 4 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[4]
        }
        else if (numnpwm5 >= 5 && 8 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[5]
        }
        else if (numnpwm5 >= 9 && 12 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[6]
        }
        else if (numnpwm5 >= 13 && 16 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[7]
        }
        else if (numnpwm5 >= 17 && 20 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[8]
        }
        else if (numnpwm5 >= 21 && 23 >= numnpwm5) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[9]
        }
        else if (numnpwm5 >= 24) {
            $scope.selectedNPWM5 = $scope.PushNWomengpo5[10]
        }
        */
        $scope.numnpwm5 = numnpwm5 + " Push Ups ";


        $scope.goTotal();
    }

    ///
    /// Modified women push
    ///

    $scope.gonumpwm1 = function (numpwm1) {

        var index = numpwm1.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm1 = numpwm1.substring(0, index);
        }

        $scope.selectedPWM1 = $scope.PushWomengpo1[1]

        $scope.selectedPWM1.value = (
                                               -2.765169752 * Math.pow(10, -3) * Math.pow(numpwm1, 3) +
                                              1.687918905 * Math.pow(10, -1) * Math.pow(numpwm1, 2) -
                                              4.046430035 * numpwm1 + 25.36594402
                                             ) | 0;

        
/*
        if (numpwm1 >= 0 && 1 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[1]
        }
        else if (numpwm1 >= 2 && 3 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[2]
        }
        else if (numpwm1 >= 4 && 5 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[3]
        }
        else if (numpwm1 >= 6 && 10 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[4]
        }
        else if (numpwm1 >= 11 && 16 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[5]
        }
        else if (numpwm1 >= 17 && 24 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[6]
        }
        else if (numpwm1 >= 25 && 33 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[7]
        }
        else if (numpwm1 >= 34 && 38 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[8]
        }
        else if (numpwm1 >= 39 && 41 >= numpwm1) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[9]
        }
        else if (numpwm1 >= 42) {
            $scope.selectedPWM1 = $scope.PushWomengpo1[10]
        }
        */
        $scope.numpwm1 = numpwm1 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumpwm2 = function (numpwm2) {
        var index = numpwm2.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm2 = numpwm2.substring(0, index);
        }


        $scope.selectedPWM2 = $scope.PushWomengpo2[1]

        $scope.selectedPWM2.value = (
                                               -1.64436503 * Math.pow(10, -3) * Math.pow(numpwm2, 3) +
                                              1.009129199 * Math.pow(10, -1) * Math.pow(numpwm2, 2) -
                                              3.217181295 * numpwm2 + 19.09754563
                                             ) | 0;

       
/*

        if (numpwm2 >= 0 && 0 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[1]
        }
        else if (numpwm2 >= 1 && 1 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[2]
        }
        else if (numpwm2 >= 2 && 3 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[3]
        }
        else if (numpwm2 >= 4 && 8 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[4]
        }
        else if (numpwm2 >= 9 && 11 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[5]
        }
        else if (numpwm2 >= 12 && 18 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[6]
        }
        else if (numpwm2 >= 19 && 24 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[7]
        }
        else if (numpwm2 >= 25 && 32 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[8]
        }
        else if (numpwm2 >= 33 && 39 >= numpwm2) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[9]
        }
        else if (numpwm2 >= 40) {
            $scope.selectedPWM2 = $scope.PushWomengpo2[10]
        }
        */

        $scope.numpwm2 = numpwm2 + " Push Ups ";

        $scope.goTotal();
    }

    $scope.gonumpwm3 = function (numpwm3) {

        var index = numpwm3.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm3 = numpwm3.substring(0, index);
        }

        $scope.selectedPWM3 = $scope.PushWomengpo3[1]

        $scope.selectedPWM3.value = (
                                               -3.540916008 * Math.pow(10, -3) * Math.pow(numpwm3, 3) +
                                              1.950940576 * Math.pow(10, -1) * Math.pow(numpwm3, 2) -
                                              4.655319724 * numpwm3 + 19.16064832
                                             ) | 0;

      

/*
        if (numpwm3 >= 0 && 0 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[1]
        }
        else if (numpwm3 >= 1 && 1 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[2]
        }
        else if (numpwm3 >= 2 && 2 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[3]
        }
        else if (numpwm3 >= 3 && 5 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[4]
        }
        else if (numpwm3 >= 6 && 7 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[5]
        }
        else if (numpwm3 >= 8 && 14 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[6]
        }
        else if (numpwm3 >= 15 && 19 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[7]
        }
        else if (numpwm3 >= 20 && 27 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[8]
        }
        else if (numpwm3 >= 28 && 33 >= numpwm3) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[9]
        }
        else if (numpwm3 >= 34) {
            $scope.selectedPWM3 = $scope.PushWomengpo3[10]
        }
        */
        $scope.numpwm3 = numpwm3 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumpwm4 = function (numpwm4) {
        var index = numpwm4.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm4 = numpwm4.substring(0, index);
        }

        $scope.selectedPWM4 = $scope.PushWomengpo4[1]

        $scope.selectedPWM4.value = (
                                               -3.690231759 * Math.pow(10, -3) * Math.pow(numpwm4, 3) +
                                              1.685059521 * Math.pow(10, -1) * Math.pow(numpwm4, 2) -
                                              4.14004635 * numpwm4 + 19.58856752
                                             ) | 0;

       

        /*


        if (numpwm4 >= 0 && 0 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[1]
        }
        else if (numpwm4 >= 1 && 1 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[2]
        }
        else if (numpwm4 >= 2 && 3 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[3]
        }
        else if (numpwm4 >= 4 && 5 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[4]
        }
        else if (numpwm4 >= 6 && 10 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[5]
        }
        else if (numpwm4 >= 11 && 14 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[6]
        }
        else if (numpwm4 >= 15 && 19 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[7]
        }
        else if (numpwm4 >= 20 && 24 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[8]
        }
        else if (numpwm4 >= 25 && 29 >= numpwm4) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[9]
        }
        else if (numpwm4 >= 30) {
            $scope.selectedPWM4 = $scope.PushWomengpo4[10]
        }
        */
        $scope.numpwm4 = numpwm4 + " Push Ups ";


        $scope.goTotal();
    }

    $scope.gonumpwm5 = function (numpwm5) {
        var index = numpwm5.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            numpwm5 = numpwm5.substring(0, index);
        }

        $scope.selectedPWM5 = $scope.PushWomengpo5[1]

        $scope.selectedPWM5.value = (
                                               -1.808906169 * Math.pow(10, -2) * Math.pow(numpwm5, 3) +
                                              5.963106591 * Math.pow(10, -1) * Math.pow(numpwm5, 2) -
                                              8.508173707 * numpwm5 + 21.88364433
                                             ) | 0;

      

/*

        if (numpwm5 >= 0 && 0 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[1]
        }
        else if (numpwm5 >= 1 && 1 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[2]
        }
        else if (numpwm5 >= 2 && 2 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[3]
        }
        else if (numpwm5 >= 3 && 3 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[4]
        }
        else if (numpwm5 >= 4 && 4 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[5]
        }
        else if (numpwm5 >= 5 && 8 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[6]
        }
        else if (numpwm5 >= 9 && 12 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[7]
        }
        else if (numpwm5 >= 13 && 15 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[8]
        }
        else if (numpwm5 >= 16 && 19 >= numpwm5) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[9]
        }
        else if (numpwm5 >= 20) {
            $scope.selectedPWM5 = $scope.PushWomengpo5[10]
        }
        */
        $scope.numpwm5 = numpwm5 + " Push Ups ";


        $scope.goTotal();
    }

    var goGender = function () {


        if ($scope.selectedGender.id == 0) {
            totalQ = 31;

            if ($rootScope.phoneDevice < 0) {
                $scope.disablegendermen = false;
                $scope.disablegendermenWai = false;
                $scope.disablegendermenWai2 = false;
                $scope.disablegendermenSid = false;
            }

            $scope.disablegenderwomen = true;
            $scope.disablegenderwomenWai = true;
            $scope.disablegenderwomenWai2 = true;
            $scope.disablegenderwomenSid = true;
            $scope.disablegenderwomenMod = true;

            $scope.selectedWaiWomen = $scope.WaiWomens[0];

            $scope.selectedSidWomen = $scope.SidWomens[0];

            $scope.selectedPusWomen = $scope.PusWomens[5];

            $scope.selectedMBWomen = $scope.MBWomens[3];

            $scope.selectedCooWomen = $scope.CooWomens[5];

            if (flagcontinue) {
                $scope.selectedWaiMen = $scope.WaiMens[0];
                $scope.selectedSidMen = $scope.SidMens[0];
                $scope.selectedPusMen = $scope.PusMens[5];
                $scope.selectedMBMen = $scope.MBMens[3];
                $scope.selectedCooMen = $scope.CooMens[5];
            }


        }
        else {
            totalQ = 32;

            $scope.disablegendermen = true;
            $scope.disablegendermenWai = true;
            $scope.disablegendermenWai2 = true;
            $scope.disablegendermenSid = true;

            if ($rootScope.phoneDevice < 0) {
                $scope.disablegenderwomen = false;
                $scope.disablegenderwomenWai = false;
                $scope.disablegenderwomenWai2 = false;
                $scope.disablegenderwomenSid = false;
                $scope.disablegenderwomenMod = false;
            }

            $scope.selectedWaiMen = $scope.WaiMens[0];

            $scope.selectedSidMen = $scope.SidMens[0];

            $scope.selectedPusMen = $scope.PusMens[5];

            $scope.selectedMBMen = $scope.MBMens[3];

            $scope.selectedCooMen = $scope.CooMens[5];

            if (flagcontinue) {
                $scope.selectedWaiWomen = $scope.WaiWomens[0];
                $scope.selectedSidWomen = $scope.SidWomens[0];
                $scope.selectedPusWomen = $scope.PusWomens[5];
                $scope.selectedMBWomen = $scope.MBWomens[3];
                $scope.selectedCooWomen = $scope.CooWomens[5];
            }
        }

        if (flagcontinue) {
            $scope.selectedPusWomenModified = $scope.PusWomenModifieds[0];
        }

        goModified();

        putCounter();

        flagcontinue = true;


        /*
        $scope.disablegendermod1women = true;
        $scope.disablegendermod2women = true;
        $scope.disablegendermod3women = true;
        $scope.disablegendermod4women = true;
        $scope.disablegendermod5women = true;
      
        $scope.selectedPWM1 = $scope.PushWomengpo1[0];
        $scope.selectedPWM2 = $scope.PushWomengpo2[0];
        $scope.selectedPWM3 = $scope.PushWomengpo3[0];
        $scope.selectedPWM4 = $scope.PushWomengpo4[0];
        $scope.selectedPWM5 = $scope.PushWomengpo5[0];
       */

        //$scope.goTotal();
    }

    var goModified = function () {

        if (flagcontinue) {
            $scope.selectedMBMen1 = $scope.PushMBCMgpo1[1];
            $scope.selectedMBMen1.value = 0;
            $scope.selectedMBMen2 = $scope.PushMBCMgpo2[1];
            $scope.selectedMBMen2.value = 0;
            $scope.selectedMBMen3 = $scope.PushMBCMgpo3[1];
            $scope.selectedMBMen3.value = 0;
            $scope.selectedMBMen4 = $scope.PushMBCMgpo4[1];
            $scope.selectedMBMen4.value = 0;

            $scope.numMBCMpwm1 = "0.00" + "\'";
            $scope.numMBCMpwm2 = "0.00" + "\'";
            $scope.numMBCMpwm3 = "0.00" + "\'";
            $scope.numMBCMpwm4 = "0.00" + "\'";

            $scope.selectedMBWOMen1 = $scope.PushMBCWgpo1[1];
            $scope.selectedMBWOMen1.value = 0;
            $scope.selectedMBWOMen2 = $scope.PushMBCWgpo2[1];
            $scope.selectedMBWOMen2.value = 0;
            $scope.selectedMBWOMen3 = $scope.PushMBCWgpo3[1];
            $scope.selectedMBWOMen3.value = 0;
            $scope.selectedMBWOMen4 = $scope.PushMBCWgpo4[1];
            $scope.selectedMBWOMen4.value = 0;

            $scope.numMBCWpwm1 = "0.00" + "\'";
            $scope.numMBCWpwm2 = "0.00" + "\'";
            $scope.numMBCWpwm3 = "0.00" + "\'";
            $scope.numMBCWpwm4 = "0.00" + "\'";

            $scope.selectedCooMen1 = $scope.CooMens1[1];
            $scope.selectedCooMen1.value = 0;
            $scope.selectedCooMen2 = $scope.CooMens2[1];
            $scope.selectedCooMen2.value = 0;
            $scope.selectedCooMen3 = $scope.CooMens3[1];
            $scope.selectedCooMen3.value = 0;
            $scope.selectedCooMen4 = $scope.CooMens4[1];
            $scope.selectedCooMen4.value = 0;

            $scope.numMBCOOWpwm1 = 0 + " miles";
            $scope.numMBCOOWpwm2 = 0 + " miles";
            $scope.numMBCOOWpwm3 = 0 + " miles";
            $scope.numMBCOOWpwm4 = 0 + " miles";

            $scope.selectedCW1 = $scope.CooWomens1[1];
            $scope.selectedCW1.value = 0;
            $scope.selectedCW2 = $scope.CooWomens2[1];
            $scope.selectedCW2.value = 0;
            $scope.selectedCW3 = $scope.CooWomens3[1];
            $scope.selectedCW3.value = 0;
            $scope.selectedCW4 = $scope.CooWomens4[1];
            $scope.selectedCW4.value = 0;

            $scope.numMBCOOWOpwm1 = 0 + " miles";
            $scope.numMBCOOWOpwm2 = 0 + " miles";
            $scope.numMBCOOWOpwm3 = 0 + " miles";
            $scope.numMBCOOWOpwm4 = 0 + " miles";

            $scope.selectedPusMen1 = $scope.PusMens1[1];
            $scope.selectedPusMen1.value = 0;
            $scope.selectedPusMen2 = $scope.PusMens2[1];
            $scope.selectedPusMen2.value = 0;
            $scope.selectedPusMen3 = $scope.PusMens3[1];
            $scope.selectedPusMen3.value = 0;
            $scope.selectedPusMen4 = $scope.PusMens4[1];
            $scope.selectedPusMen4.value = 0;
            $scope.selectedPusMen5 = $scope.PusMens5[1];
            $scope.selectedPusMen5.value = 0;

            $scope.numnpmen1 = 0 + " Push Ups ";
            $scope.numnpmen2 = 0 + " Push Ups ";
            $scope.numnpmen3 = 0 + " Push Ups ";
            $scope.numnpmen4 = 0 + " Push Ups ";
            $scope.numnpmen5 = 0 + " Push Ups ";

            changeModifiedWomanPush();

            calcData();

        }
        statusFields();
    }

    var changeModifiedWomanPush = function () {
        if (flagcontinue) {
            if (!flagModified) {
                $scope.selectedNPWM1 = $scope.PushNWomengpo1[1];
                $scope.selectedNPWM1.value = 0;
                $scope.selectedNPWM2 = $scope.PushNWomengpo2[1];
                $scope.selectedNPWM2.value = 0;
                $scope.selectedNPWM3 = $scope.PushNWomengpo3[1];
                $scope.selectedNPWM3.value = 0;
                $scope.selectedNPWM4 = $scope.PushNWomengpo4[1];
                $scope.selectedNPWM4.value = 0;
                $scope.selectedNPWM5 = $scope.PushNWomengpo5[1];
                $scope.selectedNPWM5.value = 0;

                $scope.numnpwm1 = 0 + " Push Ups ";
                $scope.numnpwm2 = 0 + " Push Ups ";
                $scope.numnpwm3 = 0 + " Push Ups ";
                $scope.numnpwm4 = 0 + " Push Ups ";
                $scope.numnpwm5 = 0 + " Push Ups ";


                $scope.selectedPWM1 = $scope.PushWomengpo1[1];
                $scope.selectedPWM1.value = 0;
                $scope.selectedPWM2 = $scope.PushWomengpo2[1];
                $scope.selectedPWM2.value = 0;
                $scope.selectedPWM3 = $scope.PushWomengpo3[1];
                $scope.selectedPWM3.value = 0;
                $scope.selectedPWM4 = $scope.PushWomengpo4[1];
                $scope.selectedPWM4.value = 0;
                $scope.selectedPWM5 = $scope.PushWomengpo5[1];
                $scope.selectedPWM5.value = 0;

                $scope.numpwm1 = 0 + " Push Ups ";
                $scope.numpwm2 = 0 + " Push Ups ";
                $scope.numpwm3 = 0 + " Push Ups ";
                $scope.numpwm4 = 0 + " Push Ups ";
                $scope.numpwm5 = 0 + " Push Ups ";
            }
            else {
                flagModified = false;
            }
        }
    }

    var statusFields = function () {

        if ($rootScope.phoneDevice < 0) {
            $scope.disableMBCM1 = true;
            $scope.disableMBCM2 = true;
            $scope.disableMBCM3 = true;
            $scope.disableMBCM4 = true;

            $scope.disableMBCW1 = true;
            $scope.disableMBCW2 = true;
            $scope.disableMBCW3 = true;
            $scope.disableMBCW4 = true;

            $scope.disablegendercoomen1 = true;
            $scope.disablegendercoomen2 = true;
            $scope.disablegendercoomen3 = true;
            $scope.disablegendercoomen4 = true;

            $scope.disablegendercoowomen1 = true;
            $scope.disablegendercoowomen2 = true;
            $scope.disablegendercoowomen3 = true;
            $scope.disablegendercoowomen4 = true;

            $scope.disablegendermen1 = true;
            $scope.disablegendermen2 = true;
            $scope.disablegendermen3 = true;
            $scope.disablegendermen4 = true;
            $scope.disablegendermen5 = true;

            $scope.disablegender1women = true;
            $scope.disablegender2women = true;
            $scope.disablegender3women = true;
            $scope.disablegender4women = true;
            $scope.disablegender5women = true;

            $scope.disablegendermod1women = true;
            $scope.disablegendermod2women = true;
            $scope.disablegendermod3women = true;
            $scope.disablegendermod4women = true;
            $scope.disablegendermod5women = true;


        }

        if ($rootScope.phoneDevice < 0) {

            if ($scope.selectedGender.id == 1) {

                genderWoMan(false);

                MBCW(false);

                coowomen(false);


            }
            else {
                MBCM(false);

                genderMan(false);

                coomen(false);

            }
        }

        $scope.goTotal();

    }

    var genderMan = function (opt) {

        if ($scope.selectedAge.id == 0) {
            $scope.disablegendermen1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendermen2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendermen3 = opt;
        }
        else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
            $scope.disablegendermen4 = opt;
        }
        else if ($scope.selectedAge.id >= 7) {
            $scope.disablegendermen5 = opt;
        }
    }

    var MBCM = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disableMBCM1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disableMBCM2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disableMBCM3 = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disableMBCM4 = opt;
        }
    }

    var coomen = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendercoomen1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendercoomen2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendercoomen3 = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disablegendercoomen4 = opt;
        }

    }

    var genderWoMan = function (opt) {
        if ($scope.selectedPusWomenModified.id == 1) {

            if ($scope.selectedAge.id == 0) {
                $scope.disablegendermod1women = opt;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.disablegendermod2women = opt;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.disablegendermod3women = opt;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.disablegendermod4women = opt;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.disablegendermod5women = opt;
            }
        }
        else {

            if ($scope.selectedAge.id == 0) {
                $scope.disablegender1women = opt;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.disablegender2women = opt;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.disablegender3women = opt;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.disablegender4women = opt;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.disablegender5women = opt;
            }
        }
    }

    var MBCW = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disableMBCW1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disableMBCW2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disableMBCW3 = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disableMBCW4 = opt;
        }
    }

    var coowomen = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendercoowomen1 = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendercoowomen2 = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendercoowomen3 = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disablegendercoowomen4 = opt;
        }
    }


    $scope.goTotal = function () {

        //$scope.total1 = $scope.selectedAge.value;
        $scope.total1 = $scope.BMILocal;
        $scope.total1 += $scope.selectedCar.value;

        $scope.total1 += $scope.selectedChe.value;
        $scope.total1 += $scope.selectedFat.value;

        $scope.total1 += $scope.selectedMot.value;
        $scope.total1 += $scope.selectedDiabetes.value;
        $scope.total1 += $scope.selectedMod.value;
        $scope.total1 += $scope.selectedVig.value;
        $scope.total1 += $scope.selectedSit.value;

        $scope.total1 += $scope.selectSmo.value;
        $scope.total1 += $scope.selectedSmokes.value;
        $scope.total1 += $scope.selectAlc.value;

        //$scope.total1 += $scope.selectedOra.value;
        $scope.total1 += $scope.selectedAnt.value;

        $scope.total2 = $scope.selectedSys.value;
        $scope.total2 += $scope.selectedDiastolic.value;
        console.log($scope.selectedSys.value + " + " + $scope.selectedDiastolic.value + " = " + $scope.total2);

    
        $scope.total2 += $scope.selectedDee.value;
        $scope.total2 += $scope.selectedAct.value;
        $scope.total2 += $scope.selectedMob.value;
        $scope.total2 += $scope.selectedSho.value;
        $scope.total2 += $scope.selectedSpi.value;
        $scope.total2 += $scope.selectedSpiExt.value;
      
        //$scope.total2 += $scope.selectedPusMen.value;
        //$scope.total2 += $scope.selectedPusWomen.value;

        if ($scope.radioGender) {
            $scope.total2 += $scope.selectedWaiMen.value;
            $scope.total2 += $scope.selectedSidMen.value;

            
            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedPusMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedPusMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedPusMen3.value;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.total2 += $scope.selectedPusMen4.value;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.total2 += $scope.selectedPusMen5.value;
            }

            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedMBMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedMBMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedMBMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.total2 += $scope.selectedMBMen4.value;
            }

            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedCooMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedCooMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedCooMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.total2 += $scope.selectedCooMen4.value;
            }
        }
        else {
            $scope.total2 += $scope.selectedWaiWomen.value;
            $scope.total2 += $scope.selectedSidWomen.value;
            
            if ($scope.selectedPusWomenModified.id == 0) {
                if ($scope.selectedAge.id == 0) {
                    $scope.total2 += $scope.selectedNPWM1.value;
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.total2 += $scope.selectedNPWM2.value;
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.total2 += $scope.selectedNPWM3.value;
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.total2 += $scope.selectedNPWM4.value;
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.total2 += $scope.selectedNPWM5.value;
                }
            }
            else {
                if ($scope.selectedAge.id == 0) {
                    $scope.total2 += $scope.selectedPWM1.value;
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    $scope.total2 += $scope.selectedPWM2.value;
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    $scope.total2 += $scope.selectedPWM3.value;
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    $scope.total2 += $scope.selectedPWM4.value;
                }
                else if ($scope.selectedAge.id >= 7) {
                    $scope.total2 += $scope.selectedPWM5.value;
                }
            }
          
            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedMBWOMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedMBWOMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedMBWOMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.total2 += $scope.selectedMBWOMen4.value;
            }
           
            if ($scope.selectedAge.id == 0) {
                $scope.total2 += $scope.selectedCW1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.total2 += $scope.selectedCW2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.total2 += $scope.selectedCW3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                $scope.total2 += $scope.selectedCW4.value;
            }

    
        }
       
        
        $scope.total3 = $scope.total1 + $scope.total2;

        //$scope.total4 = $scope.total3;

        $scope.total4 = $scope.total3 * -1 + 100;

        SaveInCookie();
    }


    $scope.chkOcultar = function () {
        if ($scope.checkOcultar == true) {

            /*
            if ($scope.selectedGender.id == 0) {
                $scope.ocultarMen = false;
            }
            else {
                $scope.ocultarWomen = false;
            }
            */

            $scope.ocultar = false;
        }
        else {
            $scope.ocultarMen = true;
            $scope.ocultarWomen = true;
            $scope.ocultar = true;
        }

        $scope.goTotal();
    }

    $scope.$watch('radioGender', function (value) {
        if (value == false) {
            $scope.selectedGender = $scope.Genders[1];
        }
        else if (value == true) {
            $scope.selectedGender = $scope.Genders[0];
        }
        $scope.chkOcultar();

        goGender();
    });

    $scope.$watch('radioMPW', function (value) {
        if (value == false) {
            $scope.selectedPusWomenModified = $scope.PusWomenModifieds[1];
        }
        else if (value == true) {
            $scope.selectedPusWomenModified = $scope.PusWomenModifieds[0];
        }
        changeModifiedWomanPush();
        calcData();
        statusFields();
        $scope.goTotal();

    });

    $scope.$watch('radioCar', function (value) {

        if (value == false) {
            $scope.selectedCar = $scope.CardioVascularHealths[1];
        }
        else if (value == true) {
            $scope.selectedCar = $scope.CardioVascularHealths[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioChe', function (value) {

        if (value == false) {
            $scope.selectedChe = $scope.ChestPains[1];
        }
        else if (value == true) {
            $scope.selectedChe = $scope.ChestPains[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioFat', function (value) {

        if (value == false) {
            $scope.selectedFat = $scope.FatherDiagnoseds[1];
        }
        else if (value == true) {
            $scope.selectedFat = $scope.FatherDiagnoseds[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioMot', function (value) {

        if (value == false) {
            $scope.selectedMot = $scope.MotherDiagnoseds[1];
        }
        else if (value == true) {
            $scope.selectedMot = $scope.MotherDiagnoseds[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioDia', function (value) {

        if (value == false) {
            $scope.selectedDiabetes = $scope.Diabetess[1];
        }
        else if (value == true) {
            $scope.selectedDiabetes = $scope.Diabetess[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioSmo', function (value) {

        if (value == false) {
            $scope.selectedSmokes = $scope.SecondHandsSmokes[1];
        }
        else if (value == true) {
            $scope.selectedSmokes = $scope.SecondHandsSmokes[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioOra', function (value) {
        /*
        if (value == false) {
            $scope.selectedOra = $scope.OralContraceptives[1];
        }
        else if (value == true) {
            $scope.selectedOra = $scope.OralContraceptives[0];
        }
        $scope.goTotal();
        */
    });

    $scope.$watch('radiofitness', function (value) {
        if (value == false) {
            $scope.selectedLife = $scope.selectedLifes[1];
        }
        else if (value == true) {
            $scope.selectedLife = $scope.selectedLifes[0];
        }
        $scope.goTotal();
    });

    $scope.$watch('radioOrg', function (value) {

        if (value == false) {
            $scope.selectedParticipated = $scope.selectedParticipateds[1];
        }
        else if (value == true) {
            $scope.selectedParticipated = $scope.selectedParticipateds[0];
        }

        $scope.goTotal();

    });

    $scope.$watch('radioPlaning', function (value) {

        if (value == false) {
            $scope.selectedPlaning = $scope.selectedPlanings[1];
        }
        else if (value == true) {
            $scope.selectedPlaning = $scope.selectedPlanings[0];
        }

        $scope.goTotal();

    });

    $scope.$watch('radioSho', function (value) {

        if (value == false) {
            $scope.selectedSho = $scope.ShoulderClearingTests[1];
        }
        else if (value == true) {
            $scope.selectedSho = $scope.ShoulderClearingTests[0];
        }
        $scope.goTotal();

    });

    $scope.$watch('radioSpi', function (value) {

        if (value == false) {
            $scope.selectedSpi = $scope.SpinalFlexions[1];
        }
        else if (value == true) {
            $scope.selectedSpi = $scope.SpinalFlexions[0];
        }
        $scope.goTotal();

    });



    $scope.$watch('radioSpiExt', function (value) {

        if (value == false) {
            $scope.selectedSpiExt = $scope.SpinalExtensions[1];
        }
        else if (value == true) {
            $scope.selectedSpiExt = $scope.SpinalExtensions[0];
        }
        $scope.goTotal();

    });


    $scope.gohowHeight = function (howHeight) {

        var index = howHeight.indexOf(' ');
        var feet = 0;
        var inch = 0;
        if (index >= 0) {
            feet = howHeight.substring(0, index);
            inch = howHeight.substring(index + 1, howHeight.lenght);
        }
        $scope.howHeight = feet + '\' ' + inch + '\'\'';

        calcBMI();

        if ($scope.hidereview) {
            $scope.hideNext = false;
        }
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

        
    }

    $scope.gohowWeight = function (howWeight) {
        calcBMI();
        
        if ($scope.hidereview) {
            $scope.hideNext = false;
        }
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }
    }

    var calcBMI = function () {
        var valueTemp = $scope.howHeight.replace(/'/g, '');
        var index = valueTemp.indexOf(' ');
        var Height = 0;
        if (index >= 0) {
            Height += parseInt(valueTemp.substring(0, index)) * 12;
            Height += parseInt(valueTemp.substring(index + 1, valueTemp.lenght));
        }
        var Weight = parseInt($scope.howWeight);
        var BMI = 0;
        if (Height != 0 && Weight != 0) {
            BMI = Weight / (Height * Height) * 703;
        }
        var score = Math.round(1.3 * (BMI * BMI) - BMI * 63.65 + 779.75);
        var result = 0.00;
        var howwaistv = 0;
        var howhipv = 0;
       
        if ($scope.selectedGender.id == 0) {
            howwaistv = $scope.howwaist.replace(/'/g, '');
            howhipv = $scope.howhip.replace(/'/g, '');
        }
        else {
            howwaistv = $scope.howwaistw.replace(/'/g, '');
            howhipv = $scope.howhipw.replace(/'/g, '');
        }

        if (howwaistv > 0.00 && howhipv > 0.00) {
            result = (howwaistv / howhipv).toFixed(2);
        }
        

        var flag = false;
        if ($scope.selectedGender.id == 0) {
            if (result < 0.90) {
                flag = true;
            }
        }
        else {
            if (result < 0.80) {
                flag = true;
            }
        }

        if (BMI < 25) {
            score = 0;
        }
        else if (BMI > 40 && flag == true) {
            score = 40;
        }
        
        $scope.BMI = BMI;

        $scope.BMILocal = score;
     
        $scope.goTotal();
    }

    $scope.save = function () {
        $scope.hideSave = true;
        $scope.hideNext = true;
        $scope.hideBack = true;
        $scope.hideEmail = true;
        $scope.hidepoints = false;
        $scope.doneSubmitweb = false;


        /*
        if ($scope.email != null && $scope.email != "") {
            $scope.messageQuestion = "Are you sure to save it?";
            var myEl = $element.find('#openQuestion');
            myEl.click();
        }
        else {
            $scope.errorMessage = "Please type email";
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        }
        */
    }

    var SaveInCookie = function () {

        questionFactory.email = $scope.email;
        questionFactory.iduser = $rootScope.userId;
        questionFactory.total1 = $scope.total1;
        questionFactory.total2 = $scope.total2;
        questionFactory.total3 = 0;

        questionFactory.grantotal = $scope.total3;
        questionFactory.conversiontotal = $scope.total4;

        questionFactory.Gender = $scope.selectedGender.id;
        questionFactory.Age = $scope.howold;


        var valueTemp = $scope.howHeight.replace(/'/g, '');
        var index = valueTemp.indexOf(' ');
        var feet = 0;
        var inch = 0;
        if (index >= 0) {
            feet = valueTemp.substring(0, index);
            inch = valueTemp.substring(index + 1, valueTemp.lenght);
        }
        questionFactory.HowHeightFeet = feet;
        questionFactory.HowHeightInchs = inch;

        questionFactory.HowWeight = $scope.howWeight;

        questionFactory.CardioVascularHealth = $scope.selectedCar.id;
        questionFactory.ChestPain = $scope.selectedChe.id;;
        questionFactory.FatherDiagnosed = $scope.selectedFat.id;
        questionFactory.MotherDiagnosed = $scope.selectedMot.id;
        questionFactory.Diabetes = $scope.selectedDiabetes.id;;

        questionFactory.ModerateExercise = $scope.howmod;
        questionFactory.Vigorous = $scope.howvig;

        questionFactory.Sitting = $scope.selectedSit.id;

        questionFactory.Smoke = $scope.selectSmo.id;
        questionFactory.Secondhandsmoke = $scope.selectedSmokes.id;
        questionFactory.Alcohol = $scope.selectAlc.id;
        //questionFactory.OralContraceptive = $scope.selectedOra.id;
        questionFactory.OralContraceptive = 0;
        questionFactory.Antibiotics = $scope.selectedAnt.id;

        questionFactory.Systolic = $scope.howsys;
        questionFactory.Diastolic = $scope.howdia;

        valueTemp = $scope.howwaist.replace(/'/g, '');
        questionFactory.WaistMen = valueTemp;
        valueTemp = $scope.howhip.replace(/'/g, '');
        questionFactory.HipMen = valueTemp;

        valueTemp = $scope.howwaistw.replace(/'/g, '');
        questionFactory.WaistWomen = valueTemp;
        valueTemp = $scope.howhipw.replace(/'/g, '');
        questionFactory.HipWomen = valueTemp;

        var index = $scope.howSidMen.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSidMen.substring(0, index);
        }

        questionFactory.SideBridgeMen = value;

        var index = $scope.howSidMenLeft.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSidMenLeft.substring(0, index);
        }

        questionFactory.SideBridgeMenLeft = value;

        var index = $scope.howSidWomen.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSidWomen.substring(0, index);
        }
        questionFactory.SideBridgeWomen = value;

        var index = $scope.howSidWomenLeft.indexOf(' ');
        var value = 0;
        if (index >= 0) {
            value = $scope.howSidWomenLeft.substring(0, index);
        }
        questionFactory.SideBridgeWomenLeft = value;


        questionFactory.DeepSquat = $scope.selectedDee.id;
        questionFactory.ActiveStraightLegRaise = $scope.selectedAct.id;
        questionFactory.ShoulderClearingTest = $scope.selectedSho.id;
        questionFactory.ShoulderMobility = $scope.selectedMob.id;
        questionFactory.SpinalFlexion = $scope.selectedSpi.id;
        questionFactory.SpinalExtension = $scope.selectedSpiExt.id;

        if ($scope.selectedAge.id == 0) {
            var index = $scope.numnpmen1.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen1.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numnpmen2.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen2.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numnpmen3.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen3.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }
        else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
            var index = $scope.numnpmen4.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen4.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }
        else if ($scope.selectedAge.id >= 7) {
            var index = $scope.numnpmen5.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numnpmen5.substring(0, index);
            }
            questionFactory.PushuptestMen = value;
        }

        questionFactory.PushuptestModifiedWomen = $scope.selectedPusWomenModified.id;

        if ($scope.selectedPusWomenModified.id == 0) {
            if ($scope.selectedAge.id == 0) {
                var index = $scope.numnpwm1.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm1.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                var index = $scope.numnpwm2.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm2.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                var index = $scope.numnpwm3.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm3.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                var index = $scope.numnpwm4.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm4.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
            else if ($scope.selectedAge.id >= 7) {
                var index = $scope.numnpwm5.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numnpwm5.substring(0, index);
                }
                questionFactory.PushuptestWomen = value;
            }
        }
        else {
            if ($scope.selectedAge.id == 0) {
                var index = $scope.numpwm1.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm1.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                var index = $scope.numpwm2.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm2.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                var index = $scope.numpwm3.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm3.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = value;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                var index = $scope.numpwm4.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm4.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = $value;
            }
            else if ($scope.selectedAge.id >= 7) {
                var index = $scope.numpwm5.indexOf(' ');
                var value = 0;
                if (index >= 0) {
                    value = $scope.numpwm5.substring(0, index);
                }
                questionFactory.PushuptestWomenModified = value;
            }
        }


        if ($scope.selectedAge.id == 0) {
            var index = $scope.numMBCMpwm1.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCMpwm1.substring(0, index);
            }
            questionFactory.MBThrowMen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numMBCMpwm2.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCMpwm2.substring(0, index);
            }
            questionFactory.MBThrowMen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numMBCMpwm3.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCMpwm3.substring(0, index);
            }
            questionFactory.MBThrowMen = value;
        }
        else if ($scope.selectedAge.id >= 5) {
            var index = $scope.numMBCMpwm4.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCMpwm4.substring(0, index);
            }
            questionFactory.MBThrowMen = value;
        }

        if ($scope.selectedAge.id == 0) {
            var index = $scope.numMBCWpwm1.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCWpwm1.substring(0, index);
            }
            questionFactory.MBThrowWomen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numMBCWpwm2.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCWpwm2.substring(0, index);
            }
            questionFactory.MBThrowWomen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numMBCWpwm3.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCWpwm3.substring(0, index);
            }
            questionFactory.MBThrowWomen = value;
        }
        else if ($scope.selectedAge.id >= 5) {
            var index = $scope.numMBCWpwm4.indexOf('\'');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCWpwm4.substring(0, index);
            }
            questionFactory.MBThrowWomen = value;
        }

        if ($scope.selectedAge.id == 0) {
            var index = $scope.numMBCOOWpwm1.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWpwm1.substring(0, index);
            }
            questionFactory.CoopertestMen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numMBCOOWpwm2.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWpwm2.substring(0, index);
            }
            questionFactory.CoopertestMen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numMBCOOWpwm3.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWpwm3.substring(0, index);
            }
            questionFactory.CoopertestMen = value;
        }
        else if ($scope.selectedAge.id >= 5) {
            var index = $scope.numMBCOOWpwm4.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWpwm4.substring(0, index);
            }
            questionFactory.CoopertestMen = value;
        }

        if ($scope.selectedAge.id == 0) {
            var index = $scope.numMBCOOWOpwm1.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWOpwm1.substring(0, index);
            }
            questionFactory.CoopertestWomen = value;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            var index = $scope.numMBCOOWOpwm2.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWOpwm2.substring(0, index);
            }
            questionFactory.CoopertestWomen = value;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            var index = $scope.numMBCOOWOpwm3.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWOpwm3.substring(0, index);
            }
            questionFactory.CoopertestWomen = value;
        }
        else if ($scope.selectedAge.id >= 5) {
            var index = $scope.numMBCOOWOpwm4.indexOf(' ');
            var value = 0;
            if (index >= 0) {
                value = $scope.numMBCOOWOpwm4.substring(0, index);
            }
            questionFactory.CoopertestWomen = $scope.value;
        }

        questionFactory.RateFitness = $scope.selectedRated.id;
        questionFactory.RankFitness = $scope.selectedLife.id;
        questionFactory.Particpe = $scope.selectedParticipated.id;
        questionFactory.Planing = $scope.selectedPlaning.id;

        questionFactory.Genderpts = 0;
        questionFactory.Agetpts = 0;
        questionFactory.HowHeightpts = $scope.BMILocal;
        questionFactory.HowWeightpts = 0;
        questionFactory.CardioVascularHealthpts = $scope.selectedCar.value;
        questionFactory.ChestPainpts = $scope.selectedChe.value;
        questionFactory.FatherDiagnosedpts = $scope.selectedFat.value;
        questionFactory.MotherDiagnosedpts = $scope.selectedMot.value;
        questionFactory.Diabetespts = $scope.selectedDiabetes.value;
        questionFactory.ModerateExercisepts = $scope.selectedMod.value;
        questionFactory.Vigorouspts = $scope.selectedVig.value;;
        questionFactory.Sittingpts = $scope.selectedSit.value;
        questionFactory.Smokepts = $scope.selectSmo.value;
        questionFactory.Secondhandsmokepts = $scope.selectedSmokes.value;
        questionFactory.Alcoholpts = $scope.selectAlc.value;
        questionFactory.OralContraceptivepts = 0;
        //questionFactory.OralContraceptivepts = $scope.selectedOra.value;
        questionFactory.Antibioticspts = $scope.selectedAnt.value;
        questionFactory.Systolicpts = $scope.selectedSys.value;
        questionFactory.Diastolicpts = $scope.selectedDiastolic.value;

        questionFactory.WaisttoHipMenpts = $scope.selectedWaiMen.value;;
        questionFactory.WaisttoHipWomenpts = $scope.selectedWaiWomen.value;

        questionFactory.SideBridgeMenpts = $scope.selectedSidMen.value;
        questionFactory.SideBridgeWomenpts = $scope.selectedSidWomen.value;
        questionFactory.DeepSquatpts = $scope.selectedDee.value;

        questionFactory.ActiveStraightLegRaisepts = $scope.selectedAct.value;
        questionFactory.ShoulderMobilitypts = $scope.selectedMob.value;

        questionFactory.ShoulderClearingTestpts = $scope.selectedSho.value;
        questionFactory.SpinalFlexionpts = $scope.selectedSpi.value;
        questionFactory.SpinalExtensionpts = $scope.selectedSpiExt.value;

        if ($scope.radioGender) {
            if ($scope.selectedAge.id == 0) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen3.value;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen4.value;
            }
            else if ($scope.selectedAge.id >= 7) {
                questionFactory.PushuptestMenpts = $scope.selectedPusMen5.value;
            }

            if ($scope.selectedAge.id == 0) {
                questionFactory.MBThrowMenpts = $scope.selectedMBMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.MBThrowMenpts = $scope.selectedMBMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.MBThrowMenpts = $scope.selectedMBMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                questionFactory.MBThrowMenpts = $scope.selectedMBMen4.value;
            }

            if ($scope.selectedAge.id == 0) {
                questionFactory.CoopertestMenpts = $scope.selectedCooMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.CoopertestMenpts = $scope.selectedCooMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.CoopertestMenpts = $scope.selectedCooMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                questionFactory.CoopertestMenpts = $scope.selectedCooMen4.value;
            }
        }
        else {
            questionFactory.PushuptestModifiedWomenpts = 0;

            if ($scope.selectedPusWomenModified.id == 0) {
                if ($scope.selectedAge.id == 0) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM1.value;
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM2.value;
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM3.value;
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM4.value;
                }
                else if ($scope.selectedAge.id >= 7) {
                    questionFactory.PushuptestWomenpts = $scope.selectedNPWM5.value;
                }
            }
            else {
                if ($scope.selectedAge.id == 0) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM1.value;
                }
                else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM2.value;
                }
                else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM3.value;
                }
                else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM4.value;
                }
                else if ($scope.selectedAge.id >= 7) {
                    questionFactory.PushuptestWomenModifiedpts = $scope.selectedPWM5.value;
                }
            }

            if ($scope.selectedAge.id == 0) {
                questionFactory.MBThrowWomenpts = $scope.selectedMBWOMen1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.MBThrowWomenpts = $scope.selectedMBWOMen2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.MBThrowWomenpts = $scope.selectedMBWOMen3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                questionFactory.MBThrowWomenpts = $scope.selectedMBWOMen4.value;
            }

            if ($scope.selectedAge.id == 0) {
                questionFactory.CoopertestWomenpts = $scope.selectedCW1.value;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                questionFactory.CoopertestWomenpts = $scope.selectedCW2.value;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                questionFactory.CoopertestWomenpts = $scope.selectedCW3.value;
            }
            else if ($scope.selectedAge.id >= 5) {
                questionFactory.CoopertestWomenpts = $scope.selectedCW4.value;
            }
        }


        questionFactory.ateFitnesspts = 0;
        questionFactory.RankFitnesspts = 0;
        questionFactory.Particpepts = 0.


        if (questionFactory.datelocal == undefined || questionFactory.datelocal == null) {
            questionFactory.datelocal = new Date();
        }
        questionFactory.userid = $rootScope.userId.userId;
        questionFactory.firstname = $scope.firstname;
        questionFactory.lastname = $scope.lastname;


        localStorage.setItem("questionFactory", JSON.stringify(questionFactory));

        saveStateForm();
    }


    var saveStateForm = function () {

        queryQuestionTempFactory.phoneType = $rootScope.phoneDevice;
        queryQuestionTempFactory.countQ = countQ;
        queryQuestionTempFactory.totalQ = totalQ;
        queryQuestionTempFactory.pageQ = pageQ;
        localStorage.setItem("queryQuestionTempFactory", JSON.stringify(queryQuestionTempFactory));



    }



    $scope.savedata = function () {

        SaveInCookie();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var yyyy = questionFactory.datelocal.getFullYear().toString();
        var mm = (questionFactory.datelocal.getMonth()); // getMonth() is zero-based
        var dd = questionFactory.datelocal.getDate().toString();

        $scope.datedone = monthNames[mm] + " " + dd + " of " + yyyy;

        doSave();
    }


    var doSave = function () {


        $("#dialog").dialog("open");

        apiServices.getData(questionFactory, 'api/Questions/AddUpdate')
        .then(function (data) {
            //stopTime = $interval(backTop, $rootScope.dialogTimer);
            $("#dialog").dialog("close");
            $scope.hidereview = true;
            $scope.doneSubmitwebPoints = false;
            $scope.doneSubmitweb = true;
            $scope.hideSubmitweb = true;
            $scope.hideBackweb = true;
            $scope.puntos = $scope.total4;
            $scope.avarage = changeAbbrev(data.avarage);
            $scope.totalUsers = data.totalUsers;
            $scope.hideEmail = true;
            $scope.hidepoints = false;
            $scope.hideSave = true;
            $scope.hideBack = true;
            $scope.hideAll = true;

            localStorage.removeItem('queryQuestionTempFactory');
            localStorage.removeItem('questionFactory');
            


        }, function (error) {
            $("#dialog").dialog("close");
            $scope.hidereview = true;
            $scope.hideEmail = true;
            $scope.hideerrors = false;
            $scope.hideSubmitweb = true;
            $scope.hideSaveReview = true;
            $scope.hideerrors = false;
            $scope.errorMessage = error;

        });
    }

    $scope.back = function () {
        if (!$scope.hideEmail) {
            pageQ = 0;
            saveStateForm();

            $scope.questions = false;
            $scope.hideEmail = true;
        }
        else if (!$scope.questions || !$scope.hidepoints) {
            pageQ = 0;
            saveStateForm();

            backTop();
        }
        else if (!$scope.hideerrors) {
            $scope.hideerrors = true;
            $scope.hidereview = false;
            $scope.hideSaveReview = false;
        }
    }

    $scope.submitweb = function () {
        if (!$scope.hidereview) {
            if ($scope.firstname != undefined && $scope.firstname != "" &&
                $scope.lastname != undefined && $scope.lastname != "" &&
                $scope.email != undefined && $scope.email != "") {
                $scope.savedata();
            }
        }
        else if (!$scope.hideEmail && $scope.email != "") {
            if ($scope.firstname != undefined && $scope.firstname != "" &&
                $scope.lastname != undefined && $scope.lastname != "" &&
                $scope.email != undefined && $scope.email != "") {
                $scope.hideEmail = true;

                if ($rootScope.phoneDevice >= 0) {
                    $scope.hideSave = true;
                    $scope.hideSaveReview = false;
              
                    showReview();
                }
                else {
                    $scope.savedata();
                }
            }
        }
        else if (!$scope.questions) {
            pageQ = 1;
            saveStateForm();
            $scope.questions = true;
            $scope.hideEmail = false;
            if (state == "1") {
                $scope.emailDisable = true;
            }
            else {
                $scope.emailDisable = false;
            }
            $scope.emailDisable = false;
        }
    }

    var showReview = function () {
        $scope.hidereview = false;
        $scope.hideBack = true;

        $scope.disablegendermenWaiReview = true;
        $scope.disablegendermenWai2Review = true;

        $scope.disablegendermenSidReview = true;


        $scope.disablegendermen1Review = true;
        $scope.disablegendermen2Review = true;
        $scope.disablegendermen3Review = true;
        $scope.disablegendermen4Review = true;
        $scope.disablegendermen5Review = true;

        $scope.disableMBCM1Review = true;
        $scope.disableMBCM2Review = true;
        $scope.disableMBCM3Review = true;
        $scope.disableMBCM4Review = true;

        $scope.disablegendercoomen1Review = true;
        $scope.disablegendercoomen2Review = true;
        $scope.disablegendercoomen3Review = true;
        $scope.disablegendercoomen4Review = true;

        $scope.disablegenderwomenModReview = true;

        $scope.disablegenderwomenWaiReview = true;
        $scope.disablegenderwomenWai2Review = true;

        $scope.disablegenderwomenSidReview = true;

        $scope.disablegendermod1womenReview = true;
        $scope.disablegendermod2womenReview = true;
        $scope.disablegendermod3womenReview = true;
        $scope.disablegendermod4womenReview = true;
        $scope.disablegendermod5womenReview = true;

        $scope.disablegender1womenReview = true;
        $scope.disablegender2womenReview = true;
        $scope.disablegender3womenReview = true;
        $scope.disablegender4womenReview = true;
        $scope.disablegender5womenReview = true;

        $scope.disableMBCW1Review = true;
        $scope.disableMBCW2Review = true;
        $scope.disableMBCW3Review = true;
        $scope.disableMBCW4Review = true;

        $scope.disablegendercoowomen1Review = true;
        $scope.disablegendercoowomen2Review = true;
        $scope.disablegendercoowomen3Review = true;
        $scope.disablegendercoowomen4Review = true;

        if ($scope.selectedGender.id == 0) {

            $scope.disablegendermenWaiReview = false;
            $scope.disablegendermenWai2Review = false;

            $scope.disablegendermenSidReview = false;
        
          
            genderManReview(false);
            MBCMReview(false);
            coomenReview(false);
        }
        else 
        {
            $scope.disablegenderwomenModReview = false;

            $scope.disablegenderwomenWaiReview = false;
            $scope.disablegenderwomenWai2Review = false;

            $scope.disablegenderwomenSidReview = false;

           

            genderWoManReview(false);
            MBCWReview(false);
            coowomenReview(false);

        }

        $('#idfirstname').focus();
    }

    var genderManReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendermen1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendermen2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendermen3Review = opt;
        }
        else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
            $scope.disablegendermen4Review = opt;
        }
        else if ($scope.selectedAge.id >= 7) {
            $scope.disablegendermen5Review = opt;
        }
    }

    var MBCMReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disableMBCM1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disableMBCM2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disableMBCM3Review = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disableMBCM4Review = opt;
        }
    }

    var coomenReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendercoomen1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendercoomen2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendercoomen3Review = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disablegendercoomen4Review = opt;
        }

    }

    var genderWoManReview = function (opt) {
        if ($scope.selectedPusWomenModified.id == 1) {

            if ($scope.selectedAge.id == 0) {
                $scope.disablegendermod1womenReview = opt;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.disablegendermod2womenReview = opt;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.disablegendermod3womenReview = opt;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.disablegendermod4womenReview = opt;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.disablegendermod5womenReview = opt;
            }
        }
        else {

            if ($scope.selectedAge.id == 0) {
                $scope.disablegender1womenReview = opt;
            }
            else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
                $scope.disablegender2womenReview = opt;
            }
            else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
                $scope.disablegender3womenReview = opt;
            }
            else if ($scope.selectedAge.id == 5 || $scope.selectedAge.id == 6) {
                $scope.disablegender4womenReview = opt;
            }
            else if ($scope.selectedAge.id >= 7) {
                $scope.disablegender5womenReview = opt;
            }
        }
    }

    var MBCWReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disableMBCW1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disableMBCW2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disableMBCW3Review = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disableMBCW4Review = opt;
        }
    }

    var coowomenReview = function (opt) {
        if ($scope.selectedAge.id == 0) {
            $scope.disablegendercoowomen1Review = opt;
        }
        else if ($scope.selectedAge.id == 1 || $scope.selectedAge.id == 2) {
            $scope.disablegendercoowomen2Review = opt;
        }
        else if ($scope.selectedAge.id == 3 || $scope.selectedAge.id == 4) {
            $scope.disablegendercoowomen3Review = opt;
        }
        else if ($scope.selectedAge.id >= 5) {
            $scope.disablegendercoowomen4Review = opt;
        }
    }




    var backTop = function () {
        localStorage.removeItem('queryQuestionTempFactory');
        localStorage.removeItem('questionFactory');

        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-leon-questions-user');
    }

    /// start phone
    var startPhoneValues = function () {




        if ($rootScope.phoneDevice >= 0) {
            $scope.radioGender = null;
            $scope.radioCar = null;
            $scope.radioChe = null;
            $scope.radioFat = null;
            $scope.radioMot = null;
            $scope.radioDia = null;
            $scope.radioSmo = null;
            $scope.radioOra = null;
            $scope.radioOrg = null;
            $scope.radioPlaning = null;
            $scope.radioSho = null;
            $scope.radioSpi = null;
            $scope.radioSpiExt = null;
            $scope.radioMPW = null;
            $scope.radiofitness = null;
        }
    }


    $scope.changeMale = function () {
        if (flagImgFamele == 1) {
            $scope.imgfemale = "styles/mztimgs/women.png";
            flagImgFamele = 0;
        }
        if (flagImgMale == 0) {
            $scope.imgmale = "styles/mztimgs/men-anaranjado.png";
            flagImgMale = 1;
            $scope.radioGender = true;
        }
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.changeFamele = function () {
        if (flagImgMale == 1) {
            $scope.imgmale = "styles/mztimgs/men.png";
            flagImgMale = 0;
        }
        if (flagImgFamele == 0) {
            $scope.imgfemale = "styles/mztimgs/women-anaranjado.png";
            flagImgFamele = 1;
            $scope.radioGender = false;
        }
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioCarNo = function () {
        $("#doctor-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#doctor-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioCar = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioCarYes = function () {
        $("#doctor-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#doctor-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioCar = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioCheNo = function () {
        $("#pain-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#pain-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioChe = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioCheYes = function () {
        $scope.radioChe = false;
        $("#pain-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#pain-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioChe = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioFatNo = function () {
        $("#father-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#father-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioFat = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioFatYes = function () {
        $("#father-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#father-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioFat = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioMotNo = function () {
        $("#mother-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#mother-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioMot = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioMotYes = function () {
        $("#mother-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#mother-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioMot = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioDiaNo = function () {
        $("#either-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#either-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioDia = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioDiaYes = function () {
        $("#either-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#either-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioDia = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.moderate = function (value) {
        if (value == 0) {
            $("#moderate-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#moderate-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#moderate-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#moderate-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#moderate-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#moderate-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#moderate-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#moderate-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#moderate-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedMod = $scope.Mods[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.vigorous = function (value) {
        if (value == 0) {
            $("#vigorous-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#vigorous-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#vigorous-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#vigorous-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#vigorous-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#vigorous-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#vigorous-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#vigorous-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#vigorous-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }


        $scope.selectedVig = $scope.Vigs[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.sitting = function (value) {
        if (value == 0) {
            $("#time-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#time-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#time-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#time-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#time-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#time-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#time-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#time-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#time-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedSit = $scope.Sits[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.smoke = function (value) {
        if (value == 0) {
            $("#smoke-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#smoke-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#smoke-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#smoke-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 4) {
            $("#smoke-color5").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color6").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 5) {
            $("#smoke-color6").css("background-color", "rgba(255, 162, 0, 1)");
            $("#smoke-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#smoke-color5").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectSmo = $scope.Smos[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.goradioSmoNo = function () {
        $("#second-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#second-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioSmo = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSmoYes = function () {
        $("#second-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#second-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioSmo = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.alcohol = function (value) {
        if (value == 0) {
            $("#alcohol-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#alcohol-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#alcohol-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#alcohol-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#alcohol-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#alcohol-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#alcohol-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#alcohol-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#alcohol-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectAlc = $scope.Alcs[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.goradioOraNo = function () {
        $("#oral-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#oral-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioOra = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioOraYes = function () {
        $("#oral-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#oral-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioOra = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.antibiotics = function (value) {
        if (value == 0) {
            $("#length-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#length-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#length-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#length-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#length-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#length-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#length-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#length-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#length-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }


        $scope.selectedAnt = $scope.Ants[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.fitness = function (value) {
        if (value == 0) {
            $("#fitness-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color5").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#fitness-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color5").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 2) {
            $("#fitness-color3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color4").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color5").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 3) {
            $("#fitness-color4").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color5").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 4) {
            $("#fitness-color5").css("background-color", "rgba(255, 162, 0, 1)");
            $("#fitness-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $("#fitness-color4").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedRated = $scope.selectedRateds[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.lifetime = function (value) {
        if (value == 0) {
            $("#lifetime-color1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#lifetime-color2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#lifetime-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $scope.radiofitness = true;
        }
        else {
            $("#lifetime-color2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#lifetime-color1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#lifetime-color3").css("background-color", "rgba(232,  232,  233,  1)");
            $scope.radiofitness = false;
        }

        //$scope.selectedLife = $scope.selectedLifes[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioOrgNo = function () {
        $("#organized-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#organized-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioOrg = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioOrgYes = function () {
        $("#organized-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#organized-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioOrg = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioPlaningNo = function () {
        $("#planing-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#planing-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioPlaning = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioPlaningYes = function () {
        $("#planing-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#planing-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioPlaning = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.ilumination = function (value) {
        var $iluminationText1 = $('#iluminationText1');
        var $iluminationText2 = $('#iluminationText2');
        var $iluminationText3 = $('#iluminationText3');

        if (value == 2) {
            $("#ilumination1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ilumination2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ilumination3").css("background-color", "rgba(232,  232,  233,  1)");

            $('#deep-green-wShadow').animate({
                height: 165
            }, 200);

            $iluminationText1.slideDown('fast', function () {
                $('#deep-blue-wShadow').animate({
                    height: 110
                }, 200);

                $('#deep-red-wShadow').animate({
                    height: 110
                }, 200);

                $('.deep-green').animate({
                    height: 165
                }, 200);

                $('.deep-red').animate({
                    height: 110
                }, 200);

                $('.deep-blue').animate({
                    height: 110
                }, 200);

                $iluminationText2.slideUp();
                $iluminationText3.slideUp();

            });
        }
        else if (value == 1) {
            $("#ilumination2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ilumination1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ilumination3").css("background-color", "rgba(232,  232,  233,  1)");

            $('#deep-blue-wShadow').animate({
                height: 165
            }, 200);

            $iluminationText2.slideDown('fast', function () {

                $('#deep-green-wShadow').animate({
                    height: 110
                }, 200);

                $('#deep-red-wShadow').animate({
                    height: 110
                }, 200);

                $('.deep-green').animate({
                    height: 110
                }, 200);

                $('.deep-red').animate({
                    height: 110
                }, 200);

                $('.deep-blue').animate({
                    height: 165
                }, 200);


                $iluminationText1.slideUp();
                $iluminationText3.slideUp();

            });



        }
        else if (value == 0) {
            $("#ilumination3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ilumination1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ilumination2").css("background-color", "rgba(232,  232,  233,  1)");

            $('#deep-red-wShadow').animate({
                height: 165
            }, 200);

            $iluminationText3.slideDown('fast', function () {
                $('#deep-blue-wShadow').animate({
                    height: 110
                }, 200);

                $('#deep-green-wShadow').animate({
                    height: 110
                }, 200);

                $('.deep-green').animate({
                    height: 110
                }, 200);

                $('.deep-red').animate({
                    height: 165
                }, 200);

                $('.deep-blue').animate({
                    height: 110
                }, 200);

                $iluminationText1.slideUp();
                $iluminationText2.slideUp();

            });


        }

        $scope.selectedDee = $scope.Dees[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.actleg = function (value) {
        if (value == 2) {
            $("#idactlegs1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#idactlegs2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#idactlegs3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#idactlegs2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#idactlegs1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#idactlegs3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 0) {
            $("#idactlegs3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#idactlegs1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#idactlegs2").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedAct = $scope.Acts[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.shomob = function (value) {
        if (value == 2) {
            $("#ishomob1").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ishomob2").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ishomob3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 1) {
            $("#ishomob2").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ishomob1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ishomob3").css("background-color", "rgba(232,  232,  233,  1)");
        }
        else if (value == 0) {
            $("#ishomob3").css("background-color", "rgba(255, 162, 0, 1)");
            $("#ishomob1").css("background-color", "rgba(232,  232,  233,  1)");
            $("#ishomob2").css("background-color", "rgba(232,  232,  233,  1)");
        }

        $scope.selectedMob = $scope.Mobs[value];
        $scope.goTotal();
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioShoClearNo = function () {
        $("#shoclear-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#shoclear-color2").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioSho = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioShoClearYes = function () {
        $("#shoclear-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#shoclear-color1").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioSho = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSpiNo = function () {
        $("#spi-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#spi-color2").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioSpi = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSpiYes = function () {
        $("#spi-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#spi-color1").css("background-color", "rgba(232,  232,  233,  1)");
        $scope.radioSpi = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSpiExtNo = function () {
        $("#spiext-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#spiext-color2").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioSpiExt = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioSpiExtYes = function () {
        $("#spiext-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#spiext-color1").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioSpiExt = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioWmodNo = function () {
        $("#mwomen-color1").css("background-color", "rgba(255,  162,  2,  1)");
        $("#mwomen-color2").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioMPW = true;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }

    }

    $scope.goradioWmodYes = function () {
        $("#mwomen-color2").css("background-color", "rgba(255, 162, 2, 1)");
        $("#mwomen-color1").css("background-color", "rgba(232,  232,  233,  1)");

        $scope.radioMPW = false;
        $scope.hideNext = false;
        if (countSubmit < countQ) {
            countSubmit = countQ;
        }


    }

    $scope.mostrarToolTip = function () {
        $element.find("#tooltip-gender").modal('show');
    };

    $scope.toolTipHearthCondition = function () {
        $element.find("#tooltip-hearth-condition").modal('show');
    };

    $scope.toolTipFamilyHistory = function () {
        $element.find("#tooltip-family-history").modal('show');
    };

    $scope.toolTipActivity = function () {
        $element.find("#tooltip-activity").modal('show');
    };

    $scope.toolTipWaist = function () {
        $element.find("#tooltip-waist").modal('show');
    };

    $scope.toolTipWaist2 = function () {
        $element.find("#tooltip-waist2").modal('show');
    };

    $scope.toolTipDeepSquat = function () {
        $element.find("#tooltip-deepsquat").modal('show');
    }

    $scope.toolTipPushUp = function () {
        $element.find("#tooltip-push-up").modal('show');
    }

    $scope.toolTipMbThrow = function () {
        $element.find("#tooltip-mb-throw").modal('show');
    };

    $scope.toolTipSystolic = function () {
        $element.find("#tooltip-systolic").modal('show');
    };

    $scope.toolTipActiveLeg = function () {
        $element.find("#tooltip-activeLeg").modal('show');
    };

    $scope.toolTipShoulder = function () {
        $element.find("#tooltip-shoulder").modal('show');
    };

    $scope.toolTipSideBridge = function () {
        $element.find("#tooltip-sideBridge").modal('show');
    };

    $scope.toolTipSideBridge2 = function () {
        $element.find("#tooltip-sideBridge2").modal('show');
    };

    $scope.toolTipMB1 = function () {
        $element.find("#tooltip-mb1").modal('show');
    };

    $scope.toolTipMB2 = function () {
        $element.find("#tooltip-mb2").modal('show');
    };

    $scope.toolTipMB3 = function () {
        $element.find("#tooltip-mb3").modal('show');
    };

    $scope.toolTipMB4 = function () {
        $element.find("#tooltip-mb4").modal('show');
    };

    $scope.toolTipMB5 = function () {
        $element.find("#tooltip-mb5").modal('show');
    };

    $scope.toolTipCooper = function () {
        $element.find("#tooltip-cooper").modal('show');
    };

    $scope.goradioScoreQ = function (value) {
        pageQ = 0;
        SaveInCookie();
        $scope.hideScoreQ = true;
        if (value == 0) {
            $scope.hideAll = false;
        }
        else {

            $scope.hidepoints = false;
            $scope.doneSubmitwebPoints = false;

            localStorage.removeItem('queryQuestionTempFactory');
            localStorage.removeItem('questionFactory');

        }
    }

    startPhoneValues();

    init();


});

app.directive('mztLeonQuestionsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-questions/mzt-leon-questions-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                fields: {
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'Empty email is invalid'
                            },
                        }
                    },
                    firstname: {
                        validators: {
                            notEmpty: {
                                message: 'Empty first name is invalid'
                            },
                        }
                    },
                    lastname: {
                        validators: {
                            notEmpty: {
                                message: 'Empty last name invalid is invalid'
                            },
                        }
                    },
                }
            })
        },
        controller: 'mztLeonQuestionsCtrl as datatables'
    }

});

/// <reference path="../../../../forms/module.js" />
"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztLeonQuestionsUserCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope, queryQuestionFactory, apiServices) {
    localStorage.removeItem('queryQuestionTempFactory');
    localStorage.removeItem('questionFactory');

    if ($rootScope.phoneDevice >= 0) {
        
        var value = $("#left-panel").css("left");
        if (value != undefined && value == '0px') {
            $("#id-toggle-menu").click();
        }

    }


    var searchManyData = function () {
        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push($scope.textSearch.trim());
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Questions/QueryUserQuestions')
        .then(function (data) {
            $scope.questionsList = [];
            for (var x = 0; x < data.length; x++) {
                $scope.questionsList.push(
                    new queryQuestionFactory.copy(data[x].id, data[x].email, data[x].firstName, data[x].lastName)
                );
            }
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });
    }

    $scope.clickSearch = function () {
        if ($scope.textSearch != "" && $scope.textSearch.length > 2) {
            searchManyData();
        }
    }

    $scope.go = function (question) {
        $window.sessionStorage["question"] = JSON.stringify(question);
        $window.sessionStorage["statequestion"] = "1"; // Operacion update
        goQuestions();
    }

    $scope.save = function () {
        $window.sessionStorage["statequestion"] = "0"; // Operacion insert
        $location.path('/form/mzt-leon-questions');
        goQuestions();
    }

    var goQuestions = function () {
        if ($rootScope.phoneDevice >= 0) {
            $location.path('/form/mzt-leon-phone-questions');
        }
        else {
            $location.path('/form/mzt-leon-questions');
        }

    }


    $scope.showclient = function () {
        $location.path('/form/mzt-leon-providers');
    }


    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2),
    ];

    var init = function () {

        $("#dialog").dialog("open");

        var arreglo = [];
        arreglo.push($rootScope.userId.userId);
        arreglo.push("");
        if (!$rootScope.adminRole) {
            arreglo.push("1");
        }
        else {
            arreglo.push("0");
        }
        var model = { parameters: arreglo };
        apiServices.getData(model, 'api/Questions/QueryUserQuestions')
        .then(function (data) {
            $scope.questionsList = [];
            for (var x = 0; x < data.length; x++) {
                $scope.questionsList.push(
                    new queryQuestionFactory.copy(data[x].id, data[x].email, data[x].firstName, data[x].lastName)
                );
            }
            $("#dialog").dialog("close");
        }, function (error) {
            $("#dialog").dialog("close");
            $scope.errorMessage = error;
            var myEl = $element.find('#idErrorMessage');
            myEl.click();
        });

    }


    init();


});

app.directive('mztLeonQuestionsUserForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-leon-questions-user/mzt-leon-questions-user-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
                fields: {
                    search: {
                        validators: {
                            notEmpty: {
                                message: 'Empty not allowed'
                            },
                            stringLength: {
                                min: 3,
                                message: 'At less 3 characters are allowed'
                            }
                        }
                    },
                }
            })
        },
        controller: 'mztLeonQuestionsUserCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztProvidersAssessmentsCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
   
    var init = function () {
        $scope.subscriberstemp = [];

        for (var x = 0; x < $rootScope.subscribers.length; x++) {
            if ($rootScope.subscribers[x].idcompany == $rootScope.idcompany) {
                var data = {
                    email: $rootScope.subscribers[x].iduser
                }
                $scope.subscriberstemp.push(data);
            }
        }
    }

    $scope.go = function (subscriber) {
        $window.sessionStorage["subscriber"] = JSON.stringify(subscriber);
        $location.path('/form/mzt-providers-user-assessments');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0).notSortable()
    ];

    init();
});

app.directive('mztProvidersAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-providers-assessments/mzt-providers-assessments-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztProvidersAssessmentsCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztProvidersAddupdateAssessmentsCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

    var id;
    var init = function () {
        var state = $window.sessionStorage["assessmentstatus"];

        if (state == "1") {
            var assessment = JSON.parse($window.sessionStorage["assessment"]);
            id = assessment.id;
            $scope.nombreuser = assessment.iduser;
            $scope.nombre = assessment.nombre;
            $scope.days = assessment.days;
            $scope.cant = assessment.points;
            $scope.htmlcontent = assessment.htmlcontent;
            $scope.avarage = assessment.avarage;
            //$scope.status = true;
        }
    }

    $scope.save = function () {
        $scope.messageQuestion = "Are you sure to save it?";
        var myEl = $element.find('#openQuestion');
        myEl.click();
    }

    var stopTime;

    $scope.savedata = function () {
        doSave();
    }

    var doSave = function () {
        $("#dialog").dialog("open");

        for (var x = 0; x < $rootScope.userassessments.length; x++) {
         
            if ($rootScope.userassessments[x].iduser == $scope.nombreuser &&
                $rootScope.userassessments[x].id == id) {
                $rootScope.userassessments[x].nombre = $scope.nombre;
                $rootScope.userassessments[x].days = $scope.days;
                $rootScope.userassessments[x].points = $scope.cant;
                $rootScope.userassessments[x].htmlcontent = $scope.htmlcontent;
                $rootScope.userassessments[x].avarage = $scope.avarage;

            }
        }

       
        localStorage.setItem('userassessments', JSON.stringify($rootScope.userassessments));

        stopTime = $interval(backTop, $rootScope.dialogTimer);
    }

    

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-providers-user-assessments');
    }

    init();
    
});
    

app.directive('mztProvidersAddupdateAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-providers-addupdate-assessments/mzt-providers-addupdate-assessments-form.tpl.html',
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
        controller: 'mztProvidersAddupdateAssessmentsCtrl as datatables'
    }

});

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

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztProvidersUsersCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
 
    var init = function()
    {
        $scope.subscriberstemp = [];
        
        for (var x = 0; x < $rootScope.subscribers.length; x++)
        {
            if ($rootScope.subscribers[x].idcompany == $rootScope.idcompany)
            {
                var data = {
                    email: $rootScope.subscribers[x].iduser
                }
                $scope.subscriberstemp.push(data);
            }
        }
    }

    $scope.go = function (subscriber) {
        $window.sessionStorage["subscriber"] = JSON.stringify(subscriber);
        $window.sessionStorage["subscriberstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-providers-users-update');
    }

    $scope.save = function () {
        $location.path('/form/mzt-providers-users-update');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0).notSortable()
    ];

    init();
  
});

app.directive('mztProvidersUsersForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-providers-users/mzt-providers-users-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztProvidersUsersCtrl as datatables'
    }

});

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





"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztRewardsLionCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
    
    $scope.save = function () {
        $location.path('/form/mzt-rewards-lion-update');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1).notSortable(),
     DTColumnBuilder.newColumn(2).notSortable()
    ];

  
});

app.directive('mztRewardsLionForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-rewards-lion/mzt-rewards-lion-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztRewardsLionCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztRewardsLionUpdateCtrl', function ($scope, $window, $location, $rootScope, $element, $interval, uuid2) {

    $scope.save = function () {
        $scope.messageQuestion = "Are you sure to save it?";
        var myEl = $element.find('#openQuestion');
        myEl.click();
    }

    var stopTime;

    $scope.savedata = function () {
        doSave();
    }

    var doSave = function () {
        $("#dialog").dialog("open");
        var reward = {
            id: uuid2.newguid(),
            nombre: $scope.nombre,
            cant : $scope.cant,
            level: $scope.level
        }

        $rootScope.rewards.push(reward);

        localStorage.setItem('rewards', JSON.stringify($rootScope.rewards));

        stopTime = $interval(backTop, $rootScope.dialogTimer);
    }

    $scope.back = function () {
        backTop();
    }

    var backTop = function () {
        $interval.cancel(stopTime);
        $("#dialog").dialog("close");
        $location.path('/form/mzt-rewards-lion');
    }

    
});
    

app.directive('mztRewardsLionUpdateForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-rewards-lion-update/mzt-rewards-lion-update-form.tpl.html',
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
        controller: 'mztRewardsLionUpdateCtrl as datatables'
    }

});

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

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztUserAssessmentsCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {
    var init = function () {
        
        $scope.assessmenttemp = [];
      
        for (var x = 0; x < $rootScope.userassessments.length; x++) {
            if ($rootScope.userassessments[x].iduser == $rootScope.email) {
                var data = {
                    id: $rootScope.userassessments[x].id,
                    iduser: $rootScope.userassessments[x].nombre,
                    avarage: $rootScope.userassessments[x].avarage,
                    points: 0
                }
                if ($rootScope.userassessments[x].avarage >= 100) {
                    data.avarage = $rootScope.userassessments[x].points;
                }
                $scope.assessmenttemp.push(data);
            }
        }
    }


    $scope.go = function (assessment) {
        var temp;
        for (var x = 0; x < $rootScope.userassessments.length; x++) {
            if ($rootScope.userassessments[x].iduser == $rootScope.email &&
                $rootScope.userassessments[x].id == assessment.id) {
                temp = $rootScope.userassessments[x];
            }
        }
     
        $window.sessionStorage["assessment"] = JSON.stringify(temp);
        $window.sessionStorage["assessmentstatus"] = "1"; // Operacion update
        $location.path('/form/mzt-user-show-assessment');
    }

    this.standardOptions = DTOptionsBuilder.newOptions()
    .withDisplayLength($rootScope.rowsForTable)
    .withDOM("" + "t" + "")
    .withBootstrap();
    this.standardColumns = [
     DTColumnBuilder.newColumn(0),
     DTColumnBuilder.newColumn(1),
     DTColumnBuilder.newColumn(2)
    ];

    init();
  
});

app.directive('mztUserAssessmentsForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-user-assessments/mzt-user-assessments-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztUserAssessmentsCtrl as datatables'
    }

});

"use strict";

var app = angular.module('SmartAdmin.Forms')


app.controller('mztUserShowAssessmentCtrl', function ($scope, $window, $element, DTOptionsBuilder, DTColumnBuilder, $location, $rootScope) {

    var id;
    var init = function () {
        var state = $window.sessionStorage["assessmentstatus"];

        if (state == "1") {
            var assessment = JSON.parse($window.sessionStorage["assessment"]);
            id = assessment.id;
            $scope.nombreuser = assessment.iduser;
            $scope.nombre = assessment.nombre;
            $scope.days = assessment.days;
            $scope.cant = assessment.points;
            $scope.htmlcontent = assessment.htmlcontent;
            $scope.avarage = assessment.avarage;
            $scope.status = true;
        }
    }


    $scope.back = function () {
        $location.path('/form/mzt-user-assessments');
    }

    init();
  
});

app.directive('mztUserShowAssessmentForm', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/mzt-user-show-assessment/mzt-user-show-assessment-form.tpl.html',
        link: function (scope, form) {
            form.bootstrapValidator({
            })
        },
        controller: 'mztUserShowAssessmentCtrl as datatables'
    }

});

'use strict';

angular.module('SmartAdmin.Layout').directive('demoStates', function ($rootScope) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'app/_common/layout/directives/demo/demo-states.tpl.html',
        scope: true,
        link: function (scope, element, attributes) {
            element.parent().css({
                position: 'relative'
            });

            element.on('click', '#demo-setting', function () {
                element.toggleClass('activate')
            })
        },
        controller: function ($scope) {
            var $root = $('body');

            $scope.$watch('fixedHeader', function (fixedHeader) {
                localStorage.setItem('sm-fixed-header', fixedHeader);
                $root.toggleClass('fixed-header', fixedHeader);
                if (fixedHeader == false) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });


            $scope.$watch('fixedNavigation', function (fixedNavigation) {
                localStorage.setItem('sm-fixed-navigation', fixedNavigation);
                $root.toggleClass('fixed-navigation', fixedNavigation);
                if (fixedNavigation) {
                    $scope.insideContainer = false;
                    $scope.fixedHeader = true;
                } else {
                    $scope.fixedRibbon = false;
                }
            });


            $scope.$watch('fixedRibbon', function (fixedRibbon) {
                localStorage.setItem('sm-fixed-ribbon', fixedRibbon);
                $root.toggleClass('fixed-ribbon', fixedRibbon);
                if (fixedRibbon) {
                    $scope.fixedHeader = true;
                    $scope.fixedNavigation = true;
                    $scope.insideContainer = false;
                }
            });

            $scope.$watch('fixedPageFooter', function (fixedPageFooter) {
                localStorage.setItem('sm-fixed-page-footer', fixedPageFooter);
                $root.toggleClass('fixed-page-footer', fixedPageFooter);
            });

            $scope.$watch('insideContainer', function (insideContainer) {
                localStorage.setItem('sm-inside-container', insideContainer);
                $root.toggleClass('container', insideContainer);
                if (insideContainer) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });

            $scope.$watch('rtl', function (rtl) {
                localStorage.setItem('sm-rtl', rtl);
                $root.toggleClass('smart-rtl', rtl);
            });

            $scope.$watch('menuOnTop', function (menuOnTop) {
                $rootScope.$broadcast('$smartLayoutMenuOnTop', menuOnTop);
                localStorage.setItem('sm-menu-on-top', menuOnTop);
                $root.toggleClass('menu-on-top', menuOnTop);

                if(menuOnTop)$root.removeClass('minified');
            });

            $scope.$watch('colorblindFriendly', function (colorblindFriendly) {
                localStorage.setItem('sm-colorblind-friendly', colorblindFriendly);
                $root.toggleClass('colorblind-friendly', colorblindFriendly);
            });


            $scope.fixedHeader = localStorage.getItem('sm-fixed-header') == 'true';
            $scope.fixedNavigation = localStorage.getItem('sm-fixed-navigation') == 'true';
            $scope.fixedRibbon = localStorage.getItem('sm-fixed-ribbon') == 'true';
            $scope.fixedPageFooter = localStorage.getItem('sm-fixed-page-footer') == 'true';
            $scope.insideContainer = localStorage.getItem('sm-inside-container') == 'true';
            $scope.rtl = localStorage.getItem('sm-rtl') == 'true';
            $scope.menuOnTop = localStorage.getItem('sm-menu-on-top') == 'true' || $root.hasClass('menu-on-top');
            $scope.colorblindFriendly = localStorage.getItem('sm-colorblind-friendly') == 'true';


            $scope.skins = appConfig.skins;


            $scope.smartSkin = localStorage.getItem('sm-skin') ? localStorage.getItem('sm-skin') : appConfig.smartSkin;

            $scope.setSkin = function (skin) {
                $scope.smartSkin = skin.name;
                $root.removeClass(_.pluck($scope.skins, 'name').join(' '));
                $root.addClass(skin.name);
                localStorage.setItem('sm-skin', skin.name);
                $("#logo img").attr('src', skin.logo);
            };


            if($scope.smartSkin != "smart-style-0"){
                $scope.setSkin(_.find($scope.skins, {name: $scope.smartSkin}))
            }


            $scope.factoryReset = function () {
                $.SmartMessageBox({
                    title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content: "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons: '[No][Yes]'
                }, function (ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });
            }
        }
    }
});
"use strict";

(function ($) {

    $.fn.smartCollapseToggle = function () {

        return this.each(function () {

            var $body = $('body');
            var $this = $(this);

            // only if not  'menu-on-top'
            if ($body.hasClass('menu-on-top')) {


            } else {

                $body.hasClass('mobile-view-activated')

                // toggle open
                $this.toggleClass('open');

                // for minified menu collapse only second level
                if ($body.hasClass('minified')) {
                    if ($this.closest('nav ul ul').length) {
                        $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                        $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                    }
                } else {
                    // toggle expand item
                    $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                    $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                }
            }
        });
    };
})(jQuery);

angular.module('SmartAdmin.Layout').directive('smartMenu', function ($state, $rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var $body = $('body');

            var $collapsible = element.find('li[data-menu-collapse]');

            var bindEvents = function(){
                $collapsible.each(function (idx, li) {
                    var $li = $(li);
                    $li
                        .on('click', '>a', function (e) {

                            // collapse all open siblings
                            $li.siblings('.open').smartCollapseToggle();

                            // toggle element
                            $li.smartCollapseToggle();

                            // add active marker to collapsed element if it has active childs
                            if (!$li.hasClass('open') && $li.find('li.active').length > 0) {
                                $li.addClass('active')
                            }

                            e.preventDefault();
                        })
                        .find('>a').append('<b class="collapse-sign"><em class="fa fa-plus-square-o"></em></b>');

                    // initialization toggle
                    if ($li.find('li.active').length) {
                        $li.smartCollapseToggle();
                        $li.find('li.active').parents('li').addClass('active');
                    }
                });
            }
            bindEvents();


            // click on route link
            element.on('click', 'a[data-ui-sref]', function (e) {
                // collapse all siblings to element parents and remove active markers
                $(this)
                    .parents('li').addClass('active')
                    .each(function () {
                        $(this).siblings('li.open').smartCollapseToggle();
                        $(this).siblings('li').removeClass('active')
                    });

                if ($body.hasClass('mobile-view-activated')) {
                    $rootScope.$broadcast('requestToggleMenu');
                }
            });


            scope.$on('$smartLayoutMenuOnTop', function (event, menuOnTop) {
                if (menuOnTop) {
                    $collapsible.filter('.open').smartCollapseToggle();
                }
            });
        }
    }
});
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout').directive('smartMenuItems', function ($http, $rootScope, $compile) {
    return {
        restrict: 'A',
        compile: function (element, attrs) {
            

            function createItem(item, parent, level){
                var li = $('<li />' ,{'ui-sref-active': "active"})
                var a = $('<a />');
                var i = $('<i />');

                li.append(a);

                if(item.sref)
                    a.attr('ui-sref', item.sref);
                if(item.href)
                    a.attr('href', item.href);
                if(item.icon){
                    i.attr('class', 'fa fa-lg fa-fw fa-'+item.icon);
                    a.append(i);
                }
                if(item.title){
                    a.attr('title', item.title);
                    if(level == 1){ 
                        a.append(' <span class="menu-item-parent">' + item.title + '</span>');
                    } else {
                        a.append(' ' + item.title);

                    }
                }

                if(item.items){
                    var ul = $('<ul />');
                    li.append(ul);
                    li.attr('data-menu-collapse', '');
                    _.forEach(item.items, function(child) {
                        createItem(child, ul, level+1);
                    })
                } 

                parent.append(li); 
            }


            $http.get(attrs.smartMenuItems).then(function(res){
                var ul = $('<ul />', {
                    'smart-menu': ''
                })
                _.forEach(res.data.items, function(item) {
                    createItem(item, ul, 1);
                })
                
                var $scope = $rootScope.$new();
                var html = $('<div>').append(ul).html(); 
                var linkingFunction = $compile(html);
                
                var _element = linkingFunction($scope);

                element.replaceWith(_element);                
            })
        }
    }
});
})();
/**
 * Jarvis Widget Directive
 *
 *    colorbutton="false"
 *    editbutton="false"
      togglebutton="false"
       deletebutton="false"
        fullscreenbutton="false"
        custombutton="false"
        collapsed="true"
          sortable="false"
 *
 *
 */
"use strict";

angular.module('SmartAdmin.Layout').directive('jarvisWidget', function($rootScope){
    return {
        restrict: "A",
        compile: function(element, attributes){
            if(element.data('widget-color'))
                element.addClass('jarviswidget-color-' + element.data('widget-color'));


            element.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');

            element.addClass('jarviswidget');
            $rootScope.$emit('jarvisWidgetAdded', element )

        }
    }
});
 "use strict";
 
 angular.module('SmartAdmin.Layout').directive('widgetGrid', function ($rootScope, $compile, $q, $state, $timeout) {

    var jarvisWidgetsDefaults = {
        grid: 'article',
        widgets: '.jarviswidget',
        localStorage: true,
        deleteSettingsKey: '#deletesettingskey-options',
        settingsKeyLabel: 'Reset settings?',
        deletePositionKey: '#deletepositionkey-options',
        positionKeyLabel: 'Reset position?',
        sortable: true,
        buttonsHidden: false,
        // toggle button
        toggleButton: true,
        toggleClass: 'fa fa-minus | fa fa-plus',
        toggleSpeed: 200,
        onToggle: function () {
        },
        // delete btn
        deleteButton: true,
        deleteMsg: 'Warning: This action cannot be undone!',
        deleteClass: 'fa fa-times',
        deleteSpeed: 200,
        onDelete: function () {
        },
        // edit btn
        editButton: true,
        editPlaceholder: '.jarviswidget-editbox',
        editClass: 'fa fa-cog | fa fa-save',
        editSpeed: 200,
        onEdit: function () {
        },
        // color button
        colorButton: true,
        // full screen
        fullscreenButton: true,
        fullscreenClass: 'fa fa-expand | fa fa-compress',
        fullscreenDiff: 3,
        onFullscreen: function () {
        },
        // custom btn
        customButton: false,
        customClass: 'folder-10 | next-10',
        customStart: function () {
            alert('Hello you, this is a custom button...');
        },
        customEnd: function () {
            alert('bye, till next time...');
        },
        // order
        buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
        opacity: 1.0,
        dragHandle: '> header',
        placeholderClass: 'jarviswidget-placeholder',
        indicator: true,
        indicatorTime: 600,
        ajax: true,
        timestampPlaceholder: '.jarviswidget-timestamp',
        timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
        refreshButton: true,
        refreshButtonClass: 'fa fa-refresh',
        labelError: 'Sorry but there was a error:',
        labelUpdated: 'Last Update:',
        labelRefresh: 'Refresh',
        labelDelete: 'Delete widget:',
        afterLoad: function () {
        },
        rtl: false, // best not to toggle this!
        onChange: function () {

        },
        onSave: function () {

        },
        ajaxnav: true

    }

    var dispatchedWidgetIds = [];
    var setupWaiting = false;

    var debug = 1;

    var setupWidgets = function (element, widgetIds) {

        if (!setupWaiting) {

            if(_.intersection(widgetIds, dispatchedWidgetIds).length != widgetIds.length){

                dispatchedWidgetIds = _.union(widgetIds, dispatchedWidgetIds);

//                    console.log('setupWidgets', debug++);

                element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
                element.jarvisWidgets(jarvisWidgetsDefaults);
                initDropdowns(widgetIds);
            }

        } else {
            if (!setupWaiting) {
                setupWaiting = true;
                $timeout(function () {
                    setupWaiting = false;
                    setupWidgets(element, widgetIds)
                }, 200);
            }
        }

    };

    var destroyWidgets = function(element, widgetIds){
        element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
        dispatchedWidgetIds = _.xor(dispatchedWidgetIds, widgetIds);
    };

    var initDropdowns = function (widgetIds) {
        angular.forEach(widgetIds, function (wid) {
            $('#' + wid + ' [data-toggle="dropdown"]').each(function () {
                var $parent = $(this).parent();
                // $(this).removeAttr('data-toggle');
                if (!$parent.attr('dropdown')) {
                    $(this).removeAttr('href');
                    $parent.attr('dropdown', '');
                    var compiled = $compile($parent)($parent.scope())
                    $parent.replaceWith(compiled);
                }
            })
        });
    };

    var jarvisWidgetAddedOff,
        $viewContentLoadedOff,
        $stateChangeStartOff;

    return {
        restrict: 'A',
        compile: function(element){

            element.removeAttr('widget-grid data-widget-grid');

            var widgetIds = [];

            $viewContentLoadedOff = $rootScope.$on('$viewContentLoaded', function (event, data) {
                $timeout(function () {
                    setupWidgets(element, widgetIds)
                }, 100);
            });


            $stateChangeStartOff = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    jarvisWidgetAddedOff();
                    $viewContentLoadedOff();
                    $stateChangeStartOff();
                    destroyWidgets(element, widgetIds)
                });

            jarvisWidgetAddedOff = $rootScope.$on('jarvisWidgetAdded', function (event, widget) {
                if (widgetIds.indexOf(widget.attr('id')) == -1) {
                    widgetIds.push(widget.attr('id'));
                    $timeout(function () {
                        setupWidgets(element, widgetIds)
                    }, 100);
                }
//                    console.log('jarvisWidgetAdded', widget.attr('id'));
            });

        }
    }
});
