const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ContatoPessoas = new Schema({
  id: ObjectId,
  nome: String,
  email: String
});

const productModel = mongoose.model('products', ContatoPessoas);

module.exports = productModel; 
