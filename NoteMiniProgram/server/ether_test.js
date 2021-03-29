var Web3=require('web3')
var web3=new Web3(new Web3.providers.HttpProvider("http://116.62.132.128:8545"))
//通过api以及合约地址找到链上合约
var abi=JSON.parse('[{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"title","type":"string"},{"name":"content","type":"string"}],"name":"editNote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getNote","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
var contractAddress='0x74a4947fCeD132512bDE8C0094a820AFF076a632'

//定义合约对象，用于调用合约方法
var NoteContract=new web3.eth.Contract(abi, contractAddress)

// //NoteContract.methods.getNote('a').call({from:'0x39a82c01D27B6E6a6542f0829eF192f2B63c2f88'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})

// //NoteContract.methods.editNote('123','这是笔记的内容').send({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
// //return 0x5770a23dee8819db1d606e36c8a05f0e8b4ba629e9d8b21e4162d8555eb799fd
// //NoteContract.methods.getNote('123').call({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
// //NoteContract.methods.editNote('1','这里是来自头歌平台区块链项目的笔记内容。人出生之初，禀性本身都是善良的。天性也都相差不多，只是后天所处的环境不同和所受教育不同，彼此的习性才形成了巨大的差别。如果从小不好好教育，善良的本性就会变坏。为了使人不变坏，最重要的方法就是要专心一致地去教育孩子。战国时，孟子的母亲，曾三次搬家，是为了使孟子有个好的学习环境。小孩子不肯好好学习，孟母就折断了织布的机杼来教育孟子。五代时，燕山人窦禹钧教育儿子很有方法，他教育的五个儿子都很有成就，同时科举成名。仅仅是供养儿女吃穿，而不好好教育，是父母的过错。只是教育，但不严格要求就是做老师的懒惰了。').send({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
// //return 0x4462b353ef01f5bdce7337a4f1c65dd7e2aade75c8486f8b2293b6cfcf7bc813//交易id
// //NoteContract.methods.getNote('123').call({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
// web3.eth.getTransaction('0x17fa270c9d119ff8e9b0945ecabeb9df6b423c0043aa382428795cc7d8c63c87' ,(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})
//web3.eth.getAccounts().then(console.log)
//web3.eth.personal.newAccount('o6fk85-hXavG7QjNkvOcR-y3Iero').then(console.log)//0x7090B54025d2c3B23887C16aD281eB4f7c19d5Dc
//web3.eth.getAccounts().then(console.log)

// web3.eth.personal.unlockAccount('0x7c30571B85A53fD09be642f8E317405F401ee553','o6fk85-hXavG7QjNkvOcR-y3Iero',60).then(console.log)
// NoteContract.methods.getNote(8).call({from:'0x7c30571B85A53fD09be642f8E317405F401ee553'},(err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})

//web3.eth.sendTransaction({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff',to:'0x7090B54025d2c3B23887C16aD281eB4f7c19d5Dc',value:web3.utils.toWei('0.1','ether')}, (err,res)=>{ if(err) console.log("Error: ",err); else console.log("Result: ",res);})//RESULT:0xe5eb8b0727380f819b9c11e583b96f402ba3ea42b181cf122315ef353cc110c9
//web3.eth.getBalance('0x7090B54025d2c3B23887C16aD281eB4f7c19d5Dc').then(console.log)

const rootAccountAddr = '0xc8D1479e95a345427630f87e112e7f43d10AE3ff'
let pwd = 'o6fk85-hXavG7QjNkvOcR-y3Iero'

// web3.eth.personal.newAccount(pwd).then(
//     (newAccount) => {
//         console.log(newAccount)
//     }
// )

web3.eth.sendTransaction({
    from: rootAccountAddr,
    to: '0x7A2A1696D2c0d05C33bd945DA4804f23fa70E262',
    value: web3.utils.toWei('1','ether')
},'', (err,res)=>{
    console.log(err)
    console.log(res)
})

web3.eth.getBalance('0x7A2A1696D2c0d05C33bd945DA4804f23fa70E262').then( res => {
    console.log('balance:' + res)
    balance = res
})


// try{
//     web3.eth.personal.newAccount(pwd, (err, addr) => {
//         if(err){
//             console.log(err)
//             throw err
//         }else{
//             console.log('new addr:' + addr)
//             web3.eth.personal.unlockAccount(addr, pwd, err => {throw err}).then(
//                 web3.eth.sendTransaction({
//                     from:rootAccountAddr,
//                     to: addr,
//                     value:web3.utils.toWei('1','ether')
//                 },
//                 (err,res)=>{
//                     if(err)
//                     {
//                         console.log("Error: ",err)
//                         throw err
//                     }
//                     else
//                     {
//                         console.log("Result: ", res);
    
//                         web3.eth.getBalance(addr).then( res => {
//                             console.log('balance:' + res)
//                         })
    
//                     }
//             })
//             )
//         }
//     })
// }catch(err){
//     console.log(err)
// }


//web3.eth.getAccounts().then(console.log)

// let account = '0x7c30571B85A53fD09be642f8E317405F401ee553'
// let openid = 'o6fk85-hXavG7QjNkvOcR-y3Iero'
// console.log("account:" + account + "  ,open_id" + openid)
// let id = 23
// web3.eth.personal.unlockAccount(account, openid, 3600).then(
//     NoteContract.methods.editNote(id, '标题标题', '内容内容').send({from: account}, (err,res) => {
//         if(err)
//         {
//             console.log(err)
//         }else{
//             console.log(res)
//         }
//     })
// )

// NoteContract.methods.getNote(id).call({from: account},
//     (err, res) => 
//     {
//         if(err){

//             console.log("Error: ",err);
//         }
//         else{
//             console.log("Result: ",res);
        
//         }
//     })