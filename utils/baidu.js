const fetch = require('./fetch')
const api = 'https://api.map.baidu.com'

function fetchApi(type, data) {
  return fetch(api, type, data)
}




