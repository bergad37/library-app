import express from "express";
import bookControllers from "../controllers/booksController.js";



const router = express.Router();


router.post("/", bookControllers.createNewBook);
router.get("/", bookControllers.getAllBooks);
router.get("/:id", bookControllers.getOneBook);
router.put("/:id", bookControllers.editBookName);
router.delete("/:id", bookControllers.deletedBook);



export default router;