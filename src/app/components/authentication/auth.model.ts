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
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginFormData {
  UserName: string;
  UserPassword: string;
}

export interface RegisterFormData {
  CustId: string;
  Name: string;
  MobileNo: number;
  Password: string;
}
