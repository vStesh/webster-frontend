import { createSlice } from '@reduxjs/toolkit';
import { SignUpStateType } from '../types';
import { signUpUser } from '../api';


const initialState: SignUpStateType = {
  response: {},
  status: '',
};

export const signUpSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(signUpUser.pending, (state) => {
        state.status = 'pending';
      });
      builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.response = payload;
      })
      builder.addCase(signUpUser.rejected, (state) => {
        state.status = 'something went wrong'
      })
    },
  });

  // export const {setUser, removeUser} = userSlice.actions;
  export default signUpSlice.reducer; 
