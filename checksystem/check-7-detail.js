const automator = require('miniprogram-automator')

automator.connect({
    wsEndpoint: 'ws://localhost:9999'
  }).then(async miniProgram => {
      
    //首先需要找到一个笔记的id 再测试前可以先插入数据
    const page = await miniProgram.redirectTo('/pages/view/view?id=80')

    console.log(await page.data(''))

    const titleElm = await page.$('#page-title')
    console.log(await titleElm.text())

    const contentElm = await page.$('#page-content')
    console.log(await contentElm.text())

    //判断查询的数据正确与否

    await miniProgram.disconnect()

  })
  