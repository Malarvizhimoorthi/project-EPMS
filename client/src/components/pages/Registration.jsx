import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../stylesheet/Register.css'
import logo from '../Images/logo.png'


function Registration() {
    const [userForm, setUserForm] = useState({
        empid: "",
        name: "",
        age: "",
        jobrole: "",
        mobileno: "",
        email: "",

    });
    let navigate = useNavigate();

    const inputsHandler = (e) => {
        setUserForm((prevNext) => ({
            ...prevNext,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/Register/apply/", userForm)
            .then((res) => {
                console.log(res.data);
                setUserForm({
                    empid: "",
                    name: "",
                    age: "",
                    jobrole: "",
                    mobileno: "",
                    email: "",
                });
            });
            navigate("/list");
    };

   
    return (
        <div className="container-fluid ">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg ">
                    <a href="/" className="nav-linkk text-rgb(7, 4, 34) ">
                        <img className="logo" src={logo} alt="logo.png" />Tech
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="nnavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                <a class="nav-link dropdown-toggle text-rgb(7, 4, 34)" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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

                <div className="form-wrapper bg-body-white">
                    <form onSubmit={onSubmit} className="register">
                        <h2>New Registration</h2>
                        <div className="row mb-4 ">
                            <div className="col-6">
                                <label className="form-label text-dark ">Employee_id</label>
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="empid"
                                    id="empid"
                                    value={userForm.empid}
                                    onChange={inputsHandler} required
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-6">
                                <label className="form-label text-dark">Employee_Name</label>
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    value={userForm.name}
                                    onChange={inputsHandler} required
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-6">
                                <label className="form-label text-dark">Employee_age</label>
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="age"
                                    id="age"
                                    value={userForm.age}
                                    onChange={inputsHandler} required
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-6">
                                <label className="form-label text-dark">Employee_JobRole</label>
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="jobrole"
                                    id="jobrole"
                                    value={userForm.jobrole}
                                    onChange={inputsHandler} required
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-6">
                                <label className="form-label text-dark">Employee_MobileNo</label>
                            </div>
                            <div className="col-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="mobileno"
                                    id="mobileno"
                                    value={userForm.mobileno}
                                    onChange={inputsHandler} required
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-6">
                                <label className="form-label text-dark">Employee_Email</label>
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    value={userForm.email}
                                    onChange={inputsHandler} required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button type="submit" className="butn ">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form >
                </div >
            </div >
        </div>)
}
export default Registration;