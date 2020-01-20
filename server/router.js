import { Router } from 'express'
import readability from './api/readability'

const router = new Router()

router.get('/readability', readability)

export default router
