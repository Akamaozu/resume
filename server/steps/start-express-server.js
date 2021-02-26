module.exports = function create_step_start_express_server( task, config ){
  if( ! config ) config = {};

  task.step( 'start express server', function start_express_server(){
    var express_instance = task.get( 'express' ),
        port = task.get( 'http-server-port' );

    var http_instance = express_instance.listen( port, function( error ){
      if( error ) return task.end( error );

      task.set( 'http-instance', http_instance );
      task.next();
    });
  });
}