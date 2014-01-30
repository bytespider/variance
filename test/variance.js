var variance = require('../');
var test = require('tap').test;

test('variance', function (t) {
    t.plan(1);

    var result = variance([600, 470, 170, 430, 300]);
    t.equal(result, 21704);
});