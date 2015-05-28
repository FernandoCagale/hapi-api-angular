'use strict';

angular.module('app', ['ngRoute','ngCookies', 'pascalprecht.translate'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {

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



}]).config(['$translateProvider', function ($translateProvider) {

    /*
    $translateProvider.useStaticFilesLoader({
        prefix : '/i18n/',
        suffix : '.json'
    });

    $translateProvider.useLocalStorage();
    $translateProvider.usePostCompiling(true);
    */

    $translateProvider.translations('en', {
      TITLE: 'Hello',
    });
    $translateProvider.translations('pt', {
      TITLE: 'Olá',
    });
    $translateProvider.preferredLanguage('en');

    $translateProvider.useSanitizeValueStrategy('escaped');

}]);
