// pages/movieList/movieList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: {
      autoplay: true,
      interval: 2000,
      duration:   200
    },
    typeList: [
      {key: 'in_theaters', count: 15}, // 正则热映
      {key: 'coming_soon', count: 10}, // 即将上映
      {key: 'new_movies', count: 20}, // 新片榜
      {key: 'us_box', count: 8}, // 北美票房榜
      {key: 'top250',count: 15} // top250
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '电影榜单'
    })
    // wx.showLoading({
    //   title: '拼命加载中',
    //   mask: true
    // })
    // 获取多个类型的数据
    // const requestArr = typeList.map((item) => {
    //   return app.douban.find(item.key, 0, item.count)
    //     .then(res => {
    //       item.subjects = res.subjects
    //     })
    // })
    // Promise.all(requestArr).then(() => {
    //   wx.hideLoding()
    // })
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