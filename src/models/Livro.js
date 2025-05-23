import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
        type: String, required:
      [true, "O titulo do livro é obrigatorio"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'autores', 
      required: [true, "O autor é obrigatorio"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatorio"],
    },
    numeroPaginas: {
      type: Number, 
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000
        },
        message: "O numero de paginas deve estar entre 5 e 5000 | Valor fornecido: {VALUE}"
      }
      }
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;

// min: [5, "O numero de paginas deve estar entre 5 e 5000 | Valor fornecido: {VALUE}"],
//       max: [5000, "O numero de paginas deve estar entre 5 e 5000 | Valor fornecido: {VALUE}"],