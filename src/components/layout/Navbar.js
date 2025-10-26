import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLeaf, FaSignOutAlt, FaThermometerHalf, FaInfoCircle, FaBook } from 'react-icons/fa';
import LanguageSelector from '../language/LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = ({ logout }) => {
  const location = useLocation();
  const { language, changeLanguage, translate } = useLanguage();
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaLeaf className="navbar-icon" />
          <span>Smart Agriculture</span>
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'navbar-link active' : 'navbar-link'}
            >
              <FaThermometerHalf className="navbar-link-icon" />
              <span>{translate('nav.dashboard')}</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/pesticides" 
              className={location.pathname === '/pesticides' ? 'navbar-link active' : 'navbar-link'}
            >
              <FaBook className="navbar-link-icon" />
              <span>{translate('nav.pesticides')}</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/more-info" 
              className={location.pathname === '/more-info' ? 'navbar-link active' : 'navbar-link'}
            >
              <FaInfoCircle className="navbar-link-icon" />
              <span>{translate('nav.moreInfo')}</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'navbar-link active' : 'navbar-link'}
            >
              <FaInfoCircle className="navbar-link-icon" />
              <span>{translate('nav.about')}</span>
            </Link>
          </li>
          <li className="navbar-item">
            <button onClick={logout} className="navbar-link logout-btn">
              <FaSignOutAlt className="navbar-link-icon" />
              <span>{translate('nav.logout')}</span>
            </button>
          </li>
          <li className="navbar-item">
            <LanguageSelector currentLanguage={language} changeLanguage={changeLanguage} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;