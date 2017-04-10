module.controller("Home", ['$scope'], function($scope){

});

module.controller("ExpandItem", ['$scope'], function($scope){

});

module.controller("Info", ['$scope', 'weather', 'time'], function($scope){

});

module.service('weather', function() {
    this.data = 1
});

module.service('time', function() {
    this.data = 1
});
