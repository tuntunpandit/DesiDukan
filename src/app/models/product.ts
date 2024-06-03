export interface Product {
  _id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  sizes: string[];
  colors: string[];
  user: string;
  images: string[];
  reviews: Review[];
  price: number;
  totalQty: number;
  totalSold: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  qtyLeft: number;
  totalReviews: number;
  averageRating: string;
  id: string;
}

export interface Review {
  _id: string;
  user: string;
  product: string;
  message: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
