const express = require('express')
const nunjucks = require('nunjucks')
let path = require("path")
const url = require('url')

const app = express()
nunjucks.configure(path.resolve('view'), { autoescape: true, express: app })

const formData = []

app.get('/', (req, res) => {
  res.render('login.njk')
})

app.get('/login', (req, res) => {
  res.redirect('/')
})

app.post('/login', function (req, res) {

  req.on('data', function (data) {
    // console.log('data', data)
    formData.push(data)
  })

  req.on('end', function (data) {

    let result = formData.toString()
    let r = new URLSearchParams(result)

    // uesrlist
    let list = [
      { id: 1, name: 'lee' },
      { id: 2, name: 'alice' },
      { id: 3, name: 'taylor' },
      { id: 4, name: 'jack' },
    ]

    res.render('home.njk', { username: r.get('username'), list })
    // res.end(r.get('username') + r.get('password'))
  })

  // res.end('e')
  // req.('data', chunck=>{
  //   let result = Buffer.from(formData)
  //   console.log('result: ', result)
  //   res.end('end')
  // })


})

app.listen(3000, () => {
  console.log(`Server started at port 3000`)
})



