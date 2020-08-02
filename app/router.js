
module.exports = app => {
  const { router, controller } = app
  // controller是个对象
  // controller = {news: new NewsController()}
  // 定义路由

  router.get('/news', controller.news.index)
}
