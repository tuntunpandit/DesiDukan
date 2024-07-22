export interface LoginData {
  message: string;
  result: boolean;
  data: Data;
}

export interface Data {
  custId: number;
  name: string;
  mobileNo: string;
  password: string;
  role?: string;
}

export interface User {
  _id: string;
  fullname: string;
  email: string;
  password: string;
  orders: any[];
  wishLists: any[];
  isAdmin: boolean;
  hasShippingAddress: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}
