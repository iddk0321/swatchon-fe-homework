import type { Connect, ViteDevServer } from 'vite'
import items from './mock/items.json'

const cartQualities = []

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const mockApiLatency = (quick?: boolean) => sleep(quick ? 100 : 500 + Math.random() * 100)

const getBody = (req: Connect.IncomingMessage): Promise<any> => {
  return new Promise((resolve) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      resolve(JSON.parse(body || '{}'))
    })
  })
}

const proxyServer = () => {
  return {
    name: 'mock-api',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith('/api/items')) {
          await mockApiLatency()

          const url = new URL(req.url, `http://${req.headers.host}`)
          const page = parseInt(url.searchParams.get('page') || '1', 10)
          const perPage = parseInt(url.searchParams.get('perPage') || '12', 10)
          const startIndex = (page - 1) * perPage
          const endIndex = startIndex + perPage
          const paginatedItems = items.slice(startIndex, endIndex)

          // 응답 객체 생성
          const response = {
            items: paginatedItems,
            total: items.length,
            page,
            perPage,
          }

          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(response))
          return
        }

        if (req.url === '/api/count') {
          await mockApiLatency(true)

          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ count: cartQualities.length }))
          return
        }

        if (req.url === '/api/cart_qualities' && req.method === 'POST') {
          const body = await getBody(req)
          const { qualityId } = body

          await mockApiLatency(true)

          const quality = items.find((item) => item.id === qualityId)
          if (!quality) {
            res.statusCode = 404
            res.end(JSON.stringify({ message: 'Not Found' }))
            return
          }

          const newId = cartQualities.length + 1
          const cartQuality = {
            id: newId,
            quality,
          }

          cartQualities.push(cartQuality)

          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(cartQuality))
          return
        }

        next()
      })
    },
  }
}

export default proxyServer