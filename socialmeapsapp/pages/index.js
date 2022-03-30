import Head from 'next/head'
// import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import { useSession } from "next-auth/react"
// const ChatComponent = dynamic(() => import('../components/ChatComponent'), { ssr: false });


export default function Home() {
  const {data : session } = useSession()
 
  console.log(session)
  
 
  // If there is not a session display the login component
  if (!session) return <Login />

  // Else display the home page 
  return (
    <div> 

      {/* displays the tab information */}

      <Head>
        <title>SocialMeaps - Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* display the page components */}

      <Header />
      <Sidebar />
     
    </div>
  )  
}
