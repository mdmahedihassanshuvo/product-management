import { Error } from "mongoose";
import { Order, Product } from "./product.interface";
import { OrderModel, ProductModel } from "./product.model";

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

const updateProductFromDB = async (id: string, productData: Product) => {
  const result = await ProductModel.findOneAndUpdate({ id }, productData, {
    new: true,
  });
  return result;
};

const deleteOneProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ id });
  return result;
};

const getProductsByUsingNameIntoDB = async (productName: string) => {
  const result = await ProductModel.find({
    name: { $regex: productName, $options: "i" },
  });
  return result;
};

const createOrderIntoDB = async (orderData: Order) => {
  const product = await ProductModel.findOne({ id: orderData.productId });

  if (!product) {
    throw new Error("product not found");
  }

  if (product.inventory.quantity < orderData.quantity) {
    throw new Error("Not enought quantity in inventory");
  }

  if (product.price * orderData.quantity != orderData.price) {
    throw new Error("please enter the exect amount: product price * quantity");
  }

  product.inventory.quantity -= orderData.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  const result = await OrderModel.create(orderData);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrderByEmailFromDB = async (userEmail: string) => {
  const result = await OrderModel.find({ email: userEmail });
  return result;
};

export const productService = {
  createProductIntoDB,
  getAllProductFromDB,
  getOneProductFromDB,
  updateProductFromDB,
  deleteOneProductFromDB,
  getProductsByUsingNameIntoDB,
  createOrderIntoDB,
  getAllOrdersFromDB,
  getOrderByEmailFromDB,
};
