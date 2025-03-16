import React, { useEffect, useState } from 'react';
import { Container, List, ListItem, Paper, Typography } from '@mui/material';

const SWAPI = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setData(data.results));
  }, []);

  return (
    <Container>
      <Paper sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h4" gutterBottom>
          SWAPI - Персонажі з Зоряних Війн
        </Typography>
        <List>
          {data.map((character, index) => (
            <ListItem key={index}>
              <Typography variant="h6">{character.name}</Typography>
              <Typography>Рік народження: {character.birth_year}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default SWAPI;
