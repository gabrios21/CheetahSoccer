(function () {
    "use strict"

    var module = angular.module("cheetahSoccer");

    function controller(playerHttp) {
        var self = this;

        self.$onInit = function() {
            playerHttp.getPlayer()
                .then(function (player) {
                    self.player = player
                });
        };
    }

    module.component("players", {
        templateUrl: "/Views/players.html",
        controllerAs: "playersModel",
        controller: ["playerHttp", controller]
    });

}());