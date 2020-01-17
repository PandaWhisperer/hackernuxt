import { loadStories, loadStory, loadComments } from '~/store/actions'
import { TestAdapter } from '~/plugins/hackernews'

const testData = new TestAdapter(require('../data/database.json'))

xdescribe('actions', () => {
  test('loadStories', async () => {
    const stories = [ testData.get('/v0/item/22022466') ]
    const commit = jest.fn()

    await loadStories({ commit })

    expect( commit ).toHaveBeenCalledWith('setStories',
      stories.map(story => ({ ...story, date: expect.any(Date) }))
    )
  })

  test('loadStory', async () => {
    const story   = testData.get('/v0/item/22022466')
    const comment = testData.get('/v0/item/22022603')
    const commit = jest.fn()

    await loadStory({ commit }, story.id)

    expect( commit ).toHaveBeenCalledWith('setCurrent', {
      ...story,
      date: expect.any(Date),
      children: [
        { ...comment, date: expect.any(Date) }
      ]
    })
  })
})
