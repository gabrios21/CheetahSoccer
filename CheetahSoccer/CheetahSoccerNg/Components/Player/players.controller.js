(function () {
    "use strict";

    function playersController(dataAccess, $location) {

        var vm = this;
        vm.allPlayers = [];
        dataAccess.getAll()
            .then(function (response) {
                vm.allPlayers = response.data;
            });

        vm.edit = function (player) {
            $location.path('player/edit/' + player.Id);
        };
    }

    angular
        .module('cheetahSoccer')
        .controller('PlayersController', playersController);

})();