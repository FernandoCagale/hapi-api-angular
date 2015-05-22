exports.register = function(server, options, next) {

    server.route({
      method: 'GET',
      path: '/partials/{path*}',
      handler: {
        directory: { 
          path: './public/views/partials' 
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/css/{path*}',
      handler: {
        directory: { 
          path: './public/css' 
        }
      }
    }); 

    server.route({
      method: 'GET',
      path: '/img/{path*}',
      handler: {
        directory: { 
          path: './public/img' 
        }
      }
    }); 

    server.route({
      method: 'GET',
      path: '/lib/{path*}',
      handler: {
        directory: { 
          path: './public/lib' 
        }
      }
    });    

    server.route({
      method: 'GET',
      path: '/js/{path*}',
      handler: {
        directory: { 
          path: './public/js' 
        }
      }
    }); 

    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
        file: './public/views/index.html' 
      }
    });         

  //server.route([        
      //{ method: 'GET', path: '/partials/{path*}', handler: { directory: { path: './public/views/partials' } } }, 
      //{ method: 'GET', path: '/css/{path*}', handler: { directory: { path: './public/css' } } },
      //{ method: 'GET', path: '/img/{path*}', handler: { directory: { path: './public/images' } } },
      //{ method: 'GET', path: '/js/{path*}', handler: { directory: { path: './public/js' } } },
      //serve index as entry point into angular app
      //{ method: 'GET', path: '/{path*}', handler: {file: './public/views/index.html'} }

  //]);

}

exports.register.attributes = {
  name: 'route',
  version: '0.0.1'
};
