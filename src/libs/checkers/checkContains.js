const axios = require('axios')

module.exports = async (url, reqData) => {
  try {
    const data = await axios.get(url)
    return data.data.indexOf(reqData) !== -1
  } catch (e) {
    return false
  }
}
