import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useGetConversations } from "../../hooks/useGetConversations";
import useConversation, { type ConversationType } from "../../zustand/useConversation";
import toast from "react-hot-toast";

const SearchBar = () => {
  const [search,setSearch] = useState("")
  const {conversations} = useGetConversations();
  const {setSelectedConversation} = useConversation();

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    if(!search) return;
    const conversation = conversations.find((c:ConversationType)=>{
      return c.fullName.toLowerCase().includes(search.toLowerCase())
    })
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("");
    }
    else toast.error("No such user found!")
  }
  return (
    <form className="flex items-center gap-2 flex-1" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search.." className="input input-accent" value={search} onChange={e => setSearch(e.target.value)}/>
      <button type="submit" className="btn btn-circle bg-sky-700 text-white">
        <CiSearch/>
      </button>
    </form>
  )
}

export default SearchBar
