const checkers = require('./checker')

module.exports = (type, url, data) => {
  let handler = null
  switch (type) {
    case 'check200':
      handler = checkers.check200
      break;
    case 'checkContains':
      handler = checkers.checkContains
      break;
  }
  if (handler) {
    return handler(url, data)
  }
  return false
}
