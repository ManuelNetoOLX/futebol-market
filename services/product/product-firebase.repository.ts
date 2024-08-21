import RealtimeDatabaseHttpClient from "@/core/realtime-database-http.client";
import { IProductRepository } from "./product.repository";
import { Product } from "@/types/product.type";

const API_URL = "products";

export default function createProductFirebaseRepository(): IProductRepository {
  const realtimeDB = RealtimeDatabaseHttpClient();

  async function findById(id: string): Promise<Product | null> {
    try {
      return await realtimeDB.get(`${API_URL}/${id}`);
    } catch (error) {
      console.error("An error occurred while fetching the product:", error);
      throw error;
    }
  }

  async function getProducts(): Promise<Product[]> {
    try {
      const products = await realtimeDB.get(API_URL);
      return Object.keys(products).map((key) => ({
        ...products[key],
        id: key,
      }));
    } catch (error) {
      console.error("An error occurred while fetching the products:", error);
      throw error;
    }
  }

  return {
    findById,
    getProducts,
  };
}
