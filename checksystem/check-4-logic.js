const automator = require('miniprogram-automator')

automator.connect({
    wsEndpoint: 'ws://localhost:9999'
  }).then(async miniProgram => {
    const page = await miniProgram.navigateTo('/pages/add/add')

    const form = await page.$('form')
    
    const titleInputElm = await form.$('input[name="title"]')
    const contentAreaElm = await form.$('textarea[name="content"]')
    const submitElm = await form.$('button[form-type="submit"]')
    //以上元素需要全部存在


    //曲线测试 直接调用方法
    await page.callMethod('formSubmit', {'detail': { 'value' : {
        'title' : '随机生成一个标题',
        'content': '随机生成一些内容'
    }}})

    const globalData = await miniProgram.evaluate(() => getApp().globalData)
    console.log(globalData)

    //完成输入后不允许报错..然后再查找数据库中是否写入成功

    await miniProgram.disconnect()
})
  