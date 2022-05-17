//@ts-nocheck

import {
    HiOutlineSearch
} from 'react-icons/hi'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

function Header() {
    
    const {data : session } = useSession()

    return (
        <div className="flex sticky top-0 z-50 bg-white p-2 lg:px-5 
        shadow-md">

            {/* Left */}

            <div className="flex ml-2 mr-2 items-center text-xl font-bold cursor-pointer">
                <h1>SocialMeaps</h1>
            </div>

            {/* Center */}

            <div className="flex ml-auto mr-auto self-center items-center rounded-full bg-gray-200 p-2">
                    <HiOutlineSearch className="h-6 text-gray-500 ml-2 cursor-pointer"/>
                    <input className="flex grow ml-2 items-center bg-transparent outline-none 
                    placeholder-grey-500 w-96" 
                    type="text" 
                    placeholder="Search SocialMeaps" />
            </div>

            {/* Right */}

            <div className="flex items-center ">

                {/* display the user profile image and user profile name */}

                <div className="flex items-center pl-1 border-2 rounded-full border-slate-300 cursor-pointer hover:bg-gray-200">
                    <Image
                        className="rounded-full self-center"
                        src={session?.user.image}
                        width="40"
                        height="40"
                        layout="fixed"
                    />
                    <p className=" font-semibold m-3 align-middle">{session?.user.name}</p>
                </div>

                {/* display the signout button */}

                <button className="ml-4 p-3 font-semibold text-white rounded-full bg-blue-500" onClick={signOut}> Sign Out </button>
            </div>

            <div className="flex items-center">
                
            </div>
        </div>
    )
}

export default Header