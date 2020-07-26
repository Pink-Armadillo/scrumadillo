import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import cardReducer from '../reducers/cardSlice';
import deckReducer from '../reducers/deckSlice';
import loginReducer from '../reducers/loginSlice';

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const store = configureStore({
  reducer: combineReducers({
    card: cardReducer,
    deck: deckReducer,
    login: loginReducer,
  }),
  middleware: getDefaultMiddleware().concat(logger),
});

export default store;
