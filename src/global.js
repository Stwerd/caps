'use strict';

let events = require('../eventEmitter.js');

function handleGlobal (payload) {
  var d = new Date(); // for now
  let time = `${d.getHours}:${d.getMinutes}`;
  let events = {
    'event': payload.event,
    'time': time,
    'payload':payload.payload
  }
  console.log(`Events: ${events}`);
}

module.exports = handleGlobal;