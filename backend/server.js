import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import data from "./data.js"; // Pastikan berkas data.js ada di lokasi yang benar
import seedRouter from "./routes/seedRoutes.js"; // Pastikan berkas seedRoutes.js ada di lokasi yang benar
import productRouter from "./routes/productRoutes.js"; // Pastikan berkas productRoutes.js ada di lokasi yang benar

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

// Rute-rute Anda di sini
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
