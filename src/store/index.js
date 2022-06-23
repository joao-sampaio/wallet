// import { createStore } from 'redux';
// import rootReducer from '../reducers';

// const store = createStore(rootReducer);

// export default store;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const store = createStore(
  reducer, applyMiddleware(thunk)
);

export default store;
