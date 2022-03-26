import SidebarDm from '../components/SidebarDm'
import SidebarGc from '../components/SidebarGc'
import SidebarAc from '../components/SidebarAc'
import { useRecoilState } from 'recoil'
import { contactModalState } from '../atoms/contactModalAtom'


function SidebarDisplay({id}) {
    const [showContactModal, setShowContactModal] = useRecoilState(contactModalState)

    if (id == "dm") {
        setShowContactModal(false)
        return (
            <SidebarDm/>
        )
    } else if (id == "groupChat") {
        setShowContactModal(false)
        return (
            <SidebarGc/>
        )
    }
    return (
        <SidebarAc/>
    )
}

export default SidebarDisplay