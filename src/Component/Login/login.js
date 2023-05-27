import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API request to authenticate user
      axios
        .post('http://localhost:8000/api/login/', { email, password })
        .then((response) => {
          console.log("Hello Welcome");
          const accessToken = response.data.access;
          localStorage.setItem('accessToken', accessToken);

          if (response.data.is_superuser) {
            navigate('/hometest');
          } else {
            navigate('/hometest1');
          }
      })
      .catch((error) => {
        console.error('Authentication failed:', error.response.data);
      });

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
