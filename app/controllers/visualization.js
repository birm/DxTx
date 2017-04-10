module.controller("Visualization", ['$scope', function($scope){
  $scope.VisController = function (userid, token, len = 30){
    randomArray = (length) => [...new Array(length)].map(() => Math.random());
    return randomArray(len)
  }
}]);
