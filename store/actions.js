export async function loadStories({ commit }, type = 'top') {
  commit('setStories', await this.$hn.getStories(type))
}

export async function loadStory({ commit }, id) {
  commit('setCurrent', await this.$hn.getItem(id, 1))
}

export async function loadComments({ commit }, id) {
  const { children } = await this.$hn.getItem(id, 1)
  commit('setChildren', { id, children })
}
