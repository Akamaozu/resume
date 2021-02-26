var express = require('express');

module.exports = function create_step_create_express_instance( task, config ){
  if( ! config ) config = {};

  task.step( 'create express instance', function create_express_instance(){
    task.set( 'express', express() );
    task.next();
  });
}