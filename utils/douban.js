const fetch = require('./fetch')

const api = 'https://douban.uieee.com/'

function fetchApi(path, data) {
  return fetch(api, path, data)
}


function find(path, page = 1, count = 20, search = '') {
  const data = {}
  return fetchApi(path, )
}