import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import AuthContext from "./AuthContext";
import Dashboard from './Dashboard';
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginValue, setLogin] = useState(false)
    const handleChange = (e, key) => {
        if (key === 'username') {
            setUsername(e.target.value)
        }
        if (key === 'password') {
            setPassword(e.target.value)
        }
    }
    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setLogin(true)
        }
        else {
            setLogin(false)
        }
    }
    return (
        <>
            <div className='nav-style'>
                <NavLink className="link-style" to='/Home'>Home</NavLink>
                <NavLink className="link-style" to='/Login'>Login</NavLink>
            </div>
            <h1>This is Admin Login Page</h1>
            <input type="text" placeholder="Name" onChange={(e) => handleChange(e, "username")}></input><br />
            <input type="text" placeholder="Password" onChange={(e) => handleChange(e, "password")}></input><br />
            <button onClick={handleLogin}>login</button>
            <AuthContext.Provider value={{ loginStatus: loginValue }}>
                <Dashboard></Dashboard>
            </AuthContext.Provider>
        </>
    )
}