(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name angularNewProjectApp.authFactory
     * @description
     * # authFactory
     * Factory in the angularNewProjectApp.
     */
    angular
        .module('angularNewProjectApp')
        .factory('authFactory', authFactory);

    authFactory.$inject = ['$http', '$rootScope', '$window'];

    function authFactory($http, $rootScope, $window) {

        var serviceBase = 'http://localhost:9091/account/',
            factoryLocal = {
                loginPath: serviceBase + 'login',
                user: {
                    isAuthenticated: false,
                    roles: null
                },
                login: login,
                logout: logout,
                redirectToLogin: redirectToLogin,
                checkAuthentication: checkAuthentication
            };

        return factoryLocal;

        ////////////

        function login(userName, password) {

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
        }

        function logout() {
            return $http.post(serviceBase + 'logout').then(
                function(results) {
                    var loggedIn = !results.data.status;
                    $window.sessionStorage.token = null;
                    changeAuth(loggedIn);
                    return loggedIn;
                });
        }

        function redirectToLogin() {
            $rootScope.$broadcast('redirectToLogin', null);
        }

        function changeAuth(loggedIn) {
            factoryLocal.user.isAuthenticated = loggedIn;
            $rootScope.$broadcast('loginStatusChanged', loggedIn);
        }

        function checkAuthentication() {
            return $http.post(serviceBase + 'checkAuth').then(
                function(results) {
                    var loggedIn = results.data.status;
                    changeAuth(loggedIn);
                });
        }
    }
})();
