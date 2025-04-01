import { useState } from 'react';
import axios from 'axios';
import { filterHotels } from '../utils/filterHotels';
import { IHotel } from '../types';

export interface IFilterFormParams {
  destination: string;
}

export const useHotelFilter = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [hotelsNotFound, setHotelsNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitFilterFormHandler = async (values: IFilterFormParams) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/hotels');
      const filtered = filterHotels(response.data, values.destination);

      setHotels(filtered);
      setHotelsNotFound(filtered.length === 0);
    } catch (error) {
      console.error(error);
      setHotels([]);
      setHotelsNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    hotels,
    hotelsNotFound,
    loading,
    submitFilterFormHandler,
  };
};