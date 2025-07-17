import useChatScroll from "../../hooks/useChatScroll"
import useGetMessages from "../../hooks/useGetMessages"
import useListenMessages from "../../hooks/useListenMessages"
import Message from "./Message"

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const ref = useChatScroll(messages);

  console.log("Messages component render", { loading, messages, ref });

  if (messages && !Array.isArray(messages)) {
    console.error("messages is not an array", messages);
  }

  return (
    <div 
      className="flex flex-col overflow-auto px-4 py-2 space-y-2 h-full" 
      ref={ref}
    >
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <span className="loading loading-spinner"></span>
          Loading messages...
        </div>
      ) : !messages || messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500">
          <div className="text-center">
            <p className="text-lg mb-2">No conversations yet</p>
            <p className="text-sm">Start a conversation by sending a message!</p>
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))
      )}
    </div>
  );
};


export default Messages