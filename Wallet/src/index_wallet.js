var web3 = new Web3(new Web3.providers.HttpProvider("http://116.62.132.128:8545"));

//通过api以及合约地址找到链上合约
var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"tokensOwned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showContractEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addrto","type":"address"},{"name":"number","type":"uint256"}],"name":"giveTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyTokens","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"balanceTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"getContractEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"tokensAmount","type":"uint256"},{"name":"pricePerToken","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
var contractAddress = '0x707d289f8110c2E427925310C0ac02dAC902073D'

//定义合约对象，用于调用合约方法
var WalletContract = new web3.eth.Contract(abi, contractAddress)

//合约的发布者地址
var developerAddress = '0x39a82c01D27B6E6a6542f0829eF192f2B63c2f88';

//定义初始用户地址，默认值为0表示用户未登录
var correctAdress = '0';

function GetSomeEther() {
    if (correctAdress == '0') {
        $("#console").html("You haven`t signed in !");
        return;
    }
    web3.eth.sendTransaction({ from: '0xc8D1479e95a345427630f87e112e7f43d10AE3ff', to: correctAdress, value: web3.utils.toWei('0.1', 'ether') }, (err, res) => { if (err) console.log("Error: ", err); else console.log("Result: ", res); });
    $("#console").html("You got 0.1 ether.");
    web3.eth.getBalance(correctAdress, (err, res) => { if (err) console.log("Error: ", err); else $("#TokensInfo-6").html(res + '  Wei'); })
}

function GetContractEther() {
    if (correctAdress != developerAddress) {
        $("#console").html("You are not the developer !");
        return;
    }
    let extractTo = $("#extractTo").val();
    WalletContract.methods.getContractEther(extractTo).send({ from: correctAdress }, (err, res) => {
        if (err) {
            console.log("Error:", err);
            $("#console").html("Sorry , you have no authority to do this.");
        }
        else {
            $("#console").html('You have extracted all ether in contract to : ' + extractTo);
            WalletContract.methods.showContractEther().call((err, res) => { if (err) console.log("Error: ", err); else $("#" + "TokensInfo-4").html(res + '  Wei'); });
        }
    });
}

function GiveEther() {
    if (correctAdress == '0') {
        $("#console").html("You haven`t signed in !");
        return;
    }
    let EtherAddrTo = $("#EtherAddrTo").val();
    let EtherNumberTo = $("#EtherNumberTo").val();
    web3.eth.sendTransaction({ from: correctAdress, to: EtherAddrTo, value: web3.utils.toWei(EtherNumberTo, 'ether') }, (err, res) => {
        if (err) console.log("Error: ", err);
        else {
            let GiveTx = res.toString();
            GiveTx = 'Your transaction id is : ' + GiveTx;
            $("#console").html(GiveTx);
            web3.eth.getBalance(correctAdress, (err, res) => { if (err) console.log("Error: ", err); else $("#TokensInfo-6").html(res + '  Wei'); })
        }
    })
}

function GiveTokens() {
    if (correctAdress == '0') {
        $("#console").html("You haven`t signed in !");
        return;
    }
    let TokensAddrTo = $("#TokensAddrTo").val();
    let TokensNumberTo = $("#TokensNumberTo").val();
    WalletContract.methods.giveTokens(TokensAddrTo, TokensNumberTo).send({ from: correctAdress }, (err, res) => {
        if (err) {
            console.log("Error:", err);
            $("#console").html("Transaction failed.");
        }
        {
            let TokensTx = res.toString();
            TokensTx = 'Your transaction id is : ' + TokensTx;
            $("#console").html(TokensTx);
            WalletContract.methods.tokensOwned(correctAdress).call({ from: correctAdress }, (err, res) => { if (err) console.log("Error: ", err); else $("#" + "TokensInfo-5").html(res + '  tokens'); })
            web3.eth.getBalance(correctAdress, (err, res) => { if (err) console.log("Error: ", err); else $("#TokensInfo-6").html(res + '  Wei'); })
        }
    });
}



function SignUp() {
    let passwordUp = $("#password-signup").val();
    web3.eth.personal.newAccount(passwordUp, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            $("#console").html("Your password is not valid");
        }
        else {
            console.log("Result: ", res);
            let addressUp = res;
            let addUp = addressUp.toString();
            addUp = 'Your new account address is : ' + addUp;
            $("#" + "console").html(addUp);
        }
    });
}

