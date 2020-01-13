import state from '~/store/state'

describe('state', () => {
  test('items should be empty', () => {
    expect(state().items).toEqual([])
  })

  test('current should be null', () => {
    expect(state().current).toBe(null)
  })
})
