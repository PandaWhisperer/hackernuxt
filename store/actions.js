import { getStories, getItem } from '~/lib/hackernews'

export async function loadStories({ commit }, type = 'top') {
  commit('setStories', await getStories(type))
}

export async function loadStory({ commit }, id) {
  commit('setCurrent', await getItem(id, 1))
}

export async function loadComments({ commit }, id) {
  const { children } = await getItem(id, 1)
  commit('setChildren', { id, children })
}
