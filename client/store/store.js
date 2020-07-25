import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import cardReducer from '../reducers/cardSlice';

const store = configureStore({
  reducer: combineReducers({
    card: cardReducer,
  }),
  middleware: getDefaultMiddleware(),
});

export default store;
