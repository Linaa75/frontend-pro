import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ height: '100%' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Сайт
        </Typography>
        <Button color="inherit" component={Link} to="/">Головна</Button>
        <Button color="inherit" component={Link} to="/todo">TODO</Button>
        <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
