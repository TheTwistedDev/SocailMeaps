import SidebarDm from '../components/SidebarDm'
import SidebarGc from '../components/SidebarGc'
import SidebarAc from '../components/SidebarAc'

function SidebarDisplay({id}) {
    if (id == "dm") {
        return (
            <SidebarDm/>
        )
    } else if (id == "groupChat") {
        return (
            <SidebarGc/>
        )
    }
    return (
        <SidebarAc/>
    )
}

export default SidebarDisplay