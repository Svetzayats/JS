let object1 = {
    name: 'John',
    order: {
        price: 20
    },
    age: 10
};

let object2 = {
    name: 'John',
    order: {
        price: 20
        ,
    },
    age: 10
};

function deepEqual (a, b) {
    if (a === b) {
        return true;
    }

    if (typeof(a) != "object" || a == null || b == null || typeof(b) != "object") {
        return false;
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }

    for (let key in a) {

        if (!(b[key])) return false;

        if (typeof a[key] === "object" || typeof b[key] === "object") {
            return deepEqual(a[key], b[key]);
        }

        if (a[key] === b[key]) {
            continue;
        }
        else return false;
    }
    return true;

}

console.log (deepEqual(object2, object1));