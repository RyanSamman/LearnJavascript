// ~ Session storage - Erased when tab is closed

// Clear data
sessionStorage.clear()

// Data is stored in key value pairs of strings
sessionStorage.setItem('key', 'value');

// Storing Objects
obj = {
    'testing': 'stringify',
    'array': ["news", "test", "idk", "oil"]
}

// Store them by converting into strings
console.log(JSON.stringify(obj));
sessionStorage.setItem('preferences', JSON.stringify(obj))

// Retrieve object & parse into JSON
x = sessionStorage.getItem('preferences')
console.log(JSON.parse(x))

// Same can be done with local storage