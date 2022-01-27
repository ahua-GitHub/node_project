const fs = require('fs')
const dirname = './neafdsFile';


//判断文件夹是否存在
if (!fs.existsSync(dirname)) {
    //创建文件夹
    fs.mkdirSync(dirname, err => {
        console.log(err)
    })
}

const fs = require('fs');
let dirPath = 'D:/nodeProject/text/';
fs.readdir(dirPath, (err, files) => {
    if (err) return console.log('读取失败');
    files.forEach(file => {
        fs.unlink(dirPath + file, err => {
            if (err) return console.log('文件删除失败');
            console.log(file + '文件删除成功');
        })
    });
});