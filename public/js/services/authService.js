'use strict';

app.factory('authFactory', ['$http', function($http) {

    var baseUrl = 'http://localhost:777/api/v1/auth';

    var authFactory = {};

    authFactory.getAuth = function () {
        return $http.get(baseUrl);
    };

    authFactory.login = function (auth) {
        return $http.post(baseUrl, auth);
    };

    return authFactory;
}]);
