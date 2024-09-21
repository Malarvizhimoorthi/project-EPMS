import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../stylesheet/Admin.css"
import logo from '../Images/logo.png'



function AdminLogin() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const navigate=useNavigate()
    
    const handleSubmit=(e) =>
        {
        e.preventDefault()
        
        axios.post('http://localhost:4000/adminlogin',
            {email,password})
        .then(result=>{console.log(result.data)
            if (result.data==="success")
                {alert(`login Successfully`);
                navigate("/home")}
          else
          {alert('Invalid credential')}
            
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className="container-fluid ">
            <div className="container-fluid ">
                <nav className="navbar navbar-expand-lg ">
                    <a href="/" className="nav-linkk ">
                        <img className="logo" src={logo} alt="logo.png" />Tech
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                           
                            <li className="nav-item">
                                <a href="/admin" className="nav-link text-rgb(7, 4, 34) ">
                                    AdminLogin
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link text-dark">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="login-box p-5">
                <h2>Admin Login</h2>
                <form className="admin p-2"  onSubmit={handleSubmit} action="/login">
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e)=>setEmail(e.target.value)} required >
                        </input>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)} required>
                        </input>
                        <label>Password</label>
                    </div>

                    <button
                        type="sumbit"
                        className="btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
export default AdminLogin;