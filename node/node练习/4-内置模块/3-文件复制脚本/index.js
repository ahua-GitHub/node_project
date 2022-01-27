const fs = require('fs')
const path = require('path')
    //给node传递参数
    //源文件夹地址
    // ../2-fs/newFile/refile
const srcDir = process.argv[2]
    //目标文件夹地址
    //../2-fs/newFile/file
const destDir = process.argv[3]

copyFiles(srcDir, destDir)
    //封装成函数，在文件中有多个文件夹时可以递归调用函数复制所有子目录下的文件
function copyFiles(src, dest) {
    //获取源文件地址中的所有文件和文件格式，
    fs.readdir(src, { withFileTypes: true }, (err, files) => {
        //files结果是一个对象
        if (err) {
            console.log(err)
        }
        //遍历所有的所有的文件
        files.forEach(function(srcFile) {
            //判断是否为文件夹
            if (srcFile.isDirectory()) {
                //源目标路径加上文件名即为新创建文件夹的路径
                const destFile1 = path.resolve(dest, srcFile.name)
                const srcFile1 = path.resolve(src, srcFile.name)
                    //同步创建文件夹，可以在创建文件夹的时候不显示null
                fs.mkdir(destFile1, err => {
                        console.log(err)
                    })
                    //如果是文件夹递归调用复制该文件夹中的文件
                copyFiles(srcFile1, destFile1)
                    // console.log(srcFile1)
                    // console.log(destFile1)
            } else {
                // console.log(srcFile)
                //拼接源文件的路径
                const srcFileDir = path.resolve(src, srcFile.name)
                    //拼接复制目标文件路径
                const destFile = path.resolve(dest, srcFile.name)
                    //如果该路径下不存在同名文件则复制该文件
                if (!fs.existsSync(destFile.name)) {
                    fs.promises.copyFile(srcFileDir, destFile)
                } else {
                    console.log('文件名重复，复制失败')
                }

            }

        })
    })
}
console.log('复制中。。。。')