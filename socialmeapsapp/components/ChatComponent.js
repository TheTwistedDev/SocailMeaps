import Inputbox from '../components/Inputbox'
import ChatBox from '../components/ChatBox'
// import { useChannel } from './AblyReactEffect'

function ChatComponent() {
  return (
  <div>

    <div className="flex h-chat w-chat overflow-auto">
      <ChatBox/>
    </div>

    <div>
      <Inputbox/>
    </div>
    
  </div>   
  )
}

export default ChatComponent;

