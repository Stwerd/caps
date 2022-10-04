'use strict';

function handleGlobal(payload) {
  var d = new Date(); // for now
  let time = `${d.getHours()}:${d.getMinutes()}`;
  let box = {
    'event': payload.event,
    'time': time,
    'payload': payload.payload
  }
  console.log("Event", box);
}

module.exports = handleGlobal;