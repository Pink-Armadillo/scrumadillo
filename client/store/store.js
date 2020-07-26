import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import cardReducer from '../reducers/cardSlice';
import deckReducer from '../reducers/deckSlice';

const store = configureStore({
  reducer: combineReducers({
    card: cardReducer,
    deck: deckReducer,
  }),
  middleware: getDefaultMiddleware(),
});

export default store;
