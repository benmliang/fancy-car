import * as React from 'react';
import {
  CarCardDivWrapper,
  CarCardDiv,
  CarCardImageDiv,
  CarCardImageWrapper,
  CarCardName,
  CarCardDescription,
  CarCardYear
} from './car-card.styles';

import { CAR_AVAILABILITY } from '../car.constants';

const CarCardAvailability = () => {
  return <button>buy</button>;
};

export const CarCard = ({ img, name, make, model, year, id, availability }) => (
  <CarCardDivWrapper>
    <CarCardDiv>
      <CarCardImageWrapper>
        <CarCardImageDiv src={img} />
      </CarCardImageWrapper>
      <CarCardName>{name}</CarCardName>
      <CarCardDescription>{`${make} ${model}`}</CarCardDescription>
      <CarCardYear>{year}</CarCardYear>
      {availability === CAR_AVAILABILITY.IN_DELEARSHIP && (
        <CarCardAvailability />
      )}
    </CarCardDiv>
  </CarCardDivWrapper>
);
