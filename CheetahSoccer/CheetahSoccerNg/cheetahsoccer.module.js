(function (){
    "use strict";
    var myApp = angular.module('cheetahSoccer', ['ngRoute']);

    myApp.config(function($routeProvider) {
            $routeProvider
                .when('/players', {
                    templateUrl: 'Components/Player/players.html',
                    controller: 'PlayersController',
                    controllerAs: 'ctrl'
                })
                .when('/home', {
                    templateUrl: 'Components/Home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'ctrl'
                })
                .when('/register', {
                    templateUrl: 'Components/Register/register.html',
                    controller: 'RegisterController',
                    controllerAs: 'ctrl'
                })
                .otherwise('/home');
    });
}());