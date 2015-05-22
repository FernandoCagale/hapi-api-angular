'use strict';

app.factory('authFactory', ['$http', function($http) {

    var baseUrl = 'http://'+process.env.NODE_HOST+':'+process.env.NODE_PORT+'/api/v1/auth';

    var authFactory = {};

    authFactory.getAuth = function () {
        return $http.get(baseUrl);
    };

    authFactory.login = function (auth) {
        return $http.post(baseUrl, auth);
    };

    return authFactory;
}]);
