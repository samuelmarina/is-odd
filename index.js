// import twelveMil from './12mil'
// import fourteenMil from './14mil'
// import sixteenMil from './16mil'
// import eighteenMil from './18mil'
// import twentyMil from './20mil'

var twoMil = require('./10mil/2mil');
var fourMil = require('./10mil/4mil');
var sixMil = require('./10mil/6mil');
var eightMil = require('./10mil/8mil');
var tenMil = require('./10mil/10mil');

var twelveMil = require('./20mil/12mil');
var fourteenMil = require('./20mil/14mil');
var sixteenMil = require('./20mil/16mil');
var eighteenMil = require('./20mil/18mil');
var twentyMil = require('./20mil/20mil');


function isOdd(number){
    if (number < 2000000){
        return twoMil.twoMil(number);
    }
    else if (number < 4000000 && number > 2000000){
        return fourMil.fourMil(number);
    }
    else if (number < 6000000 && number > 4000000){
        return sixMil.sixMil(number);
    }
    else if (number < 8000000 && number > 6000000){
        return eightMil.eightMil(number);
    }
    else if (number < 10000000 && number > 8000000){
        return tenMil.tenMil(number);
    }
    else if (number < 12000000){
        return twelveMil.twelveMil(number);
    }
    else if (number < 14000000 && number > 12000000){
        return fourteenMil.fourteenMil(number);
    }
    else if (number < 16000000 && number > 14000000){
        return sixteenMil.sixteenMil(number);
    }
    else if (number < 18000000 && number > 16000000){
        return eighteenMil.eighteenMil(number);
    }
    else if (number < 20000000 && number > 18000000){
        return twentyMil.twentyMil(number);
    }
}

module.exports = isOdd;