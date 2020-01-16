import { setStories, setCurrent, setChildren } from '~/store/mutations'

describe('mutations', () => {
  test('setStories', () => {
    const state = { stories: [] }
    setStories(state, [1, 2, 3])
    expect(state.stories).toEqual([1, 2, 3])
  })

  test('setCurrent', () => {
    const state = { current: null }
    setCurrent(state, 2)
    expect(state.current).toBe(2)
  })

  test('setChildren', () => {
    const state = {
      current: {
        "id": 123,
        "kids": [ 1234 ],
        "children": [{
          "id": 1234,
          "parent": 123,
          "kids": [ 12345 ],
        }]
      }
    }
    const child = {
      "id": 12345,
      "kids": [],
      "parent": 1234,
    }

    setChildren(state, { id: 1234, children: [child] })

    expect(state.current).toEqual({
      "id": 123,
      "kids": [ 1234 ],
      "children": [{
        "id": 1234,
        "parent": 123,
        "kids": [ 12345 ],
        "children": [{
          "id": 12345,
          "kids": [],
          "parent": 1234,
        }]
      }]
    })
  })
})
