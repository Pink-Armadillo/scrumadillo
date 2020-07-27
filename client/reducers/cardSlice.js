import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'Board',
  initialState: {
    current: 0, //index of current card
    cards: [],
  },
  reducers: {
    increment: (state) => {
      state.current += 1;
    },
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    complete: (state) => {
      state.completed = true;
    },
    getAll: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const {
  increment,
  addCard,
  getAll,
  complete,
  getCards,
} = cardSlice.actions;

export const selectCard = (state) => state;
export const selectTitle = (state) => state.card.cards[0].title;

export default cardSlice.reducer;
