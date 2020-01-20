import { extract } from 'article-parser'

export default async function get(req, res) {
  const { url } = req.query

  if (url) {
    try {
      const article = await extract(url)
      res.json(article)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  } else {
    res.status(400).json({ error: '`url` paramater required.' })
  }
}
