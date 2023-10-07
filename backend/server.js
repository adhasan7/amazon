// import express from "express";
// import data from "./data.js";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import seedRouter from "./routes/seedRoutes.js";

// dotenv.config();
// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// // test
// const app = express();

// app.use("api/seed", seedRouter);
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });
// app.get("/api/products/slug/:slug", (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });
// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });

// app.get("/", (req, res) => {
//   res.send("Baris saya");
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`serve at http://localhost:${port}`);
// });

// import data from "./data.js";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import seedRouter from "./routes/seedRoutes.js";
// // import productRouter from "./routes/productRoutes.js";

// dotenv.config();

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const app = express();

// app.use("/api/seed", seedRouter);
// // app.use("/api/products", productRouter);

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`serve at http://localhost:${port}`);
// });

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
// import productRouter from "./routes/productRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.error(err.message); // Menggunakan console.error untuk pesan kesalahan
  });

const app = express();

app.use("/api/seed", seedRouter);
// app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
