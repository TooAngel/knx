/**
* knx.js - a KNX protocol stack in pure Javascript
* (C) 2016-2017 Elias Karakoulakis
*/

Error.stackTraceLimit = Infinity;

const knx = require('../..');
const address = require('../../src/Address.js');
const assert = require('assert');
const test = require('tape');

//
test('KNX connect routing', function(t) {
  var connection = knx.Connection({
    debug: true,
    handlers: {
      connected: function() {
        console.log('----------');
        console.log('Connected!');
        console.log('----------');
        t.pass('connected in routing mode');
        this.Disconnect();
      },
      disconnected: function() {
        t.pass('disconnected in routing mode');
        t.end();
        process.exit(0);
      },
      error: function() {
        t.fail('error connecting');
        t.end();
        process.exit(1);
      }
    }
  });
});

setTimeout(function() {
  console.log('Exiting with timeout...');
  process.exit(2);
}, 1000);
