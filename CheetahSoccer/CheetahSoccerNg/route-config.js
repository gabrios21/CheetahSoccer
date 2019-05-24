(function () {
    'use strict';

    angular
        .module('cheetahSoccer')
        .config(config);

    function config($routeProvider) {
        $routeProvider
                .when('/home', {
                    templateUrl: 'Components/Home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'ctrl'
                })
                .when('/players', {
                    templateUrl: 'Components/Player/players.html',
                    controller: 'PlayersController',
                    controllerAs: 'ctrl'
                })
                .when('/register', {
                    templateUrl: 'Components/Player/register.html',
                    controller: 'RegisterPlayerController',
                    controllerAs: 'ctrl'
                })
                .when('/games', {
                    templateUrl: 'Components/Games/games.html',
                    controller: 'GamesController',
                    controllerAs: 'ctrl'
                })
                .when('/player/edit/:Id', {
                    templateUrl: 'Components/Player/edit.html',
                    controller: 'EditPlayerController',
                    controllerAs: 'ctrl'
                })
                .otherwise('/home');
    }

})();