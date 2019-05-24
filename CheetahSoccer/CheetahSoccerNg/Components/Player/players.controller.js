(function () {
    "use strict";

    function playersController(dataAccess) {

        var vm = this;
        vm.allPlayers = [];
        dataAccess.getAll()
            .then(function (response) {
                vm.allPlayers = response.data;
            });

        vm.edit = function (player) {
            console.log(player)
        };
    }

    angular
        .module('cheetahSoccer')
        .controller('PlayersController', playersController);

})();