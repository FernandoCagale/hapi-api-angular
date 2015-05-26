angular.module("app").controller('contactController', ['$scope', 'contactFactory',  function ($scope, contactFactory) {

    $scope.contacts = null;
    $scope.status = null;

    var getContacts = function() {
        contactFactory.find()
            .success(function (data) {
                $scope.contacts = data;
                console.log("Sucesso...");
            })
            .error(function (error) {
                $scope.status = "Ocorreu um problema: "+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    getContacts();
}]);