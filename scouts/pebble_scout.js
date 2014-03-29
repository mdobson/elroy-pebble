var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Pebble = require('node-pebble');
var PebbleDriver = require('../drivers/pebble_driver.js');
var serial = '/dev/tty.PebbleE8EA-SerialPortSe';

var PebbleScout = module.exports = function() {
  EventEmitter.call(this);
};
util.inherits(PebbleScout, EventEmitter);

PebbleScout.prototype.init = function(next) {
  var self = this;
  var pebble = new Pebble(serial);
  pebble.on('open', function() {
    self.emit('discover', PebbleDriver, pebble);
  });
};

