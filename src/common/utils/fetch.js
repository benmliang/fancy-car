export const fetchV1 = ({ url }) =>
  fetch(url)
    .then(response => response.json())
    .then(myJson => {
      return myJson;
    });
