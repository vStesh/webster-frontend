import { combineReducers } from '@reduxjs/toolkit';
import signUpSlice from '../features/signUpSlice';
import loginSlice from '../features/loginSlice';
import photoSlice from '../features/photoSlice';
import userSlice from '../features/userSlice';

const rootReducer = combineReducers({
    signUp: signUpSlice,
    login: loginSlice,
    photo: photoSlice,
    user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;