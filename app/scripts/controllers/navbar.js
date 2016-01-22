(function() {
    'use strict';


    /**
     * @ngdoc function
     * @name angularNewProjectApp.controller:NavbarCtrl
     * @description
     * # NavbarCtrl
     * Controller of the angularNewProjectApp
     */
    angular
        .module('angularNewProjectApp')
        .controller('NavbarCtrl', NavbarCtrl);

    NavbarCtrl.$inject = ['$scope', '$location', 'config', 'authFactory'];

    function NavbarCtrl($scope, $location, config, authService) {
        var vm = this,
            appTitle = 'Customer Management';
        vm.isCollapsed = false;
        vm.appTitle = (config.useBreeze) ? appTitle + ' Breeze' : appTitle;

        vm.highlight = function(path) {
            return $location.path().substr(0, path.length) === path;
        };

        vm.loginOrOut = function() {
            setLoginLogoutText();
            var isAuthenticated = authService.user.isAuthenticated;
            if (isAuthenticated) { //logout 
                authService.logout().then(function() {
                    $location.path('/');
                    return;
                });
            }
            redirectToLogin();
        };

        function redirectToLogin() {
            var path = '/login' + $location.$$path;
            $location.replace();
            $location.path(path);
        }

        $scope.$on('loginStatusChanged', function(loggedIn) {
            setLoginLogoutText(loggedIn);
        });

        $scope.$on('redirectToLogin', function() {
            redirectToLogin();
        });

        function setLoginLogoutText() {
            vm.loginLogoutText = (authService.user.isAuthenticated) ? 'Logout' : 'Login';
        }

        setLoginLogoutText();
    }
})();
