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