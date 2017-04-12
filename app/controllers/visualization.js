module.controller("Visualization", ['$scope', 'GraphService'], function($scope) {
    $scope.VisController = function(userid, token, len) {
        GraphService(userid, token, len)
    }
});

module.factory('GraphService', function() {
    var graph = {}
    graph.randomArray = (len) => [...new Array(length)].map(() => Math.random());
    graph.data = randomArray(len);
    return graph
});
