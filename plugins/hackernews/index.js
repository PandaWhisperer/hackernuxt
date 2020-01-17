import HackerNews      from './hackernews'
import FirebaseAdapter from './firebase_adapter'
import TestAdapter     from './test_adapter'

const DEFAULT_URL = 'https://hacker-news.firebaseio.com'
const firebase = new FirebaseAdapter(DEFAULT_URL)

export default ({ app }, inject) => {
  inject('hn', new HackerNews(firebase) )
}

export { HackerNews, FirebaseAdapter, TestAdapter }
