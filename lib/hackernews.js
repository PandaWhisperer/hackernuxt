import axios from 'axios'

const BASE_URL='https://hacker-news.firebaseio.com/v0'
const STORY_TYPES = ['top', 'new', 'best', 'ask', 'show', 'job']

export async function getItem(id, depth = 0) {
  if (!id) throw new Error('id is required')

  const response = await axios.get(`${BASE_URL}/item/${id}.json`)

  if (response.status === 200 && response.data) {
    const item = response.data

    // parse timestamp
    if (item && item.time) {
      item.date = new Date(item.time * 1e3)
    }

    // populate children
    item.children = await getChildren(item, depth)

    return item
  } else {
    throw new Error('Item not found')
  }
}

export async function getChildren(item, depth = 1) {
  if (item && item.kids && depth > 0) {
    return await Promise.all(
      item.kids.map(id => getItem(id, depth-1))
    )
  }
}

export async function getStories(type = 'top', count = 25) {
  if (STORY_TYPES.indexOf(type) < 0) {
    throw new Error(`type must be one of ${STORY_TYPES}`)
  }

  const response = await axios.get(`${BASE_URL}/${type}stories.json`)

  if (response.status === 200 && response.data) {
    return Promise.all(
      response.data.slice(0, count).map(id => getItem(id) )
    )
  }
}
