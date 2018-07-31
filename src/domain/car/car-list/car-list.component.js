import * as React from 'react';
import { CarCard } from '../car-card';
import { CarListDiv } from './car-list.styles';
import { CarSortDropdownContainer } from '../car-sort-dropdown';
import { CarsService } from './car-list.service';

export class CarList extends React.Component {
  componentWillMount() {
    console.log('womens', CarsService);
    CarsService.getAll().then(console.log);
    console.log('womens');
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
