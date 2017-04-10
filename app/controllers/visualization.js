module.controller("Visualization", ['$scope', 'graphdata' function($scope){
  $scope.VisController = function(userid, token, len) {
    graphdata(userid, token, len)
  }
}]);

module.factory('graphdata', function() {
    var graph = {}
    graph.randomArray = (len) => [...new Array(length)].map(() => Math.random());
    graph.data = randomArray(len);
    return graph
});
