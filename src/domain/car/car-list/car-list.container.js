import { connect } from 'react-redux';
import { CarList } from './car-list.component';
import { carListSelectors } from './car-list.selectors';
import { fetchCars } from '../car.actions';

const mapDispatchToProps = dispatch => ({
  fetchCars: () => dispatch(fetchCars())
});

export const CarListContainer = connect(
  carListSelectors,
  mapDispatchToProps
)(CarList);
