const fs = require("fs")

fs.rename('./newFile/file','./newFile/refile',err => {
    console.log(err)
})
