import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: {
    name: '',
    email: '',
  },
  isLoggedIn: false,
  isRefreshingUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserData: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
    },
    removeUserData: state => {
      state.token = initialState.token;
      state.user = initialState.user;
      state.isLoggedIn = false;
    },
    refreshUser: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { addUserData, removeUserData, refreshUser } = authSlice.actions;