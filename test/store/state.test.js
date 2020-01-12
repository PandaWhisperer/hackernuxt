import state from '~/store/state'

describe('state', () => {
  test('items should be empty', () => {
    expect(state().items).toEqual([])
  })
})
