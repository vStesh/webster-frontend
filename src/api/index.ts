import axios from 'axios';
import { DataTypeSignUp, DataTypeLogin } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const API_URL = 'http://api.printapp.store/';

const instance = axios.create({
    withCredentials: false,
    baseURL: API_URL,
});

// instance.interceptors.request.use(config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config
// }

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
            .then(res => {
                localStorage.setItem('token', res.data?.data?.accessToken)
                return  res.data
            })
            .catch(err => err);
    }
);

export const logOutRequest = createAsyncThunk(
    'logout/logOutRequest',
    async () => {
        return instance.post('api/auth/login')
    }
);

