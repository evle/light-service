Egg from zero to Hero
=====================

Hope you can learn something useful from this project!

1. MVC 
2. Template Engine
3. Egg as backend service
4. Egg as BFF 





MVC 

controller -> Service
1. 接收参数 & 校验参数是否合法
2. 向下调用服务处理业务
3. 响应客户端

service -> Model
1. 处理业务逻辑
2. 业务计算
3. 调用模型

Model
1. 连接数据库
2. 增删改查

V view



app/router.js  entry
app/public   static middleware
app/controller
config/config.default.js

插件模式
plugin
config/plugins.js
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
}

egg.js 作为服务

egg.js 作为中间层
转发 


egg.js node单进程
4核 默认使用1核

为了充分利用CPU资源, 使用node集群



定时任务
周期性从服务端拉取数据

subscrib

static get schedule(){
  return {
    interval: '1m',
    type: 'all'
  }

  async subscribe(){
    let reuslt = await this.ctx.curl(url, {dataTYpe: 'json'})
    this.ctx.app.cache = result.data
  }
}
手动运行任务， 服务器启动前运行一次 
app.runSchedule(schedulePath)

app.js
module.exports = app =>{
app.beforeStart(async ()=>{
  await app.runSchedual('updateSche')
})}
