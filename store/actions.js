import { getStories } from '~/lib/hackernews'

export async function loadStories({ commit }, type = 'top') {
  commit('setStories', await getStories(type))
}
