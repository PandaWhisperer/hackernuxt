import { getStories } from '~/lib/hackernews'

export async function loadItems({ commit }, type = 'top') {
  commit('setItems', await getStories(type))
}
