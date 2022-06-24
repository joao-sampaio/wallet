// export function fetchCurrencies() {
//   return (dispatch) => {
//     dispatch({ type: 'requestCurrencies' });
//     return fetch('alguma-api-qualquer.com')
//       .then((response) => response.json())
//       .then((movies) => dispatch(receiveMovies(movies)));
//   };
// }

export default function fetchCurrencies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => dispatch({ type: 'getCurrencies', payload: { currencies: json } }));
}
