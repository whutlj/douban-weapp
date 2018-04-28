const fetch = require('./fetch')

const api = 'https://douban.uieee.com/v2/movie'

function fetchApi(path, data) {
  return fetch(api, path, data)
}


function find(path, page = 1, count = 20, search = '') {
  const data = {
    start: (page - 1) * count,
    count: count,
    city: getApp().currentCity
  }
  return fetchApi(path, search ? Object.assign(data, {q: search}) : data)
}

function findOne (id) {
  return fetchApi('subject/' + id).then(res => res.data)
}

module.exports.find = find
module.exports.findOne = findOne