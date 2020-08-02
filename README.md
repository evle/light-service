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
