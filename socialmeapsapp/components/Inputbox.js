
import {
    PlusCircleIcon
} from '@heroicons/react/Solid'
import { useRef } from 'react'
import { Client as FaunaClient } from 'faunadb'

function Inputbox() {
    const inputRef = useRef(null)

    const sendPost = async (e) => {
        e.preventDefault()

        if(!inputRef.current.value)  return



        inputRef.current.value = ''

    } 

    return (
    <div className="flex ">
        <form className="flex ml-auto mr-auto mt-6 mb-6 sticky bottom-0 z-50  rounded-lg bg-gray-200 p-2 w-input h-12">
            <PlusCircleIcon className="mt-1 mr-2 h-6 text-gray-400 ml-2 cursor-pointer"/>
            <input className="flex w-4/5 ml-2 items-center bg-transparent outline-none 
            placeholder-grey-500 " 
            type="text" 
            ref={inputRef}
            placeholder="Message" />
            <button hidden type='submit' onClick={sendPost}>Submit</button>
        </form>
    </div>
    )
}

    export default Inputbox
