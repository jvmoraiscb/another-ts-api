import express from 'express'
import { AppDataSource } from './AppDataSource'
import { router } from './routes'

const app = express()
AppDataSource.initialize()
app.use(express.json())
app.use(router)

export { app }
