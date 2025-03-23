import {
  Box,
  CircularProgress,
  Typography
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PageContainer } from '../components';
import { IHotel } from '../types/types';

const HotelPage = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<IHotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get<IHotel>(`http://localhost:3001/hotels/${id}`)
      .then((res) => {
        setHotel(res.data);
        setError(null);
      })
      .catch(() => {
        setError('Hotel not found');
        setHotel(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

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
