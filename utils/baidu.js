const fetch = require('./fetch')
const api = 'https://api.map.baidu.com'

function fetchApi(path, data) {
  return fetch(api, path, data)
}

/**
 * 获取对应经纬度的城市，默认为北京
 * @param  {Number} latitude  经度
 * @param  {Number} longitude 纬度
 * @return {[type]}           城市
 */
function getLocationName(latitude = 39.9151190000, longitude = 116.4039630000) {
  const params = {
    location: `${ latitude },${ longitude }`,
    output: 'json',
    ak: 'B61195334f65b9e4d02ae75d24fa2c53',
    language: 'zh-CN'
  }
  return fetchApi('geocoder/v2/', params).then(res => res.data.result.addressComponent.city)
}

module.exports = { getLocationName }

