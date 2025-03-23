import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FilterForm, HotelList, PageContainer } from '../components';
import { IDestination, IFilterFormParams, IHotel } from '../types/types';
import Loader from '../components/Loader/Loader';

const HomePage = () => {
  const [destinations, setDestinations] = useState<IDestination[]>([]);
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [hotelsNotFound, setHotelsNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const filterHotels = (hotels: IHotel[], destination: string) => {
    
    if (hotels.length === 0) {
      return [];
    }
    return hotels.filter((hotel: IHotel) => hotel.city === destination);
  }

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get<IDestination[]>(
          'http://localhost:3001/destination'
        );
        setDestinations(response.data);
        console.log('fetchDestinations', response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDestinations();
  }, []);

  const submitFilterFormHandler = async (values: IFilterFormParams) => {
    setLoading(true);
    try {
      await axios.get('http://localhost:3001/hotels')
        .then((response) => {
          const hotels = filterHotels(response.data, values.destination);
          if (hotels.length === 0) {
            setHotelsNotFound(true);
          } else {
            setHotelsNotFound(false);
          }
          setHotels(hotels);
          setLoading(false);
        }
      );
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };


  return (
    <PageContainer styles={{ marginTop: '40px' }}>
      {destinations && (
        <FilterForm
          onSubmit={submitFilterFormHandler}
          destinations={destinations}
        />
      )}
      <Box sx={{ marginTop: '40px' }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontSize: '2rem', fontWeight: 'bold' }}
        >
          Travel With <span style={{ color: 'orange' }}>Booking</span>
        </Typography>
        <Typography variant="body1" gutterBottom style={{ textAlign: "justify" }}>
        At Travel With Booking, we believe that travel is more than just a destination—it's an experience. Whether you're planning a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour, we're here to make your journey seamless and memorable. With our easy-to-use platform, you can find the best hotels, flights, and rental services that suit your preferences and budget. We partner with leading travel providers to offer you exclusive deals and discounts, ensuring that you get the most value for your trip.
        </Typography>
      </Box>
      {loading && <Loader/>}
      {!loading && <HotelList  hotels={hotels} hotelsNotFound={hotelsNotFound} />}
    </PageContainer>
  );
};

export default HomePage;
