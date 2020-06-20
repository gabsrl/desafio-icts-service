import Mongoose from 'mongoose';

let stringConnection;
process.env.NODE_ENV  === 'PROD' ?
  stringConnection = process.env.STRING_CONNECTION_DB :
  stringConnection = 'mongodb://localhost/desafio-icts' ;


Mongoose.Promise = global.Promise;
Mongoose.connect(stringConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});





export default Mongoose;
