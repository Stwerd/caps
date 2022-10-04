'use strict';

const Event = require('events');
const events = new Event();

function handleHello (payload){
  console.log(payload);
}

events.on('Hi', handleHello);
let string = 'Jackson';

events.emit('Hi', string);