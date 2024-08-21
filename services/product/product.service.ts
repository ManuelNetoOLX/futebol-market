import { Product } from "@/types/product.type";
import { IProductRepository } from "./product.repository";

export class ProductService {
  constructor(private productRepository: IProductRepository) {}

  async findById(id: string): Promise<Product | null> {
    try {
      return await this.productRepository.findById(id);
    } catch (error) {
      console.error("An error occurred while fetching the product:", error);
      throw error;
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      const products = await this.productRepository.getProducts();
      return products;
    } catch (error) {
      console.error("An error occurred while fetching the products:", error);
      throw error;
    }
  }
}
