export type Quality = {
  id: number
  image: string
  code: string
  price: number
  title: string
  numProducts: number
}

export type QualityResponse  = {
  items: Quality[]
  total: number;
  page: number;
  perPage: number;
}

export type CartQualityResponse = {
  id: number
  quality: Quality
}

export const fetchItems = async (page: number = 1): Promise<QualityResponse> => {
  try {
    const response = await fetch(`/api/items?page=${page}`)
    if (!response.ok) {
      throw new Error('fetchItems failed')
    }
    return await response.json()
  } catch (error) {
    console.error('fetchFailed', error)
    throw error
  }
}

export const addToCart = async (qualityId: number): Promise<CartQualityResponse> => {
  try {
    const response = await fetch(`/api/cart_qualities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ qualityId })
    })
    if (!response.ok) {
      throw new Error(`addToCard failed`)
    }
    return await response.json()
  } catch (error) {
    console.error('addToCard failed', error)
    throw error
  }
}