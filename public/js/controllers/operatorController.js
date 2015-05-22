app.controller('operatorController', ['$scope', 'operatorFactory',  function ($scope, operatorFactory) {

    $scope.operators = null;
    $scope.status = null;

    var getOperators = function() {
        operatorFactory.find()
            .success(function (data) {
                $scope.operators = data;
                console.log("Sucesso...");
            })
            .error(function (error) {
                $scope.status = "Ocorreu um problema: "+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    getOperators();
}]);