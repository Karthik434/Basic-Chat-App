import { useEffect, useState } from "react";
import type { ConversationType } from "../zustand/useConversation";
import toast from "react-hot-toast";


export const useGetConversations = ()=>{
  const [loading,setLoading] = useState(true);
  const [conversations,setConversations] = useState<ConversationType[]>([]) 

  useEffect(()=>{
    const getConversations = async()=>{
      setLoading(true)
      try{
        const res = await fetch("/api/messages/conversations")
        const data = await res.json();
        if(!res.ok) throw new Error(data.error)
        setConversations(data)
      }
      catch(error:any){
        toast.error(error.message)
      }
      finally{
        setLoading(false)
      }
    }
    getConversations();
    
  },[])
  return {loading,conversations}
}