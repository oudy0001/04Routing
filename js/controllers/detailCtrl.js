angular.module('Booya')

.controller('DetailsCtrl', function($scope, $routeParams, Celebs) {
    $scope.itemID = $routeParams.itemID;
    $scope.celeb = {};
    Celebs.getOne($routeParams.itemID)
        .then(function(response){
                        $scope.allData = response.data;
            $scope.allData.forEach(function(i){
                if(i.id == $scope.itemID){
                    $scope.celeb = i;
                }
            })
        }, function(response){
        console.log("error getting data");
    })
    
    console.log('MainCtrl is initialized');
});
