import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

// export const INICIAL_STATE = {
//   user: {
//     email: '',
//   },
//   wallet: {
//     currencies: [],
//     expenses: [],
//     editor: false,
//     idToEdit: 0,
//   },
// };

const rootReducer = combineReducers({ user: userReducer, wallet: walletReducer });

export default rootReducer;
