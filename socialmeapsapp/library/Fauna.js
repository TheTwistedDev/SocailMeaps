import { Client as FaunaClient } from "faunadb"
import fuanadb, {query as q} from 'faunadb'


const serverClient = new FaunaClient({
  secret: process.env.FAUNA_SERVER_SECRET,
  scheme: 'https',
  domain: 'db.us.fauna.com',
  port: 443,
})

const getContacts = async (email) => {
  const { data } = await serverClient.query(
    q.Get(q.Match(q.Index('user_by_email'), email))
  )
  return data.contacts
}

const addContact = async (email, emailToAdd) => {
  const { data } = await serverClient.query(
    q.Update(q.Match(q.Index('user_by_email'), email),
    { data: {contacts: [,emailToAdd]}})
  )
  return data.contacts
}

module.exports = {
  getContacts, 
  addContact,
}