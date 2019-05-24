(function () {
    "use strict";

    function editPlayerController(dataAccess, $routeParams, $location) {

        var vm = this;
        var id = $routeParams.Id;

        vm.message = '';
        vm.display = 'd-none';
        vm.getPlayer = getPlayer();
        vm.updatePlayer = updatePlayer;
        vm.deletePlayer = deletePlayer;
        vm.back = back;
        

        function getPlayer() {
            dataAccess.find(id)
                .then(function (response) {
                    vm.player = {
                        "Id": id,
                        "FirstName": response.data.FirstName,
                        "LastName": response.data.LastName,
                        "Email": response.data.Email,
                        "FieldPosition": response.data.FieldPosition,
                        "StrongFoot": response.data.StrongFoot,
                        "Picture": response.data.Picture
                    };
                })
                .catch(function (response) {
                    vm.message = 'Error retrieving player information';
                    vm.display = '';
                    console.log(response);
                });
        }

        function updatePlayer() {
            dataAccess.update(vm.player)
                .then(function () {
                    vm.message = 'Your information has been updated successfully';
                    vm.display = '';
                })
                .catch(function (response) {
                    console.log(response);
                    vm.message = 'Error while updating your information';
                    vm.display = '';
                });
        }

        function deletePlayer() {
            dataAccess.remove(vm.player.Id)
            
                .then(function () {
                    vm.message = 'Your information has been deleted';
                    vm.player = {
                        "FirstName": "",
                        "LastName": "",
                        "Email": "",
                        "FieldPosition": "",
                        "StrongFoot": "",
                        "Picture": ""
                    };
                    vm.display = '';
                })
                .catch(function (response) {
                    console.log(response);
                    vm.message = 'Error while deleting your information';
                    vm.display = '';
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