export type Quality = {
  id: number
  image: string
  code: string
  price: number
  title: string
  numProducts: number
}

export type QualityResponse = {
  items: Quality[]
  total: number;
  page: number;
  perPage: number;
}

export type CartQualityResponse = {
  id: number
  quality: Quality
}

export type CartBadgeCountResponse = {
  count: number
}

const API_BASE_URL = '/api'
const request = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options)
    if (!response.ok) {
      throw new Error(`API request failed: ${endpoint} (status: ${response.status})`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error occurred during API request: ${endpoint} ${endpoint}`, error)
    throw error
  }
}

export const fetchItems = async (page: number = 1) => {
  return request<QualityResponse>(`/items?page=${page}`)
}

export const addToCart = async (qualityId: number) => {
  return request<CartQualityResponse>('/cart_qualities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({qualityId})
  })
}

export const fetchCartBadgeCount = async () => {
  return request<CartBadgeCountResponse>('/count')
}
