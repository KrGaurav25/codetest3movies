import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import AuthContext from "./AuthContext";
import Dashboard from './Dashboard';
export default function Customer() {
    const [Cusername, setCusername] = useState('')
    const [Cpassword, setCpassword] = useState('')
    const [CloginValue, setClogin] = useState(false)
    const handleChange = (e, key) => {
        if (key === 'Cusername') {
            setCusername(e.target.value)
        }
        if (key === 'Cpassword') {
            setCpassword(e.target.value)
        }
    }
    const handleLogin = () => {
        if (Cusername === 'customer' && Cpassword === 'customer') {
            setClogin(true)
        }
        else {
            setClogin(false)
        }
    }
    return (
        <>
            <div className='nav-style'>
                <NavLink className="link-style" to='/Home'>Home</NavLink>
                <NavLink className="link-style" to='/Login'>Login</NavLink>
            </div>
            <h1>This is Customer Login Page</h1>
            <input type="text" placeholder="Name" onChange={(e) => handleChange(e, "Cusername")}></input><br />
            <input type="text" placeholder="Password" onChange={(e) => handleChange(e, "Cpassword")}></input><br />
            <button onClick={handleLogin}>login</button>
            <AuthContext.Provider value={{ loginStatus: CloginValue }}>
                <Dashboard></Dashboard>
            </AuthContext.Provider>
        </>
    )
}