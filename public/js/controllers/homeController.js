angular.module("app").controller('homeController', ['$scope', 'userFactory','$location',  function ($scope, userFactory, $location) {

    $scope.home = 'Home';

    $scope.isActive = function (viewLocation) {
     	var active = (viewLocation === $location.path());
    	return active;
	};

}]);