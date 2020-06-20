import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost/desafio-icts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

export default Mongoose;
