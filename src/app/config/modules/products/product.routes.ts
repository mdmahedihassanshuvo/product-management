import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getOneProductFromDB);
router.put("/products/:productId", productController.updateProduct);
router.delete("/products/:productId", productController.deleteOneProduct);

router.post("/orders", productController.createOrder);
router.get("/orders", productController.getAllOrders);

export const productRouter = router;
