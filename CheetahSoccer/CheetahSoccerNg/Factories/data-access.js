﻿(function () {
    'use strict';

    function dataAccess($http) {

        function getAll() {
            return $http
                .get('http://localhost:56706/api/players');
        }

        function find(id) {
            return $http
                .get('http://localhost:56706/api/players/' + id);
        }

        function save(player) {
            return $http
                .post('http://localhost:56706/api/players', player);
        }

        function  update(player) {
           return $http
               .put('http://localhost:56706/api/players', player);
        }

        function remove(player) {
           return $http({
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