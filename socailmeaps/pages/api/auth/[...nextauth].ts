//@ts-nocheck

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
    adapter: FaunaAdapter(adminClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
  secret: process.env.SECRET,
})