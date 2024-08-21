import { Product } from "@/types/product.type";

export interface IProductRepository {
  findById(id: string): Promise<Product | null>;
  getProducts(): Promise<Product[]>;
}
