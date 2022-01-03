import { createSlice } from '@reduxjs/toolkit';
import { SignUpStateType } from '../types';
import { loginRequest } from '../api';


const initialState: SignUpStateType = {
  response: {},
  status: '',
};

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(loginRequest.pending, (state) => {
        state.status = 'pending';
      });
      builder.addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.response = payload;
      })
      builder.addCase(loginRequest.rejected, (state) => {
        state.status = 'something went wrong'
      })
    },
  });

  export default loginSlice.reducer; 