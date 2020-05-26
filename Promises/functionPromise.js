userLeft = true
userWatchingCatMeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':c'
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Cat Superiority'
            })
        } else {
            resolve('Nice')
        }
    })
}

watchTutorialPromise()
    .then(message => console.log("Promise:", message))
    .catch(({ name, message }) => console.log(`Error in Promise: ${name} ${message}`))

// OR, inside an async function,
async function test() {
    try {
        let message = await watchTutorialPromise()
        console.log("Testing Await (No Error):", message)
    } catch (err) {
        // Returns value inside reject()?!
        console.log("Testing Await (Error):", err)
    }
}

test()

// Async functions always return a promise
async function asyncFunction() {
    return "hello"
}

// Returns a Promsise even though none was specified via 'async'
asyncFunction().then(data => console.log(data))

async function testError() {
    throw Error(JSON.stringify({ "status": "500", "message": "wat" }));
}

async function noTopLevelAwait() {
    try {
        await testError()
    } catch (err) {
        // How to log message inside of error
        console.log(JSON.parse(err.message))
    }
}

noTopLevelAwait()