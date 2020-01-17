export const STORY_TYPES = ['top', 'new', 'best', 'ask', 'show', 'job']

export default class HackerNews {
  constructor(db) {
    this.db = db
  }

  async getItem(id, depth = 0) {
    if (!id) throw new Error('id is required')

    const data = await this.db.ref(`/v0/item/${id}`).once('value')

    if (data) {
      const item = data.val()

      // parse timestamp
      if (item && item.time) {
        item.date = new Date(item.time * 1e3)
      }

      // populate children
      item.children = await this.getChildren(item, depth)

      return item
    } else {
      throw new Error(`Item ${id} not found`)
    }
  }

  async getChildren(item, depth = 1) {
    if (item && item.kids && depth > 0) {
      return await Promise.all(
        item.kids.map(id => this.getItem(id, depth-1))
      )
    }
  }

  async getStories(type = 'top', count = 25) {
    if (STORY_TYPES.indexOf(type) < 0) {
      throw new Error(`type must be one of ${STORY_TYPES.join(', ')}`)
    }

    const data = await this.db.ref(`/v0/${type}stories`).once('value')

    if (data) {
      return Promise.all(
        data.val().slice(0, count).map(id => this.getItem(id) )
      )
    }
  }
}
