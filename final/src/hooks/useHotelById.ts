import { useEffect, useState } from 'react';
import axios from 'axios';
import { IHotel } from '../types';

export const useHotelById = (id: string | undefined) => {
  const [hotel, setHotel] = useState<IHotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    axios
      .get(`http://localhost:3001/hotels/${id}`)
      .then((res) => {
        setHotel(res.data);
        setError(null);
      })
      .catch(() => {
        setError('Hotel not found');
        setHotel(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { hotel, loading, error };
};