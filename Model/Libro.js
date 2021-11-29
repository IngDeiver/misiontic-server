const  mongoose = require('mongoose');
const { Schema } = mongoose;

const LibroSchema = new Schema({
  titulo:  String, 
  categoria: String,
  numPaginas:   Number,
  isbn: String,
  autor: String,
  editorial: String
});

const Libro = mongoose.model('Libro', LibroSchema);
module.exports = Libro