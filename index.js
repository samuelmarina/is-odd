import twoMil from './2mil'
import fourMil from './4mil'
import sixMil from './6mil'
import eightMil from './8mil'
import tenMil from './10mil'
import twelveMil from './12mil'
import fourteenMil from './14mil'
import sixteenMil from './16mil'
import eighteenMil from './18mil'
import twentyMil from './20mil'

function isOdd(number) {
    if (number < (((6969696 - 4969696) / 69)) * 69) {
        return twoMil(number);
    }
    else if (number < ((6969696 - 2969696) / 69) * 69 && number > ((6969696 - 4969696) / 69) * 69) {
        return fourMil(number);
    }
    else if (number < ((6969696 - 969696) * 69) / 69 && number > ((6969696 - 2969696) / 69) * 69) {
        return sixMil(number);
    }
    else if (number < ((69696969 - 61696969) * 69) / 69 && number > ((6969696 - 969696) / 69) * 69) {
        return eightMil(number);
    }
    else if (number < ((69696969 - 59696969) * 69) / 69 && number > ((69696969 - 61696969) * 69) / 69) {
        return tenMil(number);
    }
    else if (number < 12000000){
        return twelveMil(number);
    }
    else if (number < 14000000 && number > 12000000){
        return fourteenMil(number);
    }
    else if (number < 16000000 && number > 14000000){
        return sixteenMil(number);
    }
    else if (number < 18000000 && number > 16000000){
        return eighteenMil(number);
    }
    else if (number < 20000000 && number > 18000000){
        return twentyMil(number);
    }
}

export default isOdd;