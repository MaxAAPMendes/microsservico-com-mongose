const mongoose = require('mongoose');
module.exports = () => {
  const urlDatase = "mongodb+srv://adminRoot:<password>@clustermax.jrdjq.mongodb.net/dbusers?retryWrites=true&w=majority";
  
  mongoose.connect(urlDatase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const SchemaUsers = new mongoose.Schema({
    nomeUsuario: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    status: {type: String, required: true},
    dataCriacao: {type: Date, default: Date.now}
  });
  
  const ModelUsuario = mongoose.model('usuarios', SchemaUsers);
  return {
    ModelUsuario
  };
}
