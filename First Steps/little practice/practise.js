"use strict";

if (1) {
    console.log('Ok!');
}else {
    console.log('Error');
}

const num1 = 50;

if (num1 < 49) {
    console.log('Error');
}else if (num1 > 100) {
    console.log('Too much');
} else {
    console.log('Ok!');
}

(num1 === 50) ? console.log('Ok!') : console.log('Error');

const num = '50';

switch (num) {
    case '49':
        console.log('Wrong');
        break;
    case '100':
        console.log('Wrong');
        break;
    case '50':
        console.log('Yeah');
        break;    
    default:
        console.log('Try again');
        break;             
}
