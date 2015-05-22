app.controller('authController', ['$scope', 'authFactory', '$location',   function ($scope, contactFactory, $location) {

    $scope.contacts = null;
    $scope.message = null;

    $scope.login = function (user) {
        contactFactory.login(user).success(function (data) {
            $.jStorage.set('authorization', data.token);
            delete $scope.message;
            $location.path('/');
        }).error(function (data, status) {
            $.jStorage.set('authorization', null);
            if (status == 401)
                $scope.message = "Usuário Inválido.";
            else
                $scope.message = "Aconteceu um problema: " + data.message;
        });
    };
}]);