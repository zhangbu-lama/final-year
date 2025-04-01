import express from "express";
import { bookTrekkingPackage } from '../controllers/bookingController.js';

const router = express.Router();

router.post("/book-trekking-package", bookTrekkingPackage);

export default router;
