const { Router } = require('express');
const UsuarioController = require('../controllers/Usuario');

const router = Router();

router.post('/usuarios', UsuarioController.gravarUsuario);
  // .get('/usuarios/:id', () => null))
  // .get('/usuarios/', () => null))
  // .put('/usuarios', () => null))
  // .delete('/usuarios/:id', () => null))

module.exports = router;
