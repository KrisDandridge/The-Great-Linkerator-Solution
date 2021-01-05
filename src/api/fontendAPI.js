import axios from 'axios'
const BASE_URL = 'api'

export const getLinks = async () => {
    const url = `${BASE_URL}/links`
    const { data } = await axios.get(url)
    console.log('data is ', data)
    return data
  }