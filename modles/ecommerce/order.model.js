import mongoose from 'mongoose';
const orderItemSchema = new nongoose.Schema({
  ProductID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    custmor: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
    orderItems: {
      types: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Delivered'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);
export const Order = mongoose.Model('Order', orderSchema);
