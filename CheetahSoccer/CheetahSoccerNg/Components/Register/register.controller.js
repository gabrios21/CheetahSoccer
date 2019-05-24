(function () {
    "use strict";

    function registerController(dataAccess) {

        var vm = this;
        vm.registerForm = {};

        vm.newPlayer = {
            "FirstName": "",
            "LastName": "",
            "Email": "",
            "FieldPosition": "",
            "StrongFoot": "",
            "Picture": ""
        };

        vm.addPlayer = function () {
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
        };
    }

    angular
        .module('cheetahSoccer')
        .controller('RegisterController', registerController);

})();