'use strict';

let events = require('./eventEmitter.js');
const handleDriver = require('./src/driver/driver.js');
const handleGlobal = require('./src/global.js');
const { createPackage, handleDelivered, } = require('./src/vendor/vendor.js');

events.on('global', handleGlobal);
events.on('pickup', handleDriver);
events.on('delivered', handleDelivered);
createPackage('Wood Store');