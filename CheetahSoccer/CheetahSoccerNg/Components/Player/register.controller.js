(function () {
    "use strict";

    function registerPlayerController(dataAccess, $location) {

        var vm = this;
        vm.registerForm = {};
        vm.message = '';
        vm.display = 'd-none';
        vm.addPlayer = addPlayer;
        vm.back = back;

        vm.newPlayer = {
            "FirstName": "",
            "LastName": "",
            "Email": "",
            "FieldPosition": "",
            "StrongFoot": "",
            "Picture": ""
        };

        function addPlayer() {
            dataAccess.save(vm.newPlayer)
                .then(function () {
                    vm.newPlayer = {
                        "FirstName": "",
                        "LastName": "",
                        "Email": "",
                        "FieldPosition": "",
                        "StrongFoot": "",
                        "Picture": ""
                    };
                    vm.message = 'Welcome to the team! Your information was registered successfully';
                    vm.display = '';
                })
                .catch(function (response) {
                    vm.message = 'Error while registering player';
                    vm.display = '';
                    console.log(response);
                });
        }

        function back() {
            $location.path('/home');
        }
    }

    angular
        .module('cheetahSoccer')
        .controller('RegisterPlayerController', registerPlayerController);

})();