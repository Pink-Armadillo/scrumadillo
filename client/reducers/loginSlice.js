import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'Login',
  initialState: {
    username: 'SCRUMadillo',
    userId: '',
  },

  reducers: {
    getLogin: (state, action) => {
      state.username = action.payload.username;
      state.userId = action.payload.userId;
    },
  },
});

export const { getLogin } = loginSlice.actions;
export const selectLogin = (state) => state;
export default loginSlice.reducer;
