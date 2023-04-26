import {drizzle} from 'drizzle-orm/libsql'
import {createClient} from '@libsql/client/http'

const client = createClient({
  url: 'REPLACE ME',
  authToken: 'REPLACE ME'
})

export const db = drizzle(client)

