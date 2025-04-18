import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../context/AuthContext';

const Profile = () => {
  const navigate = useNavigate()
  const {user, logout} = useContext(AuthData)

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading profile...</p>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-md">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          @{user.username}
        </h2>
        <p className="text-sm text-gray-500">{user.email}</p>

        <div className="mt-6">
          <button onClick={()=>{logout(navigate)}} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
            logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile