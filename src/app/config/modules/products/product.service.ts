import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (productData: Product) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getOneProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};

const updateProductFromDB = async (
  id: string,
  productData: Product
) => {
  const result = await ProductModel.findOneAndUpdate({ id }, productData, {
    new: true,
  });
  return result;
};

export const productService = {
  createProductIntoDB,
  getAllProductFromDB,
  getOneProductFromDB,
  updateProductFromDB,
};
