var path = require('path');

module.exports = function create_step_serve_main_html( task, config ){
  if( ! config ) config = {};

  task.step( 'serve main html', function serve_main_html(){
    var express_instance = task.get( 'express' ),
        mount_path = config.mount_path || '/',
        path_to_main_html = path.join( __dirname, '../../html/resume.html' );

    express_instance.get( mount_path, function( req, res ){
      res.sendFile( path_to_main_html );
    });

    task.next();
  });
}