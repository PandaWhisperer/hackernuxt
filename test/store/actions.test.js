import axios from 'axios'
import nock from 'nock'
import { loadStories, loadStory } from '~/store/actions'

beforeAll(() => {
  axios.defaults.adapter = require('axios/lib/adapters/http')
})

describe('actions', () => {
  test('loadStories', async () => {
    const stories = [{
      "id" : 22022466,
      "by" : "danabramov",
      "descendants" : 571,
      "kids" : [ 22022603 ],
      "score" : 1657,
      "time" : 1578778327,
      "title" : "Goodbye, Clean Code",
      "type" : "story",
      "url" : "https://overreacted.io/goodbye-clean-code/"
    }]

    const mock = nock('https://hacker-news.firebaseio.com/v0')
      .get(`/topstories.json`)
      .reply(200, stories.map(({id}) => id))

    stories.forEach(story => {
      mock.get(`/item/${story.id}.json`)
          .reply(200, story)
    })

    const commit = jest.fn()
    await loadStories({ commit })

    expect( commit ).toHaveBeenCalledWith('setStories',
      stories.map(story => ({ ...story, date: expect.any(Date) }))
    )

    mock.done()
  })

  test('loadStory', async () => {
    const story = {
      "id" : 22022466,
      "by" : "danabramov",
      "descendants" : 571,
      "kids" : [ 22022603 ],
      "score" : 1657,
      "time" : 1578778327,
      "title" : "Goodbye, Clean Code",
      "type" : "story",
      "url" : "https://overreacted.io/goodbye-clean-code/"
    }
    const comment = {
      "id": 22022603,
      "by": "burlesona",
      "kids": [],
      "parent": 22022466,
      "text": "This is just a test",
      "time": 1578779645,
      "type":"comment"
    }

    const mock = nock('https://hacker-news.firebaseio.com/v0')
      .get(`/item/${story.id}.json`)
      .reply(200, story)
      .get(`/item/${comment.id}.json`)
      .reply(200, comment)

    const commit = jest.fn()
    await loadStory({ commit }, story.id)

    expect( commit ).toHaveBeenCalledWith('setCurrent', {
      ...story,
      date: expect.any(Date),
      children: [
        { ...comment, date: expect.any(Date) }
      ]
    })

    mock.done()
  })
})
