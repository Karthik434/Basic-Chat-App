import { useState } from "react"
import GenderCheckBox from "../../components/utils/GenderCheckBox"
import {useSignUp} from "../../hooks/useSignUp"

const SignUp = ()=>{
  const [inputs,setInputs] = useState({
    fullName: "",
    username: "",
    password : "",
    confirmPassword : "",
    gender: ""
  })

const {loading,signup} = useSignUp()

const handleCheckBoxChange=(gender:"male"| "female")=>{
  setInputs({...inputs,gender});
}

const handleSubmit = (e:React.FormEvent )=>{
  e.preventDefault();
  signup(inputs)
}

  return(
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400/0 shadow-xl ring ring-blue-500/50 backdrop-blur-lg ">
        <h1 className="text-3xl text-center font-semibold text-gray-700 mb-8">
          SignUp
          <span className="text-blue-500 pl-2">
            Chat4U
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="floating-label">
              <span className="label-text">FullName</span>
              <input type="text" placeholder="Full Name @example: John Doe" className="input input-md" 
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs,fullName: e.target.value})}
              />
            </label>
          </div>
          <div>
            <label className="floating-label mt-2">
              <span className="label-text">UserName</span>
              <input type="text" placeholder="Username" className="input input-md" 
              value={inputs.username}
              onChange={(e) => setInputs({...inputs,username:e.target.value})}
              />
            </label>
          </div>
          <div>
            <label className="floating-label mt-2">
              <span className="label-text">Password</span>
              <input type="password" placeholder="Password" className="input input-md" 
              value={inputs.password}
              onChange={(e) => setInputs({...inputs,password:e.target.value})}
              />
            </label>
          </div>
          <div>
            <label className="floating-label mt-2">
              <span className="label-text">Confirm Password</span>
              <input type="password" placeholder="Confirm Password" className="input input-md" 
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
              />
            </label>
          </div>
           <div>
            <GenderCheckBox 
              selectedGender = {inputs.gender}
              onCheckBoxChange={handleCheckBoxChange}
            />
           </div>
          <a href="" className="link link-info inline-block mt-4">Already have an account? </a>
          <div className="flex justify-center mt-6">
            <button className="btn btn-soft btn-primary w-full" disabled={loading}>{loading?"Loading...":"SignUp"}</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
export default SignUp