import { useAuthContext } from "../../Context/AuthContext";
import { type MessageType } from "../../zustand/useConversation";


const Message = ({message}:{message: MessageType}) => {
  const {authUser} = useAuthContext()
  const fromMe = message?.senderId === authUser?.id;
  const chatClass = fromMe? "chat-end":"chat-start";
  const bubblebg = fromMe? "bg-blue-500":""
  const timestamp = message.createdAt;
  const date = new Date(timestamp);
    const time = date.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`chat ${chatClass}`}>
      <div className={`chat-bubble ${bubblebg}`}>{message.body}</div>
      <span className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">{time}</span>
    </div>
  )
}

export default Message
