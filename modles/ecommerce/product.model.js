import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    decription: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timstamps: true }
);

export const Product = mongoose.model('Product', productSchema);
