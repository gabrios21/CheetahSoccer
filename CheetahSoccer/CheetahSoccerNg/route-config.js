(function () {
    'use strict';

    angular
        .module('cheetahSoccer')
        .config(config);

    function ($routeProvider) {
        $routeProvider
            .when('/players', {
                templateUrl: 'Components/Player/players.html',
                controller: 'PlayersController',
                controllerAs: 'players'
            })
            .when('/home', {
                templateUrl: 'Components/Home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .otherwise('/home');
    }
})();