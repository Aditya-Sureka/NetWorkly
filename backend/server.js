import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads"));

const start = async () => {
  const connectDB = await mongoose.connect(
    "mongodb+srv://adityasureka7781:hd99lMgnxvfb9gJY@cluster0.c0geaf2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  app.listen(9090, () => {
    console.log("Server is running on port 9090");
  });
};

start();
