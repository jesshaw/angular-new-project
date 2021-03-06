(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name angularNewProjectApp.directive:menuHighlighter
     * @description
     * # menuHighlighter
     */
    angular
        .module('angularNewProjectApp')
        .directive('menuHighlighter', menuHighlighter);

    menuHighlighter.$injector = ['$location'];

    function menuHighlighter($location) {
        return {
            restrict: 'A',
            scope: {
                highlightClassName: '@'
            },
            link: link
        };

        function link(scope, element) {

            setActive();

            //Monitor location changes
            scope.$on('$locationChangeSuccess', setActive);

            ////////////

            function setActive() {
                var path = $location.path();
                var className = scope.highlightClassName || 'active';

                if (path) {
                    angular.forEach(element.find('li'), function(li) {
                        var anchor = li.querySelector('a');
                        //Get href from href attribute or data-href in cases where href isn't used (such as login)
                        var href = (anchor && anchor.href) ? anchor.href :
                            anchor.getAttribute('data-href').replace('#', '');
                        //Get value after hash
                        var trimmedHref = href.substr(href.indexOf('#/') + 1, href.length);
                        //Convert path to same length as trimmedHref
                        // var basePath = path.substr(0, trimmedHref.length);

                        //See if trimmedHref and basePath match. If so, then highlight that item
                        if (trimmedHref === path) {
                            angular.element(li).addClass(className);
                        } else {
                            angular.element(li).removeClass(className);
                        }
                    });
                }
            }
        }
    }
})();
