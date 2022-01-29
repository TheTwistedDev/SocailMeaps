
import { useSession } from "next-auth/react"
import SidebarRow from '../components/SidebarRow'
import {
    ChevronDownIcon, 
    UserGroupIcon,
    UsersIcon,
} from '@heroicons/react/Solid'


function Sidebar() {
    const {data : session } = useSession()

  return  (
      <div className="h-screen p-2 max-w-[450px] xl:min-w-[300px] border-2 shadow-xl">
          {/* displays a row of icons */}
          <SidebarRow src={session.user.image} title={session.user.name} />
          <SidebarRow Icon={UsersIcon} title="Direct Messages"/>
          <SidebarRow Icon={UserGroupIcon} title="Group Chats" />
          {/* <SidebarRow Icon={ChevronDownIcon} title="See More" /> */}
      </div>
  )
}

export default Sidebar;
