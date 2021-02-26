var express = require( 'express' ),
    path = require('path');

module.exports = function create_step_express_serve_css_dir( task, config ){
  if( ! config ) config = {};

  task.step( 'express serve css directory', function express_serve_css_dir(){
    var path_to_css_dir = path.resolve( __dirname, '../../css' ),
        static_serve_dir = express.static( path_to_css_dir ),
        express_instance = task.get( 'express' ),
        mount_path = config.mount_path || '/css';

    express_instance.use( mount_path, static_serve_dir );
    task.next();
  });
}