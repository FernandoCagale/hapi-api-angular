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
    }).when('/user-data', {
        templateUrl: 'partials/user-data.html',
        controller: 'userController'
    }).when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contactController'
    }).when('/contact-data', {
        templateUrl: 'partials/contact-data.html',
        controller: 'contactController'
    }).when('/operator', {
        templateUrl: 'partials/operator.html',
        controller: 'operatorController'
    }).when('/operator-data', {
        templateUrl: 'partials/operator-data.html',
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
        PESQUISAR: 'Pesquisar por:',
        SALVAR: 'Salvar',
        CANCELAR: 'Cancelar'
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
        TITULO_DADOS: 'Dados do Contato',
        NOME: 'Nome',
        TELEFONE: 'Telefone',
        OPERADORA: 'Operadora',
        ADD: 'Adicionar Contato'
      },
      USUARIO:{
        TITULO: 'Lista Usuário',
        TITULO_DADOS: 'Dados do Usuário',
        NOME: 'Nome',
        SOBRENOME: 'Sobrenome',
        EMAIL: 'E-mail',
        SENHA: 'Senha',
        ADD: 'Adicionar Usuário'
      },
      OPERADORA:{
        TITULO: 'Lista Operadora',
        TITULO_DADOS: 'Dados da Operadora',
        DESCRICAO: 'Descrição',
        VALOR: 'Valor',
        ADD: 'Adicionar Operadora'
      }
    });
    $translateProvider.translations('en', {
      GENERICO:{
        PESQUISAR: 'Search for:',
        SALVAR: 'Save',
        CANCELAR: 'Cancel'
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
        TITULO_DADOS: 'Contact data',
        NOME: 'Name',
        TELEFONE: 'Phone',
        OPERADORA: 'Operator',
        ADD: 'Add Contact'
      },
      USUARIO:{
        TITULO: 'List User',
        TITULO_DADOS: 'User data',
        NOME: 'Name',
        SOBRENOME: 'Last Name',
        EMAIL: 'E-mail',
        SENHA: 'Password',
        ADD: 'Add User'
      },
      OPERADORA:{
        TITULO: 'List Operator',
        TITULO_DADOS: 'Operator data',
        DESCRICAO: 'Description',
        VALOR: 'Value',
        ADD: 'Add Operator'
      }
    });
    $translateProvider.preferredLanguage('pt');

    $translateProvider.useSanitizeValueStrategy('escaped');

}]);
