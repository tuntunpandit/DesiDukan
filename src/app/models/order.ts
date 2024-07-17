export interface Order {
  _id?: string;
  user: User;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress2;
  orderNumber: string;
  paymentStatus: string;
  paymentMethod: string;
  totalPrice: number;
  currency: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  shippingAddress: ShippingAddress;
  _id?: string;
  fullname: string;
  email: string;
  password: string;
  orders: string[];
  wishLists: any[];
  isAdmin: boolean;
  hasShippingAddress: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  country: string;
}

export interface OrderItem {
  _id?: string;
  name: string;
  qty: number;
  price: number;
  description: string;
}

export interface ShippingAddress2 {
  firstname: string;
  postalAddress: string;
}
