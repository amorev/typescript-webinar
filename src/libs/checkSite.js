const checkers = require('./checker')

module.exports = (type, url, data) => {
  let handler = null
  console.log(checkers)
  switch (type) {
    case 'check200':
      handler = checkers.check200
      break;
    case 'checkContains':
      handler = checkers.checkContains
      break;
    case 'checkNew':
      handler = checkers.checkNew
      break;
  }
  if (handler) {
    return handler(url, data)
  }
  return false
}
