'use strict';

var spawn = require('child_process').spawn;
var optionsBuilder = require('../lib/optionsBuilder.js');

module.exports = function (grunt) {
  grunt.registerMultiTask('rust', 'Building rust project', function () {
    var done = this.async();
    var cargoProgram = this.target;
    var options = optionsBuilder(grunt, cargoProgram, this.data);

    var cargo = spawn('cargo', options);

    cargo.stdout.on('data', function (data) {
      grunt.log.verbose.write(data.toString());
    });

    cargo.stderr.on('data', function (data) {
      grunt.log.verbose.write(data.toString());
    });

    cargo.on('close', function () {
      grunt.log.writeln('Cargo Finished');
      done();
    });
  });
};
