import * as MONGOOSE from 'mongoose';

export type ProductDocument = MONGOOSE.Document & {
  id: string,
  name: string,
  description: string,
  amount: string,
  imageUrl: string,
  created_at: Date,
  updated_at: Date
};

export type IProduct = {
  id: string | null,
  name: string | null,
  description: string | null,
  amount: string | null,
  imageUrl: string | null,
  created_at?: Date,
  updated_at?: Date
};

const productSchema = new MONGOOSE.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String, default: ''},
  description: { type: String, default: '' },
  amount: { type: String, default: ''},
  imageUrl:  { type: String, default: ''},
  created_at: {type: Date, default: Date.now()},
  updatedat_: {type: Date, default: Date.now()}
});


const Product = MONGOOSE.model<ProductDocument>('Product', productSchema);

export default Product;