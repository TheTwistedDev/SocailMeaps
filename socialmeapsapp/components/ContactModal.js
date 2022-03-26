
import {
    SearchIcon
} from '@heroicons/react/outline'
import {
    XIcon
} from '@heroicons/react/Solid'
import { useRecoilState } from 'recoil'
import { contactModalState } from '../atoms/contactModalAtom'
import { useRef, useCallback, useEffect } from 'react'
import { useSession } from "next-auth/react"
import * as EmailValidator from 'email-validator'

function ContactModal() {
    const [showContactModal, setShowContactModal] = useRecoilState(contactModalState)
    const {data : session } = useSession()
    const inputRef = useRef(null)

    const keyPress = useCallback(e => {
        const input = inputRef.current.value.toLowerCase()
        if (e.key === 'Enter' && showContactModal) {
            console.log(input)
            if (EmailValidator.validate(input)) {
                console.log('This is a valid email')
                if(input !== session.user.email){
                    console.log('you can add this contact to your account')
                } else {
                    console.log('Cannot add yourself as a contact')
                }
            } else {
                console.log('this is not a valid email')
            }
            setShowContactModal(false)
        }
    }, [setShowContactModal, showContactModal])

    useEffect (() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    },[keyPress])

    return (
        <div className="" >
                {showContactModal && 
                <div className="border-t-2 border-b-2">
                    <div className="flex">
                        <h1 className="mr-auto ml-auto mt-4 mb-2 text-lg font-semibold text-slate-700"> Add Contact </h1>
                        <XIcon className="mr-2 h-6 self-center text-gray-500 cursor-pointer hover:text-blue-500" onClick={() => setShowContactModal(false)}/>
                    </div>         
                    <div className="flex m-3 rounded-full bg-gray-200 p-2">
                        <SearchIcon className="h-6 text-gray-500 ml-2 cursor-pointer"/>
                        <input className="flex grow ml-2 items-center bg-transparent outline-none 
                        placeholder-grey-500" 
                        type="text" 
                        ref={inputRef}
                        placeholder="Enter Email Address" />
                    </div>
                </div>
                }
        </div>
    )
}

export default ContactModal