// components/Hero.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Hero = () => (
  <Box sx={{ height: '100vh',width:'100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <Typography variant="h2" component="h1">Hi, I'm <strong>Dev</strong></Typography>
    <Typography variant="h5" color="text.secondary">Creative Developer | UI/UX Enthusiast</Typography>
  </Box>
);

export default Hero;