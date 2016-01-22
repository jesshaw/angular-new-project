(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name angularNewProjectApp
     * @description
     * # angularNewProjectApp
     *
     * Main module of the application.
     */
    angular
        .module('angularNewProjectApp', [
            'ngAnimate',
            'ngAria',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ngFileUpload'
        ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about',
                    secure: true
                })
                .when('/car', {
                    templateUrl: 'views/car.html',
                    controller: 'CarCtrl',
                    controllerAs: 'vm',
                    secure: true
                })
                .when('/file', {
                    templateUrl: 'views/file.html',
                    controller: 'FileCtrl',
                    controllerAs: 'vm',
                    secure: true
                })
                .when('/login/:redirect*?', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
        .config(function($httpProvider) {
            $httpProvider.interceptors.push('tokenInterceptor');
        })
        .run(['$rootScope', '$location', 'authFactory',
            function($rootScope, $location, authService) {

                //Client-side security. Server-side framework MUST add it's 
                //own security as well since client-based security is easily hacked
                $rootScope.$on("$routeChangeStart", function(event, next) {
                    if (next && next.$$route && next.$$route.secure) {

                        // if (!authService.user.isAuthenticated) {
                        //     $rootScope.$evalAsync(function() {
                        //         authService.redirectToLogin();
                        //     });
                        // }


                        //http://stackoverflow.com/questions/27065317/how-to-check-authentication-and-automatically-redirect-to-login-state-with-ui-ro
                        authService.checkAuthentication().then(function() {
                            if (!authService.user.isAuthenticated) {
                                authService.redirectToLogin();
                            }
                        }, function(error) {
                            console.log(error);
                            if (error && error.status == 401) {
                                authService.redirectToLogin();
                            }
                        });

                    }
                });

            }
        ]);
})();
