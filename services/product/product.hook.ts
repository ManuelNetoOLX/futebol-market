import ProductFirebaseRepository from "@/services/product/product-firebase.repository";
import { ProductService } from "@/services/product/product.service";
import { TProductService } from "@/types/product-service.type";
import { Product } from "@/types/product.type";
import { useCallback, useState } from "react";

export const useProductService = (): TProductService => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const productRepository = ProductFirebaseRepository();
  const productservice = new ProductService(productRepository);

  const handleError = (error: unknown) => {
    console.error("An error occurred:", error);
    setError(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
    setLoading(false);
  };

  const findById = useCallback(async (id: string): Promise<Product | null> => {
    setLoading(true);
    setError(null);
    try {
      const product = await productservice.findById(id);
      setLoading(false);
      return product;
    } catch (err) {
      handleError(err);
      return null;
    }
  }, []);

  const getProducts = useCallback(async (): Promise<Product[]> => {
    setLoading(true);
    setError(null);
    try {
      const products = await productservice.getProducts();
      setLoading(false);
      return products;
    } catch (err) {
      handleError(err);
      return [];
    }
  }, []);

  return {
    findById,
    getProducts,
    loading,
    error,
  };
};
