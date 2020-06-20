const  Mongoose = require('../Database');

const ProductSchema = new Mongoose.Schema({
  cod: Number,
  name: String,
  price: Number,
  category: String,
  status: String,
  description: String,
  ammount: Number,
});

module.exports =  Mongoose.model('Product', ProductSchema, 'Product');
