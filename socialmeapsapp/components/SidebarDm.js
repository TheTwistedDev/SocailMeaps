import SidebarRow from '../components/SidebarRow'
import { useState } from 'react'
import { useSession } from "next-auth/react"

function SidebarDm() {
  const [sidebarId, setSidebarId] = useState('')
  const {data : session } = useSession()

  return (
    <div className="">
      <p className="flex justify-center mt-2 mb-2 mr-4 text-lg font-semibold text-slate-700">Direct Messages</p>
      <div>
      <SidebarRow onClick = {(e) => setSidebarId(e.currentTarget.id)} 
        id="sidebarDMsg" src={session.user.image} title={session.user.name} />
      </div>
    </div>
  )
}

export default SidebarDm