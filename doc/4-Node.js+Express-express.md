[TOC]

---

### 任务描述

本小节将简要介绍一些本项目案例中，服务器端编程使用到的`Express`框架，内容十分简单，让我们开始学习吧！

### 相关知识

#### Express简介

Express是基于`Node.js`平台，快速、开放、极简的 Web 开发框架。使用 Express 可以快速地搭建一个完整功能的网站。在本项目中，采用`Express`框架搭建一个基础的服务器后端给前端提供API服务。

Express 框架核心特性：

- 可以设置中间件来响应 HTTP 请求。
- 定义了路由表用于执行不同的 HTTP 请求动作。
- 可以通过向模板传递参数来动态渲染 HTML 页面。

##### Web应用程序

Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。

##### API

使用选择的各种 HTTP 实用工具和中间件，快速方便地创建强大的 API。

##### 性能

Express 提供精简的基本 Web 应用程序功能，而不会隐藏您了解和青睐的 Node.js 功能。

#### 路由基础介绍

路由表示应用程序端点 (URI) 的定义以及端点响应客户机请求的方式。用于确定应用程序如何响应对特定端点的客户机请求，包含一个 URI（或路径）和一个特定的 HTTP 请求方法（GET、POST 等）。

每个路由可以具有一个或多个处理程序函数，这些函数在路由匹配时执行。

路由定义采用以下结构：

```javascript
app.METHOD(PATH, HANDLER)
```

其中：

- `app` 是 `express` 的实例。
- `METHOD` 是HTTP 请求方法，如`get`,`post`等。
- `PATH` 是服务器上的路径。
- `HANDLER` 是在路由匹配时所执行的函数。

以下示例演示了如何定义简单路由。

以主页上的 `Hello World!` 进行响应：

```javascript
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

在根路由 (`/`) 上（应用程序的主页）对 POST 请求进行响应：

```javascript
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
```

类似的，还有对`put`,`delete`等请求方法的路由。Express 支持对应于 HTTP 方法的以下路由方法：`get`、`post`、`put`、`head`、`delete`、`options`、`trace`、`copy`、`lock`、`mkcol`、`move`、`purge`、`propfind`、`proppatch`、`unlock`、`report`、`mkactivity`、`checkout`、`merge`、`m-search`、`notify`、`subscribe`、`unsubscribe`、`patch`、`search` 和 `connect`。

有一种特殊路由方法：`app.all()`，它并非派生自 HTTP 方法。该方法用于在所有请求方法的路径中装入中间件函数。

##### 请求方法

**Request 对象** - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：

1. req.app：当callback为外部文件时，用req.app访问express的实例
2. req.baseUrl：获取路由当前安装的URL路径
3. req.body / req.cookies：获得「请求主体」/ Cookies
4. req.fresh / req.stale：判断请求是否还「新鲜」
5. req.hostname / req.ip：获取主机名和IP地址
6. req.originalUrl：获取原始请求URL
7. req.params：获取路由的parameters
8. req.path：获取请求路径
9. req.protocol：获取协议类型
10. req.query：获取URL的查询参数串
11. req.route：获取当前匹配的路由
12. req.subdomains：获取子域名
13. req.accepts()：检查可接受的请求的文档类型
14. req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
15. req.get()：获取指定的HTTP请求头
16. req.is()：判断请求头Content-Type的MIME类型

在本项目案例中，使用`req.query`来获取请求传入的参数。

##### 响应方法

下表中响应对象 (`res`) 的方法可以向客户机发送响应，并终止请求/响应循环。如果没有从路由处理程序调用其中任何方法，客户机请求将保持挂起状态。

| 方法             | 描述                                             |
| ---------------- | ------------------------------------------------ |
| res.download()   | 提示将要下载文件。                               |
| res.end()        | 结束响应进程。                                   |
| res.json()       | 发送 JSON 响应。                                 |
| res.jsonp()      | 在 JSONP 的支持下发送 JSON 响应。                |
| res.redirect()   | 重定向请求。                                     |
| res.render()     | 呈现视图模板。                                   |
| res.send()       | 发送各种类型的响应。                             |
| res.sendFile()   | 以八位元流形式发送文件。                         |
| res.sendStatus() | 设置响应状态码并以响应主体形式发送其字符串表示。 |

在本项目中，采用`res.json()`响应，发出`json`类型数据的响应。

##### express.Router 类

使用 `express.Router` 类来创建可安装的模块化路由处理程序。`Router` 实例是完整的中间件和路由系统；因此，常常将其称为“微型应用程序”。

以下示例将路由器创建为模块，在其中装入中间件，定义一些路由，然后安装在主应用程序的路径中。

在应用程序目录中创建名为 `birds.js` 的路由器文件，其中包含以下内容：

```javascript
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
```

接着，在应用程序中装入路由器模块：

```javascript
var birds = require('./birds');
...
app.use('/birds', birds);
```

此应用程序现在可处理针对 `/birds` 和 `/birds/about` 的请求，调用特定于此路由的 `timeLog` 中间件函数。

在本项目中，使用`express.Router`创建模块化路由处理程序，来批量路由处理`API`请求。

### 编程要求



### 测试说明

根据相关知识，按照要求完成右侧选择题任务。作答完毕，通过点击“评测”，可以验证答案的正确性。

---

