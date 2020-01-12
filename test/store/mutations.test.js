import { setItems } from '~/store/mutations'

describe('mutations', () => {
  test('setItems', () => {
    const state = { items: [] }
    setItems(state, [1, 2, 3])
    expect(state.items).toEqual([1, 2, 3])
  })
})
