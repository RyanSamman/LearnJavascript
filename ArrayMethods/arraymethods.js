// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

// Gets the array's length
console.log(arr.length)

// forEach
// Executes the function on every index of the array, like a for loop
/**
 * 
 */
arr.forEach((currentValue, index, array) => {
    // currentValue is the current value of the index being iterated upon,
    // index is the current index of the value (optional)
    // array is the array being iterated upon (optional); can be used 

    // console.log(currentValue, index)
})


// map
// Creates new array from old one, modified with return of function on that index

// How to write docstrings for javascript functions:
// ~~ Type /** and press enter ~~ to create
/**
 * 
 * @param {*} value Current value
 * @returns {*} Returns double the value
 */
function double(value) {
    return value * 2;
}

// Creates new array from the old one, with each value being processed by a function
// Callback takes value, index, array
let newArr = arr.map(double);
console.log("\nDoubled Array w. map: ", newArr)

// filter
// Whether the result of the function is true or false, will add the items
// Callback takes value, index, array

// Ex. Seeing if something is even or odd
newArr = arr.filter((value, index, array) => {
    return Number.isInteger(value / 2)
})

console.log("\n(filter)ed array for only even values", newArr)

// every
// Tests if all items return true 
let result = arr.every((value, index, array) => {
    return value >= 0
})

console.log("\nCheck if all values are positive:", result)


// some
// Tests if one or more return true
result = arr.some((value, index, array) => {
    return value === 5
})

console.log("\nCheck if (some) value is equal to 5:", result)

// * reduce
// from an initial position, it returns a "Reduced" variable 

// performs the function with params of "accumulator" & the value in the current index of the array
// Initially, "accumulator" will be the same value as the initial value
// Then, the returned value of the function is the new "accumulator"

// Reduce #1; Sum of an array
const values = [1, 2, 3, 4, 5];

// Classic implementation of reduce
const total = values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

console.log(`Total in reduce #1: ${total}\n`)


// Reduce #2; Convert this object to a new one

const inputFromServer = [
    { id: 'a', name: 'Amy' },
    { id: 'b', name: 'Blanche' },
    { id: 'c', name: 'Claude' }
];

/* Wanted output
const desiredOutput = {
    a: { id: 'a', name: 'Amy' },
    b: { id: 'b', name: 'Blanche' },
    c: { id: 'c', name: 'Claude' }
};
*/

let newOutput = inputFromServer.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
}, {}) // <- Empty initial object

console.log("New object in reduce #2:\n", newOutput);