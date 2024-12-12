import { apiClient } from './api'

export const fetchPhotos = async (
  query: string,
  page: number = 1,
  perPage?: number,
) => {
  const response = await apiClient.get('/search', {
    params: { query, page, per_page: perPage },
  })

  return response.data
}
