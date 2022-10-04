'use strict';

let events = require('../eventEmitter.js');
const handleDriver = require('../src/driver.js');
const handleGlobal = require('../src/global.js');
const createPackage = require('../src/vendor.js');

describe('testing the functions of meeting lab', () => {
  test('Test 1', ()=> {

    createPackage('Wood Store');
    events.on('pickup', handleDriver);
    events.on('global', handleGlobal);
  })
});

