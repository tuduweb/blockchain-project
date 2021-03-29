// app.js

App({
  login: () => {
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.login({
      success (res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: getApp().globalData.remote_url + 'login',
            data: {
              code: res.code
            },
            success: res => {
              if(res.res < 0)
              {
                console.log("登录失败")
                console.log(res)
                return
              }
              getApp().globalData.openid = res.data.data.open_id
              getApp().globalData.account_addr = res.data.data.account_addr
              console.log(getApp().globalData)
  
              wx.redirectTo({
                url: '/pages/note/note'
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log("hello world")
    setTimeout(() => {
      getApp().login()
    }, 200);

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })

  },
  globalData: {
    userInfo: null,
    openid: null,
    account_addr: null,
    remote_url: 'http://116.62.132.128:3000/'
  }
})
