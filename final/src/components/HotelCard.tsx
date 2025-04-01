import { Box, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router';
import { IHotel } from '../types';
import { generatePlaceholderUrl } from '../utils/generatePlaceholderUrl';

interface IHotelCardProps {
  hotel: IHotel;
}

const HotelCard = ({hotel}: IHotelCardProps) => {
  return (
    <Box
      key={hotel.id}
      sx={{
      border: '1px solid #ccc',
      borderRadius: '5px',
      color: 'black',
      textDecoration: 'none',
      }}
      component={Link}
      to={`/${hotel.id}`}
    >
      <CardMedia
      component="img"
      height="140"
      image={generatePlaceholderUrl({
        text: hotel.name,
        seed: +hotel.id,
      })}
      alt={hotel.name}
      />
      <Box sx={{ padding: '10px' }}>
      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.5rem' }}>
        {hotel.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Address: {hotel.address}
      </Typography>
      <Typography variant="body1" gutterBottom>
        City: {hotel.city}
      </Typography>
      </Box>
    </Box>
  );
}

export default HotelCard