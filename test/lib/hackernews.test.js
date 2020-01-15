import axios from 'axios'
import nock from 'nock'
import { getStories, getItem } from '~/lib/hackernews'

beforeAll(() => {
  axios.defaults.adapter = require('axios/lib/adapters/http')
})

describe('getItem', () => {
  test('id is required', async () => {
    expect( getItem() ).rejects.toThrow(/id is required/)
  })

  test('with valid id', async () => {
    const story = {
      "id" : 22022466,
      "by" : "danabramov",
      "descendants" : 571,
      "kids" : [ 22022603, 22024416, 22024107 ],
      "score" : 1657,
      "time" : 1578778327,
      "title" : "Goodbye, Clean Code",
      "type" : "story",
      "url" : "https://overreacted.io/goodbye-clean-code/"
    }
    const mock = nock('https://hacker-news.firebaseio.com/v0')
      .get(`/item/${story.id}.json`)
      .reply(200, story)

    expect( await getItem('22022466') ).toEqual(story)
    expect( mock.isDone() ).toBe(true)
  })
})

describe('getStories', () => {
  test('type argument must be valid', async () => {
    expect( getStories('foo') ).rejects.toThrow(/type/)
  })

  test('defaults to top stories', async () => {
    const mock = nock('https://hacker-news.firebaseio.com/v0')
      .get(`/topstories.json`)
      .reply(200, [])

    await getStories()

    expect( mock.isDone() ).toBe(true)
  })
})
