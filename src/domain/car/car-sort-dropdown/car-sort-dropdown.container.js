import { connect } from 'react-redux';
import { CarSortDropdown } from './car-sort-dropdown.component';
import { updateCarsSortBy } from './car-sort-dropdown.actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateSortBy: sortBy => dispatch(updateCarsSortBy(sortBy))
});

export const CarSortDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarSortDropdown);
