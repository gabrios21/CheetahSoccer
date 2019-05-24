(function () {
    'use strict';

    function dataAccess($http) {

        function getAll() {
            return $http
                .get('http://localhost:62029/web/api/players');
        }

        function find(id) {
            return $http
                .get('http://localhost:62029/web/api/players/' + id);
        }

        function save(player) {
            return $http
                .post('http://localhost:62029/web/api/players', player);
        }

        function  update(player) {
           return $http
               .put('http://localhost:62029/web/api/players/', player);
        }

        function remove(id) {
           return $http
               .delete('http://localhost:62029/web/api/players/' + id);
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