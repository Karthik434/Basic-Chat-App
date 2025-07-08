import type { ConversationType } from "../../zustand/useConversation"
import useConversation from "../../zustand/useConversation"


const Conversation =({conversation}:{conversation:ConversationType})=>{
  const {selectedConversation,setSelectedConversation} = useConversation()

  const isSelected = selectedConversation?.id === conversation.id;
  const isOnline = false;

  return(
    <>
      <div className={`flex gap-3 items-center hover:bg-sky-500 rounded cursor-pointer ${isSelected?"bg-sky-500":""}`
      }
      onClick={()=>setSelectedConversation(conversation)}>
        <div className={`avatar avatar-${isOnline?"online":""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt = 'user avatar'/>
          </div>
        </div>
        <div>
          <p className="text-white fond-">{conversation.fullName}</p>
        </div>
      </div>
      <div className="divider my-0 py-0"></div>
    </>
  )
}

export default Conversation