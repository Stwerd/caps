'use strict';

let events = require('../eventEmitter.js')

function handlePickup(payload){
  console.log(`DRIVER: picked up ${payload.orderId}`);
  events.emit('global', { event:'in-transit', payload: payload});
  events.emit('in-transit', payload);

  console.log(`DRIVER: delivered ${payload.orderId}`)
  events.emit('global', { event:'delivered', payload: payload});
  events.emit('delivered', payload);
}

module.exports = handlePickup;