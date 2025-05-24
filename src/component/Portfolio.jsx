// components/Portfolio.jsx
import React, { useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "City Hospital Management System",
    description:
      "A Java Swing-based desktop app for hospital management with role-based access (Cashier, Manager).",
    tech: "Java, Swing",
    image: "/images/city-hospital.png",
  },
  {
    title: "MunchMix",
    description:
      "A PHP-based food website with menus, cart, and interactive design using HTML, CSS, JS.",
    tech: "PHP, HTML, CSS, JavaScript",
    image: "/images/munchmix.jpg",
  },
  {
    title: "Face Mask Detector",
    description: "Real-time face mask detection using MobileNetV2 and OpenCV.",
    tech: "Python, OpenCV, MobileNetV2",
    video: "/videos/mask-detector.mp4",
  },
  {
    title: "Notes App",
    description: "MERN stack notes app with CRUD operations and a clean UI.",
    tech: "MongoDB, Express, React, Node.js",
    image: "/images/note-app.png",
  },
  {
    title: "Volume Balance",
    description:
      "Hand gesture-based volume control using OpenCV and MediaPipe.",
    tech: "Python, OpenCV, MediaPipe",
    video: "/videos/volume-balance.mp4",
  },
  {
    title: "Flutter Restaurant App",
    description:
      "A mobile restaurant system app built with Flutter for managing food orders.",
    tech: "Flutter, Dart, Firebase",
    image: "/images/flutter-restaurant.png",
  },
];

const PortfolioCard = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <Card
        sx={{
          width: 300,
          height: 400,
          transition: "0.3s ease-in-out",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        {project.video ? (
          <CardMedia
            component="video"
            src={project.video}
            controls
            muted
            autoPlay
            loop
            sx={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderBottom: "1px solid #eee",
            }}
          />
        ) : (
          <CardMedia
            component="img"
            height="180"
            image={project.image}
            alt={project.title}
          />
        )}
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Tech: {project.tech}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Portfolio = () => (
  <Box id="portfolio" sx={{ padding: 8 }}>
    <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
      Portfolio
    </Typography>
    <Grid container spacing={5} justifyContent="center">
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={10} key={index}>
          <PortfolioCard project={project} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Portfolio;
