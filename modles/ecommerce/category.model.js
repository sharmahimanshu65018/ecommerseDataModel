import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      repured: true,
    },
  },
  { timstamps: true }
);

export const Category = mongoose.model('Category', categorySchema);
