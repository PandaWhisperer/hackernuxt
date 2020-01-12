import axios from 'axios'
import { loadItems } from '~/store/actions'

jest.mock('axios')

describe('actions', () => {
  test('loadItems', async () => {
    const data = `
      <rss version="2.0">
        <channel>
          <title>Hacker News</title>
          <link>https://news.ycombinator.com/</link>
          <description>Links for the intellectually curious, ranked by readers.</description>
          <item>
            <title>Goodbye, Clean Code</title>
            <link>https://overreacted.io/goodbye-clean-code/</link>
            <pubDate>Sat, 11 Jan 2020 21:32:07 +0000</pubDate>
            <comments>https://news.ycombinator.com/item?id=22022466</comments>
            <description><![CDATA[<a href="https://news.ycombinator.com/item?id=22022466">Comments</a>]]></description>
          </item>
          <item>
            <comments>https://news.ycombinator.com/item?id=12345</comments>
          </item>
        </channel>
      </rss>
    `
    const items = [{
      id: "22022466",
      title: 'Goodbye, Clean Code',
      link: 'https://overreacted.io/goodbye-clean-code/',
      pubDate: 'Sat, 11 Jan 2020 21:32:07 +0000',
      comments: 'https://news.ycombinator.com/item?id=22022466',
      description: '<a href="https://news.ycombinator.com/item?id=22022466">Comments</a>'
    }, {
      id: "12345",
      comments: "https://news.ycombinator.com/item?id=12345"
    }]
    const commit = jest.fn()

    axios.get.mockResolvedValue({ data, status: 200 })

    await loadItems({ commit })
    expect(commit.mock.calls[0]).toEqual(['setItems', items])
  })
})
