exports.keys = 'evle'

// 服务端把cookie加密传递给客户端 防止客户端篡改cookie

module.exports = app => {
  let config = {};

  config.keys = app.name + 'evle'
  config.view = {
    defaultExtension: '.njk',
    defaultViewEngine: "nunjucks",
    mapping: { '.njk': 'nunjucks' }
  }

  config.news = {
    url: 'http://localhost:5000/news'
  }

  return config
}
