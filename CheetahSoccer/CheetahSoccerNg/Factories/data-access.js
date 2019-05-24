(function () {
    'use strict';

    function dataAccess($http) {

        function getAll() {
            return $http
                .get('http://localhost:56706/api/players');
        }

        function find(id) {
            $http
                .get('http://localhost:56706/api/players/' + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function save(player) {
            return $http
                .post('http://localhost:56706/api/players', player);
        }

        function  update(player) {
            $http({
                url: 'http://localhost:56706',
                method: 'PUT',
                data: {
                    "Email": player.Email,
                    "FirstName": player.FirstName,
                    "LastName": player.LastName,
                    "FieldPosition": player.FieldPosition,
                    "StrongFoot": player.StrongFoot,
                    "Picture": player.Picture
                }
            })
                .then(function (response) {
                    return response.data;
                });
        }

        function remove(player) {
            $http({
                url: 'http://localhost:56706',
                method: 'DELETE',
                data: {
                    "Email": player.Email,
                    "FirstName": player.FirstName,
                    "LastName": player.LastName,
                    "FieldPosition": player.FieldPosition,
                    "StrongFoot": player.StrongFoot,
                    "Picture": player.Picture
                }
            })
                .then(function (response) {
                    return response.data;
                });
        }

        return {
            getAll: getAll,
            find: find,
            save: save,
            update: update,
            remove: remove
        };
    }

    angular
        .module('cheetahSoccer')
        .factory('dataAccess', dataAccess);

})();