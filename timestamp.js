'use strict';

const moment = require('moment');
const formats = {
    unix: 'X',
    natural: 'MMMM D, YYYY'
}

const timestamp = function (str) {
    let format, time;
    if (/\D/.test(str)) {
        format = 'natural';
    } else {
        format = 'unix';
    }
    time = moment(str, formats[format]);
    
    if (!time.isValid()) time.format = () => null;
    
    return {
        unix: time.format(formats.unix),
        natural: time.format(formats.natural)
    }
}

module.exports = timestamp;