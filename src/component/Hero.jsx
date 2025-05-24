// components/Hero.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import TechSlider from './TechSlider';

const Hero = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <Typography variant="h2" component="h1">Hi, I'm <strong>Sandaru</strong></Typography>
    <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
       Full Stack Developer
    </Typography>
    <TechSlider />
  </Box>
);

export default Hero;
