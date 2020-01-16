import axios from 'axios'
import nock from 'nock'
import { loadItems } from '~/store/actions'

beforeAll(() => {
  axios.defaults.adapter = require('axios/lib/adapters/http')
})

describe('actions', () => {
  test('loadItems', async () => {
    const stories = [{
      "id" : 22022466,
      "by" : "danabramov",
      "descendants" : 571,
      "kids" : [ 22022603, 22024416, 22024107 ],
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
    await loadItems({ commit })

    expect( commit ).toHaveBeenCalledWith('setItems',
      stories.map(story => ({ ...story, date: expect.any(Date) }))
    )

    mock.done()
  })
})
