'use strict';

let events = require('../eventEmitter.js');
const handleDriver = require('../src/driver.js');
const handleGlobal = require('../src/global.js');
const { createPackage,
  handleDelivered, }= require('../src/vendor.js');

describe('testing the functions of meeting lab', () => {
  test('Test 1', ()=> {

    events.on('global', handleGlobal);
    events.on('pickup', handleDriver);
    events.on('delivered', handleDelivered);
    createPackage('Wood Store');
  })
});

