/**
 * Types related to Signup modules are defined here.
 */

export interface DataTypeSignUp {
    email?: string;
    password?: string;
    confirm?: string;
    name?: string;
    token?: string;
}

export interface DataTypeLogin {
    email: string;
    password: string;
}

export interface UserResponseType {
    email: string;
    id: string;
}

export interface DataType {
    accessToken: string;
    refreshToken: string;
    user: UserResponseType;
}

export interface ResponseDataType {
    status?: number;
    message?: Array<string>;
    data?: DataType;
    error?: Array<string>;
}

export interface SignUpStateType {
    status: string;
    response?: ResponseDataType;
}

export interface PhotoStateType {
    photoURL?: {};
    status?: string;
}
