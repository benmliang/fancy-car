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

const CarCardAvailability = () => {
  return <button>buy</button>;
};

export const CarCard = ({ img, name, make, model, year, id, available }) => (
  <CarCardDivWrapper>
    <CarCardDiv>
      <CarCardImageWrapper>
        <CarCardImageDiv src={img} />
      </CarCardImageWrapper>
      <CarCardName>{name}</CarCardName>
      <CarCardDescription>{`${make} ${model}`}</CarCardDescription>
      <CarCardYear>{year}</CarCardYear>
      {available && <CarCardAvailability />}
    </CarCardDiv>
  </CarCardDivWrapper>
);
