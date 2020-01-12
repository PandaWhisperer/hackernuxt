import { mutations } from '@/store/index'

const { set } = mutations

describe('mutations', () => {
  test('set', () => {
    const state = { items: [] }
    set(state, [1, 2, 3])
    expect(state.items).toEqual([1, 2, 3])
  })
})
