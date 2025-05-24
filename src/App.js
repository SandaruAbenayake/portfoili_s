import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme.js';
import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import About from './component/About.jsx';
import Portfolio from './component/Portfolio.jsx';
import Contact from './component/Contact.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
