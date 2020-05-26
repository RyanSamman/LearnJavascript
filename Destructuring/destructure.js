// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let obj = {
    "array": ["1", "2", "3", "4", "5", "6", "7"],
    "test": "test",
    "a": "b",
    "c": {
        "d": "e",
        "idk": "what else to put"
    }
}

let testArray = obj.array

// ~ Array destructuring
let a, b, rest

// a -> Assigns elements in order;
// ,, -> skips an element,
// b=6 is the default in case no value has been given
// ...rest assigns the remaining
[a, , b = 6, ...rest1] = testArray

console.log(`a: ${a}; b: ${b}; rest: ${rest1}`)

// ~ Object destructuring
console.log("Object Destructuring:")

let { array, a: alpha, m: missing = "Default", ...rest2 } = obj

// ${} doesnt convert objects into string form
console.log(`array:`, array)

// Renaming a to alpha
console.log(`alpha: ${alpha}`)

// Renaming m to missing and putting a default value;
// If no default value is given & it is not inside the destructured object,
// the value will be 'undefined'
console.log(`missing: ${missing}`)

// Rest of the variables
console.log(`rest:`, rest2)

// Tip: Numbers and strings have different colors
console.log([1, 2, 3, 4], "1")

