import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"

const Messages = () => {
  const {loading,messages} = useGetMessages()
  return (
    <div className="flex flex-col flex-1 overflow-auto px-4 py-2 space-y-2">
      {loading ? (
        <div className="text-center text-gray-400">Loading messages...</div>
      ) : (
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))
      )}
    </div>
  );
}

export default Messages
