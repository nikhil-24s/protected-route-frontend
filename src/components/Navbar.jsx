import React, { useContext, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthData } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const navigate = useNavigate()
    const { logout, user } = useContext(AuthData)

    return (
        <nav className="bg-white fixed shadow-md px-6 py-4  w-full z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="text-2xl font-bold text-blue-600">Protected-Routes</div>

                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
                    {user ? <button onClick={() => { logout(navigate) }} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
                        logout
                    </button> : <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>}
                    
                    
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 px-4 pb-4">
                    <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/profile" className="block text-gray-700 hover:text-blue-600">Profile</Link>
                    {user ? <button onClick={() => { logout(navigate) }} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
                        logout
                    </button> : <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>}
                    
                </div>
            )}
        </nav>
    );
};

export default Navbar;
