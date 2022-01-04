import { createSlice } from '@reduxjs/toolkit';
import { SignUpStateType } from '../types';
import { loginRequest, logOutRequest } from '../api';


const initialState: SignUpStateType = {
  response: {},
  status: '',
};

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logOutAction: (state) => {
        state.response = {};
        localStorage.removeItem('token');
      },
    },
    extraReducers: (builder) => {
      builder.addCase(loginRequest.pending, (state) => {
        state.status = 'pending';
      });
      builder.addCase(logOutRequest.pending, state => {
        state.status = 'pending logout';
      });
      builder.addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled-login';
        state.response = payload;
      });
      builder.addCase(logOutRequest.fulfilled, (state) => {
        state.status = 'user success log-out';
      });
      builder.addCase(loginRequest.rejected, (state) => {
        state.status = 'something went wrong with login'
      });
      builder.addCase(logOutRequest.rejected, (state) => {
        state.status = 'something went wrong with logout'
      });
    },
  });

  export const { logOutAction } = loginSlice.actions;

  export default loginSlice.reducer; 