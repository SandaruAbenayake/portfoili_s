// components/Portfolio.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  {
    title: 'City Hospital Management System',
    description: 'A Java Swing-based desktop app for hospital management with role-based access (Cashier, Manager).',
    tech: 'Java, Swing',
    image: '/images/city-hospital.jpg', // Optional static image
  },
  {
    title: 'MunchMix',
    description: 'A PHP-based food website with menus, cart, and interactive design using HTML, CSS, JS.',
    tech: 'PHP, HTML, CSS, JavaScript',
    image: '/images/munchmix.jpg',
  },
  {
    title: 'Face Mask Detector',
    description: 'Real-time face mask detection using MobileNetV2 and OpenCV.',
    tech: 'Python, OpenCV, MobileNetV2',
    video: '/videos/mask-detector.mp4', // 👈 Screen-recorded video
  },
  {
    title: 'Notes App',
    description: 'MERN stack notes app with CRUD operations and a clean UI.',
    tech: 'MongoDB, Express, React, Node.js',
    image: '/images/notes-app.jpg',
  },
  {
    title: 'Volume Balance',
    description: 'Hand gesture-based volume control using OpenCV and MediaPipe.',
    tech: 'Python, OpenCV, MediaPipe',
    video: '/videos/volume-balance.mp4', // 👈 Screen-recorded video
  },
  {
    title: 'Flutter Restaurant App',
    description: 'A mobile restaurant system app built with Flutter for managing food orders.',
    tech: 'Flutter, Dart, Firebase',
    image: '/images/flutter-restaurant.jpg',
  },
];

const Portfolio = () => (
  <Box id="portfolio" sx={{ padding: 8 }}>
    <Typography variant="h4" gutterBottom textAlign="center">
      Portfolio
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card>
            {project.video ? (
              <CardMedia
                component="video"
                height="180"
                controls
                muted
                autoPlay
                loop
                src={project.video}
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
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
                Tech: {project.tech}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Portfolio;
