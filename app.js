
var PebbleApp = module.exports = function() {
  this.name = 'pebble';
};

PebbleApp.prototype.init = function(elroy) {
  elroy.observe('type="smartwatch"')
    .subscribe(function(device) {
      elroy.expose(device);
    });
};
