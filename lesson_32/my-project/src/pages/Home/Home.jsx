import React from 'react';
import { Container, Typography, List, ListItem, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Моє Резюме
        </Typography>
        <Typography variant="h6">Привіт, мене звати Валерія. Завершую другий курс навчання в фронтенд-розробці. Маю досвід роботи з сучасними веб-технологіями.</Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Навички</Typography>
        <List>
          <ListItem>React</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>Webpack, Vite</ListItem>
          <ListItem>HTML & CSS</ListItem>
          <ListItem>Git</ListItem>
        </List>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Досвід</Typography>
        <Typography>Працювала над декількома pet проєктами. Маю бажання розвиватися у напрямку фронтенд-розробки, постійно вдосконалюючи свої навички та працюючи над реальними проєктами.</Typography>
      </Paper>
    </Container>
  );
};

export default Home;
