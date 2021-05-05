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


    //获取渲染的数据
    const noteListElm = await page.$('#note-list')
    console.log(noteListElm)
    const listsElm = await noteListElm.$$('.note-item')
    console.log(await listsElm[0].text())//->头歌笔记,更新时间..

    await miniProgram.disconnect()

  })
  