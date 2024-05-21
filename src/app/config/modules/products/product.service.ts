import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (productData: Product) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
    const result = await ProductModel.find()
    return result;
}

export const productService = {
  createProductIntoDB,
  getAllProductFromDB
};
