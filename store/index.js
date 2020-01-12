export const state = () => ({
  items: []
})

export const mutations = {
  set(state, items) {
    state.items = items
  }
}
