import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
        alert('User registered successfully');
      } else {
        const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
        localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard';
      }
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Login' : 'New here? Sign Up'}
      </button>
    </div>
  );
};

export default LoginPage;
