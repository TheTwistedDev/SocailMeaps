import { Client as FaunaClient } from 'faunadb'
import { query as q } from 'faunadb'

const serverClient = new FaunaClient({
    secret: process.env.FAUNA_Server_SECRET,
    scheme: 'https',
    domain: 'db.us.fauna.com',
    port: 443,
})

  module.exports = {
    createDM,
  }