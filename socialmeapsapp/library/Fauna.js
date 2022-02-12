import { Client as FaunaClient } from "faunadb"

const serverClient = new FaunaClient({
  secret: process.env.FAUNA_SERVER_SECRET,
  scheme: 'https',
  domain: 'db.us.fauna.com',
  port: 443,
})