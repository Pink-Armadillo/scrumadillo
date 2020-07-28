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
  console.log('next state', store.getState().card);
  return result;
};

const updateBoardServer = (store) => (next) => (action) => {
  let payload = store.getState();
  console.log('payload.card -> ', payload);
  fetch('/server/boardState', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log('inside updateBoardSever', data);
    });
  let result = next(action);
  return result;
};

//user the name of the reducer to access that piece state in the global environment
//global state is an object containing 3 reducers store = {card{}, deck{}, login{}}

const store = configureStore({
  reducer: combineReducers({
    card: cardReducer,
    deck: deckReducer,
    login: loginReducer,
  }),
  middleware: getDefaultMiddleware().concat(logger).concat(updateBoardServer),
});

export default store;
