'use strict';

function handleGlobal(payload) {
  let box = {
    'event': payload.event,
    'time': new Date(),
    'payload': payload.payload
  }
  console.log('Event', box);
}

module.exports = handleGlobal;