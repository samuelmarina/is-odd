import twoMil from './2mil'
import fourMil from './4mil'
import sixMil from './6mil'
import eightMil from './8mil'
import tenMil from './10mil'

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
}

export default isOdd;