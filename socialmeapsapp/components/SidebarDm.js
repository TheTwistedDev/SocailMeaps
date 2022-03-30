import SidebarRow from '../components/SidebarRow'
import { getContacts } from '../library/Fauna'
import { useSession } from "next-auth/react"
import { 
  PlusIcon
} from '@heroicons/react/Solid'

function SidebarDm() {
  const {data : session } = useSession()

  return (
    <div className="">
      <div className="flex mb-2">
        <p className="flex ml-auto mr-auto mt-2 mb-2 text-lg font-semibold text-slate-700">Direct Messages</p>
        <PlusIcon className="mr-3 mb-auto mt-auto h-6 text-slate-500 cursor-pointer"/>
      </div>
      
      <div>
      {/* <SidebarRow  
        id="sidebarDMsg" src={session.user.image} title={session.user.name} /> */}
      </div>
    </div>
  )
}

export default SidebarDm