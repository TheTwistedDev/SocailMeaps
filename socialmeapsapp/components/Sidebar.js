
import { useSession } from "next-auth/react"
import SidebarRow from '../components/SidebarRow'
import { 
    UserGroupIcon,
    UsersIcon,
} from '@heroicons/react/Solid'


function Sidebar() {
    const {data : session } = useSession()

  return  (
      <div className="h-myscreen p-2 max-w-[450px] xl:min-w-[300px] shadow-xl">
          {/* displays a row of icons */}
          <SidebarRow src={session.user.image} title={session.user.name} />
          <SidebarRow Icon={UsersIcon} title="Direct Messages"/>
          <SidebarRow Icon={UserGroupIcon} title="Group Chats" />
          {/* <SidebarRow Icon={ChevronDownIcon} title="See More" /> */}

      </div>

  )
}

export default Sidebar;
