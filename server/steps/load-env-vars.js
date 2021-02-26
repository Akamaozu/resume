var dotenv = require('dotenv'),
    path = require('path');

module.exports = function create_step_load_env_vars( task, config ){
  if( ! config ) config = {};

  task.step( 'load env variables', function load_env_vars(){
    var path_to_env = config.path || path.join( process.cwd(), '.env' );

    dotenv.config({ path: path_to_env });
    task.next();
  });
}