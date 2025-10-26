import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ login }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { name, email, password, confirmPassword } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    
    // Validate form
    if (!name || !email || !password || !confirmPassword) {
      setError('Please enter all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real app, this would be an API call
      // const res = await axios.post('/api/signup', formData);
      // login(res.data.token);
      
      // For demo purposes, we'll simulate a successful signup
      setTimeout(() => {
        login('demo-token-123');
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Error creating account');
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign Up for Smart Agriculture</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter your full name"
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm your password"
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
      <div className="auth-switch">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;