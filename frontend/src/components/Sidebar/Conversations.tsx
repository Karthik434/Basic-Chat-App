import { useGetConversations } from "../../hooks/useGetConversations"
import Conversation from "./Conversation"

const Conversations = ()=>{
  const {conversations,loading} = useGetConversations();
  return(
    <div className="flex flex-col overflow-auto mb-5 ">
    {conversations.map((conversation)=>(
      <Conversation key={conversation.id} conversation={conversation} />
    ))}
    {loading?
      <span className="loading loading-spinner mx-auto"/>:null
    }
  </div>
  )
}

export default Conversations