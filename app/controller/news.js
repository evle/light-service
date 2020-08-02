const { Controller } = require('egg')

class NewsController extends Controller {
  async index() {
    const { ctx } = this

    let limit = ctx.query && ctx.query.limit || 10;
    console.log('limit: ', limit)
    let list = await ctx.service.news.list(limit)
    // console.log('list: ', list)
    await ctx.render('news', { list: list.data })
  }
}

module.exports = NewsController
