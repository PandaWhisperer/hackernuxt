export default function get(req, res) {
  const { url } = req.query
  res.end(url)
}
