import React, { useContext } from 'react';
import { AuthData } from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthData);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Home Page 👋</h1>

        {user ? (
          <div className="text-lg text-gray-600">
            Logged in as{' '}
            <span className="text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">
              @{user.username}
            </span>
          </div>
        ) : (
          <p className="text-gray-500">You are not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
