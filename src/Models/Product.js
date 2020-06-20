import Mongoose from '../Database';

const ProductSchema = new Mongoose.Schema({
  cod: Number,
  name: String,
  price: Number,
  category: String,
  status: String,
  description: String,
  ammount: Number,
});

export default Mongoose.model('Product', ProductSchema, 'Product');
