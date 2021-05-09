const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

app.use('/',express.static('frontend'))

app.get('/', function (req, res, next) {
    console.log(req)
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header('Content-Type', 'application/json');
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(process.env.PORT||8080)
