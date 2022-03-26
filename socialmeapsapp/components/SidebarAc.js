import SidebarRow from '../components/SidebarRow'
import { 
  PlusIcon
} from '@heroicons/react/Solid'
import { useRecoilState } from 'recoil'
import { contactModalState } from "../atoms/contactModalAtom"
import { useRef } from 'react'


function SidebarAc() {
  const [showContactModal, setShowContactModal] = useRecoilState(contactModalState)

  const openContactModal = () => {
    setShowContactModal(true)
  }

  return (
    <div className="" >
     <div className="flex mb-2">
        <p className="ml-auto mr-auto mt-2 mb-2 text-lg font-semibold text-slate-700">Contacts</p>
        <PlusIcon onClick = {openContactModal} className="mr-3 mb-auto mt-auto h-6 text-slate-500 cursor-pointer"/>
      </div>
      <div className="flex-row">
        {/* <SidebarRow onClick = {(e) => setSidebarId(e.currentTarget.id)} 
          id="sidebarDMsg" src={session.user.image} title={session.user.name} /> */}
      </div>
    </div>
  )
}

export default SidebarAc
