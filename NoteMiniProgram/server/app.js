const express = require("express")
const app = express()
const port = 3000

var router = require("./index")

// var Web3=require('web3')
// console.log(Web3)
// var web3=new Web3(new Web3.providers.HttpProvider("http://116.62.132.128:8545"))

// //通过api以及合约地址找到链上合约
// var abi=JSON.parse('[{"constant":true,"inputs":[{"name":"id","type":"string"}],"name":"getNote","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"},{"name":"content","type":"string"}],"name":"editNote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
// var contractAddress='0xf5a3cc4213952f96882a5e26927d19b94e715afa'

// console.log(web3)

// //定义合约实例，用于调用合约方法
// var NoteContract=web3.eth.contract(abi)

// var contractInstance = NoteContract.at(contractAddress)

// var addr = web3.personal.newAccount('123fdfsfdsf')//参数 密码


var EtherDataClass = require("./EtherData.js")
etherData = new EtherDataClass()
global.etherData = etherData

app.use('/', router)


app.listen(port, () => {
    console.log("listen on ")
    console.log(global.etherData)
})

