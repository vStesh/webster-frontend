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

// export interface UserDataType {
//     email?: string;
//     id?: string;
//     name?: string;
//     isAdmin?: boolean;
// }
export interface UserDataType {
    status?: number;
    data?: DBUserType;
}

export interface UserSliceType {
    userData?: UserDataType;
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
    createdAt: string;
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

export interface SizesStateType {
    status: string;
    sizesResponse: SizesResponseType | null;
}

export interface SizesResponseType {
    status?: number;
    data?: Array<DBSizeType> | null;
}

/* DB types start */

/* DB user get:/api/auth/user */
export interface DBUserType {
    email?: string;
    id?: string;
    name?: string;
    isAdmin?: boolean;
}

/* DB order */
export interface DBOrderType {
    _id: string;
    user: string;
    number: string;
    comment?: string;
    service?: string | null;
    settings?: DBOrderSettingsType | null;
    status: string;
    createdAt: string;
    updatesAt: string;
    deletedAt: string | null;
}

export interface DBOrderSettingsType {
    sections?: Array<DBOrderSettingsSectionType> | null;
}

export interface DBOrderSettingsSectionType {
    size: DBSizeType | null;
    // photos: Array<DBPhotoType> | null;
    photos: Array<any> | null;
    paper: DBPaperType | null;
    type: DBTypeType | null;
}

/* DB photo */
export interface DBPhotoType {
    _id: string;
    user: string;
    url: number;
    settings: any;
    createdAt: string;
    updatesAt: string;
    deletedAt: string | null;
    _v: number;
}

/* DB size */
export interface DBSizeType {
    _id: string;
    name: string;
    width: number;
    height: number;
    createdAt: string;
    updatesAt: string;
    deletedAt: string | null;
}

/* DB paper */
export interface DBPaperType {
    _id: string;
    name: string;
    size: string;
    typePaper: string;
    density: number;
    createdAt: string;
    updatesAt: string;
    deletedAt: string | null;
}

/* DB type */
export interface DBTypeType {
    _id: string;
    name: string;
    createdAt: string;
    updatesAt: string;
    deletedAt: string | null;
}

/* DB types finish */
