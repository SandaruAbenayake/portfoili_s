// components/Hero.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import TechSlider from './TechSlider';
import { motion } from 'framer-motion';

const name = "Sandaru";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.30,  // delay between letters
    },
  },
};

const letterVariants = {
  hidden: { y: -50, opacity: 0 }, // start above & invisible
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  },
};

const Hero = () => (
  <Box
    sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <Typography variant="h1" component="h1" sx={{ display: 'inline-flex', justifyContent: 'center' }}>
      Hi, I'm{' '}
      <motion.strong
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-flex', marginLeft: 6 }} // margin to separate from "I'm"
      >
        {name.split('').map((char, index) => (
          <motion.span
            key={char + "-" + index}
            variants={letterVariants}
            style={{ display: 'inline-block', marginRight: 3 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.strong>
    </Typography>

    <Typography variant="h3" color="text.secondary" sx={{ mb: 4 }}>
      Full Stack Developer
    </Typography>
    <TechSlider />
  </Box>
);

export default Hero;
