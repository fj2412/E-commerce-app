import express from "express";
import { createProduct, getProductbyId, getProducts } from "../controllers/productController.js";
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductbyId)

export default router;