import axios from 'axios'
import { API_CONFIG } from './config'

export const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  headers: API_CONFIG.headers,
})

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error)
    return Promise.reject(error)
  },
)
