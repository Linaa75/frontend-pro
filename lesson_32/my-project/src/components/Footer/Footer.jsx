import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: 2, 
      textAlign: 'center', 
      marginTop: 'auto'
    }}>
      <Typography>Контакти:</Typography>
      <Typography>Email: your-email@example.com</Typography>
      <Typography>Телефон: +1234567890</Typography>
    </Box>
  );
};

export default Footer;
