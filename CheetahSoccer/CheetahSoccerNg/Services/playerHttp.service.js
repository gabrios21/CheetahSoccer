(function () {
    var playerHttp = function ($http)
    {
        var url = "http://localhost:56706/api/players/1";
        var getPlayer = function () {
            return $http.get(url)
                .then(function (response) {
                    return response.data
                });
        };
        return {
            getPlayer: getPlayer
        };
    }

    var module = angular.module("cheetahSoccer");
    module.factory("playerHttp", playerHttp);
}());