function SignIn() {
    let addressIn = $("#address-signin").val();
    let passwordIn = $("#password-signin").val();
    web3.eth.personal.unlockAccount(addressIn, passwordIn, 3600, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            $("#" + "console").html('Password error , please try again!');
        }
        else {
            console.log("Result: ", res);
            correctAdress = addressIn;
            addIn = 'Welcome back : ' + addressIn;
            $("#" + "console").html(addIn);
            WalletContract.methods.tokensOwned(correctAdress).call({ from: correctAdress }, (err, res) => { if (err) console.log("Error: ", err); else $("#" + "TokensInfo-5").html(res + '  tokens'); });
            web3.eth.getBalance(correctAdress, (err, res) => { if (err) console.log("Error: ", err); else $("#TokensInfo-6").html(res + '  Wei'); });
        }
    });
}

function SignOut() {
    web3.eth.personal.lockAccount(correctAdress);
    correctAdress = '0';
    $("#" + "console").html("You have signed out.Your account has been locked.");
}

function buyTokens() {
    if (correctAdress == '0') {
        $("#console").html("You haven`t signed in !");
        return;
    }
    let tokensToBuy = $("#tokensToBuy").val();
    WalletContract.methods.buyTokens().send({ from: correctAdress, value: 100000000 * tokensToBuy }, (err, res) => {
        if (err)
            console.log("Error: ", err);
        else {
            console.log("Result: ", res);
            let txAddress = res;
            let txAddr = txAddress.toString();
            txAddr = 'Your transaction id is : ' + txAddr;
            $("#console").html(txAddr);
            WalletContract.methods.balanceTokens().call((err, res) => { if (err) console.log("Error: ", err); else $("#" + "TokensInfo-2").html(res + '  tokens'); });
            WalletContract.methods.showContractEther().call((err, res) => { if (err) console.log("Error: ", err); else $("#" + "TokensInfo-4").html(res + '  Wei'); });
            WalletContract.methods.tokensOwned(correctAdress).call({ from: correctAdress }, (err, res) => { if (err) console.log("Error: ", err); else $("#" + "TokensInfo-5").html(res + '  tokens'); });
            web3.eth.getBalance(correctAdress, (err, res) => { if (err) console.log("Error: ", err); else $("#TokensInfo-6").html(res + '  Wei'); })
        }

    })

}

function checkit(isChecked) {
    if (isChecked) {
        $("#password-signin").prop("type", 'text');
        $("#password-signup").prop("type", 'text');
    } else {
        $("#password-signin").prop("type", 'password');
        $("#password-signup").prop("type", 'password');
    }
}





function checkTx() {
    let TransactionId = $("#transaction-id").val();
    web3.eth.getTransaction(TransactionId, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            $("#console").html("The transaction id is invalid.");
        }
        else {
            console.log("Result: ", res);
            $("#console").html("Press F12 to watch the transaction details");
        }
    });
}

function checkBk() {
    let BlockId = $("#block-id").val();
    web3.eth.getBlock(BlockId, (err, res) => {
        if (err) console.log("Error: ", err);
        else {
            console.log(res);
            $("#console").html("Press F12 to watch the transaction details");
        }
    })
}

var keystore = null;

function importfile(){
    var selectedFile = document.getElementById("files").files[0];//获取读取的File对象
    var name = selectedFile.name;//读取选中文件的文件名
    var size = selectedFile.size;//读取选中文件的大小
    console.log("文件名:"+name+"大小："+size);

    var reader = new FileReader();//这里是核心！！！读取操作就是由它完成的。
    reader.readAsText(selectedFile);//读取文件的内容

    reader.onload = function(){
        console.log(this.result);//当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
        keystore = this.result;
    };
}

function readKeystore() {
    console.log("hello world")

    let keystorePwd = $("#keystore-pwd").val()

    if(keystorePwd == "")
    {
        console.log("please input pwd")
        return
    }

    if(keystore === null)
    {
        console.log("please input keystore file")
        return;
    }
    //加入合法性检测

    let ob = null
    try{
        ob = web3.eth.accounts.decrypt(keystore, keystorePwd)
    }catch(e){
        console.log(e)
        //
    }
    if(ob)
    {
        let t = web3.eth.accounts.privateKeyToAccount(ob.privateKey)
        console.log(t)
    }

}

$(document).ready(function () {
    WalletContract.methods.totalTokens().call((err, res) => {
        if (err) console.log("Error: ", err);
        else $("#" + "TokensInfo-1").html(res + '  tokens');
    });

    WalletContract.methods.balanceTokens().call((err, res) => {
        if (err) console.log("Error: ", err);
        else $("#" + "TokensInfo-2").html(res + '  tokens');
    });

    WalletContract.methods.tokenPrice().call((err, res) => {
        if (err) console.log("Error: ", err);
        else $("#" + "TokensInfo-3").html(res + '  Wei');
    });

    WalletContract.methods.showContractEther().call((err, res) => {
        if (err) console.log("Error: ", err);
        else $("#" + "TokensInfo-4").html(res + '  Wei');
    });


    $("")

});