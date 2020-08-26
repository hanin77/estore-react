import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from '../reducers/cart';
import authenticationReducer from '../reducers/authentication';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState =localStorage.getItem('reduxState')?JSON.parse(localStorage.getItem('reduxState')): {};
export default () => {
  const store = createStore(
    combineReducers({
      cart: cartReducer,
      authentication: authenticationReducer
    }),
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
