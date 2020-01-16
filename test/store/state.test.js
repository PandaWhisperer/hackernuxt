import state from '~/store/state'

describe('state', () => {
  test('stories should be empty', () => {
    expect(state().stories).toEqual([])
  })

  test('current should be null', () => {
    expect(state().current).toBe(null)
  })
})
