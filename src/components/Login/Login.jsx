
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Footer from '../Footer/Footer';  // Import Footer component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/page1');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      
      <Footer />  {/* Include Footer */}
    </div>
  );
};

export default Login;
