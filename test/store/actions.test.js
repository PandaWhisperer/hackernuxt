import axios from 'axios'
import { loadItems } from '~/store/actions'

jest.mock('axios')

describe('actions', () => {
  test('loadItems', async () => {
    const stories = [{
      "by" : "danabramov",
      "descendants" : 571,
      "id" : 22022466,
      "kids" : [ 22022603, 22024416, 22024107 ],
      "score" : 1657,
      "time" : 1578778327,
      "title" : "Goodbye, Clean Code",
      "type" : "story",
      "url" : "https://overreacted.io/goodbye-clean-code/"
    }]

    const commit = jest.fn()

    axios.get.mockResolvedValue({ data: stories, status: 200 })

    await loadItems({ commit })
    expect( commit ).toHaveBeenCalledWith('setItems', stories)
  })
})
