function filter(arr, callback) {
    let filterArray = [];
    let newArray = [];
    newArray = array.reduce(function (previousValue, current) {
        if (callback(current) === true) {
            filterArray.push(current);
        }
    }, 0);
    return filterArray;
}

//for example

let array = [1, 2, 3, 4, 5];

function evenNumber(number) {
    return number % 2 === 0;
}

let result = filter(array, evenNumber);
console.log(result);

