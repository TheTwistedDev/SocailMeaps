import {
    SearchIcon
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

function Header() {
    const {data : session } = useSession()
    return (
        <div className="flex justify-between sticky top-0 z-50 bg-white p-2 lg:px-5 
        shadow-md">

            {/* Left */}

            <div className="flex ml-2 mr-2 items-center text-xl font-semibold">
                <h1>SocialMeaps</h1>
            </div>

            {/* Center */}
            <div className="flex ml-4 mr-4 items-center rounded-full bg-gray-200 p-2">
                    <SearchIcon className="h-6 text-gray-600 ml-2"/>
                    <input class="flex flex-grow ml-2 items-center bg-transparent outline-none 
                    placeholder-grey-500 w-96" 
                    type="text" 
                    placeholder="Search SocailMeaps" />
            </div>
            {/* Right */}

            <div class="flex items-center">
                <Image
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"
                />
                <p className=" font-semibold m-3 align-middle">{session.user.name}</p>
                <button className="p-3 font-semibold text-white rounded-full bg-blue-500" onClick={signOut}> Sign Out </button>
            </div>
        </div>
    )
}

export default Header
