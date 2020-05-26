function recordVideo(videoNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Video #${videoNumber} has finished downloading`)
        }
            , Math.random() * 10000)
    })
}

// waits for all to resolve then gives an array of final objects
Promise.all([recordVideo(1), recordVideo(2), recordVideo(3)])
    .then(messageArray => console.log(messageArray))

//Promise.race returns the first promise to resolve
