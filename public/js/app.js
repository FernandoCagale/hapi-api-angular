'use strict';

var app = angular.module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

   	$httpProvider.interceptors.push('authInterceptor');

    $routeProvider.when('/', {
        templateUrl: 'partials/main.html', 
        controller: 'homeController'
    });

    $routeProvider.when('/user', {
        templateUrl: 'partials/user.html', 
        controller: 'userController'
    });

    $routeProvider.when('/contact', {
        templateUrl: 'partials/contact.html', 
        controller: 'contactController'
    });  

    $routeProvider.when('/operator', {
        templateUrl: 'partials/operator.html', 
        controller: 'operatorController'
    });  

    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html', 
        controller: 'authController'
    });        

    $locationProvider.html5Mode(true);
    
}]);


