// pages/carousel/carousel.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: {
      autoplay: false,
      duration: 200,
      interval: 2000
    },
    swiperItems: []
  },
  /**
   * 从缓存中读取首页滑动图
   */
  getCache: function () {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    app.douban.find('in_theaters', 1, 4).then(res => {
      // 获取到正在热映的影片进行轮播
      that.setData({
        swiperItems: res.subjects
      })
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