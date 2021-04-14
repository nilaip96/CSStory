const func = require('./index.js');
const { dummy1 } = require('./dummyData.js');
const { dummy2 } = require('./dummyData.js');
const { dummy3 } = require('./dummyData.js');

const test1 = func(dummy1[0], dummy1[1]);
console.log(test1);

const test2 = func(dummy2[0], dummy2[1]);
console.log(test2);

const test3 = func(dummy3[0], dummy3[1]);
console.log(test3);