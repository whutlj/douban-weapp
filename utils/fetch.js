/**
 * 异步获取数据
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} api  api地址
 * @param  {String} path 请求路径
 * @param  {Object} data 参数
 * @return {Promise}     抓取任务的Promise
 */
module.exports = function fetch(api, path, data, method = 'GET') {
  return new Promise((resolve, reject) =>{
    wx.request({
      url: `${api}/${path}`,
      data: Object.assign({}, data),
      header: {'content-type': 'json'},
      // method: method,
      success: resolve,
      fail: reject
    })
  })
}
// module.exports = function (api, path, params) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: `${api}/${path}`,
//       data: Object.assign({}, params),
//       header: { 'Content-Type': 'json' },
//       success: resolve,
//       fail: reject
//     })
//   })
// }