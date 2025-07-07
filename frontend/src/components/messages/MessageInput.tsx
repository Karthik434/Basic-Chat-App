import { IoSend } from "react-icons/io5";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className=" w-full relative">
        <input type="text" placeholder="Type your message here" className="input input-lg w-full block text-white text-sm rounded-lg" />
        <button type="submit" className="absolute end-0 inset-y-0 pe-3">
          <IoSend />
        </button>
      </div>
    </form>
  )
}

export default MessageInput
