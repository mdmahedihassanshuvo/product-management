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

const getOneProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // console.log(productId);
    const result = await productService.getOneProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Retrieved one product successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    const result = await productService.updateProductFromDB(productId, product);
    res.status(200).json({
      success: true,
      message: "update product successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
};

const deleteOneProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.deleteOneProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "delete product successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProductByUsingName = async (req: Request, res: Response) => {
  try {
    const searchTerm = req?.query?.searchTerm as string;
    console.log(searchTerm);
    const result = await productService.getProductsByUsingNameIntoDB(
      searchTerm
    );
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
  getAllProducts,
  getOneProductFromDB,
  updateProduct,
  deleteOneProduct,
  getProductByUsingName,
};
