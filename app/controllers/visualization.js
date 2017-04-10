module.controller("Visualization", ['$scope', function($scope){
  function GraphService(userid, token, len = 30){
    randomArray = (length, max) => [...new Array(length)].map(() => Math.random());
    $scope.graphdata = randomArray
  }
}]);
