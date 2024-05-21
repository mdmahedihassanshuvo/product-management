import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getOneProductFromDB);
router.put("/products/:productId", productController.updateProduct);
router.delete("/products/:productId", productController.deleteOneProduct);
router.get("/products/search", productController.getProductByUsingName);

router.post("/orders", productController.createOrder);
router.get("/v1/allOrders", productController.getAllOrders);

export const productRouter = router;
