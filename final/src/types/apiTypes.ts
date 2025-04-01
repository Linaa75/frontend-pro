export interface IDestination {
  id: number;
  value: number;
  label: string;
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
