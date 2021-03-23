var Web3=require('web3')
var web3=new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
var abi=JSON.parse('[{"constant":true,"inputs":[{"name":"id","type":"string"}],"name":"getNote","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"},{"name":"content","type":"string"}],"name":"editNote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')

var contractAddress='0x580DB5d6FA2F9554E0b39583a5Efc52AB2062c12'

//code

//定义合约对象，用于调用合约方法
var NoteContract=new web3.eth.Contract(abi, contractAddress)
//NoteContract.methods.getNote('a').call({from:'0x39a82c01D27B6E6a6542f0829eF192f2B63c2f88'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})

//NoteContract.methods.editNote('123','这是笔记的内容').send({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
//return 0x5770a23dee8819db1d606e36c8a05f0e8b4ba629e9d8b21e4162d8555eb799fd
//NoteContract.methods.getNote('123').call({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
//NoteContract.methods.editNote('1','这里是来自头歌平台区块链项目的笔记内容。人出生之初，禀性本身都是善良的。天性也都相差不多，只是后天所处的环境不同和所受教育不同，彼此的习性才形成了巨大的差别。如果从小不好好教育，善良的本性就会变坏。为了使人不变坏，最重要的方法就是要专心一致地去教育孩子。战国时，孟子的母亲，曾三次搬家，是为了使孟子有个好的学习环境。小孩子不肯好好学习，孟母就折断了织布的机杼来教育孟子。五代时，燕山人窦禹钧教育儿子很有方法，他教育的五个儿子都很有成就，同时科举成名。仅仅是供养儿女吃穿，而不好好教育，是父母的过错。只是教育，但不严格要求就是做老师的懒惰了。').send({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
//return 0x4462b353ef01f5bdce7337a4f1c65dd7e2aade75c8486f8b2293b6cfcf7bc813//交易id
//NoteContract.methods.getNote('123').call({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
web3.eth.getTransaction('0x17fa270c9d119ff8e9b0945ecabeb9df6b423c0043aa382428795cc7d8c63c87' ,(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
