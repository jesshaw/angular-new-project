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
        'ngTouch'
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
            .when('/login/:redirect*?', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(['$rootScope', '$location', 'authFactory',
        function($rootScope, $location, authService) {

            //Client-side security. Server-side framework MUST add it's 
            //own security as well since client-based security is easily hacked
            $rootScope.$on("$routeChangeStart", function(event, next, current) {
                if (next && next.$$route && next.$$route.secure) {
                    if (!authService.user.isAuthenticated) {
                        $rootScope.$evalAsync(function() {
                            authService.redirectToLogin();
                        });
                    }
                }
            });

        }
    ]);
