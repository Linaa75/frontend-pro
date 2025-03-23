import { Box, Typography } from '@mui/material';
import { HotelCard } from '../components';
import { IHotel } from '../types/types';

interface IHotelListProps {
  hotels: IHotel[]
  hotelsNotFound: boolean
}

const HotelList = ({hotels, hotelsNotFound}:IHotelListProps) => {

  return (
    <div>
      {hotelsNotFound && (
        <Typography variant="h2" gutterBottom>
          Hotels not found
        </Typography>
      )}
      {hotels.length > 0 && (
        <Box sx={{ margin: '40px 0' }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            Hotels
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px'
            }}
          >
            {hotels.map((hotel: IHotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </Box>
        </Box>
      )}
    </div>
  )
}

export default HotelList;