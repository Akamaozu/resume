var http = require('http');

module.exports = function create_step_start_express_server( task, config ){
  if( ! config ) config = {};

  task.step( 'start express server', function start_express_server(){
    var express_instance = task.get( 'express' ),
        port = task.get( 'http-server-port' );

    var http_instance = http.createServer( express_instance );

    http_instance.on( 'error', function( error ){
      if( task && task.end ) return task.end( error );
    });

    http_instance.listen( port, function(){
      task.set( 'http-instance', http_instance );
      task.next();
    });
  });
}