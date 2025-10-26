import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    
    // Validate form
    if (!email || !password) {
      setError('Please enter all fields');
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real app, this would be an API call
      // const res = await axios.post('/api/login', formData);
      // login(res.data.token);
      
      // For demo purposes, we'll simulate a successful login
      setTimeout(() => {
        login('demo-token-123');
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Invalid credentials');
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login to Smart Agriculture</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email or Mobile</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email or mobile"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="auth-switch">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;