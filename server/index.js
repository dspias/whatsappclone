import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/AuthRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log("server started...");
});
