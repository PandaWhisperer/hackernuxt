import { setItems, setCurrent } from '~/store/mutations'

describe('mutations', () => {
  test('setItems', () => {
    const state = { items: [] }
    setItems(state, [1, 2, 3])
    expect(state.items).toEqual([1, 2, 3])
  })

  test('setCurrent', () => {
    const state = { current: null }
    setCurrent(state, 2)
    expect(state.current).toBe(2)
  })
})
