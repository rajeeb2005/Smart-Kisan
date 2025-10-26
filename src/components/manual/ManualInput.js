import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './ManualInput.css';

const ManualInput = ({ onSubmit, isDisabled }) => {
  const { translate } = useLanguage();
  const [values, setValues] = useState({
    soilMoisture: '',
    temperature: '',
    humidity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericValues = {
      soilMoisture: parseFloat(values.soilMoisture),
      temperature: parseFloat(values.temperature),
      humidity: parseFloat(values.humidity)
    };
    
    if (onSubmit) {
      onSubmit(numericValues);
    }
  };

  const handleReset = () => {
    setValues({
      soilMoisture: '',
      temperature: '',
      humidity: ''
    });
  };

  return (
    <div className={`manual-input ${isDisabled ? 'disabled' : ''}`}>
      <h3>{translate('manual.title')}</h3>
      {isDisabled ? (
        <div className="demo-mode-notice">
          {translate('demo.active')}
        </div>
      ) : (
        <>
          <p className="manual-instructions">{translate('manual.instructions')}</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="soilMoisture">{translate('manual.soilMoisture')}</label>
              <input
                type="number"
                id="soilMoisture"
                name="soilMoisture"
                min="0"
                max="100"
                value={values.soilMoisture}
                onChange={handleChange}
                required
                disabled={isDisabled}
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="temperature">{translate('manual.temperature')}</label>
              <input
                type="number"
                id="temperature"
                name="temperature"
                min="-20"
                max="60"
                value={values.temperature}
                onChange={handleChange}
                required
                disabled={isDisabled}
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="humidity">{translate('manual.humidity')}</label>
              <input
                type="number"
                id="humidity"
                name="humidity"
                min="0"
                max="100"
                value={values.humidity}
                onChange={handleChange}
                required
                disabled={isDisabled}
              />
            </div>
            
            <div className="button-group">
              <button 
                type="submit" 
                className="submit-button"
                disabled={isDisabled}
              >
                {translate('manual.submit')}
              </button>
              <button 
                type="button" 
                className="reset-button"
                onClick={handleReset}
                disabled={isDisabled}
              >
                {translate('manual.reset')}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ManualInput;