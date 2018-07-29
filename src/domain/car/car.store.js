import { CAR_AVAILABILITY } from './car.constants';

export const initialState = {
  carList: [
    {
      id: 1,
      img: 'https://via.placeholder.com/300x250',
      name: 'My Fancy Car 1',
      make: 'Audi',
      model: 'A3',
      availability: CAR_AVAILABILITY.OUT_OF_STOCK,
      year: 2018
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/300x250',
      name: 'My Fancy Car 2',
      make: 'Audi',
      model: 'A3',
      availability: CAR_AVAILABILITY.OUT_OF_STOCK,
      year: 2018
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/300x250',
      name: 'My Fancy Car 3',
      make: 'Audi',
      model: 'A3',
      availability: CAR_AVAILABILITY.OUT_OF_STOCK,
      year: 2018
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/300x250',
      name: 'My Fancy Car 4',
      make: 'Audi',
      model: 'A3',
      year: 2018,
      availability: CAR_AVAILABILITY.IN_DELEARSHIP
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/300x250',
      name: 'My Fancy Car 5',
      make: 'Audi',
      model: 'A3',
      year: 2018,
      availability: CAR_AVAILABILITY.IN_DELEARSHIP
    },
    {
      id: 6,
      img: 'https://via.placeholder.com/300x250',
      name: 'My Fancy Car 6',
      make: 'Audi',
      model: 'A3',
      availability: CAR_AVAILABILITY.UNAVAILABLE,
      year: 2018
    },
    {
      id: 7,
      img: 'https://via.placeholder.com/300x250',
      name: 'My Fancy Car 7',
      make: 'Audi',
      model: 'A3',
      availability: CAR_AVAILABILITY.UNAVAILABLE,
      year: 2018
    }
  ],
  sortBy: 'name',
  carAvailabilities: {}
};
