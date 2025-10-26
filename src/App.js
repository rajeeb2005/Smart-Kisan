import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Pesticides from './components/pesticides/Pesticides';
import MoreInfo from './components/moreinfo/MoreInfo';
import About from './components/about/About';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Check if user is logged in on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
      }
      setLoading(false);
    };
    
    checkAuthStatus();
  }, []);
  
  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };
  
  
  if (loading) {
    return <div className="loading-container"><div className="loading"></div></div>;
  }
  
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          {isAuthenticated && <Navbar logout={logout} />}
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/login" 
                element={!isAuthenticated ? <Login login={login} /> : <Navigate to="/" />} 
              />
              <Route 
                path="/signup" 
                element={!isAuthenticated ? <Signup login={login} /> : <Navigate to="/" />} 
              />
              <Route 
                path="/pesticides" 
                element={isAuthenticated ? <Pesticides /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/more-info" 
                element={isAuthenticated ? <MoreInfo /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/about" 
                element={isAuthenticated ? <About /> : <Navigate to="/login" />} 
              />
            </Routes>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;