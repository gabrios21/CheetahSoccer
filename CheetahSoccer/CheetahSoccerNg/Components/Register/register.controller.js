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
                .then(function (response) {
                    alert(response.data.message);
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
                    alert(response.data.message);
                });
        };
    }

    angular
        .module('cheetahSoccer')
        .controller('RegisterController', registerController);

})();