module.exports = function create_step_load_http_server_port( task, config ){
  if( ! config ) config = {};

  task.step( 'load http server port', function load_http_server_port(){
    var http_server_port = process.env.HTTP_SERVER_PORT || config.port || 80;

    task.set( 'http-server-port', http_server_port );
    task.next();
  });
}