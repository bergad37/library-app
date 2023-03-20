import express from "express";
import bookRoutes from "./bookRoutes.js";

const router = express.Router();
router.use("/books", bookRoutes);
export default router;