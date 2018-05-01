const fetch = require('./fetch')

const api = 'https://douban.uieee.com/v2/movie'

function fetchApi(path, data) {
  return fetch(api, path, data)
}


function find(path, page = 1, count = 20, search = '') {
  const params = {
    start: (page - 1) * count,
    count: count,
    city: getApp().data.currentCity
  }
  return fetchApi(path, search ? Object.assign(params, {q: search}) : params).then(res => res.data)
}

function findOne (id) {
  return fetchApi('subject/' + id).then(res => res.data)
}

module.exports = { find, findOne}
