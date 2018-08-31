function map (arr, callback) {
    let result = [];
    let temp = arr.reduce(function (previousValue, current) {
        result.push(callback(current));
        }, 0);
    return result;
}

let array = [1, 2, 3, 4, 5];

//for example
function double(number) {
    return number*=2;
}

let result = map (array, double);
console.log (result);