import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { ModuleUser } from './entities/providers/ModuleUser'

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    entities: [ModuleUser],
})

export { AppDataSource }
