[TOC]

---

### 任务描述

本小节将简要介绍一些本项目案例中，服务器端编程使用到的`Node.js`环境，内容十分简单，让我们开始学习吧！

### 相关知识

#### Node.js简介

Node.js 是一个开源与跨平台的 JavaScript 运行时环境。 它是一个可用于几乎任何项目的流行工具！

Node.js 在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 这使 Node.js 表现得非常出色。

Node.js 应用程序运行于单个进程中，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。

当 Node.js 执行 I/O 操作时（例如从网络读取、访问数据库或文件系统），Node.js 会在响应返回时恢复操作，而不是阻塞线程并浪费 CPU 循环等待。

这使 Node.js 可以在一台服务器上处理数千个并发连接，而无需引入管理线程并发的负担（这可能是重大 bug 的来源）。

Node.js 具有独特的优势，因为为浏览器编写 JavaScript 的数百万前端开发者现在除了客户端代码之外还可以编写服务器端代码，而无需学习完全不同的语言。

在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为不必等待所有用户更新其浏览器，你可以通过更改 Node.js 版本来决定要使用的 ECMAScript 版本，并且还可以通过运行带有标志的 Node.js 来启用特定的实验中的特性。

#### Node.js有大量的库

npm 的简单结构有助于 Node.js 生态系统的激增，现在 npm 仓库托管了超过 1,000,000 个可以自由使用的开源库包。

在本项目中，应用了`web3`,`mysql`等库，而这些库，还依赖了许多其它库。正是这种优秀的可自由使用的开源库包，使得Node.js的应用生态十分优秀，也使得前端技术在开源的加持下迅猛发展。

#### Node.js应用程序的示例

Node.js 最常见的 Hello World 示例是 Web 服务器：

```javascript
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好世界\n')
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
```

此代码首先引入了 Node.js `http`模块。

Node.js 具有出色的标准库，了解更多信息请查看官方文档中的[标准库](http://nodejs.cn/api/)章节，包括对网络的一流支持。

`http` 的 `createServer()` 方法会创建新的 HTTP 服务器并返回它。

服务器被设置为监听指定的端口和主机名。 当服务器就绪后，回调函数会被调用，在此示例中会通知我们服务器正在运行。

每当接收到新的请求时，`request`事件会被调用，并提供两个对象：一个请求（`http.IncomingMessage`对象）和一个响应（`http.ServerResponse`对象）。

这两个对象对于处理 HTTP 调用至关重要。

第一个对象提供了请求的详细信息。 在这个简单的示例中没有使用它，但是你可以访问请求头和请求数据。

第二个对象用于返回数据给调用方。

在此示例中：

```javascript
res.statusCode = 200
```

设置 statusCode 属性为 200，以表明响应成功。

设置 Content-Type 响应头：

```javascript
res.setHeader('Content-Type', 'text/plain')
```

关闭响应，添加内容作为 `end()` 的参数：

```javascript
res.end('你好世界\n')
```

### 测试说明

根据相关知识，按照要求完成右侧选择题任务。作答完毕，通过点击“评测”，可以验证答案的正确性。

---