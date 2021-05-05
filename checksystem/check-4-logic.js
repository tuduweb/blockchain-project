const automator = require('miniprogram-automator')

automator.connect({
    wsEndpoint: 'ws://localhost:9999'
  }).then(async miniProgram => {
    const page = await miniProgram.navigateTo('/pages/add/add')
    await page.setData({})
    //console.log(page)

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

    console.log("****************************************")

    const hasLogin = await miniProgram.evaluate(() => getApp().globalData)
    console.log(hasLogin)

    await miniProgram.disconnect()
  })
  