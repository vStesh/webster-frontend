import { createSlice } from '@reduxjs/toolkit';
import { PhotoStateType } from '../types';
import { updatePhoto } from '../api';


const initialState: PhotoStateType = {
  photoURL: {},
  status: '',
};

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updatePhoto.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(updatePhoto.fulfilled, (state, { payload }) => {
            state.status = 'fulfilled';
            state.photoURL = payload;
        });
        builder.addCase(updatePhoto.rejected, (state) => {
            state.status = 'some error ocurred';
        })
    },
  });

//   export const { logOutAction, savePhoto } = loginSlice.actions;

  export default photoSlice.reducer; 