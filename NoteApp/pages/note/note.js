// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes: []
  },
  bindShowNote(e){
    console.log(e.target)
    console.log(e.currentTarget)
    wx.navigateTo({
      url: '/pages/view/view?id='+e.currentTarget.dataset.nid
    })
  },
  bindAddNote(e){
    wx.navigateTo({
      url: '/pages/add/add'
    })
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.request({
      url: getApp().globalData.api_server_url + '/getList',
      data: {
        'user_addr': getApp().globalData.account_addr
      },
      success : (res) => {
        console.log(res)
        this.setData({
          notes : res.data.data
        })
      }
    })

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