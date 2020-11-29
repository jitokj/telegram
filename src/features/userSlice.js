import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
         login: (state,action) => {
      state.value = action.payload;
    },
    logout: state => {
      state.value = null;
    },
  },
});

export const { login,logout } = userSlice.actions;


export const selectUser = state => state.user.users;

export default userSlice.reducer;
