const { Service } = require('egg')

class NewsService extends Service {
  async list(limit) {
    const { ctx } = this
    let url = this.config.news.url
    // console.log(url)
    let result = await ctx.curl(url, {
      method: 'GET',
      data: { limit },
      dataType: 'json'
    })
    // console.log(a.data)
    // console.log(result.data)
    return result.data
  }
}
module.exports = NewsService
