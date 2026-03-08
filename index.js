
import express from "express";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";
import userRouter from "./routes/user.route.js";
import bookRouter from "./routes/book.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", bookRouter);

const PORT = process.env.PORT || 5000;

// Connect DB first, then start server
connectDb();

app.get("/", (req,res)=>{
 res.send("Server running successfully");
});

app.use("/api/authuser", userRouter);
app.use("/api/book", bookRouter);

app.listen(PORT, () => {
  console.log(`Our server is working at PORT :${PORT}`);
});