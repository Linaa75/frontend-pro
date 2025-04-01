import { IHotel } from '../types';

export const filterHotels = (hotels: IHotel[], destination: string) => {
  
  if (hotels.length === 0) {
    return [];
  }
  return hotels.filter((hotel: IHotel) => hotel.city === destination);
}