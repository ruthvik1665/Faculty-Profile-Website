import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import FacultyNavbar from './FacultyNavbar/FacultyNavbar';
import BelowNav from './BelowNav/BelowNav';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          console.log("Login Success");
          alert('Login successful!');
          navigate(`/user-details/${email}`);
        } else {
          alert('Incorrect password! Please try again.');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <Navbar />
    <BelowNav />
    <FacultyNavbar />
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '100vh'}}>
      
   
      <div style={{ border: '10px solid rgb(128,0,15)',borderColor:"#800000",background: 'white', padding: '1rem', width: '40%', borderRadius: '0' }}>
        <h2 style={{ marginBottom: '1rem', color: 'black' }}>Faculty Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label htmlFor="exampleInputEmail1" style={{ fontWeight: 'bold' }}>Email Id</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(event) => setEmail(event.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label htmlFor="exampleInputPassword1" style={{ fontWeight: 'bold' }}>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(event) => setPassword(event.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <button style={{ cursor: 'pointer', backgroundColor: '#800000',border:"0"}} type="submit" className="btn btn-primary" >Login</button>

        </form>
        <p style={{ margin: '0.5rem 0' }}>Don't have an account?</p>
        <Link to='/register' className="btn btn-secondary" style={{ cursor: 'pointer', backgroundColor: '#800000',border:"" }}>Register</Link>
      </div>
    </div></>
  );
}

export default Login;
