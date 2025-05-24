// components/About.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => (
  <Box id="about" sx={{ height: "100vh", padding: 8, textAlign: "center" }}>
    <Typography variant="h4" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1">
      I'm a passionate Full Stack Developer who thrives on building intuitive,
      accessible, and user-centric applications. I believe that great software
      is not just functional—it’s also elegant, inclusive, and delightful to
      use. With experience across both frontend and backend technologies, I
      specialize in crafting seamless digital experiences that bridge the gap
      between design and functionality. Whether it's developing responsive user
      interfaces or designing scalable backend systems, I enjoy every step of
      the development process.
    </Typography>
  </Box>
);

export default About;
