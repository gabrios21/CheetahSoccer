(function () {
    "use strict";

    var module = angular.module("cheetahSoccer");

    function controller(playerHttp) {
        var model = this;
        model.$oninit = function () {
            playerHttp.getPlayer
                .then(function (player){
                    model.player = player;
            });
        };
    }

    module.component("players", {
        templateUrl: "/Views/players.html",
        controllerAs: "playersModel",
        controller: ["playerHttp", controller]
    });

}());