export interface Stat {
  success: boolean;
  message: string;
  orders: StatOrder[];
  saleToday: any[];
}

export interface StatOrder {
  _id?: any;
  minimumSale: number;
  totalSales: number;
  maxSale: number;
  avgSale: number;
}
