import axios from 'axios';
import { dataTypeSignUp, dataTypeLogin } from '../types';

export const API_URL = 'http://api.printapp.store';

const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

export const signUpRequest = {
    signUpUser(data: dataTypeSignUp){
        return instance.post('/api/auth/register', data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
}

export const loginRequest = {
    loginUser(data: dataTypeLogin){
        return instance.post('api/auth/login', data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
}
