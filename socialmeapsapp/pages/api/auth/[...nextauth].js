// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FaunaAdapter } from "@next-auth/fauna-adapter"
import { Client as FaunaClient } from "faunadb"

const adminClient = new FaunaClient({
  secret: process.env.FAUNA_ADMIN_SECRET,
  scheme: 'https',
  domain: 'db.us.fauna.com',
  port: 443,
})

export default NextAuth({

  secret: process.env.SECRET,
  adapter: FaunaAdapter(adminClient),
  providers: [

    // OAuth authentication providers
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    // FacebookProvider({
    //     clientId: process.env.FACEBOOK_CLIENT_ID,
    //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    // }),
  ],
  
})