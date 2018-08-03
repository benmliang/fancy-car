import { connect } from 'react-redux';
import { CarCard } from './car-card.component';
import { fetchCarAvailability } from '../car.actions';

const mapDispatchToProps = dispatch => ({
  fetchCarAvailability: id => dispatch(fetchCarAvailability(id))

  // TODO: fetchCarAvailability() on the list of cars will cause N+1 problem
});

export const CarCardContainer = connect(
  () => ({}),
  mapDispatchToProps
)(CarCard);
