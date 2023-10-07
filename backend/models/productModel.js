// import mongose from "mongoose";

// const productSchema = new mongose.Schema(
//   {
//     name: { type: String, required: true, unique: true },
//     slug: { type: String, required: true, unique: true },
//     image: { type: String, require: true },
//     brand: { type: String, required: true },
//     category: { type: String, required: true },
//     desctiption: { type: String, required: true },
//     price: { type: Number, required: true },
//     countInStock: { type: Number, required: true },
//     reting: { type: Number, required: true },
//     numReviews: { type: Number, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Product = mongose.model("Product", productSchema);
// export default Product;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
