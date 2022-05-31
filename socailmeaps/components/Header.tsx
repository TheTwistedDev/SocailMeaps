//@ts-nocheck

import {
    HiOutlineSearch
} from 'react-icons/hi'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    
    const {data : session } = useSession()

    return (
        <div className="sticky top-0 z-50 flex p-2 bg-white shadow-md lg:px-5">

            {/* Left */}

            <Link href="/">
                <h1 className="flex items-center ml-2 mr-2 text-xl font-bold cursor-pointer">SocialMeaps</h1>
            </Link>

            {/* Center */}

            <div className="flex items-center self-center p-2 ml-auto mr-auto bg-gray-200 rounded-full">
                    <HiOutlineSearch className="h-6 ml-2 text-gray-500 cursor-pointer"/>
                    <input className="flex items-center ml-2 bg-transparent outline-none grow placeholder-grey-500 w-96" 
                    type="text" 
                    placeholder="Search SocialMeaps" />
            </div>

            {/* Right */}

            <div className="flex items-center ">

                {/* display the user profile image and user profile name */}

                <div className="flex items-center pl-1 border-2 rounded-full cursor-pointer border-slate-300 hover:bg-gray-200">
                    <Image
                        className="self-center rounded-full"
                        src={session?.user.image}
                        width="40"
                        height="40"
                        layout="fixed"
                    />
                    <p className="m-3 font-semibold align-middle ">{session?.user.name}</p>
                </div>

                {/* display the signout button */}

                <button className="p-3 ml-4 font-semibold text-white bg-blue-500 rounded-full" onClick={signOut}> Sign Out </button>
            </div>

            <div className="flex items-center">
                
            </div>
        </div>
    )
}

export default Header