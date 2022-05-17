import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Head from 'next/head'

function Login () {

    return (

        <div className="flex h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-600">
            
            {/* display the tab information for the login component */}

            <Head>
            <title>SocialMeaps - Login</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col w-fit h-fit m-auto border-2 border-slate-100 rounded-lg bg-slate-100 text-center p-12 text-2xl font-bold shadow-lg">
                <h1> Welcome to SocialMeaps </h1>
                <h2 className="pb-4"> Please select your signin option from one of the following providers</h2>
                <div className="flex mx-auto justify-center space-x-4 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 w-fit px-4 rounded-full">
                    {/* <Image
                        src="/../public/Facebook_Logo.png"
                        width={40}
                        height={40}
                        objectFit='contain'
                    />
                    <button className=" w-fit rounded-full bg-blue-500 text-white p-3 " onClick={() => signIn('facebook')}> Login with Facebook </button> */}
                    
                    {/* display the google logo */}

                    <Image
                        src="/../public/google-logo.png"
                        width={40}
                        height={40}
                        objectFit='contain'
                    />

                    {/* display the signin button */}
                    
                    <button className="text-white font-bold p-3" onClick={() => signIn("google")}> Login with Google </button>
                </div>

            </div>
            
        </div>
    )
}

export default Login