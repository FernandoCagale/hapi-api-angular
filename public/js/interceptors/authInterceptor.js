app.factory('authInterceptor', function($q, $location) {

    var authInterceptor = {

        request: function(config){

            var token = $.jStorage.get('authorization');

            if (config.url == 'partials/auth.html')
              $.jStorage.set('authorization', null);

            if(token)
              config.headers.Authorization = 'Bearer ' + token;
            else
              $location.path('/auth');

            return config;
        },

        responseError: function(resposta) {
            if (resposta.status == 401) {
              $location.path('/auth');
            }
            return $q.reject(resposta);
        }
    }

    return authInterceptor;
});
