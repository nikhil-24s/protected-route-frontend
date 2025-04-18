import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export const AuthData = createContext()

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)

    const success = (msg) => toast.success(msg);
    const error = (msg) => toast.error(msg);

    const register = async (data, navigate) => {
        const res = await axios.post('https://protected-route-backend.vercel.app/api/register', data);
        if(res.data.status){
            success(res.data.message);
            navigate('/login')
        }else{
            error(res.data.message)
        }
    }

    const login = async (data, navigate) => {
        const res = await axios.post('https://protected-route-backend.vercel.app/api/login', data);
        if(res.data.status){
            success(res.data.message);
            localStorage.setItem('token',res.data.token)
            await profile();
            navigate('/profile')
        }else{
            error(res.data.message)
        }
    }

    const profile = async () => {
        const header ={
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        const res = await axios.post('https://protected-route-backend.vercel.app/api/profile', {}, header);
        if(res.data.status){
            setUser(res.data.user);
        }else{
            error(res.data.message)
        }
    }   

    useEffect(() => {
      profile()
    }, [])
    
    const logout = (navigate) => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };
      
    return (
        <AuthData.Provider value={{ register, login , user, logout}}>
            {children}
            <ToastContainer />
        </AuthData.Provider>
    )
}

export default AuthContext