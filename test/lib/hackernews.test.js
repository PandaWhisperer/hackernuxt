import HackerNews from '~/lib/hackernews'
import TestAdapter from './test_adapter'

const testData = new TestAdapter('./database.json')

describe('HackerNews', () => {
  let db = new HackerNews({ db: testData })

  describe('getItem', () => {
    test('id is required', async () => {
      expect( db.getItem() ).rejects.toThrow(/id is required/)
    })

    test('with valid id', async () => {
      const story = testData.get('/v0/item/22022466')

      expect( await db.getItem('22022466') ).toEqual(
        { ...story, date: expect.any(Date) }
      )
    })

    test('with children when depth > 0', async () => {
      const story = testData.get('/v0/item/22022466')
      const comment = testData.get('/v0/item/22022603')

      expect( await db.getItem('22022466', 1) ).toEqual({
        ...story,
        date: expect.any(Date),
        children: [
          { ...comment, date: expect.any(Date) }
        ]
      })
    })
  })

  describe('getStories', () => {
    test('type argument must be valid', async () => {
      expect( db.getStories('foo') ).rejects.toThrow(/type/)
    })

    test('defaults to top stories', async () => {
      const topstories = testData.get('/v0/topstories')

      const stories = await db.getStories()

      expect( stories.map(({id}) => id) ).toEqual(topstories)
    })
  })
})
