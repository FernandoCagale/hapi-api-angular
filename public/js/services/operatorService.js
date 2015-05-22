'use strict';

app.factory('operatorFactory', ['$http', function($http) {

    var baseUrl = 'http://'+process.env.NODE_HOST+':'+process.env.NODE_PORT+'/api/v1/operators';

    var operatorFactory = {};

    operatorFactory.find = function () {
        return $http.get(baseUrl);
    };

    operatorFactory.findById = function (id) {
        return $http.get(baseUrl + '/' + id);
    };

    operatorFactory.insert = function (operator) {
        return $http.post(baseUrl, operator);
    };

    operatorFactory.update = function (operator) {
        return $http.put(baseUrl + '/' + operator.id, operator)
    };

    operatorFactory.delete = function (id) {
        return $http.delete(baseUrl + '/' + id);
    };

    return operatorFactory;
}]);
