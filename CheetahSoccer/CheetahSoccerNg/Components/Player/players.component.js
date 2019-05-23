(function () {
    "use strict";

    var module = angular.module("cheetahSoccer");

    module.component("players", {
        templateUrl: "/Views/players.html",
        controllerAs: "model",
        controller: function ($http) {
            var model = this;
            $http.get('http://localhost:56706/api/players')
                .then(function (response) {
                    model.players = response.data;
                }).catch(function (response) {
                    console.error('Error', response.status, response.data);
                }).finally(function () {
                    console.log("Task Finished");
                });

        }
    });

}());