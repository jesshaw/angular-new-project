'use strict';

/**
 * @ngdoc service
 * @name angularNewProjectApp.authFactory
 * @description
 * # authFactory
 * Factory in the angularNewProjectApp.
 */



angular.module('angularNewProjectApp')
    .factory('authFactory', ['$http', '$rootScope', '$window',
        function($http, $rootScope, $window) {
            var serviceBase = 'http://localhost:9001/account/',
                factoryLocal = {
                    loginPath: serviceBase + 'login',
                    user: {
                        isAuthenticated: false,
                        roles: null
                    }
                };

            factoryLocal.login = function(userName, password) {

                return $http.post(serviceBase + 'login', {
                    userLogin: {
                        userName: userName,
                        password: password
                    }
                }).then(
                    function(results) {
                        var loggedIn = results.data.status;

                        $window.sessionStorage.token = results.data.token;
                        changeAuth(loggedIn);
                        return loggedIn;
                    });
            };

            factoryLocal.logout = function() {
                return $http.post(serviceBase + 'logout').then(
                    function(results) {
                        var loggedIn = !results.data.status;
                        $window.sessionStorage.token = null;
                        changeAuth(loggedIn);
                        return loggedIn;
                    });
            };

            factoryLocal.redirectToLogin = function() {
                $rootScope.$broadcast('redirectToLogin', null);
            };

            function changeAuth(loggedIn) {
                factoryLocal.user.isAuthenticated = loggedIn;
                $rootScope.$broadcast('loginStatusChanged', loggedIn);
            }

            factoryLocal.checkAuthentication = function() {
                return $http.post(serviceBase + 'checkAuth').then(
                    function(results) {
                        var loggedIn = results.data.status;
                        changeAuth(loggedIn);
                    });
            };

            return factoryLocal;
        }
    ]);
