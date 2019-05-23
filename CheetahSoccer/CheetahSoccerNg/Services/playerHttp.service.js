(function () {
    var playerHttp = function ($http) {
        var route = "http://localhost:56706/api/players/";

        var getPlayer = function (id) {
            return $http.get(route + id)
                .then(function (response) {
                    return "This is the player service";
                });
        };

        return {
            getPlayer: getPlayer
        };
    };

    var module = angular.module("cheetahSoccer");
    module.factory("playerHttp", playerHttp);
}());