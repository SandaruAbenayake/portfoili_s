import React, { useRef } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ewblzd9',       //service ID
      'template_gs1d1sb',      //template ID
      form.current,
      '30OrMJt0H0yIn4U4b'        //public key
    )
    .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
    }, (error) => {
        alert('Failed to send message. Error: ' + error.text);
    });
  };

  return (
    <Box id="contact" sx={{ padding: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <Box component="form" ref={form} onSubmit={sendEmail} sx={{ mt: 4, maxWidth: 600, mx: 'auto' }}>
        <TextField label="Name" name="user_name" fullWidth margin="normal" required />
        <TextField label="Email" name="user_email" type="email" fullWidth margin="normal" required />
        <TextField label="Message" name="message" fullWidth multiline rows={4} margin="normal" required />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Send</Button>
      </Box>
    </Box>
  );
};

export default Contact;
