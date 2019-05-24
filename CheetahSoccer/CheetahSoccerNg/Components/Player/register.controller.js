(function () {
    "use strict";

    function registerPlayerController(dataAccess) {

        var vm = this;
        vm.registerForm = {};
        vm.addPlayer = addPlayer();

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
                })
                .catch(function (response) {
                    console.log(response);
                });
        }
    }

    angular
        .module('cheetahSoccer')
        .controller('RegisterPlayerController', registerPlayerController);

})();