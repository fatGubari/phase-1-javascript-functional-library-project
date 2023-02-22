myEach([1, 2, 3], alert)
myEach({ one: 1, two: 2, three: 3 }, alert)
function myEach(collection, callback) {
    let collections = CheckArrayOrObject(collection)

    for (const element of collections) {
        callback(element)
    }
    return collection
}

myMap([1, 2, 3], function (num) { return num * 3; })
myMap({ one: 1, two: 2, three: 3 }, function (num, key) { return num * 3; })
function myMap(collection, callback) {
    let collections = CheckArrayOrObject(collection)
    let newArray = []

    for (const element of collections) {
        newArray.push(callback(element))
    }
    return newArray
}

myReduce([1, 2, 3], function (acc, val, collection) { return acc + val; }, 10)
myReduce({ one: 1, two: 2, three: 3 }, function (acc, val, collection) { return acc + val; });
function myReduce(collection, callback, acc) {
    let collections = CheckArrayOrObject(collection)
    if (!acc) {
        acc = collections[0];
        collections = collections.slice(1);
    }
    for (const element of collections) {
        acc = callback(acc, element, collections);
    }
    return acc;
}

myFind([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0 })
myFind({ one: 1, three: 3, four: 4, six: 6 }, function (num) { return num % 2 == 0 })
function myFind(collection, predicate) {
    let collections = CheckArrayOrObject(collection)

    for (let i = 0; i < collections.length; i++) {
        if (predicate(collections[i]))
            return collections[i];
    }
    return undefined;
}

myFilter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0 })
myFilter({ one: 1, three: 3, five: 5 }, function (num) { return num % 2 == 0 })
function myFilter(collection, predicate) {
    let collections = CheckArrayOrObject(collection)
    let newArray = []

    for (let i = 0; i < collections.length; i++) {
        if (predicate(collections[i]))
            newArray.push(collections[i]);
    }
    return newArray;
}

mySize({ one: 1, two: 2, three: 3 })
mySize([])
function mySize(collection) {
    let collections = CheckArrayOrObject(collection)
    return collections.length;
}

myFirst([5, 4, 3, 2, 1])
myFirst([5, 4, 3, 2, 1], 3)
function myFirst(arr, number) {
    if (number > 0) {
        return arr.slice(0, number)
    } else {
        return arr[0];
    }
}

myLast([5, 4, 3, 2, 1])
myLast([5, 4, 3, 2, 1], 3)
function myLast(arr, number) {
    if (number < arr.length) {
        return arr.slice(arr.length - number, arr.length)
    } else {
        return arr[arr.length - 1]
    }
}

myKeys({ one: 1, two: 2, three: 3 })
function myKeys(object) {
    let keys = []
    for (let key in object) {
        keys.push(key)
    }
    return keys
}

myValues({ one: 1, two: 2, three: 3 })
function myValues(object) {
    let values = []
    for (let key in object) {
        values.push(object[key])
    }
    return values
}

function CheckArrayOrObject(collection) {
    if (collection instanceof Array) {
        return collection.slice()
    } else {
        return Object.values(collection)
    }
}