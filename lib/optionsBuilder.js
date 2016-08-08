'use strict';

var _ = require('lodash');

module.exports = function optionsBuilder(grunt, target, config) {
  if (!_.includes(['build', 'run', 'test'], target)) {
    grunt.fatal('Invalid option sent to rust: ' + target);
  }

  var options = [target];

  _.concat(options, getGeneralOptions(config));
  _.concat(options, getTargetSpecificOptions(target, config));

  return options;
};

function getGeneralOptions(config) {
  var generalOptions = [];

  if (config.bin) {
    generalOptions.push('--bin ' + config.bin);
  }
  if (config.jobs > 0) {
    generalOptions.push('--jobs ' + config.jobs);
  }
  if (config.release) {
    generalOptions.push('--release');
  }
  if (config.features && config.features.length > 0) {
    var features = '--features ';
    _.forEach(config.features, function (feature) {
      features += (feature + ' ');
    });
    generalOptions.push(features);
  }
  if (config.noDefaultFeatures) {
    generalOptions.push('--no-default-features');
  }
  if (config.target) {
    generalOptions.push('--target ' + config.target);
  }
  if (config.manifestPath) {
    generalOptions.push('--manifest-path ' + config.manifestPath);
  }
  return generalOptions;
}

function getTargetSpecificOptions(target, config) {
  if (target === 'run') {
    return getRunTargetOptions();
  } else if (target === 'build') {
    return getBuildTargetOptions(config);
  } else {
    return getTestTargetOptions(config);
  }
}

function getRunTargetOptions() {
  return [];
}

function getBuildTargetOptions(config) {
  var buildOptions = [];

  if (config.lib) {
    buildOptions.push('--lib');
  }
  return buildOptions;
}

function getTestTargetOptions(config) {
  var testOptions = [];

  if (config.lib) {
    testOptions.push('--lib');
  }
  if (config.doc) {
    testOptions.push('--doc');
  }
  if (config.test) {
    testOptions.push('--test ' + config.test);
  }
  if (config.noRun) {
    testOptions.push('--no-run');
  }
  return testOptions;
}
