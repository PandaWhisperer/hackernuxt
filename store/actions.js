import axios from 'axios'
import { parseStringPromise as parseXml } from 'xml2js'

export async function loadItems({ commit }) {
  const result = await axios.get('https://news.ycombinator.com/rss')

  if (result.status == 200) {
    const { rss } = await parseXml(result.data, { explicitArray: false })
    const items = rss.channel.item.map(item => ({
      id: item.comments.split('=')[1], ...item
    }))

    commit('setItems', items)
  }
}
