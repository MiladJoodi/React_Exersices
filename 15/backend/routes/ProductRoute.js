import express from "express";
import { deleteProduct, getProducts, saveProduct, singleProduct, updateProduct } from "../controllers/ProductController.js";

const router = express.Router();


router.get("/products", getProducts);
router.post("/products", saveProduct);
router.get("/products/:id", singleProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);


export default router;