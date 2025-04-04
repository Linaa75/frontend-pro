import {
  Box,
  CircularProgress,
  Typography
} from '@mui/material';
import { useParams } from 'react-router';
import { PageContainer } from '../components';
import { useHotelById } from '../hooks/useHotelById';

const HotelPage = () => {
  const { id } = useParams<{ id: string }>();
  const { hotel, loading, error } = useHotelById(id);

  if (loading) return <CircularProgress sx={{ m: 4 }} />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!hotel) return null;

  return (
    <PageContainer styles={{ background: "orange" , padding: "35px", marginTop: "10px" }}>
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>

          <Typography variant="h1" gutterBottom>
            {hotel.name}
          </Typography>
          <Typography >
            <strong>Adress:</strong> {hotel.address}, {hotel.city}
            {hotel.state ? `, ${hotel.state}` : ''}, {hotel.country_code}
          </Typography>
          <Typography>
            <strong>Raiting:</strong> {hotel.hotel_rating} ★
          </Typography>
          {hotel.phone_number && (
            <Typography >
              <strong>Phone:</strong> {hotel.phone_number}
            </Typography>
          )}
          {hotel.website && (
            <Typography >
              <strong>Web:</strong>{' '}
              <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                {hotel.website}
              </a>
            </Typography>
          )}
      </Box>
    </PageContainer>
  );
};

export default HotelPage;
