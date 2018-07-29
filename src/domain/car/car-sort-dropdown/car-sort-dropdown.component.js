import * as React from 'react';

export const CarSortDropdown = ({ updateSortBy }) => (
  <select onChange={event => updateSortBy(event.target.value)}>
    <option>Name</option>
    <option>Availability</option>
  </select>
);
