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

// {
//       "id": "11003176",
//       "name": "Amolite Hotel",
//       "address": "Avenida Curitiba, 811",
//       "city": "New York",
//       "state": null,
//       "country_code": "BR",
//       "hotel_rating": 0,
//       "phone_number": null,
//       "website": null
//     },

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