import { connect } from 'react-redux';
import { CarCard } from './car-card.component';
import { fetchCarAvailability } from '../car.actions';

const mapDispatchToProps = dispatch => ({
  fetchCarAvailability: () => dispatch(fetchCarAvailability())
});

export const CarCardContainer = connect(
  () => ({}),
  mapDispatchToProps
)(CarCard);
