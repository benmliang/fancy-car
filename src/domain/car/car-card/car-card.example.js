import React from 'react';
import { CarCard } from './car-card.component';

const CarCardProps = {
  id: 1,
  img: 'https://via.placeholder.com/300x250',
  name: 'My Fancy Car 1',
  make: 'Audi',
  model: 'A3',
  year: 2018
};

export const CarCardExample = () => <CarCard {...CarCardProps} />;
