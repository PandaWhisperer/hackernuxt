import { makeRoutes, flatten } from '~/server'

describe('makeRoutes', () => {
  test('should recursively load routes', async () => {
    const routes = await makeRoutes()

    expect(routes).toMatchObject({
      articles: {
        _id: {
          get: expect.any(Function)
        }
      }
    })
  })
})

describe('flatten', () => {
  test('should flatten route object', () => {
    const routes = {
      articles: {
        _id: {
          get: () => {}
        }
      }
    }

    expect(flatten(routes)).toMatchObject([
      { '/articles/:id': { get: expect.any(Function) } }
    ])
  })
})
