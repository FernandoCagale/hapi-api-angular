angular.module("app").controller('contactController', ['$scope', 'contactFactory', 'operatorFactory', '$location',  function ($scope, contactFactory, operatorFactory, $location) {

    $scope.contacts = null;
    $scope.operators = null;
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

    var getOperators = function(contact) {
        operatorFactory.find()
            .success(function (data) {
                $scope.operators = data;
                console.log("Sucesso...");
            })
            .error(function (error) {
                console.log("Error..."+ error.message);
            });        
    };

    $scope.save = function(contact) {
        var operator = contact.operator;

        delete contact.operator;

        contact.operator = operator.id;

        contactFactory.insert(contact)
            .success(function (data) {
                console.log("Sucesso...");
                $scope.list();
            })
            .error(function (error) {
                console.log("Error..."+ error.message);
            });        
    };

    $scope.data = function(){
        $location.path('contact-data');
    };

    $scope.list = function(){
        $location.path('contact');
    };

    getOperators();
    getContacts();
}]);