const { model } = require('mongoose');
const modelUsuario = require('../model');

class Usuario {

  static async gravarUsuario(req, res) {
    const { ModelUsuario } = modelUsuario();
    try {
      const user = new ModelUsuario(req.body);
      user.save()
        .then((resultado) => {
          res.status(201).json(resultado)
        })

    } catch (error) {
      return res.status(500).json({
        status: 'error',
        mensagem: 'erro na gravacao'
      })
    }
  }

};

module.exports = Usuario;