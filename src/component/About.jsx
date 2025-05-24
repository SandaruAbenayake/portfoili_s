import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const About = () => (
  <motion.div
    id="about"
    style={{
      position: "relative",
      height: "100vh",
      padding: "64px",
      textAlign: "center",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.5 }}
  >
    {/* Big letter "A" in background */}
    <Typography
      component="span"
      sx={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: { xs: "15rem", md: "25rem" },
        fontWeight: 900,
        color: "rgba(0, 0, 0, 0.05)",
        userSelect: "none",
        pointerEvents: "none",
        zIndex: 0,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      A
    </Typography>

    {/* Actual content on top */}
    <Box sx={{ maxWidth: 700, zIndex: 1 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", letterSpacing: 3 }}
      >
        About Me
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
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
  </motion.div>
);

export default About;
