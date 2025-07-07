import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { LuMessageCircleMore } from "react-icons/lu";

const MessageContainer = () => {
  const {selectedConversation} = useConversation()
  return (
    <div className="flex-1 flex flex-col min-w-0 pt-5 pl-5 pr-5">
      {selectedConversation ? (<> 
        <div className="bg-slate-500 px-4 py-2 flex-shrink-0 mb-4">
          <span className="text-gray-900 font-bold">John Doe</span>
        </div>
        <div className="flex-1 overflow-auto min-h-0">
          <Messages/>
        </div>
        <div className="flex-shrink-0">
          <MessageInput/>
        </div> 
      </>) : (<NoChatSelected/>) }
    </div>
  )
}

const NoChatSelected = ()=>{
  return(
    <div className="flex flex-col items-center justify-center h-full w-full text-gray-500">
      <div className="text-lg font-medium text-center px-4">
        Please select a Conversation to start messaging
      </div>
      <div className="text-6xl mt-6">
        <LuMessageCircleMore className=""/>
      </div>
    </div>
  )
}


export default MessageContainer
