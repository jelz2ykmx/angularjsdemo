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
        .state('app.form.mztLeonProviderProfile', {
            url: '/form/mzt-leon-provider-profile',
            data: {
                title: 'Profile'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-provider-profile.html'
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
        .state('app.form.mztLeonUserDailyQuestions', {
            url: '/form/mzt-leon-user-daily-questions',
            data: {
                title: 'Questions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-user-daily-questions.html'
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
        .state('app.form.mztLeonUserProfile', {
            url: '/form/mzt-leon-user-profile',
            data: {
                title: 'Profile'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-user-profile.html'
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
        .state('app.form.mztLeonPhoneQuestionsIphone5', {
            url: '/form/mzt-leon-phone-questions-iphone5',
            data: {
                title: 'Questions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-phone-questions-iphone5.html'
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
        .state('app.form.mztLeonPhoneQuestionsIphone5Safari', {
            url: '/form/mzt-leon-phone-questions-iphone5-safari',
            data: {
                title: 'Questions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-phone-questions-iphone5-safari.html'
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
        .state('app.form.mztLeonPhoneQuestionsIphone6Safari', {
            url: '/form/mzt-leon-phone-questions-iphone6-safari',
            data: {
                title: 'Questions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-phone-questions-iphone6-safari.html'
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
        .state('app.form.mztLeonPhoneQuestionsIphone6PlusSafari', {
            url: '/form/mzt-leon-phone-questions-iphone6Plus-safari',
            data: {
                title: 'Questions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-phone-questions-iphone6Plus-safari.html'
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
        .state('app.form.mztLeonPhoneQuestionsIpad', {
            url: '/form/mzt-leon-phone-questions-ipad',
            data: {
                title: 'Questions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-phone-questions-ipad.html'
                }
            },
            resolve: {
                scripts: function (lazyScript) {
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
        .state('app.form.mztLeonValidicRegister', {
        url: '/form/mzt-leon-validic-register',
        data: {
            title: 'Validic Register'
        },
        views: {
            "content@app": {
                templateUrl: 'app/forms/views/mzt-leon-validic-register.html'
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
        .state('app.form.mztLeonValidicSteps', {
            url: '/form/mzt-leon-validic-steps',
            data: {
                title: 'Validic Steps'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/mzt-leon-validic-steps.html'
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
        .state('app.form.mztLeonAssessment', {
            url: '/form/mzt-leon-assessment',
        data: {
            title: 'Assessment'
        },
        views: {
            "content@app": {
                templateUrl: 'app/forms/views/mzt-leon-assessment.html'
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
        .state('app.form.mztLeonValidicData', {
        url: '/form/mzt-leon-validic-Data',
        data: {
            title: 'Validic Data'
        },
        views: {
            "content@app": {
                controller: 'MztLeonValidicData as datatables',
                templateUrl: 'app/forms/views/mzt-leon-validic-data.html'
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
       .state('app.form.mztLeonValidicPoints', {
           url: '/form/mzt-leon-validic-points',
           data: {
               title: 'Points'
           },
           views: {
               "content@app": {
                   templateUrl: 'app/forms/views/mzt-leon-validc-points.html'
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
    .state('app.form.mztLeonValidicPointsAds', {
        url: '/form/mzt-leon-validic-points-ads',
        data: {
            title: 'Points'
        },
        views: {
            "content@app": {
                templateUrl: 'app/forms/views/mzt-leon-validc-points-ads.html'
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