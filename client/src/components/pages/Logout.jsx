import React from "react";
import '../stylesheet/Logout.css'
import logo from '../Images/logo.png'

function Logout() {
    return (
        <div className="container-fluid ">
            <nav className="navbar navbar-expand-lg bg-body-$blue-600">
                <a href="/" className="nav-linkk text-rgb(7, 4, 34) ">
                    <img className="logo" src={logo} alt="logo.png" />Tech
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/home" className="nav-link text-rgb(7, 4, 34)">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/register" className="nav-link text-rgb(7, 4, 34) ">
                                New Registration
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/list" className="nav-link text-rgb(7, 4, 34) ">
                                EmployeeList
                            </a>
                        </li>
                        <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle text-rgb(7, 4, 34)" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category List
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                <li><a class="dropdown-item" href="/update/:id">Update Employee</a></li>
                                <li><a class="dropdown-item" href="/delete/:id">Delete Employee</a></li>
                               
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="logout" className="nav-link text-dark">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className="container-fluid">
                <div className="form-wrapper">
                    <form className="logout">
                        <div className="row mb-4">
                            <div className="col-12">
                                <label className="log text-dark">Are you sure you want to logout?</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <a className="bttn" href="/" type="logout">
                                    Logout
                                </a>
                                <a  className="btton" href="/home">
                                    cancel
                                </a>
                            </div>
                        </div>
                    </form >
                </div >
            </div >
        </div>
    )
}

export default Logout;