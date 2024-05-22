import { Request, Response } from "express";
import { productService } from "./product.service";
import { joiValidationSchema } from "./product.joiValidation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    // console.log(product);

    // create a schema validation with joi
    const { error, value } =
      joiValidationSchema.productJoiSchema.validate(product);

    const result = await productService.createProductIntoDB(value);

    // Joi error
    if (error) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
        error: error.details,
      });
    }

    res.status(200).json({
      success: true,
      message: "create product successfully",
      data: result,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req?.query?.searchTerm as string;

    if (searchTerm) {
      const result = await productService.getProductsByUsingNameIntoDB(
        searchTerm
      );
      res.status(200).json({
        success: true,
        message: "Retrieved product successfully",
        data: result,
      });
    }

    if (!searchTerm) {
      const result = await productService.getAllProductFromDB();
      res.status(200).json({
        success: true,
        message: "Retrieved all product successfully",
        data: result,
      });
    }
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    // create a schema validation with joi
    const { error, value } = joiValidationSchema.orderJoiSchema.validate(order);
    const result = await productService.createOrderIntoDB(value);

    // Joi error
    if (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.details,
      });
    }

    res.status(200).json({
      success: true,
      message: "create order successfully",
      data: result,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query?.email as string;

    if (email) {
      const result = await productService.getOrderByEmailFromDB(email);
      res.status(200).json({
        success: true,
        message: "Retrieved all orders successfully",
        data: result,
      });
    }

    if (!email) {
      const result = await productService.getAllOrdersFromDB();
      res.status(200).json({
        success: true,
        message: "Retrieved all orders successfully",
        data: result,
      });
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(5000).json({
      success: false,
      error: error.message,
    });
  }
};

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query?.email as string;
    const result = await productService.getOrderByEmailFromDB(email);
    res.status(200).json({
      success: true,
      message: "Retrieved all orders successfully",
      data: result,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(5000).json({
      success: false,
      error: error.message,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getOneProductFromDB,
  updateProduct,
  deleteOneProduct,
  createOrder,
  getAllOrders,
  getOrderByEmail,
};
