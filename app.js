module.exports = app => {
  app.beforeStart(async () => {
    console.log('before start')
    await app.runSchedule('updateCache')
  })
}
