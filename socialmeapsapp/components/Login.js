import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Head from 'next/head'

function Login () {
    return (
        <div className="grid place-items-center h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <Head>
            <title>SocialMeaps - Login</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="grid gap-4 border-2 border-slate-100 rounded-lg bg-slate-100 text-center p-12 text-xl font-semibold shadow-lg">
                <h1> Welcome to SocialMeaps </h1>
                <h2> Please select one of the following providers</h2>
                <div className="grid place-items-center gap-4">
                    {/* <Image
                        src="/public/Facebook_Logo.png"
                        width={40}
                        height={40}
                        objectFit='contain'
                    />
                    <button className=" w-fit rounded-full bg-blue-500 text-white p-3 " onClick={signIn}> Login with Facebook </button> */}

                    <Image
                        src="/../public/google-logo.png"
                        width={40}
                        height={40}
                        objectFit='contain'
                    />
                    <button className="w-fit rounded-full bg-blue-500 text-white p-3" onClick={() => signIn("google")}> Login with Google </button>
                </div>
            </div>
        </div>
    )
}

export default Login