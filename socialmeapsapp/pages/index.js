import Head from 'next/head'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>SocialMeaps</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}
