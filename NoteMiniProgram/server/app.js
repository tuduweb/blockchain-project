const express = require("express")
const app = express()
const port = 3000

var router = require("./index")

var EtherDataClass = require("./EtherData.js")
etherData = new EtherDataClass()
global.etherData = etherData

app.use('/', router)


app.listen(port, () => {
    console.log("listen on ")
    console.log(global.etherData)
})

