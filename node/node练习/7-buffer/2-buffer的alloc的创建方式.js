// 以内存空间的形式创建
const buffer = Buffer.alloc(6)


buffer[0] = 88
buffer[1] = 0x88
console.log(buffer)