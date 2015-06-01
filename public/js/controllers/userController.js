angular.module("app").controller('userController', ['$scope', 'userFactory', '$location',  function ($scope, userFactory, $location) {

    $scope.users = null;

    var getUsers = function() {
        userFactory.find()
            .success(function (data) {
                $scope.users = data;
                console.log("Sucesso...");
            })
            .error(function (error) {
                console.log("Error..."+ error.message);
            });
    };

    $scope.save = function(user) {
        userFactory.insert(user)
            .success(function (data) {
                console.log("Sucesso...");
                $scope.list();
            })
            .error(function (error) {
                console.log("Error..."+ error.message);
            });        
    };

    $scope.data = function(){
        $location.path('user-data');
    };

    $scope.list = function(){
        $location.path('user');
    };    

    getUsers();
}]);