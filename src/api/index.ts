import axios from 'axios';
import { DataTypeSignUp, DataTypeLogin } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const API_URL = 'http://api.printapp.store/';

const instance = axios.create({
    withCredentials: false,
    baseURL: API_URL,
});

export const signUpUser = createAsyncThunk(
    'signup/signUpUser',
    async (data: DataTypeSignUp) => {
       return await instance.post('api/auth/register', data)
            .then(res => res.data)
            .catch(err => err);
    }
);

export const loginRequest = createAsyncThunk(
    'login/loginRequest',
    async (data: DataTypeLogin) => {
        return instance.post('api/auth/login', data)
            .then(res => res.data)
            .catch(err => err);
    }
);
