const fs = require('fs')
const path = require('path')
const router = require('urlrouter')

async function requireDir(pathname) {
  const dir = await fs.promises.opendir(pathname)
  let routes = {}

  for await (const entry of dir) {
    const name = path.join(pathname, entry.name)
    const basename = path.basename(entry.name, '.js')

    if (entry.isFile()) {
      routes[basename] = require(name)
    } else if (entry.isDirectory()) {
      routes[entry.name] = await requireDir(name)
    }
  }

  return routes
}

export function makeRoutes() {
  return requireDir(path.join(__dirname, 'api'))
}

export function flatten(routes, prefix='') {
  return Object.entries(routes).map(([key, val]) => {
    if ('function' === typeof val) {
      return { [key]: val }
    } else {
      const path = `${prefix}/${key.replace(/^_/, ':')}`
      return { [path]: path) }
    }
  }).flat()
}

// module.exports = router(app => {
//   app.get('/articles/:id', require('./articles/_id'))
// })
