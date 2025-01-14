import { Knex } from 'knex'
import path from 'path'

export const development: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, '..', '..', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, '..', 'migrations')
    },
    pool: {
        afterCreate: (connection: any, done: Function) => {
            connection.run('PRAGMA foreign_keys = ON')
            done()
        }
    }
}
