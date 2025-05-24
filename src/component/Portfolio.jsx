import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const Portfolio = () => (
  <Box id="portfolio" sx={{ padding: 8 }}>
    <Typography variant="h4" gutterBottom textAlign="center">Portfolio</Typography>
    <Grid container spacing={4}>
      {[1, 2, 3].map((project) => (
        <Grid item xs={12} md={4} key={project}>
          <Card>
            <CardContent>
              <Typography variant="h6">Project {project}</Typography>
              <Typography variant="body2" color="text.secondary">Project description goes here.</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Portfolio;