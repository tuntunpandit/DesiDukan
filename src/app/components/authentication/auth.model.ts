export interface LoginData {
  jwt: string;
  user: User;
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
  identifier: string;
  password: string;
}

export interface RegisterFormData {
  CustId: string;
  Name: string;
  MobileNo: number;
  Password: string;
}
