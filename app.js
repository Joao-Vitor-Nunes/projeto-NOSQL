require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Importação de rotas
const usuariosRouter = require('./routes/usuarios');
const livrosRouter = require('./routes/livros');
const autorRoutes = require('./routes/autorRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const generoRoutes = require('./routes/generoRoutes');

// Middleware para receber dados dos formulários e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Rotas principais
app.use('/usuarios', usuariosRouter);
app.use('/livros', livrosRouter);
app.use('/autores', autorRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/generos', generoRoutes);

// Página inicial
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
