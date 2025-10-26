import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };
  
  const translate = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;