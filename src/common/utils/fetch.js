export const fetchV1 = ({ url }) =>
  fetch(url)
    .then(response => console.log('response: ', response) || response.json())
    .then(myJson => {
      console.log(myJson);
      return myJson;
    });
