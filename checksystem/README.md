## 小程序章节判题

### 环境&工具

1. `windows`下，在小程序目录使用：`./cli.bat --auto /F/blockchain-project/NoteApp --auto-port 9999`开启自动化端口。
2. 类`unix`下，在小程序目录使用相似的语法，`cli.bat`更换成`cli`

### 整体技术框架

使用微信小程序官方自带的`miniprogram-automator`包，结合`mocha`等自动化测试工具完成判题。

### 整体内容

* 第1关: 准备环境
* 第2关: 新建云笔记小程序工程
* 第3关: 编写添加云笔记功能视图层
* 第4关: 实现添加云笔记功能
* 第5关: 编写获取云笔记列表及其它逻辑功能
* 第6关: 实现获取云笔记列表功能
* 第7关: 编写云笔记小程序显示笔记功能
* 第8关: 编写云笔记提示登录界面
* 第9关: 实现云笔记用户登录功能

### 判题重点记录

#### 判断是否有某种元素

```javascript
const automator = require('miniprogram-automator')

automator.connect({
    wsEndpoint: 'ws://localhost:9999'
  }).then(async miniProgram => {
    const page = await miniProgram.navigateTo('/pages/add/add')
    await page.setData({})

    //before: find form
    const form = await page.$('form')

    //check1: input
    const titleInputElm = await form.$('input[name="title"]')
    console.log("========================================")
    //如果没有找到 那么为null
    console.log(titleInputElm)
    console.log("========================================")

    //check2: textarea
    const contentAreaElm = await form.$('textarea[name="content"]')
    console.log(contentAreaElm)

    //if not exsit, these param will be NULL

    await miniProgram.disconnect()
  })
```
