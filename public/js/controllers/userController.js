angular.module("app").controller('userController', ['$scope', 'userFactory',  function ($scope, userFactory) {

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

    getUsers();
}]);