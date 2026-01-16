import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    darkMode,
    toggleTheme,
    colors: darkMode
      ? {
          primary: '#00D9FF',
          secondary: '#FF6B35',
          accent: '#7C3AED',
          background: '#0A0A0F',
          backgroundSecondary: '#12121A',
          text: '#FFFFFF',
          textSecondary: '#A0A0B0',
          gradient: 'linear-gradient(135deg, #00D9FF 0%, #7C3AED 50%, #FF6B35 100%)',
          cardBg: 'rgba(18, 18, 26, 0.8)',
        }
      : {
          primary: '#0066CC',
          secondary: '#FF5722',
          accent: '#6200EA',
          background: '#F5F5F5',
          backgroundSecondary: '#FFFFFF',
          text: '#1A1A2E',
          textSecondary: '#666666',
          gradient: 'linear-gradient(135deg, #0066CC 0%, #6200EA 50%, #FF5722 100%)',
          cardBg: 'rgba(255, 255, 255, 0.9)',
        },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
