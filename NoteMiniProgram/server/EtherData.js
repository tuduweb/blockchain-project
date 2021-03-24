var Web3=require('web3')

class EtherData
{
    constructor()
    {
        this.web3=new Web3(new Web3.providers.HttpProvider("http://:8545"))
        this.rootAccountAddr = '0xc8D1479e95a345427630f87e112e7f43d10AE3ff'
        this.abi=JSON.parse('[{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"title","type":"string"},{"name":"content","type":"string"}],"name":"editNote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getNote","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
        this.contractAddress='0x74a4947fCeD132512bDE8C0094a820AFF076a632'
        //定义合约对象，用于调用合约方法
        this.NoteContract=new this.web3.eth.Contract(this.abi, this.contractAddress)
    }

    //根据用户id和笔记名称获取笔记内容
    getNote(account, id, callback, errHandle)
    {
        console.log(account)
        this.NoteContract.methods.getNote(id).call({from: account},
        (err, res) => 
        {
            if(err){

                console.log("Error: ",err);
                errHandle(err)
            }
            else{
                console.log("Result: ", res);
                callback(res)
            }
        })
    }

    editNote(account, openid, id, title, content, callback, errCallback)
    {
        console.log("account:" + account + "  ,open_id" + openid)
        this.web3.eth.personal.unlockAccount(account, openid, 3600).then(
            this.NoteContract.methods.editNote(id, title, content).send({from: account}, (err,res) => {
                if(err)
                {
                    errCallback(err)
                }else{
                    callback(res)
                }
            })
        )

    }

    //返回交易状态
    queryTransactionStatus(hash)
    {
        //
    }

    getAccount(req, res)
    {

        this.web3.eth.getAccounts().then((result) => {
            console.log(result)
            res.send(result)
        })

    }

    createAccount(openid, callback, errHandle)
    {
        let pwd = openid
        try{
            this.web3.eth.personal.newAccount(pwd, (err, addr) => {
                if(err){
                    console.log(err)
                    throw err
                }else{
                    console.log('new addr:' + addr)
                    this.web3.eth.personal.unlockAccount(addr, pwd, 3600).then(
                        this.web3.eth.sendTransaction({
                            from: this.rootAccountAddr,
                            to: addr,
                            value: this.web3.utils.toWei('1','ether')
                        },"",
                        (err,res)=>{
                            if(err)
                            {
                                console.log("Error: ",err)
                                throw err
                            }
                            else
                            {
                                console.log("Result: ", res);
                                let balance = 0
                                this.web3.eth.getBalance(addr).then( res => {
                                    console.log('balance:' + res)
                                    balance = res
                                })

                                callback(addr, balance)
            
                            }
                    })
                    )
                }
            })
        }catch(err){
            console.log(err)
            errHandle(err)
        }
    }

    unlockAccount(account, openid, time){
        console.log(account)
        return this.web3.eth.personal.unlockAccount(account, openid, time)
    }

    lockAccount(account, callback, errCallback){
        return this.web3.eth.personal.lockAccount(account, (err, res) => {
            if(err){
                errCallback(err)
            }else{
                callback(res)
            }
        })
    }

}
//导出类别
module.exports = EtherData;