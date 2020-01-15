import axios from 'axios'

const BASE_URL='https://hacker-news.firebaseio.com/v0'
const STORY_TYPES = ['top', 'new', 'best', 'ask', 'show', 'job']

export async function getStories(type = 'top') {
  if (STORY_TYPES.indexOf(type) < 0) {
    throw new Error(`type must be one of ${STORY_TYPES}`)
  }

  const response = await axios.get(`${BASE_URL}/${type}stories.json`)

  if (response.status === 200 && response.data) {
    return response.data
  }
}

export async function getItem(id, depth = 0) {
  if (!id) throw new Error('id is required')
  if (typeof id !== 'number' && !`${id}`.match(/^[0-9]+$/)) {
    throw new Error('id must be numerical')
  }

  const response = await axios.get(`${BASE_URL}/item/${id}.json`)

  if (response.status === 200 && response.data) {
    const item = response.data

    if (item.data && item.kids && depth > 0) {
      item.kids = await Promise.all(
        item.kids.map(id => getItem(id, depth-1))
      )
    }

    return item
  } else {
    throw new Error('Item not found')
  }
}