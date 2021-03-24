const express = require("express")
//const app = express()
const port = 3000

const EtherData = require("./EtherData")
const NoteData = require("./NoteData")
etherdata = new EtherData()
noteData = new NoteData()

global.etherdata = etherdata

// app.get("/", (req, res) => {
//     res.send("hello world" + ether.getNonce())
// })

var router = express.Router()


router.get('/addNote', function(req, res, next) {
    noteData.addNote(req.query, result =>{
        res.json({'res': 1, 'data': result})
    }, err => {
        console.log(err)
        res.json({'res': -1, 'result': err})
    })
});

router.get('/getList', (req, res, next) => {
    noteData.getNoteList(req.query.user_addr, result => {
        res.json({'res': 0, 'data': result})
    }, err => {
        console.log(err)
        res.json({'res': -1, 'result': err})
    });
})

router.get('/getNote', (req, res, next) => {
    noteData.getNote(req.query, result => {
        res.json({'res':0, 'data': result})
    }, err => {
        console.log(err)
        res.json({'res': -1, 'result': err})
    })
})

router.get('/editNote', (req, res, next) => {
    noteData.editNote(req.query, result => {
        res.send({'res':1, 'data': result})
    }, err => {
        console.log(err)
        res.send({'res':-1, 'result': err})
    })
})

router.get('/getAccount', (req, res, next) => {
    etherdata.getAccount(req, res)
    console.log('get account')
})

router.get('/test', (req, res, next) => {
    console.log(req)
    res.json({'res': 0, 'data': req.query})
})

router.get('/login', (req, res, next) => {
    console.log(req.query)
    
    let code = req.query.code;//获取小程序传来的code
    //let encryptedData = params.encryptedData;//获取小程序传来的encryptedData
    //let iv = params.iv;//获取小程序传来的iv
    let appid = "wx2495799aa1c0b026";//自己小程序后台管理的appid，可登录小程序后台查看
    let secret = "ffb3724c40cfa5ba902e7a5c20213927";//小程序后台管理的secret，可登录小程序后台查看
    let grant_type = "authorization_code";// 授权（必填）默认值
    
    //请求获取openid
    let url = "https://api.weixin.qq.com/sns/jscode2session?grant_type="+grant_type+"&appid="+appid+"&secret="+secret+"&js_code="+code;
    
    let openid,sessionKey;
    
    let https = require("https");
    
    https.get(url, (result) => {
        result.on('data', (d) => {
            console.log('返回的信息: ', JSON.parse(d));
            openid = JSON.parse(d).openid;//得到openid
            sessionKey = JSON.parse(d).session_key;//得到session_key

            //根据openId读取数据库的私链账户
            //let mysql = require("mysql")
            noteData.getAccountAddress(openid, result => {
                res.json({'res': 1, 'data': result[0], 'address': result[0].account_addr})
            }, (result, addr) => {
                res.json({'res': 0, 'data': {open_id : openid, 'id': result.insertId, 'account_addr': addr}})
            }, (err, addr) => {
                res.json({'res': -1, 'result': err})
            }, err =>{
                res.json({'res': -2, 'err': err})
            })
            //res.send({"res":"ok", "openid": openid})
        }).on('error', (e) => {
            console.error(e);
        });
    });
  
})


router.get('/unlock', (req, res, next) => {
    console.log(req.query)
    etherdata.unlockAccount(req.query.user_addr, req.query.openid, 3600).then(
        res.send({'res': 0})
    )
})

module.exports = router;

// app.listen(port, () => {
//     console.log("listen on ")
// })

