import { useState } from "react";
import { IoSend } from "react-icons/io5";
import {useSendMessage} from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [inputMessage,setinputMessage] = useState("")
  const {sendMessage,loading} = useSendMessage()

  const handelSubmit = async (e: React.FormEvent)=>{
    e.preventDefault()
    if(!inputMessage.trim()) return;
    await sendMessage(inputMessage)
    setinputMessage("")
  }
  return (
    <form className="px-4 my-3" onSubmit={handelSubmit}>
      <div className=" w-full relative">
        <input type="text" placeholder="Type your message here" className="input input-lg w-full block text-white text-sm rounded-lg" value={inputMessage}
        onChange={(e)=>{setinputMessage(e.target.value)}}/>
        <button type="submit" className="absolute end-0 inset-y-0 pe-3 z-100 cursor-pointer hover:bg-blue-500 rounded-lg">
          {loading?(
            <span className="loading loading-spinner"/>
          ):(<IoSend className="ml-4"/>)}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
