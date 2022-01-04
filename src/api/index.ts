import axios from 'axios';
import { DataTypeSignUp, DataTypeLogin } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const API_URL = 'http://api.printapp.store/';

const instance = axios.create({
    withCredentials: false,
    baseURL: API_URL,
});

instance.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export const signUpUser = createAsyncThunk(
    'signup/signUpUser',
    async (data: DataTypeSignUp) => {
       return await instance.post('api/auth/register', data)
            .then(res => {
                localStorage.setItem('token', res.data?.data?.accessToken);
                return res.data
            })
            .catch(err => err);
    }
);

export const loginRequest = createAsyncThunk(
    'login/loginRequest',
    async (data: DataTypeLogin) => {
        return instance.post('api/auth/login', data)
            .then(res => {
                localStorage.setItem('token', res.data?.data?.accessToken);
                return  res.data
            })
            .catch(err => err);
    }
);

export const logOutRequest = createAsyncThunk(
    'logout/logOutRequest',
    async () => {
        return instance.post('api/auth/logout')
    }
);

export const updatePhoto = createAsyncThunk(
    'photo/updatePhoto',
    async (id: string | undefined) => {
        return instance.put(`api/user/${id}`)
    }
)

export const userDataRequest = createAsyncThunk(
    'user/userDataRequest',
    async() => {
        return instance.get('api/auth/user')
            .then(res => res)
            .catch(err => {
                console.log(err)
                return err
            });
    }
)

