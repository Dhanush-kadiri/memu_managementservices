import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/AdminLogin.css'; 
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from '../Styling/AdminLandingPage.module.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'Dhanush Kadiri' && password === 'Owner Ni Ra') {
      navigate('/Home/Adminlogin/Adminlanding');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="login-container">
  
      <h2>Admin Login</h2>

      <Link to='/Home' className={styles['back-button']}>
        <FaArrowLeft />
      </Link>
      <input
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        />
      <input
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;
