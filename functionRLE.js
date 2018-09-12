'use strict';

function rle(value) {
    let arrFromValue = value.split('');
    let finalArray = [];
    let result;

    while (arrFromValue[1]) {

        for (let i = 0; i <= arrFromValue.length; i++) {
            if (arrFromValue[i] !== arrFromValue[i + 1]) {
                finalArray.push(arrFromValue[i]);
                if (i + 1 >= 2) {
                    finalArray.push(i + 1);
                }
                arrFromValue = arrFromValue.slice(i + 1);
                break;
            }
        }

    }

    result = finalArray.join('');
    return result;

}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
