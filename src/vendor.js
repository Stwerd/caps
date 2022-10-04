'use strict';

let events = require('../eventEmitter.js');

function createPackage (storeName) {
  let payload = {
    "store": storeName,
    "orderId": "q2434h8b8asd",
    "customer": "Jackson",
    "address": "1123 Fake Street"
  }
  events.emit('pickup', payload);
  events.emit('global', {event:'pickup', payload:payload})
  events.on('delivered', (name) => console.log(`Thank you, ${payload.customer}`));
}

module.exports = createPackage;