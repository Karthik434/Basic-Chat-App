import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/Sidebar/Sidebar"

const Home = ()=>{
  return(
    <div className="flex flex-row h-screen">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}
export default Home