// pages/listDetial/listDetail.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    movies: [],
    loading: false,
    moreData: false,
    hasMore: true
  },
  key: '',
  start: 1,
  count: 20,
  loadMore: function () {
    wx.showLoading({
      title: '拼命加载中',
      mask: true
    })
    this.setData({
      loading: true
    })
    return app.douban.find(this.key, this.start, this.count).then(res => {
      let total = res.total ? res.total : res.subjects.length
      this.setData({
        movies: res.subjects,
        total: total,
        loading: false
      })
      wx.hideLoading()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const title = options.title || '正在上映'
    wx.setNavigationBarTitle({
      title: title
    })
    const key = options.key || 'in_theaters'
    this.key = key
    this.loadMore()
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
    this.start = 1
    this.loadMore().then(res=> wx.stopPullDownRefresh())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      moreData: true
    })
    if (this.key === 'new_movies') {
      this.setData({
        hasMore: false,
        moreData: true
      })
      return
    }

    if (this.data.hasMore) {
      this.start += 1
      app.douban.find(this.key, this.start, this.count).then(res => {
        if (res.subjects.length === 0) {
          this.setData({
            hasMore: false,
            moreData: true
          })
        } else {
          this.setData({
            movies: this.data.movies.concat(res.subjects),
            hasMore: true,
            moreData: false
          })
        }
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})