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

    $translateProvider.translations('pt', {
      GENERICO:{
        PESQUISAR: 'Pesquisar por:'
      },
      LOGIN:{
        TITLE: 'Entrar API',
        EMAIL: 'E-mail',
        SENHA: 'Senha',
        ENTRAR: 'Entrar',
      },
      IDIOMA:{
        PORTUGUES: 'Português',
        INGLES: 'Inglês',
      },
      MENU:{
        HOME : 'Inicio',
        USUARIO: 'Usuário',
        OPERADORA: 'Operadora',
        CONTATO: 'Contato',
        SAIR: 'Sair'
      },
      CONTATO:{
        TITULO: 'Lista Contato',
        NOME: 'Nome',
        TELEFONE: 'Telefone',
        ADD: 'Adicionar Contato'
      },
      USUARIO:{
        TITULO: 'Lista Usuário',
        NOME: 'Nome',
        SOBRENOME: 'Sobrenome',
        ADD: 'Adicionar Usuário'
      },
      OPERADORA:{
        TITULO: 'Lista Operadora',
        DESCRICAO: 'Descrição',
        VALOR: 'Valor',
        ADD: 'Adicionar Operadora'
      }         
    });
    $translateProvider.translations('en', {
      GENERICO:{
        PESQUISAR: 'Search for:'
      },        
      LOGIN:{
        TITLE: 'Enter API',
        EMAIL: 'E-mail',
        SENHA: 'Password',
        ENTRAR: 'Enter',
      },        
      IDIOMA:{
        PORTUGUES: 'Portuguese',
        INGLES: 'English',
      },        
      MENU:{
        HOME : 'Home',
        USUARIO: 'User',
        OPERADORA: 'Operator',
        CONTATO: 'Contact',
        SAIR: 'Logout'
      },
      CONTATO:{
        TITULO: 'List Contact',
        NOME: 'Name',
        TELEFONE: 'Phone',
        ADD: 'Add Contact'
      },
      USUARIO:{
        TITULO: 'List User',
        NOME: 'Name',
        SOBRENOME: 'Last Name',
        ADD: 'Add User'
      },
      OPERADORA:{
        TITULO: 'List Operator',
        DESCRICAO: 'Description',
        VALOR: 'Value',
        ADD: 'Add Operator'
      } 
    });
    $translateProvider.preferredLanguage('pt');

    $translateProvider.useSanitizeValueStrategy('escaped');

}]);
