import { useState } from "react"
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";




const Login = ()=>{
  const [inputs,setInputs] = useState({
    username : "",
    password : ""
  })
  const {loading,login} = useLogin();

  const handleLoginSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    login(inputs.username,inputs.password);
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col   min-w-96">
        <div className="w-full p-6 rounded-lg bg-gray-400/0 shadow-xl ring ring-blue-500/50 backdrop-blur-lg ">
          <h1 className="text-3xl text-center font-semibold text-gray-700 mb-8">
            Login
            <span className="text-blue-500 pl-2">
              Chat4U
            </span>
          </h1>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label className="floating-label">
                <span className="label-text">UserName</span>
                <input type="text" placeholder="Username" className="input input-md" 
                value={inputs.username}
                onChange={(e)=>{setInputs({...inputs,username:e.target.value})}}/>
              </label>
            </div>
            <div>
              <label className="floating-label mt-4">
                <span className="label-text">Password</span>
                <input type="password" placeholder="Password" className="input input-md" 
                value={inputs.password}
                onChange={e =>{
                  setInputs({...inputs,password:e.target.value})
                }}/>
              </label>
            </div>
            <Link to="/signup" className="link link-info inline-block mt-4">{"Don't"} have an account? </Link>
            <div className="flex justify-center pt-6">
              <button className="btn btn-soft btn-primary w-full" disabled={loading}>{loading?"Loading...":"Login"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login