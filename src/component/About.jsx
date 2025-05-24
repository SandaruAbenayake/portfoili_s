// components/About.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => (
  <Box id="about" sx={{height:'100vh',padding: 8, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>About Me</Typography>
    <Typography variant="body1">I'm a developer who loves building intuitive and accessible applications. My passion lies in crafting user experiences that are functional and beautiful.</Typography>
  </Box>
);

export default About;