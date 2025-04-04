import { Box, Typography } from '@mui/material';
import { HotelCard } from '../components';
import { IHotel } from '../types';

interface IHotelListProps {
  hotels: IHotel[];
  hotelsNotFound: boolean;
}

const HotelList = ({ hotels, hotelsNotFound }: IHotelListProps) => {
  return (
    <Box>
      {hotelsNotFound && (
        <Typography variant="h4" color="error" gutterBottom>
          Hotels not found
        </Typography>
      )}

      {hotels.length > 0 && (
        <Box sx={{ margin: '40px 0' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Hotels
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {hotels.map((hotel: IHotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HotelList;
