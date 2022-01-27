const fs = require('fs')
    // 传统写法
    // fs.readFile('./demo.txt', (err, date) => {
    //     fs.writeFile('./foo.txt', date, (err) => {
    //         console.log(err)
    //     })
    // })

// stream写法

const Write = fs.createWriteStream('./demo.txt')
const Read = fs.createReadStream('./foo.txt')

Read.pipe(Write)

// Write.close();