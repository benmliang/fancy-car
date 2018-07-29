import { connect } from 'react-redux';
import { CarList } from './car-list.component';
import { carListSelectors } from './car-list.selectors';

export const CarListContainer = connect(carListSelectors)(CarList);
