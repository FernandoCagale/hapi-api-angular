angular.module("app").controller('operatorController', ['$scope', 'operatorFactory', '$location',  function ($scope, operatorFactory, $location) {

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

    $scope.save = function(operator) {
        operatorFactory.insert(operator)
            .success(function (data) {
                console.log("Sucesso...");
                $scope.list();
            })
            .error(function (error) {
                console.log("Error..."+ error.message);
            });        
    };    

    $scope.data = function(){
        $location.path('operator-data');
    };

    $scope.list = function(){
        $location.path('operator');
    };    

    getOperators();
}]);