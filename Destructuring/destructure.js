// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// ~ Array destructuring
let a, b, rest

// a -> Assigns elements in order;
// ,, -> skips an element,
// b=6 is the default in case no value has been given
// ...rest assigns the remaining
[a, , b = 6, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(`a: ${a}; b: ${b}; rest: ${rest}`)



obj = {
    "array": ["1", "2", "3", "4", "5", "6", "7"],
    "test": "test",
    "a": "b",
    "c": {
        "d": "e"
    }
}

//{ array, ...rest } = { obj };

//console.log(array)