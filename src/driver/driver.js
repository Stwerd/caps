'use strict';

let events = require('../../eventEmitter.js')

const handlePickup = (socket) => (payload)=>{
  console.log(`DRIVER: picked up ${payload.orderId}`);
  socket.emit('global', { event:'in-transit', payload: payload});
  socket.emit('in-transit', payload);

  console.log(`DRIVER: delivered ${payload.orderId}`)
  socket.emit('global', { event:'delivered', payload: payload});
  socket.emit('delivered', payload);
}

module.exports = handlePickup;