const router = require('urlrouter')

const defaultOptions = {
  path: '~/server/api'
}

function makeRouter(options) {
  const { path } = options

  return router(app => {
    app.get('/articles/:id', require(`${path}/articles/_id`))
  })
}

export default function ApiRoutes(moduleOptions) {
  const options = Object.assign({}, defaultOptions, moduleOptions)

  this.addServerMiddleware({
    path: '/api', handler: makeRouter(options)
  })
}
