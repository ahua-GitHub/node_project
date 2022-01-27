
const labelServer = require('../service/label.server')

const verifyLabel = async (ctx,next)=>{
    console.log('确认标签中间件')
    // 1.取出所需要的标签
    const { labels } = ctx.request.body;
    const newLabels = []
    // 2.判断每个标签在label表中是否存在
    for(let name of labels){
        const labels = {name}
        const labelResult = labelServer.selectLabel(name)
        if(!labelResult){
        // 如果数据库label表中不存在，向label表中写入该标签
            const result =await labelServer.createLabel(name)
            // 向label对象中添加插入成功后返回其在数据库label表中的id
            labels.id = result.insertId
        }else{
            // 如果数据库label表中存在，返回其在数据库label表中的id
            labels.id = labelResult.id
        }
        // 将每个标签和对应id组成的对象添加到数组中
        newLabels.push(labels)
    }
    ctx.labels = newLabels
    await next()
}




module.exports = {
    verifyLabel
}