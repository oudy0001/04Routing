angular.module('Booya')

.controller('MainCtrl', function($scope, $http, Celebs) {
    $scope.allData;
    Celebs.getAll()
        .then(function(response){
                        $scope.allData = response.data;
        }, function(response){
        console.log("error getting data");
    })
})