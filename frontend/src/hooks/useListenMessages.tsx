import React, { useEffect } from 'react'
import useConversation from '../zustand/useConversation'
import { useSocketContext } from '../Context/socketContext'

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const{messages,setMessages} = useConversation()

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
      setMessages([...messages,newMessage]);
    })
    return () => {socket?.off("newMessage")}
  },[socket,messages,setMessages])
  
}

export default useListenMessages
