// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  bindEditNote(e){
    wx.redirectTo({
      url: '/pages/add/add?id='+this.data.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      id: options.id
    })
    wx.request({
      url: getApp().globalData.remote_url + 'getNote', //仅为示例，并非真实的接口地址
      data: {
        'id': options.id,
        'user_addr': getApp().globalData.account_addr
      },
      success: (res) => {
        console.log(res.data)
        if(res.data.res >= 0)
        {
          this.setData({
            title : res.data.data.ether[0],
            content : res.data.data.ether[1],
            //update_time: res.data.data.database.update_time
          })
        }else{
          //获取数据，后台返回获取失败的处理
          console.log(res.data.data.result)
        }
      }
    })
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