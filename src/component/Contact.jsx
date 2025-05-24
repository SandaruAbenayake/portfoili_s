import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => (
  <Box id="contact" sx={{ padding: 8, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>Contact</Typography>
    <Box component="form" sx={{ mt: 4, maxWidth: 600, mx: 'auto' }}>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Send</Button>
    </Box>
  </Box>
);

export default Contact;