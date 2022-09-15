const server = require('./src/app');
const { porta } = require('./src/config/config.json');

server.listen(porta, () => {
  console.log(`Servidor Rodando e disponível na porta ${porta}.`);
})