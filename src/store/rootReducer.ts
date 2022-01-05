import { combineReducers } from '@reduxjs/toolkit';
import photoSlice from '../features/photoSlice';
import userSlice from '../features/userSlice';

const rootReducer = combineReducers({
    photo: photoSlice,
    user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;