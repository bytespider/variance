var average = require('average');

module.exports = function variance(values) {
    'use strict';
    
    var mean = average(values);
    
    function sum(a, b) {
        var diff = b - mean;
        return a + (diff * diff);
    }

    return values.reduce(sum, 0) / values.length;
};