'use strict';

angular.module("app").factory('authFactory', function($http, config) {

    var baseUrl = config.baseUrl+'/api/v1/auth';

    var authFactory = {};

    authFactory.getAuth = function () {
        return $http.get(baseUrl);
    };

    authFactory.login = function (auth) {
        return $http.post(baseUrl, auth);
    };

    return authFactory;
});
