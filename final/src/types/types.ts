export interface IDestination {
  id: number;
  value: number;
  label: string;
}

export interface IFilterFormParams {
  destination: string;
  checkIn: Date;
  checkOut: Date;
  guests: {
    adults: number;
    children: number;
  };
}

export interface IHotel {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string | null;
  country_code: string;
  hotel_rating: number;
  phone_number: string | null;
  website: string | null;
}
