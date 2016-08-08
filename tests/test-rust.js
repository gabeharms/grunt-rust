'use strict';
var assert = require('assert');
var runTask = require('grunt-run-task');
var fs = require('fs');
var rimraf = require('rimraf');

describe('grunt-rust', function () {
  this.timeout(20000);

  describe('rust:test', function () {
    describe('basic configuration', function () {
      var task = runTask.task('rust:test', {test: {}});
      it('produces a target folder', function (done) {
        rimraf('./target', function () {                      // Delete 'target' folder
          task.run('test', function () {                      // Run 'rust:test'
            fs.exists('./target', function (exists) {         // Assert 'target' folder exists
              assert(exists, 'target folder should exist');
              done();
            });
          });
        });
      });
    });
  });
  describe('rust:build', function () {
    describe('basic configuration', function () {
      var task = runTask.task('rust:build', {build: {}});
      it('produces a target folder', function (done) {
        rimraf('./target', function () {                      // Delete 'target' folder
          task.run('test', function () {                      // Run 'rust:build'
            fs.exists('./target', function (exists) {         // Assert 'target' folder exists
              assert(exists, 'target folder should exist');
              done();
            });
          });
        });
      });
    });
  });
  describe('rust:run', function () {
    describe('basic configuration', function () {
      var task = runTask.task('rust:run', {run: {}});
      it('produces a target folder', function (done) {
        rimraf('./target', function () {                      // Delete 'target' folder
          task.run('test', function () {                      // Run 'rust:run'
            fs.exists('./target', function (exists) {         // Assert 'target' folder exists
              assert(exists, 'target folder should exist');
              done();
            });
          });
        });
      });
    });
  });
});
