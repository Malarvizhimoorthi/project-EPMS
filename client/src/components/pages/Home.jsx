import React from "react";
import '../stylesheet/Home.css'
import home from '../Images/home.png'
import logo from '../Images/logo.png'

function Home() {
  return (
    <div className="container-fluid ">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg ">
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
                <a class="nav-link dropdown-toggle text-rgb(7, 4, 34)" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
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

      <div className="home-wrapper">

        <div class="card">
          <div class="card-body">
            <h1 class="card-title">Employee Profile Management System</h1>
            <p class="card-text">Employee profile management is the process by which employees ensure workers
              perform their jobs to the best of their abilities so as to achieve business goals.It typically entails building
              and maintaining healthy relationships with employees,as well as monitoring their daily labor and measuring progress
              In this way,employers can identify opportunities for improvement and recognize achievements. </p>

          </div>
          <img class="card-img-bottom" src={home} alt="home.png" />
        </div>
      </div>

    </div>
  )
}
export default Home;