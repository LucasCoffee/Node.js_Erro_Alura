import mongoose from "mongoose";

// definir um validador pra todos os campos do tipo string atraves da propriedade validate
mongoose.Schema.Types.String.set("validate", {
    validator: (valor) => valor !== "", 
    message: ({path}) => `O campo ${path} em branco foi fornecido`
})