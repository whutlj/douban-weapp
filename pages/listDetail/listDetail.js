// pages/listDetial/listDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 100,
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const title = options.title || '正在上映'
    wx.setNavigationBarTitle({
      title: title
    })
    wx.showLoading({
      title: '拼命加载中',
      mask: true
    })
    const key = options.key || 'in_theaters'
    app.douban.find(key, 0, 20).then(res => {
      this.setData({
        movies: res.subjects
      })
      wx.hideLoading()
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
    console.log('xiala')
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