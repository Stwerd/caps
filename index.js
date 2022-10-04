'use strict';

let events = require('../eventEmitter.js');
const driver = require('../src/driver.js');
const handleGlobal = require('../src/global.js');
const vendor = require('../src/vendor.js');

vendor.create('Wood Store');
events.on('Global', handleGlobal);
events.on('delivered', vendor.ty);

