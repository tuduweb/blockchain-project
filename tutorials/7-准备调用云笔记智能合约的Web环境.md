[TOC]

---

### 任务描述

本关任务：准备调用智能合约的Web环境，安装环境。

小程序通过与服务器后端的 Web 服务里的 API 获得服务。调用智能合约的过程在服务器后端进行，通过 Web 应用暴露 API 接口提供给小程序客户端使用。下面，我们将准备一个调用智能合约及数据服务的环境。

### 相关知识

#### 环境要求

在本项目案例中，使用`Express`框架开发后台服务器端；使用`web3.js`与以太坊网络进行交互。当前笔者使用的`Node.js`环境版本为`v14.6.0`。

#### NPM工具

##### 简介

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

1. 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
2. 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
3. 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:

```bash
$ npm -v
6.14.11
```
##### 使用 npm 命令安装模块

npm 安装 Node.js 模块语法格式如下：

```bash
$ npm install <Module Name>
```

以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 **express**:

```bash
$ npm install express
```

安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 **require('express')** 的方式就好，无需指定第三方包路径。

```javascript
var express = require('express');
```

##### 全局安装与本地安装

npm 的包安装分为本地安装（local）、全局安装（global）两种，从命令行来看，两者之间的差别只是有没有`-g`而已，比如

```bash
npm install express          # 本地安装
npm install express -g       # 全局安装
```

其在安装目录下也有区别。采用本地安装，安装到`pwd`当前目录下；而使用全局安装，则安装到 npm 配置的全局安装目录下。

##### 指定版本安装

npm 可以通过在安装依赖包名称后加上`@x.x`来指定版本。比如，安装`express`4.17.1 版本，可以通过以下指令全局安装：

```bash
npm install express@4.17.1 -g
```

#### 环境配置过程

##### 安装Node.js

在 Linux 系统如ubuntu中，先使用`wget -qO- https://deb.nodesource.com/setup_14.x | bash`更新本地 apt 源，再使用`apt install nodejs `可以迅捷的将`Node.js`安装到本地。

##### 切换npm源到国内镜像源

在安装完`Node.js`后，其内置安装`npm`软件包管理器。我们通过使用`npm config set registry https://registry.npm.taobao.org`把仓库源地址从国外切换到国内（淘宝源），加快`npm`下下载包的速度。

**如果不切换源地址，可能在使用 npm 安装包的过程中失败!**

#### 通过npm安装`Express`

我们通过`npm包管理工具`，使用`npm install express -g`安装`Express`框架到本地。

#### 通过npm安装`web3.js`

我们通过`npm包管理工具`，再使用`npm install web3 -g`安装`web3.js`到本地。

### 编程要求

根据相关知识，在右侧区域的`命令行`模式下，执行相关指令，安装相关环境到本地。

具体要求：

1. 通过命令行工具，使用`apt软件包管理工具`安装 `Node.js`环境。
2. 通过命令行工具，使用`npm包管理工具`安装`Express`包 4.17.1 版本到本地。
3. 通过命令行工具，使用`npm包管理工具`安装`web3`包 1.3.4 版本到本地。

### 测试说明

根据相关知识，按照要求完成右侧实践题任务。作答完毕，通过点击“评测”，可以验证答案的正确性。

**注意**

评测程序会严格检查版本号，请严格按照编程要求安装程序。

---

让我们开始配置环境吧！