import * as React from 'react';
import { CarCard } from '../car-card';
import { CarListDiv } from './car-list.styles';
import { CarSortDropdownContainer } from '../car-sort-dropdown';

export class CarList extends React.Component {
  componentDidMount() {
    console.log('this.props: ', this.props);
    this.props.fetchCars();
  }
  render() {
    const { carList } = this.props;

    return (
      <div>
        <CarSortDropdownContainer />

        <CarListDiv>
          {carList.map(car => <CarCard key={car.id} {...car} />)}
        </CarListDiv>
      </div>
    );
  }
}
