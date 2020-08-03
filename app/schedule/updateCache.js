const { Subscription } = require('egg')

class UpdateCacheSubscription extends Subscription {

  static get schedule() {
    return {
      interval: '1m',
      type: 'all' // 计划任务在哪些worker上执行
    }
  }

  async subscribe() {
    let result = await this.ctx.curl('http://localhost:5000/title', {
      dataType: 'json'
    })
    console.log('result: ', result.data)
    this.ctx.app.cache = result.data
  }


}

module.exports = UpdateCacheSubscription
