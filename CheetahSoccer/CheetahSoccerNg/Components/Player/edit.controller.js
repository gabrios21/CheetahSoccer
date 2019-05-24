(function () {
    "use strict";

    function editPlayerController(dataAccess, $routeParams, $location) {

        var vm = this;
        var id = $routeParams.Id;

        vm.getPlayer = getPlayer();
        vm.updatePlayer = updatePlayer;
        vm.deletePlayer = deletePlayer;
        vm.back = back;
        

        function getPlayer() {
            dataAccess.find(id)
                .then(function (response) {
                    vm.newPlayer = {
                        "FirstName": response.data.FirstName,
                        "LastName": response.data.LastName,
                        "Email": response.data.Email,
                        "FieldPosition": response.data.FieldPosition,
                        "StrongFoot": response.data.StrongFoot,
                        "Picture": response.data.Picture
                    };
                })
                .catch(function (response) {
                    console.log(response);
                });
        }

        function updatePlayer() {
            dataAccess.save(vm.newPlayer)
                .then(function () {

                })
                .catch(function (response) {
                    console.log(response);
                });
        }

        function deletePlayer(player) {
            dataAccess.remove(player)
                .then(function () {

                })
                .catch(function (response) {
                    console.log(response);
                });
        }

        function back() {
            $location.path('/players');
        }
    }

    angular
        .module('cheetahSoccer')
        .controller('EditPlayerController', editPlayerController);

})();