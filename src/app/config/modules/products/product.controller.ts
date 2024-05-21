import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productService.createProductIntoDB(product);
    res.status(200).json({
      success: true,
      message: "create product successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: "Retrieved all product successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productController = {
  createProduct,
  getAllProducts
};
