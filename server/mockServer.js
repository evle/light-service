let app = require('express')()
let Mock = require('mockjs')

app.get('/news', (req, res) => {
  let data = Mock.mock({
    "code": 0,
    message: 'success',
    [`data|${req.query.limit}`]: [
      {
        "id": "@id",
        "title": "@csentence",
        "url": "@url",
        "image": "@image('200x100')",
        "createAt": "@datetime"
      }
    ]
  })

  res.json(data)
})

app.listen(5000)
