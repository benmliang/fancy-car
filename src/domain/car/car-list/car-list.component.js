import * as React from 'react';
import { CarCard } from '../car-card';
import { CarListDiv } from './car-list.styles';
import { CarSortDropdownContainer } from '../car-sort-dropdown';

export const CarList = ({ carList }) => {
  console.log('carList: ', carList);
  return (
    <div>
      <CarSortDropdownContainer />

      <CarListDiv>
        {carList.map(car => <CarCard key={car.id} {...car} />)}
      </CarListDiv>
    </div>
  );
};
