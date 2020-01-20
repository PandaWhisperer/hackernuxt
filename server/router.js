import { Router } from 'express'
import articleParser from './api/article'

const router = new Router()

router.get('/article', articleParser)

export default router
