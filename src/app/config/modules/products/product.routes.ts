import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/", productController.getAllProducts)
router.get("/:productId", productController.getOneProductFromDB)
router.put("/products/:productId", productController.updateProduct)

export const productRouter = router;
