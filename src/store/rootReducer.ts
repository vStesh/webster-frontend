import { combineReducers } from '@reduxjs/toolkit';
import signUpSlice from '../features/signUpSlice';
import loginSlice from '../features/loginSlice';

const rootReducer = combineReducers({
    signUp: signUpSlice,
    login: loginSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;