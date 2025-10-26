import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaInfoCircle } from 'react-icons/fa';
import './DemoMode.css';

const DemoMode = ({ isDemoActive, toggleDemo }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="demo-mode-container">
      <div className="demo-toggle">
        <span className="demo-label">Demo Mode:</span>
        <button 
          className="demo-toggle-btn" 
          onClick={toggleDemo}
          aria-label={isDemoActive ? "Disable Demo Mode" : "Enable Demo Mode"}
        >
          {isDemoActive ? <FaToggleOn className="toggle-icon active" /> : <FaToggleOff className="toggle-icon" />}
        </button>
        <FaInfoCircle 
          className="info-icon" 
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Demo Mode Information"
        />
      </div>
      
      {showInfo && (
        <div className="demo-info">
          <h4>About Demo Mode</h4>
          <p>
            Demo Mode provides simulated data for demonstration purposes. When enabled:
          </p>
          <ul>
            <li>Sensor readings are simulated with random variations</li>
            <li>Weather data is pre-configured for demonstration</li>
            <li>Irrigation system responds to simulated commands</li>
            <li>All features are functional but use mock data</li>
          </ul>
          <p className="demo-note">
            <strong>Note:</strong> In a production environment, this would connect to real IoT sensors and APIs.
          </p>
        </div>
      )}
      
      {/* Demo badge removed — keep toggle and info panel only */}
    </div>
  );
};

export default DemoMode;