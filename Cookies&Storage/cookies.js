console.log(new Date(2020, 6))
console.log(JSON.stringify(new Date(2020, 6).toJSON()))
console.log(new Date(2020, 6).toISOString())
x = new Date(2020, 6)
console.log(x.toUTCString())

// Add/Overwrite ~ONE~ cookie
document.cookie =
    // Has name & value, Expiry date (in UTC/GMT),
    `name=Kyle;
    expires=${new Date(2020, 6).toUTCString()}`


// No good way to view/process cookies by default, use 3rd party libraries
console.log(document.cookie);
