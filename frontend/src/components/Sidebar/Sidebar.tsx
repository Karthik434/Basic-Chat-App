import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchBar from "./SearchBar"

const Sidebar = () => {
  return(
    <div className="w-64 flex flex-col border-r border-slate-500 pr-4 h-full flex-shrink-0 pt-5 pl-5">
      <div className="flex-shrink-0">
        <SearchBar/>
      </div>
      <div className="divider mb-0.5 flex-shrink-0"></div>
      <div className="flex-1 overflow-auto px-4 min-h-0">
        <Conversations/>
      </div>
      <div className="flex-shrink-0 mb-2">
        <div className="mt-4"><LogoutButton/></div>
      </div>
    </div>
  )
}

export default Sidebar