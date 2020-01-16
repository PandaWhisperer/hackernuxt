import { setStories, setCurrent } from '~/store/mutations'

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
})
