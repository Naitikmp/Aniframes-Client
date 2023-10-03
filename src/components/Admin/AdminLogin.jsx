import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      let result = await fetch(process.env.REACT_APP_BASE_SERVER_URL + "/basic/login",{
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        });
        if(result.ok){
            const data =await result.json();
            const token = data.token;
            localStorage.setItem("token",token);
            navigate("/dashboard");
        }
        // result =await result.json();
        // console.warn(result);
        else{
          alert("Login Failed!")
          console.error("login failed");
        }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>MERN Stack User Login</h1>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      {token && navigate("/admin")}
    </div>
  );
};

export default AdminLogin;
