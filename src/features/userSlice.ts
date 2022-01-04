import { createSlice } from '@reduxjs/toolkit';
import { userDataRequest } from '../api';


const initialState = {
  userData: {},
  status: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userDataRequest.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(userDataRequest.fulfilled, (state, { payload }) => {
            state.status = 'fulfilled';
            state.userData = payload;
        });
        builder.addCase(userDataRequest.rejected, (state) => {
            state.status = 'some error ocurred';
        })
    },
  });

  export default userSlice.reducer; 