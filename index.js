var isEven = require('@samuelmarina/is-even');

function isOdd(number) {
    return !isEven(number);
}

export default isOdd;