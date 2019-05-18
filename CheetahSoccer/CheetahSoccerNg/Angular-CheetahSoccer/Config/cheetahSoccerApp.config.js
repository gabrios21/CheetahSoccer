'use strict';

angular.
    module('cheetahSoccerApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/index', {
                    template: '<welcome></welcome>'
                }).
                otherwise('/index');
        }
    ]);