var express = require( 'express' ),
    path = require('path');

module.exports = function create_step_express_serve_fonts_dir( task, config ){
  if( ! config ) config = {};

  task.step( 'express serve fonts directory', function express_serve_fonts_dir(){
    var path_to_fonts_dir = path.resolve( __dirname, '../../fonts' ),
        static_serve_dir = express.static( path_to_fonts_dir ),
        express_instance = task.get( 'express' ),
        mount_path = config.mount_path || '/fonts';

    express_instance.use( mount_path, static_serve_dir );
    task.next();
  });
}