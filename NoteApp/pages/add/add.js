// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    isSaving: false
  },

  formSubmit(e){
    this.setData({isSaving: true})
    wx.showLoading({
      title: '保存中'
    })

    console.log(e.detail.value)

    wx.request({
      url: getApp().globalData.api_server_url + ( this.data.id > 0 ? 'editNote': 'addNote'),
      data: {
        'id': this.data.id,
        'user_addr': getApp().globalData.account_addr,
        'openid': getApp().globalData.openid,
        'title' : e.detail.value.title,
        'content': e.detail.value.content
      },
      success: (res) => {
        console.log(res)
        if(res.data.res >= 0)
        {
          wx.navigateBack({
            delta: 0
          })
        }else{
          this.setData({isSaving:false})
          wx.hideLoading()
        }
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id != null)
    {
      console.log(options.id)
      this.setData({id:options.id})
      wx.request({
        url: getApp().globalData.api_server_url + 'getNote', //仅为示例，并非真实的接口地址
        data: {
          'id': decodeURIComponent(options.id),
          'user_addr': getApp().globalData.account_addr
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          console.log(res.data)
          this.setData({
            title : res.data.data.ether[0],
            content : res.data.data.ether[1]
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})