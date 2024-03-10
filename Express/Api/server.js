import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import userRouter from "./router/user.js";
import { postRouter } from "./router/post.js";
import bodyParser from "express";

const app = express();

//Creating Config file
config({ path: ".env" });

app.use(bodyParser.json());

// userRouter
app.use("/api", userRouter);

// postRouter
app.use("/api", postRouter);

//DB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Product_Api",
  })
  .then(() => console.log("MongoDB is Connected..!"));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port${port}`));
