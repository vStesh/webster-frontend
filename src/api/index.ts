import axios from "axios";
import { DataTypeSignUp, DataTypeLogin } from "../types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const API_URL = "http://api.printapp.store/";

const instance = axios.create({
  withCredentials: false,
  baseURL: API_URL,
});

instance.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

instance.interceptors.response.use((config: any) => {
    return config;
}, (async (error) => {
    // const originalRequest = error.config;
    if(error.response.status === 401){
        try{
            const response = await instance.get('/api/auth/refresh');
            localStorage.setItem("token", response.data?.data?.accessToken);
        }catch(err){
            console.log('пользователь не авторизован', err);
        };
    }
    throw error;
}));

export const signUpUser = async (data: DataTypeSignUp) => {
  return await instance
    .post("api/auth/register", data)
    .then((res) => {
      localStorage.setItem("token", res.data?.data?.accessToken);
      return res.data;
    })
    .catch((err) => err);
};

export const loginRequest = async (data: DataTypeLogin) => {
  return await instance
    .post("api/auth/login", data)
    .then((res) => {
      localStorage.setItem("token", res.data?.data?.accessToken);
      return res.data;
    })
    .catch((err) => err);
};

export const logOutRequest = async () => {
  return instance.post("api/auth/logout");
};

export const updatePhoto = createAsyncThunk(
  "photo/updatePhoto",
  async (id: string | undefined) => {
    return instance.put(`api/user/${id}`);
  }
);

export const userDataRequest = createAsyncThunk(
  "user/userDataRequest",
  async () => {
    return instance
      .get("api/auth/user")
      .then((res) => res.data.data)
      .catch((err) => err);
  }
);

export const usersRequest = createAsyncThunk(
  "users/usersRequest",
  async () => {
    return instance
        .get("/api/auth/users")
        .then((res) => res.data)
        .catch(err => err);
  }
)
