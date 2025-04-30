require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const usuariosRouter = require('./routes/usuarios');
const livrosRouter = require('./routes/livros');

// Middleware para receber dados dos formulários e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Rotas
app.use('/usuarios', usuariosRouter);
app.use('/livros', livrosRouter);
// Redirecionamento da raiz para a criação de usuário
app.get('/', (req, res) => {
  res.render('index');
});


// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
