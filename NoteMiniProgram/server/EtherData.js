var Web3=require('web3')




class EtherData
{
    constructor()
    {
        var web3=new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
        var abi=JSON.parse('[{"constant":true,"inputs":[{"name":"id","type":"string"}],"name":"getNote","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"},{"name":"content","type":"string"}],"name":"editNote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        var contractAddress='0x580DB5d6FA2F9554E0b39583a5Efc52AB2062c12'
        //定义合约对象，用于调用合约方法
        var NoteContract=new web3.eth.Contract(abi, contractAddress)
    }

    //交易数量
    getNonce()
    {
        var nonce = 123;
        return nonce;
    }

    //添加or更新笔记 id:用户id name:笔记名称 content:笔记内容
    addUpdateNote(id, name, content, notefun)
    {
        //
    }

    //根据用户id和笔记名称获取笔记内容
    async getNote(id, title, res)
    {
        await NoteContract.methods.getNote(id).call({from:'0xc8D1479e95a345427630f87e112e7f43d10AE3ff'}//,
        //  (err,res) => 
        //     {
        //         if(err){

        //             console.log("Error: ",err);
        //             return {"code":"0000", "content": null};
        //         }
        //         else{
        //             console.log("Result: ",res);
        //             return {"id": id, "content": res}
        //         }
        //     }
        ).then((receipt) => {
            console.log(receipt)
            res.json({"content" : receipt})
        })

        //return {"id": id, "content": "hello this is ether content"}
    }

    editNote(id, content)
    {
        return {"id" : id}
    }

    //返回交易状态
    queryTransactionStatus(hash)
    {
        //
    }

    getAccount(req, res)
    {

        web3.eth.getAccounts().then((result) => {
            console.log(result)
            res.send(result)
        })

    }
}
//导出类别
module.exports = EtherData;