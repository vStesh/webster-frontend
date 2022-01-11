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
export interface PhotoResponseType {
    status?: number;
    message?: Array<string>;
    data?: {url: string};
}
export interface PhotoStateType {
    photoResponse: PhotoResponseType;
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

export interface OrdersListProps {
    orders?: OrdersDataType[];
    dropZero: Function;
    selectOrder: Function
}

export interface OrderProps {
    order: any;
    dropZero: Function;
    setCurrentOrder: Function;
}

export interface OrdersDataType {
    _id: string;
    user: string;
    service?: null;
    status: string;
    deletedAt?: null;
    createdAt: string
    updatedAt: string;
    number: string;
    __v: number;
}

export interface OrdersArrayObject {
    [key: number]: OrdersDataType;
}

export interface OrdersResponseType {
    status: number;
    data: OrdersDataType[];
}

export interface OrdersType {
    status: string;
    ordersResponse: OrdersResponseType | null;
}

export interface OrderDataType {
    _id: string;
    user: string;
    service?: null;
    status: string;
    deletedAt?: null;
    createdAt: string
    updatedAt: string;
    number: string;
    __v: number;
}

export interface OrderResponseType {
    status: number;
    data: OrderDataType;
}

export interface OrderType {
    status: string;
    orderResponse: OrderResponseType | null;
}
