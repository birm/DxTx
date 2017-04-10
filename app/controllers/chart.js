module.controller("ChartCreate", ['$scope'], function($scope){

});

module.controller("ChartView", ['$scope', 'chartview'], function($scope){

});

module.service('chartview', function() {
    this.data = 1
});

module.controller("Charts", ['$scope', 'mycharts'], function($scope){

});

module.service('mycharts', function() {
    this.data = 1
});
