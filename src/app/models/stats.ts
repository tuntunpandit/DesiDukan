export interface Stat {
  success: boolean;
  message: string;
  orders: Order[];
  saleToday: any[];
}

export interface Order {
  _id: any;
  minimumSale: number;
  totalSales: number;
  maxSale: number;
  avgSale: number;
}
