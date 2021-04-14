const func = require('./index.js');
const { dummy1 } = require('./dummyData.js');
const { dummy2 } = require('./dummyData.js');
const { dummy3 } = require('./dummyData.js');

const test1 = func(dummy1[1], dummy1[0]);
console.log(test1);

const test2 = func(dummy2[1], dummy2[0]);
console.log(test2);

const test3 = func(dummy3[1], dummy3[0]);
console.log(test3);