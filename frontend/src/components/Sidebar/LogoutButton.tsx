import { CiLogout } from "react-icons/ci";
import { useLogout } from "../../hooks/useLogout";


const LogoutButton = () => {
  const {logout} = useLogout()
  return (
    <div className="mt-auto mb-2">
      <CiLogout className="w-6 h-6 cursor-pointer" onClick={logout}/>
    </div>
  )
}

export default LogoutButton
