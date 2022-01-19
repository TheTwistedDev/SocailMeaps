

import {
    SearchIcon
} from '@heroicons/react/outline'

function Header() {
    return (
        <div className="flex flex-row  sticky top-0 z-50 bg-white p-2 lg:px-5 
        shadow-md">

            {/* Left */}

            <div className="flex mr-2 items-center text-xl font-semibold">
                <h1>SocialMeaps</h1>
            </div>

            {/* Center */}
            <div className="flex flex-grow ml-4 mr-4 items-center rounded-full bg-gray-200 p-2">
                    <SearchIcon className="h-6 text-gray-600 ml-2"/>
                    <input className="flex flex-grow ml-2 items-center bg-transparent outline-none 
                    placeholder-grey-500 w-96" 
                    type="text" 
                    placeholder="Search SocailMeaps" />
            </div>
            {/* Right */}

            <div className="flex">
                <button className="ml-2 mr-2 pl-4 pr-4 font-semibold text-white rounded-full bg-blue-600 "> Sign In </button>
                <button className="ml-2 mr-2 pl-4 pr-4 font-semibold text-white rounded-full bg-blue-600"> Sign Out </button>
            </div>
        </div>
    )
}

export default Header
