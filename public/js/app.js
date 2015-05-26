'use strict';

angular.module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

   	$httpProvider.interceptors.push('authInterceptor');

    $routeProvider.when('/', {
        templateUrl: 'partials/main.html',
        controller: 'homeController'
    }).when('/user', {
        templateUrl: 'partials/user.html',
        controller: 'userController'
    }).when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contactController'
    }).when('/operator', {
        templateUrl: 'partials/operator.html',
        controller: 'operatorController'
    }).when('/auth', {
        templateUrl: 'partials/auth.html',
        controller: 'authController'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}]);
