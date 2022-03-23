
import {
    SearchIcon
} from '@heroicons/react/outline'
import {
    XIcon
} from '@heroicons/react/Solid'
import { useRecoilState } from 'recoil'
import { accountModalState } from '../atoms/accountModalAtom'
import { useRef, useCallback, useEffect} from 'react'

function AccountModal() {
    const [showAccountModal, setShowAccountModal] = useRecoilState(accountModalState)
    const modalRef = useRef()
    const inputRef = useRef(null)

    const closeModal = e => {
        if (modalRef.current === e.target ){
            setShowAccountModal(false)
        }
    }
    // const keyPress = useCallback(e => {
    //     if (e.key === 'Enter' && showAccountModal) {
    //         setShowAccountModal(false)
    //     }
    // }, [setShowAccountModal, showAccountModal])

    // useEffect (() => {
    //     document.addEventListener('keydown', keyPress)
    //     return () => document.removeEventListener('keydown', keyPress)
    // },[keyPress])

    return (
        <div className='flex h-screen w-screen' ref={modalRef} onClick={closeModal}>
        <div className="flex mt-auto mb-auto h-content w-64 ">
            {showAccountModal && 
            <div className="flex-row ml-2 rounded-lg shadow-lg">
                <div className="flex ">
                    <h1 className="mr-auto ml-auto mt-4 mb-2 text-lg font-semibold text-slate-700"> Add Account </h1>
                    <XIcon className="mr-2 h-6 self-center text-gray-500 cursor-pointer hover:text-blue-500" onClick={() => setShowAccountModal(false)}/>
                </div>         
                <div className="flex m-3 rounded-full bg-gray-200 p-2">
                    <SearchIcon className="h-6 text-gray-500 ml-2 cursor-pointer"/>
                    <input className="flex grow ml-2 items-center bg-transparent outline-none 
                    placeholder-grey-500 w-64" 
                    type="text" 
                    ref={inputRef}
                    placeholder="Enter Email Address" />
                </div>
            </div>
            }
        </div>
        </div>
    )
}

export default AccountModal