import * as React from 'react';
import PropTypes from 'prop-types';

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

export class CarCard extends React.Component {
  componentDidMount() {
    this.props.fetchCarAvailability(this.props.id);
  }

  render() {
    const { img, name, make, model, year, availability } = this.props;
    return (
      <CarCardDivWrapper>
        <CarCardDiv>
          <CarCardImageWrapper>
            <CarCardImageDiv src={img} />
          </CarCardImageWrapper>
          <CarCardName>{name}</CarCardName>
          <CarCardDescription>{`${make} ${model}`}</CarCardDescription>
          <CarCardYear>{year}</CarCardYear>
          {availability === CAR_AVAILABILITY.IN_DEALERSHIP && (
            <CarCardAvailability />
          )}
        </CarCardDiv>
      </CarCardDivWrapper>
    );
  }
}

CarCard.propTypes = {
  fetchCarAvailability: PropTypes.func,
  img: PropTypes.string,
  name: PropTypes.string,
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.number,
  availability: PropTypes.string
};
