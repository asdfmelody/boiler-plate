//시작점
const express = require('express') //express 가져옴
const app = express() //새로운 앱으로 만듬
const port = 5000 //포트 5000번 쓰기

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://melody:heesun@boilerplate.hkv0f.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB connected..'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~dkssudgktpdy~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})