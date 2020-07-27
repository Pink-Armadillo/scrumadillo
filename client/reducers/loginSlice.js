import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'Login',
  initialState: {
    user: 'SCRUMadillo',
    loggedIn: false,
  },

  reducers: {
    getLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getLogin } = loginSlice.actions;
export const selectLogin = (state) => state;
export default loginSlice.reducer;
