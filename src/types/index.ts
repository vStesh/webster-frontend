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
export interface PhotoStateType {
    photoURL?: {};
    status?: string;
}

export interface UserDataType {
    email?: string;
    id?: string;
    name?: string;
}

export interface UserSliceType {
    userData?: UserDataType
    isUser?: boolean;
    status?: string;
}
