import Express from 'express'
import { router } from './routes'
import cors from 'cors'
import '../shared/services/YupTranslations'

const server = Express()

server.use(cors({
    origin: '*'
}))
server.use(Express.json())
server.use(router)

export { server }
