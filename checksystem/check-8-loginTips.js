const automator = require('miniprogram-automator')

automator.connect({
    wsEndpoint: 'ws://localhost:9999'
  }).then(async miniProgram => {
      
    //首先需要找到一个笔记的id 再测试前可以先插入数据
    const page = await miniProgram.redirectTo('/pages/note/note')

    console.log(await page.data('isLogin'))

    let buttons = await page.$$('button')
    console.log(await buttons[0].text())

    //const login = await miniProgram.evaluate(() => getApp().globalData)
    await page.setData({'isLogin': false})
    let buttons2 = await page.$$('button')

    console.log(await buttons2[0].text())

    await miniProgram.disconnect()

  })
  