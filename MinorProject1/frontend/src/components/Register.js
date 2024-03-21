import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import FacultyNavbar from './FacultyNavbar/FacultyNavbar';
import BelowNav from './BelowNav/BelowNav';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8001/register', { name, email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate('/login');
        } else {
          alert("Registered successfully! Please Login to proceed.")
          navigate('/IT/facultyupdate');
        }

      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <Navbar />
    <BelowNav />
    <FacultyNavbar />
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '100vh' }}>
      <div style={{ background: '#fff', padding: '1rem', width: '40%', borderRadius: '0.25rem',border: '20px solid rgb(128,0,15)' }}>
        <h2 style={{ marginBottom: '1rem', color: '#007bff' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label htmlFor="exampleInputName" style={{ fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              id="exampleInputName"
              onChange={(event) => setName(event.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
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
          <button type="submit" className="btn btn-primary" style={{ cursor: 'pointer' }}>Register</button>
        </form>

        <p style={{ margin: '0.5rem 0' }}>Already have an account?</p>
        <Link to='/login' className="btn btn-secondary" style={{ cursor: 'pointer' }}>Login</Link>
      </div>
    </div>
    </>
  );
}

export default Register;
