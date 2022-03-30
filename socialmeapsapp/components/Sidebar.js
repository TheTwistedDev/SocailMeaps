
import { useSession } from "next-auth/react"
import SidebarRow from '../components/SidebarRow'
import SidebarDisplay from '../components/SidebarDisplay'
import ContactModal from '../components/ContactModal'
import { 
    UserGroupIcon,
    UsersIcon,
} from '@heroicons/react/Solid'
import { useState } from 'react'


function Sidebar() {
    const {data : session } = useSession()
    const [sidebarId, setSidebarId] = useState('')

  return  (
      <div className="h-myscreen p-2 max-w-max xl:min-w-[300px] shadow-xl">
          {/* displays Sidebar Elements for toggling sidebar displays */}
          <SidebarRow onClick = {(e) => setSidebarId(e.currentTarget.id)} id="account" src={session.user.image} title={session.user.name} />
          <SidebarRow onClick = {(e) => setSidebarId(e.currentTarget.id)} id="dm" Icon={UsersIcon} title="Direct Messages"/>
          <SidebarRow onClick = {(e) => setSidebarId(e.currentTarget.id)} id="groupChat"  Icon={UserGroupIcon} title="Group Chats" />
          {/* Display a component for message channel crud opperations */}
          <p className=" border-t-2 border-slate mt-2" ></p>
          <ContactModal />
          <SidebarDisplay id={sidebarId} title={sidebarId.title}/>
          
      </div>

  )
}

export default Sidebar;
