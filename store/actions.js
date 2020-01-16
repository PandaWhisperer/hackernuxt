import { getStories, getItem } from '~/lib/hackernews'

export async function loadStories({ commit }, type = 'top') {
  commit('setStories', await getStories(type))
}

export async function loadStory({ commit }, id) {
  commit('setCurrent', await getItem(id, 1))
}
