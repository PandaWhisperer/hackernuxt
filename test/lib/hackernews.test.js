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
      "score" : 1657,
      "time" : 1578778327,
      "title" : "Goodbye, Clean Code",
      "type" : "story",
      "url" : "https://overreacted.io/goodbye-clean-code/"
    }
    const mock = nock('https://hacker-news.firebaseio.com/v0')
      .get(`/item/${story.id}.json`)
      .reply(200, story)

    expect( await getItem('22022466') ).toEqual(
      { ...story, date: expect.any(Date) }
    )

    mock.done()
  })

  test('with children when depth > 0', async () => {
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

    expect( await getItem('22022466', 1) ).toEqual({
      ...story,
      date: expect.any(Date),
      children: [
        { ...comment, date: expect.any(Date) }
      ]
    })

    mock.done()
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

    mock.done()
  })
})
