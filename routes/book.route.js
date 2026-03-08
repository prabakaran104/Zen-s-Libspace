import express from "express";
import { verifyToken } from "../middlewares/verify_token.js";
import bookController from "../controller/bookController.js";

const bookRouter = express.Router();

bookRouter.post("/addbook", verifyToken, bookController.addBook);

bookRouter.get("/getBooks", verifyToken, bookController.getAllBooks);

bookRouter.delete("/deleteBook/:bookId", verifyToken, bookController.deleteBook);

bookRouter.put("/:bookId", verifyToken, bookController.updateBook);

bookRouter.get("/:bookId", verifyToken, bookController.getBookById);



export default bookRouter