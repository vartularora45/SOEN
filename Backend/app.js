import express, { urlencoded } from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js"
import dotenv from "dotenv";
import connectToDB from "./db/db.js";
import blogRouter from "./routes/blog.routes.js";
dotenv.config();


const app = express()
app.use(express.json());
connectToDB()
app.use(
  cors({
    origin: ["http://localhost:5173","https://4jkrlgmp-5173.inc1.devtunnels.ms/"],

    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use(express.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    res.send("Hello from the backend!");
})



export default app;