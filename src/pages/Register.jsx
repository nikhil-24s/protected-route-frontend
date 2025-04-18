import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthData } from '../context/AuthContext'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {register} = useContext(AuthData)
  const navigate = useNavigate()

  const submitHandler = (e)=>{
    e.preventDefault();
    register({username, email, password}, navigate);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Register</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <span className='text-center block text-gray-500'>Already have an account?<Link to='/login' className='text-blue-700'>Login</Link></span>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register