angular.module('Booya')
.factory('Celebs', ['$http', function($http) {
    
    var getAll = function () {
        return $http( { method: 'GET', url:  "data/celeb.json" } );
    };
    
    var getOne = function (id) {
        return $http( { method: 'GET', url:  "data/celeb.json" } );
    };
    
    return {
        getAll: getAll,
        getOne: getOne
    }
    
}]);