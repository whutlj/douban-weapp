const fetch = require('./fetch.js')

function getLocation(type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: type || 'wgs84',
      success: resolve,
      fail: reject
    })
  })
}

module.exports = { getLocation }



