var create_task = require('cjs-task'),
    start_server = create_task();

require( './steps/load-env-vars' )( start_server );
require( './steps/load-http-server-port' )( start_server );
require( './steps/create-express-instance' )( start_server );
require( './steps/express-serve-css-dir' )( start_server, { mount_path: '/css' });
require( './steps/express-serve-main-html' )( start_server, { mount_path: '/' });
require( './steps/start-express-server' )( start_server );

start_server.callback( function( error ){
  var log_entry = 'action=start-server success='+ ( ! error );
  if( error ) log_entry += ' error="'+ error.message +'" stack=\n'+ error.stack;
  else log_entry += ' port='+ start_server.get( 'http-server-port' );

  console.log( log_entry );
});

start_server.start();