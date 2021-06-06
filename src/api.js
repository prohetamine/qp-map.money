const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://localhost:9999/api/'
});

export default ({
  getPointsRoutes: async (hash = 0, geo = [0, 0]) => {
    const { data } = await instance.get(`/getPointsRoutes?geo=${geo}&hash=${hash}`)
    return data
  },

  getEndPoint: async (hash = 0) => {
    const { data } = await instance.get(`/getEndPoint?hash=${hash}`)
    return data
  }
})
