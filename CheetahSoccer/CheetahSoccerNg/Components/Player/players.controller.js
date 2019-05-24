(function () {
    "use strict";

    function playersController(dataAccess, $location) {

        var vm = this;
        vm.allPlayers = [];
        vm.back = back;

        dataAccess.getAll()
            .then(function (response) {
                vm.allPlayers = response.data;
            });

        vm.edit = function (player) {
            $location.path('player/edit/' + player.Id);
        };

        function back() {
            $location.path('/home');
        }
    }

    angular
        .module('cheetahSoccer')
        .controller('PlayersController', playersController);

})();