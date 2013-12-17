'use strict';

var _ = require('lodash');
var bunyan = require('bunyan');
var LoggingFeature = require('orbs').features.LoggingFeature;

/**
 * Mixes Bunyan logging implementation into an object
 *
 * Example Usage: 
 *
 *    var BunyanLoggingFeature = require('orbs-feature-logging-bunyan');
 *    function Foo () {
 *      this.debug('Debug log');
 *      this.info('Info log');
 *      this.error('Error log');
 *    }
 *    BunyanLoggingFeature.installTo(Foo.prototype);
 *    
 */
var BunyanLoggingFeature = LoggingFeature.create('bunyan', {
  levels: ['trace','debug','info','warn','error','fatal'],
  logger: bunyan.createLogger({
    name: 'bunyan'
  }),
  log: function(level) {
    var args = _.toArray(arguments);
    this.logger[args.shift()](this.logger, args);
  }
});

module.exports = BunyanLoggingFeature;

