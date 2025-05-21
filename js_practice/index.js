const fs = require('fs')
const readFromFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}



readFromFile("a.txt").then(data => {
    console.log(data)
})