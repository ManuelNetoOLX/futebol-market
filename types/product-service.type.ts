import { Product } from "./product.type";

export type TProductService = {
  findById: (id: string) => Promise<Product | null>;
  getProducts: () => Promise<Product[]>;
  loading: boolean;
  error: string | null;
};
