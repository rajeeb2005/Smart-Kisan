import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './DemoModeToggle.css';

const DemoModeToggle = ({ isDemoMode, onToggle }) => {
  const { translate } = useLanguage();

  return (
    <div className="demo-mode-toggle">
      <h3>{translate('demo.title')}</h3>
      <div className="toggle-container">
        <span className="toggle-label">{translate('demo.toggle')}</span>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={isDemoMode} 
            onChange={() => onToggle(!isDemoMode)} 
          />
          <span className="slider round"></span>
        </label>
        <span className={`toggle-status ${isDemoMode ? 'on' : 'off'}`}>
          {isDemoMode ? translate('demo.on') : translate('demo.off')}
        </span>
      </div>
      {isDemoMode && (
        <div className="demo-mode-info">
          {translate('demo.active')}
        </div>
      )}
    </div>
  );
};

export default DemoModeToggle;