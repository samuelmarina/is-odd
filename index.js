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