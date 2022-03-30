import fuanadb, {query as q} from 'faunadb'



const serverClient = new fuanadb.Client({
  secret: process.env.FAUNA_SERVER_SECRET,
  domain: 'db.us.fauna.com',
  port: 8443,
  scheme: 'https',
})

const getUserByEmail = async (email) => {
  return await serverClient.query(
    q.Get(q.Match(q.Index('user_by_email'), email))
  )
}



const getContacts = async (email) => {
  
}

const addContact = async (email) => {
  return await serverClient.query(
    q.Create(q.Collection('Contacts'), {
      data : { 
        email, 
      },
    })
  )
}

module.exports = {
  getContacts, 
  addContact,
  getUserByEmail,
}