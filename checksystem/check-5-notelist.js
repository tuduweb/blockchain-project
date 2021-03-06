const automator = require('miniprogram-automator')

automator.connect({
    wsEndpoint: 'ws://localhost:9999'
  }).then(async miniProgram => {
    const page = await miniProgram.redirectTo('/pages/note/note')
    //await page.setData({})

    const pageNotes = await page.data('notes')

    console.log(pageNotes)
    //需要先判断notes是否为空
    console.log(pageNotes.length)

    await miniProgram.disconnect()

  })
  