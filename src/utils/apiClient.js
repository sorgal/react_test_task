import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

const instance = axios.create({
  baseURL: process.env.OBOOBS_API_URL
})

instance.interceptors.request.use((request) => {
  const data = request.data
  if (data) {
    request.data = decamelizeKeys(data)
  }
  return request
})

instance.interceptors.response.use((response) => {
  const data = response.data
  if (data) {
    response.data = camelizeKeys(data)
  }
  return response
})

export default instance
