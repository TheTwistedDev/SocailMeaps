import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from "next-auth/react"
import Login from '../components/Login'




export default function Home() {
  const {data : session } = useSession()
  console.log(session)
  if (!session) return <Login />
  return (
    <div> 
      <Head>
        <title>SocialMeaps - Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

    </div>
  )
  
}
