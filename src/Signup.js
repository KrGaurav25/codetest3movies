import { Button } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Login from './login';
import React from 'react';
export default function SignUp() {
    const [name, setname] = React.useState("")
    const [pass, setpass] = React.useState("")
    const [phno, setphno] = React.useState("")
    const [TnC, setTnC] = React.useState(false)
    const signup = () => {
        <BrowserRouter>
            <Routes>
                <Route path='/Login' element={<Login></Login>} />
            </Routes>
        </BrowserRouter>
    }
    return (
        <>
            <div className='nav-style'>
                <NavLink className="link-style" to='/Home'>Home</NavLink>
                <NavLink className="link-style" to='/Login'>Login</NavLink>
            </div>
            <h1>This is Sign Up Page</h1>
            <form onSubmit={signup}>
                <input type="text" placeholder="Name" onChange={(e) => setname(e.target.value)}></input><br />
                <input type="text" placeholder="Password" onChange={(e) => setpass(e.target.value)}></input><br />
                <input type="text" placeholder="phno" onChange={(e) => setphno(e.target.value)}></input><br />
                <input type="checkbox" onChange={(e) => setTnC(e.target.checked)} /><span>Terms and Conditions</span><br />
                <Button type="submit">Sign Up</Button>
            </form>
        </>
    )
}