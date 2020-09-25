const axios = require('axios')


module.exports = async (url) => {
  try {
    const data = await axios.get(url)
    console.log(url)
    return data.status === 200
  } catch (e) {
    return false
  }
}
