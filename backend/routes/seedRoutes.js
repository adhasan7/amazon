// import express from "express";
// import Product from "../models/productModel.js";
// import data from "../data.js";

// const seedRouter = express.Router();

// seedRouter.get("/", async (req, res) => {
//   await Product.remove({});
//   const createProducts = await Product.insertMany(data.products);
//   res.send({ createProducts });
// });
// export default seedRouter;

//=======******==============

// import express from "express";
// import Product from "../models/productModel.js";
// import data from "../data.js";

// const seedRouter = express.Router();

// seedRouter.get("/", async (req, res) => {
//   // await Product.remove({});

//   const createdProducts = await Product.insertMany(data.products);
//   res.send({ createdProducts });
// });
// export default seedRouter;

//=========********=============

import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  res.send(data);
  console.log(data);
  try {
    // Hapus semua produk yang ada (opsional)
    await Product.deleteMany({});

    // Memasukkan data dummy ke koleksi produk
    const createdProducts = await Product.insertMany(data.products);

    res
      .status(200)
      .json({ message: "Data dummy berhasil dimasukkan", createdProducts });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan dalam memasukkan data dummy",
      error: error.message,
    });
  }
});

export default seedRouter;
