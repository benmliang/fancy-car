import { fetchV1 } from '../../../common/utils/fetch';

export const AvailabilityService = ({ id }) => {
  return fetchV1(`http://api.fancycar.com/v1/availability?id=${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
};
