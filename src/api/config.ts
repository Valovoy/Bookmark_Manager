const BASE_URL = process.env.API_ENTRY_POINT
const API_KEY = process.env.API_KEY

export const API_CONFIG = {
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
}
