import twoMil from './2mil'
import fourMil from './4mil'
import sixMil from './6mil'
import eightMil from './8mil'
import tenMil from './10mil'

function isOdd(number){
    if (number < 2000000){
        return twoMil(number);
    }
    else if (number < 4000000 && number > 2000000){
        return fourMil(number);
    }
    else if (number < 6000000 && number > 4000000){
        return sixMil(number);
    }
    else if (number < 8000000 && number > 6000000){
        return eightMil(number);
    }
    else if (number < 10000000 && number > 8000000){
        return tenMil(number);
    }
}

export default isOdd;