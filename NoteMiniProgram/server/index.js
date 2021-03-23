const express = require("express")
//const app = express()
const port = 3000

const EtherData = require("./EtherData")
const MysqlData = require("./MysqlData")
etherdata = new EtherData()
mysqldata = new MysqlData()

// app.get("/", (req, res) => {
//     res.send("hello world" + ether.getNonce())
// })

var router = express.Router()


router.get('/addNote', function(req, res, next) {
    //  将云笔记内容保存到以太坊网络上，并返回交易地址  
    //var code=global.database.addNote(req.query.id,req.query.name,req.query.content);
    //  将交易地址保存到req中名为code的查询字段中
    req.query['code'] = 123;//code;
    //  将云笔记除了内容以外的数据保存到MySQL数据库中
    //db.addNote(req,res);
    mysqldata.addNote(req, res)
});

router.get('/getList', (req, res, next) => {
    var result = mysqldata.getNoteList(req, res);
    console.log(result);
    //res.send("hello world")
})

router.get('/getNote', (req, res, next) => {
    let result = etherdata.getNote(req.query.id, req.query.title, res)
    //res.json({"content" : result})
})

router.get('/editNote', (req, res, next) => {
    let result = etherdata.editNote(req.query.id, req.query.content)
    res.json({"res": "yes"})
})

router.get('/getAccount', (req, res, next) => {
    etherdata.getAccount(req, res)
    console.log('get account')
})

router.get('/test', (req, res, next) => {
    console.log(req)
    res.json({'res': 'ok', 'content': req.query})
})

router.get('/login', (req, res, next) => {
    console.log(req.query)
    
    res.send({"res":"ok"})
})

module.exports = router;

// app.listen(port, () => {
//     console.log("listen on ")
// })

