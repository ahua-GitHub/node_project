// buffer类是用来存放二进制数据的缓存区
// 实际上我们创建buffer时并不会频繁的向操作系统申请内存避免性能消耗，
// 他会先默认创建一个8*1024字节的内存，也就是8kb
// buffer相当于一个 字节的数组，数组中每一项对应一个字节的大小
const message = "hollow"
    // 创建buffer
const buffer = Buffer.from(message)
console.log(buffer)

// 解码
const str = buffer.toString()
console.log(str)