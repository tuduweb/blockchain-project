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
    console.log(titleInputElm)

    //check2: textarea
    const contentAreaElm = await form.$('textarea[name="content"]')
    console.log(contentAreaElm)

    //if not exsit, these param will be NULL

    //check logic

    await miniProgram.disconnect()
  })
  