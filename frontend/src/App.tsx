// @ts-ignore
import { useAuthContext } from './Context/AuthContext'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import { Toaster } from "react-hot-toast"

function App() {
  const { authUser, isLoading } = useAuthContext(); 
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>}/>
        <Route path='/login' element={!authUser ? <Login/> : <Navigate to={"/"}/>}/>
        <Route path='/signup' element={!authUser ? <SignUp/> : <Navigate to={"/"}/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App