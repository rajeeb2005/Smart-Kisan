import React from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ currentLanguage, changeLanguage }) => {
  return (
    <div className="language-selector">
      <select 
        value={currentLanguage} 
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-select"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी (Hindi)</option>
        <option value="ta">தமிழ் (Tamil)</option>
      </select>
    </div>
  );
};

export default LanguageSelector;