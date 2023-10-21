import express from "express";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: { $eq: req.params.slug } });

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

// productRouter.post("/", async (req, res) => {
//   const product = await Product.create({
//     brand: "adidas",
//     countInStock: "200",
//     description: "is good product",
//     name: "clothes",
//     category: "baju",
//     createdAt: "",
//     image: "",
//   });
//   res.send(product);
// });
export default productRouter;
