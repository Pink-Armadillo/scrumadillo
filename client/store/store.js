import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../reducers/cardReducer';

export default configureStore({
  reducer: {
    card: cardReducer,
  },
});
