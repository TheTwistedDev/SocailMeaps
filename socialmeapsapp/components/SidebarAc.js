import SidebarRow from '../components/SidebarRow'
import { 
  PlusIcon
} from '@heroicons/react/Solid'
import { useRecoilState } from 'recoil'
import { accountModalState } from "../atoms/accountModalAtom"


function SidebarAc() {
  const [showModal, setShowModal] = useRecoilState(accountModalState)

  return (
    <div className="">
     <div className="flex mb-2">
        <p className="ml-auto mr-auto mt-2 mb-2 text-lg font-semibold text-slate-700">Account</p>
        <PlusIcon onClick = {() => setShowModal(true)} className="mr-3 mb-auto mt-auto h-6 text-slate-500 cursor-pointer"/>
      </div>
      <div className="flex-row">
        <p className="ml-2 font-semibold text-slate-700 text-lg mb-2">Contacts</p>
        {/* <SidebarRow onClick = {(e) => setSidebarId(e.currentTarget.id)} 
          id="sidebarDMsg" src={session.user.image} title={session.user.name} /> */}
      </div>
    </div>
  )
}

export default SidebarAc
