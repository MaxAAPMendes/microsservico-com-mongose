const bodyParser = require('body-parser');

const rotas = require('./usuarios');

const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true} ));

  app.use(rotas);

  app.use(morgan('combined'));
  app.use(helmet());
  app.use(cors());

  app.get('/', (req, res) => {
    res.status(201).json({
      status: 'sucesso',
      mensagem: 'Você está na rota principal!',
    });
  })
}
