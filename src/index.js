var express = require('express')
var app = express()

//now any files in public are routed
app.use(express.static('public'))





app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})