import React from 'react';
import { useState } from 'react';
import '../Styling/AgentLogin.css';
import { TextField ,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AgentLogin = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      navigate(`/Home/AgentLogin/Agenttasks?email=${email}`);
      localStorage.setItem('email',response.email)
      alert(response.data.message);



    } catch (error) {
      alert(error.response.data.error);
    }
  };


  return (
    <div className="agent-login-container">
      <div className="head">
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
      </div>
      <form className="agent-login-form" onSubmit={handleLogin}>
        <TextField
          type="text"
          placeholder="username"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant='contained' type="submit" className="login-button">Login</Button>
      </form>
    </div>
  );
}

export default AgentLogin;
