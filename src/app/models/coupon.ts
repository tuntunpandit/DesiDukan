export interface Coupon {
  _id?: string;
  code: string;
  startDate: string;
  endDate: string;
  discount: number;
  user: string;
  createdAt: string;
  updatedAt: string;
  isExpired: boolean;
  daysLeft: string;
  id: string;
}
