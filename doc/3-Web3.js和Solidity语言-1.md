[TOC]

---

### 任务描述

本小节将简要介绍一些本项目案例中应用到的基础知识，内容十分简单，让我们开始学习吧！

### 相关知识

#### Web3.js简介

web3.js是一组用来和本地或远程以太坊节点进行通信的API，它可以使用HTTP或IPC建立与以太坊节点旳连接。如果我们需要基于以太坊来开发去中心化应用，就可能需要使用Web3库，例如需要通过Web3来获取节点状态，获取账号信息，调用合约、监听合约事件等等。智能合约是运行在节点提供的虚拟机上，因此调用智能合约也需要像节点发送请求。

web3.js 是 Web3 协议的 JavaScript 实现版本。基于以太坊开发DApp（去中心化应用程序），可以使用 web3.js 库提供的 **web3** 对象， 在底层实现上， **web3** 通 过RPC调用与本地节点通信， **web3.js** 可以与任何暴露了RPC接口的以太坊节点连接。

web3 包含下面几个对象：

- web3.eth 用来与以太坊区块链及合约的交互
- web3.shh 用来与Whisper协议相关交互
- web3.net 用来获取网络相关信息
- web3 主对象 包含一些工具

在本项目项目案例中，通过 Node.js 使用`web3`库来实现跟以太坊网络通信，进行智能合约的相关操作。在工程项目中引入`web3`的方法，是通过 Node.js 包管理工具`npm`命令`npm install web3`安装到本地。

然后你需要创建一个 **web3** 的实例，设置一个provider。为了保证你不会覆盖一个已有的provider（Mist浏览器或安装了MetaMak的浏览器会提供Provider），需要先检查是否 **web3** 实例已存在，示例代码如下：

```javascript
// In Node.js use: const Web3 = require('web3');

let web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
```

在本应用案例中，`web3`运行在Node.js环境下，故可以不进行该检查。

#### Web3.js部分包介绍

`Web3.js`库中有十分多的功能包，下面列举一些在本次应用案例中应用到的组件包。

##### web3.eth

`web3-eth`这个包用来和以太坊区块链与智能合约交互。

```javascript
var Eth = require('web3-eth');

// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
var eth = new Eth(Eth.givenProvider || 'http://localhost:8545');

// or using the web3 umbrella package
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// -> web3.eth//同上的eth方法
```

##### web3.eth.accounts

 `web3.eth.accounts` 包含生成以太坊账户和对交易和数据签名相关的功能。

##### web3.eth.Contract

`web3.eth.Contract`对象简化了与以太坊区块链上合约的交互。 合约对象的json接口与 相应的智能合约相匹配，web3会自动帮你将所有的调用转化为底层的基于RPC的ABI调用。

这使得与智能合约的交互和操作JavaScript对象一样简单。

##### web3.eth.abi

`web3.eth.abi`函数系列用于将函数调用编码为ABI格式，或者反之将ABI格式的函数解码。

### 编程要求



### 测试说明

根据相关知识，按照要求完成右侧选择题任务。作答完毕，通过点击“评测”，可以验证答案的正确性。

---