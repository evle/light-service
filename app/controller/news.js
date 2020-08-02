const { Controller } = require('egg')

class NewsController extends Controller {
  async index() {
    this.ctx.body = 'hello'
  }
}

module.exports = NewsController
