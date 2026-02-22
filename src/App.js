import React, { useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme.js';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext.jsx';
import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import About from './component/About.jsx';
import Portfolio from './component/Portfolio.jsx';
import Contact from './component/Contact.jsx';
import Footer from './component/Footer.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AppContent() {
  const { isDark } = useTheme();
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
