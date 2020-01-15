import axios from 'axios'
import { getStories, getItem } from '~/lib/hackernews'

jest.mock('axios')

beforeEach(() => {
  // Clear mocks calls
  axios.mockClear();
});

describe('getStories', () => {
  test('type argument must be valid', async () => {
    expect( getStories('foo') ).rejects.toThrow(/type/)
  })

  test('defaults to top stories', async () => {
    axios.get.mockResolvedValue({ data: [], status: 200 })
    await getStories()
    expect( axios.get.mock.calls[0][0] ).toMatch(/topstories/)
  })
})

describe('getItem', () => {
  test('id is required', async () => {
    expect( getItem() ).rejects.toThrow(/id is required/)
  })

  test('id must be valid', async () => {
    expect( getItem('foo') ).rejects.toThrow(/id must be numerical/)
  })

  test('with valid id', async () => {
    const data = {
      "by" : "danabramov",
      "descendants" : 571,
      "id" : 22022466,
      "kids" : [ 22022603, 22024416, 22024107 ],
      "score" : 1657,
      "time" : 1578778327,
      "title" : "Goodbye, Clean Code",
      "type" : "story",
      "url" : "https://overreacted.io/goodbye-clean-code/"
    }
    axios.get.mockResolvedValue({ data, status: 200 })

    expect( await getItem('22022466') ).toEqual(data)
  })
})
