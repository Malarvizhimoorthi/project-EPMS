import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../stylesheet/Employee.css'
import logo from '../Images/logo.png'


function EmployeeList() {
    const [userForm, setUserForm] = useState([
    ]);


    useEffect(() => {
        axios
            .get("http://localhost:4000/Register/list")
            .then((res) => {
                setUserForm(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div className="container-fluid ">
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
                            <li className="nav-item dropdown ">
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
            </div>

            <h2 className="mt-5 text-center">Employee List</h2>
            <div className="table-responsive align-items-center">
    
                <table >
                    <thead className="table-primary">
                        <tr>
                            <th scope="col">Serial Number</th>
                            <th scope="col">Employee id</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Employee age</th>
                            <th scope="col">Employee JobRole</th>
                            <th scope="col">Employee MobileNo</th>
                            <th scope="col">Employee Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userForm.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th className="number" scope="row">{user.index}</th>
                                        <td data-label="Employee id">{user.empid}</td>
                                        <td data-label="Employee Name">{user.name}</td>
                                        <td data-label="Employee age">{user.age}</td>
                                        <td data-label="Employee JobRole">{user.jobrole}</td>
                                        <td data-label="Employee MobileNo">{user.mobileno}</td>
                                        <td data-label="Employee Email">{user.email}</td>
                                        <td>

                                            <Link
                                                className="buttonn btn-primary "
                                                to={"/update/" + user._id}
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                className="buttonn btn-primary "
                                                to={"/delete/" + user._id}
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>);
                            }
                            )
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
}
export default EmployeeList;