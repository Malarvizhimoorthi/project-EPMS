import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Header from './components/pages/Header';
import AdminLogin from './components/pages/AdminLogin';
import Home from './components/pages/Home';
import Registration from './components/pages/Registration';
import EmployeeList from './components/pages/EmployeeList';
import UpdateEmployee from './components/pages/UpdateEmployee';
import DeleteEmployee from './components/pages/DeleteEmployee';
import Logout from './components/pages/Logout';
import Footer from './components/pages/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/list" element={<EmployeeList />}></Route>
        <Route path="/update/:id" element={<UpdateEmployee />}></Route>
        <Route path="/delete/:id" element={<DeleteEmployee />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
